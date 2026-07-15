import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  /** Path under /public once the real print is added. */
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
};

/**
 * Phone device frame for the "Mini site" print. Drop a real capture
 * (com dados sensíveis ocultos) in /public/screenshots and pass `src`.
 */
export function PhoneMockup({ src, alt, label = "Mini site", className }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[290px] rounded-[2.6rem] border-[10px] border-navy-900 bg-navy-900 shadow-card",
        className
      )}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-navy-900" />
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.9rem] bg-white">
        {src ? (
          <Image
            src={src}
            alt={alt ?? label}
            fill
            sizes="260px"
            className="object-cover object-top"
          />
        ) : (
          <MiniSitePlaceholder label={label} />
        )}
      </div>
    </div>
  );
}

/** Illustrative mini-site placeholder (não é um print real). */
function MiniSitePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full flex-col">
      <div className="h-24 bg-gradient-to-br from-brand-600 to-navy-700" />
      <div className="-mt-8 flex flex-col items-center px-4">
        <div className="h-16 w-16 rounded-2xl border-4 border-white bg-mint-300" />
        <div className="mt-2 h-3 w-24 rounded bg-slate-300" />
        <div className="mt-1.5 h-2 w-16 rounded bg-slate-200" />
        <div className="mt-4 w-full space-y-2">
          <div className="h-9 rounded-xl bg-brand-600" />
          <div className="h-9 rounded-xl bg-brand-50 ring-1 ring-inset ring-brand-100" />
          <div className="h-9 rounded-xl bg-brand-50 ring-1 ring-inset ring-brand-100" />
        </div>
        <div className="mt-4 w-full rounded-xl border border-border p-3">
          <div className="h-2 w-20 rounded bg-slate-200" />
          <div className="mt-2 h-7 rounded-lg bg-slate-100" />
          <div className="mt-2 h-7 rounded-lg bg-slate-100" />
          <div className="mt-2 h-8 rounded-lg bg-mint-400" />
        </div>
      </div>
      <span className="mt-auto pb-4 text-center text-[10px] font-medium text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
