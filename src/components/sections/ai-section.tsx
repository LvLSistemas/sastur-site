import { Sparkles, Ticket, Palette, Zap, Plane } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";

const capabilities = [
  {
    icon: Ticket,
    title: "Vouchers gerados pela IA",
    description:
      "A partir da venda, a inteligência artificial monta o voucher para você.",
  },
  {
    icon: Palette,
    title: "Com a marca da sua agência",
    description:
      "Cada voucher sai padronizado e com a identidade visual da sua agência.",
  },
  {
    icon: Zap,
    title: "Pronto em poucos minutos",
    description:
      "O que antes era retrabalho manual vira um documento profissional em instantes.",
  },
];

export function AiSection() {
  return (
    <section id="ia" className="relative overflow-hidden py-16 sm:py-22">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 to-white" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <Badge variant="mint">
                <Sparkles className="h-3.5 w-3.5" />
                Inteligência artificial
              </Badge>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Transforme vendas em{" "}
                <span className="text-gradient-brand">vouchers profissionais</span>{" "}
                em segundos
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Depois de fechar a venda, a <b>sastur</b> usa inteligência artificial
                para gerar os vouchers da viagem com a sua marca. Menos digitação, mais padrão
                e mais tempo para você fazer o que importa: vender.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {capabilities.map((c, i) => (
                <Reveal key={c.title} delay={0.16 + i * 0.06}>
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy-900">{c.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {c.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal from="left" delay={0.1}>
            <VoucherIllustration />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/** Ilustração exclusiva de um voucher (não é um print do sistema). */
function VoucherIllustration() {
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100/60 to-mint-100/50 blur-2xl" />

      {/* voucher card */}
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
        {/* header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-brand-600 to-navy-700 px-6 py-5 text-white">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
              <Plane className="h-4 w-4" />
            </span>
            <div>
              <div className="text-xs text-white/70">Sua Agência</div>
              <div className="text-sm font-semibold">Voucher de viagem</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-mint-400 px-2.5 py-1 text-[10px] font-bold text-navy-900">
            <Sparkles className="h-3 w-3" /> IA
          </span>
        </div>

        {/* body */}
        <div className="space-y-4 px-6 py-6">
          {[
            { k: "Passageiro", w: "w-32" },
            { k: "Destino", w: "w-24" },
            { k: "Embarque", w: "w-20" },
            { k: "Localizador", w: "w-16" },
          ].map((row) => (
            <div key={row.k} className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                {row.k}
              </span>
              <span className={`h-3 rounded bg-slate-200 ${row.w}`} />
            </div>
          ))}
        </div>

        {/* perforation */}
        <div className="relative">
          <div className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-brand-50" />
          <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-brand-50" />
          <div className="mx-6 border-t border-dashed border-border" />
        </div>

        {/* footer */}
        <div className="flex items-center gap-4 px-6 py-5">
          <div className="grid grid-cols-4 gap-0.5">
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-[2px] ${
                  i % 3 === 0 ? "bg-navy-900" : "bg-slate-200"
                }`}
              />
            ))}
          </div>
          <div className="text-xs text-muted-foreground">
            Gerado pela inteligência artificial em segundos
          </div>
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -right-3 -top-3 flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 shadow-card">
        <Zap className="h-4 w-4 text-mint-500" />
        <span className="text-xs font-semibold text-navy-900">Pronto!</span>
      </div>
    </div>
  );
}
