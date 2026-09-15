import { site } from "@/config/site";

const BASE = `https://wa.me/${site.contato.whatsapp}`;

/** Monta o link do WhatsApp com a mensagem ja digitada. */
export function linkWhatsApp(mensagem?: string): string {
  return mensagem ? `${BASE}?text=${encodeURIComponent(mensagem)}` : BASE;
}

/**
 * Cada CTA manda um texto diferente, para ela abrir a conversa ja sabendo de
 * onde a pessoa veio. Escrito como cliente escreve no WhatsApp: "oi", frase
 * curta, sem "Prezados" e sem ponto de exclamacao em toda linha.
 */
export const mensagens = {
  padrao: "Oi! Vim pelo site e queria marcar um horário.",
  agendar: "Oi! Vim pelo site e queria marcar um horário no Brisa.",
  capilar: (nome: string) => `Oi! Vim pelo site e queria saber o valor do ${nome}.`,
  massagem: (nome: string) => `Oi! Vim pelo site e queria marcar a ${nome}.`,
  escaldaPes: "Oi! Vim pelo site e queria saber do escalda-pés.",
  presente: "Oi! Vim pelo site e queria presentear alguém com uma sessão.",
  noivas: "Oi! Vim pelo site e queria saber do atendimento para noivas.",
  duvida: "Oi! Vim pelo site e fiquei com uma dúvida.",
  local: "Oi! Vim pelo site e queria confirmar o endereço.",
} as const;

export const linkTelefone = `tel:${site.contato.telefoneE164}`;

/** Formata em real. Preco nulo nunca chega aqui: o card troca por CTA. */
export function formatarPreco(valor: number): string {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
