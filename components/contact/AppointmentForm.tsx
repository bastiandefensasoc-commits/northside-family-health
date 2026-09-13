"use client";

import { useState, type FormEvent } from "react";
import { appointmentSchema, appointmentReasons, type AppointmentFormValues } from "@/lib/validation";

type FieldErrors = Partial<Record<keyof AppointmentFormValues, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const initialValues: AppointmentFormValues = {
  fullName: "",
  email: "",
  phone: "",
  reason: "not-sure",
  preferredDate: "",
  message: "",
};

const inputClasses =
  "w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

/**
 * `"use client"` is required because this component holds interactive form
 * state (`useState`) and handles a submit event in the browser — none of
 * that can run in a server component. Validation happens in two places on
 * purpose: here, with the same `appointmentSchema` used server-side, so
 * users see field-level errors immediately without a round trip; and again
 * in app/api/appointments/route.ts, which is the check that actually can't
 * be bypassed, since this client-side pass is just UX.
 */
export function AppointmentForm() {
  const [values, setValues] = useState<AppointmentFormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  function updateField<K extends keyof AppointmentFormValues>(key: K, value: AppointmentFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const result = appointmentSchema.safeParse(values);
    if (!result.success) {
      const flat = result.error.flatten().fieldErrors;
      const nextErrors: FieldErrors = {};
      (Object.keys(flat) as (keyof AppointmentFormValues)[]).forEach((key) => {
        const message = flat[key]?.[0];
        if (message) nextErrors[key] = message;
      });
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setFormError(payload?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setFormError("We couldn't reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col gap-2 rounded-2xl border border-secondary/30 bg-secondary-light p-6 text-secondary-dark"
      >
        <p className="font-heading text-lg font-semibold">Request received.</p>
        <p className="text-sm">
          Thank you — we&apos;ll reach out within one business day to confirm your
          appointment time. If your need is urgent, please call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 w-fit text-sm font-semibold underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="fullName" error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            className={inputClasses}
            value={values.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClasses}
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>

        <Field label="Phone" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>

        <Field label="Preferred date" htmlFor="preferredDate" error={errors.preferredDate}>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            className={inputClasses}
            value={values.preferredDate}
            onChange={(e) => updateField("preferredDate", e.target.value)}
            aria-invalid={Boolean(errors.preferredDate)}
            aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
          />
        </Field>
      </div>

      <Field label="Reason for visit" htmlFor="reason" error={errors.reason}>
        <select
          id="reason"
          name="reason"
          className={inputClasses}
          value={values.reason}
          onChange={(e) => updateField("reason", e.target.value as AppointmentFormValues["reason"])}
          aria-invalid={Boolean(errors.reason)}
          aria-describedby={errors.reason ? "reason-error" : undefined}
        >
          {appointmentReasons.map((reason) => (
            <option key={reason.value} value={reason.value}>
              {reason.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Anything we should know? (optional)" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClasses}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      {formError && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending request…" : "Request Appointment"}
      </button>
      <p className="text-xs text-muted">
        This form requests an appointment; it does not confirm one. We&apos;ll follow up by
        phone or email to finalize your time.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
