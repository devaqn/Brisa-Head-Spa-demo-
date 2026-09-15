import type { AnchorHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * Sem `whitespace-nowrap` de proposito: rotulo longo num botao nowrap vira a
 * largura minima do container e estoura a tela no celular. A altura vem de
 * `min-h` + padding, entao o botao cresce em vez de transbordar.
 */
const botao = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full text-center text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variante: {
        principal: "bg-marca text-fundo hover:bg-texto focus-visible:outline-marca",
        contorno:
          "border border-linha bg-transparent text-texto hover:border-marca hover:text-marca focus-visible:outline-marca",
        /** Para usar sobre as secoes de fundo marrom. */
        claro: "bg-creme text-escuro hover:bg-white focus-visible:outline-creme",
        contornoClaro:
          "border border-creme/35 text-creme hover:border-creme hover:bg-creme/10 focus-visible:outline-creme",
      },
      tamanho: {
        padrao: "px-6 py-3",
        grande: "min-h-14 px-7 py-4 text-base",
      },
      largura: {
        auto: "",
        cheia: "w-full",
      },
    },
    compoundVariants: [
      // Ocupando a linha inteira o padding lateral so empurra o texto para
      // quebrar mais cedo. Menos padding, mais espaco para o rotulo.
      { largura: "cheia", tamanho: "padrao", class: "px-4" },
      { largura: "cheia", tamanho: "grande", class: "px-5" },
    ],
    defaultVariants: { variante: "principal", tamanho: "padrao", largura: "auto" },
  },
);

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof botao>;

/** Todo CTA do site e um link (WhatsApp ou ancora), nunca um <button>. */
export function Botao({ className, variante, tamanho, largura, ...props }: Props) {
  return <a className={cn(botao({ variante, tamanho, largura }), className)} {...props} />;
}
