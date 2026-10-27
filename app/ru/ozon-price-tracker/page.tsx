import type { Metadata } from "next";
import { profile } from "../../site-config";
import { en, ru } from "../../ozon-price-tracker/copy";
import { Landing } from "../../ozon-price-tracker/Landing";

export const metadata: Metadata = {
  title: ru.title,
  description: ru.description,
  alternates: { canonical: ru.path, languages: { en: en.path, ru: ru.path, "x-default": en.path } },
  openGraph: { type: "website", locale: "ru_RU", siteName: profile.brand, title: ru.title, description: ru.description, url: ru.path, images: [{ url: "/og-v2.png", width: 1731, height: 909, alt: "Dey Intelligence — Abhishek Dey, AI Engineer & Product Builder" }] },
  twitter: { card: "summary_large_image", title: ru.title, description: ru.description, images: ["/og-v2.png"] },
};

export default function OzonPriceTrackerRuPage() {
  return <Landing c={ru} />;
}
