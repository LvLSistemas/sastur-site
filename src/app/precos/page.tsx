import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { homeFaqs } from "@/lib/faq";

export const metadata: Metadata = buildMetadata({
  path: "/precos",
  title: "Preços do CRM sastur para agências de viagens",
  description:
    "Conheça os planos da sastur, o CRM para agências de viagens e agentes independentes. Comece com um teste gratuito",
  keywords: [
    "preço CRM agência de viagens",
    "quanto custa sistema para agência de viagens",
    "planos CRM turismo",
  ],
});

export default function PrecosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Preços", path: "/precos" },
        ])}
      />
      <JsonLd data={faqSchema(homeFaqs)} />
      <PageHero
        eyebrow="Preços"
        title={
          <>
            Preços que cabem no bolso de{" "}
            <span className="text-gradient-brand">quem está começando</span>
          </>
        }
        description="Planos simples e transparentes para agentes independentes e agências de todos os tamanhos. Teste grátis!"
        breadcrumbs={[
          { name: "Início", path: "/" },
          { name: "Preços", path: "/precos" },
        ]}
        primaryCta={null}
        secondaryCta={null}
      />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
