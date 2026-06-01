import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = `${SITE.name}, Composer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(60% 80% at 25% 10%, #133f3d 0%, #0b0b0d 60%)",
          color: "#ededed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#5eb1ad",
          }}
        >
          Composer
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: -2,
              fontWeight: 600,
              maxWidth: 1000,
            }}
          >
            {SITE.name}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#9ca3af",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            {SITE.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#9ca3af",
            fontSize: 22,
          }}
        >
          <span>{SITE.domain}</span>
          <span style={{ color: "#5eb1ad" }}>● ● ●</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
