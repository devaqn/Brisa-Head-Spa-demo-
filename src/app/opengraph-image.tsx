import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.nome} — ${site.descricaoCurta}`;

/**
 * Previa do link no WhatsApp e no Instagram. Montada so com os valores de
 * site.ts, entao acompanha qualquer mudanca de dado sem edicao manual.
 */
export default function Imagem() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf5ee",
          padding: "64px 72px",
          fontFamily: "sans-serif",
color: "#2f1b08",
        }}
      >
        {/* Fio dourado no topo, como o do rodape do site. */}
        <div style={{ display: "flex", height: 4, background: "#8a5f3c", width: 140 }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#8a5f3c",
            }}
          >
            {site.descricaoCurta}
          </div>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.1,
              marginTop: 20,
              maxWidth: 900,
            }}
          >
            {site.bordao}
          </div>
          <div style={{ fontSize: 30, marginTop: 24, color: "#6b5340" }}>
            Terapia capilar · Massagem corporal · Escalda-pés
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            color: "#6b5340",
          }}
        >
          <div style={{ display: "flex" }}>
            {site.local.bairro}, {site.local.cidade}/{site.local.uf}
          </div>
          <div style={{ display: "flex", color: "#8a5f3c" }}>
            {site.contato.telefoneExibicao}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
