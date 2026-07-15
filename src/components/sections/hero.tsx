import { ArrowRight, CalendarCheck, Check, Sparkles, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { AppWindow } from "@/components/ui/app-window";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_95%_55%_at_50%_0%,#000_70%,transparent_100%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(22,112,199,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,112,199,0.10) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute right-[8%] top-40 h-72 w-72 rounded-full bg-mint-200/40 blur-3xl" />
      </div>

      <Container className="pb-16 pt-14 text-center sm:pb-20 sm:pt-20">
        <Reveal>
          <Badge variant="brand" className="mx-auto">
            <Sparkles className="h-3.5 w-3.5" />
            A plataforma de gestão para agências de viagens
          </Badge>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl md:text-6xl md:leading-[1.05]">
            A plataforma que organiza sua agência de viagens e faz você{" "}
            <span className="text-gradient-brand">vender mais</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Pare de perder clientes entre WhatsApp, planilhas e anotações. A{" "}
            <b>sastur</b> reúne clientes, oportunidades, cotações, tarefas,
            vouchers, relatórios e o mini site da sua agência — tudo em um só
            lugar.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={siteConfig.cta.trial} size="lg" className="w-full sm:w-auto">
              Começar teste grátis
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={siteConfig.cta.demo}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Agendar demonstração
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {["Teste grátis", "Sem cartão de crédito", "Configuração em poucos minutos"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-mint-600" />
                  {item}
                </span>
              )
            )}
          </div>
        </Reveal>

        {/* product window */}
        <Reveal delay={0.24} className="relative mx-auto mt-11 max-w-6xl sm:mt-14">
          <div className="absolute -inset-x-8 -bottom-8 -top-4 -z-10 rounded-[2rem] bg-gradient-to-b from-brand-100/50 to-transparent blur-2xl" />
          <AppWindow
            src="/screenshots/dashboard.png"
            alt="Painel de visão geral da sastur: vendas do mês, oportunidades, aniversariantes e próximos embarques"
            label="Painel — Visão geral da agência"
            priority
            ratio="1439/868"
          />

          {/* floating accent cards — ilustrativos da plataforma */}
          <div className="absolute -left-4 top-16 hidden rounded-2xl border border-border bg-white p-3 shadow-card md:flex md:items-center md:gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-mint-100 text-mint-700">
              <Ticket className="h-4.5 w-4.5" />
            </span>
            <div className="text-left">
              <div className="text-xs text-muted-foreground">Voucher</div>
              <div className="text-sm font-semibold text-navy-900">gerado com IA</div>
            </div>
          </div>
          <div className="absolute -right-4 bottom-16 hidden rounded-2xl border border-border bg-white p-3 shadow-card md:flex md:items-center md:gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
              <CalendarCheck className="h-4.5 w-4.5" />
            </span>
            <div className="text-left">
              <div className="text-xs text-muted-foreground">Follow-up</div>
              <div className="text-sm font-semibold text-navy-900">no prazo</div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
