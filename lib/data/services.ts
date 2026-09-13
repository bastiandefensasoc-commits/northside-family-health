import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "general-practice",
    name: "General Practice",
    shortDescription:
      "Everyday care for colds, injuries, chronic conditions, and the checkups that keep small things from becoming big ones.",
    detail:
      "Our general practice team handles the full range of everyday health needs: sick visits, minor injuries, ongoing management of conditions like diabetes or high blood pressure, and annual physicals. Because our doctors see the same patients year after year, they get to know your history well enough to notice when something's off.",
    whatToExpect: [
      "A first visit runs about 45 minutes so there's time to go over your full history.",
      "Follow-up visits are typically 15–20 minutes.",
      "We'll send lab orders ahead of time when possible, so results are ready to discuss at your visit.",
      "Same-day appointments are held open each morning for urgent concerns.",
    ],
    icon: "stethoscope",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    shortDescription:
      "Well-child visits, vaccinations, and sick care for infants through teens, from a team that's good with kids and honest with parents.",
    detail:
      "From newborn's first week through the teenage years, our pediatric care covers well-child checkups, vaccination schedules, growth and development tracking, and same-day sick visits. We keep a separate, quieter waiting area for younger children and their families.",
    whatToExpect: [
      "Newborn visits are scheduled within the first week home.",
      "We follow the CDC-recommended vaccination schedule and will walk you through it before anything is given.",
      "Sick visits for children are usually available same-day.",
      "You're welcome to call our nurse line with questions between visits — that's what it's there for.",
    ],
    icon: "baby",
  },
  {
    id: "womens-health",
    name: "Women's Health",
    shortDescription:
      "Well-woman exams, prenatal care, family planning, and menopause support in a setting that takes your time seriously.",
    detail:
      "Our women's health services cover annual well-woman exams, contraception counseling, prenatal and postpartum care, and support through perimenopause and menopause. Appointments are unhurried, and you can always request a female provider.",
    whatToExpect: [
      "Annual exams typically take 30 minutes.",
      "Prenatal patients are seen on a schedule that follows standard trimester-based care.",
      "You can ask for a chaperone or a specific provider at any time — just let the front desk know when booking.",
      "We'll explain any test or screening before it happens, not after.",
    ],
    icon: "heart",
  },
  {
    id: "preventive-care",
    name: "Preventive Care",
    shortDescription:
      "Screenings, vaccines, and check-ins built to catch issues early, when they're easiest to treat.",
    detail:
      "Preventive care is where small problems get caught before they're big ones: blood pressure and cholesterol checks, diabetes screening, cancer screenings appropriate to your age, and routine vaccines. We'll help you keep track of what's due and when.",
    whatToExpect: [
      "We'll review what screenings are due for your age and risk factors at every annual visit.",
      "Most preventive screenings are covered at no cost under standard insurance plans — we'll confirm this for you before you're billed.",
      "Reminders are sent by text or email when your next screening is coming due.",
      "Results are shared through our patient portal, usually within a few business days.",
    ],
    icon: "shield-check",
  },
];
