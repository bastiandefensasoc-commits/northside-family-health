import type { Metadata } from "next";

const SITE_NAME = "Northside Family Health";
export const SITE_URL = "https://northside-family-health.vercel.app";

/**
 * Builds a per-page Metadata object with consistent OG/Twitter defaults so
 * each route only has to supply what's actually unique about it (title,
 * description, path). Used by every page.tsx via `export const metadata =
 * buildMetadata({...})`.
 *
 * No `images` field is set here: app/opengraph-image.tsx is Next's special
 * file convention for generating og:image/twitter:image automatically for
 * every route, so it doesn't need to be (and shouldn't be) repeated here.
 */
export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}
