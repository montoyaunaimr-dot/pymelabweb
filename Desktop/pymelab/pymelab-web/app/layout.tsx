import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

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
    default: 'PymeLab Agency — Automatización para PYMEs en España',
    template: '%s | PymeLab Agency',
  },
  description:
    'Agencia de automatización para PYMEs en España. Bots de WhatsApp, email automation, captura de leads e integraciones. Tu negocio en piloto automático desde 497€.',
  keywords: [
    'automatización pymes españa',
    'agencia automatización barcelona',
    'bot whatsapp empresa',
    'automatizar negocio',
    'n8n automatización',
    'email automation pymes',
    'captura leads automatizada',
    'integraciones crm shopify',
    'automatización procesos empresa',
    'bot reservas whatsapp',
    'automatización openai',
    'pymelab',
    'pymelabagency',
  ],
  authors: [{ name: 'PymeLab Agency', url: 'https://pymelabagency.com' }],
  creator: 'PymeLab Agency',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://pymelabagency.com',
    siteName: 'PymeLab Agency',
    title: 'PymeLab Agency — Automatización para PYMEs en España',
    description: 'Automatizamos los procesos de tu empresa con IA. Bots, emails, leads e integraciones. Implementado en 48 horas.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PymeLab Agency — Tu negocio en piloto automático',
    description: 'Automatizamos los procesos de tu empresa con IA. Implementado en 48 horas. Sin permanencia.',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://pymelabagency.com/#organization',
      name: 'PymeLab Agency',
      url: 'https://pymelabagency.com',
      logo: 'https://pymelabagency.com/og-image.jpg',
      email: 'contacto@pymelabagency.com',
      telephone: '+34618805348',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Barcelona',
        addressRegion: 'Cataluña',
        addressCountry: 'ES',
      },
      sameAs: ['https://www.instagram.com/pymelabagency'],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://pymelabagency.com/#localbusiness',
      name: 'PymeLab Agency',
      description: 'Agencia de automatización para PYMEs en España. Bots de WhatsApp con IA, email automation, captura de leads e integraciones. Tu negocio en piloto automático desde 497€.',
      url: 'https://pymelabagency.com',
      telephone: '+34618805348',
      email: 'contacto@pymelabagency.com',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Barcelona',
        addressRegion: 'Cataluña',
        addressCountry: 'ES',
      },
      areaServed: [
        { '@type': 'City', name: 'Barcelona' },
        { '@type': 'Country', name: 'España' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de automatización',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bot de WhatsApp con IA' }, price: '497', priceCurrency: 'EUR' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email Automation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Captura de Leads Automatizada' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Integraciones y APIs' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Profesional' }, price: '299', priceCurrency: 'EUR' },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://pymelabagency.com/#website',
      url: 'https://pymelabagency.com',
      name: 'PymeLab Agency',
      description: 'Agencia de automatización para PYMEs en España',
      publisher: { '@id': 'https://pymelabagency.com/#organization' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7VD52L30TB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7VD52L30TB');
          `}
        </Script>
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
