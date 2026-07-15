import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Official SASTUR assets live in /public/brand.
 * Horizontal lockup: 1080×320 · Icon: 1080×1080 (square).
 * Use `mono` on dark backgrounds (footer, gradient CTAs) to get the
 * white version.
 */

const ASSET = {
  horizontalColor: "/brand/logo-cor-horizontal.png",
  horizontalWhite: "/brand/logo-branco-horizontal.png",
  iconColor: "/brand/icone-cor.png",
  iconWhite: "/brand/icone-brancao.png",
};

/** Icon-only mark. Square. */
export function LogoMark({
  className,
  mono = false,
  priority = false,
}: {
  className?: string;
  mono?: boolean;
  priority?: boolean;
}) {
  return (
    <Image
      src={mono ? ASSET.iconWhite : ASSET.iconColor}
      alt="SASTUR"
      width={1080}
      height={1080}
      priority={priority}
      className={cn("h-8 w-8 object-contain", className)}
    />
  );
}

/** Full lockup (mark + wordmark). Falls back to the icon when showWordmark=false. */
export function Logo({
  className,
  mono = false,
  showWordmark = true,
  priority = false,
}: {
  className?: string;
  mono?: boolean;
  showWordmark?: boolean;
  priority?: boolean;
}) {
  if (!showWordmark) {
    return <LogoMark mono={mono} className={className} priority={priority} />;
  }
  return (
    <Image
      src={mono ? ASSET.horizontalWhite : ASSET.horizontalColor}
      alt="SASTUR"
      width={1080}
      height={320}
      priority={priority}
      className={cn("h-8 w-auto object-contain", className)}
    />
  );
}

/** Clickable logo that links home — for header/footer. */
export function LogoLink({
  className,
  ...props
}: React.ComponentProps<typeof Logo> & { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="SASTUR — página inicial"
      className={cn("inline-flex items-center rounded-lg", className)}
    >
      <Logo {...props} />
    </Link>
  );
}
