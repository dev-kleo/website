import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./redesign.css";
import { profile } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: "Dey Intelligence — Abhishek Dey, Independent Researcher & Entrepreneur", template: "%s" },
  description: profile.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: profile.brand, title: "Dey Intelligence — Abhishek Dey, Independent Researcher & Entrepreneur", description: profile.description, images: [{ url: "/og-v2.png", width: 1731, height: 909, alt: "Dey Intelligence — Abhishek Dey, Independent Researcher & Entrepreneur" }] },
  twitter: { card: "summary_large_image", title: "Dey Intelligence — Abhishek Dey, Independent Researcher & Entrepreneur", description: profile.description, images: ["/og-v2.png"] },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><link rel="preload" href="/fonts/hanken-grotesk.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /><script dangerouslySetInnerHTML={{ __html: "try { if (location.pathname === '/' || location.pathname === '/index.html') { var seen = sessionStorage.getItem('introSeen'); var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; document.documentElement.dataset.intro = (seen || reduce) ? 'skip' : 'play'; } } catch {}" }} /><script dangerouslySetInnerHTML={{ __html: "try { const saved = localStorage.getItem('theme'); const theme = saved === 'dark' || saved === 'light' ? saved : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.dataset.theme = theme; document.documentElement.style.colorScheme = theme; } catch {}" }} /></head>
      <body>{children}</body>
    </html>
  );
}
