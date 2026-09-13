import Image from "next/image";
import { clinic } from "@/lib/data/clinic";
import { Icon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "The story behind Northside Family Health, our facilities, and the insurance and payment options we accept.",
  path: "/about",
});

const FACILITIES = [
  {
    title: "Bright, quiet exam rooms",
    body: "Eight private exam rooms, each with natural light and enough space that a parent, partner, or caregiver can comfortably sit in with you.",
  },
  {
    title: "Separate pediatric waiting area",
    body: "A smaller, quieter waiting room for families with young children, apart from our main lobby.",
  },
  {
    title: "On-site lab draws",
    body: "Routine bloodwork can usually be done in the same visit, so you're not sent somewhere else for a separate appointment.",
  },
  {
    title: "Street-level, accessible entrance",
    body: "No stairs between the parking area and our front door; all exam rooms and restrooms are wheelchair accessible.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary-light/40 py-14 sm:py-20">
        <Container>
          <SectionHeading
            level="h1"
            eyebrow="About us"
            title="Why Northside Family Health exists"
          />
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/about-facility.svg"
              alt="The bright, plant-filled waiting area at Northside Family Health"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 text-base text-muted">
            <p>
              Northside Family Health opened because our founding doctors kept running into
              the same problem in larger practices: fifteen-minute visits, a different
              provider every time, and patients who felt like a number by the end of the
              appointment.
            </p>
            <p>
              We built something smaller on purpose. Four doctors, one shared patient
              record, and appointments long enough to actually talk. Whether you&apos;re
              bringing in a newborn for their first checkup or coming in yourself for a
              physical you&apos;ve been putting off, the goal is the same: you leave
              understanding what&apos;s happening with your health and what to do next.
            </p>
            <p>
              We&apos;re a general practice, paediatrics, women&apos;s health, and preventive
              care clinic — which in practice means most families can get everything they
              need here, from a toddler&apos;s ear infection to a parent&apos;s annual physical,
              without being referred elsewhere.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-secondary-light/40 py-14 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="Our space" title="Built to feel calm, not clinical" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FACILITIES.map((facility) => (
              <div key={facility.title} className="flex flex-col gap-2 rounded-2xl bg-surface p-6">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {facility.title}
                </h3>
                <p className="text-sm text-muted">{facility.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Icon name="credit-card" className="h-5 w-5" />
              </span>
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                Insurance &amp; payment
              </h2>
            </div>
            <p className="text-muted">
              We accept most major insurance plans. Coverage details vary by plan, so we
              always confirm your specific benefits before your visit — you shouldn&apos;t be
              surprised by a bill.
            </p>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {clinic.insuranceAccepted.map((plan) => (
                <li key={plan} className="flex items-center gap-2 text-sm text-foreground">
                  <span aria-hidden="true" className="text-secondary-dark">
                    ✓
                  </span>
                  {plan}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">
              Don&apos;t see your plan listed, or paying out of pocket? Call us at{" "}
              <a href={clinic.phoneHref} className="font-semibold text-primary-dark hover:underline">
                {clinic.phone}
              </a>{" "}
              and we&apos;ll help you figure out the cost of a visit before you book.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              What a first visit costs
            </h2>
            <p className="text-muted">
              A new-patient visit is billed as a standard office visit under your insurance
              plan — for most PPO plans, that means a copay due at check-in, typically
              $20–$50. Annual preventive visits and many screenings are covered at no cost
              under most plans, which we&apos;ll confirm for you ahead of time.
            </p>
            <p className="text-muted">
              For patients without insurance, we offer a flat self-pay rate for visits and
              can walk you through it when you call to schedule.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
