import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Creme do fundo, branco dos cartoes, ou o marrom do logotipo. */
export type Tom = "fundo" | "branco" | "escuro";

const TONS: Record<Tom, string> = {
  fundo: "",
  branco: "bg-superficie",
  escuro: "bg-escuro text-creme",
};

type SecaoProps = {
  readonly id?: string;
  readonly children: ReactNode;
  readonly className?: string;
  readonly tom?: Tom;
  /** Secao curta, para nao dar o mesmo respiro em todas e virar ritmo de robo. */
  readonly compacta?: boolean;
};

export function Secao({ id, children, className, tom = "fundo", compacta = false }: SecaoProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20",
        compacta ? "py-12 sm:py-16" : "py-16 sm:py-24",
        TONS[tom],
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

type TituloProps = {
  readonly etiqueta?: string;
  readonly titulo: string;
  readonly descricao?: string;
  readonly centralizado?: boolean;
  readonly escuro?: boolean;
  readonly className?: string;
};

/**
 * Etiqueta e descricao sao opcionais de proposito. Toda secao com o mesmo
 * combo etiqueta + titulo + paragrafo e o que faz uma pagina parecer montada
 * por maquina; algumas secoes daqui entram so com o titulo.
 */
export function TituloSecao({
  etiqueta,
  titulo,
  descricao,
  centralizado = false,
  escuro = false,
  className,
}: TituloProps) {
  return (
    <div className={cn("max-w-2xl", centralizado && "mx-auto text-center", className)}>
      {etiqueta ? (
        <p
          className={cn(
            "mb-3 text-xs font-medium tracking-[0.18em] uppercase",
            escuro ? "text-marca-luz" : "text-marca",
          )}
        >
          {etiqueta}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-[2.75rem]">
        {titulo}
      </h2>
      {descricao ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-pretty sm:text-lg",
            escuro ? "text-creme/75" : "text-suave",
          )}
        >
          {descricao}
        </p>
      ) : null}
    </div>
  );
}
