"use client";

import { useEffect, useRef, useState } from "react";
import type { Track } from "@/lib/projects";

export function AudioPlayer({ tracks }: { tracks: Track[] }) {
  const playable = tracks.filter((t) => t.src);

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

function Player({ tracks }: { tracks: Track[] }) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setProgress(audio.currentTime);
    const onDur = () => setDuration(audio.duration || 0);
    const onEnd = () => {
      if (current < tracks.length - 1) setCurrent(current + 1);
      else setPlaying(false);
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onDur);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onDur);
      audio.removeEventListener("ended", onEnd);
    };
  }, [current, tracks.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) audio.play().catch(() => setPlaying(false));
    else audio.pause();
  }, [playing, current]);

  const fmt = (s: number) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const t = Number(e.target.value);
    audio.currentTime = t;
    setProgress(t);
  };

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] overflow-hidden">
      <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
        <button
          type="button"
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? "Pause" : "Play"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background hover:opacity-90 transition"
        >
          {playing ? (
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
            {tracks[current].title}
          </div>
          <div className="text-xs text-foreground/50 tabular-nums">
            {fmt(progress)} / {fmt(duration)}
          </div>
        </div>
      </div>
      <div className="px-4 py-2 border-b border-[var(--border)]">
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={progress}
          step={0.1}
          onChange={seek}
          className="w-full accent-foreground"
          aria-label="Seek"
        />
      </div>
      <ul className="divide-y divide-[var(--border)]">
        {tracks.map((t, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => {
                setCurrent(i);
                setPlaying(true);
              }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition hover:bg-[var(--muted-bg)] ${
                i === current ? "text-foreground" : "text-foreground/70"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="text-foreground/40 tabular-nums w-5 text-left">
                  {i === current && playing ? "▶" : String(i + 1).padStart(2, "0")}
                </span>
                <span>{t.title}</span>
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
      <audio ref={audioRef} src={tracks[current].src} preload="metadata" />
    </div>
  );
}
