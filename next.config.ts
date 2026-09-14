import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estatico: `next build` gera `out/`, que o Netlify publica direto.
  // Sem funcao serverless, sem cold start, sem adapter.
  output: "export",
  reactStrictMode: true,
  // Otimizacao de imagem exige servidor. As fotos ja saem prontas de
  // scripts/otimizar-fotos.mjs, entao nao precisamos do otimizador do Next.
  images: { unoptimized: true },
};

export default nextConfig;
