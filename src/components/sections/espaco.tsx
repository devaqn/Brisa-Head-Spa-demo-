import { Secao } from "@/components/ui/secao";
import { pilares, site, fotoEspaco } from "@/config/site";

/**
 * Texto corrido com foto ao lado, em vez de quatro cards de icone iguais.
 * A frase de abertura e dela, do Canva; os quatro itens sao essa mesma frase
 * quebrada em lista.
 */
export function Espaco() {
  return (
    <Secao id="espaco" tom="branco">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div className="order-2 overflow-hidden rounded-[1.75rem] bg-superficie-2 lg:order-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={fotoEspaco.src}
            alt={fotoEspaco.alt}
            width={360}
            height={640}
            loading="lazy"
            className="h-72 w-full object-cover sm:h-96 lg:h-[27rem]"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-3 text-xs font-medium tracking-[0.18em] text-marca uppercase">
            Como é por aqui
          </p>
          <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl">
            {site.bordaoCorpo}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-pretty text-suave sm:text-lg">
            Ambiente climatizado, aromas suaves, música envolvente e a presença acolhedora da
            profissional. Não tem fila e não tem outra pessoa dividindo o espaço com você.
          </p>

          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {pilares.map((pilar) => (
              <li key={pilar.id} className="border-t border-linha pt-3">
                <p className="text-sm font-medium text-texto">{pilar.titulo}</p>
                <p className="mt-0.5 text-sm text-suave">{pilar.nota}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Secao>
  );
}
