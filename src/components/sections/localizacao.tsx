import { Secao } from "@/components/ui/secao";
import { Botao } from "@/components/ui/botao";
import { site } from "@/config/site";
import { linkWhatsApp, mensagens } from "@/lib/whatsapp";

/**
 * Campo `null` simplesmente nao renderiza: endereco completo, horario e formas
 * de pagamento ainda nao foram confirmados, e site nenhum deve chutar isso.
 */
export function Localizacao() {
  const { local, atendimento } = site;

  return (
    <Secao id="localizacao" tom="branco">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-medium tracking-[0.18em] text-marca uppercase">
            Onde a gente fica
          </p>
          <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl">
            {local.bairro}, {local.cidade}
          </h2>

          <dl className="mt-8 flex flex-col gap-6">
            <div>
              <dt className="text-sm font-medium text-texto">Endereço</dt>
              <dd className="mt-1 text-sm leading-relaxed text-suave">
                {local.enderecoCompleto ?? (
                  <>
                    {local.referencia}, em {local.bairro}. Confirme a sala no WhatsApp antes de
                    sair de casa.
                  </>
                )}
              </dd>
            </div>

            <div>
              <dt className="text-sm font-medium text-texto">Horários</dt>
              <dd className="mt-1 text-sm leading-relaxed text-suave">
                {atendimento.horario ??
                  "Atendimento com hora marcada. Chama no WhatsApp para ver as datas."}
              </dd>
            </div>

            {atendimento.pagamento ? (
              <div>
                <dt className="text-sm font-medium text-texto">Pagamento</dt>
                <dd className="mt-1 text-sm text-suave">{atendimento.pagamento.join(", ")}</dd>
              </div>
            ) : null}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Botao
              href={linkWhatsApp(mensagens.local)}
              target="_blank"
              rel="noopener noreferrer"
              largura="cheia"
              className="sm:w-auto"
            >
              Confirmar endereço
            </Botao>
            {local.mapaUrl ? (
              <Botao
                href={local.mapaUrl}
                target="_blank"
                rel="noopener noreferrer"
                variante="contorno"
                largura="cheia"
                className="sm:w-auto"
              >
                Abrir no mapa
              </Botao>
            ) : null}
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] bg-superficie-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fotos/espaco-06.webp"
            alt="Letreiro do Brisa Head Spa na parede do espaço, ao lado da fonte de água"
            width={480}
            height={640}
            loading="lazy"
            className="h-72 w-full object-cover sm:h-96 lg:h-[28rem]"
          />
        </div>
      </div>
    </Secao>
  );
}
