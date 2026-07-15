import { Users, Target, FileText, Ticket, BellRing } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const benefits = [
  {
    icon: Users,
    title: "Todos os clientes em um só lugar",
    description:
      "Pare de procurar conversas antigas no WhatsApp para lembrar a última cotação enviada. Todo o histórico do cliente fica organizado.",
  },
  {
    icon: Target,
    title: "Nenhuma venda esquecida",
    description:
      "Veja em qual etapa está cada negociação e saiba exatamente quem precisa de atenção hoje para não perder o negócio.",
  },
  {
    icon: FileText,
    title: "Cotações profissionais em minutos",
    description:
      "Monte propostas com a identidade da sua agência e compartilhe por um link — sem montar documentos manualmente.",
  },
  {
    icon: Ticket,
    title: "Vouchers na hora, com IA",
    description:
      "Depois de fechar a venda, a inteligência artificial monta o voucher para você: menos digitação, mais padrão.",
  },
  {
    icon: BellRing,
    title: "Follow-up que não deixa passar",
    description:
      "Quando um cliente faz aniversário ou está na hora de retornar, a plataforma lembra você automaticamente.",
  },
];

export function Benefits() {
  return (
    <Section id="beneficios" className="bg-[#F6F9FF]">
      <SectionHeading
        eyebrow="Por que a sastur?"
        title="Feita para a realidade de quem vende viagens"
        description="A maioria das agências controla tudo em WhatsApp, planilhas e blocos de notas. A sastur reúne essa bagunça em uma plataforma simples, pensada para o seu dia a dia."
      />

      <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.06}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <b.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.description}
              </p>
            </article>
          </Reveal>
        ))}

        {/* CTA card completing the grid */}
        <Reveal delay={0.3}>
          <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-brand-600 to-navy-700 p-7 text-white shadow-card">
            <div>
              <h3 className="text-lg font-semibold">
                Toda a operação em um só sistema
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Do primeiro contato ao pós-venda, sem pular de uma ferramenta
                para outra.
              </p>
            </div>
            <div className="mt-6 text-3xl font-semibold">5 min</div>
            <p className="text-sm text-white/70">para começar a organizar</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
