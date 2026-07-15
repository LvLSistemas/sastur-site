import {
  UserPlus,
  MessageCircle,
  FileText,
  BellRing,
  Handshake,
  Ticket,
  HeartHandshake,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  { icon: UserPlus, title: "Lead", sub: "Um interessado chega até você" },
  { icon: MessageCircle, title: "Contato", sub: "Entra na sua carteira de clientes" },
  { icon: FileText, title: "Cotação", sub: "Proposta profissional enviada" },
  { icon: BellRing, title: "Follow-up", sub: "Lembretes para não perder a venda" },
  { icon: Handshake, title: "Venda", sub: "Negócio fechado e registrado" },
  { icon: Ticket, title: "Voucher", sub: "Gerado com IA em minutos" },
  { icon: HeartHandshake, title: "Pós-venda", sub: "Cliente fideliza e indica" },
];

export function PlatformFlow() {
  return (
    <Section id="fluxo" containerClassName="max-w-7xl">
      <SectionHeading
        eyebrow="A jornada completa"
        title="Do primeiro contato ao pós-venda, em um só fluxo"
        description="Em vez de pular entre WhatsApp, planilhas e documentos, cada etapa da venda de viagens acontece dentro da sastur — de ponta a ponta."
      />

      <div className="relative mt-14">
        {/* connecting line (desktop) */}
        <div className="absolute inset-x-0 top-9 hidden h-1 rounded-full bg-gradient-to-r from-brand-300 via-brand-400 to-mint-400 md:block" />

        <ol className="grid gap-10 sm:grid-cols-2 md:grid-cols-7 md:gap-5">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 0.06}
              className="relative flex flex-col items-center text-center"
            >
              <span className="relative z-10 flex h-18 w-18 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-card ring-1 ring-brand-100">
                <s.icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-[11px] font-bold text-white shadow-soft">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-5 text-base font-semibold text-navy-900">
                {s.title}
              </h3>
              <p className="mt-1 max-w-[170px] text-xs leading-relaxed text-muted-foreground">
                {s.sub}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
