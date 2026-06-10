import { CATALOG } from "@/lib/catalog";
import { Curator } from "@/components/Curator";

export const metadata = {
  title: "Curate",
  robots: { index: false, follow: false },
};

export default function CuratePage() {
  const total = CATALOG.reduce((n, a) => n + a.tracks.length, 0);
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--teal)] mb-3">
          Private tool
        </p>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight">
          Pick what to feature.
        </h1>
        <p className="mt-4 text-foreground/70 max-w-2xl">
          Check every song you&apos;d like featured ({total} in the catalog).
          Your choices save automatically as you go, so you can come back to
          this page later. When you&apos;re done, press{" "}
          <span className="text-foreground">Copy my picks</span> and paste the
          result into the chat — that tells me exactly what to feature.
        </p>
      </header>
      <Curator catalog={CATALOG} />
    </div>
  );
}
