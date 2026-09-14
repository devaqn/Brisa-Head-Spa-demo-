import { ChevronDown } from "lucide-react";
import { Secao, TituloSecao } from "@/components/ui/secao";
import { Botao } from "@/components/ui/botao";
import { faq } from "@/config/site";
import { linkWhatsApp, mensagens } from "@/lib/whatsapp";

/**
 * <details> nativo de proposito: funciona sem JavaScript, o buscador indexa o
 * texto todo e o mesmo array alimenta o JSON-LD de FAQPage no layout.
 */
export function Duvidas() {
  return (
    <Secao id="duvidas">
      <TituloSecao
        etiqueta="Dúvidas"
        titulo="Antes de marcar"
        centralizado
      />

      <div className="mx-auto mt-12 max-w-3xl">
        <ul className="flex flex-col gap-3">
          {faq.map((item) => (
            <li key={item.pergunta}>
              <details className="group rounded-2xl border border-linha bg-superficie open:border-marca/30">
                <summary className="flex min-h-14 list-none items-center justify-between gap-4 p-5 text-left">
                  <span className="text-base font-medium text-texto">{item.pergunta}</span>
                  <ChevronDown
                    className="size-5 shrink-0 text-marca transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-suave">{item.resposta}</p>
              </details>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl border border-linha bg-superficie p-6 text-center sm:p-8">
          <p className="text-base text-texto">Ficou alguma pergunta de fora?</p>
          <p className="mt-2 text-sm text-suave">
            Manda mensagem que a gente responde — sem compromisso de marcar nada.
          </p>
          <div className="mt-6 flex justify-center">
            <Botao
              href={linkWhatsApp(mensagens.duvida)}
              target="_blank"
              rel="noopener noreferrer"
              variante="contorno"
              largura="cheia"
              className="sm:w-auto"
            >
              Tirar dúvida no WhatsApp
            </Botao>
          </div>
        </div>
      </div>
    </Secao>
  );
}
