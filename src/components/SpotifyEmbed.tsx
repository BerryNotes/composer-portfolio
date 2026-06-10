"use client";

// Lite Spotify embed. Loading 15 Spotify iframes at once makes their edge
// throttle and return "upstream request timeout", so each player renders as
// an instant local facade and the real iframe is only created on click.

import { useState } from "react";

type Props = {
  type: "album" | "track" | "playlist" | "artist";
  id: string;
  compact?: boolean;
  height?: number;
  title?: string;
};

export function SpotifyEmbed({ type, id, compact, height, title }: Props) {
  const [loaded, setLoaded] = useState(false);

  if (!id || id.startsWith("REPLACE")) {
    return null;
  }
  const h = height ?? (compact ? 152 : 352);
  const label = title ?? `Spotify ${type}`;

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
        aria-label={`Load Spotify player: ${label}`}
        style={{ height: h }}
        className="group flex w-full items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--muted-bg)] px-5 text-left transition hover:border-[#1DB954]"
      >
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1DB954] text-[#0b0b0d] transition group-hover:scale-105">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-medium text-foreground">
            {label}
          </span>
          <span className="block text-xs text-foreground/50">
            Play on Spotify — tap to load
          </span>
        </span>
      </button>
    );
  }

  return (
    <div
      className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--muted-bg)]"
      style={{ lineHeight: 0 }}
    >
      <iframe
        title={`Spotify ${type}`}
        src={`https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`}
        width="100%"
        height={h}
        style={{ height: h, display: "block", border: 0, background: "transparent" }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="eager"
      />
    </div>
  );
}
