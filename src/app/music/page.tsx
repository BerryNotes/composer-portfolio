import Image from "next/image";
import Link from "next/link";
import {
  FEATURED,
  RELEASES,
  ALBUM_EMBEDS,
  ACCENT_VARS,
  ACCENT_GLOW_VARS,
} from "@/lib/music";
import { SITE } from "@/lib/site";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";
import { Reveal } from "@/components/Reveal";
import { Waveform } from "@/components/Waveform";

export const metadata = { title: "Music" };

export default function MusicPage() {
  return (
    <div>
      {/* Hero — aurora backdrop + waveform */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <Image
          src="/aurora.jpg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover opacity-35"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/75 to-background"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Reveal>
            <div className="flex items-center gap-4 mb-5">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--teal)]">
                Listen
              </p>
              <Waveform bars={20} className="h-5" color="var(--teal)" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-5xl sm:text-6xl tracking-tight max-w-3xl">
              Press play.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
              Featured tracks by category are below — each one plays inline.
              The full albums and complete discography follow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured by category — playable */}
      <section className="border-b border-[var(--border)] relative">
        <div
          aria-hidden
          className="absolute inset-0 texture-dots opacity-40 pointer-events-none"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--rose)] mb-3">
              Featured
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-2">
              Start by sound.
            </h2>
            <p className="text-foreground/60 max-w-xl">
              Selected tracks from each side of the catalog. The labels reflect
              the sound, not strict genre. Hit play on any of them.
            </p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {FEATURED.map((cat, idx) => (
              <Reveal key={cat.key} delay={idx * 100}>
                <CategoryBlock cat={cat} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instruments photo band */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 grid gap-10 sm:grid-cols-12 sm:items-center">
          <Reveal className="sm:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-[var(--border)]">
              <Image
                src="/instruments.jpg"
                alt="A keyboard and acoustic guitar in lamplight"
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="sm:col-span-7 space-y-5">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--amber)]">
              How it gets made
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
              Written and recorded in-house.
            </h2>
            <p className="text-foreground/70 leading-relaxed max-w-lg">
              Most of the catalog begins on these two instruments — a keyboard
              and an acoustic guitar — then moves into the box for arrangement,
              synthesis, and mixing. Every release is self-produced end to end.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Full albums — playable */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--indigo)] mb-3">
              Albums
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
              Full records.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {ALBUM_EMBEDS.map((a, i) => (
              <Reveal key={a.spotifyAlbumId} delay={i * 100}>
                <SpotifyEmbed type="album" id={a.spotifyAlbumId} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Discography list */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--amber)] mb-3">
              Discography
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
              The complete catalog.
            </h2>
          </Reveal>

          <ul className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {RELEASES.map((r, i) => (
              <Reveal as="li" key={`${r.title}-${r.year}`} delay={i * 25}>
                <ReleaseRow release={r} index={i} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Everything */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <Reveal>
            <div className="flex items-center gap-4 mb-3">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--teal)]">
                Or simply listen
              </p>
              <Waveform bars={16} className="h-4" color="var(--rose)" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-8">
              The whole catalog, in one place.
            </h2>
            <SpotifyEmbed
              type="artist"
              id={SITE.spotifyArtistUrl.split("/").pop() || ""}
            />
            <p className="mt-6 text-sm text-foreground/50">
              Also available on{" "}
              <Link
                href="https://www.youtube.com/channel/UCkHfGiD8iH3_QfKJGruB44w"
                className="text-foreground/70 hover:text-[var(--teal)] underline-grow"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube as Berrynote
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function CategoryBlock({ cat }: { cat: (typeof FEATURED)[number] }) {
  const accent = ACCENT_VARS[cat.accent];
  const glow = ACCENT_GLOW_VARS[cat.accent];
  return (
    <div
      className="panel-grain rounded-2xl border border-[var(--border)] p-6 sm:p-8"
      style={{
        background: `radial-gradient(70% 120% at 0% 0%, ${glow}, transparent 70%), var(--card)`,
      }}
    >
      <div className="grid gap-6 sm:grid-cols-12">
        <div className="sm:col-span-4">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em]"
            style={{ borderColor: accent, color: accent }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: accent }}
            />
            {cat.label}
          </span>
          <p className="mt-5 text-foreground/70 leading-relaxed text-sm">
            {cat.blurb}
          </p>
        </div>
        <div className="sm:col-span-8 space-y-3">
          {cat.tracks.map((t) => (
            <SpotifyEmbed
              key={t.spotifyTrackId}
              type="track"
              id={t.spotifyTrackId}
              compact
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ReleaseRow({
  release,
  index,
}: {
  release: (typeof RELEASES)[number];
  index: number;
}) {
  const kindAccent =
    release.kind === "Album"
      ? "var(--amber)"
      : release.kind === "EP"
      ? "var(--rose)"
      : "var(--indigo)";
  const inner = (
    <div className="grid grid-cols-12 gap-4 items-baseline py-5 group hover:bg-[var(--muted-bg)] -mx-6 px-6 transition relative">
      <span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-px origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"
        style={{ background: kindAccent }}
      />
      <span className="col-span-2 sm:col-span-1 text-xs text-foreground/40 tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="col-span-6 sm:col-span-6 font-display text-xl tracking-tight transition-transform duration-500 group-hover:translate-x-1">
        {release.title}
      </span>
      <span
        className="hidden sm:block sm:col-span-2 text-xs uppercase tracking-[0.18em]"
        style={{ color: kindAccent }}
      >
        {release.kind}
      </span>
      <span className="col-span-4 sm:col-span-3 text-sm text-foreground/50 text-right tabular-nums">
        {release.year}
      </span>
    </div>
  );
  if (release.spotifyAlbumId) {
    return (
      <Link
        href={`https://open.spotify.com/album/${release.spotifyAlbumId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </Link>
    );
  }
  return inner;
}
