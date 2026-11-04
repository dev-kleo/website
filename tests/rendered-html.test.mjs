import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("portfolio source contains project routes and no placeholder hrefs", async () => {
  const [home, header, projects, config] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/SiteHeader.tsx", root), "utf8"),
    readFile(new URL("app/projects-data.ts", root), "utf8"),
    readFile(new URL("app/site-config.ts", root), "utf8"),
  ]);
  assert.match(home, /HomeShowcase/);
  assert.doesNotMatch(`${home}\n${header}`, /href=["']#["']/);
  assert.match(projects, /Ozon Price Tracker/);
  assert.match(projects, /UniAssist/);
  assert.match(config, /siteUrl: process\.env\.NEXT_PUBLIC_SITE_URL \?\? "https:\/\/deyintelligence\.com"/);
  assert.match(config, /github: "https:\/\/github\.com\/dev-kleo"/);
});
test("publications page uses the browser component", async () => {
  const page = await readFile(new URL("app/publications/page.tsx", root), "utf8");
  assert.match(page, /<PublicationsBrowser/);
});

test("publication links are real, specific URLs", async () => {
  const { publications } = await import("../app/publications-data.ts");
  const bad = (url) => {
    try {
      const u = new URL(url);
      return u.protocol !== "https:" || /(^|\.)example\.(com|org|net)$/.test(u.hostname) || (u.pathname === "/" && !u.search && !u.hash);
    } catch { return true; }
  };
  for (const p of publications) {
    const urls = [...(p.venueUrl !== undefined ? [["venueUrl", p.venueUrl]] : []), ...Object.entries(p.links ?? {})];
    for (const [key, url] of urls) assert.ok(!bad(url), `${p.id}.${key} is empty, example.com or a bare homepage: "${url}"`);
    assert.ok(["Preprint", "Under review", "In preparation", "Published"].includes(p.status), `${p.id} has an invalid status`);
  }
});
