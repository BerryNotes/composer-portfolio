export function posterForSlug(slug: string): {
  from: string;
  to: string;
  angle: number;
} {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  const h1 = Math.abs(hash) % 360;
  const h2 = (h1 + 40 + (Math.abs(hash) % 60)) % 360;
  const angle = Math.abs(hash >> 3) % 360;
  return {
    from: `hsl(${h1} 35% 28%)`,
    to: `hsl(${h2} 45% 14%)`,
    angle,
  };
}
