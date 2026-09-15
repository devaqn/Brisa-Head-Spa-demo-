import { Secao } from "@/components/ui/secao";
import { Botao } from "@/components/ui/botao";
import { presentes } from "@/config/site";
import { linkWhatsApp, mensagens } from "@/lib/whatsapp";

const MENSAGEM: Record<string, string> = {
  "vale-presente": mensagens.presente,
  noivas: mensagens.noivas,
};

/**
 * O perfil tem dois destaques fixados sobre isso ("melhorpresente" e "Noivas"),
 * entao o assunto ja converte. O que cada pacote inclui nao foi confirmado, por
 * isso o texto convida para a conversa em vez de prometer.
 */
export function Presente() {
  return (
    <Secao id="presente" compacta>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
        <div>
          <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl">
            Presentear alguém
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-suave">
            Muita cliente chega aqui ganhando a sessão de presente. Aniversário, Dia das Mães,
            ou porque alguém reparou que ela andava precisando.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {presentes.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-[1.5rem] border border-linha p-6"
            >
              <h3 className="font-display text-xl">{item.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-suave">{item.descricao}</p>
              <div className="mt-auto pt-5">
                <Botao
                  href={linkWhatsApp(MENSAGEM[item.id] ?? mensagens.presente)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variante="contorno"
                  largura="cheia"
                >
                  Falar sobre isso
                </Botao>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Secao>
  );
}
