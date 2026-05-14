/*
  Placeholder elegante para proyectos en desarrollo.
*/
export default function ComingSoonMockup() {
  return (
    <div
      className="absolute inset-0 origin-top-left overflow-hidden"
      style={{ width: '200%', height: '200%', transform: 'scale(0.5)', pointerEvents: 'none', background: '#0A0A0A' }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-[#1E1E1E]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#C8A96E]/20 border border-[#C8A96E]/30" />
          <div className="h-2 bg-[#2A2A2A] w-24 rounded-sm" />
        </div>
        <div className="flex gap-6">
          {[3,4,3].map((w,i) => (
            <div key={i} className="h-2 bg-[#1E1E1E] rounded-sm" style={{ width: `${w * 12}px` }} />
          ))}
        </div>
      </nav>

      {/* Hero skeleton */}
      <div className="px-8 pt-12 pb-8 flex flex-col items-center gap-4">
        <div className="h-2 bg-[#1E1E1E] w-24 rounded-sm" />
        <div className="h-8 bg-[#1A1A1A] w-3/4 rounded-sm" />
        <div className="h-8 bg-[#C8A96E]/10 w-2/4 rounded-sm" />
        <div className="h-3 bg-[#1A1A1A] w-2/3 rounded-sm mt-2" />
        <div className="h-3 bg-[#1A1A1A] w-1/2 rounded-sm" />

        {/* CTA buttons */}
        <div className="flex gap-3 mt-4">
          <div className="h-10 w-32 bg-[#C8A96E]/20 border border-[#C8A96E]/30" />
          <div className="h-10 w-32 bg-[#1A1A1A] border border-[#2A2A2A]" />
        </div>
      </div>

      {/* Cards row skeleton */}
      <div className="px-8 grid grid-cols-3 gap-4 mt-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-[#111] border border-[#1E1E1E] p-4 flex flex-col gap-2">
            <div className="h-16 bg-[#1A1A1A]" />
            <div className="h-2 bg-[#1E1E1E] w-3/4 rounded-sm" />
            <div className="h-2 bg-[#1E1E1E] w-full rounded-sm" />
            <div className="h-2 bg-[#1E1E1E] w-2/3 rounded-sm" />
          </div>
        ))}
      </div>

      {/* "Próximamente" badge centrado */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-[#0A0A0A]/80 border border-[#2A2A2A] px-6 py-3 backdrop-blur-sm">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#C8A96E]">En desarrollo</span>
        </div>
      </div>
    </div>
  )
}
