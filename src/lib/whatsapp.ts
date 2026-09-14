import { site } from "@/config/site";

const BASE = `https://wa.me/${site.contato.whatsapp}`;

/** Monta o link do WhatsApp com a mensagem ja digitada. */
export function linkWhatsApp(mensagem?: string): string {
  return mensagem ? `${BASE}?text=${encodeURIComponent(mensagem)}` : BASE;
}

/**
 * Cada CTA manda um texto diferente. Assim a dona abre a conversa ja sabendo
 * de qual parte do site a pessoa veio, sem precisar perguntar.
 */
export const mensagens = {
  padrao: "Olá! Vim pelo site e queria marcar um horário.",
  agendar: "Olá! Vim pelo site e queria marcar meu momento no Brisa Head Spa.",
  capilar: (nome: string) =>
    `Olá! Vim pelo site e queria saber sobre o ${nome} — valor e horários disponíveis.`,
  massagem: (nome: string) => `Olá! Vim pelo site e queria marcar a ${nome}.`,
  escaldaPes: "Olá! Vim pelo site e queria saber sobre o escalda-pés.",
  presente: "Olá! Vim pelo site e queria presentear alguém com uma sessão.",
  noivas: "Olá! Vim pelo site e queria saber sobre o atendimento para noivas.",
  duvida: "Olá! Vim pelo site e fiquei com uma dúvida.",
  local: "Olá! Vim pelo site e queria confirmar o endereço do espaço.",
} as const;

export const linkTelefone = `tel:${site.contato.telefoneE164}`;

/** Formata em real brasileiro. Preco nulo nunca chega aqui — o card troca por CTA. */
export function formatarPreco(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
