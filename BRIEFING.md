# O que falta confirmar com a cliente

O site está montado só com o que dava para confirmar no material do Canva e no perfil
[@brisaheadspa](https://www.instagram.com/brisaheadspa/). Tudo que não deu, ficou `null`
em `src/config/site.ts` e **simplesmente não é renderizado** — o site não inventa
informação. Esta é a lista do que preencher.

## Mensagem pronta para mandar para a Júlia

> Oi Júlia, tudo bem? Terminei a demonstração do site, o link tá aí em cima 🙂
>
> Montei tudo em cima do material do Canva e das fotos do Instagram de vocês. Algumas
> informações não tinham no material, então deixei o site pedindo pra pessoa chamar no
> WhatsApp em vez de mostrar valor errado. Se puder me confirmar esses pontos, eu já
> deixo tudo certinho:
>
> 1. Quanto custa o **Brisa Essencial** e o **Brisa Premium**? (são os dois pacotes de
>    terapia capilar — no Canva não tinha valor)
> 2. Quanto dura cada um dos dois? No Canva tá escrito "Duração: I:h", imagino que seja 1h
> 3. Quanto custa o **escalda-pés sozinho**? (só o "escalda-pés + reflexologia, R$ 129,99"
>    tava preenchido)
> 4. Tem um "Valor: R$ 149,99" solto no meio do material — é de qual serviço?
> 5. Qual o **endereço completo**? Sei que é no Empresarial Soares de Souza, mas preciso
>    do número da sala pra colocar no site e no Google Maps
> 6. Qual o **horário de funcionamento**?
> 7. Quais **formas de pagamento** vocês aceitam?
> 8. Como se chama a **profissional**? No material aparece como "nossa profissional
>    exclusiva", fica mais acolhedor com o nome
> 9. O nome certo é **Brisa** ou **Brisaa**? No Instagram tá "Brisa", no Canva e na
>    resposta automática do WhatsApp tá "Brisaa" — usei "Brisa" por enquanto
> 10. Consegue me mandar as **fotos originais** e a **logo em arquivo grande**? As que peguei
>     do Instagram saem pequenas e ficam meio borradas em tela de computador
> 11. O **vale-presente** e o **pacote para noivas** funcionam como? Vi os destaques no
>     perfil mas não sei o que inclui cada um
> 12. Tem alguma regra de **antecedência ou cancelamento** que deva aparecer no site?
> 13. Vocês querem um **domínio próprio** (tipo brisaheadspa.com.br) ou pode ficar no
>     endereço gratuito mesmo?

## Tabela de referência

| # | O que falta | Por que importa | Campo em `src/config/site.ts` |
|---|---|---|---|
| 1 | Preço do Brisa Essencial e do Brisa Premium | É o serviço principal da marca e está sem valor. Hoje o card mostra "sob consulta" e manda para o WhatsApp | `pacotesCapilar[].preco` |
| 2 | Duração dos dois pacotes | O Canva traz `Duração: I:h`, provável erro de digitação de "1h" | `pacotesCapilar[].duracao` |
| 3 | Valor do escalda-pés simples | Só a versão com reflexologia tem preço | `escaldaPes.opcoes[0].preco` |
| 4 | Dono do "Valor: R$ 149,99" solto | Aparece sem serviço associado no material | — |
| 5 | Endereço completo com sala e CEP | Entra no rodapé, na seção de localização e no `PostalAddress` dos dados estruturados. É o que faz o site aparecer na busca local | `local.enderecoCompleto` |
| 5b | Link do Google Maps | Habilita o botão "Abrir no mapa", hoje oculto | `local.mapaUrl` |
| 6 | Horário de funcionamento | Hoje o site diz apenas "com hora marcada" | `atendimento.horario` |
| 7 | Formas de pagamento | O bloco inteiro fica oculto sem isso, e é dúvida comum antes de marcar | `atendimento.pagamento` |
| 8 | Nome da profissional | O material fala em "profissional exclusiva"; com nome, a seção de experiência fica mais pessoal | `atendimento.profissional` |
| 9 | Grafia oficial (Brisa ou Brisaa) | Aparece no título, no rodapé, no SEO e nos dados estruturados. Fontes divergem | `site.nome`, `marca.*` |
| 10 | Fotos originais e logo em alta | O Instagram entrega feed em 640px e perfil em 150px. Limita o hero e deixa a logo mole no desktop | `legacy/` + `pnpm fotos --force` |
| 11 | O que inclui o vale-presente e o pacote noivas | A seção existe (vem dos destaques do perfil) mas hoje só convida para a conversa | `presentes[].descricao` |
| 12 | Antecedência e cancelamento | Vira uma pergunta a mais no FAQ e evita desencontro | `faq` |
| 13 | Domínio próprio | Define `site.url`, o canonical e o sitemap | `site.url` |

## Respostas do FAQ que dependem de confirmação

Estão marcadas com `TODO(cliente)` no arquivo:

- **"Serve para qualquer tipo de cabelo?"** — hoje a resposta pede para comentar no
  WhatsApp se houver química, coloração ou alongamento. Confirmar se há restrição real.
- **"Quais as formas de pagamento?"** — resposta genérica até a lista chegar.

## Antes de publicar a versão final

1. Virar `MODO_DEMONSTRACAO` para `false` em `src/config/site.ts` (tira a faixa de aviso
   do topo).
2. Trocar `site.url` pelo domínio definitivo.
3. Rodar `pnpm fotos --force` depois de colocar as fotos originais em `legacy/`.
4. `pnpm lint && pnpm typecheck && pnpm build`.
