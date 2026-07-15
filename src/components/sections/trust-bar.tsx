import { Plane, ShieldCheck, MessageSquare, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const points = [
  { icon: Plane, label: "Feito para agências de viagens" },
  { icon: Zap, label: "Simples de usar desde o primeiro dia" },
  { icon: MessageSquare, label: "Suporte em português" },
  { icon: ShieldCheck, label: "Seus dados seguros na nuvem" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-muted/40 py-10">
      <Container>
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Feito para quem vende viagens — de agentes independentes a operadoras
          </p>
        </Reveal>
        <div className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {points.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 0.06}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <p.icon className="h-5.5 w-5.5" />
              </span>
              <span className="text-sm font-medium text-navy-900">
                {p.label}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
