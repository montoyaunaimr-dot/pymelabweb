import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pymelabagency.com'),
  title: {
    default: 'PymeLab Agency — Diseño Web Profesional para PYMEs',
    template: '%s | PymeLab Agency',
  },
  description:
    'Agencia de diseño web especializada en PYMEs. Webs profesionales, rápidas y asequibles. Entrega en días. Desde 299€.',
  keywords: [
    'diseño web pymes', 'agencia web', 'páginas web profesionales',
    'web para empresas', 'desarrollo web España', 'pymelab',
  ],
  authors: [{ name: 'PymeLab Agency', url: 'https://pymelabagency.com' }],
  creator: 'PymeLab Agency',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://pymelabagency.com',
    siteName: 'PymeLab Agency',
    title: 'PymeLab Agency — Diseño Web Profesional para PYMEs',
    description: 'Tu web profesional lista en días. Desde 299€.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PymeLab Agency',
    description: 'Tu web profesional lista en días. Desde 299€.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
