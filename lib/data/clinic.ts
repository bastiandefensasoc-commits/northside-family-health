import type { ClinicInfo } from "@/types";

// Single source of truth for clinic facts. The footer, contact page, JSON-LD
// structured data, and metadata all import from here so hours/phone/address
// never drift out of sync across the site.
export const clinic: ClinicInfo = {
  name: "Northside Family Health",
  tagline: "Caring for your family, close to home.",
  phone: "(503) 555-0182",
  phoneHref: "tel:+15035550182",
  email: "hello@northsidefamilyhealth.example",
  address: {
    line1: "4820 Northside Parkway, Suite 200",
    city: "Portland",
    state: "OR",
    zip: "97217",
  },
  hours: [
    { day: "Monday", hours: "8:00 AM – 6:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 6:00 PM" },
    { day: "Thursday", hours: "8:00 AM – 7:00 PM" },
    { day: "Friday", hours: "8:00 AM – 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 1:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  insuranceAccepted: [
    "Blue Cross Blue Shield",
    "Aetna",
    "Cigna",
    "UnitedHealthcare",
    "Kaiser Permanente",
    "Medicare",
    "Medicaid / Oregon Health Plan",
  ],
};
