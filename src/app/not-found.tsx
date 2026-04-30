import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | The Green Tomato",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <div className="gt-section-header">★ PAGE NOT FOUND ★</div>

      <div
        style={{
          padding: "28px 18px 12px",
          textAlign: "center",
          borderBottom: "3px double var(--gt-navy)",
          marginBottom: "16px",
        }}
      >
        <img
          src="/images/site/pixel-tomato.webp"
          alt="A green tomato, splattered"
          width={220}
          height={220}
          style={{
            imageRendering: "pixelated",
            display: "block",
            margin: "0 auto 12px",
            transform: "rotate(-8deg)",
          }}
        />
        <p
          style={{
            fontFamily: "Times New Roman, Times, serif",
            fontSize: "5rem",
            fontWeight: "bold",
            color: "var(--gt-navy)",
            margin: "0 0 8px",
            lineHeight: 1,
          }}
        >
          404
        </p>
        <p
          style={{
            fontFamily: "Times New Roman, Times, serif",
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "var(--gt-text)",
            margin: "0 0 12px",
          }}
        >
          This Page Has Been Referred to the Appropriate Department
        </p>
        <p
          style={{
            fontFamily: "Times New Roman, Times, serif",
            fontSize: "0.95rem",
            color: "var(--gt-text)",
            maxWidth: "480px",
            margin: "0 auto 20px",
            lineHeight: 1.5,
          }}
        >
          A public records request has been filed. The page you are looking for
          is currently under review. The Green Tomato is not responsible for
          your arrival here, though we did note the time.
        </p>

        <table
          style={{
            margin: "0 auto",
            borderCollapse: "collapse",
            width: "auto",
          }}
        >
          <tbody>
            <tr>
              <td style={{ padding: "4px 8px", textAlign: "center" }}>
                <Link
                  href="/"
                  style={{
                    display: "inline-block",
                    background: "var(--gt-navy)",
                    color: "var(--gt-yellow)",
                    fontFamily: "Times New Roman, Times, serif",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    padding: "6px 18px",
                    border: "2px outset var(--gt-navy)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  ◀ Return to Front Page
                </Link>
              </td>
              <td style={{ padding: "4px 8px", textAlign: "center" }}>
                <Link
                  href="/articles"
                  style={{
                    display: "inline-block",
                    background: "var(--gt-teal)",
                    color: "var(--gt-yellow)",
                    fontFamily: "Times New Roman, Times, serif",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    padding: "6px 18px",
                    border: "2px outset var(--gt-teal)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Browse the Archives
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          padding: "10px 18px 16px",
          fontFamily: "Times New Roman, Times, serif",
          fontSize: "0.85rem",
          color: "#555",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        <p style={{ margin: "0 0 4px" }}>
          <strong style={{ fontStyle: "normal" }}>
            Buford Tatum, Bureau Chief
          </strong>{" "}
          — has been notified.
        </p>
        <p style={{ margin: 0 }}>
          He is unlikely to respond before the next editorial cycle.
        </p>
      </div>
    </>
  );
}
