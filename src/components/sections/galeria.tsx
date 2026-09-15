import { Secao } from "@/components/ui/secao";
import { IconeInstagram } from "@/components/ui/icones-marca";
import { galeria, site } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Grade propria, sem componente de biblioteca.
 *
 * Duas colunas no celular e quatro no desktop, com as fotos pares descendo um
 * pouco a partir de `lg`. O desencontro e de proposito: uma grade perfeitamente
 * alinhada parece catalogo, e o desencontro parece foto colocada por alguem.
 * Sem JavaScript, sem media query em hook, sem estado — so CSS.
 */
export function Galeria() {
  return (
    <Secao id="galeria">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">O espaço</h2>
        <a
          href={site.contato.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-marca transition-colors hover:text-texto"
        >
          <IconeInstagram className="size-4 shrink-0" />
          Ver mais no Instagram
        </a>
      </div>

      <p className="mt-3 max-w-xl text-base text-suave">
        As fotos são daqui mesmo, as mesmas que a gente posta no perfil.
      </p>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {galeria.map((foto, indice) => (
          <li
            key={foto.src}
            className={cn(
              // `self-start` impede a grade de esticar o item nao deslocado ate a
              // altura da linha, o que deixaria uma faixa de fundo vazia sob a foto.
              "self-start overflow-hidden rounded-[1.25rem] bg-superficie-2",
              indice % 2 === 1 && "lg:mt-10",
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={foto.src}
              alt={foto.alt}
              width={360}
              height={640}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-[1.03] sm:aspect-[9/13]"
            />
          </li>
        ))}
      </ul>
    </Secao>
  );
}
