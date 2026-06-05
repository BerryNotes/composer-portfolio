import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  const featured = PROJECTS.slice(0, 3);
  return (
    <div>
      <section className="relative overflow-hidden">
        <Image
          src="/hero-piano.jpg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover opacity-25"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 0%, var(--teal-glow), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-32 sm:pt-40 sm:pb-44">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--teal)] mb-6">
              Composer · {SITE.domain}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-5xl sm:text-7xl leading-[1.02] tracking-tight max-w-4xl">
              I write music
              <br />
              that earns its place.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 max-w-2xl text-lg text-foreground/70 leading-relaxed">
              I&apos;m {SITE.name}, a composer working on film, television,
              games, and the occasional artist record. If you&apos;ve got a
              project that needs a score, I&apos;d love to hear about it.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
              >
                See the work
                <ArrowRight />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium hover:border-[var(--teal)] hover:text-[var(--teal)] transition"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <div className="grid sm:grid-cols-12 gap-10 mb-16">
              <div className="sm:col-span-4">
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--amber)] mb-3">
                  What I do
                </p>
                <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
                  Four ways
                  <br />
                  I show up.
                </h2>
              </div>
              <p className="sm:col-span-7 sm:col-start-6 text-foreground/70 text-lg leading-relaxed">
                Every project starts with a conversation. Tell me what
                you&apos;re making, what it needs to feel like, and what
                you&apos;ve already tried. The rest follows from there.
              </p>
            </div>
          </Reveal>

          <ul className="grid gap-px sm:grid-cols-2 bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
            {SERVICES.map((s, i) => {
              const accents = ["var(--teal)", "var(--amber)", "var(--rose)", "var(--indigo)"];
              const accent = accents[i % accents.length];
              return (
                <Reveal as="li" key={s.title} delay={i * 80}>
                  <div className="group h-full bg-[var(--card)] p-8 sm:p-10 transition hover:bg-[var(--muted-bg)] relative">
                    <span
                      aria-hidden
                      className="absolute top-6 right-6 text-xs tabular-nums tracking-wider"
                      style={{ color: accent, opacity: 0.7 }}
                    >
                      0{i + 1}
                    </span>
                    <div className="mb-4" style={{ color: accent }}>
                      {s.icon}
                    </div>
                    <h3 className="font-display text-2xl tracking-tight mb-2">
                      {s.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section
        id="work"
        className="border-t border-[var(--border)] scroll-mt-20"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--indigo)] mb-3">
                  Selected work
                </p>
                <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
                  Recent projects
                </h2>
              </div>
              <Link
                href="/work"
                className="hidden sm:inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-[var(--teal)] transition"
              >
                All work <ArrowRight />
              </Link>
            </div>
          </Reveal>
          <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {featured.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 90}>
                <Link
                  href={`/work/${p.slug}`}
                  className="grid grid-cols-12 gap-4 items-baseline py-7 group hover:bg-[var(--muted-bg)] -mx-6 px-6 transition relative"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 bottom-0 w-px bg-[var(--teal)] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"
                  />
                  <span className="col-span-1 text-sm text-foreground/40 tabular-nums">
                    {p.year}
                  </span>
                  <span className="col-span-6 sm:col-span-5 font-display text-2xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 group-hover:text-[var(--teal)]">
                    {p.title}
                  </span>
                  <span className="hidden sm:block sm:col-span-3 text-sm text-foreground/60">
                    {p.role}
                  </span>
                  <span className="col-span-5 sm:col-span-3 text-sm text-foreground/50 text-right">
                    {p.category}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[var(--border)] relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 80% at 80% 100%, var(--rose-glow), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--rose)] mb-4">
                Working on something
              </p>
              <h2 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
                Tell me about it.
              </h2>
              <p className="mt-6 text-lg text-foreground/70 max-w-xl">
                A short note about the project is plenty. Deadlines, format,
                feel. I&apos;ll write back.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--teal)] text-[#0b0b0d] px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
              >
                Start a conversation
                <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

type Service = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    title: "Original score",
    body: "Full or partial scores for film, TV, and shorts. Spotting, sketching, demos, then live or sample-based recording.",
    icon: <FilmIcon />,
  },
  {
    title: "Game music",
    body: "Adaptive scores built around the way players actually move. Vertical layers, horizontal cues, stems for Wwise or FMOD.",
    icon: <GameIcon />,
  },
  {
    title: "Arranging and orchestration",
    body: "Strings, brass, woodwinds. Charting for live ensemble or programmed sessions, with delivery in stems and printed parts.",
    icon: <NoteIcon />,
  },
  {
    title: "Collaborations",
    body: "Songwriting and co-production with artists. I bring instruments and a long ear. You bring the song.",
    icon: <CollabIcon />,
  },
];

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-300 group-hover:translate-x-0.5"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function FilmIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 4v16M17 4v16M3 8h4M3 12h4M3 16h4M17 8h4M17 12h4M17 16h4" />
    </svg>
  );
}

function GameIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 11h4M8 9v4" />
      <circle cx="15" cy="10" r="0.8" fill="currentColor" />
      <circle cx="17" cy="12" r="0.8" fill="currentColor" />
      <path d="M7 6h10a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5h-1l-2-2H10l-2 2H7a5 5 0 0 1-5-5v0a5 5 0 0 1 5-5z" />
    </svg>
  );
}

function NoteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function CollabIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="3" />
      <path d="M3 21v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1M14 21v-1a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v1" />
    </svg>
  );
}
