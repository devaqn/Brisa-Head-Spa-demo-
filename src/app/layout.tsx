import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import {
  site,
  faq,
  massagens,
  pacotesCapilar,
  escaldaPes,
} from "@/config/site";
import "./globals.css";

const corpo = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--fonte-corpo",
});

/** Serifada para os titulos: o material dela e delicado, nao corporativo. */
const titulo = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--fonte-titulo",
});

const descricao = `${site.descricaoCurta}. ${site.bordao}. Terapia capilar e massagem corporal em ${site.local.bairro}, ${site.local.cidade}/${site.local.uf}, com hora marcada.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} — ${site.descricaoCurta}`,
    template: `%s | ${site.nome}`,
  },
  description: descricao,
  applicationName: site.nome,
  authors: [{ name: site.nome }],
  creator: site.nome,
  publisher: site.nome,
  keywords: [
    "head spa",
    `head spa ${site.local.bairro}`,
    `head spa ${site.local.cidade}`,
    "terapia capilar",
    `terapia capilar ${site.local.bairro}`,
    "massagem relaxante",
    `massagem relaxante ${site.local.bairro}`,
    "massagem com pedras quentes",
    "aromaterapia",
    "escalda-pés",
    "reflexologia podal",
    "spa capilar Recife",
    `spa ${site.local.cidade}`,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.nome,
    title: `${site.nome} — ${site.descricaoCurta}`,
    description: descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.nome} — ${site.descricaoCurta}`,
    description: descricao,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#faf5ee",
  colorScheme: "light",
};

/**
 * Dados estruturados montados a partir dos mesmos arrays que a pagina desenha,
 * entao schema e tela nunca divergem. Campo nao confirmado nao e emitido:
 * schema com dado errado e pior do que schema incompleto.
 */
function dadosEstruturados() {
  const negocio = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "@id": `${site.url}/#negocio`,
    name: site.nome,
    description: descricao,
    url: site.url,
    telephone: site.contato.telefoneE164,
    image: `${site.url}/opengraph-image`,
    priceRange: "$$",
    currenciesAccepted: "BRL",
    sameAs: [site.contato.instagramUrl],
    address: {
      "@type": "PostalAddress",
      ...(site.local.enderecoCompleto
        ? { streetAddress: site.local.enderecoCompleto }
        : {}),
      addressLocality: site.local.cidade,
      addressRegion: site.local.uf,
      addressCountry: "BR",
    },
    areaServed: [site.local.bairro, site.local.cidade, "Recife"].map((nome) => ({
      "@type": "Place",
      name: nome,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.contato.telefoneE164,
      contactType: "reservations",
      availableLanguage: "Portuguese",
    },
    ...(site.contato.email ? { email: site.contato.email } : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Rituais e terapias",
      itemListElement: [
        ...pacotesCapilar.map((pacote) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: pacote.nome,
            description: pacote.resumo,
            serviceType: "Terapia capilar",
          },
          ...(pacote.preco === null
            ? {}
            : { price: pacote.preco.toFixed(2), priceCurrency: "BRL" }),
        })),
        ...massagens.map((massagem) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: massagem.nome,
            description: massagem.subtitulo,
            serviceType: "Massagem",
          },
          price: massagem.preco.toFixed(2),
          priceCurrency: "BRL",
        })),
        ...escaldaPes.opcoes
          .filter((opcao) => opcao.preco !== null)
          .map((opcao) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: opcao.nome,
              serviceType: "Escalda-pés",
            },
            price: (opcao.preco as number).toFixed(2),
            priceCurrency: "BRL",
          })),
      ],
    },
  };

  const perguntas = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: { "@type": "Answer", text: item.resposta },
    })),
  };

  return [negocio, perguntas];
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${corpo.variable} ${titulo.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {dadosEstruturados().map((bloco, indice) => (
          <script
            key={indice}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(bloco) }}
          />
        ))}
      </body>
    </html>
  );
}
