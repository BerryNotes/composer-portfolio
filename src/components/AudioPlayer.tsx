"use client";

import { useEffect, useId, useMemo, useState } from "react";
import type { Track } from "@/lib/projects";
import { usePlayer, fmtTime, type PlayerTrack } from "@/components/Player";

// Stable per-track anchor id, e.g. "Lucid Dreaming" -> "lucid-dreaming".
// Used for shareable links like peter-vasilik.pages.dev/#lucid-dreaming.
export function trackSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function AudioPlayer({ tracks }: { tracks: Track[] }) {
  const playable = tracks.filter((t) => t.src) as PlayerTrack[];

  if (playable.length === 0) {
    return (
      <ul className="divide-y divide-[var(--border)] rounded-lg border border-[var(--border)] bg-[var(--card)]">
        {tracks.map((t, i) => (
          <li
            key={i}
            className="flex items-center justify-between px-4 py-3 text-sm"
          >
            <span className="text-foreground/80">
              <span className="text-foreground/40 tabular-nums mr-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              {t.title}
            </span>
            {t.duration && (
              <span className="text-foreground/40 tabular-nums">
                {t.duration}
              </span>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return <Player tracks={playable} />;
}

function Player({ tracks }: { tracks: PlayerTrack[] }) {
  const id = useId();
  const {
    queue,
    index,
    playing,
    progress,
    duration,
    playQueue,
    cueQueue,
    toggle,
    seek,
    registerVisible,
    unregisterVisible,
  } = usePlayer();

  const [flashIdx, setFlashIdx] = useState(-1);

  // Deep link: if the URL hash names one of these tracks, scroll to it, flash
  // it, and cue it up (paused, one tap from playing). Runs on load and on any
  // later hash change, so shared links work fresh or in-session.
  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout>;
    let flashTimer: ReturnType<typeof setTimeout>;
    const apply = () => {
      const hash = decodeURIComponent(window.location.hash.replace("#", ""));
      if (!hash) return;
      const i = tracks.findIndex((t) => trackSlug(t.title) === hash);
      if (i === -1) return;
      cueQueue(tracks, i);
      setFlashIdx(i);
      const el = document.getElementById(hash);
      scrollTimer = setTimeout(() => {
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);
      flashTimer = setTimeout(() => setFlashIdx(-1), 4000);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(flashTimer);
      window.removeEventListener("hashchange", apply);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Tell the global player which tracks this page is showing, so the
  // mini popup hides while this player is on screen.
  const srcsKey = useMemo(() => tracks.map((t) => t.src).join("|"), [tracks]);
  useEffect(() => {
    registerVisible(id, srcsKey.split("|"));
    return () => unregisterVisible(id);
  }, [id, srcsKey, registerVisible, unregisterVisible]);

  // Is the globally active track one of ours?
  const activeSrc = index >= 0 ? queue[index]?.src : undefined;
  const activeIdx = activeSrc
    ? tracks.findIndex((t) => t.src === activeSrc)
    : -1;
  const isActive = activeIdx >= 0;

  const shownIdx = isActive ? activeIdx : 0;
  const shownTrack = tracks[shownIdx];
  const shownPlaying = isActive && playing;
  const shownProgress = isActive ? progress : 0;
  const shownDuration = isActive ? duration : 0;

  const onMainButton = () => {
    if (isActive) toggle();
    else playQueue(tracks, 0);
  };

  const onRow = (i: number) => {
    if (isActive && i === activeIdx) toggle();
    else playQueue(tracks, i);
  };

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] overflow-hidden">
      <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
        <button
          type="button"
          onClick={onMainButton}
          aria-label={shownPlaying ? "Pause" : "Play"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background hover:opacity-90 transition"
        >
          {shownPlaying ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <div className="flex-1 min-w-0">
          <div className="truncate text-sm font-medium">
            {shownTrack.title}
          </div>
          <div className="text-xs text-foreground/50 tabular-nums">
            {fmtTime(shownProgress)} / {fmtTime(shownDuration)}
          </div>
        </div>
      </div>
      <div className="px-4 py-2 border-b border-[var(--border)]">
        <input
          type="range"
          min={0}
          max={shownDuration || 0}
          value={shownProgress}
          step={0.1}
          onChange={(e) => isActive && seek(Number(e.target.value))}
          className="w-full accent-foreground"
          aria-label="Seek"
        />
      </div>
      <ul className="divide-y divide-[var(--border)]">
        {tracks.map((t, i) => (
          <li
            key={i}
            id={trackSlug(t.title)}
            className={`scroll-mt-28 ${i === flashIdx ? "track-flash" : ""}`}
          >
            <button
              type="button"
              onClick={() => onRow(i)}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition hover:bg-[var(--muted-bg)] ${
                isActive && i === activeIdx
                  ? "text-foreground"
                  : "text-foreground/70"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="text-foreground/40 tabular-nums w-5 text-left">
                  {isActive && i === activeIdx && playing
                    ? "▶"
                    : String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-left">{t.title}</span>
              </span>
              {t.duration && (
                <span className="text-foreground/40 tabular-nums">
                  {t.duration}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
