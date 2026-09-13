import Link from "next/link";
import { clinic } from "@/lib/data/clinic";
import { Container } from "@/components/ui/Container";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Our Doctors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/**
 * A plain server component (no "use client") — it renders once on the server
 * and never needs interactivity, unlike Header. Present on every page via
 * the root layout, so hours/phone/address are always one edit away from
 * being wrong everywhere at once — hence pulling from the shared `clinic`
 * data object instead of hardcoding values here.
 */
export function Footer() {
  const fullAddress = `${clinic.address.line1}, ${clinic.address.city}, ${clinic.address.state} ${clinic.address.zip}`;

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <span className="font-heading text-lg font-semibold text-foreground">
            {clinic.name}
          </span>
          <p className="text-sm text-muted">{clinic.tagline}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-foreground">Site</span>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-primary-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-foreground">Hours</span>
          <ul className="flex flex-col gap-1 text-sm text-muted">
            {clinic.hours.map((entry) => (
              <li key={entry.day} className="flex justify-between gap-4">
                <span>{entry.day}</span>
                <span>{entry.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-foreground">Contact</span>
          <a href={clinic.phoneHref} className="text-sm text-muted hover:text-primary-dark">
            {clinic.phone}
          </a>
          <a
            href={`mailto:${clinic.email}`}
            className="text-sm text-muted hover:text-primary-dark"
          >
            {clinic.email}
          </a>
          <address className="text-sm not-italic text-muted">{fullAddress}</address>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <p>This is a fictional clinic created as a design portfolio piece.</p>
        </Container>
      </div>
    </footer>
  );
}
