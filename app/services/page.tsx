import { services } from "@/lib/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "General practice, paediatrics, women's health, and preventive care — what each service covers and what to expect at your visit.",
  path: "/services",
});

/**
 * `app/services/page.tsx` maps to the `/services` route. Because this
 * folder has no layout.tsx of its own, it inherits the root layout's
 * Header/Footer automatically — nesting a route under a folder never means
 * writing the shared chrome again, only the content unique to that route.
 */
export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary-light/40 py-14 sm:py-20">
        <Container>
          <SectionHeading
            level="h1"
            eyebrow="Our services"
            title="Care built around your family"
            lead="Four connected specialties, one shared medical record, and doctors who work as a team. Jump to a service below, or scroll through all four."
          />
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} reversed={index % 2 === 1} />
          ))}
        </Container>
      </section>

      <section className="pb-16">
        <Container className="flex flex-col items-center gap-4 rounded-3xl bg-secondary-light/50 px-6 py-12 text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            Not sure which service fits?
          </h2>
          <p className="max-w-lg text-muted">
            That&apos;s alright — tell us what&apos;s going on in your appointment request and
            we&apos;ll point you to the right doctor.
          </p>
          <Button href="/contact">Request an Appointment</Button>
        </Container>
      </section>
    </>
  );
}
