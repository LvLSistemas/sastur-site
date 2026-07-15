"use client";

import * as React from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const subjects = [
  { value: "teste", label: "Quero começar um teste grátis" },
  { value: "demonstracao", label: "Quero agendar uma demonstração" },
  { value: "duvidas", label: "Tenho dúvidas sobre a plataforma" },
  { value: "suporte", label: "Preciso de suporte" },
];

const inputClass =
  "w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-muted-foreground/70 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-ring/40";

export function ContactForm({ initialSubject }: { initialSubject?: string }) {
  const [status, setStatus] = React.useState<"idle" | "loading" | "done">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    // TODO: ligar a um endpoint real (/api/contato, CRM, e-mail ou webhook).
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-mint-200 bg-mint-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-mint-600" />
        <h3 className="text-lg font-semibold text-navy-900">
          Recebemos seu contato!
        </h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Nosso time comercial vai falar com você em breve. Enquanto isso, você
          já pode começar seu teste gratuito.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-900">
            Nome
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="agency" className="mb-1.5 block text-sm font-medium text-navy-900">
            Agência
          </label>
          <input id="agency" name="agency" className={inputClass} placeholder="Nome da agência (opcional)" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-900">
            E-mail
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="voce@email.com" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-900">
            WhatsApp
          </label>
          <input id="phone" name="phone" className={inputClass} placeholder="(00) 00000-0000" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-navy-900">
          Como podemos ajudar?
        </label>
        <select
          id="subject"
          name="subject"
          defaultValue={initialSubject ?? subjects[0].value}
          className={cn(inputClass, "appearance-none")}
        >
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-900">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Conte um pouco sobre a sua agência e o que você procura."
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
          </>
        ) : (
          "Enviar contato"
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Ao enviar, você concorda em ser contatado pelo time da <b>sastur</b>.
      </p>
    </form>
  );
}
