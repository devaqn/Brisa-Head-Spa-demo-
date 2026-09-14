"use client";

import dynamic from "next/dynamic";
import { Secao, TituloSecao } from "@/components/ui/secao";
import { RevelarAoEntrar } from "@/components/ui/revelar-ao-entrar";
import { useDesktop } from "@/components/ui/use-media-query";
import { galeria, site } from "@/config/site";

/**
 * Carregado sob demanda: o chunk com framer-motion so vai para a rede quando
 * alguem abre o site num monitor. Como a maior parte do trafego vem do
 * Instagram, ou seja, do celular, isso poupa o download para quase todo mundo.
 */
const SpotlightFrames = dynamic(() => import("@/components/originkit/ui/spotlight-frames"), {
  ssr: false,
});

/**
 * Duas apresentacoes para a mesma lista de fotos.
 *
 * No desktop vale a sanfona do Originkit: as fotos sao 9:16 e viram laminas
 * verticais que abrem no hover. No celular ela nao serve — o proprio componente
 * encolhe tudo para caber, e com 8 laminas cada uma ficaria com ~21px de
 * largura, menos da metade de um alvo de toque decente. Ali o certo e um trilho
 * com snap, que e como a pessoa ja navega foto no telefone.
 */
export function Galeria() {
  const desktop = useDesktop();

  return (
    <Secao id="galeria">
      <TituloSecao
        etiqueta="O espaço"
        titulo="Um lugar pensado para o silêncio"
        descricao={`Madeira, latão, água corrente e luz baixa. As fotos são do dia a dia do ${site.nome}, direto do perfil.`}
      />

      <div className="mt-12">
        {desktop ? (
          <RevelarAoEntrar reserva="34rem">
            <div className="h-[34rem] w-full">
              <SpotlightFrames
                images={galeria.map((foto) => ({ image: foto.src }))}
                panels={galeria.length}
                startIndex={0}
                background="transparent"
                track={{ collapsedWidth: 72, expandedWidth: 560, gap: 4 }}
                panel={{ height: 520, radius: 14, dim: 5 }}
                selector={{ box: true, lines: false, thickness: 2, color: "#c9a55f" }}
                entrance={{ animate: true, duration: 0.8, stagger: 0.05 }}
                trigger="hover"
              />
            </div>
          </RevelarAoEntrar>
        ) : (
          <ul className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6">
            {galeria.map((foto) => (
              <li key={foto.src} className="w-[68vw] max-w-72 shrink-0 snap-center">
                <div className="overflow-hidden rounded-2xl border border-linha bg-superficie">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    width={360}
                    height={640}
                    loading="lazy"
                    className="aspect-9/16 w-full object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="mt-6 text-sm text-suave">
        {desktop ? "Passe o mouse para abrir cada foto." : "Arraste para o lado para ver mais."}{" "}
        <a
          href={site.contato.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-marca underline-offset-4 transition-colors hover:underline"
        >
          Ver tudo no Instagram
        </a>
      </p>
    </Secao>
  );
}
