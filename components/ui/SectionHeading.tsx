/**
 * Consistent "eyebrow + heading + optional lead paragraph" pattern used at
 * the top of most page sections. `level` controls which heading tag is
 * rendered (h1/h2/h3) so each page can keep a correct, unique-per-page h1
 * while every section below it still looks the same visually — semantic
 * hierarchy and visual style are deliberately decoupled here.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  level = "h2",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  level?: "h1" | "h2" | "h3";
  align?: "left" | "center";
}) {
  const Heading = level;
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wide text-secondary-dark">
          {eyebrow}
        </span>
      )}
      <Heading className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </Heading>
      {lead && <p className="text-base text-muted sm:text-lg">{lead}</p>}
    </div>
  );
}
