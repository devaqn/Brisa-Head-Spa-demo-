import { Wind, Flower2, Music3, HandHeart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Secao, TituloSecao } from "@/components/ui/secao";
import { pilares, site } from "@/config/site";

const ICONES: Record<string, LucideIcon> = {
  ambiente: Wind,
  aroma: Flower2,
  musica: Music3,
  profissional: HandHeart,
};

/**
 * Os quatro pilares vem da abertura do material da cliente. E o que diferencia
 * o espaco de um salao: nao e o servico, e o ambiente em volta dele.
 */
export function Experiencia() {
  return (
    <Secao id="experiencia">
      <TituloSecao
        etiqueta="A experiência"
        titulo="Não é um salão. É uma hora fora do dia."
        descricao={`${site.bordaoCorpo}. Ambiente climatizado, aromas suaves, música envolvente e a presença acolhedora da profissional — tudo pensado para o corpo entender que pode desligar.`}
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-linha bg-linha sm:grid-cols-2 lg:grid-cols-4">
        {pilares.map((pilar) => {
          const Icone = ICONES[pilar.icone] ?? Wind;
          return (
            <li key={pilar.id} className="bg-superficie p-6 sm:p-7">
              <Icone className="size-6 text-marca" aria-hidden />
              <h3 className="mt-4 font-display text-xl">{pilar.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-suave">{pilar.descricao}</p>
            </li>
          );
        })}
      </ul>
    </Secao>
  );
}
