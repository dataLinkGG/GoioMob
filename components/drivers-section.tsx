import { Car, Smartphone, TrendingUp } from "lucide-react"

export function DriversSection() {
  return (
    <section id="motoristas" className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold text-accent">
              Para Motoristas
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Aumente sua renda dirigindo com o{" "}
              <span className="text-accent">Goio Mob</span>
            </h2>
            <p className="mt-5 max-w-lg text-pretty leading-relaxed text-primary-foreground/70">
              Taxas justas, controle total dos seus ganhos na tela do celular e
              liberdade para trabalhar no seu horário.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://wa.me/5544999276259"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Entre em contato pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Right features */}
          <div className="flex flex-1 flex-col gap-5">
            {[
              {
                icon: Car,
                title: "Taxas Justas",
                desc: "Você ganha mais por cada corrida. Sem surpresas nas taxas.",
              },
              {
                icon: Smartphone,
                title: "Controle Total",
                desc: "Acompanhe seus ganhos em tempo real direto no aplicativo.",
              },
              {
                icon: TrendingUp,
                title: "Sem Limite de Ganhos",
                desc: "Trabalhe no seu horário e quanto mais dirigir, mais você ganha.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/60">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
