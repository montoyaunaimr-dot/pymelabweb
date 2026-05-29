'use client'

import { motion } from 'framer-motion'
import { Bot, Mail, CheckCircle2, Calendar } from 'lucide-react'

/* ── Brand icons ─────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function HubSpotIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <circle cx="16" cy="16" r="16" fill="#FF7A59"/>
      <circle cx="22" cy="10" r="3" fill="white"/>
      <line x1="22" y1="13" x2="22" y2="19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="10" cy="19" r="4.5" fill="none" stroke="white" strokeWidth="2.5"/>
      <line x1="14.5" y1="19" x2="19.5" y2="19" stroke="white" strokeWidth="2.5"/>
    </svg>
  )
}

/* ── Animated flowing dot along a path ─────────────── */
function FlowingDot({ path, delay = 0, duration = 1.8 }: { path: string; delay?: number; duration?: number }) {
  return (
    <motion.circle r="2.5" fill="#C8A96E" opacity={0.9}>
      <animateMotion
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        path={path}
        calcMode="linear"
      />
    </motion.circle>
  )
}

/* ── Individual card ─────────────────────────────── */
function FlowCard({
  icon,
  label,
  sublabel,
  accent = false,
  delay = 0,
  style,
  iconBg,
  vertical = false,
}: {
  icon: React.ReactNode
  label: string
  sublabel?: string
  accent?: boolean
  delay?: number
  style?: React.CSSProperties
  iconBg: string
  vertical?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="absolute"
      style={style}
    >
      <div
        className={`flex ${vertical ? 'flex-col items-center text-center gap-2' : 'items-center gap-3'} px-3 py-3 rounded-xl border ${
          accent
            ? 'border-[#C8A96E]/40 bg-[#14130C]'
            : 'border-[#252525] bg-[#131313]'
        }`}
        style={accent ? { boxShadow: '0 0 28px rgba(200,169,110,0.1), inset 0 0 0 1px rgba(200,169,110,0.05)' } : {
          boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
        }}
      >
        <div
          className="rounded-lg flex items-center justify-center shrink-0"
          style={{ width: 36, height: 36, background: iconBg }}
        >
          {icon}
        </div>
        <div>
          <div className={`text-[11px] font-medium leading-tight ${accent ? 'text-[#C8A96E]' : 'text-[#999]'}`}>
            {label}
          </div>
          {sublabel && (
            <div className={`text-[10px] leading-tight mt-0.5 ${accent ? 'text-[#C8A96E]/60' : 'text-[#555]'}`}>
              {sublabel}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────── */
export default function AutomationFlow() {
  // All coordinates are within a 340×395 canvas
  // Main card dims: w=198 h=54  → center x=170
  // Sub card dims: w=108 h=70   → centers at x=54, 170, 286

  const C = 170  // center x
  const W = 198  // main card width
  const SW = 108 // sub card width
  const SG = 8   // gap between sub cards
  const L = (340 - SW*3 - SG*2) / 2  // left edge of first sub card ≈ 4

  // y positions (top of each card)
  const y1 = 0    // WhatsApp
  const y2 = 96   // Bot
  const y3 = 200  // Sub cards
  const y4 = 330  // Calendar

  // Card heights
  const mh = 54   // main card height
  const sh = 72   // sub card height

  // Connection points
  const p1b = y1 + mh        // WhatsApp bottom
  const p2t = y2             // Bot top
  const p2b = y2 + mh        // Bot bottom
  const jy  = y3 - 26        // junction Y (horizontal bar)
  const p3t = y3             // Sub card tops
  const p3b = y3 + sh        // Sub card bottoms
  const my  = y4 - 20        // merge Y (horizontal bar)
  const p4t = y4             // Calendar top

  // Sub card center Xs
  const cx1 = L + SW / 2
  const cx2 = C
  const cx3 = 340 - L - SW / 2

  return (
    <div className="relative" style={{ width: 340, height: 395 }}>

      {/* ── SVG: all connector lines ── */}
      <svg
        className="absolute inset-0 pointer-events-none overflow-visible"
        width="340"
        height="395"
        viewBox="0 0 340 395"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C8A96E" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#C8A96E" stopOpacity="0.2"/>
          </linearGradient>
        </defs>

        {/* 1. WhatsApp → Bot */}
        <line x1={C} y1={p1b} x2={C} y2={p2t} stroke="url(#lineGrad)" strokeWidth="1.5"/>
        <FlowingDot path={`M ${C} ${p1b} L ${C} ${p2t}`} delay={0} duration={1.6} />

        {/* 2. Bot → junction → 3 branches */}
        <line x1={C}   y1={p2b} x2={C}   y2={jy} stroke="#C8A96E" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1={cx1} y1={jy}  x2={cx3} y2={jy} stroke="#C8A96E" strokeWidth="1.5" strokeOpacity="0.35"/>
        <line x1={cx1} y1={jy}  x2={cx1} y2={p3t} stroke="#C8A96E" strokeWidth="1.5" strokeOpacity="0.3"/>
        <line x1={cx2} y1={jy}  x2={cx2} y2={p3t} stroke="#C8A96E" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1={cx3} y1={jy}  x2={cx3} y2={p3t} stroke="#C8A96E" strokeWidth="1.5" strokeOpacity="0.3"/>

        {/* Junction dot */}
        <circle cx={C} cy={jy} r="3" fill="#C8A96E" opacity="0.5"/>
        <circle cx={cx1} cy={jy} r="2.5" fill="#C8A96E" opacity="0.35"/>
        <circle cx={cx3} cy={jy} r="2.5" fill="#C8A96E" opacity="0.35"/>

        {/* Animated dots on branches */}
        <FlowingDot path={`M ${cx1} ${jy} L ${cx1} ${p3t}`} delay={0.4} duration={1.2}/>
        <FlowingDot path={`M ${cx2} ${jy} L ${cx2} ${p3t}`} delay={0.2} duration={1.2}/>
        <FlowingDot path={`M ${cx3} ${jy} L ${cx3} ${p3t}`} delay={0.6} duration={1.2}/>

        {/* 3. Sub cards → merge → Calendar */}
        <line x1={cx1} y1={p3b} x2={cx1} y2={my} stroke="#C8A96E" strokeWidth="1.5" strokeOpacity="0.25"/>
        <line x1={cx2} y1={p3b} x2={cx2} y2={my} stroke="#C8A96E" strokeWidth="1.5" strokeOpacity="0.35"/>
        <line x1={cx3} y1={p3b} x2={cx3} y2={my} stroke="#C8A96E" strokeWidth="1.5" strokeOpacity="0.25"/>
        <line x1={cx1} y1={my}  x2={cx3} y2={my} stroke="#C8A96E" strokeWidth="1.5" strokeOpacity="0.3"/>
        <line x1={cx2} y1={my}  x2={cx2} y2={p4t} stroke="#C8A96E" strokeWidth="1.5" strokeOpacity="0.4"/>

        {/* Merge dot */}
        <circle cx={C} cy={my} r="3" fill="#C8A96E" opacity="0.5"/>

        {/* Animated dot: merge → Calendar */}
        <FlowingDot path={`M ${cx2} ${p3b} L ${cx2} ${p4t}`} delay={1.1} duration={1.8}/>
      </svg>

      {/* ── Card 1: WhatsApp ── */}
      <FlowCard
        icon={<WhatsAppIcon />}
        label="Lead entra"
        sublabel="por WhatsApp"
        iconBg="rgba(37,211,102,0.12)"
        delay={0}
        style={{ left: C - W/2, top: y1, width: W }}
      />

      {/* ── Card 2: IA Bot (highlighted) ── */}
      <FlowCard
        icon={<Bot size={19} className="text-[#C8A96E]" />}
        label="IA responde"
        sublabel="automáticamente"
        accent
        iconBg="rgba(200,169,110,0.12)"
        delay={0.12}
        style={{ left: C - W/2, top: y2, width: W }}
      />

      {/* ── Card 3a: CRM ── */}
      <FlowCard
        icon={<HubSpotIcon />}
        label="Datos guardados"
        sublabel="en el CRM"
        iconBg="rgba(255,122,89,0.12)"
        delay={0.24}
        vertical
        style={{ left: L, top: y3, width: SW }}
      />

      {/* ── Card 3b: Email ── */}
      <FlowCard
        icon={<Mail size={17} className="text-[#4FC3F7]" />}
        label="Email automático"
        sublabel="de bienvenida"
        iconBg="rgba(79,195,247,0.12)"
        delay={0.2}
        vertical
        style={{ left: L + SW + SG, top: y3, width: SW }}
      />

      {/* ── Card 3c: Task ── */}
      <FlowCard
        icon={<CheckCircle2 size={17} className="text-[#4ADE80]" />}
        label="Tarea creada"
        sublabel="para el equipo"
        iconBg="rgba(74,222,128,0.1)"
        delay={0.28}
        vertical
        style={{ left: L + SW*2 + SG*2, top: y3, width: SW }}
      />

      {/* ── Card 4: Calendar ── */}
      <FlowCard
        icon={<Calendar size={18} className="text-[#888]" />}
        label="Reunión agendada"
        sublabel="automáticamente"
        iconBg="rgba(80,80,80,0.2)"
        delay={0.38}
        style={{ left: C - W/2, top: y4, width: W }}
      />

      {/* Ambient glow behind the diagram */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(200,169,110,0.05) 0%, transparent 70%)' }}
      />
    </div>
  )
}
