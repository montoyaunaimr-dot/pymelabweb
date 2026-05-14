'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight, Globe, Search, ShoppingCart, Wrench,
  Palette, BarChart3, Check, ExternalLink, ChevronRight,
} from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'
import BrowserFrame from '@/components/BrowserFrame'
import SienteteBellaMockup from '@/components/mockups/SienteteBellaMockup'
import ComingSoonMockup from '@/components/mockups/ComingSoonMockup'
import { useLang } from '@/context/LanguageContext'

/* ─── Tag ───────────────────────────────────────────────────────── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A96E] font-light">
      <span className="w-6 h-px bg-[#C8A96E]" />
      {children}
    </span>
  )
}

/* ─── Data ───────────────────────────────────────────────────────── */
const statsData = [
  { value: '50+',  labelKey: 'stats.webs'    },
  { value: '98%',  labelKey: 'stats.clients' },
  { value: '7',    labelKey: 'stats.days'    },
  { value: '24/7', labelKey: 'stats.support' },
]

const servicesData = [
  { icon: Globe,        titleKey: 's1.title', descKey: 's1.desc', num: '01', href: '/servicios#diseno-web'   },
  { icon: Search,       titleKey: 's2.title', descKey: 's2.desc', num: '02', href: '/servicios#seo'          },
  { icon: ShoppingCart, titleKey: 's3.title', descKey: 's3.desc', num: '03', href: '/servicios#ecommerce'    },
  { icon: Wrench,       titleKey: 's4.title', descKey: 's4.desc', num: '04', href: '/servicios#mantenimiento'},
  { icon: Palette,      titleKey: 's5.title', descKey: 's5.desc', num: '05', href: '/servicios#branding'     },
  { icon: BarChart3,    titleKey: 's6.title', descKey: 's6.desc', num: '06', href: '/servicios#consultoria'  },
]

const portfolioData = [
  {
    title:    'Siéntete Bella',
    category: 'E-Commerce · Moda & Belleza',
    url:      'sientetebella.es',
    href:     'https://sientetebella.es',
    mockup:   'sientetebella' as const,
    year:     '2025',
    tags:     ['Shopify', 'Diseño', 'E-Commerce'],
  },
  {
    title:    'Próximo proyecto',
    category: 'En desarrollo',
    url:      'pymelabagency.com/portfolio',
    href:     '/portfolio',
    mockup:   'coming-soon' as const,
    year:     '2025',
    tags:     ['Diseño Web', 'SEO', 'React'],
  },
]

const marqueeItems = [
  'Diseño Web', 'SEO', 'E-Commerce', 'Branding', 'Web Rápida',
  'Precios Justos', 'Soporte 24/7', 'PYMEs', 'Webs Profesionales',
]

/* ═══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const { t } = useLang()
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY       = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200,169,110,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,169,110,1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#C8A96E]/[0.04] blur-[130px] pointer-events-none" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        >
          {/* Tag — fade in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mb-8"
          >
            <Tag>{t('hero.tag')}</Tag>
          </motion.div>

          {/* H1 line 1 — mask reveal */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              className="font-display text-[clamp(2.8rem,8vw,7.5rem)] font-light italic text-[#F0EDE8] leading-[0.9]"
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            >
              {t('hero.h1a')}
            </motion.h1>
          </div>

          {/* H1 line 2 — mask reveal, slight extra delay */}
          <div className="overflow-hidden mb-10">
            <motion.h1
              className="font-display text-[clamp(2.8rem,8vw,7.5rem)] font-bold not-italic leading-[0.9] gold-gradient"
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.48 }}
            >
              {t('hero.h1b')}
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72, ease: 'easeOut' }}
            className="max-w-xl mx-auto text-[#777] text-base sm:text-lg leading-relaxed mb-12 font-light"
          >
            {t('hero.sub')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.88, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold tracking-wide hover:bg-[#E2C99A] transition-colors duration-300 group"
            >
              {t('hero.cta1')}
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#2A2A2A] text-[#B0ADA8] text-sm font-light tracking-wide hover:border-[#C8A96E]/60 hover:text-[#F0EDE8] transition-all duration-300"
            >
              {t('hero.cta2')}
              <ChevronRight size={15} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.35em] uppercase text-[#333]">scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-[#C8A96E]/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ══ MARQUEE ═══════════════════════════════════════════════ */}
      <div className="border-y border-[#1E1E1E] bg-[#0D0D0D] py-3.5 overflow-hidden">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-5 px-5 text-[10px] tracking-[0.25em] uppercase text-[#383838] whitespace-nowrap"
            >
              {item}
              <span className="w-1 h-1 rounded-full bg-[#C8A96E]/50 shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ══ STATS ═════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map(({ value, labelKey }, i) => (
            <AnimateIn key={labelKey} delay={i * 0.08} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-light italic text-[#F0EDE8] mb-2 leading-none">
                {value}
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#555]">
                {t(labelKey)}
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="mb-14">
            <Tag>{t('services.tag')}</Tag>
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-[#F0EDE8] mt-4 mb-3 leading-tight">
              {t('services.h2')}
            </h2>
            <p className="text-[#555] max-w-md text-sm">{t('services.sub')}</p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E1E1E]">
            {servicesData.map(({ icon: Icon, titleKey, descKey, num, href }, i) => (
              <AnimateIn key={titleKey} delay={i * 0.06}>
                <Link href={href} className="relative bg-[#0D0D0D] p-8 group hover:bg-[#111] transition-colors duration-300 h-full flex flex-col">
                  <span className="absolute top-6 right-6 font-display text-5xl font-light italic text-[#151515] group-hover:text-[#C8A96E]/8 transition-colors duration-500 select-none">
                    {num}
                  </span>
                  <div className="w-9 h-9 border border-[#222] flex items-center justify-center mb-6 group-hover:border-[#C8A96E]/60 transition-colors duration-300">
                    <Icon size={16} className="text-[#C8A96E]" />
                  </div>
                  <h3 className="text-base font-medium text-[#E0DDD8] mb-2.5">{t(titleKey)}</h3>
                  <p className="text-sm text-[#555] leading-relaxed">{t(descKey)}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-[11px] text-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Saber más <ArrowRight size={11} />
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.25} className="mt-8 text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1.5 text-sm text-[#555] hover:text-[#C8A96E] transition-colors duration-200 group"
            >
              Ver todos los servicios
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ══ PORTFOLIO ═════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <AnimateIn>
              <Tag>{t('portfolio.tag')}</Tag>
              <h2 className="font-display text-4xl md:text-5xl font-light italic text-[#F0EDE8] mt-4 mb-3 leading-tight">
                {t('portfolio.h2')}
              </h2>
              <p className="text-[#555] text-sm max-w-sm">{t('portfolio.sub')}</p>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-sm text-[#555] hover:text-[#C8A96E] transition-colors group shrink-0"
              >
                {t('portfolio.cta')}
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </AnimateIn>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.map(({ title, category, url, href, mockup, year, tags }, i) => (
              <AnimateIn key={title} delay={i * 0.12}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {/* Browser frame */}
                  <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
                    <div className="absolute -inset-2 bg-[#C8A96E]/0 group-hover:bg-[#C8A96E]/4 blur-2xl transition-all duration-500 pointer-events-none" />
                    <BrowserFrame url={url} title={title}>
                      {mockup === 'sientetebella' ? (
                        <SienteteBellaMockup />
                      ) : (
                        <ComingSoonMockup />
                      )}
                    </BrowserFrame>
                  </div>

                  {/* Footer */}
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[#E0DDD8] font-medium group-hover:text-[#C8A96E] transition-colors duration-200">
                        {title}
                      </h3>
                      <p className="text-xs text-[#444] mt-0.5">{category}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-[10px] text-[#333]">{year}</span>
                      <div className="flex gap-1.5 flex-wrap justify-end">
                        {tags.map(tag => (
                          <span key={tag} className="text-[9px] tracking-[0.12em] uppercase text-[#3A3A3A] border border-[#1E1E1E] px-1.5 py-0.5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {href.startsWith('http') && (
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#444] group-hover:text-[#C8A96E] transition-colors duration-200">
                      <ExternalLink size={10} />
                      {url}
                    </div>
                  )}
                </a>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING TEASER ════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <Tag>{t('pricing.tag')}</Tag>
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-[#F0EDE8] mt-4 mb-3 leading-tight">
              {t('pricing.h2')}
            </h2>
            <p className="text-[#555] text-sm">{t('pricing.sub')}</p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {/* Starter */}
            <AnimateIn delay={0.1}>
              <div className="bg-[#111] border border-[#1E1E1E] p-8 h-full hover:border-[#2A2A2A] transition-colors duration-300">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#444] mb-2">{t('plan.basic.name')}</div>
                <div className="font-display text-6xl font-light italic text-[#F0EDE8] mb-1 leading-none">
                  {t('plan.basic.price')}€
                </div>
                <div className="text-[10px] text-[#333] mb-5">{t('pricing.once')}</div>
                <p className="text-sm text-[#555] mb-6 leading-relaxed">{t('plan.basic.desc')}</p>
                <ul className="space-y-2 mb-8">
                  {['plan.basic.f1','plan.basic.f2','plan.basic.f3','plan.basic.f4','plan.basic.f5','plan.basic.f8'].map(k => (
                    <li key={k} className="flex items-center gap-2.5 text-sm text-[#666]">
                      <Check size={12} className="text-[#C8A96E] shrink-0" />{t(k)}
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" className="block w-full text-center py-3 border border-[#2A2A2A] text-sm text-[#666] hover:border-[#C8A96E]/50 hover:text-[#C8A96E] transition-all duration-300">
                  {t('pricing.get')}
                </Link>
              </div>
            </AnimateIn>

            {/* Pro */}
            <AnimateIn delay={0.18}>
              <div className="relative bg-[#111] border border-[#C8A96E]/40 p-8 h-full" style={{ boxShadow: '0 0 40px rgba(200,169,110,0.06)' }}>
                <div className="absolute top-4 right-4 text-[9px] tracking-[0.15em] uppercase bg-[#C8A96E] text-[#0A0A0A] px-2.5 py-1 font-medium">
                  {t('pricing.popular')}
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#C8A96E] mb-2">{t('plan.pro.name')}</div>
                <div className="font-display text-6xl font-light italic text-[#F0EDE8] mb-1 leading-none">
                  {t('plan.pro.price')}€
                </div>
                <div className="text-[10px] text-[#333] mb-5">{t('pricing.once')}</div>
                <p className="text-sm text-[#555] mb-6 leading-relaxed">{t('plan.pro.desc')}</p>
                <ul className="space-y-2 mb-8">
                  {['plan.pro.f1','plan.pro.f2','plan.pro.f3','plan.pro.f4','plan.pro.f5','plan.pro.f8'].map(k => (
                    <li key={k} className="flex items-center gap-2.5 text-sm text-[#666]">
                      <Check size={12} className="text-[#C8A96E] shrink-0" />{t(k)}
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" className="block w-full text-center py-3 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300">
                  {t('pricing.get')}
                </Link>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.25} className="text-center">
            <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm text-[#555] hover:text-[#C8A96E] transition-colors duration-200 group">
              {t('pricing.cta')}
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ══ CTA FINAL ═════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[#C8A96E]/[0.035] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light italic text-[#F0EDE8] mb-5 leading-tight">
              {t('cta.h2')}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <p className="text-[#555] text-base mb-10 font-light">{t('cta.sub')}</p>
          </AnimateIn>
          <AnimateIn delay={0.22} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/presupuesto"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold tracking-wide hover:bg-[#E2C99A] transition-colors duration-300 group"
            >
              {t('cta.btn1')}
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <a
              href="tel:+34618805348"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#2A2A2A] text-[#B0ADA8] text-sm font-light tracking-wide hover:border-[#C8A96E]/50 hover:text-[#F0EDE8] transition-all duration-300"
            >
              {t('cta.btn2')}
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
