import Image from "next/image";
import { SITE } from "@/lib/site";
import { ABOUT } from "@/content/about";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "About" };

export default function AboutPage() {
  const heading = ABOUT.heading.replace("{name}", SITE.name);
  return (
    <div>
      {/* Large colorful hero — aurora, bold, fixed to the viewport */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-fixed opacity-70"
          style={{ backgroundImage: "url(/aurora.jpg)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-background/45 to-background"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--teal)] mb-2">
              {ABOUT.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-3xl sm:text-4xl tracking-tight">
              {heading}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 max-w-xl text-base text-foreground/80 leading-relaxed">
              {ABOUT.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-3">
          <Reveal delay={120} className="sm:col-span-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--muted-bg)]">
              <Image
                src="/portrait.jpg"
                alt={`Portrait of ${SITE.name}`}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={180} className="sm:col-span-2 space-y-6 text-foreground/80 leading-relaxed">
            {ABOUT.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="border-t border-[var(--border)] pt-8 mt-10 grid grid-cols-2 gap-6 text-sm">
              {ABOUT.facts.map((f) => (
                <Block key={f.label} label={f.label}>
                  {f.value}
                </Block>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-foreground/40 uppercase tracking-[0.18em] text-xs mb-1.5">
        {label}
      </div>
      <div className="text-foreground/80">{children}</div>
    </div>
  );
}
