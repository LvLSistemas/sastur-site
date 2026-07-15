import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { buildMetadata, breadcrumbSchema, absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { FinalCta } from "@/components/sections/final-cta";
import { Mdx } from "@/components/blog/mdx";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    path: `/blog/${post.meta.slug}`,
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.keywords,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { meta, content } = post;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    articleSection: meta.category,
    keywords: meta.keywords?.join(", "),
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/brand/icone-cor.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${meta.slug}`),
    inLanguage: "pt-BR",
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: meta.title, path: `/blog/${meta.slug}` },
        ])}
      />

      <article className="border-b border-border py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand-700"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao blog
          </Link>
          <Badge variant="brand" className="mt-6">
            {meta.category}
          </Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
            {meta.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{meta.description}</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {meta.readingTime} de leitura
          </div>

          <div
            className="prose prose-slate mt-10 max-w-none
              prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-navy-900
              prose-h2:mt-12 prose-h2:text-2xl sm:prose-h2:text-3xl
              prose-h3:mt-8 prose-h3:text-xl
              prose-p:leading-relaxed prose-p:text-foreground/80
              prose-li:text-foreground/80 prose-strong:text-navy-900
              prose-a:font-medium prose-a:text-brand-700 prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-brand-300 prose-blockquote:bg-brand-50/50 prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-navy-900"
          >
            <Mdx source={content} />
          </div>
        </Container>
      </article>

      <FinalCta />
    </>
  );
}
