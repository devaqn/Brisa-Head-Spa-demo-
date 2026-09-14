import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      "legacy/**",
      "next-env.d.ts",
      // Componentes vendorizados pelo CLI do Originkit: estilo de codigo deles,
      // nao nosso. Editar aqui atrapalha o `originkit add` da proxima vez.
      "src/components/originkit/**",
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    // Sem isto o eslint-plugin-react tenta autodetectar a versao do React
    // por um caminho que o ESLint 10 nao expoe mais, e o lint quebra.
    settings: { react: { version: "19.2" } },
  },
];

export default eslintConfig;
