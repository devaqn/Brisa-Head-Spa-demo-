import { MapPin, CalendarClock, CreditCard } from "lucide-react";
import { Secao, TituloSecao } from "@/components/ui/secao";
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
    <Secao id="localizacao">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
        <div>
          <TituloSecao
            etiqueta="Onde fica"
            titulo={`${local.bairro}, ${local.cidade}`}
            descricao={`${local.referencia}. Atendimento com hora marcada, uma cliente por vez.`}
          />

          <dl className="mt-8 flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-marca" aria-hidden />
              <div>
                <dt className="text-sm font-medium text-texto">Endereço</dt>
                <dd className="mt-0.5 text-sm text-suave">
                  {local.enderecoCompleto ?? (
                    <>
                      {local.referencia} — {local.bairro}, {local.cidade}/{local.uf}. Confirme o
                      endereço completo no WhatsApp antes de sair de casa.
                    </>
                  )}
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CalendarClock className="mt-0.5 size-5 shrink-0 text-marca" aria-hidden />
              <div>
                <dt className="text-sm font-medium text-texto">Horários</dt>
                <dd className="mt-0.5 text-sm text-suave">
                  {atendimento.horario ??
                    "Atendimento com hora marcada. Chame no WhatsApp para ver as datas disponíveis."}
                </dd>
              </div>
            </div>

            {atendimento.pagamento ? (
              <div className="flex items-start gap-3">
                <CreditCard className="mt-0.5 size-5 shrink-0 text-marca" aria-hidden />
                <div>
                  <dt className="text-sm font-medium text-texto">Pagamento</dt>
                  <dd className="mt-0.5 text-sm text-suave">
                    {atendimento.pagamento.join(", ")}
                  </dd>
                </div>
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

        <div className="overflow-hidden rounded-2xl border border-linha bg-superficie">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fotos/espaco-06.webp"
            alt="Letreiro do Brisa Head Spa na parede do espaço, ao lado da fonte de água"
            width={480}
            height={640}
            loading="lazy"
            className="h-72 w-full object-cover sm:h-96 lg:h-[26rem]"
          />
        </div>
      </div>
    </Secao>
  );
}
