import type { MetadataRoute } from "next";
import { projects } from "./projects-data";
import { profile } from "./site-config";
import { blogPosts } from "./writing-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/about", "/writing", "/reading", "/openhighlights", "/ozon-price-tracker", "/uniassist", "/save-image-as", "/save-image-as/privacy", "/flappy-bird", "/flappy-bird/privacy", "/flappy-bird/privacy/ru", ...projects.filter((project) => !project.href).map((project) => `/projects/${project.slug}`)];
  const articles = blogPosts.map((post) => ({ url: `${profile.siteUrl}${post.href ?? `/writing/${post.slug}`}`, lastModified: new Date(post.updatedAt ?? post.publishedAt) }));
  return [...staticRoutes.map((route) => ({ url: `${profile.siteUrl}${route || "/"}`, ...(route === "" && { lastModified: new Date("2026-10-24") }) })), ...articles];
}
