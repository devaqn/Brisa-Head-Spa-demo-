/**
 * UNICO lugar com os dados do negocio.
 *
 * Duas fontes, so essas: o material que a dona montou no Canva
 * (linhabrisaabodytherapy.my.canva.site) e o perfil publico @brisaheadspa.
 * O que nao esta confirmado fica `null` ou marcado com TODO(cliente) — campo
 * `null` nao e renderizado, entao o site nunca inventa informacao. A lista
 * completa do que falta esta em BRIEFING.md.
 *
 * Sobre o tom: onde ela ja escreveu alguma coisa, e a palavra dela que vale.
 * O resto foi escrito como ela fala nas legendas e no WhatsApp, com "a gente"
 * no lugar de "nos" e frase curta. Nada de bordao de agencia.
 */

/**
 * Faixa discreta no topo avisando que o site e uma previa.
 * Trocar para `false` antes de publicar a versao final da cliente.
 */
export const MODO_DEMONSTRACAO: boolean = true;

export const site = {
  nome: "Brisa Head Spa",
  marca: {
    linhaPrincipal: "Brisa",
    linhaSecundaria: "Head Spa",
  },
  /** Bio do Instagram, palavra por palavra. */
  bordao: "Um refúgio para desacelerar corpo e mente",
  descricaoCurta: "Primeiro Head Spa em Candeias",
  /** Abertura do material da linha corporal, no Canva. */
  bordaoCorpo: "O toque que renova corpo e alma",

  url: "https://brisaheadspademo.netlify.app",

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
    temDestaqueFeedbacks: true,
  },

  local: {
    bairro: "Candeias",
    cidade: "Jaboatão dos Guararapes",
    uf: "PE",
    regiaoCurta: "Candeias, Jaboatão",
    regiaoLonga: "Candeias, Jaboatão dos Guararapes e Região Metropolitana do Recife",
    referencia: "Empresarial Soares de Souza",
    /** TODO(cliente): numero da sala e endereco completo com CEP. */
    enderecoCompleto: null as string | null,
    /** TODO(cliente): link do Google Maps do espaco. */
    mapaUrl: null as string | null,
  },

  atendimento: {
    /** TODO(cliente): dias e horarios de funcionamento. */
    horario: null as string | null,
    horaMarcada: true,
    /** TODO(cliente): formas de pagamento aceitas. */
    pagamento: null as readonly string[] | null,
    /** TODO(cliente): nome da profissional. */
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
 * Terapia capilar                                                      *
 * ------------------------------------------------------------------ */

export type Pacote = {
  readonly id: string;
  readonly nome: string;
  readonly subtitulo: string;
  readonly resumo: string;
  readonly etapas: readonly string[];
  readonly preco: number | null;
  readonly duracao: string | null;
  readonly destaque: boolean;
};

/** Etapas copiadas do Canva, uma a uma. Os dois pacotes estao sem valor la. */
export const pacotesCapilar: readonly Pacote[] = [
  {
    id: "essencial",
    nome: "Brisa Essencial",
    subtitulo: "Terapia capilar",
    resumo: "O ritual completo, da lavagem até a massagem nos ombros e braços.",
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
    // TODO(cliente): o Canva traz "Duracao: I:h", provavelmente 1h.
    duracao: null,
    destaque: false,
  },
  {
    id: "premium",
    nome: "Brisa Premium",
    subtitulo: "Terapia capilar completa",
    resumo: "Entra o detox capilar, e a massagem vai até as mãos.",
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
    // TODO(cliente): duracao nao informada no material.
    duracao: null,
    destaque: true,
  },
];

/* ------------------------------------------------------------------ *
 * Brisa Body Therapy                                                   *
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
 * Texto do Canva. So corrigi erro de digitacao do original ("proffisonal",
 * espacamento de "Brisaa Recovery–") e cortei repeticao. Nada de conteudo.
 */
export const massagens: readonly Massagem[] = [
  {
    id: "calm",
    nome: "Brisa Calm",
    subtitulo: "Massagem relaxante sensorial",
    descricao:
      "Toques leves e envolventes que dissolvem o estresse e acalmam a mente. A técnica é aplicada com movimentos ritmados e suaves, promovendo relaxamento profundo e melhorando a circulação. Durante a sessão, aromas calmantes e sons harmônicos completam a experiência.",
    idealPara: "Quem busca desacelerar e sentir o corpo mais leve.",
    preco: 149.99,
    duracao: "40 a 50 min",
  },
  {
    id: "aroma",
    nome: "Brisa Aroma",
    subtitulo: "Massagem com aromaterapia",
    descricao:
      "Une técnica e essência. Os óleos vegetais e essenciais são escolhidos conforme o estado emocional e físico da cliente: relaxante, revigorante ou equilibrante. Os aromas atuam no sistema nervoso, acalmando, energizando ou restaurando o ânimo.",
    idealPara: "Quem busca equilíbrio emocional, leveza e bem-estar integral.",
    preco: 129.99,
    duracao: "40 min",
  },
  {
    id: "stones",
    nome: "Brisa Stones",
    subtitulo: "Massagem com pedras quentes",
    descricao:
      "O calor das pedras vulcânicas penetra fundo na musculatura e libera tensão acumulada. A terapeuta alterna o toque das mãos com o deslizamento das pedras aquecidas, estimulando o fluxo energético e aliviando dores musculares, com aroma escolhido para cada cliente.",
    idealPara: "Dias frios, pós-treino ou quando o corpo pede aconchego e calor.",
    preco: 169.99,
    duracao: "50 a 60 min",
  },
  {
    id: "recovery",
    nome: "Brisa Recovery",
    subtitulo: "Massagem desportiva",
    descricao:
      "Focada em alongamento e manobras firmes, atua sobre músculos e articulações, reduzindo tensão e prevenindo lesão. É mais intensa, mas feita de forma controlada e respeitando o limite do corpo.",
    idealPara:
      "Mulheres ativas, praticantes de atividade física ou que sofrem com dor por esforço repetitivo.",
    preco: 149.99,
    duracao: "45 min",
  },
  {
    id: "relief",
    nome: "Brisa Relief",
    subtitulo: "Massagem terapêutica em dores específicas",
    descricao:
      "Voltada para aliviar dor localizada, como tensão cervical e lombar. A profissional aplica manobras precisas, com pressão direcionada, óleos anti-inflamatórios naturais e estímulos musculares que trazem conforto na hora.",
    idealPara: "Quem convive com dor constante e precisa de alívio.",
    preco: 169.99,
    duracao: "60 min",
  },
];

export const escaldaPes = {
  nome: "Escalda-pés",
  chamada:
    "Chegar cansada e colocar os pés numa água quentinha com sais, ervas e óleos essenciais. O aroma vai tomando conta do ambiente e a tensão do dia vai embora junto.",
  etapas: [
    "Imersão em água morna com sais minerais e ervas aromáticas: lavanda, camomila e alecrim.",
    "Esfoliação suave, que tira as células mortas e ativa a circulação.",
    "Massagem nos pés e pernas, com creme hidratante e óleos essenciais.",
  ],
  idealPara: "Quem passa o dia em pé, sente as pernas inchadas ou só quer desligar um pouco.",
  opcoes: [
    {
      id: "escalda-simples",
      nome: "Escalda-pés",
      // TODO(cliente): o valor ficou em branco no material original.
      preco: null as number | null,
    },
    {
      id: "escalda-reflexologia",
      nome: "Com reflexologia podal",
      preco: 129.99 as number | null,
    },
  ],
} as const;

/* ------------------------------------------------------------------ *
 * O espaco                                                             *
 * ------------------------------------------------------------------ */

/**
 * Os quatro itens sao a frase de abertura do Canva, quebrada: "Ambiente
 * climatizado, aromas suaves, musica envolvente e a presenca acolhedora da
 * nossa profissional exclusiva". Ficam como lista simples, nao como card com
 * icone — quatro cards identicos e o layout mais generico que existe.
 */
export const pilares = [
  { id: "ambiente", titulo: "Ambiente climatizado", nota: "temperatura boa e luz baixa" },
  { id: "aromas", titulo: "Aromas suaves", nota: "óleo essencial escolhido na hora" },
  { id: "musica", titulo: "Música envolvente", nota: "baixinha, do começo ao fim" },
  { id: "profissional", titulo: "Profissional exclusiva", nota: "uma cliente por vez" },
] as const;

/* ------------------------------------------------------------------ *
 * Galeria                                                              *
 * ------------------------------------------------------------------ */

export type Foto = {
  readonly src: string;
  readonly alt: string;
};

/**
 * Fotos do @brisaheadspa, otimizadas por scripts/otimizar-fotos.mjs.
 * Ordem pensada para alternar rosto, detalhe e ambiente, sem duas imagens
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

/** Foto de apoio do hero. */
export const fotoHero: Foto = {
  src: "/fotos/espaco-10.webp",
  alt: "Leque de água caindo sobre a pedra da cuba do head spa",
};

/** Foto da secao sobre o espaco. */
export const fotoEspaco: Foto = {
  src: "/fotos/espaco-09.webp",
  alt: "Bandeja com jarra de cerâmica e tigela de cobre, preparada para o atendimento",
};

/* ------------------------------------------------------------------ *
 * Presente                                                             *
 * ------------------------------------------------------------------ */

/** O perfil tem dois destaques fixados sobre isso, entao o assunto ja existe. */
export const presentes = [
  {
    id: "vale-presente",
    titulo: "Vale-presente",
    descricao:
      "A gente combina por mensagem e você escolhe o serviço. Quem ganhou marca no dia que puder.",
  },
  {
    id: "noivas",
    titulo: "Noivas",
    descricao:
      "Um tempo de calma antes do dia mais corrido da vida. Chama a gente que a gente monta junto.",
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
      "É uma terapia capilar feita deitada. Junta a limpeza profunda do couro cabeludo com massagem, que começa na cabeça e vai descendo para o rosto, o pescoço e os ombros. O cabelo sai limpo e leve, mas quem vem uma vez costuma voltar pelo relaxamento.",
  },
  {
    pergunta: "Preciso marcar antes?",
    resposta:
      "Precisa. A gente atende uma cliente por vez, então o horário fica reservado só para você.",
  },
  {
    // TODO(cliente): confirmar se serve para cabelo com quimica, tintura e alongamento.
    pergunta: "Serve para qualquer tipo de cabelo?",
    resposta:
      "A lavagem e a hidratação são escolhidas para o seu tipo de fio. Se você tem química, coloração ou alongamento, comenta com a gente antes de marcar que a gente ajusta o ritual.",
  },
  {
    pergunta: "Qual a diferença entre o Essencial e o Premium?",
    resposta:
      "O Essencial já é o ritual completo, com massagem no rosto, pescoço, ombros e braços. O Premium entra com detox capilar, limpeza profunda do couro cabeludo, e a massagem vai até as mãos.",
  },
  {
    pergunta: "A massagem corporal é a mesma coisa que o head spa?",
    resposta:
      "Não. O head spa é na cabeça. A linha Brisa Body Therapy é no corpo: relaxante, aromaterapia, pedras quentes, desportiva e terapêutica. Dá para fazer as duas no mesmo dia.",
  },
  {
    // TODO(cliente): confirmar formas de pagamento.
    pergunta: "Quais as formas de pagamento?",
    resposta: "A gente combina na hora de marcar. Chama no WhatsApp que a gente te conta.",
  },
] as const;

/** Links ancora do menu. */
export const navegacao = [
  { href: "#espaco", rotulo: "O espaço" },
  { href: "#terapia-capilar", rotulo: "Head Spa" },
  { href: "#body-therapy", rotulo: "Massagem" },
  { href: "#galeria", rotulo: "Fotos" },
  { href: "#duvidas", rotulo: "Dúvidas" },
] as const;
