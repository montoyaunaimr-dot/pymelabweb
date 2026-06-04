'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle, Mail, Target, BarChart3, Link2,
  Zap, Users, ShoppingBag, HeartPulse, Utensils,
  Check, ArrowRight, ArrowLeft, Send, Calendar,
  Phone, Briefcase, ChevronRight,
} from 'lucide-react'

/* ─────────────────────────────────────────────── */
/* Types */
/* ─────────────────────────────────────────────── */
interface SelectOption {
  value: string
  label: string
  desc?: string
  icon?: React.ComponentType<{ size?: number; className?: string }>
}

/* ─────────────────────────────────────────────── */
/* Data */
/* ─────────────────────────────────────────────── */
const SECTORS: SelectOption[] = [
  { value: 'health',    label: 'Salud / Clínica',       icon: HeartPulse },
  { value: 'food',      label: 'Hostelería',             icon: Utensils },
  { value: 'ecommerce', label: 'E-commerce',             icon: ShoppingBag },
  { value: 'services',  label: 'Servicios profesionales',icon: Briefcase },
  { value: 'other',     label: 'Otro sector',            icon: Zap },
]

const SIZES: SelectOption[] = [
  { value: '1',   label: 'Solo yo',    desc: 'Autónomo o freelance' },
  { value: '2-5', label: '2 – 5',      desc: 'Equipo pequeño' },
  { value: '6-20',label: '6 – 20',     desc: 'PYME consolidada' },
  { value: '20+', label: 'Más de 20',  desc: 'Empresa mediana' },
]

const PROCESSES: SelectOption[] = [
  { value: 'whatsapp',  label: 'Bot de WhatsApp',       icon: MessageCircle, desc: 'Reservas, FAQs y ventas con IA' },
  { value: 'email',     label: 'Email Automation',      icon: Mail,          desc: 'Secuencias y seguimientos solos' },
  { value: 'leads',     label: 'Captura de leads',      icon: Target,        desc: 'Formularios directo al CRM' },
  { value: 'reports',   label: 'Informes automáticos',  icon: BarChart3,     desc: 'Dashboard de métricas en tiempo real' },
  { value: 'integrate', label: 'Integrar herramientas', icon: Link2,         desc: 'CRM, Sheets, Calendar, etc.' },
  { value: 'other',     label: 'Otro proceso',          icon: Zap,           desc: 'Cuéntanoslo tú' },
]

/* ─────────────────────────────────────────────── */
/* Sub-components */
/* ─────────────────────────────────────────────── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A96E] font-light">
      <span className="w-6 h-px bg-[#C8A96E]" />
      {children}
    </span>
  )
}

function StepDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`transition-all duration-500 rounded-full ${
            i < current  ? 'w-6 h-1.5 bg-[#C8A96E]' :
            i === current ? 'w-8 h-1.5 bg-[#C8A96E]' :
                            'w-4 h-1.5 bg-[#2A2A2A]'
          }`}
        />
      ))}
      <span className="ml-2 text-xs text-[#444] tracking-widest uppercase font-light">
        {current + 1}/{total}
      </span>
    </div>
  )
}

function OptionCard({
  option, selected, onClick, multi,
}: {
  option: SelectOption
  selected: boolean
  onClick: () => void
  multi?: boolean
}) {
  const Icon = option.icon
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full text-left p-4 border transition-all duration-200 focus:outline-none ${
        selected
          ? 'border-[#C8A96E] bg-[#C8A96E]/8'
          : 'border-[#2A2A2A] bg-[#141414] hover:border-[#3A3A3A] hover:bg-[#1A1A1A]'
      }`}
    >
      <div className="flex items-start gap-3">
        {Icon && (
          <Icon
            size={17}
            className={`mt-0.5 shrink-0 transition-colors duration-200 ${
              selected ? 'text-[#C8A96E]' : 'text-[#444] group-hover:text-[#666]'
            }`}
          />
        )}
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-medium transition-colors duration-200 ${
            selected ? 'text-[#F0EDE8]' : 'text-[#888] group-hover:text-[#AAA]'
          }`}>
            {option.label}
          </p>
          {option.desc && (
            <p className="text-xs text-[#444] mt-0.5 font-light">{option.desc}</p>
          )}
        </div>
        <div className={`shrink-0 w-4 h-4 border flex items-center justify-center transition-all duration-200 ${
          selected ? 'border-[#C8A96E] bg-[#C8A96E]' : 'border-[#333]'
        } ${multi ? 'rounded-sm' : 'rounded-full'}`}>
          {selected && <Check size={10} className="text-[#0A0A0A]" />}
        </div>
      </div>
    </button>
  )
}

/* ─────────────────────────────────────────────── */
/* Main page */
/* ─────────────────────────────────────────────── */
export default function DemoPage() {
  const [step, setStep] = useState(0)
  const TOTAL_STEPS = 3

  // Step 0 — empresa
  const [sector, setSector] = useState('')
  const [size, setSize] = useState('')

  // Step 1 — procesos
  const [processes, setProcesses] = useState<string[]>([])

  // Step 2 — contacto
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', notes: '' })

  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)

  const toggleProcess = (val: string) =>
    setProcesses(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val])

  const canNext = () => {
    if (step === 0) return !!sector && !!size
    if (step === 1) return processes.length > 0
    if (step === 2) return !!form.name && !!form.email
    return false
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sector, size, processes, form }),
      })
      setDone(true)
    } catch {
      setSending(false)
      alert('Error al enviar. Por favor escríbenos a contacto@pymelabagency.com')
    }
  }

  /* ── Success state ── */
  if (done) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg w-full text-center"
        >
          <div className="w-16 h-16 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 flex items-center justify-center mx-auto mb-8">
            <Check size={28} className="text-[#C8A96E]" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-light italic text-[#F0EDE8] mb-4 leading-tight">
            Tu demo está<br />
            <span className="text-[#C8A96E] font-bold not-italic">en camino</span>
          </h1>
          <p className="text-[#555] font-light mb-10 leading-relaxed">
            En menos de 24 horas recibirás una demo personalizada de cómo automatizaríamos
            exactamente los procesos de <strong className="text-[#888]">{form.company || 'tu negocio'}</strong>.
          </p>

          <div className="border border-[#2A2A2A] bg-[#141414] p-6 mb-8 text-left">
            <p className="text-xs tracking-[0.2em] uppercase text-[#555] mb-4">¿Qué pasa ahora?</p>
            {[
              { n: '01', t: 'Analizamos tu caso', d: 'Revisamos tus procesos y preparamos una demo a medida.' },
              { n: '02', t: 'Te enviamos la demo', d: 'Un vídeo o presentación mostrando exactamente tu automatización.' },
              { n: '03', t: 'Llamada de detalle', d: 'Si te interesa, agendamos 30 min para cerrar los detalles.' },
            ].map(({ n, t, d }) => (
              <div key={n} className="flex gap-4 mb-4 last:mb-0">
                <span className="text-xs font-mono text-[#C8A96E] mt-0.5 shrink-0 w-6">{n}</span>
                <div>
                  <p className="text-sm font-medium text-[#F0EDE8]">{t}</p>
                  <p className="text-xs text-[#555] mt-0.5 font-light">{d}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#C8A96E] transition-colors duration-200"
          >
            Volver al inicio
            <ChevronRight size={14} />
          </a>
        </motion.div>
      </div>
    )
  }

  /* ── Form ── */
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Ambient glow */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C8A96E]/3 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#C8A96E]/2 blur-[100px] pointer-events-none" />

      <div className="relative min-h-screen flex flex-col lg:flex-row">

        {/* ── Left panel (info) ── */}
        <div className="hidden lg:flex lg:w-[420px] xl:w-[480px] shrink-0 flex-col justify-between px-12 py-20 border-r border-[#1A1A1A]">
          <div>
            <Tag>Demo gratuita</Tag>
            <h1 className="font-display text-4xl xl:text-5xl font-light italic text-[#F0EDE8] mt-6 leading-[0.92] mb-6">
              Descubre cómo<br />
              <span className="text-[#C8A96E] font-bold not-italic">tu negocio</span><br />
              puede funcionar solo
            </h1>
            <p className="text-[#555] font-light text-sm leading-relaxed">
              En menos de 24 horas preparamos una demo personalizada para tu empresa — te mostramos exactamente qué automatizaríamos y cuánto tiempo ahorrarías.
            </p>
          </div>

          <div className="space-y-5">
            {[
              { icon: Zap,      label: 'Demo en 24 horas',      desc: 'Sin esperas. Sin compromiso.' },
              { icon: Users,    label: 'Personalizada para ti', desc: 'Basada en tu sector y procesos.' },
              { icon: Calendar, label: 'Llamada incluida',      desc: '30 min para resolver todas tus dudas.' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex gap-4 items-start">
                <div className="w-9 h-9 border border-[#2A2A2A] flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-[#C8A96E]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#888]">{label}</p>
                  <p className="text-xs text-[#444] font-light mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#333] font-light">
            PyMeLab Automation Agency · <a href="/" className="text-[#444] hover:text-[#C8A96E] transition-colors">pymelabagency.com</a>
          </p>
        </div>

        {/* ── Right panel (form) ── */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 py-24 lg:py-16">
          <div className="max-w-xl w-full mx-auto lg:mx-0">

            {/* Mobile tag */}
            <div className="lg:hidden mb-6">
              <Tag>Demo gratuita</Tag>
            </div>

            <StepDots total={TOTAL_STEPS} current={step} />

            <AnimatePresence mode="wait">

              {/* ── Step 0: Tu empresa ── */}
              {step === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-light italic text-[#F0EDE8] mb-2">
                    Tu empresa
                  </h2>
                  <p className="text-[#444] text-sm font-light mb-8">
                    Cuéntanos un poco sobre tu negocio para preparar la demo adecuada.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-3">
                        Sector
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {SECTORS.map(opt => (
                          <OptionCard
                            key={opt.value}
                            option={opt}
                            selected={sector === opt.value}
                            onClick={() => setSector(opt.value)}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-3">
                        Tamaño del equipo
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {SIZES.map(opt => (
                          <OptionCard
                            key={opt.value}
                            option={opt}
                            selected={size === opt.value}
                            onClick={() => setSize(opt.value)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── Step 1: Qué automatizar ── */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-light italic text-[#F0EDE8] mb-2">
                    ¿Qué quieres automatizar?
                  </h2>
                  <p className="text-[#444] text-sm font-light mb-8">
                    Selecciona uno o varios procesos. Cuantos más elijas, más completa será la demo.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {PROCESSES.map(opt => (
                      <OptionCard
                        key={opt.value}
                        option={opt}
                        selected={processes.includes(opt.value)}
                        onClick={() => toggleProcess(opt.value)}
                        multi
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── Step 2: Tus datos ── */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-light italic text-[#F0EDE8] mb-2">
                    ¿A quién te enviamos la demo?
                  </h2>
                  <p className="text-[#444] text-sm font-light mb-8">
                    Te contactamos en menos de 24 horas con la demo preparada.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">
                          Nombre *
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                          placeholder="Tu nombre"
                          className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3.5 text-sm text-[#F0EDE8] placeholder-[#3A3A3A] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">
                          Empresa
                        </label>
                        <input
                          value={form.company}
                          onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                          placeholder="Nombre de tu empresa"
                          className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3.5 text-sm text-[#F0EDE8] placeholder-[#3A3A3A] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">
                          Email *
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                          placeholder="tu@email.com"
                          className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3.5 text-sm text-[#F0EDE8] placeholder-[#3A3A3A] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                          placeholder="+34 600 000 000"
                          className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3.5 text-sm text-[#F0EDE8] placeholder-[#3A3A3A] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-[#555] mb-2">
                        Algo más que debamos saber (opcional)
                      </label>
                      <textarea
                        rows={3}
                        value={form.notes}
                        onChange={e => setForm(p => ({ ...p, notes: e.target.value }))}
                        placeholder="Ej: usamos Holded para facturación, nos llegan 50 leads al mes por Instagram..."
                        className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3.5 text-sm text-[#F0EDE8] placeholder-[#3A3A3A] focus:outline-none focus:border-[#C8A96E] transition-colors duration-200 resize-none"
                      />
                    </div>

                    {/* Summary pill */}
                    <div className="flex flex-wrap gap-1.5 py-2">
                      {processes.map(p => {
                        const opt = PROCESSES.find(x => x.value === p)
                        return opt ? (
                          <span key={p} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#C8A96E]/10 border border-[#C8A96E]/20 text-[#C8A96E] text-xs font-light">
                            {opt.label}
                          </span>
                        ) : null
                      })}
                    </div>

                    {/* Submit inside form */}
                    <button
                      type="submit"
                      disabled={sending || !form.name || !form.email}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 disabled:opacity-50 mt-2"
                    >
                      {sending ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full"
                          />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Solicitar demo gratuita
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-[#333] font-light">
                      Sin compromiso · Respuesta en menos de 24 horas
                    </p>
                  </form>
                </motion.div>
              )}

            </AnimatePresence>

            {/* Navigation (steps 0-1) */}
            {step < 2 && (
              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep(s => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="flex items-center gap-1.5 text-sm text-[#444] hover:text-[#888] transition-colors duration-200 disabled:opacity-0"
                >
                  <ArrowLeft size={15} />
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={() => setStep(s => s + 1)}
                  disabled={!canNext()}
                  className="flex items-center gap-2 px-8 py-3 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Siguiente
                  <ArrowRight size={15} />
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
