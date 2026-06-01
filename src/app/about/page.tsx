import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-foreground/50 mb-3">
          About
        </p>
        <h1 className="font-display text-5xl tracking-tight">
          Hi, I&apos;m {SITE.name}.
        </h1>
      </Reveal>

      <div className="mt-12 grid gap-12 sm:grid-cols-3">
        <Reveal delay={120} className="sm:col-span-1">
          <div className="aspect-[4/5] rounded-lg border border-dashed border-[var(--border)] bg-[var(--muted-bg)] flex items-center justify-center text-sm text-foreground/40">
            Photo
          </div>
          <p className="mt-3 text-xs text-foreground/40">
            Replace with a portrait at /public/portrait.jpg
          </p>
        </Reveal>
        <Reveal delay={180} className="sm:col-span-2 space-y-6 text-foreground/80 leading-relaxed">
          <p>
            I write music for picture. Mostly film and games, sometimes
            records. I work out of [city], and I&apos;ve been doing this for
            about [N] years.
          </p>
          <p>
            My ear leans orchestral but I spend a lot of time on synths and
            tape. The thing I care about most is fit. A score should sound
            like it could not have been written for anything else.
          </p>
          <p>
            Replace this with your own voice. Two or three short paragraphs.
            Say something specific. Where you trained, who you&apos;ve worked
            with, what kind of music you love. Cut anything that sounds like a
            press release.
          </p>

          <div className="border-t border-[var(--border)] pt-8 mt-10 grid grid-cols-2 gap-6 text-sm">
            <Block label="Writes">
              Orchestral, electronic, chamber, hybrid
            </Block>
            <Block label="Works in">
              Logic, Kontakt, Spitfire, live players
            </Block>
            <Block label="Trained at">[Your training]</Block>
            <Block label="Based in">[Your city]</Block>
          </div>
        </Reveal>
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
