'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

const navLinks = [
  { key: 'nav.services',  href: '/servicios' },
  { key: 'nav.portfolio', href: '/portfolio' },
  { key: 'nav.pricing',   href: '/pricing' },
  { key: 'nav.about',     href: '/sobre-nosotros' },
  { key: 'nav.contact',   href: '/contacto' },
]

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const pathname = usePathname()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-display text-2xl font-light italic text-[#F0EDE8] tracking-tight">
              Pyme<span className="not-italic font-bold">Lab</span>
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#C8A96E] uppercase font-sans font-light">
              Marketing Agency
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className={`text-sm font-light tracking-wide transition-colors duration-200 relative group ${
                  pathname === href ? 'text-[#C8A96E]' : 'text-[#B0ADA8] hover:text-[#F0EDE8]'
                }`}
              >
                {t(key)}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-[#C8A96E] transition-all duration-300 ${
                  pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Lang toggle */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="text-xs tracking-widest text-[#666] hover:text-[#C8A96E] transition-colors duration-200 uppercase font-light"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            {/* CTA */}
            <Link
              href="/presupuesto"
              className="relative overflow-hidden px-5 py-2.5 text-sm font-medium tracking-wide border border-[#C8A96E] text-[#C8A96E] group transition-colors duration-300"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0A0A0A]">
                {t('nav.cta')}
              </span>
              <span className="absolute inset-0 bg-[#C8A96E] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#F0EDE8] p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col pt-20 px-8"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map(({ key, href }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  <Link
                    href={href}
                    className={`text-3xl font-display font-light italic ${
                      pathname === href ? 'text-[#C8A96E]' : 'text-[#F0EDE8]'
                    }`}
                  >
                    {t(key)}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pb-12 flex flex-col gap-4">
              <Link
                href="/presupuesto"
                className="w-full text-center py-4 border border-[#C8A96E] text-[#C8A96E] text-sm tracking-wide"
              >
                {t('nav.cta')}
              </Link>
              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="text-[#666] text-xs tracking-widest uppercase"
              >
                Ver en {lang === 'es' ? 'English' : 'Español'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
