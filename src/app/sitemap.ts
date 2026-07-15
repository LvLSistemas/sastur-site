import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

/**
 * Sitemap: static routes + one entry per blog post. Blog posts are
 * read from the MDX files so new posts are indexed automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/funcionalidades", priority: 0.9, freq: "monthly" },
    { path: "/solucoes/agencias-pequenas", priority: 0.9, freq: "monthly" },
    { path: "/solucoes/agentes-independentes", priority: 0.9, freq: "monthly" },
    { path: "/precos", priority: 0.9, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "daily" },
    { path: "/contato", priority: 0.6, freq: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
