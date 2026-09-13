import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validation";

/**
 * POST /api/appointments — receives the appointment request form.
 *
 * This is the actual security boundary: the client-side validation in
 * AppointmentForm.tsx is for instant user feedback only and can always be
 * bypassed (a bot or curl request can hit this endpoint directly), so every
 * field is re-validated here with the same Zod schema before anything else
 * happens. Route handlers like this run only on the server — this code
 * never ships to the browser — which is also why this is the right place
 * for a real provider integration (email service, EHR/scheduling API, etc.)
 * later; no API keys or secrets belong in client components.
 *
 * For now this stubs out the actual "send" step (logging instead of calling
 * a provider) since no real backend is connected, but the shape — validate,
 * then hand off a typed, clean payload — is what a real integration would
 * plug into.
 */
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const result = appointmentSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please check the form for errors.",
        fieldErrors: result.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  // Stubbed "send" step — a real integration (email/CRM/EHR) would go here,
  // reading credentials from environment variables rather than source code.
  console.log("New appointment request received:", {
    ...result.data,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
