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
              It started in 2016, with nothing grander than a desire to learn
              the piano; YouTube tutorials and a great deal of listening did
              the rest, and by 2020 the songs I had been writing for myself
              had become songs I was releasing for other people. I have been
              self-taught the whole way through — which means the habits I
              carry are the ones the music asked for, and not the ones a
              classroom handed me.
            </p>
            <p>
              When a project comes to me, I do not begin from technique, or
              from anything I have written before. I begin by picturing the
              thing itself, and asking the only question that matters at the
              start — what is this supposed to make a person feel? — and then
              I improvise toward that feeling until it holds. Improvisation is
              the part of the craft I trust most; it is the difference between
              reading a map and walking the ground. What comes out of that is
              a wide catalog: solo piano and ambient textures on one end,
              small-ensemble orchestral cues and jazz reharmonization on the
              other, and, off to the side, a series of pieces composed inside
              a graphing calculator. The range is not an accident. Each
              project gets the sound it actually needs, and not the one I
              would have defaulted to.
            </p>
            <p>
              For the people I work with, that restlessness comes with
              discipline. I make my decisions inside the guidelines I am
              given, and I bring everything creative I can without ever
              stepping outside the bounds of the project; a score, after all,
              should sound as though it could only ever have been written for
              the one thing it serves. The work I want most is the music for a
              small indie game with a tragic story — the kind of project where
              the feeling is the whole point — but if you are building anything
              at all that needs a score, I would be glad to hear about it.
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
