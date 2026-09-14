import { IconeWhatsApp } from "@/components/ui/icones-marca";
import { linkWhatsApp, mensagens } from "@/lib/whatsapp";

/**
 * Botao fixo de WhatsApp. So o icone no celular, icone + rotulo a partir de
 * `sm` — no celular o rotulo roubaria largura util da tela.
 */
export function WhatsAppFlutuante() {
  return (
    <a
      href={linkWhatsApp(mensagens.padrao)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex min-h-14 min-w-14 items-center justify-center gap-2 rounded-full bg-marca px-4 font-medium text-fundo shadow-lg shadow-black/40 transition-colors hover:bg-marca-claro sm:right-6 sm:bottom-6"
    >
      <IconeWhatsApp className="size-6 shrink-0" />
      <span className="hidden text-sm sm:inline">Marcar horário</span>
    </a>
  );
}
