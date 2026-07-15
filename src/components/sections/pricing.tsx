import { Check, X } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Essencial",
    price: "R$ 49",
    period: "/mês",
    tagline:
      "Ideal para quem está começando ou deseja organizar a operação da agência em um único lugar.",
    highlighted: false,
    cta: {
      label: "Começar teste grátis",
      href: siteConfig.cta.trial,
    },
  },
  {
    name: "Profissional",
    price: "R$ 99",
    period: "/mês",
    tagline:
      "Perfeito para pequenas agências que querem ganhar produtividade e vender mais.",
    highlighted: true,
    cta: {
      label: "Começar teste grátis",
      href: siteConfig.cta.trial,
    },
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    tagline:
      "Para operações maiores que precisam de gestão avançada, implantação personalizada e suporte dedicado.",
    highlighted: false,
    cta: {
      label: "Falar com um especialista",
      href: siteConfig.cta.demo,
    },
  },
];

const comparison = [
  {
    feature: "Gestão de contatos (Leads, Clientes, Fidelizados e VIP)",
    essential: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Painel de oportunidades (funil de vendas)",
    essential: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Cotações profissionais em PDF e por link",
    essential: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Agenda, tarefas e follow-ups automáticos",
    essential: true,
    professional: true,
    enterprise: true,
  },

  {
    feature: "Mini site personalizado da agência",
    essential: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Personalização com logo e cores da agência",
    essential: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Base de conhecimento da geral",
    essential: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Relatórios",
    essential: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Usuários",
    essential: "1",
    professional: "Até 5",
    enterprise: "Ilimitados",
  },
  {
    feature: "Integração com WhatsApp",
    essential: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Vouchers com Inteligência Artificial",
    essential: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Treinamento da equipe",
    essential: false,
    professional: false,
    enterprise: true,
  },
  {
    feature: "Suporte prioritário",
    essential: false,
    professional: false,
    enterprise: true,
  },
];

export function Pricing() {
  return (
    <Section id="planos">
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 0.08}>
            <div
              className={cn(
                "rounded-3xl border bg-white p-8 transition-all",
                plan.highlighted
                  ? "border-brand-300 shadow-xl ring-2 ring-brand-200 scale-[1.02]"
                  : "border-border shadow-soft"
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-navy-900">
                  {plan.name}
                </h3>

                {plan.highlighted && (
                  <Badge variant="brand">Mais escolhido</Badge>
                )}
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                {plan.tagline}
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-navy-900">
                  {plan.price}
                </span>

                <span className="ml-1 text-muted-foreground">
                  {plan.period}
                </span>
              </div>

              <Button
                href={plan.cta.href}
                variant={plan.highlighted ? "primary" : "outline"}
                size="lg"
                className="mt-8 w-full"
              >
                {plan.cta.label}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr className="border-b">
              <th className="px-6 py-5 text-left text-sm font-semibold">
                Recursos
              </th>

              <th className="px-6 py-5 text-center text-sm font-semibold">
                Essecial
              </th>

              <th className="px-6 py-5 text-center text-sm font-semibold text-brand-600">
                Profissional
              </th>

              <th className="px-6 py-5 text-center text-sm font-semibold">
                Enterprise
              </th>
            </tr>
          </thead>

          <tbody>
            {comparison.map((row) => (
              <tr key={row.feature} className="border-b last:border-0">
                <td className="px-6 py-4 text-sm font-medium text-navy-900">
                  {row.feature}
                </td>

                {[row.essential, row.professional, row.enterprise].map((value, index) => (
                  <td key={index} className="px-6 py-4 text-center">
                    {typeof value === "boolean" ? (
                      value ? (
                        <Check className="mx-auto h-5 w-5 text-emerald-600" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-slate-300" />
                      )
                    ) : (
                      <span className="font-medium text-navy-900">
                        {value}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}