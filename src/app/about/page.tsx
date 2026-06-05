import Image from "next/image";
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--muted-bg)]">
            <Image
              src="/portrait.jpg"
              alt={`Portrait of ${SITE.name}`}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
        <Reveal delay={180} className="sm:col-span-2 space-y-6 text-foreground/80 leading-relaxed">
          <p>
            I write music for picture. Mostly film and games, sometimes
            records. I&apos;m based in Austin and I&apos;ve been at this for
            over five years.
          </p>
          <p>
            I came up self-taught. Piano, guitar, bass, and a growing stack of
            synths. No conservatory in the background, just a lot of headphone
            hours and one cue at a time. I think that shows in the music. I&apos;d
            rather chase a sound until it works than land on the safe choice.
          </p>
          <p>
            What I care about most is fit. A score should sound like it could
            not have been written for anything else. If you&apos;re working on
            something and want a real conversation about the music, I&apos;d love
            to hear from you.
          </p>

          <div className="border-t border-[var(--border)] pt-8 mt-10 grid grid-cols-2 gap-6 text-sm">
            <Block label="Writes">Acoustic, electronic, hybrid</Block>
            <Block label="Plays">Piano, guitar, bass, synths</Block>
            <Block label="Trained">Self-taught</Block>
            <Block label="Based in">Austin, TX</Block>
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
