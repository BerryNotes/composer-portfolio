"use client";

import { useEffect, useMemo, useState } from "react";
import type { CatalogAlbum } from "@/lib/catalog";

const STORAGE_KEY = "curate-featured-v1";

export function Curator({ catalog }: { catalog: CatalogAlbum[] }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Load saved picks once on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setLoaded(true);
  }, []);

  // Persist on every change (after the initial load).
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      /* ignore */
    }
  }, [checked, loaded]);

  const titleById = useMemo(() => {
    const map: Record<string, { album: string; title: string }> = {};
    for (const a of catalog) {
      for (const t of a.tracks) map[t.id] = { album: a.album, title: t.title };
    }
    return map;
  }, [catalog]);

  const selectedIds = Object.keys(checked).filter((id) => checked[id]);
  const count = selectedIds.length;

  const toggle = (id: string) =>
    setChecked((c) => ({ ...c, [id]: !c[id] }));

  const toggleAlbum = (album: CatalogAlbum, value: boolean) =>
    setChecked((c) => {
      const next = { ...c };
      for (const t of album.tracks) next[t.id] = value;
      return next;
    });

  const clearAll = () => setChecked({});

  const picksText = useMemo(() => {
    if (count === 0) return "";
    const byAlbum = new Map<string, string[]>();
    for (const id of selectedIds) {
      const info = titleById[id];
      if (!info) continue;
      if (!byAlbum.has(info.album)) byAlbum.set(info.album, []);
      byAlbum.get(info.album)!.push(info.title);
    }
    const lines = [`=== FEATURED PICKS (${count}) ===`];
    for (const a of catalog) {
      const picks = byAlbum.get(a.album);
      if (picks && picks.length) {
        lines.push(`[${a.album}]`);
        for (const p of picks) lines.push(`  • ${p}`);
      }
    }
    return lines.join("\n");
  }, [selectedIds, titleById, catalog, count]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(picksText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — the textarea below is the fallback */
    }
  };

  return (
    <div className="pb-28">
      <div className="space-y-10">
        {catalog.map((album) => {
          const albumCount = album.tracks.filter((t) => checked[t.id]).length;
          const allOn = albumCount === album.tracks.length;
          return (
            <section key={album.albumId}>
              <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-2 mb-3">
                <h2 className="font-display text-2xl tracking-tight">
                  {album.album}
                  <span className="ml-3 text-sm text-foreground/40 tabular-nums">
                    {albumCount}/{album.tracks.length}
                  </span>
                </h2>
                <button
                  type="button"
                  onClick={() => toggleAlbum(album, !allOn)}
                  className="shrink-0 text-xs uppercase tracking-[0.15em] text-foreground/50 hover:text-[var(--teal)] transition"
                >
                  {allOn ? "Clear album" : "Select all"}
                </button>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8">
                {album.tracks.map((t) => (
                  <li key={t.id}>
                    <label className="flex items-center gap-3 py-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={!!checked[t.id]}
                        onChange={() => toggle(t.id)}
                        className="h-4 w-4 shrink-0 accent-[var(--teal)]"
                      />
                      <span
                        className={`flex-1 text-sm transition ${
                          checked[t.id]
                            ? "text-foreground"
                            : "text-foreground/70 group-hover:text-foreground"
                        }`}
                      >
                        {t.title}
                      </span>
                      <a
                        href={`https://open.spotify.com/track/${t.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="shrink-0 text-xs text-foreground/30 hover:text-[var(--teal)] transition"
                        aria-label={`Open ${t.title} on Spotify`}
                      >
                        &#8599;
                      </a>
                    </label>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      {/* Read-only copy of the picks, so you can always see / hand-copy them */}
      {count > 0 && (
        <div className="mt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-2">
            Your picks (this is what gets copied)
          </p>
          <textarea
            readOnly
            value={picksText}
            rows={Math.min(14, count + 3)}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-sm text-foreground/80 font-mono"
          />
        </div>
      )}

      {/* Sticky action bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between gap-4">
          <span className="text-sm text-foreground/70 tabular-nums">
            {count} selected
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={clearAll}
              disabled={count === 0}
              className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition disabled:opacity-40"
            >
              Clear all
            </button>
            <button
              type="button"
              onClick={copy}
              disabled={count === 0}
              className="rounded-full bg-[var(--teal)] text-[#0b0b0d] px-5 py-2 text-sm font-medium hover:opacity-90 transition disabled:opacity-40"
            >
              {copied ? "Copied!" : "Copy my picks"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
