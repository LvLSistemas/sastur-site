"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Slide-in direction. */
  from?: "up" | "down" | "left" | "right" | "none";
  as?: "div" | "li" | "span";
  once?: boolean;
};

/**
 * Scroll-reveal wrapper. Fades + slides content into view when it
 * enters the viewport. Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  as = "div",
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const offset = 24;
  const initial =
    from === "none" || reduce
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: from === "up" ? offset : from === "down" ? -offset : 0,
          x: from === "left" ? offset : from === "right" ? -offset : 0,
        };

  const MotionTag = motion[as] as React.ElementType;

  return (
    <MotionTag
      className={cn(className)}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </MotionTag>
  );
}
