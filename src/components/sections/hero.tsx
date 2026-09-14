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
    <section id="topo" className="relative overflow-hidden border-b border-linha">
      <div className="fundo-pontos absolute inset-0 opacity-60" aria-hidden />
      {/* Brilho quente atras do texto, na cor do latao do espaco. */}
      <div
        className="absolute -top-32 -left-32 size-96 rounded-full bg-marca/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-marca/25 bg-marca/5 px-3 py-1.5 text-[0.7rem] font-medium tracking-[0.14em] text-marca uppercase sm:text-xs">
            {site.descricaoCurta}
          </p>

          <h1 className="font-display text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
            <TituloAnimado texto={site.bordao} />
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-suave sm:text-lg">
            Terapia capilar e massagem corporal em {site.local.bairro}, com hora marcada e
            atendimento individual. Você deita, fecha os olhos, e a próxima hora é só sua.
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
              Ver os rituais
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
              seguidores acompanham o dia a dia do espaço
            </span>
          </a>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-linha bg-superficie">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fotoHero.src}
              alt={fotoHero.alt}
              width={360}
              height={640}
              fetchPriority="high"
              className="h-64 w-full object-cover object-center sm:h-80 lg:h-[30rem]"
            />
          </div>
          <p className="mt-3 text-center text-xs text-suave lg:text-left">
            {site.local.referencia} — {site.local.bairro}, {site.local.cidade}/{site.local.uf}
          </p>
        </div>
      </div>
    </section>
  );
}
