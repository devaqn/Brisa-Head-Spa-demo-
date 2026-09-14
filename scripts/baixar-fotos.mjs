/**
 * Baixa as imagens do perfil publico para `legacy/` (gitignored).
 *
 * As URLs em fotos.json sao assinadas pelo CDN da Meta e expiram em cerca de
 * um dia. Nada daqui entra no build: o que o site publica sao os .webp que o
 * otimizar-fotos.mjs gera em public/fotos/.
 *
 * Uso: node scripts/baixar-fotos.mjs [--force]
 */
import { mkdir, writeFile, access } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const destino = join(raiz, "legacy");
const forcar = process.argv.includes("--force");

const { itens } = JSON.parse(readFileSync(join(raiz, "scripts/fotos.json"), "utf8"));

await mkdir(destino, { recursive: true });

let baixadas = 0;
let puladas = 0;
let falhas = 0;

for (const { arquivo, url } of itens) {
  const saida = join(destino, `${arquivo}.jpg`);

  if (!forcar) {
    try {
      await access(saida);
      puladas += 1;
      continue;
    } catch {
      // Ainda nao existe, segue o download.
    }
  }

  let resposta;
  try {
    resposta = await fetch(url, {
      headers: {
        // Sem User-Agent de navegador o CDN devolve 403.
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
        Referer: "https://www.instagram.com/",
      },
    });
  } catch (erro) {
    console.error(`  x ${arquivo}: falha de rede - ${erro.message}`);
    falhas += 1;
    continue;
  }

  if (!resposta.ok) {
    console.error(
      `  x ${arquivo}: HTTP ${resposta.status} - a URL assinada provavelmente expirou. ` +
        `Recapture as URLs do perfil e atualize scripts/fotos.json.`,
    );
    falhas += 1;
    continue;
  }

  await writeFile(saida, Buffer.from(await resposta.arrayBuffer()));
  console.log(`  + ${arquivo}.jpg`);
  baixadas += 1;
}

console.log(`\n${baixadas} baixada(s), ${puladas} ja existiam, ${falhas} falharam.`);
if (falhas > 0) process.exitCode = 1;
