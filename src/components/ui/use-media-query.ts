"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Casa com uma media query no cliente.
 *
 * Usa `useSyncExternalStore` em vez de useState + useEffect: matchMedia e uma
 * fonte externa de estado, e e exatamente para isso que a API existe. De
 * quebra, evita o render em cascata que o setState dentro de efeito causaria.
 *
 * O snapshot do servidor e sempre `false` porque o site e `output: export` —
 * o HTML e gerado sem saber o tamanho da tela. Quem decide e o navegador, no
 * primeiro render. Por isso o padrao de todo componente aqui e o layout de
 * celular: ele e o que sai no HTML estatico.
 *
 * O prefixo `use` e obrigatorio (regra das Hooks do React), por isso esta
 * dupla e a unica excecao a nomenclatura em portugues do projeto.
 */
export function useMediaQuery(consulta: string): boolean {
  const inscrever = useCallback(
    (aoMudar: () => void) => {
      const mq = window.matchMedia(consulta);
      mq.addEventListener("change", aoMudar);
      return () => mq.removeEventListener("change", aoMudar);
    },
    [consulta],
  );

  const lerCliente = useCallback(() => window.matchMedia(consulta).matches, [consulta]);
  const lerServidor = useCallback(() => false, []);

  return useSyncExternalStore(inscrever, lerCliente, lerServidor);
}

/** `lg` do Tailwind. Acima disso vale a pena montar componente pesado. */
export function useDesktop(): boolean {
  return useMediaQuery("(min-width: 1024px)");
}

/** Quem pediu menos movimento no sistema nao recebe animacao nenhuma. */
export function useMovimentoReduzido(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
