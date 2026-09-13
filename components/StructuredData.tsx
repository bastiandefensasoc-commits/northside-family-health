import { clinic } from "@/lib/data/clinic";
import { doctors } from "@/lib/data/doctors";
import { SITE_URL } from "@/lib/metadata";

const dayMap: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

/**
 * Renders schema.org MedicalClinic JSON-LD in a <script type="application/ld+json">
 * tag. This doesn't change what's on the page visually — it's a machine-
 * readable description of the business (address, hours, staff, specialties)
 * that search engines use for rich results. Rendered once in the root layout
 * so it's present on every page.
 *
 * Built from the same `clinic`/`doctors` data used by the visible UI, so the
 * structured data can't silently drift out of sync with what's actually
 * displayed on the page.
 */
export function StructuredData() {
  const openingHours = clinic.hours
    .filter((entry) => entry.hours !== "Closed")
    .map((entry) => {
      const [open, close] = entry.hours.split("–").map((s) => s.trim());
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${dayMap[entry.day]}`,
        opens: to24Hour(open),
        closes: to24Hour(close),
      };
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    description:
      "Northside Family Health is a family medicine and paediatrics clinic offering general practice, paediatrics, women's health, and preventive care.",
    url: SITE_URL,
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.line1,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: openingHours,
    medicalSpecialty: [
      "Family Practice",
      "Pediatric",
      "Gynecologic",
      "PrimaryCare",
    ],
    employee: doctors.map((doctor) => ({
      "@type": "Physician",
      name: doctor.name,
      medicalSpecialty: doctor.specialty,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify of a static, internally-authored data object — not
      // user input — so this is not an XSS risk in the way dangerouslySetInnerHTML
      // usually is; it's the standard pattern Next.js docs use for JSON-LD.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function to24Hour(time: string): string {
  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return time;
  const [, hourStr, minute, period] = match;
  let hour = parseInt(hourStr, 10);
  if (period.toUpperCase() === "PM" && hour !== 12) hour += 12;
  if (period.toUpperCase() === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minute}`;
}
