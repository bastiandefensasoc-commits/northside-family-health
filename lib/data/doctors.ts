import type { Doctor } from "@/types";

export const doctors: Doctor[] = [
  {
    id: "amara-whitfield",
    name: "Dr. Amara Whitfield",
    credentials: "MD, FAAFP",
    specialty: "Family Medicine",
    bio: "Dr. Whitfield sees patients of every age, from newborn checkups to care for grandparents. She trained in family medicine because she likes knowing a whole household's history — it makes it easier to catch things early and to give advice that fits your actual life.",
    languages: ["English", "Spanish"],
    photo: "/images/doctors/amara-whitfield.svg",
  },
  {
    id: "julian-reyes",
    name: "Dr. Julian Reyes",
    credentials: "MD, FAAP",
    specialty: "Pediatrics",
    bio: "Dr. Reyes has spent twelve years working with kids and the parents who worry about them. He's known for crouching down to a child's eye level before he ever reaches for a stethoscope, and for giving parents a straight answer instead of a scare.",
    languages: ["English", "Tagalog"],
    photo: "/images/doctors/julian-reyes.svg",
  },
  {
    id: "priya-nandakumar",
    name: "Dr. Priya Nandakumar",
    credentials: "MD, FACOG",
    specialty: "Women's Health",
    bio: "Dr. Nandakumar provides care from adolescence through menopause, including well-woman exams, prenatal care, and family planning. She believes appointments should leave you with clear answers, not more questions than you came in with.",
    languages: ["English", "Hindi", "Tamil"],
    photo: "/images/doctors/priya-nandakumar.svg",
  },
  {
    id: "owen-bramwell",
    name: "Dr. Owen Bramwell",
    credentials: "MD",
    specialty: "Preventive & Internal Medicine",
    bio: "Dr. Bramwell focuses on the checkups and screenings that catch problems before they become serious — blood pressure, cholesterol, diabetes risk, and the vaccines and tests that are easy to put off. He'll tell you plainly what's worth worrying about and what isn't.",
    languages: ["English", "French"],
    photo: "/images/doctors/owen-bramwell.svg",
  },
];
