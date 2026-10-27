import type { Metadata } from "next";
import { profile } from "../site-config";
import { en, ru } from "./copy";
import { Landing } from "./Landing";

export const metadata: Metadata = {
  title: en.title,
  description: en.description,
  alternates: { canonical: en.path, languages: { en: en.path, ru: ru.path, "x-default": en.path } },
  openGraph: { type: "website", siteName: profile.brand, title: en.title, description: en.description, url: en.path, images: [{ url: "/og-v2.png", width: 1731, height: 909, alt: "Dey Intelligence — Abhishek Dey, AI Engineer & Product Builder" }] },
  twitter: { card: "summary_large_image", title: en.title, description: en.description, images: ["/og-v2.png"] },
};

export default function OzonPriceTrackerPage() {
  return <Landing c={en} />;
}
