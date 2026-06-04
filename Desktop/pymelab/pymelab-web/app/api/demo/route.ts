import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const SECTOR_LABELS: Record<string, string> = {
  health:    'Salud / Clínica / Dentista',
  food:      'Hostelería / Restaurante',
  ecommerce: 'E-commerce / Tienda online',
  services:  'Servicios profesionales',
  other:     'Otro sector',
}

const SIZE_LABELS: Record<string, string> = {
  '1':    'Solo (autónomo)',
  '2-5':  '2 – 5 personas',
  '6-20': '6 – 20 personas',
  '20+':  'Más de 20 personas',
}

const PROCESS_LABELS: Record<string, string> = {
  whatsapp:  'Bot de WhatsApp con IA',
  email:     'Email Automation',
  leads:     'Captura de leads',
  reports:   'Informes automáticos',
  integrate: 'Integración de herramientas',
  other:     'Otro proceso',
}

function buildHtml(body: {
  sector: string
  size: string
  processes: string[]
  form: { name: string; email: string; phone: string; company: string; notes: string }
}) {
  const { sector, size, processes, form } = body

  const processList = processes
    .map(p => `<li style="padding:4px 0;color:#f0ede8;font-size:13px">→ ${PROCESS_LABELS[p] ?? p}</li>`)
    .join('')

  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

        <tr>
          <td style="padding:0 0 28px">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#c8a96e">PyMeLab</p>
            <h1 style="margin:0;font-size:28px;font-weight:300;font-style:italic;color:#f0ede8;line-height:1.2">
              Nueva solicitud de<br><span style="color:#c8a96e;font-weight:700;font-style:normal">demo</span>
            </h1>
          </td>
        </tr>

        <!-- Contacto -->
        <tr>
          <td style="background:#141414;border:1px solid #2a2a2a;padding:24px">
            <p style="margin:0 0 14px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#666">Datos de contacto</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="padding:5px 0;color:#888;font-size:13px;width:110px">Nombre</td><td style="padding:5px 0;color:#f0ede8;font-size:13px;font-weight:500">${form.name}</td></tr>
              <tr><td style="padding:5px 0;color:#888;font-size:13px">Email</td><td style="padding:5px 0;font-size:13px"><a href="mailto:${form.email}" style="color:#c8a96e;text-decoration:none">${form.email}</a></td></tr>
              ${form.phone   ? `<tr><td style="padding:5px 0;color:#888;font-size:13px">Teléfono</td><td style="padding:5px 0;color:#f0ede8;font-size:13px">${form.phone}</td></tr>` : ''}
              ${form.company ? `<tr><td style="padding:5px 0;color:#888;font-size:13px">Empresa</td><td style="padding:5px 0;color:#f0ede8;font-size:13px">${form.company}</td></tr>` : ''}
            </table>
          </td>
        </tr>

        <tr><td style="height:12px"></td></tr>

        <!-- Su empresa -->
        <tr>
          <td style="background:#141414;border:1px solid #2a2a2a;padding:24px">
            <p style="margin:0 0 14px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#666">Su empresa</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="padding:5px 0;color:#888;font-size:13px;width:110px">Sector</td><td style="padding:5px 0;color:#f0ede8;font-size:13px">${SECTOR_LABELS[sector] ?? sector}</td></tr>
              <tr><td style="padding:5px 0;color:#888;font-size:13px">Tamaño</td><td style="padding:5px 0;color:#f0ede8;font-size:13px">${SIZE_LABELS[size] ?? size}</td></tr>
            </table>
          </td>
        </tr>

        <tr><td style="height:12px"></td></tr>

        <!-- Procesos -->
        <tr>
          <td style="background:#141414;border:1px solid #c8a96e40;padding:24px">
            <p style="margin:0 0 14px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#666">Quiere automatizar</p>
            <ul style="margin:0;padding:0;list-style:none">${processList}</ul>
          </td>
        </tr>

        ${form.notes ? `
        <tr><td style="height:12px"></td></tr>
        <tr>
          <td style="background:#141414;border:1px solid #2a2a2a;padding:24px">
            <p style="margin:0 0 10px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#666">Notas adicionales</p>
            <p style="margin:0;font-size:14px;color:#888;line-height:1.6">${form.notes}</p>
          </td>
        </tr>` : ''}

        <tr>
          <td style="padding:28px 0 0;text-align:center">
            <p style="margin:0;font-size:11px;color:#333">PyMeLab · <a href="https://pymelabagency.com" style="color:#c8a96e;text-decoration:none">pymelabagency.com</a></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { form } = body

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from:    'PyMeLab <contacto@pymelabagency.com>',
      to:      process.env.CONTACT_EMAIL!,
      replyTo: form.email,
      subject: `🎯 Demo solicitada — ${form.name}${form.company ? ` (${form.company})` : ''}`,
      html:    buildHtml(body),
    })

    if (error) {
      console.error('[demo] Resend error:', JSON.stringify(error))
      return NextResponse.json({ ok: false, error }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[demo] API error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
