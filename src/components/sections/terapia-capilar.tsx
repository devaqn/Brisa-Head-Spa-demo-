import { Check } from "lucide-react";
import { Secao, TituloSecao } from "@/components/ui/secao";
import { Botao } from "@/components/ui/botao";
import { pacotesCapilar } from "@/config/site";
import { formatarPreco, linkWhatsApp, mensagens } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

/**
 * O servico ancora da marca, por isso vem antes da linha corporal.
 *
 * Nenhum dos dois pacotes tem valor no material da cliente. Em vez de inventar
 * preco, o card manda para o WhatsApp: e honesto e ainda qualifica o contato.
 * Assim que ela mandar a tabela, basta preencher `preco` em site.ts.
 */
export function TerapiaCapilar() {
  return (
    <Secao id="terapia-capilar">
      <TituloSecao
        etiqueta="Head Spa"
        titulo="Terapia capilar"
        descricao="A lavagem é feita no couro cabeludo, com produto escolhido para o seu tipo de fio. Depois vem a massagem, que sobe para o rosto, o pescoço e os ombros."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6">
        {pacotesCapilar.map((pacote) => (
          <article
            key={pacote.id}
            className={cn(
              "flex flex-col rounded-[1.5rem] border bg-superficie p-6 sm:p-8",
              pacote.destaque ? "border-marca/45" : "border-linha",
            )}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl">{pacote.nome}</h3>
                <p className="mt-1 text-sm text-marca">{pacote.subtitulo}</p>
              </div>
              {pacote.destaque ? (
                <span className="rounded-full bg-superficie-2 px-3 py-1 text-[0.65rem] font-medium tracking-[0.1em] text-marca uppercase">
                  Completo
                </span>
              ) : null}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-suave">{pacote.resumo}</p>

            {pacote.duracao ? (
              <p className="mt-3 text-sm text-suave">Duração: {pacote.duracao}</p>
            ) : null}

            <ul className="mt-6 flex flex-col gap-2.5 border-t border-linha pt-6">
              {pacote.etapas.map((etapa) => (
                <li key={etapa} className="flex items-start gap-2.5 text-sm text-texto">
                  <Check className="mt-0.5 size-4 shrink-0 text-marca-clara" aria-hidden />
                  <span className="leading-relaxed">{etapa}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-7">
              {pacote.preco === null ? (
                <p className="mb-3 text-sm text-suave">
                  A gente passa o valor na hora, pelo WhatsApp.
                </p>
              ) : (
                <p className="mb-3 font-display text-3xl text-texto">
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
                {pacote.preco === null ? "Perguntar o valor" : "Marcar este ritual"}
              </Botao>
            </div>
          </article>
        ))}
      </div>
    </Secao>
  );
}
