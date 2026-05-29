'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Zap } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

const footerLinks = {
  services: [
    { label: 'Bot de WhatsApp',       href: '/servicios#whatsapp' },
    { label: 'Email Automation',      href: '/servicios#email' },
    { label: 'Captura de Leads',      href: '/servicios#leads' },
    { label: 'Integraciones',         href: '/servicios#integraciones' },
    { label: 'Web Profesional',       href: '/servicios#web' },
  ],
  company: [
    { label: 'Nosotros',              href: '/sobre-nosotros' },
    { label: 'Casos de Uso',          href: '/portfolio' },
    { label: 'Precios',               href: '/pricing' },
    { label: 'Contacto',              href: '/contacto' },
  ],
}

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#060606] border-t border-[#141414]">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex flex-col leading-none mb-5 group">
            <span className="font-display text-3xl font-light italic text-[#F0EDE8] group-hover:text-[#C8A96E] transition-colors duration-300">
              Pyme<span className="not-italic font-bold">Lab</span>
            </span>
            <span className="text-[8px] tracking-[0.28em] text-[#C8A96E]/60 uppercase font-light mt-0.5">
              Automation Agency
            </span>
          </Link>
          <p className="text-sm text-[#444] leading-relaxed mb-6">
            {t('footer.tagline')}
          </p>
          {/* Status indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#333]">Sistemas activos 24/7</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#C8A96E] mb-5 font-light">
            Automatizaciones
          </h3>
          <ul className="space-y-2.5">
            {footerLinks.services.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-sm text-[#444] hover:text-[#C8A96E] transition-colors duration-200 flex items-center gap-1.5 group">
                  <span className="w-0 group-hover:w-3 h-px bg-[#C8A96E] transition-all duration-300" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#C8A96E] mb-5 font-light">
            Empresa
          </h3>
          <ul className="space-y-2.5">
            {footerLinks.company.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-sm text-[#444] hover:text-[#C8A96E] transition-colors duration-200 flex items-center gap-1.5 group">
                  <span className="w-0 group-hover:w-3 h-px bg-[#C8A96E] transition-all duration-300" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#C8A96E] mb-5 font-light">
            Contacto
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="mailto:contacto@pymelabagency.com" className="flex items-center gap-2.5 text-sm text-[#444] hover:text-[#C8A96E] transition-colors duration-200">
                <Mail size={13} className="text-[#C8A96E]/60 shrink-0" />
                contacto@pymelabagency.com
              </a>
            </li>
            <li>
              <a href="tel:+34618805348" className="flex items-center gap-2.5 text-sm text-[#444] hover:text-[#C8A96E] transition-colors duration-200">
                <Phone size={13} className="text-[#C8A96E]/60 shrink-0" />
                +34 618 805 348
              </a>
            </li>
            <li>
              <span className="flex items-center gap-2.5 text-sm text-[#444]">
                <MapPin size={13} className="text-[#C8A96E]/60 shrink-0" />
                Barcelona, España
              </span>
            </li>
          </ul>

          <Link href="/contacto" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8A96E] text-[#0A0A0A] text-xs font-semibold tracking-wide hover:bg-[#E2C99A] transition-colors duration-300 group">
            <Zap size={11} />
            Empezar ahora
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#111] px-6 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#2A2A2A]">
          © {year} PymeLab Agency. {t('footer.rights')}
        </p>
        <div className="flex gap-5">
          {[
            { key: 'footer.legal',   href: '/legal' },
            { key: 'footer.privacy', href: '/privacidad' },
            { key: 'footer.cookies', href: '/cookies' },
          ].map(({ key, href }) => (
            <Link key={key} href={href} className="text-xs text-[#2A2A2A] hover:text-[#555] transition-colors duration-200">
              {t(key)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
