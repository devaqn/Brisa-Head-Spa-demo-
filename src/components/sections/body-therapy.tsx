import { Clock, Sparkles, Footprints } from "lucide-react";
import { Secao, TituloSecao } from "@/components/ui/secao";
import { Botao } from "@/components/ui/botao";
import { massagens, escaldaPes, site } from "@/config/site";
import { formatarPreco, linkWhatsApp, mensagens } from "@/lib/whatsapp";

/**
 * A linha corporal e o lancamento — por isso vem depois do head spa, que e o
 * que o publico ja conhece. Todos os valores aqui estao confirmados no material
 * da cliente, so o escalda-pes simples ficou em branco.
 */
export function BodyTherapy() {
  return (
    <Secao id="body-therapy" clara>
      <TituloSecao
        clara
        etiqueta="Brisa Body Therapy"
        titulo="A linha corporal"
        descricao="Criada para levar ao corpo o mesmo cuidado que o público já conhece do spa capilar. Cinco técnicas, cada uma para um estado diferente — do relaxamento profundo ao alívio de dor localizada."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {massagens.map((massagem) => (
          <article
            key={massagem.id}
            className="flex flex-col rounded-2xl border border-areia-linha bg-white/55 p-6"
          >
            <h3 className="font-display text-2xl text-areia-texto">{massagem.nome}</h3>
            <p className="mt-1 text-sm text-marca-escuro">{massagem.subtitulo}</p>

            <p className="mt-2 inline-flex items-center gap-2 text-sm text-areia-texto/65">
              <Clock className="size-4 shrink-0" aria-hidden />
              {massagem.duracao}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-areia-texto/80">
              {massagem.descricao}
            </p>

            <p className="mt-4 border-t border-areia-linha pt-4 text-sm text-areia-texto/70">
              <span className="font-medium text-areia-texto">Ideal para:</span>{" "}
              {massagem.idealPara}
            </p>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
              <p className="font-display text-2xl text-areia-texto">
                {formatarPreco(massagem.preco)}
              </p>
              <Botao
                href={linkWhatsApp(mensagens.massagem(massagem.nome))}
                target="_blank"
                rel="noopener noreferrer"
                variante="claro"
                largura="cheia"
                className="sm:w-auto"
              >
                Marcar
              </Botao>
            </div>
          </article>
        ))}

        {/* Escalda-pes: ritual proprio, nao e massagem — por isso o card sai do
            padrao dos outros cinco e ocupa a coluna que sobra. */}
        <article className="flex flex-col rounded-2xl border border-areia-linha bg-marca-escuro p-6 text-areia">
          <Footprints className="size-6 text-marca-claro" aria-hidden />
          <h3 className="mt-4 font-display text-2xl">{escaldaPes.nome}</h3>
          <p className="mt-3 text-sm leading-relaxed text-areia/80">{escaldaPes.chamada}</p>

          <ul className="mt-4 flex flex-col gap-2 border-t border-areia/15 pt-4">
            {escaldaPes.etapas.map((etapa) => (
              <li key={etapa} className="flex items-start gap-2 text-sm text-areia/85">
                <Sparkles className="mt-0.5 size-3.5 shrink-0 text-marca-claro" aria-hidden />
                <span className="leading-relaxed">{etapa}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-col gap-2">
            {escaldaPes.opcoes.map((opcao) => (
              <li
                key={opcao.id}
                className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-sm"
              >
                <span className="text-areia/85">{opcao.nome}</span>
                <span className="font-medium text-marca-claro">
                  {opcao.preco === null ? "sob consulta" : formatarPreco(opcao.preco)}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <Botao
              href={linkWhatsApp(mensagens.escaldaPes)}
              target="_blank"
              rel="noopener noreferrer"
              largura="cheia"
            >
              Quero o escalda-pés
            </Botao>
          </div>
        </article>
      </div>

      <p className="mt-8 text-sm text-areia-texto/65">
        Dá para combinar a terapia capilar com uma massagem no mesmo dia — chame no WhatsApp que
        a gente monta o horário. Atendimento em {site.local.bairro}, com hora marcada.
      </p>
    </Secao>
  );
}
