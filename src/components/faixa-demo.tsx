import { MODO_DEMONSTRACAO } from "@/config/site";

/**
 * Faixa honesta no topo: enquanto o site for previa, quem abrir precisa saber
 * que ainda ha dado por confirmar. Vira `false` em site.ts antes de publicar.
 */
export function FaixaDemonstracao() {
  if (!MODO_DEMONSTRACAO) return null;

  return (
    <div className="border-b border-marca/20 bg-marca-escuro/60 px-4 py-2 text-center">
      <p className="text-[0.7rem] leading-snug text-marca-claro sm:text-xs">
        Demonstração — alguns valores e informações ainda dependem de confirmação.
      </p>
    </div>
  );
}
