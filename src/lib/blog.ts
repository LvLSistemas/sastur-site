import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * File-based MDX blog. Posts live in `src/content/blog/*.mdx` with
 * YAML frontmatter (title, description, date, category, keywords).
 * Add a post = add a file. Read at build time (SSG).
 */

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export const blogCategories = [
  { slug: "gestao-de-agencias", name: "Gestão de Agências" },
  { slug: "crm", name: "CRM" },
  { slug: "marketing-para-agencias", name: "Marketing para Agências" },
  { slug: "vendas", name: "Vendas" },
  { slug: "turismo", name: "Turismo" },
  { slug: "tecnologia", name: "Tecnologia" },
  { slug: "automacao", name: "Automação" },
  { slug: "inteligencia-artificial", name: "Inteligência Artificial" },
];

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  cover?: string;
  keywords?: string[];
};

function estimateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

function toMeta(slug: string, data: Record<string, unknown>, content: string): BlogPostMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    category: String(data.category ?? "Turismo"),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    readingTime: estimateReadingTime(content),
    cover: data.cover ? String(data.cover) : undefined,
    keywords: Array.isArray(data.keywords) ? (data.keywords as string[]) : undefined,
  };
}

/** All published posts, newest first. */
export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return { meta: toMeta(slug, data, content), draft: Boolean(data.draft) };
    })
    .filter((p) => !p.draft)
    .map((p) => p.meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** A single post's metadata + raw MDX body, or null if not found. */
export function getPostBySlug(
  slug: string
): { meta: BlogPostMeta; content: string } | null {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { meta: toMeta(slug, data, content), content };
}
