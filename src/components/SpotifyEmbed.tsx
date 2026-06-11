"use client";

// Spotify embeds via the official iFrame API (not raw iframes), which gives
// us controllers with play/pause — so Spotify and the hosted player can
// pause each other instead of talking over each other.
//
// Players render immediately (no tap-to-load), but are created lazily as
// they approach the viewport and one-at-a-time through a small queue, so the
// page never bursts 15 simultaneous requests at Spotify's edge (which used
// to return "upstream request timeout").

import { useEffect, useRef } from "react";

type Props = {
  type: "album" | "track" | "playlist" | "artist";
  id: string;
  compact?: boolean; // legacy prop, all embeds are slim now
  height?: number;
  title?: string;
};

/* eslint-disable @typescript-eslint/no-explicit-any */

let apiPromise: Promise<any> | null = null;
function getSpotifyApi(): Promise<any> {
  if (!apiPromise) {
    apiPromise = new Promise((resolve) => {
      (window as any).onSpotifyIframeApiReady = (api: any) => resolve(api);
      const s = document.createElement("script");
      s.src = "https://open.spotify.com/embed/iframe-api/v1";
      s.async = true;
      document.body.appendChild(s);
    });
  }
  return apiPromise;
}

// Serialize controller creation so embeds load one after another.
let creationChain: Promise<void> = Promise.resolve();

// Live controllers, so any player starting can pause all the others.
const controllers = new Set<any>();

function pauseAllSpotify(except?: any) {
  controllers.forEach((c) => {
    if (c !== except) {
      try {
        c.pause();
      } catch {
        /* ignore */
      }
    }
  });
}

// The hosted audio player dispatches this when it starts playing.
if (typeof window !== "undefined") {
  window.addEventListener("pv-hosted-playing", () => pauseAllSpotify());
}

export function SpotifyEmbed({ type, id, height = 80, title }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !id || id.startsWith("REPLACE")) return;

    let controller: any = null;
    let cancelled = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        creationChain = creationChain.then(async () => {
          if (cancelled) return;
          const api = await getSpotifyApi();
          if (cancelled) return;
          const inner = document.createElement("div");
          host.appendChild(inner);
          await new Promise<void>((done) => {
            api.createController(
              inner,
              { uri: `spotify:${type}:${id}`, width: "100%", height },
              (c: any) => {
                controller = c;
                controllers.add(c);
                c.addListener("playback_update", (e: any) => {
                  if (e?.data && e.data.isPaused === false) {
                    // Spotify started: silence the hosted player and any
                    // other Spotify embeds.
                    window.dispatchEvent(new CustomEvent("pv-spotify-playing"));
                    pauseAllSpotify(c);
                  }
                });
                done();
              }
            );
          });
          // Small stagger between creations.
          await new Promise((r) => setTimeout(r, 150));
        });
      },
      { rootMargin: "250px" }
    );
    io.observe(host);

    return () => {
      cancelled = true;
      io.disconnect();
      if (controller) {
        controllers.delete(controller);
        try {
          controller.destroy();
        } catch {
          /* ignore */
        }
      }
    };
  }, [type, id, height]);

  if (!id || id.startsWith("REPLACE")) {
    return null;
  }

  return (
    <div
      ref={hostRef}
      style={{ height }}
      aria-label={title ? `Spotify: ${title}` : `Spotify ${type}`}
      className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--muted-bg)]"
    />
  );
}
