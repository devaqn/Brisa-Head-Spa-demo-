import { Marca } from "@/components/ui/marca";
import { IconeInstagram, IconeWhatsApp } from "@/components/ui/icones-marca";
import { navegacao, site } from "@/config/site";
import { linkWhatsApp, mensagens } from "@/lib/whatsapp";

export function Rodape() {
  const ano = new Date().getFullYear();
  const { contato, local, empresa } = site;

  return (
    <footer className="border-t border-linha bg-superficie">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Marca />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-suave">
              {site.bordao}. {site.descricaoCurta}, em {local.bairro}, {local.cidade}/{local.uf}.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="text-xs font-medium tracking-[0.18em] text-marca uppercase">
              Navegar
            </h2>
            <ul className="mt-2 flex flex-col">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-suave transition-colors hover:text-marca"
                  >
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-medium tracking-[0.18em] text-marca uppercase">
              Contato
            </h2>
            <ul className="mt-2 flex flex-col">
              <li>
                <a
                  href={linkWhatsApp(mensagens.padrao)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm text-suave transition-colors hover:text-marca"
                >
                  <IconeWhatsApp className="size-4 shrink-0" />
                  {contato.telefoneExibicao}
                </a>
              </li>
              <li>
                <a
                  href={contato.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm text-suave transition-colors hover:text-marca"
                >
                  <IconeInstagram className="size-4 shrink-0" />@{contato.instagram}
                </a>
              </li>
              {contato.email ? (
                <li>
                  <a
                    href={`mailto:${contato.email}`}
                    className="inline-flex min-h-11 items-center text-sm text-suave transition-colors hover:text-marca"
                  >
                    {contato.email}
                  </a>
                </li>
              ) : null}
              <li className="mt-3 text-sm text-suave">
                {local.referencia}
                <br />
                {local.bairro}, {local.cidade}/{local.uf}
              </li>
            </ul>
          </div>
        </div>

        <div className="fio-marca mt-12 h-px" aria-hidden />

        <div className="mt-6 flex flex-col gap-2 text-xs text-suave sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {ano} {empresa.razaoSocial ?? site.nome}
            {empresa.cnpj ? ` — CNPJ ${empresa.cnpj}` : ""}
          </p>
          <p>
            Site por{" "}
            <a
              href="https://portfoliodevaqn.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-1 text-suave underline-offset-4 transition-colors hover:text-marca hover:underline"
            >
              devaqn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
