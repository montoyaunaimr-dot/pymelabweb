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
    default: 'PymeLab Agency — Diseño Web Profesional para PYMEs en Barcelona',
    template: '%s | PymeLab Agency',
  },
  description:
    'Agencia de diseño web para PYMEs en Barcelona y alrededores. Webs profesionales desde 299€, entregadas en 7 días. Sin letra pequeña, sin sorpresas.',
  keywords: [
    'diseño web barcelona',
    'agencia web barcelona',
    'diseño web pymes',
    'páginas web profesionales barcelona',
    'web para empresas barcelona',
    'diseño web baix llobregat',
    'crear página web negocio',
    'web profesional barata',
    'agencia web económica',
    'desarrollo web españa',
    'web para pequeñas empresas',
    'diseño web desde 299',
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
    title: 'PymeLab Agency — Diseño Web Profesional para PYMEs en Barcelona',
    description: 'Webs profesionales desde 299€, entregadas en 7 días. Agencia web para PYMEs en Barcelona.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PymeLab Agency — Webs para PYMEs desde 299€',
    description: 'Webs profesionales desde 299€, entregadas en 7 días. Agencia web para PYMEs en Barcelona.',
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
      description: 'Agencia de diseño web para PYMEs en Barcelona. Webs profesionales desde 299€ entregadas en 7 días.',
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
        { '@type': 'AdministrativeArea', name: 'Baix Llobregat' },
        { '@type': 'Country', name: 'España' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de diseño web',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño Web Profesional' }, price: '299', priceCurrency: 'EUR' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO y Posicionamiento' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tienda Online' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google My Business' }, price: '79', priceCurrency: 'EUR' },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://pymelabagency.com/#website',
      url: 'https://pymelabagency.com',
      name: 'PymeLab Agency',
      description: 'Agencia de diseño web para PYMEs en Barcelona',
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
