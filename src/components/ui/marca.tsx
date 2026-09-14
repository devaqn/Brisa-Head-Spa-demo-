import { site } from "@/config/site";
import { cn } from "@/lib/cn";

type Props = {
  readonly className?: string;
  /** Some com o texto e deixa so o simbolo — usado no rodape em telas curtas. */
  readonly somenteSimbolo?: boolean;
};

/**
 * O logotipo da cliente so existe em 150x150 (foto de perfil do Instagram),
 * pequeno demais para virar arte grande. Entao ele aparece em tamanho de
 * icone e o nome e tipografia de verdade, que fica nitido em qualquer tela.
 * TODO(cliente): trocar por um SVG quando ela mandar o arquivo original.
 */
export function Marca({ className, somenteSimbolo = false }: Props) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/fotos/logo.webp"
        alt=""
        width={40}
        height={40}
        className="size-9 shrink-0 rounded-full ring-1 ring-marca/30 sm:size-10"
      />
      {somenteSimbolo ? (
        <span className="sr-only">{site.nome}</span>
      ) : (
        <span className="flex flex-col leading-none">
          <span className="font-display text-base tracking-wide text-texto sm:text-lg">
            {site.marca.linhaPrincipal}
          </span>
          <span className="text-[0.62rem] font-medium tracking-[0.22em] text-marca uppercase sm:text-[0.68rem]">
            {site.marca.linhaSecundaria}
          </span>
        </span>
      )}
    </span>
  );
}
