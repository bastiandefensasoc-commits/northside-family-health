import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";
import { AppointmentCta } from "@/components/home/AppointmentCta";
import { buildMetadata } from "@/lib/metadata";

// Next.js reads this named `metadata` export at build/request time and
// injects the corresponding <title>/<meta> tags into <head> for this route
// specifically — it overrides the defaults from the root layout, which is
// how each page ends up with a distinct, accurate title and description
// instead of every page sharing one generic one.
export const metadata = buildMetadata({
  title: "Home",
  description:
    "Northside Family Health is a family medicine and paediatrics clinic offering general practice, paediatrics, women's health, and preventive care in a calm, welcoming setting.",
  path: "/",
});

/**
 * `page.tsx` inside app/ (the root segment) is what maps to the `/` route.
 * This file itself has no "use client" — it's a server component, rendered
 * to HTML on the server/at build time with no client-side JS required for
 * its own logic. Note there's exactly one <h1> across this whole page (in
 * Hero), and everything below it steps down to <h2> via SectionHeading —
 * that's the semantic heading hierarchy the brief asks for.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <DoctorsPreview />
      <AppointmentCta />
    </>
  );
}
