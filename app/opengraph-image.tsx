import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline} in Jagatpura, Jaipur`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1a1e26 0%, #0f1218 60%, #241a08 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 68,
              height: 68,
              borderRadius: 18,
              background: "linear-gradient(135deg, #fbbf24, #d97706)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 800, color: "#ffffff" }}>
              Iron Rod Fabrication
            </div>
            <div style={{ fontSize: 19, color: "#848e9f", marginTop: 4, letterSpacing: 2 }}>
              JAGATPURA, JAIPUR
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            Complete fabrication
          </div>
          <div
            style={{
              fontSize: 74,
              fontWeight: 800,
              color: "#fbbf24",
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            work, done right.
          </div>
          <div style={{ fontSize: 27, color: "#b0b7c3", marginTop: 26 }}>
            Gates · Grills · Railings · Sheds · Shutters · Site work
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              background: "#fbbf24",
              color: "#0f1218",
              fontSize: 25,
              fontWeight: 800,
              padding: "14px 30px",
              borderRadius: 14,
            }}
          >
            {site.phone}
          </div>
          <div style={{ display: "flex", fontSize: 23, color: "#848e9f" }}>
            Free site visit anywhere in Jaipur
          </div>
        </div>
      </div>
    ),
    size,
  );
}
