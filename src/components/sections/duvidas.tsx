import { Plus } from "lucide-react";
import { Secao } from "@/components/ui/secao";
import { faq } from "@/config/site";
import { linkWhatsApp, mensagens } from "@/lib/whatsapp";

/**
 * <details> nativo de proposito: funciona sem JavaScript, o buscador indexa o
 * texto todo e o mesmo array alimenta o JSON-LD de FAQPage no layout.
 */
export function Duvidas() {
  return (
    <Secao id="duvidas">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">Antes de marcar</h2>

        <ul className="mt-8 flex flex-col">
          {faq.map((item) => (
            <li key={item.pergunta}>
              <details className="group border-b border-linha">
                <summary className="flex min-h-14 list-none items-center justify-between gap-4 py-4 text-left">
                  <span className="text-base font-medium text-texto">{item.pergunta}</span>
                  <Plus
                    className="size-4 shrink-0 text-marca transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  />
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-suave">{item.resposta}</p>
              </details>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-suave">
          Ficou alguma pergunta de fora?{" "}
          <a
            href={linkWhatsApp(mensagens.duvida)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-marca underline underline-offset-4 transition-colors hover:text-texto"
          >
            Manda mensagem
          </a>{" "}
          que a gente responde, sem compromisso de marcar nada.
        </p>
      </div>
    </Secao>
  );
}
