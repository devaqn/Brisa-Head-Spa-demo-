"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Marca } from "@/components/ui/marca";
import { Botao } from "@/components/ui/botao";
import { navegacao } from "@/config/site";
import { linkWhatsApp, mensagens } from "@/lib/whatsapp";

export function Cabecalho() {
  const [aberto, setAberto] = useState(false);

  // Trava o scroll do body enquanto o menu esta aberto, senao a pagina desliza
  // atras do painel quando a pessoa arrasta o dedo.
  useEffect(() => {
    if (!aberto) return;

    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = anterior;
    };
  }, [aberto]);

  // Fecha no Esc: teclado e leitor de tela contam tanto quanto o dedo.
  useEffect(() => {
    if (!aberto) return;

    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setAberto(false);
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [aberto]);

  return (
    <header className="sticky top-0 z-40 border-b border-linha bg-fundo/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#topo"
          className="inline-flex min-h-11 shrink-0 items-center"
          aria-label="Brisa Head Spa, ir para o topo"
        >
          <Marca />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-suave transition-colors hover:text-marca"
            >
              {item.rotulo}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Botao
            href={linkWhatsApp(mensagens.agendar)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            Marcar horário
          </Botao>

          <button
            type="button"
            onClick={() => setAberto((estava) => !estava)}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            className="inline-flex size-11 items-center justify-center rounded-full text-texto transition-colors hover:bg-superficie-2 lg:hidden"
          >
            {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {aberto ? (
        <div id="menu-mobile" className="border-t border-linha bg-fundo lg:hidden">
          <nav aria-label="Principal, celular" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setAberto(false)}
                    className="flex min-h-12 items-center border-b border-linha/70 text-base text-texto transition-colors hover:text-marca"
                  >
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>

            <Botao
              href={linkWhatsApp(mensagens.agendar)}
              target="_blank"
              rel="noopener noreferrer"
              largura="cheia"
              className="mt-4"
              onClick={() => setAberto(false)}
            >
              Marcar horário no WhatsApp
            </Botao>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
