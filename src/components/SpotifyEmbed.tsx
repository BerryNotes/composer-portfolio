type Props = {
  type: "album" | "track" | "playlist" | "artist";
  id: string;
  compact?: boolean;
  height?: number;
};

export function SpotifyEmbed({ type, id, compact, height }: Props) {
  if (!id || id.startsWith("REPLACE")) {
    return null;
  }
  const h = height ?? (compact ? 152 : 352);
  return (
    // Dark, rounded wrapper. Any area the Spotify player does not paint shows
    // this background (not the iframe's default white), so there is no white
    // bleed at the corners or edges. line-height:0 removes the inline gap.
    <div
      className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--muted-bg)]"
      style={{ lineHeight: 0 }}
    >
      <iframe
        title={`Spotify ${type}`}
        src={`https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`}
        width="100%"
        height={h}
        style={{ height: h, display: "block", border: 0, background: "transparent" }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="block w-full"
      />
    </div>
  );
}
