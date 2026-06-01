type Props = {
  type: "album" | "track" | "playlist" | "artist";
  id: string;
  compact?: boolean;
};

export function SpotifyEmbed({ type, id, compact }: Props) {
  if (!id || id.startsWith("REPLACE")) {
    return (
      <div className="rounded-lg border border-dashed border-[var(--border)] bg-[var(--muted-bg)] px-4 py-6 text-sm text-foreground/50">
        Spotify embed goes here. Add a real {type} ID in <code>src/lib/projects.ts</code>.
      </div>
    );
  }
  return (
    <iframe
      title={`Spotify ${type}`}
      src={`https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`}
      width="100%"
      height={compact ? 152 : 352}
      frameBorder={0}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-lg border border-[var(--border)]"
    />
  );
}
