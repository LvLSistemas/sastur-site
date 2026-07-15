"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { homeFaqs } from "@/lib/faq";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <Section id="faq" className="bg-[#F6F9FF]">
      <SectionHeading
        eyebrow="Dúvidas frequentes"
        title="Perguntas comuns de quem vende viagens"
        description="Se a sua dúvida não estiver aqui, fale com o nosso time — respondemos em português e conhecemos o seu mercado."
      />

      <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-white">
        {homeFaqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.question}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-navy-900">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-300",
                    isOpen && "rotate-45 bg-brand-600 text-white"
                  )}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
