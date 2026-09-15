import { Botao } from "@/components/ui/botao";
import { linkWhatsApp, mensagens } from "@/lib/whatsapp";

/** Respiro de conversao no meio da pagina, curto de proposito. */
export function FaixaCta() {
  return (
    <section className="bg-superficie-2">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 sm:py-16">
        <h2 className="font-display text-2xl leading-tight text-balance sm:text-3xl">
          Quer marcar?
        </h2>
        <p className="max-w-md text-base text-pretty text-suave">
          Chama a gente no WhatsApp que vemos o melhor dia para você.
        </p>
        <Botao
          href={linkWhatsApp(mensagens.agendar)}
          target="_blank"
          rel="noopener noreferrer"
          tamanho="grande"
          largura="cheia"
          className="sm:w-auto"
        >
          Falar no WhatsApp
        </Botao>
      </div>
    </section>
  );
}
