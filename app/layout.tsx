import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/metadata";
import "./globals.css";

// next/font/google downloads and self-hosts these fonts at build time, then
// injects a CSS variable (`--font-inter`, `--font-lexend`) instead of a
// <link> to Google Fonts. That avoids an extra render-blocking network
// request to fonts.googleapis.com and prevents layout shift from late-
// loading web fonts — both of which matter for the Lighthouse performance
// target. The variables are wired to Tailwind's `font-sans`/`font-heading`
// utilities in globals.css.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

// Root-level metadata. Every page.tsx below sets its own `metadata` export
// via buildMetadata() in lib/metadata.ts, which Next.js merges with (and
// overrides) these defaults — so this is really just the fallback plus the
// `title.template` that appends "| Northside Family Health" is handled per
// page instead, since each page already includes the full title.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Northside Family Health",
  description:
    "Family medicine, paediatrics, women's health, and preventive care in a calm, welcoming clinic.",
};

/**
 * This file is what makes every route under app/ share the same header,
 * footer, and fonts. The App Router renders layout.tsx once and then swaps
 * only the `children` (the active page.tsx) in and out as you navigate —
 * that's why the header doesn't re-mount, re-run its effects, or flicker
 * when you click between Home/Services/Doctors/etc. Any file placed directly
 * in app/ (like this one) wraps every nested route; a layout.tsx placed
 * inside a subfolder like app/contact/ would wrap only that subtree.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
