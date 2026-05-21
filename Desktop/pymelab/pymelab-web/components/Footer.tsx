'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

const footerLinks = {
  services: [
    { label: 'Diseño Web',        href: '/servicios' },
    { label: 'SEO',               href: '/servicios#seo' },
    { label: 'Tienda Online',     href: '/servicios#ecommerce' },
    { label: 'Mantenimiento',     href: '/servicios#mantenimiento' },
    { label: 'Branding',          href: '/servicios#branding' },
  ],
  company: [
    { label: 'Nosotros',          href: '/sobre-nosotros' },
    { label: 'Portfolio',         href: '/portfolio' },
    { label: 'Precios',           href: '/pricing' },
    { label: 'Blog',              href: '/blog' },
    { label: 'Contacto',          href: '/contacto' },
  ],
}

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#E5E2DC] bg-[#F5F3EF]">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex flex-col leading-none mb-4">
            <span className="font-display text-3xl font-light italic text-[#0A0A0A]">
              Pyme<span className="not-italic font-bold">Lab</span>
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#C8A96E] uppercase font-light mt-0.5">
              Marketing Agency
            </span>
          </Link>
          <p className="text-sm text-[#666] leading-relaxed">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-[#C8A96E] mb-5 font-light">
            Servicios
          </h3>
          <ul className="space-y-2.5">
            {footerLinks.services.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-sm text-[#888] hover:text-[#0A0A0A] transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-[#C8A96E] mb-5 font-light">
            Empresa
          </h3>
          <ul className="space-y-2.5">
            {footerLinks.company.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-sm text-[#888] hover:text-[#0A0A0A] transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-[#C8A96E] mb-5 font-light">
            Contacto
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="mailto:contacto@pymelabagency.com" className="flex items-center gap-2.5 text-sm text-[#888] hover:text-[#0A0A0A] transition-colors duration-200">
                <Mail size={14} className="text-[#C8A96E] shrink-0" />
                contacto@pymelabagency.com
              </a>
            </li>
            <li>
              <a href="tel:+34618805348" className="flex items-center gap-2.5 text-sm text-[#888] hover:text-[#0A0A0A] transition-colors duration-200">
                <Phone size={14} className="text-[#C8A96E] shrink-0" />
                +34 618 805 348
              </a>
            </li>
            <li>
              <span className="flex items-center gap-2.5 text-sm text-[#888]">
                <MapPin size={14} className="text-[#C8A96E] shrink-0" />
                España
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#E5E2DC] px-6 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#AAA]">
          © {year} PymeLab Agency. {t('footer.rights')}
        </p>
        <div className="flex gap-5">
          {[
            { key: 'footer.legal',   href: '/legal' },
            { key: 'footer.privacy', href: '/privacidad' },
            { key: 'footer.cookies', href: '/cookies' },
          ].map(({ key, href }) => (
            <Link key={key} href={href} className="text-xs text-[#AAA] hover:text-[#888] transition-colors duration-200">
              {t(key)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
