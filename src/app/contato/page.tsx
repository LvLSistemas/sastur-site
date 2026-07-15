import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Rocket, ChevronRight } from "lucide-react";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  path: "/contato",
  title: "Contato — fale com a sastur",
  description:
    "Fale com o time da sastur. Agende uma demonstração, tire dúvidas ou comece um teste gratuito do CRM feito para agências de viagens.",
});

export default async function ContatoPage({
  searchParams,
}: {
  searchParams: Promise<{ assunto?: string }>;
}) {
  const { assunto } = await searchParams;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Contato", path: "/contato" },
        ])}
      />

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_68%,transparent_100%)]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(22,112,199,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,112,199,0.08) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute -top-32 left-1/2 h-96 w-[720px] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />
        </div>
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Link href="/" className="hover:text-brand-700">
              Início
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-navy-900">Contato</span>
          </nav>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <Badge variant="brand">Contato</Badge>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                Vamos organizar a sua agência{" "}
                <span className="text-gradient-brand">juntos</span>
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                Agende uma demonstração, tire suas dúvidas ou comece agora um
                teste gratuito. Nosso time entende do mercado de viagens e
                responde em português.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft transition-colors hover:border-brand-200"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy-900">E-mail</div>
                    <div className="text-sm text-muted-foreground">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>
                <a
                  href={siteConfig.cta.whatsapp}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft transition-colors hover:border-brand-200"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-100 text-mint-700">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy-900">WhatsApp</div>
                    <div className="text-sm text-muted-foreground">
                      {siteConfig.contact.whatsappLabel}
                    </div>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Rocket className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-navy-900">
                      Prefere ir direto ao ponto?
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Comece um teste gratuito agora.
                    </div>
                  </div>
                  <Button href={siteConfig.cta.trial} variant="subtle" size="sm">
                    Testar
                  </Button>
                </div>
              </div>
            </div>

            <ContactForm initialSubject={assunto} />
          </div>
        </Container>
      </section>
    </>
  );
}
