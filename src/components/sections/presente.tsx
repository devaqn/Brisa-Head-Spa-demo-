import { Gift, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Secao, TituloSecao } from "@/components/ui/secao";
import { Botao } from "@/components/ui/botao";
import { presentes } from "@/config/site";
import { linkWhatsApp, mensagens } from "@/lib/whatsapp";

const ICONES: Record<string, LucideIcon> = {
  "vale-presente": Gift,
  noivas: Heart,
};

const MENSAGEM: Record<string, string> = {
  "vale-presente": mensagens.presente,
  noivas: mensagens.noivas,
};

/**
 * O perfil tem dois destaques fixados sobre isso ("melhorpresente" e "Noivas"),
 * entao o assunto ja existe e converte. O que cada pacote inclui ainda nao foi
 * confirmado — por isso o texto convida para a conversa em vez de prometer.
 */
export function Presente() {
  return (
    <Secao id="presente">
      <TituloSecao
        etiqueta="Para presentear"
        titulo="Dá para dar uma hora de paz de presente"
        descricao="Tem quem chegue aqui para se cuidar, e tem quem chegue porque alguém reparou que ela andava precisando."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {presentes.map((item) => {
          const Icone = ICONES[item.id] ?? Gift;
          return (
            <article
              key={item.id}
              className="flex flex-col rounded-2xl border border-linha bg-superficie p-6 sm:p-8"
            >
              <Icone className="size-6 text-marca" aria-hidden />
              <h3 className="mt-4 font-display text-2xl">{item.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-suave">{item.descricao}</p>
              <div className="mt-auto pt-6">
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
          );
        })}
      </div>
    </Secao>
  );
}
