import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export default async function OG({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const title = article?.frontmatter.title ?? "The Green Tomato";
  const byline = article?.frontmatter.byline ?? "Dale Brewer, Bureau Chief";
  const breaking = article?.frontmatter.breaking ?? false;
  const developing = article?.frontmatter.developing ?? false;
  const tags = article?.frontmatter.tags?.filter(t => t !== "breaking" && t !== "developing") ?? [];

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
          padding: 16,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            border: "8px solid #000080",
          }}
        >
          {/* Masthead — compact for article OG */}
          <div
            style={{
              backgroundColor: "#000080",
              color: "#FFFF00",
              borderBottom: "6px solid #FFFF00",
              padding: "16px 24px 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontFamily: "Blackletter",
                fontSize: 60,
                fontWeight: 400,
                letterSpacing: "0.01em",
                lineHeight: 1,
                color: "#FFFF00",
              }}
            >
              The Green Tomato
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#FFFFFF",
                fontStyle: "italic",
                textAlign: "right",
              }}
            >
              Calhoun County, Alabama
            </div>
          </div>

          {/* Badge row */}
          <div
            style={{
              backgroundColor: "#FF0000",
              padding: "8px 24px",
              display: "flex",
              gap: 8,
              alignItems: "center",
              borderBottom: "4px solid #FFFF00",
            }}
          >
            {breaking && (
              <div
                style={{
                  backgroundColor: "#FFFF00",
                  color: "#FF0000",
                  fontWeight: 900,
                  padding: "4px 12px",
                  fontSize: 22,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: "Comic Sans MS, cursive",
                  display: "flex",
                }}
              >
                Breaking!!
              </div>
            )}
            {developing && (
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#FF0000",
                  fontWeight: 900,
                  padding: "4px 12px",
                  fontSize: 22,
                  textTransform: "uppercase",
                  border: "2px solid #FFFF00",
                  display: "flex",
                }}
              >
                Developing
              </div>
            )}
            {tags.slice(0, 3).map((t) => (
              <div
                key={t}
                style={{
                  backgroundColor: "#008080",
                  color: "#FFFFFF",
                  padding: "4px 10px",
                  fontSize: 18,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "flex",
                }}
              >
                {t}
              </div>
            ))}
          </div>

          {/* Headline */}
          <div
            style={{
              flex: 1,
              padding: "32px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "#000080",
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 900,
                lineHeight: 1.1,
                color: "#000080",
                textTransform: "uppercase",
              }}
            >
              {title}
            </div>
          </div>

          {/* Byline */}
          <div
            style={{
              borderTop: "2px solid #000080",
              padding: "12px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 22,
              color: "#000",
              fontStyle: "italic",
            }}
          >
            <div style={{ display: "flex" }}>By {byline}</div>
            <div style={{ display: "flex", color: "#000080", fontWeight: 700, fontStyle: "normal" }}>
              thegreentomato.news
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
