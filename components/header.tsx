"use client"

import { useState } from "react"
import { Menu, X, Download } from "lucide-react"
import { GoioMobLogo } from "@/components/goio-mob-logo"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Passageiros", href: "#beneficios" },
  { label: "Motoristas", href: "#motoristas" },
  { label: "Privacidade", href: "#privacidade" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <GoioMobLogo size="md" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Goio <span className="text-accent">Mob</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://play.google.com/store/apps/details?id=br.com.goiomob.passenger.drivermachine"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          <Download className="h-4 w-4" />
          Baixe o App
        </a>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden" aria-label="Menu mobile">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://play.google.com/store/apps/details?id=br.com.goiomob.passenger.drivermachine"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
              onClick={() => setMobileOpen(false)}
            >
              <Download className="h-4 w-4" />
              Baixe o App
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
