import Link from "next/link";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClasses: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark focus-visible:outline-primary",
  secondary:
    "bg-secondary-light text-secondary-dark hover:bg-secondary hover:text-white",
  ghost:
    "bg-transparent text-primary border border-primary/30 hover:bg-primary-light",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

/**
 * A single button-styled component that renders as a real link (`next/link`
 * for internal routes, a plain `<a>` for external ones). Using `next/link`
 * for internal hrefs is what gives client-side navigation between pages —
 * no full page reload — while still degrading to a normal anchor tag for
 * accessibility and SEO crawling.
 */
export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
}: BaseProps & { href: string; external?: boolean }) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
