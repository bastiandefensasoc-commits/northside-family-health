import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { clinic } from "@/lib/data/clinic";

/**
 * Final conversion section on Home — a simple, high-contrast band pointing
 * to the contact/appointment page. No animation or motion here beyond
 * color transitions on the buttons, which keeps it calm rather than pushy.
 */
export function AppointmentCta() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-6 py-14 text-center sm:px-12">
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            Ready to find your family&apos;s new doctor?
          </h2>
          <p className="max-w-xl text-primary-light">
            Request an appointment online, or call us directly at{" "}
            <a href={clinic.phoneHref} className="font-semibold underline underline-offset-4">
              {clinic.phone}
            </a>
            . We typically respond within one business day.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="secondary">
              Request an Appointment
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
