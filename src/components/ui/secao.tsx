import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SecaoProps = {
  readonly id?: string;
  readonly children: ReactNode;
  readonly className?: string;
  /** Superficie clara, para arejar o site entre blocos escuros. */
  readonly clara?: boolean;
};

/** Container e respiro verticais centralizados num lugar so. */
export function Secao({ id, children, className, clara = false }: SecaoProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-16 sm:py-24",
        clara && "bg-areia text-areia-texto",
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
  readonly clara?: boolean;
};

export function TituloSecao({
  etiqueta,
  titulo,
  descricao,
  centralizado = false,
  clara = false,
}: TituloProps) {
  return (
    <div className={cn("max-w-2xl", centralizado && "mx-auto text-center")}>
      {etiqueta ? (
        <p
          className={cn(
            "mb-3 text-xs font-medium tracking-[0.2em] uppercase",
            clara ? "text-marca-escuro" : "text-marca",
          )}
        >
          {etiqueta}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
        {titulo}
      </h2>
      {descricao ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-pretty sm:text-lg",
            clara ? "text-areia-texto/75" : "text-suave",
          )}
        >
          {descricao}
        </p>
      ) : null}
    </div>
  );
}
