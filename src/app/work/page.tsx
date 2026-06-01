import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";
import { Poster } from "@/components/Poster";

export const metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <header className="mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--teal)] mb-3">
            Portfolio
          </p>
          <h1 className="font-display text-5xl tracking-tight">Work</h1>
          <p className="mt-4 max-w-2xl text-foreground/70">
            A short list. I&apos;d rather show you a few things I&apos;m proud
            of than a wall of credits.
          </p>
        </header>
      </Reveal>

      <ul className="grid gap-10 sm:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={i * 80}>
            <Link
              href={`/work/${p.slug}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-lg">
                <div className="transition-transform duration-700 group-hover:scale-[1.03]">
                  <Poster
                    slug={p.slug}
                    title={p.title}
                    category={p.category}
                    aspect="video"
                  />
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h2 className="font-display text-2xl tracking-tight transition-colors group-hover:text-[var(--teal)]">
                  {p.title}
                </h2>
                <span className="text-sm text-foreground/40 tabular-nums shrink-0">
                  {p.year}
                </span>
              </div>
              <p className="mt-2 text-sm text-foreground/60">{p.summary}</p>
              <div className="mt-3 text-xs uppercase tracking-[0.18em] text-foreground/40">
                {p.role} · {p.category}
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
