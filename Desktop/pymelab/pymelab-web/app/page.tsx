'use client'

import { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import {
  ArrowRight, Globe, Search, ShoppingCart, Wrench,
  Palette, BarChart3, Check, ExternalLink, ChevronRight, Sparkles,
} from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'
import BrowserFrame from '@/components/BrowserFrame'
import SienteteBellaMockup from '@/components/mockups/SienteteBellaMockup'
import SoloTuyoMockup from '@/components/mockups/SoloTuyoMockup'
import { useLang } from '@/context/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

/* ─── Tag ─────────────────────────────────────────────────────── */
function Tag({ dark = false, children }: { dark?: boolean; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-light ${dark ? 'text-[#B8893E]' : 'text-[#C8A96E]'}`}>
      <span className={`w-6 h-px ${dark ? 'bg-[#B8893E]' : 'bg-[#C8A96E]'}`} />
      {children}
    </span>
  )
}

/* ─── Hero word-split: each word gets its own overflow-hidden mask */
function HeroWords({ text, cls }: { text: string; cls: string }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom py-1">
          <span className={`${cls} inline-block`}>
            {word}{i < words.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </>
  )
}

/* ─── Data ────────────────────────────────────────────────────── */
const statsData = [
  { num: 299, suffix: '€',  labelKey: 'stats.from'    },
  { num: 100, suffix: '%', labelKey: 'stats.clients' },
  { num: 7,  suffix: '',   labelKey: 'stats.days'    },
  { num: 24, suffix: '/7', labelKey: 'stats.support' },
]

const servicesData = [
  { icon: Globe,        titleKey: 's1.title', descKey: 's1.desc', num: '01', href: '/servicios#diseno-web'    },
  { icon: Search,       titleKey: 's2.title', descKey: 's2.desc', num: '02', href: '/servicios#seo'           },
  { icon: ShoppingCart, titleKey: 's3.title', descKey: 's3.desc', num: '03', href: '/servicios#ecommerce'     },
  { icon: Wrench,       titleKey: 's4.title', descKey: 's4.desc', num: '04', href: '/servicios#mantenimiento' },
  { icon: Palette,      titleKey: 's5.title', descKey: 's5.desc', num: '05', href: '/servicios#branding'      },
  { icon: BarChart3,    titleKey: 's6.title', descKey: 's6.desc', num: '06', href: '/servicios#consultoria'   },
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
    title:    'Solo Tuyo',
    category: 'E-Commerce · Regalos Personalizados',
    url:      'solotuyo.es',
    href:     'https://solotuyo.es',
    mockup:   'solotuyo' as const,
    year:     '2025',
    tags:     ['Shopify', 'Diseño', 'E-Commerce'],
  },
]

const marqueeItems = [
  'Diseño Web', 'SEO', 'E-Commerce', 'Branding', 'Web Rápida',
  'Precios Justos', 'Soporte 24/7', 'PYMEs', 'Webs Profesionales',
]

/* ═══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const { t } = useLang()

  const containerRef      = useRef<HTMLDivElement>(null)
  const heroRef           = useRef<HTMLElement>(null)
  const heroContentRef    = useRef<HTMLDivElement>(null)
  const servicesGridRef   = useRef<HTMLDivElement>(null)
  const portfolioRef      = useRef<HTMLElement>(null)

  useGSAP(() => {

    /* ── Hero timeline ──────────────────────────────────────── */
    const tl = gsap.timeline({ delay: 0.05, defaults: { ease: 'power4.out' } })

    tl.from('.hero-tag',  { opacity: 0, y: 10, duration: 0.7, ease: 'power2.out' }, 0.15)
    tl.from('.hw1',       { yPercent: 115, duration: 1,   stagger: 0.06 },           0.3)
    tl.from('.hw2',       { yPercent: 115, duration: 1 },                             0.48)
    tl.from('.hero-sub',  { opacity: 0, y: 14, duration: 0.7, ease: 'power2.out' }, 0.85)
    tl.from('.hero-ctas', { y: 20, duration: 0.7, ease: 'power2.out' }, 1.0)
    tl.from('.hero-scroll', { opacity: 0, duration: 0.8 }, 1.25)

    /* scroll indicator bounce */
    tl.add(() => {
      gsap.to('.hero-scroll-line', {
        y: 7, duration: 1.6, ease: 'sine.inOut', yoyo: true, repeat: -1,
      })
    })

    /* hero content parallax on scroll */
    gsap.to(heroContentRef.current, {
      yPercent: 20,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end:   'bottom top',
        scrub: 0.6,
      },
    })

    /* ── Stats counter ──────────────────────────────────────── */
    gsap.utils.toArray<HTMLElement>('.stat-num').forEach((el) => {
      const target = parseFloat(el.dataset.target ?? '0')
      const proxy  = { val: 0 }
      // Initialise to target so server-rendered text is never "0"
      el.textContent = Math.round(target).toString()
      proxy.val = target
      ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        once:  true,
        onEnter() {
          proxy.val = 0
          el.textContent = '0'
          gsap.to(proxy, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate() { el.textContent = Math.round(proxy.val).toString() },
          })
        },
      })
    })

    /* ── Services cards stagger ─────────────────────────────── */
    gsap.from('.service-card', {
      opacity: 0,
      y: 28,
      duration: 0.65,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: servicesGridRef.current,
        start: 'top 72%',
        once:  true,
      },
    })

    /* ── Portfolio cards ────────────────────────────────────── */
    gsap.from('.portfolio-card', {
      opacity: 0,
      y: 40,
      duration: 0.85,
      stagger: 0.18,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: portfolioRef.current,
        start: 'top 70%',
        once:  true,
      },
    })

  }, { scope: containerRef })

  /* ─────────────────────────────────────────────────────────── */
  return (
    <div ref={containerRef}>

      {/* ══ HERO — dark ════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
      >
        {/* Gold grid */}
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
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#C8A96E]/[0.04] blur-[130px] pointer-events-none" />

        <div ref={heroContentRef} className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          {/* Tag */}
          <div className="mb-8">
            <span className="hero-tag inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A96E] font-light">
              <span className="w-6 h-px bg-[#C8A96E]" />
              {t('hero.tag')}
            </span>
          </div>

          {/* H1 line 1 — word-by-word slide up */}
          <div className="mb-1">
            <h1 className="font-display text-[clamp(2.8rem,8vw,7.5rem)] font-light italic text-[#F0EDE8] leading-[0.9]">
              <HeroWords text={t('hero.h1a')} cls="hw1" />
            </h1>
          </div>

          {/* H1 line 2 — single block slide up, gold gradient */}
          <div className="overflow-hidden mb-10">
            <h1 className="hw2 font-display text-[clamp(2.8rem,8vw,7.5rem)] font-bold not-italic leading-[0.9] gold-gradient">
              {t('hero.h1b')}
            </h1>
          </div>

          {/* Subheading */}
          <p className="hero-sub max-w-xl mx-auto text-[#777] text-base sm:text-lg leading-relaxed mb-12 font-light">
            {t('hero.sub')}
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold tracking-wide hover:bg-[#E2C99A] transition-colors duration-300 group"
            >
              {t('hero.cta1')}
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#444] text-[#B0ADA8] text-sm font-light tracking-wide hover:border-[#C8A96E]/60 hover:text-[#F0EDE8] transition-all duration-300"
            >
              {t('hero.cta2')}
              <ChevronRight size={15} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.35em] uppercase text-[#333]">scroll</span>
          <div className="hero-scroll-line w-px h-8 bg-gradient-to-b from-[#C8A96E]/60 to-transparent" />
        </div>
      </section>

      {/* ══ MARQUEE — dark ═══════════════════════════════════════ */}
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

      {/* ══ STATS — dark, GSAP counter ════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map(({ num, suffix, labelKey }) => (
            <div key={labelKey} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-light italic text-[#F0EDE8] mb-2 leading-none">
                <span className="stat-num" data-target={num}>0</span>
                <span>{suffix}</span>
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#555]">
                {t(labelKey)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SERVICES — dark, GSAP stagger ════════════════════════ */}
      <section className="py-24 px-6 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="mb-14">
            <Tag>{t('services.tag')}</Tag>
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-[#F0EDE8] mt-4 mb-3 leading-tight">
              {t('services.h2')}
            </h2>
            <p className="text-[#555] max-w-md text-sm">{t('services.sub')}</p>
          </AnimateIn>

          <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E1E1E]">
            {servicesData.map(({ icon: Icon, titleKey, descKey, num, href }) => (
              <Link
                key={titleKey}
                href={href}
                className="service-card relative block bg-[#0D0D0D] p-8 group hover:bg-[#111] transition-colors duration-300 flex flex-col"
              >
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
            ))}
          </div>

          <AnimateIn delay={0.2} className="mt-8 text-center">
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

      {/* ══ PORTFOLIO — LIGHT, screenshot previews ══════════════ */}
      <section ref={portfolioRef} className="py-24 px-6 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <AnimateIn>
              <Tag dark>{t('portfolio.tag')}</Tag>
              <h2 className="font-display text-4xl md:text-5xl font-light italic text-[#0A0A0A] mt-4 mb-3 leading-tight">
                {t('portfolio.h2')}
              </h2>
              <p className="text-[#777] text-sm max-w-sm">{t('portfolio.sub')}</p>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-[#B8893E] transition-colors group shrink-0"
              >
                {t('portfolio.cta')}
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.map(({ title, category, url, href, mockup, year, tags }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card group block"
              >
                {/* Browser frame with real screenshot */}
                <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  <div className="absolute -inset-2 bg-[#B8893E]/0 group-hover:bg-[#B8893E]/6 blur-2xl transition-all duration-500 pointer-events-none" />
                  {/* Browser chrome */}
                  <div className="rounded-lg overflow-hidden shadow-xl border border-[#D8D5CF]">
                    {/* Top bar */}
                    <div className="bg-[#E8E5E0] px-3 py-2.5 flex items-center gap-2.5">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                      </div>
                      <div className="flex-1 bg-white/70 rounded px-3 py-1 flex items-center gap-1.5">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-[#999] shrink-0">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span className="text-[10px] text-[#888] truncate">{url}</span>
                      </div>
                      <ExternalLink size={11} className="text-[#999] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {/* Screenshot */}
                    <div className="relative overflow-hidden bg-white" style={{ aspectRatio: '16/9' }}>
                      <img
                        src={mockup === 'sientetebella' ? '/preview-sientetebella.jpg' : '/preview-solotuyo.jpg'}
                        alt={`Preview de ${title}`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 bg-white/90 px-4 py-2 text-xs font-medium text-[#0A0A0A]">
                          <ExternalLink size={12} />
                          Ver web
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info below */}
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[#0A0A0A] font-medium group-hover:text-[#B8893E] transition-colors duration-200">
                      {title}
                    </h3>
                    <p className="text-xs text-[#999] mt-0.5">{category}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[10px] text-[#AAA]">{year}</span>
                    <div className="flex gap-1.5 flex-wrap justify-end">
                      {tags.map(tag => (
                        <span key={tag} className="text-[9px] tracking-[0.12em] uppercase text-[#888] border border-[#D8D5CF] px-1.5 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING TEASER — dark ════════════════════════════════ */}
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
                  {([
                    { k: 'plan.basic.f1', type: 'check' },
                    { k: 'plan.basic.f2', type: 'check' },
                    { k: 'plan.basic.f3', type: 'check' },
                    { k: 'plan.basic.f4', type: 'addon' },
                    { k: 'plan.basic.f5', type: 'addon' },
                    { k: 'plan.basic.f8', type: 'check' },
                  ] as { k: string; type: 'check' | 'addon' }[]).map(({ k, type }) => (
                    <li key={k} className={`flex items-center gap-2.5 text-sm ${type === 'check' ? 'text-[#666]' : 'text-[#444]'}`}>
                      {type === 'check'
                        ? <Check size={12} className="text-[#C8A96E] shrink-0" />
                        : <Sparkles size={12} className="text-[#C8A96E]/50 shrink-0" />
                      }
                      {t(k)}
                      {type === 'addon' && (
                        <span className="ml-1 text-[9px] tracking-[0.1em] uppercase text-[#C8A96E]/60 border border-[#C8A96E]/25 px-1.5 py-0.5 leading-none">
                          extra
                        </span>
                      )}
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

      {/* ══ CTA FINAL — dark ═════════════════════════════════════ */}
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

    </div>
  )
}
