/**
 * UNICO lugar com os dados do negocio.
 *
 * Duas fontes, so essas: o material que a dona montou no Canva
 * (linhabrisaabodytherapy.my.canva.site) e o perfil publico @brisaheadspa.
 * O que nao esta confirmado fica `null` ou marcado com TODO(cliente) — campo
 * `null` nao e renderizado, entao o site nunca inventa informacao. A lista
 * completa do que falta esta em BRIEFING.md.
 */

/**
 * Faixa discreta no topo avisando que o site e uma previa.
 * Trocar para `false` antes de publicar a versao final da cliente.
 */
export const MODO_DEMONSTRACAO: boolean = true;

export const site = {
  nome: "Brisa Head Spa",
  /** O logo separa as duas palavras em linhas — mesma hierarquia da arte dela. */
  marca: {
    linhaPrincipal: "Brisa",
    linhaSecundaria: "Head Spa",
  },
  /**
   * Bio do Instagram, palavra por palavra. E a promessa que o site inteiro
   * repete: nao e salao, e refugio.
   */
  bordao: "Um refúgio para desacelerar corpo e mente",
  descricaoCurta: "Primeiro Head Spa em Candeias",
  /** Assinatura da linha corporal, tirada da abertura do Canva. */
  bordaoCorpo: "O toque que renova corpo e alma",

  // TODO(cliente): trocar pelo dominio real quando comprar.
  url: "https://brisaheadspa.netlify.app",

  contato: {
    whatsapp: "5581991494187",
    telefoneE164: "+5581991494187",
    telefoneExibicao: "(81) 99149-4187",
    instagram: "brisaheadspa",
    instagramUrl: "https://www.instagram.com/brisaheadspa/",
    /** TODO(cliente): e-mail comercial, se houver. */
    email: null as string | null,
  },

  /** Numeros conferidos no perfil em 14/09/2026 — nada estimado. */
  provaSocial: {
    seguidores: "9.435",
    publicacoes: "76",
    /** O destaque "Feedbacks" fica fixado no perfil dela. */
    temDestaqueFeedbacks: true,
  },

  local: {
    /** Da bio: "Primeiro Head Spa em Candeias" + "Empresarial Soares de Souza". */
    bairro: "Candeias",
    cidade: "Jaboatão dos Guararapes",
    uf: "PE",
    regiaoCurta: "Candeias, Jaboatão",
    regiaoLonga: "Candeias, Jaboatão dos Guararapes e Região Metropolitana do Recife",
    /** Confirmado na bio do perfil. */
    referencia: "Empresarial Soares de Souza",
    /** TODO(cliente): numero da sala e endereco completo com CEP. */
    enderecoCompleto: null as string | null,
    /** TODO(cliente): link do Google Maps do espaco. */
    mapaUrl: null as string | null,
  },

  atendimento: {
    /** TODO(cliente): dias e horarios de funcionamento. */
    horario: null as string | null,
    /** Todo o material fala em experiencia reservada, uma cliente por vez. */
    horaMarcada: true,
    /** TODO(cliente): formas de pagamento aceitas. */
    pagamento: null as readonly string[] | null,
    /** TODO(cliente): nome da profissional ("nossa profissional exclusiva"). */
    profissional: null as string | null,
  },

  empresa: {
    /** TODO(cliente): CNPJ, se quiser exibir no rodape. */
    cnpj: null as string | null,
    /** TODO(cliente): razao social. */
    razaoSocial: null as string | null,
  },
} as const;

/* ------------------------------------------------------------------ *
 * Terapia capilar — o servico ancora da marca                         *
 * ------------------------------------------------------------------ */

export type Pacote = {
  readonly id: string;
  readonly nome: string;
  readonly subtitulo: string;
  readonly resumo: string;
  readonly etapas: readonly string[];
  /** TODO(cliente): nenhum dos dois pacotes tem valor no material. */
  readonly preco: number | null;
  readonly duracao: string | null;
  readonly destaque: boolean;
};

/**
 * Copiado do Canva da dona, etapa por etapa. Os dois pacotes estao sem preco
 * no material original — por isso `preco: null`, e o card mostra o botao de
 * WhatsApp no lugar do valor.
 */
export const pacotesCapilar: readonly Pacote[] = [
  {
    id: "essencial",
    nome: "Brisa Essencial",
    subtitulo: "Terapia capilar",
    resumo:
      "O ritual completo de cuidado com os fios e o couro cabeludo, com massagem que desce do topo da cabeça até os ombros.",
    etapas: [
      "Terapia capilar com lavagem específica",
      "Hidratação profunda",
      "Limpeza e hidratação intensa dos fios",
      "Massagem capilar sensorial",
      "Massagem facial relaxante",
      "Massagem em ombros e braços",
      "Massagem no pescoço",
    ],
    preco: null,
    // TODO(cliente): o Canva traz "Duração: I:h", provavelmente 1h.
    duracao: null,
    destaque: false,
  },
  {
    id: "premium",
    nome: "Brisa Premium",
    subtitulo: "Terapia capilar completa",
    resumo:
      "A versão mais longa do ritual: entra o detox capilar e a massagem se estende até as mãos.",
    etapas: [
      "Lavagem específica e personalizada",
      "Detox capilar",
      "Limpeza profunda do couro cabeludo e dos fios",
      "Hidratação profunda dos fios",
      "Massagem capilar sensorial",
      "Massagem facial relaxante",
      "Massagem em ombros",
      "Massagem no pescoço",
      "Massagem nos braços e mãos",
    ],
    preco: null,
    // TODO(cliente): duração não informada no material.
    duracao: null,
    destaque: true,
  },
];

/* ------------------------------------------------------------------ *
 * Brisa Body Therapy — a linha corporal                               *
 * ------------------------------------------------------------------ */

export type Massagem = {
  readonly id: string;
  readonly nome: string;
  readonly subtitulo: string;
  readonly descricao: string;
  readonly idealPara: string;
  readonly preco: number;
  readonly duracao: string;
};

/**
 * Texto integral do Canva. Só corrigi erros de digitação do original
 * ("proffisonal", espaçamento de "Brisaa Recovery–") — nada de conteúdo.
 */
export const massagens: readonly Massagem[] = [
  {
    id: "calm",
    nome: "Brisa Calm",
    subtitulo: "Massagem relaxante sensorial",
    descricao:
      "Toques leves e envolventes que dissolvem o estresse e acalmam a mente. A técnica é aplicada com movimentos ritmados e suaves, promovendo relaxamento profundo e melhorando a circulação. Durante a sessão, aromas calmantes e sons harmônicos completam a experiência, conduzindo você a um estado de serenidade e descanso total.",
    idealPara: "Quem busca desacelerar e sentir o corpo mais leve.",
    preco: 149.99,
    duracao: "40 a 50 min",
  },
  {
    id: "aroma",
    nome: "Brisa Aroma",
    subtitulo: "Massagem com aromaterapia",
    descricao:
      "Uma massagem sensorial que une técnica e essência. Óleos vegetais e óleos essenciais são personalizados conforme o estado emocional e físico da cliente — relaxante, revigorante ou equilibrante. Os aromas atuam no sistema nervoso, acalmando, energizando ou restaurando o ânimo.",
    idealPara: "Quem busca equilíbrio emocional, leveza e bem-estar integral.",
    preco: 129.99,
    duracao: "40 min",
  },
  {
    id: "stones",
    nome: "Brisa Stones",
    subtitulo: "Massagem com pedras quentes",
    descricao:
      "O calor das pedras vulcânicas penetra profundamente na musculatura, liberando tensões acumuladas e proporcionando uma sensação imediata de conforto e equilíbrio. A terapeuta alterna o toque das mãos com o deslizamento das pedras aquecidas, estimulando o fluxo energético e aliviando dores musculares — com aromas escolhidos para cada cliente e sua necessidade.",
    idealPara: "Dias frios, pós-treino ou quando o corpo pede aconchego e calor.",
    preco: 169.99,
    duracao: "50 a 60 min",
  },
  {
    id: "recovery",
    nome: "Brisa Recovery",
    subtitulo: "Massagem desportiva",
    descricao:
      "Focada em alongamentos e manobras firmes, essa técnica atua sobre músculos e articulações, reduzindo tensões e prevenindo lesões. Apesar de mais intensa, é feita de forma controlada e respeitosa ao limite do corpo, promovendo uma recuperação eficiente e sensação de vitalidade.",
    idealPara:
      "Mulheres ativas, praticantes de atividade física ou que sofrem de dores por esforço repetitivo.",
    preco: 149.99,
    duracao: "45 min",
  },
  {
    id: "relief",
    nome: "Brisa Relief",
    subtitulo: "Massagem terapêutica em dores específicas",
    descricao:
      "Técnica voltada para aliviar dores localizadas — como tensão cervical, lombar e outras partes do corpo. A profissional aplica manobras precisas, com pressão direcionada, óleos anti-inflamatórios naturais e estímulos musculares que promovem conforto imediato.",
    idealPara: "Quem sofre com dores constantes e precisa de alívio e leveza.",
    preco: 169.99,
    duracao: "60 min",
  },
];

/* ------------------------------------------------------------------ *
 * Escalda-pes                                                         *
 * ------------------------------------------------------------------ */

export const escaldaPes = {
  nome: "Escalda-pés relaxante",
  chamada:
    "Chegar cansada, colocar os pés numa água quentinha com sais, ervas e óleos essenciais. O aroma toma conta do ambiente e, aos poucos, a tensão do dia vai embora.",
  etapas: [
    "Imersão em água morna com sais minerais e ervas aromáticas — lavanda, camomila e alecrim.",
    "Esfoliação suave para remover células mortas e ativar a circulação.",
    "Massagem relaxante nos pés e pernas, com creme hidratante e óleos essenciais.",
  ],
  idealPara:
    "Quem passa o dia em pé, sente inchaço nas pernas ou quer simplesmente desligar por um tempo.",
  opcoes: [
    {
      id: "escalda-simples",
      nome: "Escalda-pés",
      // TODO(cliente): o valor ficou em branco no material original.
      preco: null as number | null,
    },
    {
      id: "escalda-reflexologia",
      nome: "Escalda-pés + reflexologia podal",
      preco: 129.99 as number | null,
    },
  ],
} as const;

/* ------------------------------------------------------------------ *
 * A experiencia — o que a cliente encontra no espaco                   *
 * ------------------------------------------------------------------ */

/**
 * Da abertura do Canva: "Ambiente climatizado, aromas suaves, musica
 * envolvente e a presenca acolhedora da nossa profissional exclusiva".
 * Cada item vira um pilar da secao de experiencia.
 */
export const pilares = [
  {
    id: "ambiente",
    titulo: "Ambiente climatizado",
    descricao:
      "Um espaço pensado para o corpo baixar a guarda: temperatura agradável, luz suave e silêncio.",
    icone: "ambiente",
  },
  {
    id: "aromas",
    titulo: "Aromas suaves",
    descricao:
      "Óleos essenciais escolhidos para cada cliente. O cheiro é a primeira coisa que desacelera.",
    icone: "aroma",
  },
  {
    id: "musica",
    titulo: "Música envolvente",
    descricao:
      "Trilha baixa e contínua, do começo ao fim do ritual, para a mente não voltar para a lista de tarefas.",
    icone: "musica",
  },
  {
    id: "profissional",
    titulo: "Profissional exclusiva",
    descricao:
      "Uma cliente por vez, com hora marcada. Todo o atendimento é dedicado só a você.",
    icone: "profissional",
  },
] as const;

/* ------------------------------------------------------------------ *
 * Galeria — fotos do proprio perfil                                    *
 * ------------------------------------------------------------------ */

export type Foto = {
  readonly src: string;
  readonly alt: string;
};

/**
 * Fotos do @brisaheadspa, otimizadas por scripts/otimizar-fotos.mjs.
 * Ordem pensada para alternar rosto, detalhe e ambiente — sem duas imagens
 * parecidas coladas uma na outra.
 */
export const galeria: readonly Foto[] = [
  { src: "/fotos/espaco-07.webp", alt: "Cliente com máscara de jade sobre os olhos durante a terapia capilar" },
  { src: "/fotos/espaco-02.webp", alt: "Bandeja de madeira com jarra de cerâmica, tigela de cobre e toalha enrolada" },
  { src: "/fotos/espaco-04.webp", alt: "Lavagem dos fios na cuba dourada do head spa" },
  { src: "/fotos/espaco-06.webp", alt: "Letreiro do Brisa Head Spa na parede do espaço, ao lado da fonte de água" },
  { src: "/fotos/espaco-03.webp", alt: "Leque de água caindo sobre a pedra escura da cuba, em detalhe" },
  { src: "/fotos/espaco-05.webp", alt: "Toalhas brancas enroladas sobre a maca, com uma suculenta ao lado" },
  { src: "/fotos/espaco-08.webp", alt: "Massagem capilar com espuma, com plantas ao fundo" },
  { src: "/fotos/espaco-01.webp", alt: "Terapia capilar em andamento, com máscara de jade e luz baixa" },
];

/** Foto usada como apoio do hero — detalhe da água, sem rosto. */
export const fotoHero: Foto = {
  src: "/fotos/espaco-10.webp",
  alt: "Leque de água caindo sobre a pedra da cuba do head spa",
};

/* ------------------------------------------------------------------ *
 * Presente — vem dos destaques "melhorpresente" e "Noivas" do perfil   *
 * ------------------------------------------------------------------ */

/**
 * O perfil tem dois destaques fixados sobre isso, entao o assunto existe.
 * O conteudo exato de cada pacote nao: TODO(cliente) em BRIEFING.md.
 */
export const presentes = [
  {
    id: "vale-presente",
    titulo: "Vale-presente",
    descricao:
      "Aniversário, Dia das Mães, agradecimento. Em vez de mais um objeto, uma hora de descanso de verdade.",
  },
  {
    id: "noivas",
    titulo: "Noivas",
    descricao:
      "Um momento de calma antes do dia mais corrido da vida. Fale com a gente para montar o ritual junto.",
  },
] as const;

/* ------------------------------------------------------------------ *
 * Duvidas                                                              *
 * ------------------------------------------------------------------ */

/** TODO(cliente): revisar as respostas marcadas — dependem de confirmacao. */
export const faq = [
  {
    pergunta: "O que é um head spa?",
    resposta:
      "É uma terapia capilar que junta limpeza profunda do couro cabeludo com massagem sensorial. Você deita, recebe a lavagem e a hidratação dos fios, e a massagem sobe da cabeça para o rosto, pescoço e ombros. O resultado é cabelo limpo e leve, mas o que a maioria vem buscar mesmo é o relaxamento.",
  },
  {
    pergunta: "Preciso marcar antes?",
    resposta:
      "Sim. O atendimento é individual, uma cliente por vez, então o horário é reservado só para você. Chame no WhatsApp para ver as datas disponíveis.",
  },
  {
    // TODO(cliente): confirmar se serve para cabelo com química, tintura e alongamento.
    pergunta: "Serve para qualquer tipo de cabelo?",
    resposta:
      "A lavagem e a hidratação são personalizadas para cada tipo de fio. Se você tem química, coloração ou alongamento, comente no WhatsApp antes de marcar para a gente ajustar o ritual.",
  },
  {
    pergunta: "Qual a diferença entre o Essencial e o Premium?",
    resposta:
      "O Essencial já traz o ritual completo de terapia capilar com massagem no rosto, pescoço, ombros e braços. O Premium acrescenta o detox capilar, a limpeza profunda do couro cabeludo e estende a massagem até as mãos.",
  },
  {
    pergunta: "A massagem corporal é a mesma coisa que o head spa?",
    resposta:
      "Não. O head spa é a terapia capilar, feita na cabeça. A linha Brisa Body Therapy é a linha corporal, com massagem relaxante, aromaterapia, pedras quentes, desportiva e terapêutica. Dá para combinar as duas no mesmo dia.",
  },
  {
    // TODO(cliente): confirmar formas de pagamento.
    pergunta: "Quais as formas de pagamento?",
    resposta:
      "Combinamos no momento da reserva. Chame no WhatsApp para confirmar a forma que você prefere.",
  },
] as const;

/** Links ancora do menu. */
export const navegacao = [
  { href: "#experiencia", rotulo: "A experiência" },
  { href: "#terapia-capilar", rotulo: "Head Spa" },
  { href: "#body-therapy", rotulo: "Body Therapy" },
  { href: "#galeria", rotulo: "O espaço" },
  { href: "#duvidas", rotulo: "Dúvidas" },
] as const;
