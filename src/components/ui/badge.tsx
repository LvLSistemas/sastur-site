import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "brand" | "mint" | "outline" | "muted";
};

const styles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  brand: "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100",
  mint: "bg-mint-50 text-mint-700 ring-1 ring-inset ring-mint-100",
  outline: "text-foreground ring-1 ring-inset ring-border bg-white",
  muted: "bg-muted text-muted-foreground",
};

/** Small pill label — used for eyebrows and status chips. */
export function Badge({
  className,
  variant = "brand",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}
