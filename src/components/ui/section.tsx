import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { Container } from "./container";
import { Reveal } from "./reveal";

/** Vertical rhythm wrapper for page sections. */
export function Section({
  className,
  children,
  containerClassName,
  ...props
}: React.HTMLAttributes<HTMLElement> & { containerClassName?: string }) {
  return (
    <section className={cn("py-16 sm:py-22", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h1";
};

/** Consistent eyebrow + heading + description block. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-3.5",
        align === "center" ? "mx-auto max-w-2xl text-center items-center" : "items-start",
        className
      )}
    >
      {eyebrow && <Badge variant="brand">{eyebrow}</Badge>}
      <Heading className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </Heading>
      {description && (
        <p className="text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  );
}
