import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/research`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/publications`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/insights`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${site.url}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}