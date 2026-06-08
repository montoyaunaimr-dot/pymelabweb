'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowRight, Search, Zap, Video, Check,
  ShieldCheck, Clock, ChevronDown, MessageCircle,
  Mail, BarChart3, Calendar, Sparkles,
} from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'

/* ── Helpers ──────────────────────────────────────────────────── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A96E] font-light">
      <span className="w-6 h-px bg-[#C8A96E]" />
      {children}
    </span>
  )
}

/* ── Data ─────────────────────────────────────────────────────── */
const receives = [
  {
    icon: Search,
    num: '01',
    title: 'Análisis de tu negocio',
    desc: 'Revisamos tu sector, tu equipo y los procesos que más tiempo te roban. Identificamos exactamente qué automatizar y en qué orden hacerlo para que notes el impacto desde el primer día.',
    detail: 'Sin cuestionarios interminables. Con la información del formulario ya tenemos suficiente para empezar.',
  },
  {
    icon: Zap,
    num: '02',
    title: 'Prototipo funcional en n8n',
    desc: 'Construimos el flujo real para tu caso concreto. No una presentación genérica — tu automatización específica, con tus integraciones: WhatsApp, email, Google Sheets, CRM...',
    detail: 'El prototipo es tuyo. Te lo quedas independientemente de si contratas o no.',
    highlight: true,
  },
  {
    icon: Video,
    num: '03',
    title: 'Videollamada de 30 minutos',
    desc: 'Te lo enseñamos funcionando en directo. Puedes hacer todas las preguntas que quieras. Te explicamos qué costaría implementarlo del todo y cómo encaja con tus herramientas actuales.',
    detail: 'Sin presión de venta. Si no te convence, no pasa nada.',
  },
]

const steps = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'Rellenas el formulario',
    time: '5 minutos',
    desc: 'Cuéntanos tu sector, el tamaño de tu equipo y qué proceso quieres automatizar. Sin tecnicismos — en tu propio idioma.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Analizamos tu caso',
    time: 'Mismo día',
    desc: 'Revisamos tu formulario y preparamos el enfoque más adecuado para tu negocio y sector. Nada genérico.',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Construimos tu prototipo',
    time: '24 – 48 horas',
    desc: 'Montamos el flujo en n8n con tus integraciones reales. Un bot de WhatsApp que responde, un pipeline de leads que se activa, un informe que se genera solo...',
    accent: true,
  },
  {
    num: '04',
    icon: Video,
    title: 'Videollamada de presentación',
    time: 'Tú eliges cuándo',
    desc: 'Te lo enseñamos en directo. Si te convence, hablamos de implementación completa. Si no, te quedas con el prototipo igual.',
  },
]

const guarantees = [
  { icon: ShieldCheck, title: '100 % gratis',       desc: 'Sin tarjeta, sin datos de pago, sin letra pequeña.' },
  { icon: Check,       title: 'Sin compromiso',      desc: 'No hay contrato que firmar. Decides tú, cuando quieras.' },
  { icon: Sparkles,    title: 'Personalizado',        desc: 'Diseñado para tu negocio y sector específico, no una demo genérica.' },
  { icon: Clock,       title: 'Respuesta en 48h',    desc: 'Máximo 48 horas desde que rellenas el formulario.' },
]

const examples = [
  { icon: MessageCircle, color: '#25D366', label: 'Bot de WhatsApp',      desc: 'Gestiona reservas, responde preguntas y cualifica leads de forma automática.' },
  { icon: Mail,          color: '#4FC3F7', label: 'Pipeline de leads',    desc: 'Captura, clasifica y responde a cada lead en menos de 30 segundos.' },
  { icon: BarChart3,     color: '#C8A96E', label: 'Informes automáticos', desc: 'Dashboard que se actualiza solo y llega al email cada semana.' },
  { icon: Calendar,      color: '#A78BFA', label: 'Agenda inteligente',   desc: 'Reservas gestionadas por IA directamente desde WhatsApp o la web.' },
]

const faqs = [
  {
    q: '¿Es realmente gratis? ¿Hay algún truco?',
    a: 'Completamente gratis. No te pedimos tarjeta de crédito ni datos de pago en ningún momento. La demo es nuestra forma de demostrarte que sabemos lo que hacemos antes de pedirte nada. Si no quedas convencido, no perdemos el tiempo ninguno de los dos.',
  },
  {
    q: '¿Para qué tipo de negocios es esto?',
    a: 'Para cualquier PYME con procesos repetitivos: clínicas, dentistas, restaurantes, academias, e-commerce, agencias, inmobiliarias, asesorías... Si tu equipo hace algo manual más de tres veces a la semana, hay algo que automatizar.',
  },
  {
    q: '¿Necesito conocimientos técnicos?',
    a: 'Cero. Te lo explicamos en lenguaje normal, sin jerga técnica. La videollamada está diseñada para que cualquier persona del equipo entienda exactamente qué hace la automatización y cómo le beneficia.',
  },
  {
    q: '¿Qué pasa si el prototipo no se adapta a lo que necesito?',
    a: 'Durante la videollamada lo ajustamos en directo si hace falta. El objetivo es que salgas con algo que realmente encaje con tu negocio, no que te vendamos algo que no te sirve.',
  },
  {
    q: '¿Cuánto costaría después implementarlo del todo?',
    a: 'Depende de la complejidad. En la videollamada te damos un presupuesto concreto sin rodeos. Puedes ver los planes orientativos en nuestra página de precios, pero siempre adaptamos la propuesta a lo que has visto funcionar en tu demo.',
  },
]

/* ── FAQ Item ─────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#141414] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
        <span className="text-sm text-[#C0BDB8] font-light leading-relaxed group-hover:text-[#F0EDE8] transition-colors duration-200">
          {q}
        </span>
        <ChevronDown
          size={15}
          className={`text-[#C8A96E] shrink-0 mt-0.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-5' : 'max-h-0'}`}>
        <p className="text-sm text-[#555] leading-relaxed font-light">{a}</p>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════ */
export default function DemoPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="pt-36 pb-28 px-6 relative overflow-hidden">
        {/* Grid bg — desktop */}
        <div className="hidden md:block absolute inset-0 opacity-[0.022] pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(200,169,110,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,169,110,1) 1px,transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
        <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C8A96E]/[0.04] blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">

          {/* Tag */}
          <div className="mb-7 flex items-center gap-3">
            <Tag>Demo gratuita · Sin compromiso</Tag>
          </div>

          {/* Headline */}
          <div className="overflow-hidden mb-6">
            <h1 className="font-display text-5xl md:text-7xl font-light italic text-[#F0EDE8] leading-[0.95]">
              Tu automatización<br />
              <span className="text-[#C8A96E] font-bold not-italic">personalizada,</span><br />
              en 48 horas.
            </h1>
          </div>

          <p className="text-[#555] text-lg font-light max-w-xl leading-relaxed mb-10">
            No un vídeo genérico. Construimos un prototipo real de tu flujo,
            específico para tu negocio — y te lo enseñamos funcionando en directo.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14">
            <Link
              href="/demo"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] text-[13px] font-semibold tracking-[0.06em] uppercase overflow-hidden transition-all duration-300 hover:bg-[#D4B87E] hover:shadow-[0_0_32px_rgba(200,169,110,0.4)]"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
              Solicitar mi demo gratis
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <span className="text-xs text-[#333] font-light tracking-wide">Sin tarjeta · Sin contrato · Respuesta en 48h</span>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-3">
            {['100% gratis', 'Prototipo funcional', 'Sin compromiso', 'Videollamada incluida'].map(p => (
              <span
                key={p}
                className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-[#C8A96E]/80 border border-[#C8A96E]/20 bg-[#C8A96E]/[0.04] px-3 py-1.5"
              >
                <Check size={9} className="text-[#C8A96E]" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUÉ RECIBES ═══════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#080808] relative overflow-hidden">
        <div className="hidden md:block absolute inset-0 opacity-[0.015] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(200,169,110,1) 1px, transparent 1px)`,
          backgroundSize: '44px 44px',
        }} />
        <div className="max-w-5xl mx-auto relative">
          <AnimateIn className="mb-16 text-center">
            <Tag>Qué incluye</Tag>
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-[#F0EDE8] mt-4 mb-4 leading-tight">
              Tres cosas que recibes, gratis
            </h2>
            <p className="text-[#444] text-sm max-w-lg mx-auto">
              No te mandamos un PDF con ideas. Te construimos algo que funciona.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {receives.map(({ icon: Icon, num, title, desc, detail, highlight }, i) => (
              <AnimateIn key={num} delay={i * 0.1}>
                <div className={`relative h-full flex flex-col p-8 border transition-all duration-500 group ${
                  highlight
                    ? 'border-[#C8A96E]/40 bg-[#0D0D0D]'
                    : 'border-[#141414] bg-[#0D0D0D] hover:border-[#2A2A2A]'
                }`}
                  style={highlight ? { boxShadow: '0 0 48px rgba(200,169,110,0.07), inset 0 1px 0 rgba(200,169,110,0.06)' } : {}}
                >
                  {highlight && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96E]/60 to-transparent" />
                  )}

                  {/* Number */}
                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center mb-6 ${
                    highlight ? 'border-[#C8A96E]/60' : 'border-[#252525]'
                  }`}>
                    <span className={`font-display text-[11px] font-medium ${highlight ? 'text-[#C8A96E]' : 'text-[#444]'}`}>
                      {num}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 flex items-center justify-center mb-5 border ${
                    highlight ? 'border-[#C8A96E]/30 bg-[#C8A96E]/[0.07]' : 'border-[#1E1E1E] bg-[#111]'
                  }`}>
                    <Icon size={20} className={highlight ? 'text-[#C8A96E]' : 'text-[#C8A96E]'} />
                  </div>

                  <h3 className="text-base font-semibold text-[#F0EDE8] mb-3">{title}</h3>
                  <p className="text-sm text-[#484848] leading-relaxed mb-5 flex-1">{desc}</p>

                  <div className={`pt-4 border-t ${highlight ? 'border-[#C8A96E]/15' : 'border-[#141414]'}`}>
                    <p className={`text-[11px] leading-relaxed ${highlight ? 'text-[#C8A96E]/70' : 'text-[#333]'}`}>
                      {detail}
                    </p>
                  </div>

                  {highlight && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96E]/40 to-transparent" />
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EL PROCESO ════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <AnimateIn className="mb-16 text-center">
            <Tag>Cómo funciona</Tag>
            <h2 className="font-display text-4xl md:text-5xl font-light italic text-[#F0EDE8] mt-4 mb-4 leading-tight">
              Del formulario a tu demo<br />en 48 horas
            </h2>
            <p className="text-[#444] text-sm">Cuatro pasos. Sin reuniones previas. Sin esperas.</p>
          </AnimateIn>

          <div className="relative">
            {/* Vertical connector line (desktop) */}
            <div className="hidden md:block absolute left-[28px] top-10 bottom-10 w-px bg-gradient-to-b from-[#C8A96E]/40 via-[#C8A96E]/20 to-transparent" />

            <div className="space-y-3">
              {steps.map(({ num, icon: Icon, title, time, desc, accent }, i) => (
                <AnimateIn key={num} delay={i * 0.08}>
                  <div className={`flex gap-6 md:gap-8 p-6 md:p-8 border transition-all duration-500 group ${
                    accent
                      ? 'border-[#C8A96E]/30 bg-[#0C0B08]'
                      : 'border-[#141414] bg-[#0D0D0D] hover:border-[#1E1E1E]'
                  }`}
                    style={accent ? { boxShadow: '0 0 40px rgba(200,169,110,0.06)' } : {}}
                  >
                    {/* Step indicator */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className={`w-14 h-14 flex items-center justify-center border relative z-10 ${
                        accent
                          ? 'border-[#C8A96E]/50 bg-[#C8A96E]/[0.08]'
                          : 'border-[#1E1E1E] bg-[#0A0A0A] group-hover:border-[#2A2A2A]'
                      } transition-colors duration-300`}>
                        <Icon size={20} className="text-[#C8A96E]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className={`font-display text-xs font-medium ${accent ? 'text-[#C8A96E]' : 'text-[#444]'}`}>
                          {num}
                        </span>
                        <span className={`text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 ${
                          accent
                            ? 'text-[#C8A96E] border border-[#C8A96E]/30 bg-[#C8A96E]/[0.06]'
                            : 'text-[#444] border border-[#1E1E1E]'
                        }`}>
                          {time}
                        </span>
                      </div>
                      <h3 className={`text-base font-semibold mb-2 ${accent ? 'text-[#F0EDE8]' : 'text-[#D0CCC6]'}`}>
                        {title}
                      </h3>
                      <p className="text-sm text-[#484848] leading-relaxed font-light">{desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          <AnimateIn className="mt-10 text-center">
            <Link
              href="/demo"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] text-[13px] font-semibold tracking-[0.06em] uppercase overflow-hidden transition-all duration-300 hover:bg-[#D4B87E] hover:shadow-[0_0_32px_rgba(200,169,110,0.35)]"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
              Empezar ahora — es gratis
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ══ EJEMPLOS ══════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn className="mb-12 text-center">
            <Tag>Ejemplos de demos</Tag>
            <h2 className="font-display text-3xl md:text-4xl font-light italic text-[#F0EDE8] mt-4 mb-3 leading-tight">
              ¿No sabes qué pedir? Aquí tienes ideas
            </h2>
            <p className="text-[#444] text-sm">Las automatizaciones más solicitadas por negocios como el tuyo.</p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {examples.map(({ icon: Icon, color, label, desc }) => (
              <AnimateIn key={label}>
                <div className="flex items-start gap-5 p-6 border border-[#141414] bg-[#0D0D0D] hover:border-[#1E1E1E] transition-colors duration-300 group">
                  <div
                    className="w-11 h-11 flex items-center justify-center shrink-0"
                    style={{ background: `${color}14`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#D0CCC6] mb-1.5">{label}</h4>
                    <p className="text-[13px] text-[#444] leading-relaxed font-light">{desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GARANTÍAS ═════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <AnimateIn className="mb-12 text-center">
            <Tag>Sin riesgos</Tag>
            <h2 className="font-display text-3xl md:text-4xl font-light italic text-[#F0EDE8] mt-4 mb-3 leading-tight">
              Cero motivos para no intentarlo
            </h2>
            <p className="text-[#444] text-sm">En serio. No hay ninguna trampa.</p>
          </AnimateIn>

          <AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#141414]">
              {guarantees.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-5 p-7 bg-[#0D0D0D]">
                  <div className="w-10 h-10 border border-[#C8A96E]/30 bg-[#C8A96E]/[0.05] flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[#C8A96E]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#F0EDE8] mb-1">{title}</div>
                    <div className="text-[13px] text-[#484848] leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <AnimateIn className="mb-12 text-center">
            <Tag>Preguntas frecuentes</Tag>
            <h2 className="font-display text-3xl md:text-4xl font-light italic text-[#F0EDE8] mt-4 leading-tight">
              Resolvemos tus dudas
            </h2>
          </AnimateIn>

          <AnimateIn>
            <div className="border border-[#141414] bg-[#0D0D0D] divide-y-0 px-6 md:px-8">
              {faqs.map(faq => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ══ CTA FINAL ═════════════════════════════════════════ */}
      <section className="py-36 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] rounded-full bg-[#C8A96E]/[0.05] blur-[100px] pointer-events-none" />
        <div className="hidden md:block absolute inset-0 opacity-[0.018] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(200,169,110,1) 1px, transparent 1px)`,
          backgroundSize: '44px 44px',
        }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#C8A96E]/70 border border-[#C8A96E]/20 px-4 py-2 mb-8">
              <Check size={9} />
              Gratis · Sin compromiso · Respuesta en 48h
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-light italic text-[#F0EDE8] mb-5 leading-[0.95]">
              ¿Listo para verlo<br />
              <span className="text-[#C8A96E]">funcionar?</span>
            </h2>
            <p className="text-[#444] text-base mb-12 font-light max-w-lg mx-auto leading-relaxed">
              En menos de 48 horas tienes un prototipo real de tu automatización.
              Sin reuniones previas, sin compromisos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="group relative inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-[#C8A96E] text-[#0A0A0A] text-[13px] font-semibold tracking-[0.06em] uppercase overflow-hidden transition-all duration-300 hover:bg-[#D4B87E] hover:shadow-[0_0_40px_rgba(200,169,110,0.4)]"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
                Solicitar mi demo gratuita
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#2A2A2A] text-[#555] text-[13px] font-light tracking-[0.06em] uppercase hover:border-[#C8A96E]/40 hover:text-[#F0EDE8] transition-all duration-300"
              >
                Ver planes y precios
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

    </div>
  )
}
