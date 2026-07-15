import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Features } from "@/components/sections/features";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { AiSection } from "@/components/sections/ai-section";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = buildMetadata({
  path: "/funcionalidades",
  title: "Funcionalidades da plataforma para agências de viagens",
  description:
    "Conheça as funcionalidades da sastur: gestão de contatos, painel de oportunidades, cotações inteligentes, vouchers com IA, tarefas, relatórios, mini site e mais — a plataforma de gestão para agências de viagens.",
  keywords: [
    "funcionalidades sistema para agência de viagens",
    "plataforma de gestão para agência de viagens",
    "cotação para agência de viagens",
    "CRM para agência de viagens",
  ],
});

export default function FuncionalidadesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Funcionalidades", path: "/funcionalidades" },
        ])}
      />
      <PageHero
        eyebrow="Funcionalidades"
        title={
          <>
            Tudo o que a sua agência faz,{" "}
            <span className="text-gradient-brand">em uma só plataforma</span>
          </>
        }
        description="Do primeiro contato ao pós-venda, a sastur reúne contatos, oportunidades, cotações, vouchers, tarefas e relatórios — com módulos pensados para a rotina de quem vende viagens."
        breadcrumbs={[
          { name: "Início", path: "/" },
          { name: "Funcionalidades", path: "/funcionalidades" },
        ]}
      />
      <Features detailed showHeading={false} />
      <ProductShowcase />
      <AiSection />
      <FinalCta />
    </>
  );
}
