import Link from "next/link";
import { SITE } from "@/lib/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Portfolio" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg tracking-tight hover:text-[var(--teal)] transition"
        >
          {SITE.name}
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-2.5 sm:px-3 py-1.5 text-sm text-foreground/70 transition hover:text-[var(--teal)] ${
                link.href === "/" ? "hidden sm:block" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
