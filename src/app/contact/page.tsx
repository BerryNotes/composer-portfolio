import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Backdrop } from "@/components/Backdrop";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div>
      {/* Page-wide backdrop — fades to a dimmer floor as you scroll */}
      <Backdrop
        image="/backdrop-night.jpg"
        base={1}
        floor={0.35}
        veilClassName="bg-gradient-to-b from-transparent via-background/30 to-background/85"
      />

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
        <div className="grid gap-4 sm:grid-cols-2">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.label} delay={120 + i * 80}>
              <a
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--card)] px-5 py-5 hover:bg-[var(--muted-bg)] transition"
                style={{ ["--hover-accent" as string]: c.accent }}
              >
                <span
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition group-hover:scale-105"
                  style={{ color: c.accent }}
                >
                  {c.icon}
                </span>
                <span className="min-w-0">
                  <span
                    className="block text-xs uppercase tracking-[0.2em] mb-1"
                    style={{ color: c.accent }}
                  >
                    {c.label}
                  </span>
                  <span className="block font-display text-xl tracking-tight truncate">
                    {c.value}
                    <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-1">
                      {c.external ? "↗" : "→"}
                    </span>
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

type Channel = {
  label: string;
  value: string;
  href: string;
  accent: string;
  external: boolean;
  icon: React.ReactNode;
};

const CHANNELS: Channel[] = [
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    accent: "var(--amber)",
    external: false,
    icon: <MailIcon />,
  },
  {
    label: "Spotify",
    value: "LiteBeats",
    href: SITE.spotifyArtistUrl,
    accent: "var(--indigo)",
    external: true,
    icon: <SpotifyIcon />,
  },
  {
    label: "YouTube",
    value: "Berrynote",
    href: SITE.youtubeUrl,
    accent: "var(--rose)",
    external: true,
    icon: <YouTubeIcon />,
  },
  {
    label: "Apple Music",
    value: "LiteBeats",
    href: SITE.appleMusicUrl,
    accent: "var(--teal)",
    external: true,
    icon: <AppleMusicIcon />,
  },
];

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.5 17.34c-.22.36-.68.47-1.04.25-2.85-1.74-6.43-2.13-10.65-1.17-.41.1-.82-.16-.91-.57-.1-.41.16-.82.57-.91 4.62-1.06 8.58-.6 11.78 1.36.36.22.47.68.25 1.04zm1.47-3.27c-.27.45-.86.59-1.3.31-3.26-2-8.23-2.58-12.08-1.41-.5.15-1.04-.13-1.19-.63-.15-.5.13-1.04.63-1.19 4.4-1.34 9.88-.69 13.63 1.62.44.27.58.86.31 1.3zm.13-3.41C15.17 8.33 8.78 8.12 5.05 9.25c-.6.18-1.23-.16-1.41-.76-.18-.6.16-1.23.76-1.41 4.28-1.3 11.4-1.05 15.9 1.62.54.32.72 1.02.4 1.56-.32.53-1.02.71-1.6.4z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.09 0 12 0 12s0 3.91.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.91 24 12 24 12s0-3.91-.5-5.8zM9.6 15.6V8.4L15.84 12 9.6 15.6z" />
    </svg>
  );
}

function AppleMusicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V6l11-3v12" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="15" r="3" />
    </svg>
  );
}
