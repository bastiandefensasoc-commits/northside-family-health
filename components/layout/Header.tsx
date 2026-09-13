"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clinic } from "@/lib/data/clinic";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Our Doctors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/**
 * `"use client"` is required here because this component uses two browser-only
 * features: `usePathname()` (to know which nav link is "active") and
 * `useState`/`useEffect` (to track scroll position for the sticky shadow and
 * to open/close the mobile menu). Everything that doesn't need that — the
 * rest of the page — stays a server component, which is the default in the
 * App Router and why only specific files opt into "use client".
 *
 * `usePathname()` is what makes active-link highlighting work correctly
 * across every route: it re-reads the current URL on every navigation
 * (App Router does this without a full page reload), so comparing it to each
 * link's `href` below always reflects the page actually being viewed —
 * including after using the browser back button, which re-triggers this hook
 * just like a normal navigation would.
 */
export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes, so clicking a link
  // doesn't leave the panel open behind the new page. This follows React's
  // "adjusting state during render" pattern (state, not a ref, since refs
  // can't be read during render either) instead of an effect: calling
  // setState directly in the render body when pathname has changed avoids
  // the extra render-then-effect-then-render pass that a
  // useEffect(() => setIsMenuOpen(false), [pathname]) would cause.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    if (isMenuOpen) setIsMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-surface/90 backdrop-blur transition-shadow duration-150 ${
        isScrolled ? "border-border shadow-sm" : "border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground sm:text-xl"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary"
          >
            {/* Simple cross/heart-adjacent mark; decorative, name carries the meaning */}
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M12 21s-7.5-4.6-10-9.2C.4 8 2 4 6 4c2.2 0 3.6 1.2 4.5 2.3C11.4 5.2 12.8 4 15 4c4 0 5.6 4 4 7.8-2.5 4.6-10 9.2-10 9.2H12Z"
                fill="currentColor"
              />
            </svg>
          </span>
          {clinic.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? "bg-primary-light text-primary-dark"
                        : "text-muted hover:bg-primary-light/60 hover:text-primary-dark"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary">
            Request an Appointment
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            {isMenuOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      <MobileMenu
        id="mobile-nav"
        isOpen={isMenuOpen}
        links={NAV_LINKS}
        pathname={pathname}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
}
