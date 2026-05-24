import Image from "next/image"
import { Star, ArrowDown } from "lucide-react"
import { asset } from "@/lib/site"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 lg:flex-row lg:gap-16 lg:px-8 lg:py-28">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Disponível em Goioerê, PR
          </span>

          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            A mobilidade que{" "}
            <span className="text-accent">Goioerê</span> merece.
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Viagens seguras, motoristas locais e o preço mais justo da cidade. Baixe agora o Goio Mob.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://play.google.com/store/apps/details?id=br.com.goiomob.passenger.drivermachine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              <ArrowDown className="h-4 w-4" />
              Baixar App Passageiro
            </a>
            <a
              href="#motoristas"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Quero ser Motorista
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="font-semibold text-foreground">5.0</span>
              <Star className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
            </span>
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            <span>
              Mais de <span className="font-semibold text-foreground">1.000</span> downloads
            </span>
          </div>
        </div>

        {/* Phone mockup — LCP element */}
        <div className="relative flex w-full flex-1 items-center justify-center">
          <div className="relative w-full max-w-[16rem] sm:max-w-[18rem] lg:max-w-[20rem] [contain:layout]">
            <Image
              src={asset("/print_phone.png")}
              alt="Mapa e confirmação de viagem no app Goio Mob"
              width={320}
              height={640}
              className="h-auto w-full object-contain"
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
              priority
              fetchPriority="high"
            />
          </div>
          <div className="absolute -z-10 h-72 w-72 rounded-full border border-accent/20 lg:h-96 lg:w-96" aria-hidden="true" />
          <div
            className="absolute -z-10 h-96 w-96 rounded-full border border-accent/10 lg:h-[28rem] lg:w-[28rem]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
