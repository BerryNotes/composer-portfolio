import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages (petervasilik.pages.dev).
  // Redirects live in public/_redirects (Cloudflare Pages format) since
  // next.config redirects don't apply to exported sites.
  output: "export",
  images: {
    // Assets in public/ are pre-optimized by hand; no runtime optimizer
    // exists on a static host.
    unoptimized: true,
  },
};

export default nextConfig;
