/**
 * Hand-written inline SVG icons (no icon library, per project constraints).
 * Each icon is a small function component so it can be sized/colored with
 * normal Tailwind classes (`className="h-6 w-6 text-primary"`) wherever it's
 * used, and `IconKey` ties the allowed icon names back to `Service["icon"]`
 * in types/index.ts so a typo in a data file's `icon` value is a type error
 * rather than a silently missing icon at runtime.
 */
import type { SVGProps } from "react";

export type IconKey = "stethoscope" | "baby" | "heart" | "shield-check" | "clock" | "car" | "credit-card" | "map-pin";

function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

const icons: Record<IconKey, (props: SVGProps<SVGSVGElement>) => React.ReactElement> = {
  stethoscope: (props) => (
    <IconBase {...props}>
      <path d="M5 3v6a4 4 0 0 0 8 0V3" />
      <path d="M9 15a6 6 0 0 0 6-6" />
      <circle cx="19" cy="7" r="2" />
      <path d="M19 9v3a4 4 0 0 1-4 4" />
      <circle cx="9" cy="19" r="2" />
    </IconBase>
  ),
  baby: (props) => (
    <IconBase {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M8 8c0 3-2 2-2 5a6 6 0 0 0 12 0c0-3-2-2-2-5" />
      <path d="M9 8h.01M15 8h.01" />
    </IconBase>
  ),
  heart: (props) => (
    <IconBase {...props}>
      <path d="M12 20s-7-4.35-9.5-8.5C.7 8 2.4 4.5 6 4.5c2 0 3.3 1.1 4 2.2.7-1.1 2-2.2 4-2.2 3.6 0 5.3 3.5 3.5 7C19 15.65 12 20 12 20Z" />
    </IconBase>
  ),
  "shield-check": (props) => (
    <IconBase {...props}>
      <path d="M12 3 4 6v6c0 4.4 3.4 7.9 8 9 4.6-1.1 8-4.6 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  ),
  clock: (props) => (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </IconBase>
  ),
  car: (props) => (
    <IconBase {...props}>
      <path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13" />
      <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4Z" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
    </IconBase>
  ),
  "credit-card": (props) => (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
    </IconBase>
  ),
  "map-pin": (props) => (
    <IconBase {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </IconBase>
  ),
};

export function Icon({ name, ...props }: { name: IconKey } & SVGProps<SVGSVGElement>) {
  const Component = icons[name];
  return <Component {...props} />;
}
