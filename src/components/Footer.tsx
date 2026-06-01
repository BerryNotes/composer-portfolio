import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} {SITE.name}
        </div>
        <div className="flex items-center gap-4">
          <a href={`mailto:${SITE.email}`} className="hover:text-[var(--teal)] transition">
            {SITE.email}
          </a>
          <Link href="/contact" className="hover:text-[var(--teal)] transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
