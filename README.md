# Brisa Head Spa

Site institucional do **Brisa Head Spa** — terapia capilar e massagem corporal em
Candeias, Jaboatão dos Guararapes/PE.

Página única, estática, sem backend. Toda a conversão acontece por link direto de
WhatsApp com a mensagem já digitada.

## Stack

Next 16 (App Router) · React 19 · TypeScript estrito · Tailwind v4 (CSS-first) ·
um componente do [Originkit](https://www.originkit.dev) · pnpm · deploy estático no Netlify.

Sem shadcn/Radix: os primitivos de UI são próprios, sobre `cva` + `cn`.

## Comandos

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint
pnpm typecheck
pnpm build      # gera out/
pnpm fotos      # baixa e otimiza as imagens (precisa de ffmpeg no PATH)
```

Antes de considerar qualquer mudança pronta: `pnpm lint && pnpm typecheck && pnpm build`.

## Onde mexer

**Praticamente tudo está em [`src/config/site.ts`](src/config/site.ts).** Preço,
telefone, endereço, serviços, FAQ, textos de apoio — tudo sai de lá. Alterar um valor
ali atualiza a tela, os dados estruturados e o SEO de uma vez.

Duas convenções importantes nesse arquivo:

- **`null` + `TODO(cliente)`** — o que a cliente ainda não confirmou fica `null`. Campo
  `null` simplesmente não é renderizado, então o site nunca inventa informação. Preço
  `null` faz o card trocar o valor por um botão de WhatsApp. A lista completa do que
  falta está em [BRIEFING.md](BRIEFING.md).
- **`MODO_DEMONSTRACAO`** — enquanto `true`, exibe uma faixa no topo avisando que o site
  é uma prévia. Vire para `false` antes de publicar a versão final.

## Estrutura

```
src/app/            layout (metadata + JSON-LD), page, globals.css,
                    sitemap/robots/manifest/opengraph-image/icon
src/components/
  sections/         uma seção da página por arquivo, na ordem em que aparecem
  ui/               primitivos próprios (botao, secao, marca, hooks)
  originkit/ui/     componentes vendorizados pelo CLI do Originkit
src/config/site.ts  ÚNICO lugar com dado de negócio
src/lib/            cn, whatsapp
scripts/            pipeline de fotos (ffmpeg puro, sem dependência npm)
```

`src/app/page.tsx` só empilha as seções. A ordem é: promessa → o que é o ritual →
serviço âncora (head spa) → linha nova (corporal) → prova visual → conversão →
ampliação de ticket → onde fica → objeções.

## Conteúdo: de onde veio

Só duas fontes, e nada além delas:

| Fonte | O que saiu de lá |
|---|---|
| Canva da cliente (`linhabrisaabodytherapy.my.canva.site`) | Os dois pacotes de terapia capilar, as cinco massagens com preço e duração, o ritual do escalda-pés |
| [@brisaheadspa](https://www.instagram.com/brisaheadspa/) | Logo, fotos, bio, WhatsApp, localização, prova social, os temas de "presente" e "noivas" |

Erros de digitação do material original foram corrigidos em silêncio no texto do site
("proffisonal" → "profissional", "scalda pés" → "escalda-pés"). Nenhum conteúdo foi
inventado ou ampliado.

## Fotos

O Instagram entrega feed em no máximo 640px e foto de perfil em 150px. É pouco para uma
imagem de fundo inteira, e por isso o hero se apoia em tipografia, com a foto como
coluna lateral no tamanho em que ainda está nítida.

O pipeline tem dois passos, os dois em `scripts/`:

1. `baixar-fotos.mjs` lê as URLs assinadas de `fotos.json` e salva em `legacy/`
   (gitignored). **Essas URLs expiram em cerca de um dia** — se o download falhar com
   403, recapture do perfil e atualize o JSON.
2. `otimizar-fotos.mjs` converte para `public/fotos/*.webp` com ffmpeg, qualidade 82,
   largura máxima 1200 e **sem upscale**. Idempotente; use `--force` para refazer.

Quando a cliente mandar os originais em alta, basta jogá-los em `legacy/` com os mesmos
nomes e rodar `pnpm fotos --force`.

## Responsividade

O tráfego vem do Instagram, então o celular é a tela principal e não um caso de borda.
Sistema de dois breakpoints (`sm` e `lg`), mobile-first. Alguns pontos que valem saber
antes de mexer no layout:

- O HTML estático sai sempre no layout de celular. `use-media-query.ts` usa
  `useSyncExternalStore` com snapshot de servidor `false`, então quem decide o layout é
  o navegador no primeiro render.
- **A galeria é própria, sem biblioteca.** Duas colunas no celular, quatro no desktop,
  com as fotos pares descendo 40px a partir de `lg`. O desencontro é de propósito: grade
  perfeitamente alinhada parece catálogo. `self-start` nos itens impede a grade de esticar
  o item não deslocado e deixar faixa vazia sob a foto. Zero JavaScript.
- **O título do hero só anima no desktop**, pelo mesmo motivo: não vale ~70 KB de gsap
  num 4G. O texto puro é o que vai para o HTML (e é o que o buscador lê).
- Botões não usam `whitespace-nowrap`: rótulo longo num botão nowrap vira a largura
  mínima do container e estoura a tela.
- `prefers-reduced-motion` mata as animações em `globals.css`, inclusive as do Originkit.

## Notas técnicas

- **`src/components/originkit/` é código vendorizado** e está no `ignores` do ESLint.
  Hoje só tem o `text-emerge`, usado no título do hero. Se adicionar um componente que
  não passe no `noUncheckedIndexedAccess`, ponha `@ts-nocheck` no topo do arquivo dele
  em vez de afrouxar o tsconfig do site inteiro.
- **O CLI do Originkit tem limite de 10 componentes por dia.** Estourou, só volta no dia
  seguinte — e `originkit remove` não devolve a cota. Antes de remover um componente,
  confira que o substituto já baixou.
- `globals.css` tem `@source "../components/originkit"`. Sem isso o Tailwind v4 não varre
  a pasta vendorizada e as classes dos componentes somem no build.
- **As cores foram amostradas das fotos dela, não escolhidas no olho.** As imagens do
  espaço caem todas em marrom quente (`#190b03` nas sombras, `#825d3d` na madeira,
  `#bb825c` na terracota, `#e5dacc` nas toalhas) e o fundo do logotipo é `#2e200b`. Daí
  o site ser creme com marrom em vez do quase-preto com dourado que todo spa genérico usa.
- `--color-marca-luz` (`#d2a17d`) existe só para texto pequeno sobre os fundos marrons: o
  terracota da marca chega a 3,9:1 ali, abaixo do mínimo de 4,5:1 do WCAG AA.
- O token de cor se chama `--color-fundo`, não `--color-base`: `base` colidiria com o
  utilitário `text-base` (tamanho de fonte) do Tailwind.
- `pnpm-workspace.yaml` libera o build do `unrs-resolver` (usado pelo
  `eslint-config-next`). Sem isso o pnpm bloqueia a instalação e todo script falha.
- Não existe `tailwind.config`: Tailwind v4 é configurado no CSS, no bloco `@theme`.

## Deploy

`netlify.toml` já está pronto: `pnpm build`, publica `out/`, Node 22, cabeçalhos de
segurança e o `Content-Type: image/png` do `/opengraph-image` — sem essa última regra o
Netlify serve a imagem como octet-stream e a prévia do link no WhatsApp não aparece.

Depois de publicar:

1. Virar `MODO_DEMONSTRACAO` para `false` em `src/config/site.ts`.
2. Trocar `site.url` pelo domínio real.
3. Cadastrar o endereço no Google Meu Negócio e apontar o site.
4. Trocar o link da bio do Instagram.
