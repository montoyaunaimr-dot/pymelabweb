import { Resend } from 'resend'
import { NextResponse } from 'next/server'

function buildHtml(data: {
  name: string
  email: string
  phone: string
  company: string
  message: string
}) {
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
              Nuevo mensaje<br><span style="color:#c8a96e;font-weight:700;font-style:normal">de contacto</span>
            </h1>
          </td>
        </tr>

        <!-- Contact info -->
        <tr>
          <td style="background:#141414;border:1px solid #2a2a2a;padding:24px">
            <p style="margin:0 0 16px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#666">Datos de contacto</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:6px 0;color:#888;font-size:13px;width:100px">Nombre</td>
                <td style="padding:6px 0;color:#f0ede8;font-size:13px;font-weight:500">${data.name}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#888;font-size:13px">Email</td>
                <td style="padding:6px 0;font-size:13px"><a href="mailto:${data.email}" style="color:#c8a96e;text-decoration:none">${data.email}</a></td>
              </tr>
              ${data.phone ? `<tr><td style="padding:6px 0;color:#888;font-size:13px">Teléfono</td><td style="padding:6px 0;color:#f0ede8;font-size:13px">${data.phone}</td></tr>` : ''}
              ${data.company ? `<tr><td style="padding:6px 0;color:#888;font-size:13px">Empresa</td><td style="padding:6px 0;color:#f0ede8;font-size:13px">${data.company}</td></tr>` : ''}
            </table>
          </td>
        </tr>

        <tr><td style="height:12px"></td></tr>

        <!-- Message -->
        <tr>
          <td style="background:#141414;border:1px solid #2a2a2a;padding:24px">
            <p style="margin:0 0 12px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#666">Mensaje</p>
            <p style="margin:0;font-size:14px;color:#b0ada8;line-height:1.7;white-space:pre-wrap">${data.message}</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:32px 0 0;text-align:center">
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
    const data = await req.json()
    const { name, email, phone, company, message } = data

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Faltan campos obligatorios' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data: resendData, error } = await resend.emails.send({
      from:    'PyMeLab <contacto@pymelabagency.com>',
      to:      process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `✉️ Nuevo mensaje — ${name}${company ? ` (${company})` : ''}`,
      html:    buildHtml({ name, email, phone: phone ?? '', company: company ?? '', message }),
    })

    if (error) {
      console.error('[contacto] Resend error:', JSON.stringify(error))
      return NextResponse.json({ ok: false, error }, { status: 500 })
    }

    console.log('[contacto] Email sent OK, id:', resendData?.id)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contacto] API error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
