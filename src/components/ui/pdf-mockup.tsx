import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PdfMockupProps = {
  /** Path under /public once the real cotação (PDF export) is added. */
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
};

/**
 * Document frame for the "Cotação em PDF" print. Drop a real export
 * (com valores/dados sensíveis ocultos) and pass `src`.
 */
export function PdfMockup({
  src,
  alt,
  label = "Cotação em PDF",
  className,
}: PdfMockupProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-md", className)}>
      {/* stacked paper shadow */}
      <div className="absolute inset-x-4 -bottom-3 top-3 -z-10 rounded-xl bg-white/70 shadow-soft" />
      <div className="relative aspect-[1/1.32] overflow-hidden rounded-xl border border-border bg-white shadow-card">
        {src ? (
          <Image
            src={src}
            alt={alt ?? label}
            fill
            sizes="(max-width: 640px) 90vw, 384px"
            className="object-cover object-top"
          />
        ) : (
          <QuotePlaceholder label={label} />
        )}
      </div>
    </div>
  );
}

/** Illustrative proposal-document placeholder (não é um print real). */
function QuotePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full flex-col p-6">
      {/* header with agency brand */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-brand-600" />
          <div className="space-y-1">
            <div className="h-2.5 w-20 rounded bg-slate-300" />
            <div className="h-2 w-14 rounded bg-slate-200" />
          </div>
        </div>
        <div className="rounded-md bg-mint-100 px-2 py-1 text-[9px] font-semibold text-mint-700">
          PROPOSTA
        </div>
      </div>

      <div className="mt-4 h-3 w-32 rounded bg-slate-300" />
      <div className="mt-1.5 h-2 w-24 rounded bg-slate-200" />

      {/* product rows */}
      <div className="mt-5 space-y-2.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="h-6 flex-1 rounded-md bg-slate-100" />
            <div className="h-6 w-14 rounded-md bg-slate-100" />
          </div>
        ))}
      </div>

      {/* total */}
      <div className="mt-auto flex items-center justify-between rounded-lg bg-brand-50 px-3 py-2.5">
        <div className="h-2.5 w-12 rounded bg-brand-200" />
        <div className="h-3 w-16 rounded bg-brand-600" />
      </div>
      <span className="mt-3 text-center text-[10px] font-medium text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
