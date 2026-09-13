"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

type NavLink = { href: string; label: string };

/**
 * The slide-down mobile nav panel. Split out from Header so Header's own
 * logic (scroll state, pathname tracking) stays readable, and because this
 * piece has its own self-contained behavior: closing on Escape, and locking
 * background scroll while open.
 *
 * `useEffect` here has two separate jobs, kept in two separate effects:
 * 1. Add/remove a `keydown` listener for Escape — only while `isOpen` is
 *    true, and cleaned up on unmount/toggle so listeners never pile up.
 * 2. Toggle `document.body.style.overflow` so the page behind the open menu
 *    can't be scrolled — reset in the cleanup function so it never gets
 *    stuck "off" if the component unmounts while open.
 */
export function MobileMenu({
  id,
  isOpen,
  links,
  pathname,
  onClose,
}: {
  id: string;
  isOpen: boolean;
  links: NavLink[];
  pathname: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  return (
    <div
      id={id}
      className={`md:hidden ${isOpen ? "block" : "hidden"} border-t border-border bg-surface`}
    >
      <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-4">
        {links.map((link) => {
          const isActive =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-xl px-4 py-3 text-base font-medium ${
                isActive
                  ? "bg-primary-light text-primary-dark"
                  : "text-muted hover:bg-primary-light/60"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <div className="mt-2">
          <Button href="/contact" variant="primary" className="w-full">
            Request an Appointment
          </Button>
        </div>
      </nav>
    </div>
  );
}
