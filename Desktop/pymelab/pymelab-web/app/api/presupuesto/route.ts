import { Resend } from 'resend'
import { NextResponse } from 'next/server'

/* ─── Label maps ─────────────────────────────────────────────────── */
const labels: Record<string, Record<string, string>> = {
  automation: {
    whatsapp:     'Bot de WhatsApp',
    email:        'Email Automation',
    leads:        'Captura de Leads',
    integrations: 'Integraciones (CRM, Sheets, Calendar…)',
    reports:      'Informes Automáticos',
  },
  sector: {
    health:    'Clínica / Salud / Dentista',
    food:      'Restaurante / Hostelería',
    services:  'Servicios profesionales',
    ecommerce: 'E-commerce / Tienda online',
    other:     'Otro sector',
  },
  tools: {
    sheets:   'Google Sheets / Drive',
    crm:      'HubSpot / Pipedrive / CRM',
    shop:     'Shopify / WooCommerce',
    calendar: 'Calendly / Acuity',
    none:     'Empezamos desde cero',
  },
  web: {
    no:      'No, ya tiene web',
    landing: 'Sí, quiere landing page (+299€)',
    full:    'Sí, quiere web completa (+499€)',
  },
  plan: {
    esencial: 'Plan Esencial — 497€ + 97€/mes',
    premium:  'Plan Premium — 997€ + 197€/mes',
    unknown:  'Aún no lo tiene claro',
  },
}

const stepNames: Record<string, string> = {
  automation: '¿Qué quiere automatizar?',
  sector:     'Sector del negocio',
  tools:      'Herramientas actuales',
  web:        '¿Necesita web?',
  plan:       'Plan seleccionado',
}

function resolveLabel(stepId: string, value: string | string[]): string {
  const map = labels[stepId] ?? {}
  if (Array.isArray(value)) {
    return value.map(v => map[v] ?? v).join(', ') || '—'
  }
  return map[value] ?? value
}

/* ─── HTML email template ────────────────────────────────────────── */
function buildHtml(body: {
  selections: Record<string, string | string[]>
  estimatedPrice: number
  monthlyExtra: number
  formData: { name: string; email: string; phone: string; company: string; notes: string }
}) {
  const { selections, estimatedPrice, monthlyExtra, formData } = body

  const stepRows = Object.entries(selections)
    .filter(([id]) => stepNames[id])
    .map(([id, val]) => `
      <tr>
        <td style="padding:10px 16px;color:#888;font-size:13px;border-bottom:1px solid #1e1e1e;white-space:nowrap">${stepNames[id]}</td>
        <td style="padding:10px 16px;color:#f0ede8;font-size:13px;border-bottom:1px solid #1e1e1e">${resolveLabel(id, val)}</td>
      </tr>
    `).join('')

  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

        <!-- Header -->
        <tr>
          <td style="padding:0 0 32px">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#c8a96e">PyMeLab</p>
            <h1 style="margin:0;font-size:28px;font-weight:300;font-style:italic;color:#f0ede8;line-height:1.2">
              Nuevo presupuesto<br><span style="color:#c8a96e;font-weight:700;font-style:normal">recibido</span>
            </h1>
          </td>
        </tr>

        <!-- Contact info -->
        <tr>
          <td style="background:#141414;border:1px solid #2a2a2a;padding:24px;margin-bottom:16px">
            <p style="margin:0 0 16px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#666">Datos de contacto</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:6px 0;color:#888;font-size:13px;width:100px">Nombre</td>
                <td style="padding:6px 0;color:#f0ede8;font-size:13px;font-weight:500">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#888;font-size:13px">Email</td>
                <td style="padding:6px 0;font-size:13px"><a href="mailto:${formData.email}" style="color:#c8a96e;text-decoration:none">${formData.email}</a></td>
              </tr>
              ${formData.phone ? `<tr><td style="padding:6px 0;color:#888;font-size:13px">Teléfono</td><td style="padding:6px 0;color:#f0ede8;font-size:13px">${formData.phone}</td></tr>` : ''}
              ${formData.company ? `<tr><td style="padding:6px 0;color:#888;font-size:13px">Empresa</td><td style="padding:6px 0;color:#f0ede8;font-size:13px">${formData.company}</td></tr>` : ''}
            </table>
          </td>
        </tr>

        <tr><td style="height:12px"></td></tr>

        <!-- Selections -->
        <tr>
          <td style="background:#141414;border:1px solid #2a2a2a;padding:24px">
            <p style="margin:0 0 16px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#666">Lo que ha seleccionado</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${stepRows}
            </table>
          </td>
        </tr>

        <tr><td style="height:12px"></td></tr>

        <!-- Price estimate -->
        <tr>
          <td style="background:#141414;border:1px solid #c8a96e40;padding:24px;text-align:center">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#666">Estimación de presupuesto</p>
            <p style="margin:0;font-size:42px;font-weight:300;font-style:italic;color:#c8a96e">desde ${estimatedPrice}€</p>
            ${monthlyExtra > 0 ? `<p style="margin:6px 0 0;font-size:14px;color:#c8a96e99">+ ${monthlyExtra}€/mes en servicios opcionales</p>` : ''}
            <p style="margin:10px 0 0;font-size:11px;color:#444">Presupuesto orientativo · El precio final puede variar según los detalles</p>
          </td>
        </tr>

        ${formData.notes ? `
        <tr><td style="height:12px"></td></tr>
        <tr>
          <td style="background:#141414;border:1px solid #2a2a2a;padding:24px">
            <p style="margin:0 0 10px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#666">Notas del cliente</p>
            <p style="margin:0;font-size:14px;color:#888;line-height:1.6">${formData.notes}</p>
          </td>
        </tr>` : ''}

        <!-- Footer -->
        <tr>
          <td style="padding:32px 0 0;text-align:center">
            <p style="margin:0;font-size:11px;color:#333">PyMeLab · <a href="https://pymelab.es" style="color:#c8a96e;text-decoration:none">pymelab.es</a></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `
}

/* ─── Route handler ──────────────────────────────────────────────── */
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { formData } = body

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data, error } = await resend.emails.send({
      from:    'PyMeLab <contacto@pymelabagency.com>',
      to:      process.env.CONTACT_EMAIL!,
      replyTo: formData.email,
      subject: `💼 Nuevo presupuesto — ${formData.name}${formData.company ? ` (${formData.company})` : ''}`,
      html:    buildHtml(body),
    })

    if (error) {
      console.error('[presupuesto] Resend error:', JSON.stringify(error))
      return NextResponse.json({ ok: false, error }, { status: 500 })
    }

    console.log('[presupuesto] Email sent OK, id:', data?.id)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[presupuesto] API error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
