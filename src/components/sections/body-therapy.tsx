import { Secao, TituloSecao } from "@/components/ui/secao";
import { Botao } from "@/components/ui/botao";
import { massagens, escaldaPes } from "@/config/site";
import { formatarPreco, linkWhatsApp, mensagens } from "@/lib/whatsapp";

/**
 * Unica secao no marrom do logotipo. Alem de destacar a linha nova, quebra a
 * sequencia de blocos claros iguais que faz uma pagina parecer gerada.
 *
 * Todos os valores aqui estao confirmados no material da cliente; so o
 * escalda-pes simples ficou em branco.
 */
export function BodyTherapy() {
  return (
    <Secao id="body-therapy" tom="escuro">
      <TituloSecao
        escuro
        etiqueta="Brisa Body Therapy"
        titulo="Massagem corporal"
        descricao="A linha foi criada para trazer ao corpo o mesmo cuidado que o público já conhece do spa capilar."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {massagens.map((massagem) => (
          <article
            key={massagem.id}
            className="flex flex-col rounded-[1.5rem] bg-escuro-2 p-6"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-2xl text-creme">{massagem.nome}</h3>
              <span className="shrink-0 text-xs text-creme/55">{massagem.duracao}</span>
            </div>
            <p className="mt-1 text-sm text-marca-luz">{massagem.subtitulo}</p>

            <p className="mt-4 text-sm leading-relaxed text-creme/75">{massagem.descricao}</p>

            <p className="mt-4 text-sm text-creme/60">
              <span className="text-creme/90">Ideal para:</span> {massagem.idealPara}
            </p>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
              <p className="font-display text-2xl text-creme">
                {formatarPreco(massagem.preco)}
              </p>
              <Botao
                href={linkWhatsApp(mensagens.massagem(massagem.nome))}
                target="_blank"
                rel="noopener noreferrer"
                variante="contornoClaro"
                largura="cheia"
                className="sm:w-auto"
              >
                Marcar
              </Botao>
            </div>
          </article>
        ))}

        {/* Escalda-pes nao e massagem: ritual proprio, tratamento proprio. */}
        <article className="flex flex-col rounded-[1.5rem] bg-creme p-6 text-texto">
          <h3 className="font-display text-2xl">{escaldaPes.nome}</h3>
          <p className="mt-3 text-sm leading-relaxed text-suave">{escaldaPes.chamada}</p>

          <ol className="mt-5 flex flex-col gap-2.5 border-t border-linha pt-5">
            {escaldaPes.etapas.map((etapa, indice) => (
              <li key={etapa} className="flex gap-3 text-sm leading-relaxed text-suave">
                <span className="shrink-0 font-display text-texto">{indice + 1}</span>
                <span>{etapa}</span>
              </li>
            ))}
          </ol>

          <ul className="mt-5 flex flex-col gap-2 border-t border-linha pt-4">
            {escaldaPes.opcoes.map((opcao) => (
              <li
                key={opcao.id}
                className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-sm"
              >
                <span className="text-suave">{opcao.nome}</span>
                <span className="font-medium text-texto">
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

      <p className="mt-8 max-w-xl text-sm text-creme/65">
        Dá para juntar a terapia capilar com uma massagem no mesmo dia. Chama a gente no
        WhatsApp que montamos o horário.
      </p>
    </Secao>
  );
}
