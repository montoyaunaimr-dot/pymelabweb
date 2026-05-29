'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Clock, Zap, MessageCircle, Mail, Target, BarChart3, CheckCircle2 } from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A96E] font-light">
      <span className="w-6 h-px bg-[#C8A96E]" />
      {children}
    </span>
  )
}

const cases = [
  {
    num: '01',
    sector: 'Clínica Dental · Barcelona',
    title: 'Agenda llena. 0 horas de gestión.',
    tagline: 'La clínica perdía 2 horas diarias gestionando citas por WhatsApp. Ahora lo hace la IA.',
    color: '#25D366',
    automations: ['Bot de WhatsApp', 'Google Sheets', 'Email automático', 'Recordatorios 24h antes'],
    challenge: 'El dentista y su recepcionista dedicaban más de 2 horas diarias a responder WhatsApps, anotar citas en papel y llamar para confirmar. Muchas citas se perdían por falta de seguimiento.',
    solution: 'Implementamos un bot con GPT-4o que entiende lenguaje natural. El paciente escribe "tenéis hueco el martes", la IA comprueba disponibilidad en Google Sheets, confirma la cita y envía un email de confirmación. El día anterior, un recordatorio automático.',
    result: '100% de las citas gestionadas sin intervención humana. Cero no-shows gracias a los recordatorios. La recepcionista ahora trabaja en lo que realmente importa.',
    metrics: [
      { icon: Clock,       label: 'Horas ahorradas/día', value: '2h+' },
      { icon: TrendingUp,  label: 'Reducción no-shows',  value: '-85%' },
      { icon: Zap,         label: 'Tiempo implementación', value: '48h' },
      { icon: CheckCircle2,label: 'Disponibilidad',        value: '24/7' },
    ],
  },
  {
    num: '02',
    sector: 'Academia de Formación · Madrid',
    title: 'Cada lead, convertido automáticamente.',
    tagline: 'Los formularios de la web ahora disparan un pipeline completo de ventas sin tocar nada.',
    color: '#C8A96E',
    automations: ['Captura de Leads', 'Email Automation', 'CRM Sync', 'Notificaciones al equipo'],
    challenge: 'Los formularios de la web llegaban al email y nadie los gestionaba a tiempo. Los leads se enfriaban antes de que el equipo de ventas pudiera responder. Se perdían oportunidades cada día.',
    solution: 'Conectamos el formulario web a un flujo de n8n que, en segundos: registra el lead en HubSpot, envía un email de bienvenida personalizado, notifica al comercial por Slack y programa un follow-up a los 2 días si no hay respuesta.',
    result: 'El tiempo de respuesta bajó de horas a segundos. El equipo de ventas ya no pierde ni un solo lead. Las conversiones aumentaron un 40% en el primer mes.',
    metrics: [
      { icon: Clock,       label: 'Tiempo de respuesta',   value: '<30 seg' },
      { icon: TrendingUp,  label: 'Aumento conversiones',  value: '+40%' },
      { icon: Zap,         label: 'Leads perdidos',        value: '0' },
      { icon: CheckCircle2,label: 'Seguimiento automático', value: 'Sí' },
    ],
  },
  {
    num: '03',
    sector: 'Restaurante · Sevilla',
    title: 'Reservas, confirmaciones y reseñas en piloto automático.',
    tagline: 'El restaurante pasó de gestionar reservas por teléfono a tener un sistema completamente automatizado.',
    color: '#FF6B6B',
    automations: ['Bot de WhatsApp', 'Email Automation', 'Google Sheets', 'Recordatorio de reseña'],
    challenge: 'El restaurante recibía reservas por teléfono, WhatsApp y email, todo mezclado. Las cancelaciones de última hora eran frecuentes. No tenían forma de pedir reseñas de forma sistemática.',
    solution: 'Un bot de WhatsApp gestiona todas las reservas. Comprueba disponibilidad, confirma o propone alternativas, registra en Google Sheets y envía recordatorio 2 horas antes. Al día siguiente de la visita, envía automáticamente un enlace a Google Reviews.',
    result: 'El dueño ya no atiende el teléfono en horario de servicio. Las cancelaciones bajaron un 70%. Las reseñas de Google se triplicaron en 3 meses.',
    metrics: [
      { icon: Clock,       label: 'Llamadas atendidas',     value: '0' },
      { icon: TrendingUp,  label: 'Reducción cancelaciones', value: '-70%' },
      { icon: Zap,         label: 'Reseñas Google',         value: '3x' },
      { icon: CheckCircle2,label: 'Gestión manual',          value: 'Cero' },
    ],
  },
  {
    num: '04',
    sector: 'Agencia Inmobiliaria · Valencia',
    title: 'Dashboard de ventas que se actualiza solo.',
    tagline: 'El director ya no prepara informes a mano. Los datos están siempre actualizados.',
    color: '#A78BFA',
    automations: ['Informes Automáticos', 'Integración CRM', 'Google Sheets', 'Email semanal al equipo'],
    challenge: 'El director de ventas dedicaba los lunes por la mañana a consolidar datos de CRM, hojas de cálculo y emails para preparar el informe semanal. 3 horas de trabajo que no aportaban ningún valor.',
    solution: 'Conectamos Pipedrive con un dashboard en Google Sheets que se actualiza en tiempo real. Cada domingo a las 20:00, un flujo automático genera el informe semanal y lo envía por email a todo el equipo directivo.',
    result: '3 horas recuperadas cada semana. El equipo llega el lunes al trabajo con los datos ya encima de la mesa. Las decisiones se toman con datos en tiempo real, no de hace días.',
    metrics: [
      { icon: Clock,       label: 'Horas ahorradas/semana', value: '3h' },
      { icon: TrendingUp,  label: 'Velocidad de decisión',  value: '10x' },
      { icon: Zap,         label: 'Datos actualizados',     value: 'Tiempo real' },
      { icon: CheckCircle2,label: 'Informes manuales',       value: 'Eliminados' },
    ],
  },
]

export default function PortfolioPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-36 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.022] pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(200,169,110,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,169,110,1) 1px,transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C8A96E]/[0.04] blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
            <Tag>Casos de uso reales</Tag>
          </motion.div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic text-[#F0EDE8] leading-[0.92]"
              initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Automatizaciones<br />que ya funcionan.
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-[#555] text-lg font-light max-w-2xl">
            No teoría. No promesas. Flujos reales que ya están ahorrando horas a negocios como el tuyo cada día.
          </motion.p>

          {/* Quick stats */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-12 flex flex-wrap gap-8">
            {[
              { val: '4+',   label: 'Casos documentados' },
              { val: '48h',  label: 'Implementación media' },
              { val: '100%', label: 'Clientes activos' },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="font-display text-3xl font-light italic text-[#C8A96E]">{val}</div>
                <div className="text-xs tracking-[0.1em] uppercase text-[#444] mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-4">
          {cases.map((c, i) => (
            <AnimateIn key={c.num} delay={i * 0.06}>
              <div className="bg-[#0D0D0D] border border-[#141414] hover:border-[#C8A96E]/20 transition-all duration-500 group">

                {/* Header */}
                <div className="p-8 md:p-10 pb-0">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-6">
                      <span className="font-display text-7xl font-light italic text-[#141414] leading-none select-none hidden md:block group-hover:text-[#1A1A1A] transition-colors duration-500">
                        {c.num}
                      </span>
                      <div>
                        <div className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: c.color + '99' }}>
                          {c.sector}
                        </div>
                        <h2 className="font-display text-2xl md:text-3xl font-light italic text-[#F0EDE8] mb-2">{c.title}</h2>
                        <p className="text-sm font-light" style={{ color: c.color + 'CC' }}>{c.tagline}</p>
                      </div>
                    </div>
                    {/* Automation tags */}
                    <div className="flex flex-wrap gap-2 shrink-0">
                      {c.automations.map(a => (
                        <span key={a} className="text-[9px] tracking-[0.12em] uppercase text-[#444] border border-[#1E1E1E] px-2.5 py-1 group-hover:border-[#2A2A2A] transition-colors duration-300">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Story */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#141414]">
                  {[
                    { label: 'El reto',      text: c.challenge },
                    { label: 'La solución',  text: c.solution  },
                    { label: 'El resultado', text: c.result    },
                  ].map((block, bi) => (
                    <div
                      key={block.label}
                      className={`p-7 md:p-8 ${bi < 2 ? 'md:border-r border-[#141414]' : ''} ${bi > 0 ? 'border-t md:border-t-0 border-[#141414]' : ''}`}
                    >
                      <div className="text-[9px] tracking-[0.2em] uppercase mb-3 font-medium" style={{ color: bi === 2 ? c.color : '#C8A96E' }}>
                        {block.label}
                      </div>
                      <p className="text-sm text-[#555] leading-relaxed font-light">{block.text}</p>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-[#141414]">
                  {c.metrics.map((metric, mi) => (
                    <div
                      key={metric.label}
                      className={`p-5 flex items-center gap-3 ${mi < 3 ? 'md:border-r border-[#141414]' : ''} ${mi >= 2 ? 'border-t md:border-t-0 border-[#141414]' : ''}`}
                    >
                      <metric.icon size={14} className="text-[#C8A96E] shrink-0" />
                      <div>
                        <div className="text-[9px] tracking-[0.1em] uppercase text-[#333] mb-0.5">{metric.label}</div>
                        <div className="text-xs text-[#F0EDE8] font-medium">{metric.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom hover line */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#C8A96E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── "Tu empresa aquí" ── */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="border border-dashed border-[#1E1E1E] hover:border-[#C8A96E]/40 transition-colors duration-500 p-12 text-center group">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#2A2A2A] mb-4">Próximo caso</div>
              <h3 className="font-display text-3xl md:text-4xl font-light italic text-[#222] group-hover:text-[#555] transition-colors duration-500 mb-4">
                ¿Tu empresa aquí?
              </h3>
              <p className="text-sm text-[#2A2A2A] group-hover:text-[#444] transition-colors duration-500 mb-6 max-w-md mx-auto leading-relaxed font-light">
                Tu negocio puede ser el siguiente caso de éxito. Cuéntanos qué quieres automatizar y lo hacemos realidad en 48 horas.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#444] group-hover:text-[#C8A96E] transition-colors duration-300 group/link"
              >
                Solicitar automatización
                <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 bg-[#080808] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-[#C8A96E]/[0.04] blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-4xl md:text-6xl font-light italic text-[#F0EDE8] mb-5 leading-tight">
              ¿Tu negocio podría ser el siguiente?
            </h2>
            <p className="text-[#444] mb-10 font-light">
              Cuéntanos qué procesos quieres automatizar. Te respondemos en menos de 24 horas con una propuesta concreta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C8A96E] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E2C99A] transition-colors duration-300 group">
                Solicitar automatización
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#2A2A2A] text-[#666] text-sm hover:border-[#C8A96E]/50 hover:text-[#F0EDE8] transition-all duration-300">
                Ver planes y precios
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

    </div>
  )
}
