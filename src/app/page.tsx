import { FaixaDemonstracao } from "@/components/faixa-demo";
import { WhatsAppFlutuante } from "@/components/whatsapp-flutuante";
import { Cabecalho } from "@/components/sections/cabecalho";
import { Hero } from "@/components/sections/hero";
import { Experiencia } from "@/components/sections/experiencia";
import { TerapiaCapilar } from "@/components/sections/terapia-capilar";
import { BodyTherapy } from "@/components/sections/body-therapy";
import { Galeria } from "@/components/sections/galeria";
import { FaixaCta } from "@/components/sections/faixa-cta";
import { Presente } from "@/components/sections/presente";
import { Localizacao } from "@/components/sections/localizacao";
import { Duvidas } from "@/components/sections/duvidas";
import { Rodape } from "@/components/sections/rodape";

/**
 * Ordem: promessa, o que e o ritual, servico ancora, linha nova, prova visual,
 * conversao, ampliacao de ticket, onde fica, objecoes.
 */
export default function Home() {
  return (
    <>
      <FaixaDemonstracao />
      <Cabecalho />
      <main>
        <Hero />
        <Experiencia />
        <TerapiaCapilar />
        <BodyTherapy />
        <Galeria />
        <FaixaCta />
        <Presente />
        <Localizacao />
        <Duvidas />
      </main>
      <Rodape />
      <WhatsAppFlutuante />
    </>
  );
}
