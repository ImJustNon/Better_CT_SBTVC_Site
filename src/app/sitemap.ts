import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ct-sbtvc.vercel.app/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://ct-sbtvc.vercel.app/about",
      lastModified: new Date().toISOString(),
    },
  ];
}
