import Link from "next/link";
import { services } from "@/lib/data/services";
import { Icon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * A short, scannable overview of the four service areas, each linking to its
 * detail section on /services. Deliberately lighter than the full
 * ServiceCard used on the Services page — Home should tease, not repeat the
 * detail page's content.
 */
export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="What we offer"
          title="Care for every stage of life"
          lead="Four connected specialties under one roof, so your family's records and history stay in one place."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-light text-secondary-dark">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <span className="font-heading text-lg font-semibold text-foreground">
                {service.name}
              </span>
              <p className="text-sm text-muted">{service.shortDescription}</p>
              <span className="mt-auto text-sm font-semibold text-primary-dark group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
