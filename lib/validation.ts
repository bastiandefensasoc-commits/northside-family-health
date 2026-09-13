import { z } from "zod";

// Shared between the client form (components/contact/AppointmentForm.tsx) and
// the API route (app/api/appointments/route.ts), so the two never disagree
// about what counts as valid input. Client-side use gives instant feedback;
// server-side use is the actual security boundary, since client checks can
// always be bypassed by a direct request to the endpoint.
export const appointmentSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "That name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "That phone number is too long.")
    .regex(/^[0-9+()\-.\s]+$/, "Please use only numbers and phone symbols."),
  reason: z.enum(
    ["general-practice", "pediatrics", "womens-health", "preventive-care", "not-sure"],
    { message: "Please choose a reason for your visit." },
  ),
  preferredDate: z
    .string()
    .trim()
    .min(1, "Please choose a preferred date."),
  message: z
    .string()
    .trim()
    .max(1000, "Please keep your message under 1000 characters.")
    .optional()
    .or(z.literal("")),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export const appointmentReasons: { value: AppointmentFormValues["reason"]; label: string }[] = [
  { value: "general-practice", label: "General Practice" },
  { value: "pediatrics", label: "Pediatrics" },
  { value: "womens-health", label: "Women's Health" },
  { value: "preventive-care", label: "Preventive Care" },
  { value: "not-sure", label: "Not sure yet" },
];
