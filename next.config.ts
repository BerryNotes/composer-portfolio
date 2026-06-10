import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The three game-jam projects were consolidated into /work/game-jams.
    // These slugs were live for a while and may be linked or indexed.
    return ["magical-sneky", "parts-inc", "critter-catcher"].map((slug) => ({
      source: `/work/${slug}`,
      destination: "/work/game-jams",
      permanent: true,
    }));
  },
};

export default nextConfig;
