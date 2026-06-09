// Decorative animated equalizer bars. Purely ornamental (aria-hidden).
// Deterministic per-bar timing so it renders identically on server and client.

export function Waveform({
  bars = 28,
  className = "",
  color = "var(--teal)",
}: {
  bars?: number;
  className?: string;
  color?: string;
}) {
  const items = Array.from({ length: bars });
  return (
    <div
      aria-hidden
      className={`flex items-end gap-[3px] h-8 ${className}`}
    >
      {items.map((_, i) => {
        // Vary duration and delay deterministically for an organic look.
        const dur = 0.8 + ((i * 37) % 70) / 100; // 0.8s–1.5s
        const delay = ((i * 53) % 100) / 100; // 0–1s
        const base = 0.25 + ((i * 17) % 60) / 100; // starting height
        return (
          <span
            key={i}
            className="eq-bar block w-[3px] rounded-full"
            style={{
              height: "100%",
              transform: `scaleY(${base})`,
              background: color,
              opacity: 0.5,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
