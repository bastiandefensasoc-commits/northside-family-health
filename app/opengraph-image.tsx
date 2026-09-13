import { ImageResponse } from "next/og";
import { clinic } from "@/lib/data/clinic";

// Special App Router file: Next detects `opengraph-image.tsx` in a route
// segment and automatically wires its output into that segment's (and every
// nested segment's, unless overridden) <meta property="og:image"> tags —
// no manual `images` field needed in metadata.ts. `size`/`contentType` are
// also read by Next to generate the correct <meta> dimensions.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          background: "linear-gradient(135deg, #e8f1f6 0%, #eaf4ee 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: "9999px",
            background: "#ffffff",
            color: "#4a7c9b",
          }}
        >
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21s-7.5-4.6-10-9.2C.4 8 2 4 6 4c2.2 0 3.6 1.2 4.5 2.3C11.4 5.2 12.8 4 15 4c4 0 5.6 4 4 7.8-2.5 4.6-10 9.2-10 9.2H12Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 600,
            color: "#263238",
          }}
        >
          {clinic.name}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#5b6b6f" }}>
          {clinic.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
