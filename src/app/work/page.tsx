import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";
import { Poster } from "@/components/Poster";

export const metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <div>
      {/* Hero band — aurora backdrop */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <Image
          src="/aurora.jpg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover opacity-60"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-background/55 to-background"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--teal)] mb-3">
              Portfolio
            </p>
            <h1 className="font-display text-5xl sm:text-6xl tracking-tight">
              Work
            </h1>
            <p className="mt-4 max-w-2xl text-foreground/70">
              A curated selection of recent and ongoing projects. Focused on
              work that represents the practice rather than a comprehensive
              credits list.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-20">
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
                    image={p.image}
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
    </div>
  );
}
