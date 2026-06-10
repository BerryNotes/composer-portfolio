"use client";

// Global audio player. One <audio> element lives here, inside the root
// layout, so playback survives client-side navigation. Page-level
// AudioPlayer components dispatch into this context instead of owning
// their own audio elements, and the MiniPlayer popup appears whenever a
// track is active but no on-page player is showing it.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export type PlayerTrack = {
  title: string;
  src: string;
  duration?: string;
};

type PlayerContextValue = {
  queue: PlayerTrack[];
  index: number; // -1 = nothing loaded
  playing: boolean;
  progress: number;
  duration: number;
  playQueue: (queue: PlayerTrack[], index: number) => void;
  toggle: () => void;
  stop: () => void;
  seek: (t: number) => void;
  registerVisible: (id: string, srcs: string[]) => void;
  unregisterVisible: (id: string) => void;
  activeSrcVisible: boolean;
};

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function usePlayer(): PlayerContextValue {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used inside PlayerProvider");
  return ctx;
}

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [queue, setQueue] = useState<PlayerTrack[]>([]);
  const [index, setIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const queueRef = useRef(queue);
  queueRef.current = queue;

  // Registry of on-page players and the srcs they display, so the mini
  // player knows when to step aside.
  const visibleRef = useRef(new Map<string, string[]>());
  const [, setRegVersion] = useState(0);

  const registerVisible = useCallback((id: string, srcs: string[]) => {
    visibleRef.current.set(id, srcs);
    setRegVersion((v) => v + 1);
  }, []);

  const unregisterVisible = useCallback((id: string) => {
    visibleRef.current.delete(id);
    setRegVersion((v) => v + 1);
  }, []);

  // Audio element listeners (attached once).
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setProgress(a.currentTime);
    const onDur = () => setDuration(a.duration || 0);
    const onEnd = () => {
      const q = queueRef.current;
      setIndex((i) => {
        if (i + 1 < q.length) return i + 1;
        setPlaying(false);
        return i;
      });
    };
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onDur);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onDur);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  // Keep the element in sync with state.
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (index < 0) {
      a.pause();
      return;
    }
    const src = queue[index]?.src;
    if (src && !a.src.endsWith(src)) {
      a.src = src;
      setProgress(0);
      setDuration(0);
    }
    if (playing) a.play().catch(() => setPlaying(false));
    else a.pause();
  }, [index, queue, playing]);

  const playQueue = useCallback((q: PlayerTrack[], i: number) => {
    setQueue(q);
    setIndex(i);
    setPlaying(true);
  }, []);

  const toggle = useCallback(() => setPlaying((p) => !p), []);

  const stop = useCallback(() => {
    const a = audioRef.current;
    if (a) a.pause();
    setPlaying(false);
    setIndex(-1);
    setProgress(0);
    setDuration(0);
  }, []);

  const seek = useCallback((t: number) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = t;
    setProgress(t);
  }, []);

  const activeSrc = index >= 0 ? queue[index]?.src : undefined;
  let activeSrcVisible = false;
  if (activeSrc) {
    for (const srcs of visibleRef.current.values()) {
      if (srcs.includes(activeSrc)) {
        activeSrcVisible = true;
        break;
      }
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        queue,
        index,
        playing,
        progress,
        duration,
        playQueue,
        toggle,
        stop,
        seek,
        registerVisible,
        unregisterVisible,
        activeSrcVisible,
      }}
    >
      {children}
      <audio ref={audioRef} preload="none" />
    </PlayerContext.Provider>
  );
}

export function fmtTime(s: number): string {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

// The top-right popup. Shows whenever a track is loaded but no on-page
// player is displaying it (i.e. you played something, then navigated away).
export function MiniPlayer() {
  const { queue, index, playing, progress, duration, toggle, stop, seek, activeSrcVisible } =
    usePlayer();

  if (index < 0 || activeSrcVisible) return null;
  const track = queue[index];
  if (!track) return null;

  return (
    <div
      className="mini-pop fixed top-20 right-4 z-50 w-72 rounded-xl border border-[var(--border)] bg-[var(--card)]/95 backdrop-blur-md shadow-2xl p-3"
      role="region"
      aria-label="Now playing"
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background hover:opacity-90 transition"
        >
          {playing ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-medium">{track.title}</div>
          <div className="text-xs text-foreground/50 tabular-nums">
            {fmtTime(progress)} / {fmtTime(duration)}
          </div>
        </div>
        <button
          type="button"
          onClick={stop}
          aria-label="Close player"
          className="shrink-0 rounded-full p-1.5 text-foreground/50 hover:text-foreground transition"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <input
        type="range"
        min={0}
        max={duration || 0}
        value={progress}
        step={0.1}
        onChange={(e) => seek(Number(e.target.value))}
        className="mt-2 w-full accent-[var(--teal)]"
        aria-label="Seek"
      />
    </div>
  );
}
