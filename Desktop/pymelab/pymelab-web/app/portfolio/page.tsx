'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
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

/* ── WhatsApp icon ────────────────────────────────────────────── */
function WaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

/* ── Typing dots ─────────────────────────────────────────────── */
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-3.5 py-2.5">
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]/60"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity }}
        />
      ))}
    </div>
  )
}

/* ── Hero Visual ─────────────────────────────────────────────── */
const chatMsgs = [
  { id: 1, from: 'user', text: 'Hola, quería pedir cita para el martes por la mañana', time: '10:23', delay: 0.7 },
  { id: 2, from: 'bot',  text: 'Hola! 😊 Tengo disponibilidad el martes a las 9:30h o a las 11:00h.\n¿Cuál te viene mejor?', time: '10:23', delay: 1.6 },
  { id: 3, from: 'user', text: 'A las 11h perfecto', time: '10:24', delay: 2.5 },
  { id: 4, from: 'bot',  text: 'Confirmado ✅ Cita el martes a las 11:00h. Te envío confirmación al email ahora mismo.', time: '10:24', delay: 3.3 },
]

const resultCards = [
  { icon: Mail,     color: '#4FC3F7', bg: 'rgba(79,195,247,0.08)',   border: 'rgba(79,195,247,0.2)',   label: 'Email enviado',   sub: 'Confirmación de cita' },
  { icon: Calendar, color: '#4285F4', bg: 'rgba(66,133,244,0.08)',   border: 'rgba(66,133,244,0.2)',   label: 'Cita en agenda',  sub: 'Martes · 11:00h'      },
  { icon: BarChart3,color: '#C8A96E', bg: 'rgba(200,169,110,0.08)', border: 'rgba(200,169,110,0.25)', label: 'CRM actualizado', sub: 'Nuevo paciente'       },
]

function HeroVisual() {
  return (
    <div className="relative select-none">

      {/* ── Background ambient ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#C8A96E]/[0.06] blur-[80px]" />
      </div>

      {/* ── STATS mini card — floats top-right over chat header ── */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.16,1,0.3,1] }}
        className="absolute top-0 right-0 w-44 border border-[#C8A96E]/20 bg-[#0C0B08] px-4 py-3 z-20"
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(200,169,110,0.06)' }}
      >
        <div className="text-[9px] tracking-[0.18em] uppercase text-[#444] mb-2">Respuesta media</div>
        <div className="flex items-end gap-1.5 mb-3">
          <span className="font-display text-3xl font-light italic text-[#C8A96E] leading-none">2.3</span>
          <span className="text-[10px] text-[#555] mb-0.5">segundos</span>
        </div>
        <div className="flex items-end gap-0.5 h-6">
          {[3,5,4,7,5,8,6,9,7,10].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm bg-[#C8A96E]/30"
              initial={{ height: 0 }}
              animate={{ height: `${h * 10}%` }}
              transition={{ delay: 0.6 + i * 0.04, duration: 0.4 }}
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96E]/40 to-transparent" />
      </motion.div>

      {/* ── FLOW LAYOUT — chat → trigger → cards ── */}
      <div className="flex flex-col gap-2">

        {/* Chat */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="overflow-hidden"
          style={{
            boxShadow: '0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
            borderRadius: 2,
          }}
        >
          {/* Chat header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#151515]" style={{ background: '#0F0F0F' }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.25)' }}>
              <WaIcon size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-semibold text-[#F0EDE8] truncate">Bot IA · Clínica Dental</div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#25D366]" />
                </span>
                <span className="text-[10px] text-[#25D366]/70">En línea · responde al instante</span>
              </div>
            </div>
            <div className="text-[9px] tracking-[0.15em] text-[#333] uppercase">PyMeLab</div>
          </div>

          {/* Messages area — auto height, no clipping */}
          <div className="px-4 py-4 space-y-3" style={{ background: 'linear-gradient(180deg,#0A0A0A 0%,#080808 100%)' }}>
            {chatMsgs.map(({ id, from, text, time, delay }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay, duration: 0.4, ease: [0.16,1,0.3,1] }}
                className={`flex ${from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[82%] px-3.5 py-2.5 text-[12px] leading-relaxed whitespace-pre-line"
                  style={from === 'user'
                    ? { background: '#1A3324', border: '1px solid rgba(37,211,102,0.15)', borderRadius: '14px 14px 2px 14px', color: '#C8C5C0' }
                    : { background: '#141414', border: '1px solid rgba(200,169,110,0.18)', borderRadius: '14px 14px 14px 2px', color: '#C8C5C0',
                        boxShadow: 'inset 0 1px 0 rgba(200,169,110,0.05)' }
                  }
                >
                  {from === 'bot' && (
                    <div className="text-[9px] tracking-[0.12em] uppercase text-[#C8A96E]/50 mb-1.5">IA · PyMeLab</div>
                  )}
                  {text}
                  <div className={`flex items-center gap-1 mt-1.5 ${from === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <span className="text-[9px] text-[#333]">{time}</span>
                    {from === 'user' && <span className="text-[10px] text-[#25D366]/60">✓✓</span>}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Typing indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ delay: 2.8, duration: 1.2, times: [0, 0.1, 0.7, 1] }}
              className="flex justify-start"
            >
              <div style={{ background: '#141414', border: '1px solid rgba(200,169,110,0.15)', borderRadius: '14px 14px 14px 2px' }}>
                <TypingDots />
              </div>
            </motion.div>
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-t border-[#111]" style={{ background: '#0C0C0C' }}>
            <div className="flex-1 text-[11px] text-[#2A2A2A] px-3 py-2 rounded-full" style={{ background: '#141414', border: '1px solid #1A1A1A' }}>
              Escribe un mensaje...
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(37,211,102,0.15)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* ── AUTOMATION TRIGGER BAR ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 3.6, duration: 0.5, ease: [0.16,1,0.3,1] }}
          style={{ transformOrigin: 'left' }}
        >
          <div
            className="flex items-center gap-2.5 px-4 py-2.5"
            style={{ background: 'rgba(200,169,110,0.07)', border: '1px solid rgba(200,169,110,0.2)', borderTop: '1px solid rgba(200,169,110,0.3)' }}
          >
            <Zap size={11} className="text-[#C8A96E] shrink-0" />
            <span className="text-[10px] tracking-[0.14em] uppercase text-[#C8A96E]/70 flex-1">
              Automatización disparada · n8n
            </span>
            <div className="flex items-center gap-1.5">
              {[
                { bg: 'rgba(37,211,102,0.15)', border: 'rgba(37,211,102,0.3)', el: <WaIcon size={9} /> },
                { bg: 'rgba(200,169,110,0.15)', border: 'rgba(200,169,110,0.3)', el: <Zap size={9} className="text-[#C8A96E]" /> },
                { bg: 'rgba(79,195,247,0.12)',  border: 'rgba(79,195,247,0.25)', el: <Mail size={9} className="text-[#4FC3F7]" /> },
                { bg: 'rgba(66,133,244,0.12)',  border: 'rgba(66,133,244,0.25)', el: <Calendar size={9} className="text-[#4285F4]" /> },
              ].map(({ bg, border, el }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.7 + i * 0.08, duration: 0.3 }}
                  className="w-5 h-5 flex items-center justify-center"
                  style={{ background: bg, border: `1px solid ${border}`, borderRadius: 2 }}
                >
                  {el}
                </motion.div>
              ))}
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.1 }}
              className="text-[9px] text-[#4ADE80]/70 tracking-wide"
            >
              ✓ 3 acciones
            </motion.span>
          </div>
        </motion.div>

        {/* ── RESULT CARDS ── */}
        <div className="flex gap-2">
          {resultCards.map(({ icon: Icon, color, bg, border, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.8 + i * 0.1, duration: 0.5, ease: [0.16,1,0.3,1] }}
              className="flex-1 flex items-center gap-2.5 px-3 py-3"
              style={{ background: bg, border: `1px solid ${border}`, borderRadius: 2 }}
            >
              <div
                className="w-7 h-7 flex items-center justify-center shrink-0"
                style={{ background: `${color}15`, border: `1px solid ${color}30`, borderRadius: 2 }}
              >
                <Icon size={13} style={{ color }} />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-medium leading-tight truncate" style={{ color: '#D0CCC6' }}>{label}</div>
                <div className="text-[9px] leading-tight mt-0.5 truncate" style={{ color: '#444' }}>{sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM BADGE ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.3, duration: 0.5 }}
          className="flex items-center justify-between px-3 py-2"
          style={{ background: '#080808', border: '1px solid #111' }}
        >
          <span className="text-[9px] tracking-[0.12em] uppercase text-[#2A2A2A]">Tiempo total de respuesta</span>
          <span className="text-[10px] font-medium text-[#C8A96E]/60 font-display italic">2.3 segundos</span>
        </motion.div>

      </div>
    </div>
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
  { icon: ShieldCheck, title: '100 % gratis',    desc: 'Sin tarjeta, sin datos de pago, sin letra pequeña.' },
  { icon: Check,       title: 'Sin compromiso',   desc: 'No hay contrato que firmar. Decides tú, cuando quieras.' },
  { icon: Sparkles,    title: 'Personalizado',    desc: 'Diseñado para tu negocio y sector específico, no una demo genérica.' },
  { icon: Clock,       title: 'Respuesta en 48h', desc: 'Máximo 48 horas desde que rellenas el formulario.' },
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

/* ── Stagger variants ─────────────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as const
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease },
})

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

        {/* Grid bg */}
        <div className="hidden md:block absolute inset-0 opacity-[0.022] pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(200,169,110,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,169,110,1) 1px,transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />

        {/* Ambient glow */}
        <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#C8A96E]/[0.05] blur-[140px] pointer-events-none" />

        {/* Decorative "48" — desktop */}
        <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 font-display text-[22rem] font-bold italic leading-none text-[#C8A96E]/[0.025] select-none pointer-events-none">
          48
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT — copy */}
            <div>
              {/* Live badge */}
              <motion.div {...fadeUp(0)} className="mb-6 inline-flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]" />
                </span>
                <span className="text-[11px] tracking-[0.18em] uppercase text-[#4ADE80]/80 font-light">
                  Disponible ahora · Sin lista de espera
                </span>
              </motion.div>

              {/* Tag */}
              <motion.div {...fadeUp(0.05)} className="mb-7">
                <Tag>Demo gratuita · Sin compromiso</Tag>
              </motion.div>

              {/* Headline — clip reveal */}
              <div className="overflow-hidden mb-2">
                <motion.h1
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-light italic text-[#F0EDE8] leading-[0.95]"
                >
                  Tu automatización
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-2">
                <motion.h1
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-bold not-italic leading-[0.95]"
                  style={{ background: 'linear-gradient(135deg,#9A7A48,#C8A96E,#E2C99A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  personalizada,
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h1
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-light italic text-[#F0EDE8] leading-[0.95]"
                >
                  en 48 horas.
                </motion.h1>
              </div>

              <motion.p {...fadeUp(0.42)} className="text-[#555] text-base md:text-lg font-light max-w-xl leading-relaxed mb-10">
                No un vídeo genérico. Construimos un prototipo real de tu flujo,
                específico para tu negocio — y te lo enseñamos funcionando en directo.
              </motion.p>

              {/* CTA */}
              <motion.div {...fadeUp(0.54)} className="mb-12">
                <Link
                  href="/demo"
                  className="group relative inline-flex items-center gap-3 px-9 py-4 overflow-hidden transition-all duration-300 hover:shadow-[0_0_48px_rgba(200,169,110,0.5)]"
                  style={{
                    background: 'linear-gradient(135deg, #B8954E 0%, #C8A96E 45%, #D4B87E 100%)',
                    boxShadow: '0 2px 24px rgba(200,169,110,0.25), inset 0 1px 0 rgba(255,255,255,0.15)',
                  }}
                >
                  {/* shimmer */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  <span className="text-[#0A0A0A] text-[13px] font-bold tracking-[0.1em] uppercase whitespace-nowrap">
                    Solicitar mi demo gratis
                  </span>
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0A0A0A]/15 shrink-0 group-hover:bg-[#0A0A0A]/25 transition-colors duration-200">
                    <ArrowRight size={13} className="text-[#0A0A0A] group-hover:translate-x-0.5 transition-transform duration-200" />
                  </span>
                </Link>
              </motion.div>

              {/* Trust pills */}
              <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-2">
                {['100% gratis', 'Prototipo funcional', 'Sin compromiso', 'Videollamada incluida'].map((p, i) => (
                  <motion.span
                    key={p}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.65 + i * 0.07 }}
                    className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-[#C8A96E]/80 border border-[#C8A96E]/20 bg-[#C8A96E]/[0.04] px-3 py-1.5"
                  >
                    <Check size={8} className="text-[#C8A96E]" />
                    {p}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — premium WhatsApp mockup (desktop only) */}
            <div className="hidden lg:block">
              <HeroVisual />
            </div>

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

                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center mb-6 ${
                    highlight ? 'border-[#C8A96E]/60' : 'border-[#252525]'
                  }`}>
                    <span className={`font-display text-[11px] font-medium ${highlight ? 'text-[#C8A96E]' : 'text-[#444]'}`}>
                      {num}
                    </span>
                  </div>

                  <div className={`w-12 h-12 flex items-center justify-center mb-5 border ${
                    highlight ? 'border-[#C8A96E]/30 bg-[#C8A96E]/[0.07]' : 'border-[#1E1E1E] bg-[#111]'
                  }`}>
                    <Icon size={20} className="text-[#C8A96E]" />
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
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className={`w-14 h-14 flex items-center justify-center border relative z-10 ${
                        accent
                          ? 'border-[#C8A96E]/50 bg-[#C8A96E]/[0.08]'
                          : 'border-[#1E1E1E] bg-[#0A0A0A] group-hover:border-[#2A2A2A]'
                      } transition-colors duration-300`}>
                        <Icon size={20} className="text-[#C8A96E]" />
                      </div>
                    </div>
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
            <div className="border border-[#141414] bg-[#0D0D0D] px-6 md:px-8">
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
