import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { DriversSection } from "@/components/drivers-section"
import { DataPrivacySection } from "@/components/data-privacy-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <DriversSection />
        <DataPrivacySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
