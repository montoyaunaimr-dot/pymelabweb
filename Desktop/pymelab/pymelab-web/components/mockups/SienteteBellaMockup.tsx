/*
  Mockup CSS fiel a sientetebella.es — reproducido a partir del screenshot.
  Se renderiza dentro de BrowserFrame (overflow hidden).
  Usa transform scale para que se vea bien a tamaño reducido.
*/
export default function SienteteBellaMockup() {
  return (
    <div
      className="absolute inset-0 origin-top-left bg-white overflow-hidden"
      style={{ width: '200%', height: '200%', transform: 'scale(0.5)', pointerEvents: 'none' }}
    >
      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border border-rose-300 rounded-full flex items-center justify-center">
            <span className="text-rose-400 text-[10px] font-serif italic">SB</span>
          </div>
          <span className="text-[11px] tracking-[0.3em] uppercase text-gray-400 font-light">Siéntete Bella</span>
        </div>
        {/* Links */}
        <div className="flex items-center gap-8">
          <span className="text-[13px] text-gray-700">Inicio</span>
          <span className="text-[13px] text-gray-700">Catálogo</span>
          <span className="text-[13px] text-gray-700">Contacto</span>
        </div>
        {/* Icons */}
        <div className="flex items-center gap-5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <div className="relative w-full bg-gray-100 overflow-hidden" style={{ height: '340px' }}>
        {/* Branded bags simulation */}
        <div className="absolute inset-0 flex items-center justify-center gap-6">
          {/* Bags row */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center justify-center bg-white shadow-sm"
              style={{
                width: i === 2 ? '120px' : '90px',
                height: i === 2 ? '140px' : '110px',
                transform: i === 1 ? 'rotate(-4deg)' : i === 3 ? 'rotate(3deg)' : 'none',
              }}
            >
              {/* Brand name on bag */}
              <span
                className="font-serif text-gray-800 select-none"
                style={{ fontSize: i === 2 ? '11px' : '9px', letterSpacing: '0.02em' }}
              >
                Siéntete Bella
              </span>
              {/* Ribbon */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-px h-3 bg-gray-800" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
                <div className="w-3 h-2 bg-gray-800 rounded-tl-full rounded-bl-full" />
                <div className="w-3 h-2 bg-gray-800 rounded-tr-full rounded-br-full" />
              </div>
            </div>
          ))}

          {/* "Model" overlay — abstract silhouette */}
          <div
            className="absolute bg-gray-800 rounded-t-full opacity-20"
            style={{ width: '80px', height: '160px', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}
          />
        </div>

        {/* CTA button */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button className="px-8 py-2.5 border border-gray-800 text-gray-800 text-[12px] tracking-[0.15em] bg-white/80 backdrop-blur-sm">
            Descubre más
          </button>
        </div>
      </div>

      {/* ── PRODUCTS ROW ────────────────────────────────────── */}
      <div className="px-8 py-6">
        <p className="text-[11px] tracking-[0.25em] uppercase text-gray-400 mb-4 text-center">Colección</p>
        <div className="grid grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="bg-gray-50 aspect-square rounded-none" />
              <div className="h-2 bg-gray-100 w-3/4" />
              <div className="h-2 bg-gray-100 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
