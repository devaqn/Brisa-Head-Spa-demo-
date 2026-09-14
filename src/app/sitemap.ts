import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// Obrigatorio sob `output: export` — a rota precisa ser estatica.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
