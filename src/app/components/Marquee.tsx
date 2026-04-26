"use client";

export default function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="marquee-90s">
      <div className="marquee-90s-track">{children}</div>
    </div>
  );
}
