import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

type Crumb = { name: string; path: string };

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  primaryCta = { label: "Começar teste grátis", href: siteConfig.cta.trial },
  secondaryCta = { label: "Falar com o time", href: siteConfig.cta.demo },
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  breadcrumbs?: Crumb[];
  primaryCta?: { label: string; href: string } | null;
  secondaryCta?: { label: string; href: string } | null;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
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
      <Container className="py-16 sm:py-20">
        {breadcrumbs && (
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              {breadcrumbs.map((c, i) => (
                <span key={c.path} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-navy-900">{c.name}</span>
                  ) : (
                    <Link href={c.path} className="hover:text-brand-700">
                      {c.name}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <Badge variant="brand">{eyebrow}</Badge>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl md:text-[3.25rem] md:leading-[1.05]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
        {(primaryCta || secondaryCta) && (
          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta && (
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
