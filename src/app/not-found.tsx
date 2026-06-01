import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--teal)] mb-4">
        404
      </p>
      <h1 className="font-display text-5xl sm:text-6xl tracking-tight">
        Off the page.
      </h1>
      <p className="mt-6 text-foreground/70 max-w-md mx-auto">
        Whatever you were looking for, it isn&apos;t here. Maybe one of these
        is closer.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
        >
          Home
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium hover:border-[var(--teal)] hover:text-[var(--teal)] transition"
        >
          Work
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium hover:border-[var(--teal)] hover:text-[var(--teal)] transition"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
