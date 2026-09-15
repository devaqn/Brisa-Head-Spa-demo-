import { MODO_DEMONSTRACAO } from "@/config/site";

/**
 * Faixa honesta no topo: enquanto o site for previa, quem abrir precisa saber
 * que ainda ha dado por confirmar. Vira `false` em site.ts antes de publicar.
 */
export function FaixaDemonstracao() {
  if (!MODO_DEMONSTRACAO) return null;

  return (
    <div className="bg-escuro px-4 py-2 text-center">
      <p className="text-[0.7rem] leading-snug text-creme/80 sm:text-xs">
        Esta é uma demonstração. Alguns valores ainda precisam ser confirmados.
      </p>
    </div>
  );
}
