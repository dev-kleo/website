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
  assert.match(config, /github: "https:\/\/github\.com\/Luffy-me"/);
});
test("publications page is routed, listed in nav and sitemap", async () => {
  const [header, sitemap, data] = await Promise.all([
    readFile(new URL("app/SiteHeader.tsx", root), "utf8"),
    readFile(new URL("app/sitemap.ts", root), "utf8"),
    readFile(new URL("app/publications-data.ts", root), "utf8"),
  ]);
  assert.match(header, /href: "\/publications"/);
  assert.match(sitemap, /"\/publications"/);
  assert.match(data, /placeholder-/);
});
