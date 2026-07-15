import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type AppWindowProps = {
  /** Path under /public once the real screenshot is added. */
  src?: string;
  alt?: string;
  /** Label shown in the placeholder until a real print is added. */
  label?: string;
  url?: string;
  className?: string;
  priority?: boolean;
  /** Aspect ratio of the screen area, e.g. "16/10". */
  ratio?: string;
};

/**
 * Browser/app window chrome that frames a product screenshot.
 * Drop real prints into /public/screenshots and pass `src`; until
 * then a labelled placeholder marks the slot.
 */
export function AppWindow({
  src,
  alt,
  label = "Print do sistema",
  url = "app.sastur.com.br",
  className,
  priority,
  ratio = "16/10",
}: AppWindowProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-white shadow-card",
        className
      )}
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 hidden flex-1 sm:block">
          <div className="mx-auto max-w-xs rounded-full bg-white px-3 py-1 text-center text-[11px] text-muted-foreground ring-1 ring-inset ring-border">
            {url}
          </div>
        </div>
      </div>

      {/* screen area */}
      <div className="relative w-full" style={{ aspectRatio: ratio }}>
        {src ? (
          <Image
            src={src}
            alt={alt ?? label}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 900px"
            // SVGs (prints exportados) são servidos sem otimização.
            unoptimized={src.endsWith(".svg")}
            className="object-cover object-top"
          />
        ) : (
          <ScreenPlaceholder label={label} />
        )}
      </div>
    </div>
  );
}

/** Neutral, on-brand placeholder used until real prints are supplied. */
function ScreenPlaceholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-mint-50">
      <div className="flex h-full">
        {/* fake sidebar */}
        <div className="hidden w-1/5 flex-col gap-3 border-r border-border/70 bg-white/70 p-4 sm:flex">
          <div className="h-6 w-24 rounded bg-brand-100" />
          <div className="mt-3 space-y-2.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-3.5 w-full rounded bg-slate-200/80" />
            ))}
          </div>
        </div>
        {/* fake content */}
        <div className="flex-1 p-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-16 rounded-xl border border-border/70 bg-white/80"
              />
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="h-40 rounded-xl border border-border/70 bg-white/80 sm:col-span-2" />
            <div className="h-40 rounded-xl border border-border/70 bg-white/80" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="rounded-full bg-navy-900/85 px-4 py-1.5 text-xs font-medium text-white shadow-lg">
          {label}
        </span>
      </div>
    </div>
  );
}
