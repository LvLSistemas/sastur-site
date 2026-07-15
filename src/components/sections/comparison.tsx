import { Check, X } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { LogoMark } from "@/components/brand/logo";

const rows = [
  {
    topic: "Onde ficam os clientes",
    today: "Espalhados em WhatsApp, planilhas e blocos de notas",
    sastur: "Uma carteira de clientes organizada, com histórico completo",
  },
  {
    topic: "Cotações",
    today: "Documentos montados manualmente, um por um",
    sastur: "Cotações profissionais em minutos, por link ou PDF",
  },
  {
    topic: "Vouchers",
    today: "De cada cia aérea ou hotel, sem sua identidade",
    sastur: "Gerados com inteligência artificial, padronizados",
  },
  {
    topic: "Follow-up",
    today: "Depende da sua memória — e clientes acabam esquecidos",
    sastur: "Lembretes automáticos para não perder nenhuma venda",
  },
  {
    topic: "Acompanhar as vendas",
    today: "Sem visão clara de quantas oportunidades estão em aberto",
    sastur: "Painel de oportunidades por etapa e relatórios de resultado",
  },
  {
    topic: "Sua marca",
    today: "Materiais genéricos, sem identidade da agência",
    sastur: "Cotações e vouchers com a cara da sua agência",
  },
];

export function Comparison() {
  return (
    <Section id="comparacao" className="bg-navy-900 text-white">
      <SectionHeading
        eyebrow="Antes e depois"
        title={
          <span className="text-white">
            Da bagunça do dia a dia para uma operação organizada
          </span>
        }
        description={
          <span className="text-white/70">
            A maioria das pequenas agências trabalha com WhatsApp, planilhas e
            blocos de notas. Veja o que muda quando tudo fica em uma só
            plataforma.
          </span>
        }
      />

      <Reveal className="mt-11 overflow-hidden rounded-2xl border border-white/10">
        {/* header */}
        <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-white/[0.03]">
          <div className="p-5" />
          <div className="border-l border-white/10 p-5 text-center text-sm font-medium text-white/60">
            Como a agência trabalha hoje
          </div>
          <div className="border-l border-white/10 bg-brand-600/20 p-5 text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
              <LogoMark mono className="h-5 w-5" />
              Com a <b>sastur</b>
            </span>
          </div>
        </div>

        {rows.map((row, i) => (
          <div
            key={row.topic}
            className={`grid grid-cols-[1.1fr_1fr_1fr] ${
              i % 2 === 0 ? "bg-white/[0.02]" : ""
            }`}
          >
            <div className="flex items-center p-5 text-sm font-medium text-white">
              {row.topic}
            </div>
            <div className="flex items-start gap-2 border-l border-white/10 p-5 text-sm text-white/60">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />
              {row.today}
            </div>
            <div className="flex items-start gap-2 border-l border-white/10 bg-brand-600/10 p-5 text-sm text-white">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-400" />
              {row.sastur}
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
