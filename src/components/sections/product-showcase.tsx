import { Check, Target, FileText, Globe } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { AppWindow } from "@/components/ui/app-window";
import { PdfMockup } from "@/components/ui/pdf-mockup";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { cn } from "@/lib/utils";

/**
 * Estratégia: poucos prints reais, posicionados com cuidado. Adicione
 * as capturas (com dados sensíveis ocultos) em /public/screenshots e
 * informe o `src` de cada spotlight abaixo.
 */
const spotlights = [
  {
    id: "oportunidades",
    kind: "browser" as const,
    icon: Target,
    eyebrow: "Painel de oportunidades",
    title: "Acompanhe cada venda por etapa",
    description:
      "Veja em uma tela quem precisa de atenção hoje e nunca mais perca um negócio por falta de retorno.",
    bullets: [
      "Etapas da venda e termômetro da oportunidade",
      "Último contato e agente responsável",
      "Atalho para conversar pelo WhatsApp",
    ],
    src: "/screenshots/oportunidades.png" as string | undefined,
    reverse: false,
  },
  {
    id: "cotacoes",
    kind: "pdf" as const,
    icon: FileText,
    eyebrow: "Cotações inteligentes",
    title: "Envie propostas profissionais em PDF",
    description:
      "Monte cotações com a identidade da sua agência e compartilhe por um link ou PDF — sem montar documentos manualmente.",
    bullets: [
      "Soma automática dos valores",
      "Com a marca da sua agência",
      "Cliente compara e aceita a proposta",
    ],
    src: "/screenshots/cotacao-pdf.png",
    reverse: true,
  },
  {
    id: "minisite",
    kind: "phone" as const,
    icon: Globe,
    eyebrow: "Mini site da agência",
    title: "Capte novos clientes com um único link",
    description:
      "Compartilhe o mini site da sua agência: todo formulário enviado vira, automaticamente, um novo contato no sistema.",
    bullets: [
      "Página personalizada da agência",
      "Formulário de contato integrado",
      "Novos leads direto na plataforma",
    ],
    src: "/screenshots/mini-site.png",
    reverse: false,
  },
];

function Mockup({
  kind,
  label,
  src,
  alt,
}: {
  kind: "browser" | "pdf" | "phone";
  label: string;
  src?: string;
  alt: string;
}) {
  if (kind === "pdf") return <PdfMockup label={label} src={src} alt={alt} />;
  if (kind === "phone") return <PhoneMockup label={label} src={src} alt={alt} />;
  // ratio matches the funnel print (1689×931) so nothing is cropped.
  return <AppWindow label={label} src={src} alt={alt} ratio="1689/931" />;
}

export function ProductShowcase() {
  return (
    <Section id="produto" className="bg-[#F4F8FC]" containerClassName="max-w-7xl">
      <SectionHeading
        eyebrow="Conheça a plataforma"
        title="Veja a sastur por dentro"
        description="Alguns momentos-chave da operação da sua agência — do acompanhamento das vendas ao mini site que capta novos clientes."
      />

      <div className="mt-12 space-y-12 sm:space-y-16">
        {spotlights.map((s) => (
          <div
            key={s.id}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal
              from={s.reverse ? "left" : "right"}
              className={cn(s.reverse && "lg:order-2")}
            >
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                <s.icon className="h-4 w-4" />
                {s.eyebrow}
              </div>
              <h3 className="text-2xl font-semibold text-navy-900 sm:text-3xl">
                {s.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 text-sm text-navy-900"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-mint-100 text-mint-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              delay={0.1}
              from={s.reverse ? "right" : "left"}
              // prints ficam parcialmente desfocados (apoio visual, não exposição do sistema)
              className={cn("[&_img]:blur-[2px]", s.reverse && "lg:order-1")}
            >
              <Mockup
                kind={s.kind}
                label={`${s.eyebrow}`}
                src={s.src}
                alt={s.title}
              />
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
