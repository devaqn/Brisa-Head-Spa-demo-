"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  readonly children: ReactNode;
  /**
   * Altura reservada enquanto o conteudo nao monta, para a pagina nao pular
   * quando ele aparece.
   */
  readonly reserva?: string;
  readonly className?: string;
};

/**
 * Adia a MONTAGEM dos filhos ate eles entrarem na viewport.
 *
 * Os componentes do Originkit animam no mount, nao no scroll. Sem isto a
 * animacao da galeria acontece com ela ainda fora da tela e a pessoa chega na
 * secao com tudo parado. Como bonus, componente pesado so e criado se a pessoa
 * rolar ate la.
 */
export function RevelarAoEntrar({ children, reserva = "24rem", className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const alvo = ref.current;
    if (!alvo) return;

    // Sem suporte a IntersectionObserver, mostra logo em vez de nunca mostrar.
    // O setState sai do corpo do efeito de proposito: chamado direto ali ele
    // dispara um render em cascata (e o react-hooks reclama, com razao).
    if (typeof IntersectionObserver === "undefined") {
      const id = setTimeout(() => setVisivel(true), 0);
      return () => clearTimeout(id);
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          setVisivel(true);
          observador.disconnect();
        }
      },
      { rootMargin: "200px 0px" },
    );

    observador.observe(alvo);
    return () => observador.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={visivel ? undefined : { minHeight: reserva }}>
      {visivel ? children : null}
    </div>
  );
}
