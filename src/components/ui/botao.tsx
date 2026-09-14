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
        principal:
          "bg-marca text-fundo hover:bg-marca-claro focus-visible:outline-marca-claro",
        contorno:
          "border border-linha bg-transparent text-texto hover:border-marca hover:text-marca focus-visible:outline-marca",
        claro:
          "bg-areia-texto text-areia hover:bg-areia-texto/85 focus-visible:outline-areia-texto",
        discreto: "bg-superficie-2 text-texto hover:bg-linha focus-visible:outline-marca",
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
    defaultVariants: {
      variante: "principal",
      tamanho: "padrao",
      largura: "auto",
    },
  },
);

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof botao>;

/** Todo CTA do site e um link (WhatsApp ou ancora), nunca um <button>. */
export function Botao({ className, variante, tamanho, largura, ...props }: Props) {
  return <a className={cn(botao({ variante, tamanho, largura }), className)} {...props} />;
}
