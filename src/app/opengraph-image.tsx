import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  const blackletter = fs.readFileSync(
    path.join(process.cwd(), "public/fonts/UnifrakturMaguntia.ttf")
  );
  const sans = fs.readFileSync(
    path.join(process.cwd(), "public/fonts/Inter.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#d8e8c8",
          fontFamily: "Times New Roman, Times, serif",
          padding: 24,
        }}
      >
        {/* Page frame */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            border: "8px solid #000080",
          }}
        >
          {/* Masthead */}
          <div
            style={{
              backgroundColor: "#000080",
              color: "#FFFF00",
              borderBottom: "8px solid #FFFF00",
              padding: "28px 24px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontFamily: "Blackletter",
                fontSize: 110,
                fontWeight: 400,
                letterSpacing: "0.01em",
                lineHeight: 1,
                color: "#FFFF00",
                whiteSpace: "nowrap",
              }}
            >
              The Green Tomato
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#FFFFFF",
                marginTop: 14,
                fontStyle: "italic",
              }}
            >
              {siteConfig.tagline}
            </div>
          </div>

          {/* Marquee */}
          <div
            style={{
              backgroundColor: "#FF0000",
              color: "#FFFF00",
              fontSize: 28,
              fontWeight: 900,
              padding: "8px 24px",
              textAlign: "center",
              borderBottom: "4px solid #FFFF00",
              display: "flex",
              justifyContent: "center",
            }}
          >
            ★ BREAKING NEWS ★ DEVELOPING STORY ★ MUMMY UPDATE ★
          </div>

          {/* Body */}
          <div
            style={{
              flex: 1,
              padding: "32px 48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "#000080",
            }}
          >
            <div
              style={{
                fontSize: 40,
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#000080",
                textTransform: "uppercase",
              }}
            >
              Breaking News from Calhoun County, Alabama
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#000",
                marginTop: 16,
                fontStyle: "italic",
                display: "flex",
              }}
            >
              Dale Brewer, Bureau Chief
            </div>
            <div
              style={{
                marginTop: 18,
                fontSize: 16,
                color: "#888",
                display: "flex",
              }}
            >
              Best Viewed in Netscape Navigator 4.0 at 800x600
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: sans, style: "normal", weight: 400 },
        { name: "Blackletter", data: blackletter, style: "normal", weight: 400 },
      ],
    }
  );
}
