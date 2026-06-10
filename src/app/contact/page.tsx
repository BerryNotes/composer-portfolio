import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div>
      {/* Page-wide fixed backdrop — the night sky stays visible as you scroll */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/backdrop-night.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/85" />
      </div>

      {/* Hero band */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="relative mx-auto max-w-3xl px-6 py-24 sm:py-32">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--rose)] mb-3">
              Contact
            </p>
            <h1 className="font-display text-5xl sm:text-6xl tracking-tight">
              Say hi.
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-xl">
              If you are scoring a film, a game, or a record and need a
              composer, send a few sentences about the project. Every
              inquiry receives a response.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-4">
          <Reveal delay={120}>
            <a
              href={`mailto:${SITE.email}`}
              className="group block rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 py-5 hover:bg-[var(--muted-bg)] hover:border-[var(--amber)] transition"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--amber)] mb-1">
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
              className="group block rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 py-5 hover:bg-[var(--muted-bg)] hover:border-[var(--indigo)] transition"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--indigo)] mb-1">
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
    </div>
  );
}
