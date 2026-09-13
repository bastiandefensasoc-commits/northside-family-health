import Image from "next/image";
import type { Doctor } from "@/types";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="flex flex-col gap-5 rounded-3xl border border-border bg-surface p-6 sm:flex-row sm:p-8">
      <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl sm:w-48">
        <Image
          src={doctor.photo}
          alt={`Portrait of ${doctor.name}, ${doctor.credentials}, ${doctor.specialty} at Northside Family Health`}
          fill
          sizes="(min-width: 640px) 192px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div>
          <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
            {doctor.name}
          </h2>
          <p className="text-sm font-medium text-primary-dark">
            {doctor.credentials} · {doctor.specialty}
          </p>
        </div>

        <p className="text-sm text-muted sm:text-base">{doctor.bio}</p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            Speaks
          </span>
          {doctor.languages.map((language) => (
            <span
              key={language}
              className="rounded-full bg-secondary-light px-3 py-1 text-xs font-medium text-secondary-dark"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
