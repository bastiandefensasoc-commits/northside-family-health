import { Icon, type IconKey } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const REASONS: { icon: IconKey; title: string; body: string }[] = [
  {
    icon: "clock",
    title: "Same-week appointments",
    body: "Most non-urgent visits are booked within a week, and we hold same-day slots open for anything that can't wait.",
  },
  {
    icon: "heart",
    title: "One team, your whole history",
    body: "Four doctors who talk to each other and share your chart, so you don't repeat your story at every visit.",
  },
  {
    icon: "shield-check",
    title: "Clear pricing, upfront",
    body: "We'll tell you what a visit costs and confirm your insurance coverage before you're ever billed.",
  },
  {
    icon: "stethoscope",
    title: "Unhurried visits",
    body: "First visits run 45 minutes. We'd rather take the time than rush you out the door.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-secondary-light/40 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Why patients stay with us"
          title="Healthcare that doesn't feel rushed"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div key={reason.title} className="flex flex-col gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-primary shadow-sm">
                <Icon name={reason.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm text-muted">{reason.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
