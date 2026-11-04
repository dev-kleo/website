import { FundingHeading } from "./FundingHeading";
import { profile } from "./site-config";

// compact drops the app-promo extras (Flappy Bird privacy links, Product Hunt badge) for focused pages.
export function SiteFooter({ compact = false }: { compact?: boolean }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="mono dim">Contact</div>
      <FundingHeading />
      <div className="mono footer-links">
        <a href={`mailto:${profile.links.email}`}>{profile.links.email}</a>
        <a href={profile.links.orcid}>ORCID</a>
        {profile.links.scholar && <a href={profile.links.scholar}>Google Scholar</a>}
        <a href={profile.links.github}>GitHub</a>
        <a href={profile.links.linkedin}>LinkedIn</a>
      </div>
      {!compact && <>
      <div className="mono footer-links">
        <a href="/flappy-bird/privacy">Flappy Bird privacy policy</a>
        <a href="/flappy-bird/privacy/ru" hrefLang="ru" lang="ru">Политика конфиденциальности</a>
      </div>
      <a
        className="producthunt"
        href="https://www.producthunt.com/products/openhighlights-keep-what-matters?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-openhighlights-keep-what-matters"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Product Hunt serves this badge dynamically. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="OpenHighlights — Keep what matters - Highlight, save, and revisit anything you read online | Product Hunt"
          width="250"
          height="54"
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1263212&amp;theme=dark&amp;t=1790600113553"
        />
      </a>
      </>}
      <div className="mono footer-base"><span>© 2026 {profile.name}</span><span>{profile.brand} · Research &amp; product studio</span></div>
    </footer>
  );
}
