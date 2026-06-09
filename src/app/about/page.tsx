import Image from "next/image";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div>
      {/* Large colorful hero — aurora, bold */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <Image
          src="/aurora.jpg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover opacity-70"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-background/45 to-background"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--teal)] mb-2">
              About
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-3xl sm:text-4xl tracking-tight">
              Hi, I&apos;m {SITE.name}.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 max-w-xl text-base text-foreground/80 leading-relaxed">
              A self-taught composer for film, games, theater, and the
              occasional artist record — based in Austin, Texas.
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
            <p>
              It started in 2016 with a simple desire to learn the piano.
              YouTube tutorials and a lot of listening turned that into
              something larger, and by 2020 I was releasing my own music.
              I have been self-taught the whole way.
            </p>
            <p>
              I do not begin from classical technique or from ideas I have
              used before. I start by picturing the project and asking what
              it should make a person feel, then improvise toward that —
              improvisation is the part of the craft I trust most. The result
              is a wide catalog: solo piano and ambient textures, small-ensemble
              orchestral cues, jazz reharmonization, and a series of pieces
              composed inside a graphing calculator.
            </p>
            <p>
              Working to a brief suits me. I make decisions inside the
              guidelines I am given and bring creativity without stepping
              outside the bounds of the project — a score should sound as if
              it could only have been written for the thing it serves. The
              work I most want to do is the music for a small indie game with
              a tragic story, but if you are developing anything that needs a
              score, I would like to hear about it.
            </p>

            <div className="border-t border-[var(--border)] pt-8 mt-10 grid grid-cols-2 gap-6 text-sm">
              <Block label="Writes">Acoustic, electronic, hybrid</Block>
              <Block label="Plays">Piano, guitar, bass, synths</Block>
              <Block label="Strength">Improvisation</Block>
              <Block label="Trained">Self-taught</Block>
              <Block label="Playing since">2016</Block>
              <Block label="Based in">Austin, TX</Block>
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
