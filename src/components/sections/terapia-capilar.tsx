import { Check, Clock } from "lucide-react";
import { Secao, TituloSecao } from "@/components/ui/secao";
import { Botao } from "@/components/ui/botao";
import { pacotesCapilar } from "@/config/site";
import { formatarPreco, linkWhatsApp, mensagens } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

/**
 * O servico ancora da marca — e o que o perfil vende ha mais tempo, entao vem
 * antes da linha corporal.
 *
 * Nenhum dos dois pacotes tem valor no material da cliente. Em vez de inventar
 * preco, o card mostra o botao de WhatsApp no lugar: e honesto e ainda qualifica
 * o contato. Assim que ela mandar a tabela, basta preencher `preco` em site.ts
 * que o valor aparece sozinho.
 */
export function TerapiaCapilar() {
  return (
    <Secao id="terapia-capilar">
      <TituloSecao
        etiqueta="Head Spa"
        titulo="Terapia capilar"
        descricao="O ritual começa no couro cabeludo e desce pelo rosto, pescoço e ombros. Cabelo limpo e leve no fim — mas o que fica mesmo é a sensação de ter saído do mundo por uma hora."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6">
        {pacotesCapilar.map((pacote) => (
          <article
            key={pacote.id}
            className={cn(
              "flex flex-col rounded-2xl border bg-superficie p-6 sm:p-8",
              pacote.destaque ? "border-marca/40" : "border-linha",
            )}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl">{pacote.nome}</h3>
                <p className="mt-1 text-sm text-marca">{pacote.subtitulo}</p>
              </div>
              {pacote.destaque ? (
                <span className="rounded-full border border-marca/30 bg-marca/10 px-3 py-1 text-[0.65rem] font-medium tracking-[0.12em] text-marca uppercase">
                  Completo
                </span>
              ) : null}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-suave">{pacote.resumo}</p>

            {pacote.duracao ? (
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-suave">
                <Clock className="size-4 shrink-0 text-marca" aria-hidden />
                {pacote.duracao}
              </p>
            ) : null}

            <ul className="mt-6 flex flex-col gap-2.5 border-t border-linha pt-6">
              {pacote.etapas.map((etapa) => (
                <li key={etapa} className="flex items-start gap-2.5 text-sm text-texto">
                  <Check className="mt-0.5 size-4 shrink-0 text-marca" aria-hidden />
                  <span className="leading-relaxed">{etapa}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-7">
              {pacote.preco === null ? (
                <p className="mb-3 text-sm text-suave">
                  Valor sob consulta — a gente te passa na hora pelo WhatsApp.
                </p>
              ) : (
                <p className="mb-3 font-display text-3xl text-marca">
                  {formatarPreco(pacote.preco)}
                </p>
              )}

              <Botao
                href={linkWhatsApp(mensagens.capilar(pacote.nome))}
                target="_blank"
                rel="noopener noreferrer"
                variante={pacote.destaque ? "principal" : "contorno"}
                largura="cheia"
              >
                {pacote.preco === null ? "Consultar valor e horários" : "Marcar este ritual"}
              </Botao>
            </div>
          </article>
        ))}
      </div>
    </Secao>
  );
}
