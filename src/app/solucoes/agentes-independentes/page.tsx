import type { Metadata } from "next";
import {
  Home,
  Contact,
  Clock,
  Globe,
  Ticket,
  TrendingUp,
} from "lucide-react";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { SolutionBody } from "@/components/sections/solution-body";
import { AiSection } from "@/components/sections/ai-section";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = buildMetadata({
  path: "/solucoes/agentes-independentes",
  title: "CRM para agentes de viagens independentes",
  description:
    "A sastur é o sistema para consultores e agentes de viagens independentes organizarem clientes, acompanharem oportunidades e venderem mais — mesmo trabalhando sozinhos.",
  keywords: [
    "CRM para agente de viagens",
    "CRM para consultores de viagens independentes",
    "sistema para consultor de viagens",
    "como vender mais viagens",
  ],
});

const content = {
  painsTitle: "Trabalhando sozinho e perdendo vendas por falta de organização?",
  pains: [
    "Muitos clientes ao mesmo tempo e nenhum lugar para centralizar tudo.",
    "Cotações e conversas perdidas no meio do WhatsApp.",
    "Esquecimento de retornar para clientes que estavam quase fechando.",
    "Falta de tempo para tudo — atendimento, cotação e prospecção.",
    "Dificuldade de passar profissionalismo trabalhando de casa.",
  ],
  solutionsTitle: "Seu escritório comercial completo, mesmo trabalhando sozinho",
  solutionsDescription:
    "A sastur faz o papel de assistente comercial do agente independente: organiza, lembra e ajuda a fechar mais viagens.",
  solutions: [
    {
      icon: Contact,
      title: "Todos os clientes num só lugar",
      description:
        "Centralize contatos, cotações e histórico sem depender de planilhas.",
    },
    {
      icon: Clock,
      title: "Nunca mais esqueça um follow-up",
      description:
        "A sastur lembra você de retornar para cada cliente no momento certo.",
    },
    {
      icon: TrendingUp,
      title: "Acompanhe suas oportunidades",
      description:
        "Veja quais negociações estão perto de fechar e priorize seu tempo.",
    },
    {
      icon: Globe,
      title: "Capte novos clientes",
      description:
        "Compartilhe o mini site da sua agência e receba os contatos direto no sistema.",
    },
    {
      icon: Ticket,
      title: "Vouchers com IA",
      description:
        "Emita os vouchers da viagem em poucos minutos, com inteligência artificial.",
    },
    {
      icon: Home,
      title: "Profissionalismo em home office",
      description:
        "Transmita a imagem de um profissional organizado e confiável.",
    },
  ],
};

export default function AgentesIndependentesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },          { name: "Agentes independentes", path: "/solucoes/agentes-independentes" },
        ])}
      />
      <PageHero
        eyebrow="Para agentes independentes"
        title={
          <>
            O CRM para{" "}
            <span className="text-gradient-brand">agentes de viagens independentes</span>{" "}
            venderem mais
          </>
        }
        description="Organize seus clientes, acompanhe cada oportunidade e nunca mais perca uma venda por falta de follow-up — mesmo trabalhando sozinho, de casa."
        breadcrumbs={[
          { name: "Início", path: "/" },          { name: "Agentes independentes", path: "/solucoes/agentes-independentes" },
        ]}
      />
      <SolutionBody content={content} />
      <AiSection />
      <FinalCta />
    </>
  );
}
