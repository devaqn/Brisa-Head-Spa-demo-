/**
 * Converte o que esta em `legacy/` para `public/fotos/*.webp`.
 *
 * So ffmpeg, zero dependencia npm. Idempotente: pula o que ja existe e esta
 * mais novo que a origem. Use --force para refazer tudo.
 *
 * As fotos do Instagram chegam em 360x640 (capa de reel) ou 480x640. Nao ha
 * upscale aqui: subir de 360px nao inventa detalhe, so peso. O limite de
 * 1200px existe para quando a cliente mandar os originais em alta.
 *
 * Uso: node scripts/otimizar-fotos.mjs [--force]
 */
import { mkdir, readdir, stat } from "node:fs/promises";
import { spawn } from "node:child_process";
import { dirname, join, parse } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const origem = join(raiz, "legacy");
const destino = join(raiz, "public", "fotos");
const forcar = process.argv.includes("--force");

const LARGURA_MAX = 1200;
const QUALIDADE = 82;

function rodar(args) {
  return new Promise((resolve, reject) => {
    const p = spawn("ffmpeg", args, { stdio: ["ignore", "ignore", "pipe"] });
    let erro = "";
    p.stderr.on("data", (d) => (erro += d.toString()));
    p.on("error", reject);
    p.on("close", (codigo) =>
      codigo === 0 ? resolve() : reject(new Error(erro.trim().split("\n").slice(-3).join("\n"))),
    );
  });
}

async function maisNovoQue(alvo, referencia) {
  try {
    const [a, b] = await Promise.all([stat(alvo), stat(referencia)]);
    return a.mtimeMs >= b.mtimeMs;
  } catch {
    return false;
  }
}

await mkdir(destino, { recursive: true });

let arquivos;
try {
  arquivos = (await readdir(origem)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
} catch {
  console.error(
    "Pasta legacy/ nao encontrada. Rode `node scripts/baixar-fotos.mjs` antes, ou jogue os originais da cliente ali dentro.",
  );
  process.exit(1);
}

if (arquivos.length === 0) {
  console.error("Nenhuma imagem em legacy/.");
  process.exit(1);
}

let geradas = 0;
let puladas = 0;

for (const arquivo of arquivos) {
  const entrada = join(origem, arquivo);
  const saida = join(destino, `${parse(arquivo).name}.webp`);

  if (!forcar && (await maisNovoQue(saida, entrada))) {
    puladas += 1;
    continue;
  }

  // `min(iw,LARGURA_MAX)` garante que nunca haja upscale: imagem menor que o
  // limite sai no tamanho original. -2 mantem a altura par e proporcional.
  await rodar([
    "-y",
    "-loglevel",
    "error",
    "-i",
    entrada,
    "-vf",
    `scale='min(iw,${LARGURA_MAX})':-2:flags=lanczos`,
    "-quality",
    String(QUALIDADE),
    "-compression_level",
    "6",
    saida,
  ]);

  console.log(`  + ${parse(arquivo).name}.webp`);
  geradas += 1;
}

console.log(`\n${geradas} gerada(s), ${puladas} ja estavam atualizadas. Use --force para refazer.`);
