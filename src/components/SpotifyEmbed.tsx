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
    <iframe
      title={`Spotify ${type}`}
      src={`https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`}
      width="100%"
      height={h}
      style={{ height: h, display: "block" }}
      frameBorder={0}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="block w-full rounded-xl border border-[var(--border)]"
    />
  );
}
