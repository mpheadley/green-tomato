import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <div className="gt-page">
            <Nav />
            <Marquee>
              ★ BREAKING: CALHOUN COUNTY COMMISSION CLEARS FULL AGENDA ★ DEVELOPING: OXFORD MAN STILL FROM OXFORD ★ RAPTOR RUN INVESTIGATION ONGOING ★ MUMMY DESCRIBED AS STABLE ★ DOLLAR GENERAL CALLED &quot;COMPLEMENTARY&quot; ★
            </Marquee>
            <main id="main-content" className="gt-body">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
