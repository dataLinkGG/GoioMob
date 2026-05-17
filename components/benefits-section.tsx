import { MapPin, DollarSign, MessageCircle } from "lucide-react"

const benefits = [
  {
    icon: MapPin,
    title: "Valorização Local",
    description:
      "App feito para a nossa cidade. O dinheiro circula em Goioerê, fortalecendo a economia local.",
  },
  {
    icon: DollarSign,
    title: "Preço Justo e Dinâmico",
    description:
      "Corridas com valores justos para passageiros e ótima rentabilidade para motoristas.",
  },
  {
    icon: MessageCircle,
    title: "Suporte Humanizado",
    description:
      "Precisa de ajuda? Você fala com pessoas de verdade no nosso WhatsApp. Sem robôs.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            Por que escolher o <span className="text-accent">Goio Mob</span>?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Criado por quem conhece Goioerê, para quem vive Goioerê.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <benefit.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
