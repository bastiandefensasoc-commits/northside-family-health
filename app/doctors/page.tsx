import { doctors } from "@/lib/data/doctors";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Our Doctors",
  description:
    "Meet the four doctors of Northside Family Health: their credentials, specialties, and the languages they speak.",
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <section className="bg-primary-light/40 py-14 sm:py-20">
        <Container>
          <SectionHeading
            level="h1"
            eyebrow="Our doctors"
            title="The team behind your care"
            lead="Every doctor here sees new and returning patients of all ages. You're always welcome to request a specific provider when you book."
          />
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </Container>
      </section>
    </>
  );
}
