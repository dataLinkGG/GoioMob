import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { asset } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Goio Mob - A mobilidade que Goioerê merece',
  description:
    'Viagens seguras, motoristas locais e o preço mais justo da cidade. Baixe agora o Goio Mob, o app de mobilidade urbana de Goioerê, Paraná.',
  icons: {
    icon: asset('/goio_mob_logo.webp'),
    apple: asset('/goio_mob_logo.webp'),
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
