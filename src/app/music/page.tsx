import Link from "next/link";
import { FEATURED, RELEASES, ACCENT_VARS, ACCENT_GLOW_VARS } from "@/lib/music";
import { SITE } from "@/lib/site";
import { SpotifyEmbed } from "@/components/SpotifyEmbed";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "Music" };

export default function MusicPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 50% at 30% 0%, var(--amber-glow), transparent 70%), radial-gradient(45% 50% at 90% 100%, var(--indigo-glow), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--amber)] mb-4">
              Listen
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-5xl sm:text-6xl tracking-tight max-w-3xl">
              Seven albums, two EPs, and a catalog
              <br />
              rooted in the channel that started it.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
              A categorized selection of featured tracks is below, followed
              by the complete discography.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured by category */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--rose)] mb-3">
              Featured picks
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-2">
              Start by mood.
            </h2>
            <p className="text-foreground/60 max-w-xl">
              Selected favorites from each side of the catalog. The labels
              on the left reflect the sound, not strict genre.
            </p>
          </Reveal>

          <div className="mt-12 space-y-12">
            {FEATURED.map((cat, idx) => (
              <Reveal key={cat.key} delay={idx * 100}>
                <CategoryRow cat={cat} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full catalog */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--indigo)] mb-3">
              Discography
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
              The complete discography.
            </h2>
          </Reveal>

          <ul className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {RELEASES.map((r, i) => (
              <Reveal as="li" key={`${r.title}-${r.year}`} delay={i * 30}>
                <ReleaseRow release={r} index={i} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Listen to everything via the artist embed */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--teal)] mb-3">
              Or simply listen
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-8">
              Listen in full.
            </h2>
            <SpotifyEmbed type="artist" id={SITE.spotifyArtistUrl.split("/").pop() || ""} />
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

function CategoryRow({ cat }: { cat: (typeof FEATURED)[number] }) {
  const accent = ACCENT_VARS[cat.accent];
  const glow = ACCENT_GLOW_VARS[cat.accent];
  return (
    <div
      className="grid gap-6 sm:grid-cols-12 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 relative overflow-hidden"
      style={{
        background: `radial-gradient(60% 100% at 0% 0%, ${glow}, transparent 70%), var(--card)`,
      }}
    >
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
      <ul className="sm:col-span-8 divide-y divide-[var(--border)]">
        {cat.tracks.map((t, i) => (
          <li key={t.title} className="flex items-start gap-4 py-3.5 first:pt-0 last:pb-0">
            <span
              className="font-display text-2xl tabular-nums leading-none mt-0.5"
              style={{ color: accent }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <div className="font-medium">{t.title}</div>
              {t.note && (
                <div className="text-sm text-foreground/50 mt-0.5">
                  {t.note}
                </div>
              )}
            </div>
            {t.spotifyTrackId && (
              <Link
                href={`https://open.spotify.com/track/${t.spotifyTrackId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-foreground/60 hover:text-[var(--teal)] hover:border-[var(--teal)] transition"
              >
                Listen <span aria-hidden>↗</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
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
