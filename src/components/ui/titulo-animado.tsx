"use client";

import { lazy, Suspense } from "react";
import { useDesktop, useMovimentoReduzido } from "@/components/ui/use-media-query";

type Props = {
  readonly texto: string;
};

/** Texto puro — e o que vai para o HTML estatico e para quem nao quer animacao. */
function TextoSimples({ texto }: Props) {
  return <span className="block">{texto}</span>;
}

/**
 * `lazy` em vez de `next/dynamic` de proposito: o fallback do Suspense enxerga
 * as props, entao da para mostrar o proprio titulo enquanto o chunk carrega.
 * Com `dynamic({ ssr: false })` o h1 saia VAZIO do build — o buscador nao via
 * a manchete da pagina, que e o texto mais importante do site inteiro.
 */
const TextEmerge = lazy(() => import("@/components/originkit/ui/text-emerge"));

/**
 * O TextEmerge recebe tipografia como estilo inline e anima no mount.
 * Passando `inherit` em tudo, quem manda na fonte continua sendo a classe
 * Tailwind do elemento de fora — o componente so cuida do movimento.
 */
const FONTE_HERDADA = {
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  letterSpacing: "inherit",
  lineHeight: "inherit",
  textAlign: "inherit",
} as const;

/**
 * Referencia estavel de proposito: o useEffect do TextEmerge tem `transition`
 * na lista de dependencias, entao um objeto novo a cada render re-dispararia
 * a animacao sem parar.
 */
const TRANSICAO = {
  type: "tween",
  duration: 0.9,
  delay: 0.1,
  ease: "easeOut",
  staggerChildren: 0.05,
} as const;

/**
 * Titulo do hero com a entrada suave do Originkit.
 *
 * So anima no desktop. No celular o ganho visual nao paga os ~70 KB do gsap
 * num 4G — e o celular e de onde vem quase todo o trafego, que chega pelo
 * Instagram. Quem pediu menos movimento no sistema tambem recebe texto parado.
 */
export function TituloAnimado({ texto }: Props) {
  const desktop = useDesktop();
  const movimentoReduzido = useMovimentoReduzido();

  if (!desktop || movimentoReduzido) {
    return <TextoSimples texto={texto} />;
  }

  return (
    <Suspense fallback={<TextoSimples texto={texto} />}>
      <TextEmerge
        text={texto}
        tag="span"
        font={FONTE_HERDADA}
        color="inherit"
        staggerFrom="start"
        transition={TRANSICAO}
      />
    </Suspense>
  );
}
