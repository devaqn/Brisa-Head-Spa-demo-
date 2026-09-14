import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.nome} — ${site.descricaoCurta}`,
    short_name: site.nome,
    description: site.bordao,
    start_url: "/",
    display: "standalone",
    background_color: "#0c0907",
    theme_color: "#0c0907",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
