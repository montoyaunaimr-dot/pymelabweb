export default function SoloTuyoMockup() {
  return (
    <div
      className="absolute inset-0 origin-top-left overflow-hidden"
      style={{ width: '200%', height: '200%', transform: 'scale(0.5)', pointerEvents: 'none', background: '#fff' }}
    >
      {/* ── Announcement bar ── */}
      <div style={{
        background: '#f7f7f7', borderBottom: '1px solid #e8e8e8',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '6px 16px', fontSize: 11, color: '#444', gap: 6,
      }}>
        <span>🛍️</span>
        <span>Envío GRATIS en pedidos superiores a 100€</span>
      </div>

      {/* ── Navigation ── */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 32px', borderBottom: '1px solid #eee',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 52, height: 52, borderRadius: '50%',
            border: '1px solid #ccc',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: 18, fontStyle: 'italic', color: '#444' }}>S</span>
          </div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontSize: 13, fontStyle: 'italic', color: '#333', fontFamily: 'Georgia, serif' }}>SoloTuyo</div>
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 20 }}>
          {['Inicio', 'Para el', 'Para ella', 'Personalizables', 'Día De La Madre', 'Contacto'].map((l, i) => (
            <span key={l} style={{
              fontSize: 11, color: '#333',
              borderBottom: i === 0 ? '1px solid #333' : 'none',
              paddingBottom: 1,
            }}>{l}</span>
          ))}
        </div>

        {/* Icons */}
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          {[
            <svg key="s" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
            <svg key="u" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
            <div key="c" style={{ position: 'relative' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <div style={{
                position: 'absolute', top: -5, right: -5,
                width: 12, height: 12, borderRadius: '50%',
                background: '#e91e8c', color: '#fff',
                fontSize: 7, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>1</div>
            </div>,
          ]}
        </div>
      </nav>

      {/* ── Hero ── */}
      <div style={{
        display: 'flex', background: '#fce4ec',
        minHeight: 340, position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative leaves */}
        <div style={{
          position: 'absolute', right: 200, top: 20, opacity: 0.18,
          fontSize: 80, color: '#e91e8c', transform: 'rotate(-20deg)',
        }}>🌿</div>

        {/* Left: text */}
        <div style={{ flex: 1, padding: '32px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
          {/* Floating heart */}
          <div style={{ position: 'absolute', top: 24, left: 80, color: '#f06292', fontSize: 22, opacity: 0.7 }}>♡</div>

          {/* Script line */}
          <div style={{
            fontFamily: 'Georgia, serif', fontStyle: 'italic',
            fontSize: 30, color: '#c2185b', lineHeight: 1.15, marginBottom: 4,
          }}>
            Regala momentos
          </div>

          {/* Bold line */}
          <div style={{
            fontFamily: 'Arial, sans-serif', fontWeight: 900,
            fontSize: 46, color: '#1a1a1a', lineHeight: 1.0, marginBottom: 8,
          }}>
            que emocionan
          </div>

          {/* Pink underline */}
          <div style={{
            height: 3, width: 210, borderRadius: 2, marginBottom: 14,
            background: 'linear-gradient(90deg, #e91e8c 0%, #f8bbd0 100%)',
          }} />

          {/* Hearts row */}
          <div style={{ color: '#f06292', fontSize: 13, letterSpacing: 8, marginBottom: 14 }}>♥ ♥</div>

          {/* Subtitle */}
          <div style={{ fontSize: 13, color: '#555' }}>Detalles únicos y personalizados</div>
        </div>

        {/* Right: product photography */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', paddingRight: 32 }}>
          {/* Gift box */}
          <div style={{
            width: 200, height: 180, borderRadius: 6,
            background: 'linear-gradient(145deg, #d4a867 0%, #b8893e 100%)',
            position: 'relative', display: 'flex', alignItems: 'flex-end',
            justifyContent: 'center', paddingBottom: 12, overflow: 'hidden',
          }}>
            {/* Box texture lines */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.15 }}>
              {[...Array(12)].map((_, i) => (
                <div key={i} style={{ height: 1, background: '#5a3010', marginTop: i * 14 }} />
              ))}
            </div>

            {/* Mug */}
            <div style={{
              width: 72, height: 82, background: '#fff',
              borderRadius: '4px 4px 10px 10px',
              border: '1px solid #ddd',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 6, position: 'absolute', left: 32, bottom: 14,
              boxShadow: '2px 2px 6px rgba(0,0,0,0.12)',
            }}>
              <div style={{ fontSize: 7.5, color: '#222', textAlign: 'center', lineHeight: 1.45 }}>
                Gracias<br />por tanto,<br />
                <span style={{ color: '#e91e8c', fontSize: 9 }}>♥</span><br />
                <strong style={{ fontSize: 9 }}>MAMÁ</strong>
              </div>
            </div>

            {/* Card */}
            <div style={{
              width: 50, height: 68, background: '#fafafa',
              borderRadius: 3, border: '1px solid #eee',
              position: 'absolute', right: 28, bottom: 16,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 3,
            }}>
              <div style={{ fontSize: 7, fontStyle: 'italic', color: '#555', textAlign: 'center', lineHeight: 1.3 }}>
                Hecho<br />con amor
              </div>
              <div style={{ color: '#e91e8c', fontSize: 8 }}>♥</div>
            </div>
          </div>

          {/* "Detalles hechos con amor" badge */}
          <div style={{
            position: 'absolute', top: 16, right: 40,
            width: 76, height: 76, borderRadius: '50%',
            background: '#f8bbd0',
            border: '2px dashed #e91e8c',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 2,
          }}>
            <div style={{
              fontSize: 6.5, color: '#880e4f', textAlign: 'center',
              lineHeight: 1.5, textTransform: 'uppercase', letterSpacing: 0.5,
              fontWeight: 600,
            }}>
              DETALLES<br />
              <span style={{ fontSize: 9, color: '#e91e8c' }}>♥</span><br />
              HECHOS<br />CON AMOR
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
