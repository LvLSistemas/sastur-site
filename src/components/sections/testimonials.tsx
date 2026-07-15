import { Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

/**
 * TODO: substituir por depoimentos reais de clientes (nome, agência,
 * cidade e, se possível, foto em /public/testimonials).
 */
const testimonials = [
  {
    quote:
      "Antes eu perdia cliente por esquecer de responder. Agora a sastur me lembra de cada follow-up e minhas vendas aumentaram de verdade.",
    name: "Cliente sastur",
    role: "Agente de viagens independente",
    initials: "AV",
  },
  {
    quote:
      "Finalmente um sistema que fala a língua da agência de viagens. Não precisei adaptar nada — já veio pronto para o meu processo.",
    name: "Cliente sastur",
    role: "Agência de viagens pequena",
    initials: "AP",
  },
  {
    quote:
      "Minha equipe toda usa. Consigo ver o funil, as oportunidades paradas e o desempenho de cada agente em segundos.",
    name: "Cliente sastur",
    role: "Agência em crescimento",
    initials: "AC",
  },
];

export function Testimonials() {
  return (
    <Section id="depoimentos" className="bg-muted/40">
      <SectionHeading
        eyebrow="Depoimentos"
        title="Agências que se organizaram e venderam mais"
        description="Veja o que agentes e agências dizem sobre trabalhar com um CRM feito para o turismo."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-soft">
              <div className="flex gap-0.5 text-mint-500">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-navy-900">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-navy-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
