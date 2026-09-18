import type { MetadataRoute } from "next";
import { FEATURE_CATALOG, seo } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: seo.siteUrl, lastModified: new Date(), priority: 1 },
  ];

  if (FEATURE_CATALOG) {
    routes.push({ url: `${seo.siteUrl}/catalogo`, lastModified: new Date(), priority: 0.8 });
  }

  return routes;
}
