import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { profile } from "../site-config";
import "./ozon-price-tracker.css";

const chromeWebStoreUrl = "https://chromewebstore.google.com/detail/ozon-price-tracker/dodppojnnlcmbjeenenmpalmiikkmfkh";
const path = "/ozon-price-tracker";
const title = "Ozon Price Tracker — Price History & Alerts for Chrome";
const description = "Track price history on Ozon, Wildberries and Yandex Market with a Chrome extension. Set target-price alerts. Your data stays in your browser.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: "website", siteName: profile.brand, title, description, url: path, images: [{ url: "/og-v2.png", width: 1731, height: 909, alt: "Dey Intelligence — Abhishek Dey, AI Engineer & Product Builder" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-v2.png"] },
};

const steps = [
  ["01", "Install the extension", "Add Price Tracker from the Chrome Web Store. It takes under a minute."],
  ["02", "Save a product", "Open a product on Ozon, Wildberries or Yandex Market and add it to your watchlist."],
  ["03", "Set a target, then wait", "Choose the price you would pay. The tracker keeps the history and flags the moment your target is reached."],
];

const features = [
  ["A history behind every price", "See how a product’s price has moved instead of judging a single snapshot. Each update becomes part of a clear timeline."],
  ["Targets that wait for you", "Choose the price you are willing to pay. The tracker keeps watch and surfaces the moment your target is reached."],
  ["Folders and group charts", "Sort products into folders and compare a whole group on one chart, fullscreen when you need it."],
  ["One calm dashboard", "Review tracked products, current prices, changes, and alert status without reopening a trail of marketplace tabs."],
  ["Out of stock, flagged", "Products that become unavailable are marked in your list, so you stop checking pages that cannot help."],
  ["Your data stays portable", "Price history is stored locally in your browser and can be exported or imported as a JSON backup."],
];

const faqs = [
  ["How do I track a price on Ozon?", "Install the extension from the Chrome Web Store, open a product on Ozon and save it to your watchlist. The tracker records its price over time and shows the history as a chart."],
  ["Does it work with Wildberries and Yandex Market?", "Yes. Price Tracker supports Ozon, Wildberries and Yandex Market."],
  ["Can I get an alert when a price drops?", "Yes. Set a target price for a product and the tracker flags it when the price reaches your target."],
  ["Where is my price history stored?", "In your browser’s local database, on your device. You can export a JSON backup and import it again whenever you want."],
  ["Do I need an account?", "No. The extension works without an account."],
  ["Which browsers are supported?", "It is built for Google Chrome and installs from the Chrome Web Store."],
];

const siteUrl = profile.siteUrl;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Price Tracker for Ozon, Wildberries & Yandex Market",
      alternateName: "Ozon Price Tracker",
      applicationCategory: "BrowserApplication",
      operatingSystem: "Chrome",
      description,
      url: `${siteUrl}${path}`,
      downloadUrl: chromeWebStoreUrl,
      inLanguage: ["en", "ru"],
      author: { "@type": "Person", name: profile.name, url: siteUrl },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/projects` },
        { "@type": "ListItem", position: 3, name: "Ozon Price Tracker", item: `${siteUrl}${path}` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
    },
  ],
};

function PriceChart() {
  return <figure className="op-tile">
    <div className="mono op-tile-top"><span>Price history · 90 days</span><span className="op-tile-status"><span className="dot" aria-hidden="true" />Illustration</span></div>
    <p className="op-product">Wireless headphones</p>
    <div className="op-price-row"><strong className="op-price">7 490 ₽</strong><s className="op-was">9 090 ₽</s><span className="mono op-drop">−17.6%</span></div>
    <svg viewBox="0 0 720 250" role="img" aria-labelledby="op-chart-title op-chart-desc">
      <title id="op-chart-title">Price history chart for an example product</title>
      <desc id="op-chart-desc">The price holds near 9 000 ₽ for most of 90 days, then drops to 7 490 ₽ at the end.</desc>
      <g className="op-grid"><line x1="60" x2="600" y1="30" y2="30" /><line x1="60" x2="600" y1="102" y2="102" /><line x1="60" x2="600" y1="174" y2="174" /><line x1="60" x2="600" y1="210" y2="210" /></g>
      <g className="op-axis" textAnchor="end"><text x="48" y="34">9 500</text><text x="48" y="106">8 500</text><text x="48" y="178">7 500</text></g>
      <g className="op-axis"><text x="60" y="236">90 days ago</text><text x="600" y="236" textAnchor="end">today</text></g>
      <line className="op-ref" x1="60" x2="600" y1="59.5" y2="59.5" />
      <text className="op-axis" x="600" y="49" textAnchor="end">earlier price 9 090</text>
      <path className="op-line" pathLength={1} d="M60 59.5H150V88.3H228V45.1H300V66.7H390V109.9H570V174.7H600" />
      <g className="op-end"><circle cx="600" cy="174.7" r="6" /><rect x="618" y="158" width="92" height="32" rx="4" /><text x="664" y="179" textAnchor="middle">7 490 ₽</text></g>
    </svg>
    <figcaption className="mono op-note">Example data, not a real product.</figcaption>
  </figure>;
}

export default function OzonPriceTrackerPage() {
  return <div className="site-shell op-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader active="work" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <main className="page-content op-page" id="main-content">
      <section className="op-hero" aria-labelledby="op-title">
        <p className="mono op-kicker"><span className="dot" aria-hidden="true" />Chrome extension · Published</p>
        <h1 id="op-title">Price history for Ozon, Wildberries &amp; Yandex Market.</h1>
        <p className="op-lede">Price Tracker saves every price you check, shows how it moved, and flags the moment your target is reached. Your data stays in your browser.</p>
        <div className="op-actions"><a className="button button-primary" href={chromeWebStoreUrl} target="_blank" rel="noreferrer">Add to Chrome <span aria-hidden="true">↗</span></a><a className="text-action" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a></div>
        <ul className="mono op-facts"><li>Ozon</li><li>Wildberries</li><li>Yandex Market</li><li>No account</li></ul>
      </section>

      <PriceChart />

      <section id="how-it-works" className="op-section" aria-labelledby="op-how">
        <div className="mono section-bar"><span>S.01</span><span>3 steps</span></div>
        <div className="op-head"><p className="mono muted">From first click to a good price</p><h2 id="op-how">How it works</h2></div>
        <ol className="op-steps">{steps.map(([number, name, body]) => <li className="op-step" key={number}><span className="mono muted">{number}</span><h3>{name}</h3><p>{body}</p></li>)}</ol>
      </section>

      <section className="band op-band" aria-labelledby="op-features"><div className="op-inner">
        <div className="mono section-bar"><span>S.02</span><span>{features.length} features</span></div>
        <div className="op-head"><p className="mono dim">Quietly useful</p><h2 id="op-features">Everything needed. Nothing in the way.</h2></div>
        <div className="band-grid">{features.map(([name, body]) => <article className="band-item" key={name}><h3>{name}</h3><p>{body}</p></article>)}</div>
      </div></section>

      <section className="op-section op-ru" lang="ru" aria-labelledby="op-ru-title">
        <div className="mono section-bar"><span>S.03</span><span>По-русски</span></div>
        <div className="op-ru-grid">
          <h2 id="op-ru-title">Отслеживание цен на Ozon, Wildberries и Яндекс Маркете</h2>
          <div>
            <p>Расширение для Chrome сохраняет цену каждого товара и показывает историю на графике. Задайте целевую цену, и трекер отметит момент, когда она достигнута.</p>
            <p>История цен хранится в вашем браузере. Аккаунт не нужен, а резервную копию можно экспортировать и импортировать.</p>
            <a className="button button-primary" href={chromeWebStoreUrl} target="_blank" rel="noreferrer">Установить в Chrome <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="op-section" aria-labelledby="op-faq">
        <div className="mono section-bar"><span>S.04</span><span>{faqs.length} questions</span></div>
        <div className="op-head"><p className="mono muted">Before you install</p><h2 id="op-faq">Questions</h2></div>
        <div className="op-faq">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="op-final" aria-labelledby="op-final-title">
        <h2 id="op-final-title">Stop checking. Start tracking.</h2>
        <p>Let the price come to you, and know exactly what changed when it does.</p>
        <div className="op-actions"><a className="button button-primary" href={chromeWebStoreUrl} target="_blank" rel="noreferrer">Get Price Tracker <span aria-hidden="true">↗</span></a><Link className="text-action" href="/projects">View all work <span aria-hidden="true">→</span></Link></div>
      </section>
      <SiteFooter />
    </main>
  </div>;
}
