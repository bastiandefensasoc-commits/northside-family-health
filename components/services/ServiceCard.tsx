import type { Service } from "@/types";
import { Icon } from "@/components/ui/icons";

/**
 * `id={service.id}` on the outer <section> is what makes the home page's
 * `/services#general-practice`-style links land on the right section —
 * the browser scrolls to whichever element has a matching `id`, no JS
 * required. `scroll-mt-24` compensates for the sticky header so the
 * section title doesn't end up hidden underneath it after that jump.
 */
export function ServiceCard({ service, reversed = false }: { service: Service; reversed?: boolean }) {
  return (
    <section
      id={service.id}
      className="scroll-mt-24 grid grid-cols-1 gap-8 rounded-3xl border border-border bg-surface p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr]"
    >
      <div className={`flex flex-col gap-4 ${reversed ? "lg:order-2" : ""}`}>
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
          {service.name}
        </h2>
        <p className="text-base text-muted">{service.detail}</p>
      </div>

      <div className={`flex flex-col gap-4 rounded-2xl bg-secondary-light/50 p-6 ${reversed ? "lg:order-1" : ""}`}>
        <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-secondary-dark">
          What to expect
        </h3>
        <ul className="flex flex-col gap-3">
          {service.whatToExpect.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-foreground">
              <span aria-hidden="true" className="mt-1 text-secondary-dark">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
