import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-foreground/50 mb-3">
          Contact
        </p>
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight">
          Say hi.
        </h1>
        <p className="mt-6 text-lg text-foreground/70 max-w-xl">
          Working on a film, a game, or a record. Send a few sentences about
          it. I read every email and I&apos;ll write back.
        </p>
      </Reveal>

      <div className="mt-12 space-y-4">
        <Reveal delay={120}>
          <a
            href={`mailto:${SITE.email}`}
            className="group block rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 py-5 hover:bg-[var(--muted-bg)] transition"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-1">
              Email
            </div>
            <div className="font-display text-2xl tracking-tight inline-flex items-center gap-2">
              {SITE.email}
              <span className="transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </div>
          </a>
        </Reveal>

        <Reveal delay={200}>
          <a
            href={SITE.spotifyArtistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 py-5 hover:bg-[var(--muted-bg)] transition"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-1">
              Spotify
            </div>
            <div className="font-display text-2xl tracking-tight inline-flex items-center gap-2">
              Artist profile
              <span className="transition-transform duration-500 group-hover:translate-x-2">
                ↗
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </div>
  );
}
