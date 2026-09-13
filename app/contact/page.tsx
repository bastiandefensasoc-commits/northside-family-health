import { clinic } from "@/lib/data/clinic";
import { Icon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Request an appointment, find our location and hours, parking information, and what to do in a medical emergency.",
  path: "/contact",
});

export default function ContactPage() {
  const fullAddress = `${clinic.address.line1}, ${clinic.address.city}, ${clinic.address.state} ${clinic.address.zip}`;

  return (
    <>
      <section className="bg-primary-light/40 py-14 sm:py-20">
        <Container>
          <SectionHeading
            level="h1"
            eyebrow="Contact"
            title="Request an appointment"
            lead="Fill out the form below and our front desk will call or email to confirm a time. Prefer to talk it through first? Call us directly."
          />
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <AppointmentForm />
          </div>

          <div className="flex flex-col gap-6">
            <InfoCard icon="map-pin" title="Location">
              <address className="not-italic text-muted">{fullAddress}</address>
            </InfoCard>

            <InfoCard icon="clock" title="Hours">
              <ul className="flex flex-col gap-1 text-sm text-muted">
                {clinic.hours.map((entry) => (
                  <li key={entry.day} className="flex justify-between gap-4">
                    <span>{entry.day}</span>
                    <span>{entry.hours}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard icon="car" title="Parking">
              <p className="text-sm text-muted">
                Free patient parking is available directly behind the building, with
                marked accessible spaces closest to the entrance. Street parking is also
                available along Northside Parkway.
              </p>
            </InfoCard>

            <div className="flex flex-col gap-2 rounded-2xl border border-accent/30 bg-accent/10 p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">
                In a medical emergency
              </h2>
              <p className="text-sm text-muted">
                If you or someone with you is experiencing a medical emergency, call 911 or
                go to your nearest emergency room immediately. Our office is not equipped
                for emergency care.
              </p>
              <p className="text-sm text-muted">
                For urgent but non-emergency concerns during office hours, call us at{" "}
                <a href={clinic.phoneHref} className="font-semibold text-primary-dark hover:underline">
                  {clinic.phone}
                </a>{" "}
                and ask for a same-day slot.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: "map-pin" | "clock" | "car";
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-light text-primary">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <h2 className="font-heading text-base font-semibold text-foreground">{title}</h2>
      </div>
      {children}
    </div>
  );
}
