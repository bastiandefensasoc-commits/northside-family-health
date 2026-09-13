import type { IconKey } from "@/components/ui/icons";

// Shared domain types for the clinic content. Centralising these lets the
// data files, components, and API route all agree on the same shape without
// re-declaring it, and gives autocomplete/type errors if content and UI drift apart.

export type Doctor = {
  id: string;
  name: string;
  credentials: string; // e.g. "MD, FAAFP"
  specialty: string;
  bio: string;
  languages: string[];
  photo: string; // path under /public
};

export type Service = {
  id: string;
  name: string;
  shortDescription: string;
  detail: string;
  whatToExpect: string[];
  icon: IconKey;
};

export type ClinicHours = {
  day: string;
  hours: string; // "8:00 AM – 6:00 PM" or "Closed"
};

export type ClinicInfo = {
  name: string;
  tagline: string;
  phone: string;
  phoneHref: string; // tel: link
  email: string;
  address: {
    line1: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: ClinicHours[];
  insuranceAccepted: string[];
};
