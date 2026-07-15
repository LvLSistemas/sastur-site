import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { blogCategories, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  path: "/blog",
  title: "Blog — dicas de gestão, vendas e CRM para agências de viagens",
  description:
    "Conteúdo para agências de viagens e agentes independentes: gestão, vendas, marketing, CRM, turismo, automação e inteligência artificial.",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="Blog sastur"
        title={
          <>
            Conteúdo para{" "}
            <span className="text-gradient-brand">agências que querem vender mais</span>
          </>
        }
        description="Dicas práticas de gestão, vendas, marketing e tecnologia para agências de viagens e agentes independentes."
        breadcrumbs={[
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
        primaryCta={null}
        secondaryCta={null}
      />

      <Section>
        {/* categories */}
        <div className="flex flex-wrap gap-2">
          {blogCategories.map((c) => (
            <span
              key={c.slug}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm text-foreground/70"
            >
              {c.name}
            </span>
          ))}
        </div>

        {/* posts */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {getAllPosts().map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
              >
                <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-mint-50">
                  <span className="text-sm text-muted-foreground">
                    Imagem do artigo
                  </span>
                </div>
                <Badge variant="brand" className="mt-5 w-fit">
                  {post.category}
                </Badge>
                <h2 className="mt-3 text-lg font-semibold text-navy-900 group-hover:text-brand-700">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readingTime}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-brand-700">
                    Ler artigo
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Novos artigos em breve. Esta é a estrutura preparada para escalar o
          marketing de conteúdo da sastur.
        </p>
      </Section>

      <FinalCta />
    </>
  );
}
