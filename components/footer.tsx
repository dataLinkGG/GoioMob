import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="bg-primary py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <span className="text-xs font-bold text-accent-foreground">G</span>
              </div>
              <span className="text-lg font-bold text-primary-foreground">
                Goio <span className="text-accent">Mob</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
              Este é o site oficial do aplicativo Goio Mob.
            </p>
          </div>

          {/* Legal info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Informações da Empresa
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/60">
              <li>
                <span className="font-medium text-primary-foreground/80">Empresa:</span>{" "}
                GOIO MOB LTDA
              </li>
              <li>
                <span className="font-medium text-primary-foreground/80">CNPJ:</span>{" "}
                33.900.839/0001-35
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-accent" />
                <a href="mailto:goioeremob@gmail.com" className="transition-colors hover:text-primary-foreground">
                  goioeremob@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-accent" />
                <a href="https://wa.me/5544999276259" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary-foreground">
                  (44) 99927-6259
                </a>
              </li>
            </ul>
          </div>

          {/* Download links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Baixe o App
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=br.com.goiomob.passenger.drivermachine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 1.469L16.8 7.802l-2.302 2.302L5.864 1.469z" />
                </svg>
                Google Play
              </a>
              <a
                href="https://apps.apple.com/br/app/goio-mob/id6742327293"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-6">
          <p className="text-center text-xs text-primary-foreground/40">
            {`© ${new Date().getFullYear()} GOIO MOB LTDA. Todos os direitos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
