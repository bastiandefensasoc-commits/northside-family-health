import Image from "next/image";
import { doctors } from "@/lib/data/doctors";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * A below-the-fold section on Home. Next.js code-splits by route
 * automatically (each page.tsx only ships the JS it needs), and within a
 * page, images are naturally deferred by `next/image`'s built-in lazy
 * loading — every <Image> here omits `priority`, so the browser only
 * fetches these photos once the user scrolls near them, instead of
 * competing with the hero image for bandwidth on initial load.
 */
export function DoctorsPreview() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Meet the team"
          title="Four doctors, one family practice"
          lead="Every doctor here sees both new and returning patients, and you're always welcome to ask for a specific provider."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <Image
                  src={doctor.photo}
                  alt={`Portrait of ${doctor.name}, ${doctor.specialty} at Northside Family Health`}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-foreground">
                  {doctor.name}
                </p>
                <p className="text-sm text-muted">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        <Button href="/doctors" variant="ghost" className="self-start">
          Meet the full team
        </Button>
      </Container>
    </section>
  );
}
