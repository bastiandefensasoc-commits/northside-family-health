import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * `not-found.tsx` at the app root is a special file the App Router renders
 * automatically for any URL that doesn't match a route — no routing config
 * needed. Because it lives inside app/ (not a subfolder), it's still
 * wrapped by the root layout, so the header and footer stay in place
 * instead of dropping the visitor onto a bare error page.
 */
export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="flex flex-col items-center gap-4 text-center">
        <span className="font-heading text-sm font-semibold uppercase tracking-wide text-secondary-dark">
          404
        </span>
        <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          We can&apos;t find that page
        </h1>
        <p className="max-w-md text-muted">
          The page you&apos;re looking for may have moved. Try one of the links below, or
          head back home.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="ghost">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
