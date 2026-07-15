import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:shadow-[0_12px_32px_-12px_rgba(22,112,199,0.6)]",
        accent:
          "bg-mint-400 text-navy-900 shadow-soft hover:bg-mint-300 font-semibold",
        outline:
          "border border-border bg-white text-foreground hover:border-brand-300 hover:bg-brand-50/60",
        ghost: "text-foreground hover:bg-muted",
        subtle: "bg-brand-50 text-brand-700 hover:bg-brand-100",
        white: "bg-white text-brand-700 shadow-soft hover:bg-brand-50",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-base",
        xl: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: React.ReactNode;
};

type ButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AnchorProps = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

/**
 * Button renders a <button> by default, or a link (next/link for
 * internal routes, <a> for external) when `href` is provided.
 */
export function Button(props: ButtonProps | AnchorProps) {
  const { className, variant, size } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, ...rest } = props;
    const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}
      />
    );
  }

  const { variant: _v, size: _s, className: _c, ...rest } = props as ButtonProps;
  return <button className={classes} {...rest} />;
}

export { buttonVariants };
