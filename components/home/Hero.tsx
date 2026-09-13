import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Above-the-fold section on Home — rendered eagerly (not lazy) since it's
 * the first thing visible. `next/image`'s `priority` flag tells Next to
 * preload this image and skip lazy-loading for it, which is what you want
 * for the one image guaranteed to be in the initial viewport; using
 * `priority` on anything below the fold would work against the performance
 * target instead of helping it.
 */
export function Hero() {
  return (
    <section className="bg-primary-light/40">
      <Container className="grid grid-cols-1 items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-primary-dark shadow-sm">
            Now welcoming new patients
          </span>
          <h1 className="font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Family healthcare that feels like it&apos;s actually for your family.
          </h1>
          <p className="max-w-xl text-lg text-muted">
            Northside Family Health offers general practice, paediatrics, women&apos;s
            health, and preventive care for every stage of life — with doctors who
            take the time to explain what&apos;s going on and what happens next.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="primary">
              Request an Appointment
            </Button>
            <Button href="/services" variant="ghost">
              Explore Our Services
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/hero-clinic.svg"
            alt="A Northside Family Health doctor talking warmly with a patient in a bright exam room"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
