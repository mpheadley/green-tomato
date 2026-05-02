"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "gt_newsletter_dismissed";
const SUPPRESS_DAYS = 7;

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const suppressUntil = parseInt(dismissed, 10) + SUPPRESS_DAYS * 24 * 60 * 60 * 1000;
      if (Date.now() < suppressUntil) return;
    }

    timerRef.current = setTimeout(() => setVisible(true), 10000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setVisible(true);
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  function dismiss() {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "popup" }),
      });
      if (res.ok) {
        setStatus("success");
        localStorage.setItem(STORAGE_KEY, String(Date.now()));
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Newsletter signup"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.65)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <div
        style={{
          background: "#d8e8c8",
          border: "3px ridge #000080",
          maxWidth: 420,
          width: "100%",
          padding: 0,
          position: "relative",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            background: "#000080",
            color: "#FFFF00",
            padding: "4px 8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
        >
          <span>★ THE GREEN TOMATO — MAILING LIST SIGNUP ★</span>
          <button
            onClick={dismiss}
            aria-label="Close"
            style={{
              background: "#c0c0c0",
              border: "2px outset #fff",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "0.75rem",
              lineHeight: 1,
              padding: "1px 5px",
              color: "#000",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: "1.25rem" }}>
          {status === "success" ? (
            <>
              <p style={{ fontWeight: "bold", marginBottom: "0.5rem", color: "#000080" }}>
                ✔ YOU ARE NOW ON THE LIST.
              </p>
              <p style={{ fontSize: "0.85rem", color: "#111" }}>
                Buford will be in touch. Check your inbox. Do not reply to this message.
              </p>
            </>
          ) : (
            <>
              <p style={{ fontWeight: "bold", fontSize: "1rem", marginBottom: "0.5rem", color: "#000" }}>
                NEVER MISS A STORY!
              </p>
              <p style={{ fontSize: "0.82rem", marginBottom: "1rem", color: "#111", lineHeight: 1.5 }}>
                Sign up for The Green Tomato&apos;s weekly email newsletter to stay in the loop.
                Buford Tatum, Bureau Chief, reports directly to your inbox.
              </p>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: "0.4rem 0.5rem",
                    border: "2px inset #888",
                    fontSize: "0.85rem",
                    background: "#fff",
                    width: "100%",
                  }}
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  style={{
                    background: "#000080",
                    color: "#FFFF00",
                    border: "2px outset #4444aa",
                    padding: "0.4rem 0.75rem",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    letterSpacing: "0.05em",
                  }}
                >
                  {status === "submitting" ? "SIGNING UP..." : "SIGN ME UP!"}
                </button>
                {status === "error" && (
                  <p style={{ fontSize: "0.78rem", color: "red", margin: 0 }}>
                    An error has occurred. Please try again or contact the Bureau.
                  </p>
                )}
              </form>
              <p style={{ fontSize: "0.68rem", color: "#555", marginTop: "0.6rem" }}>
                Your information will not be sold to Dollar General.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
