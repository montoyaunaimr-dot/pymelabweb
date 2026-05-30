'use client'

import { useRef } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import {
  ArrowRight, MessageCircle, Mail, Target, Link2,
  BarChart3, Globe, Check, ChevronRight, Zap,
  Search, TrendingUp, Clock, CheckCircle2, Infinity, Bot,
} from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'
import { useLang } from '@/context/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

import AutomationFlow from '@/components/AutomationFlow'

/* ─── Tag ───────────────────────────────────────────────────────── */
function Tag({ dark = false, children }: { dark?: boolean; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-light ${dark ? 'text-[#B8893E]' : 'text-[#C8A96E]'}`}>
      <span className={`w-6 h-px ${dark ? 'bg-[#B8893E]' : 'bg-[#C8A96E]'}`} />
      {children}
    </span>
  )
}

/* ─── Data ──────────────────────────────────────────────────────── */
const statsData = [
  { num: 80,  suffix: '%', labelKey: 'stats.timesaved'   },
  { num: 50,  suffix: '+', labelKey: 'stats.automations' },
  { num: 100, suffix: '%', labelKey: 'stats.clients'     },
  { num: 24,  suffix: '/7',labelKey: 'stats.support'     },
]

const servicesData = [
  { icon: MessageCircle, titleKey: 's1.title', descKey: 's1.desc', num: '01' },
  { icon: Mail,          titleKey: 's2.title', descKey: 's2.desc', num: '02' },
  { icon: Target,        titleKey: 's3.title', descKey: 's3.desc', num: '03' },
  { icon: Link2,         titleKey: 's4.title', descKey: 's4.desc', num: '04' },
  { icon: BarChart3,     titleKey: 's5.title', descKey: 's5.desc', num: '05' },
  { icon: Globe,         titleKey: 's6.title', descKey: 's6.desc', num: '06' },
]

const howItWorks = [
  {
    icon: Search,
    num: '01',
    titleKey:    'howit.s1.title',
    descKey:     'howit.s1.desc',
    badgeIcon:   Clock,
    badge:       '24 HORAS',
    badgeSub:    'Tiempo estimado',
    bullets:     ['Auditoría de procesos actuales', 'Detectamos cuellos de botella', 'Propuesta personalizada sin costo'],
  },
  {
    icon: Zap,
    num: '02',
    titleKey:    'howit.s2.title',
    descKey:     'howit.s2.desc',
    badgeIcon:   Clock,
    badge:       '48-72 HORAS',
    badgeSub:    'Tiempo estimado',
    bullets:     ['Construcción del flujo en n8n', 'Integración con tus herramientas actuales', 'Pruebas y puesta en marcha'],
  },
  {
    icon: TrendingUp,
    num: '03',
    titleKey:    'howit.s3.title',
    descKey:     'howit.s3.desc',
    badgeIcon:   Infinity,
    badge:       'PARA SIEMPRE',
    badgeSub:    'Soporte y mejora continua',
    bullets:     ['Tu negocio activo 24/7', 'Cero errores humanos', 'ROI positivo desde el primer mes'],
  },
]

const marqueeItems = [
  'WhatsApp Bot', 'Email Automation', 'Lead Capture', 'n8n', 'Integraciones CRM',
  'Google Sheets', 'Reservas Online', '24/7 Activo', 'Sin Código', 'PYMEs', 'Workflows',
]

const caseFlow = [
  {
    num: '01',
    title: 'Paciente escribe\npor WhatsApp',
    desc: 'Consulta, dudas\no solicitud de cita.',
    iconColor: '#25D366',
    iconBg: 'rgba(37,211,102,0.12)',
    iconType: 'whatsapp',
  },
  {
    num: '02',
    title: 'IA detecta intención\ny agenda',
    desc: 'Responde, hace preguntas\ny encuentra el mejor horario.',
    iconColor: '#C8A96E',
    iconBg: 'rgba(200,169,110,0.12)',
    iconType: 'bot',
  },
  {
    num: '03',
    title: 'Comprueba\ndisponibilidad',
    desc: 'Verifica horarios reales\nen el calendario.',
    iconColor: '#4FC3F7',
    iconBg: 'rgba(79,195,247,0.10)',
    iconType: 'calendar',
  },
  {
    num: '04',
    title: 'Reserva en\nGoogle Calendar',
    desc: 'La cita queda agendada\nautomáticamente.',
    iconColor: '#4285F4',
    iconBg: 'rgba(66,133,244,0.10)',
    iconType: 'calendar31',
  },
  {
    num: '05',
    title: 'Email + WhatsApp\nautomáticos',
    desc: 'Confirmación, recordatorio\ny seguimiento sin intervención.',
    iconColor: '#4ADE80',
    iconBg: 'rgba(74,222,128,0.10)',
    iconType: 'check',
  },
]

/* ═══════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const { t } = useLang()

  const containerRef    = useRef<HTMLDivElement>(null)
  const heroRef         = useRef<HTMLElement>(null)
  const heroContentRef  = useRef<HTMLDivElement>(null)
  const servicesGridRef = useRef<HTMLDivElement>(null)
  const howItRef        = useRef<HTMLDivElement>(null)
  const caseRef         = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const isMobile = window.innerWidth < 768

    /* ── Hero timeline ── */
    const tl = gsap.timeline({ delay: 0.05, defaults: { ease: 'power4.out' } })
    tl.from('.hw1',       { yPercent: 115, duration: 1, stagger: 0.06 }, 0.3)
    tl.from('.hw2',       { yPercent: 115, duration: 1 }, 0.48)
    if (!isMobile) {
      tl.from('.hero-tag',  { opacity: 0, y: 10, duration: 0.7, ease: 'power2.out' }, 0.15)
      tl.from('.hero-sub',  { opacity: 0, y: 14, duration: 0.7, ease: 'power2.out' }, 0.85)
      tl.from('.hero-ctas', { y: 20, opacity: 0, duration: 0.7, ease: 'power2.out' }, 1.0)
      tl.from('.hero-orb',  { opacity: 0, scale: 0.92, duration: 1.2, ease: 'power3.out' }, 0.4)
    }
    tl.from('.hero-scroll', { opacity: 0, duration: 0.8 }, 1.25)
    tl.add(() => {
      gsap.to('.hero-scroll-line', { y: 7, duration: 1.6, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    })

    /* hero parallax — solo desktop, sin fade a negro */
    if (!isMobile) {
      gsap.to(heroContentRef.current, {
        yPercent: 14, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 0.6 },
      })
    }

    /* ── Stats counter ── */
    gsap.utils.toArray<HTMLElement>('.stat-num').forEach((el) => {
      const target = parseFloat(el.dataset.target ?? '0')
      const proxy = { val: target }
      el.textContent = Math.round(target).toString()
      ScrollTrigger.create({
        trigger: el, start: 'top 95%', once: true,
        onEnter() {
          proxy.val = 0; el.textContent = '0'
          gsap.to(proxy, {
            val: target, duration: 2, ease: 'power2.out',
            onUpdate() { el.textContent = Math.round(proxy.val).toString() },
          })
        },
      })
    })

    /* ── Scroll animations — solo desktop para evitar elementos invisibles en mobile ── */
    if (!isMobile) {
      gsap.from('.service-card', {
        opacity: 0, y: 28, duration: 0.65, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: servicesGridRef.current, start: 'top 80%', once: true },
      })

      gsap.from('.howit-card', {
        opacity: 0, y: 32, duration: 0.7, stagger: 0.14, ease: 'power2.out',
        scrollTrigger: { trigger: howItRef.current, start: 'top 80%', once: true },
      })

      gsap.from('.case-step', {
        opacity: 0, scale: 0.88, duration: 0.5, stagger: 0.12, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: caseRef.current, start: 'top 80%', once: true },
      })
    }

  }, { scope: containerRef })

  /* ─────────────────────────────────────────────────────────────── */
  return (
    <div ref={containerRef}>

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]"
      >
        {/* Grid bg */}
        <div className="absolute inset-0 opacity-[0.022] pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(200,169,110,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,169,110,1) 1px,transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
        {/* Glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#C8A96E]/[0.045] blur-[160px] pointer-events-none" />

        <div ref={heroContentRef} className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — text */}
            <div>
              <div className="mb-8">
                <span className="hero-tag inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A96E] font-light">
                  <span className="w-6 h-px bg-[#C8A96E]" />
                  {t('hero.tag')}
                </span>
              </div>

              {/* Line 1 — single overflow container so no word clipping */}
              <div className="overflow-hidden pb-2 mb-1">
                <h1 className="hw1 font-display text-[clamp(2.8rem,6vw,6.5rem)] font-light italic text-[#F0EDE8] leading-[1.05]">
                  {t('hero.h1a')}
                </h1>
              </div>
              {/* Line 2 */}
              <div className="overflow-hidden pb-2 mb-10">
                <h1 className="hw2 font-display text-[clamp(2.8rem,6vw,6.5rem)] font-bold not-italic leading-[0.95] gold-gradient">
                  {t('hero.h1b')}
                </h1>
              </div>

              <p className="hero-sub max-w-lg text-[#666] text-base sm:text-lg leading-relaxed mb-12 font-light">
                {t('hero.sub')}
              </p>

              <div className="hero-ctas flex flex-col sm:flex-row items-start gap-4">
                <Link href="/servicios" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold tracking-wide hover:bg-[#E2C99A] transition-colors duration-300 group">
                  {t('hero.cta1')}
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <Link href="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#2A2A2A] text-[#888] text-sm font-light tracking-wide hover:border-[#C8A96E]/60 hover:text-[#F0EDE8] transition-all duration-300">
                  {t('hero.cta2')}
                  <ChevronRight size={15} />
                </Link>
              </div>

              {/* Trust bar */}
              <div className="mt-12 flex items-center gap-6 flex-wrap">
                {['WhatsApp API', 'n8n', 'OpenAI', 'Google Sheets'].map(tool => (
                  <span key={tool} className="text-[10px] tracking-[0.2em] uppercase text-[#333] border border-[#1E1E1E] px-3 py-1.5">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — Automation Flow Diagram */}
            <div className="hero-orb relative flex items-center justify-center py-8 lg:py-0">
              <AutomationFlow />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.35em] uppercase text-[#2A2A2A]">scroll</span>
          <div className="hero-scroll-line w-px h-8 bg-gradient-to-b from-[#C8A96E]/60 to-transparent" />
        </div>
      </section>

      {/* ══ MARQUEE ═══════════════════════════════════════════════ */}
      <div className="border-y border-[#1A1A1A] bg-[#080808] py-3.5 overflow-hidden">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-5 px-5 text-[10px] tracking-[0.25em] uppercase text-[#2E2E2E] whitespace-nowrap">
              {item}
              <span className="w-1 h-1 rounded-full bg-[#C8A96E]/40 shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ══ STATS ════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map(({ num, suffix, labelKey }) => (
            <div key={labelKey} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-light italic text-[#F0EDE8] mb-2 leading-none">
                <span className="stat-num" data-target={num}>0</span>
                <span className="text-[#C8A96E]">{suffix}</span>
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#444]">{t(labelKey)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ HOW IT WORKS ═════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.018] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(200,169,110,1) 1px, transparent 1px)`,
          backgroundSize: '44px 44px',
        }} />

        <div className="max-w-5xl mx-auto relative">
          <AnimateIn className="mb-20 text-center">
            <Tag>{t('howit.tag')}</Tag>
            <h2 className="font-display text-4xl md:text-6xl font-light italic text-[#F0EDE8] mt-4 mb-4 leading-tight">
              {t('howit.h2')}
            </h2>
            <p className="text-[#444] text-sm">{t('howit.sub')}</p>
          </AnimateIn>

          {/* Steps + connectors */}
          <div ref={howItRef} className="grid grid-cols-1 md:grid-cols-[1fr_56px_1fr_56px_1fr] items-start gap-4 md:gap-0">
            {howItWorks.map(({ icon: Icon, num, titleKey, descKey, badgeIcon: BadgeIcon, badge, badgeSub, bullets }, i) => (
              <>
                {/* ── Card ── */}
                <div
                  key={num}
                  className="howit-card group relative rounded-2xl bg-[#0E0E0E] border border-[#1E1E1E] p-7 overflow-hidden hover:border-[#C8A96E]/30 transition-all duration-500"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.025)' }}
                >
                  {/* Hover top glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(200,169,110,0.1) 0%, transparent 60%)' }} />

                  {/* ── Number circle badge ── */}
                  <div className="w-10 h-10 rounded-full border border-[#C8A96E]/50 group-hover:border-[#C8A96E] flex items-center justify-center mb-5 transition-colors duration-300"
                    style={{ boxShadow: '0 0 16px rgba(200,169,110,0.08)' }}>
                    <span className="font-display text-sm font-medium text-[#C8A96E] leading-none">{num}</span>
                  </div>

                  {/* ── Icon box ── */}
                  <div className="w-14 h-14 rounded-xl bg-[#161616] border border-[#252525] group-hover:border-[#C8A96E]/30 flex items-center justify-center mb-6 transition-colors duration-400"
                    style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}>
                    <Icon size={22} className="text-[#C8A96E]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[#F0EDE8] text-lg font-semibold mb-2 leading-snug">
                    {t(titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-[#484848] leading-relaxed mb-6">
                    {t(descKey)}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-7">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-[12px] text-[#444] group-hover:text-[#555] transition-colors duration-300">
                        <CheckCircle2 size={13} className="text-[#C8A96E]/70 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* ── Bottom badge ── */}
                  <div className="pt-5 border-t border-[#191919]">
                    <div className="flex items-center gap-2">
                      <BadgeIcon size={13} className="text-[#C8A96E]/70 shrink-0" />
                      <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#C8A96E]/80">
                        {badge}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#333] mt-1 tracking-wide">{badgeSub}</p>
                  </div>

                  {/* Bottom animated line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] rounded-b-2xl bg-gradient-to-r from-transparent via-[#C8A96E]/60 to-transparent origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>

                {/* ── Arrow connector (desktop) ── */}
                {i < 2 && (
                  <div key={`conn-${i}`} className="hidden md:flex items-center justify-center" style={{ paddingTop: '72px' }}>
                    <div className="w-10 h-10 rounded-full border border-[#2A2A2A] bg-[#0E0E0E] flex items-center justify-center"
                      style={{ boxShadow: '0 0 12px rgba(0,0,0,0.5)' }}>
                      <ArrowRight size={14} className="text-[#C8A96E]/50" />
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ═════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="mb-14">
            <Tag>{t('services.tag')}</Tag>
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-[#F0EDE8] mt-4 mb-3 leading-tight">
              {t('services.h2')}
            </h2>
            <p className="text-[#444] max-w-md text-sm">{t('services.sub')}</p>
          </AnimateIn>

          <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#181818]">
            {servicesData.map(({ icon: Icon, titleKey, descKey, num }) => (
              <div
                key={titleKey}
                className="service-card relative block bg-[#0D0D0D] p-8 group hover:bg-[#111] transition-colors duration-300 cursor-default"
              >
                <span className="absolute top-6 right-6 font-display text-5xl font-light italic text-[#131313] group-hover:text-[#C8A96E]/6 transition-colors duration-500 select-none">
                  {num}
                </span>
                <div className="w-9 h-9 border border-[#1E1E1E] flex items-center justify-center mb-6 group-hover:border-[#C8A96E]/50 transition-colors duration-300">
                  <Icon size={16} className="text-[#C8A96E]" />
                </div>
                <h3 className="text-base font-medium text-[#E0DDD8] mb-2.5">{t(titleKey)}</h3>
                <p className="text-sm text-[#484848] leading-relaxed">{t(descKey)}</p>
                <div className="mt-5 w-full h-px bg-gradient-to-r from-[#C8A96E]/0 via-[#C8A96E]/30 to-[#C8A96E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CASE STUDY ═══════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(200,169,110,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-[#C8A96E]/[0.03] blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">

          {/* ── Header ── */}
          <AnimateIn className="text-center mb-16">
            {/* Tag with dashes on both sides */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#C8A96E]/40" />
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#C8A96E] font-light">{t('case.tag')}</span>
              <span className="w-8 h-px bg-[#C8A96E]/40" />
            </div>
            {/* Title — "citas a mano" highlighted in gold */}
            <h2 className="font-display text-3xl md:text-5xl font-light italic text-[#F0EDE8] mb-5 leading-tight max-w-3xl mx-auto">
              Una clínica dental que<br />
              dejó de gestionar{' '}
              <span className="text-[#C8A96E]">citas a mano</span>
            </h2>
            <p className="text-[#555] text-sm max-w-xl mx-auto leading-relaxed">{t('case.sub')}</p>
          </AnimateIn>

          {/* ── Flow — Mobile: tarjetas verticales / Desktop: fila horizontal ── */}
          <div ref={caseRef} className="mb-14">

            {/* ── MOBILE layout: lista de tarjetas horizontales ── */}
            <div className="flex flex-col gap-3 md:hidden">
              {caseFlow.map(({ num, title, desc, iconColor, iconBg, iconType }, i) => (
                <div key={i} className="case-step">
                  {/* Card */}
                  <div
                    className="flex items-center gap-4 px-4 py-4 rounded-2xl border"
                    style={{ background: iconBg, borderColor: `${iconColor}20` }}
                  >
                    {/* Icon box */}
                    <div
                      className="w-14 h-14 rounded-xl border flex items-center justify-center shrink-0"
                      style={{ background: `${iconColor}15`, borderColor: `${iconColor}30` }}
                    >
                      {iconType === 'whatsapp' && (
                        <svg viewBox="0 0 24 24" width="26" height="26" fill={iconColor}>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      )}
                      {iconType === 'bot' && <Bot size={24} style={{ color: iconColor }} />}
                      {iconType === 'calendar' && (
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
                          <rect x="3" y="4" width="18" height="18" rx="3" fill={iconColor} fillOpacity="0.25" stroke={iconColor} strokeWidth="1.5"/>
                          <path d="M3 9h18" stroke={iconColor} strokeWidth="1.5"/>
                          <path d="M8 2v4M16 2v4" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
                          <rect x="7" y="13" width="3" height="3" rx="0.5" fill={iconColor}/>
                          <rect x="10.5" y="13" width="3" height="3" rx="0.5" fill={iconColor} fillOpacity="0.6"/>
                          <rect x="14" y="13" width="3" height="3" rx="0.5" fill={iconColor} fillOpacity="0.3"/>
                        </svg>
                      )}
                      {iconType === 'calendar31' && (
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
                          <rect x="3" y="4" width="18" height="18" rx="3" fill={iconColor} fillOpacity="0.15" stroke={iconColor} strokeWidth="1.5"/>
                          <rect x="3" y="4" width="18" height="6" rx="3" fill={iconColor} fillOpacity="0.5"/>
                          <rect x="9" y="13" width="6" height="5" rx="1" fill={iconColor} fillOpacity="0.8"/>
                        </svg>
                      )}
                      {iconType === 'check' && <CheckCircle2 size={26} style={{ color: iconColor }} />}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-semibold tracking-[0.15em]" style={{ color: iconColor }}>{num}</span>
                      </div>
                      <p className="text-[13px] font-semibold text-[#D0CCC6] leading-snug mb-0.5">
                        {title.replace(/\n/g, ' ')}
                      </p>
                      <p className="text-[11px] text-[#3E3E3E] leading-relaxed">
                        {desc.replace(/\n/g, ' ')}
                      </p>
                    </div>
                  </div>

                  {/* Down arrow */}
                  {i < caseFlow.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className="w-6 h-6 rounded-full border border-[#2A2A2A] bg-[#111] flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M5 1v8M1 6l4 3 4-3" stroke="#C8A96E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ── DESKTOP layout: fila horizontal ── */}
            {/* Usamos items-start + marginTop fijo en flechas para que estén siempre a la misma altura */}
            <div className="hidden md:flex items-start justify-center gap-0">
              {caseFlow.map(({ num, title, desc, iconColor, iconBg, iconType }, i) => (
                <div key={i} className="flex items-start shrink-0">
                  {/* Step */}
                  <div className="case-step flex flex-col items-center text-center px-2" style={{ width: 136 }}>
                    {/* Number badge: h-8 (32px) + mb-3 (12px) = 44px antes del icono */}
                    <div className="w-8 h-8 rounded-full border flex items-center justify-center mb-3 shrink-0" style={{ borderColor: `${iconColor}55` }}>
                      <span className="font-display text-[11px] font-medium" style={{ color: iconColor }}>{num}</span>
                    </div>
                    {/* Icon box: 72px, centrado en 44 + 36 = 80px desde arriba */}
                    <div className="w-[72px] h-[72px] rounded-2xl border flex items-center justify-center mb-4 shrink-0" style={{ background: iconBg, borderColor: `${iconColor}25` }}>
                      {iconType === 'whatsapp' && (
                        <svg viewBox="0 0 24 24" className="w-8 h-8" fill={iconColor}>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      )}
                      {iconType === 'bot' && <Bot size={30} style={{ color: iconColor }} />}
                      {iconType === 'calendar' && (
                        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                          <rect x="3" y="4" width="18" height="18" rx="3" fill={iconColor} fillOpacity="0.2" stroke={iconColor} strokeWidth="1.5"/>
                          <path d="M3 9h18" stroke={iconColor} strokeWidth="1.5"/>
                          <path d="M8 2v4M16 2v4" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
                          <rect x="7" y="13" width="3" height="3" rx="0.5" fill={iconColor}/>
                          <rect x="10.5" y="13" width="3" height="3" rx="0.5" fill={iconColor} fillOpacity="0.5"/>
                          <rect x="14" y="13" width="3" height="3" rx="0.5" fill={iconColor} fillOpacity="0.3"/>
                        </svg>
                      )}
                      {iconType === 'calendar31' && (
                        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                          <rect x="3" y="4" width="18" height="18" rx="3" fill={iconColor} fillOpacity="0.15" stroke={iconColor} strokeWidth="1.5"/>
                          <rect x="3" y="4" width="18" height="6" rx="3" fill={iconColor} fillOpacity="0.5"/>
                          <rect x="9" y="13" width="6" height="5" rx="1" fill={iconColor} fillOpacity="0.8"/>
                        </svg>
                      )}
                      {iconType === 'check' && (
                        <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: `${iconColor}22` }}>
                          <CheckCircle2 size={26} style={{ color: iconColor }} />
                        </div>
                      )}
                    </div>
                    <p className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#D0CCC6] mb-1.5 leading-snug whitespace-pre-line">{title}</p>
                    <p className="text-[11px] text-[#3E3E3E] leading-relaxed whitespace-pre-line">{desc}</p>
                  </div>

                  {/* Flecha: marginTop = 32(badge) + 12(mb-3) + 36(mitad icono) - 16(mitad flecha) = 64px */}
                  {i < caseFlow.length - 1 && (
                    <div className="flex justify-center mx-1 shrink-0" style={{ marginTop: '64px' }}>
                      <div className="w-8 h-8 rounded-full border border-[#2A2A2A] bg-[#111] flex items-center justify-center">
                        <ArrowRight size={13} className="text-[#C8A96E]/50" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* ── Result box ── */}
          <AnimateIn className="text-center">
            <div className="inline-block border border-[#C8A96E]/20 bg-[#C8A96E]/[0.04] px-8 py-5 mb-8 max-w-2xl rounded-xl">
              <p className="text-sm text-[#C8A96E] font-light leading-relaxed">{t('case.result')}</p>
            </div>
            <div>
              <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 group">
                {t('case.cta')}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ══ PRICING ══════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <Tag>{t('pricing.tag')}</Tag>
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-[#F0EDE8] mt-4 mb-3 leading-tight">
              {t('pricing.h2')}
            </h2>
            <p className="text-[#444] text-sm">{t('pricing.sub')}</p>
          </AnimateIn>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

            {/* Esencial */}
            <AnimateIn delay={0.1}>
              <div className="bg-[#0D0D0D] border border-[#1E1E1E] p-8 h-full hover:border-[#2A2A2A] transition-colors duration-300">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#444] mb-3">{t('plan.basic.name')}</div>

                {/* Price with setup + monthly */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-display text-5xl font-light italic text-[#F0EDE8] leading-none">
                      {t('plan.basic.price')}€
                    </span>
                    <span className="text-[11px] text-[#333] uppercase tracking-wider">{t('pricing.once')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#C8A96E] text-lg font-light">+</span>
                    <span className="font-display text-2xl font-light text-[#888]">{t('plan.basic.monthly')}€</span>
                    <span className="text-[11px] text-[#333] uppercase tracking-wider">{t('pricing.monthly')}</span>
                  </div>
                </div>

                <p className="text-sm text-[#484848] mb-6 leading-relaxed">{t('plan.basic.desc')}</p>

                <ul className="space-y-2.5 mb-8">
                  {['plan.basic.f1','plan.basic.f2','plan.basic.f3','plan.basic.f4','plan.basic.f5','plan.basic.f6','plan.basic.f7','plan.basic.f8'].map(k => (
                    <li key={k} className="flex items-start gap-2.5 text-sm text-[#555]">
                      <Check size={12} className="text-[#C8A96E] shrink-0 mt-0.5" />{t(k)}
                    </li>
                  ))}
                </ul>
                <Link href="/contacto" className="block w-full text-center py-3.5 border border-[#2A2A2A] text-sm text-[#555] hover:border-[#C8A96E]/50 hover:text-[#C8A96E] transition-all duration-300">
                  {t('pricing.get')}
                </Link>
              </div>
            </AnimateIn>

            {/* Premium */}
            <AnimateIn delay={0.18}>
              <div className="relative bg-[#0D0D0D] border border-[#C8A96E]/35 p-8 h-full" style={{ boxShadow: '0 0 50px rgba(200,169,110,0.07)' }}>
                <div className="absolute top-4 right-4 text-[9px] tracking-[0.15em] uppercase bg-[#C8A96E] text-[#0A0A0A] px-2.5 py-1 font-semibold">
                  {t('pricing.popular')}
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#C8A96E] mb-3">{t('plan.pro.name')}</div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-display text-5xl font-light italic text-[#F0EDE8] leading-none">
                      {t('plan.pro.price')}€
                    </span>
                    <span className="text-[11px] text-[#444] uppercase tracking-wider">{t('pricing.once')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#C8A96E] text-lg font-light">+</span>
                    <span className="font-display text-2xl font-light text-[#C8A96E]">{t('plan.pro.monthly')}€</span>
                    <span className="text-[11px] text-[#444] uppercase tracking-wider">{t('pricing.monthly')}</span>
                  </div>
                </div>

                <p className="text-sm text-[#484848] mb-6 leading-relaxed">{t('plan.pro.desc')}</p>

                <ul className="space-y-2.5 mb-8">
                  {['plan.pro.f1','plan.pro.f2','plan.pro.f3','plan.pro.f4','plan.pro.f5','plan.pro.f6','plan.pro.f7','plan.pro.f8'].map(k => (
                    <li key={k} className="flex items-start gap-2.5 text-sm text-[#666]">
                      <Check size={12} className="text-[#C8A96E] shrink-0 mt-0.5" />{t(k)}
                    </li>
                  ))}
                </ul>
                <Link href="/contacto" className="block w-full text-center py-3.5 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300">
                  {t('pricing.get')}
                </Link>
              </div>
            </AnimateIn>
          </div>

          {/* Extras */}
          <AnimateIn delay={0.25}>
            <div className="border-t border-[#1A1A1A] pt-10">
              <div className="text-center mb-8">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#333]">{t('extras.tag')}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'extras.web', price: 'extras.web.price', desc: 'extras.web.desc' },
                  { name: 'extras.int', price: 'extras.int.price', desc: 'extras.int.desc' },
                  { name: 'extras.dash', price: 'extras.dash.price', desc: 'extras.dash.desc' },
                ].map(({ name, price, desc }) => (
                  <div key={name} className="bg-[#0A0A0A] border border-[#181818] p-5 hover:border-[#C8A96E]/20 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#999] font-medium">{t(name)}</span>
                      <span className="text-xs text-[#C8A96E]">{t(price)}</span>
                    </div>
                    <p className="text-[11px] text-[#444] leading-relaxed">{t(desc)}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ══ CTA FINAL ════════════════════════════════════════════ */}
      <section className="py-36 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-[#C8A96E]/[0.04] blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light italic text-[#F0EDE8] mb-5 leading-tight">
              {t('cta.h2')}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <p className="text-[#444] text-base mb-12 font-light">{t('cta.sub')}</p>
          </AnimateIn>
          <AnimateIn delay={0.22} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold tracking-wide hover:bg-[#E2C99A] transition-colors duration-300 group">
              {t('cta.btn1')}
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <a href="tel:+34618805348" className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#2A2A2A] text-[#888] text-sm font-light tracking-wide hover:border-[#C8A96E]/50 hover:text-[#F0EDE8] transition-all duration-300">
              {t('cta.btn2')}
            </a>
          </AnimateIn>
        </div>
      </section>

    </div>
  )
}
