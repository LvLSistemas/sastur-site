import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { platformFeatures } from "@/lib/features";
import { cn } from "@/lib/utils";

/**
 * `detailed` (página de Funcionalidades) mostra situação + itens de
 * destaque; o modo compacto (Home) mostra nome + benefício.
 * `showHeading=false` esconde o título (usado quando o PageHero já traz um).
 */
export function Features({
  detailed = false,
  showHeading = true,
}: {
  detailed?: boolean;
  showHeading?: boolean;
}) {
  return (
    <Section id="funcionalidades" className="bg-[#F8FAFD]">
      {showHeading && (
        <SectionHeading
          eyebrow="A plataforma"
          title="Tudo o que a sua agência faz, reunido em um só lugar"
          description="Cada módulo da sastur resolve uma situação real do dia a dia de quem vende viagens — do primeiro contato ao pós-venda."
        />
      )}

      <div
        className={cn(
          showHeading && "mt-11",
          detailed
            ? "grid gap-5 md:grid-cols-2"
            : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {platformFeatures.map((f, i) => (
          <Reveal key={f.id} delay={(i % 3) * 0.06}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-brand-200 hover:shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110">
                  <f.icon className="h-5.5 w-5.5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  {f.name}
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold leading-snug text-navy-900">
                {f.benefit}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.situation}
              </p>

              {detailed && (
                <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                  {f.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-navy-900"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-100 text-mint-700">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
