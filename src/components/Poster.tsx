import { posterForSlug } from "@/lib/poster";

type Props = {
  slug: string;
  title: string;
  category?: string;
  className?: string;
  aspect?: "square" | "video" | "wide" | "tall";
};

const ASPECT: Record<NonNullable<Props["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[21/9]",
  tall: "aspect-[3/4]",
};

export function Poster({
  slug,
  title,
  category,
  className = "",
  aspect = "square",
}: Props) {
  const { from, to, angle } = posterForSlug(slug);
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-[var(--border)] ${ASPECT[aspect]} ${className}`}
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-overlay opacity-30"
        style={{
          background:
            "radial-gradient(120% 80% at 100% 0%, rgba(94,177,173,0.5), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
          {category}
        </span>
        <span className="font-display text-xl leading-tight text-white/90 line-clamp-2">
          {title}
        </span>
      </div>
    </div>
  );
}
