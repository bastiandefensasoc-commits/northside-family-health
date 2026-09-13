import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

const routes = ["/", "/services", "/doctors", "/about", "/contact"];

/**
 * Next.js recognises this exact filename/export shape and automatically
 * serves it as /sitemap.xml — no manual XML templating needed. Returning a
 * plain array of route objects is enough; Next handles the XML formatting.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
