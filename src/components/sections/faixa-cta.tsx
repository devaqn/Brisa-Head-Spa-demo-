import { Botao } from "@/components/ui/botao";
import { linkWhatsApp, mensagens } from "@/lib/whatsapp";

/** Respiro de conversao no meio da pagina, para quem ja se convenceu. */
export function FaixaCta() {
  return (
    <section className="relative overflow-hidden border-y border-linha bg-superficie">
      <div
        className="absolute top-1/2 left-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-marca/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl">
          O corpo avisa quando precisa parar.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-pretty text-suave">
          Escolha o horário que cabe na sua semana. A gente cuida do resto.
        </p>
        <div className="mt-8 flex justify-center">
          <Botao
            href={linkWhatsApp(mensagens.agendar)}
            target="_blank"
            rel="noopener noreferrer"
            tamanho="grande"
            largura="cheia"
            className="sm:w-auto"
          >
            Marcar no WhatsApp
          </Botao>
        </div>
      </div>
    </section>
  );
}
