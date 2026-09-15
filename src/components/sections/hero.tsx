import { Botao } from "@/components/ui/botao";
import { TituloAnimado } from "@/components/ui/titulo-animado";
import { IconeInstagram } from "@/components/ui/icones-marca";
import { site, fotoHero } from "@/config/site";
import { linkWhatsApp, mensagens } from "@/lib/whatsapp";

/**
 * O hero se apoia em tipografia, nao em foto grande: o material disponivel do
 * Instagram tem 640px no maior lado, o que nao aguenta uma imagem de fundo
 * inteira sem ficar borrada. A foto entra como coluna lateral, no tamanho em
 * que ela ainda esta nitida.
 */
export function Hero() {
  return (
    <section id="topo" className="border-b border-linha">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <p className="mb-5 text-xs font-medium tracking-[0.18em] text-marca uppercase">
            {site.descricaoCurta}
          </p>

          <h1 className="font-display text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
            <TituloAnimado texto={site.bordao} />
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-suave sm:text-lg">
            Head spa e massagem em {site.local.bairro}, no {site.local.referencia}. A gente
            atende uma cliente por vez, com hora marcada.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Botao
              href={linkWhatsApp(mensagens.agendar)}
              target="_blank"
              rel="noopener noreferrer"
              tamanho="grande"
              largura="cheia"
              className="sm:w-auto"
            >
              Marcar meu horário
            </Botao>
            <Botao
              href="#terapia-capilar"
              variante="contorno"
              tamanho="grande"
              largura="cheia"
              className="sm:w-auto"
            >
              Ver os serviços
            </Botao>
          </div>

          <a
            href={site.contato.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 items-center gap-2.5 text-sm text-suave transition-colors hover:text-marca"
          >
            <IconeInstagram className="size-4 shrink-0" />
            <span>
              <strong className="font-medium text-texto">{site.provaSocial.seguidores}</strong>{" "}
              seguidores no Instagram
            </span>
          </a>
        </div>

        <div>
          <div className="overflow-hidden rounded-[1.75rem] bg-superficie-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fotoHero.src}
              alt={fotoHero.alt}
              width={360}
              height={640}
              fetchPriority="high"
              className="h-72 w-full object-cover object-center sm:h-96 lg:h-[32rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
