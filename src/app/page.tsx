import type { Metadata } from "next";
import { buildMetadata, faqSchema, softwareApplicationSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { homeFaqs } from "@/lib/faq";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { PainSection } from "@/components/sections/pain-section";
import { Benefits } from "@/components/sections/benefits";
import { PlatformFlow } from "@/components/sections/platform-flow";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Features } from "@/components/sections/features";
import { Comparison } from "@/components/sections/comparison";
import { AiSection } from "@/components/sections/ai-section";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = buildMetadata({
  path: "/",
  description:
    "sastur é a plataforma de gestão para agências de viagens e agentes independentes. Centralize contatos, oportunidades, cotações, vouchers, tarefas e relatórios em um só lugar — do primeiro contato ao pós-venda.",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <TrustBar />
      <PainSection />
      <Benefits />
      <PlatformFlow />
      <ProductShowcase />
      <Features />
      <Comparison />
      <AiSection />
      <Faq />
      <FinalCta />
    </>
  );
}
