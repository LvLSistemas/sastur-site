import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { LogoMark } from "@/components/brand/logo";
import { siteConfig } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-22">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-navy-800 px-6 py-16 text-center shadow-glow sm:px-16 sm:py-20">
            {/* decorative */}
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-mint-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <LogoMark mono className="mx-auto h-12 w-12 text-white" />
              <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                Comece hoje a organizar sua agência e vender mais viagens
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                Teste a <b>sastur</b> gratuitamente, sem
                complicação — e com suporte de quem entende de turismo.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href={siteConfig.cta.trial}
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Começar teste grátis
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href={siteConfig.cta.demo}
                  variant="white"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Agendar demonstração
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
