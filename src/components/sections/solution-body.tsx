import { Check, X } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import type { LucideIcon } from "lucide-react";

export type SolutionContent = {
  painsTitle: string;
  pains: string[];
  solutionsTitle: string;
  solutionsDescription: string;
  solutions: { icon: LucideIcon; title: string; description: string }[];
};

export function SolutionBody({ content }: { content: SolutionContent }) {
  return (
    <>
      {/* Pains */}
      <Section className="bg-muted/40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              {content.painsTitle}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Se você se identifica com estas situações, a <b>sastur</b> foi feita para
              você.
            </p>
          </Reveal>
          <Reveal from="left" delay={0.1}>
            <ul className="space-y-3">
              {content.pains.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 text-sm text-navy-900 shadow-soft"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Solutions */}
      <Section>
        <SectionHeading
          eyebrow="Como a sastur ajuda"
          title={content.solutionsTitle}
          description={content.solutionsDescription}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.solutions.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <article className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:border-brand-200 hover:shadow-card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <s.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-5 flex items-center gap-2 text-base font-semibold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-mint-700">
                  <Check className="h-3.5 w-3.5" /> Incluído na <b>sastur</b>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
