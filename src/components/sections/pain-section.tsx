import {
  MessageCircle,
  Table,
  CalendarDays,
  FileText,
  StickyNote,
  Mail,
  ArrowDown,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const tools = [
  { icon: MessageCircle, name: "WhatsApp", pain: "conversas e cotações perdidas" },
  { icon: Table, name: "Planilhas", pain: "clientes espalhados" },
  { icon: CalendarDays, name: "Agenda", pain: "follow-ups esquecidos" },
  { icon: FileText, name: "PDFs", pain: "cotações soltas" },
  { icon: StickyNote, name: "Anotações", pain: "informação que se perde" },
  { icon: Mail, name: "E-mails", pain: "histórico fragmentado" },
];

export function PainSection() {
  return (
    <Section id="dor">
      <SectionHeading
        eyebrow="A rotina de sempre"
        title="Ainda organiza sua agência assim?"
        description="Cada coisa em uma ferramenta, informação espalhada e vendas escapando sem você perceber. Você reconhece?"
      />

      <div className="mt-11 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {tools.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.05}>
            <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-white p-5 text-center shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                <t.icon className="h-5.5 w-5.5" />
              </span>
              <div className="mt-3 text-sm font-semibold text-navy-900">
                {t.name}
              </div>
              <div className="mt-1 text-xs leading-snug text-muted-foreground">
                {t.pain}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-10 flex flex-col items-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <ArrowDown className="h-5 w-5" />
        </span>
        <div className="mt-6 w-full max-w-3xl rounded-3xl bg-gradient-to-br from-brand-600 to-navy-700 px-6 py-8 text-center text-white shadow-card sm:px-10">
          <p className="text-xl font-semibold sm:text-2xl">
            Tudo isso passa a funcionar em um único lugar.
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/80">
            Com a sastur, a operação inteira da sua agência — do primeiro contato
            ao pós-venda — em uma só plataforma.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
