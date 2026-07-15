import type { Metadata } from "next";
import {
  Users,
  Target,
  Clock,
  BadgeCheck,
  BarChart3,
  Ticket,
} from "lucide-react";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { SolutionBody } from "@/components/sections/solution-body";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = buildMetadata({
  path: "/solucoes/agencias-pequenas",
  title: "CRM para pequenas agências de viagens",
  description:
    "A sastur é o sistema para pequenas agências de viagens que querem organizar clientes, acompanhar oportunidades e profissionalizar a operação sem complicação.",
  keywords: [
    "CRM para pequenas agências de viagens",
    "sistema para pequenas agências de viagens",
    "como organizar uma agência de viagens",
    "gestão para agência de viagens",
  ],
});

const content = {
  painsTitle: "Sua agência ainda controla clientes na planilha e no WhatsApp?",
  pains: [
    "Clientes e cotações espalhados em planilhas, cadernos e conversas soltas.",
    "Oportunidades esquecidas por falta de follow-up.",
    "Dificuldade de saber quanto a agência vendeu no mês.",
    "Retrabalho toda vez que um cliente antigo volta a comprar.",
    "Sensação de operação amadora perto de agências maiores.",
  ],
  solutionsTitle: "Organize sua agência e passe uma imagem profissional",
  solutionsDescription:
    "A sastur centraliza a operação da sua agência para você atender melhor, vender mais e crescer com organização.",
  solutions: [
    {
      icon: Users,
      title: "Clientes organizados",
      description:
        "Histórico completo de cada viajante: contatos, preferências e viagens anteriores em um só lugar.",
    },
    {
      icon: Target,
      title: "Painel de oportunidades",
      description:
        "Saiba em qual etapa está cada venda e quem precisa de atenção hoje para fechar mais viagens.",
    },
    {
      icon: Clock,
      title: "Follow-ups no prazo",
      description:
        "Lembretes automáticos para nunca deixar um cliente sem resposta.",
    },
    {
      icon: BarChart3,
      title: "Visão do negócio",
      description:
        "Relatórios de vendas e conversão para tomar decisões com clareza.",
    },
    {
      icon: BadgeCheck,
      title: "Operação profissional",
      description:
        "Padronize o atendimento e transmita a imagem de uma agência séria.",
    },
    {
      icon: Ticket,
      title: "Vouchers com IA",
      description:
        "Emita os vouchers da viagem em poucos minutos, com inteligência artificial e a marca da agência.",
    },
  ],
};

export default function AgenciasPequenasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },          { name: "Agências pequenas", path: "/solucoes/agencias-pequenas" },
        ])}
      />
      <PageHero
        eyebrow="Para agências pequenas"
        title={
          <>
            O CRM para{" "}
            <span className="text-gradient-brand">pequenas agências de viagens</span>{" "}
            crescerem com organização
          </>
        }
        description="Deixe as planilhas de lado. A sastur organiza seus clientes, acompanha suas oportunidades e profissionaliza a operação da sua agência — de forma simples e acessível."
        breadcrumbs={[
          { name: "Início", path: "/" },          { name: "Agências pequenas", path: "/solucoes/agencias-pequenas" },
        ]}
      />
      <SolutionBody content={content} />
      <ProductShowcase />
      <FinalCta />
    </>
  );
}
