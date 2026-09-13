import type { ReactNode } from "react";

/**
 * Consistent max-width + side padding wrapper used inside every section on
 * every page. Centralising it here is what keeps spacing consistent across
 * pages without each page re-deriving its own padding scale.
 *
 * Tailwind classes:
 * - `mx-auto max-w-6xl` centers the content and caps its width on large
 *   screens so lines of text don't stretch too wide to read comfortably.
 * - `px-4 sm:px-6 lg:px-8` grows the side gutter as the viewport widens —
 *   tight on phones, roomier on desktop — instead of one fixed padding value.
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
