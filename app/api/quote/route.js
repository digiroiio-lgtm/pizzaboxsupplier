import { NextResponse } from 'next/server'

const REQUIRED_FIELDS = ['fullName', 'company', 'businessEmail', 'phone', 'companyType', 'deliveryState', 'boxSizes', 'estimatedVolume', 'purchaseFrequency']

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Validate required fields
  const missing = REQUIRED_FIELDS.filter((f) => !body[f] || String(body[f]).trim() === '')
  if (missing.length > 0) {
    return NextResponse.json({ error: `Missing required fields: ${missing.join(', ')}` }, { status: 400 })
  }

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.businessEmail)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const lead = {
    timestamp: new Date().toISOString(),
    fullName: String(body.fullName).trim(),
    company: String(body.company).trim(),
    businessEmail: String(body.businessEmail).trim().toLowerCase(),
    phone: String(body.phone).trim(),
    companyType: String(body.companyType).trim(),
    deliveryState: String(body.deliveryState).trim(),
    boxSizes: String(body.boxSizes).trim(),
    estimatedVolume: String(body.estimatedVolume).trim(),
    purchaseFrequency: String(body.purchaseFrequency).trim(),
    boxType: body.boxType ? String(body.boxType).trim() : '',
    customPrinting: body.customPrinting ? String(body.customPrinting).trim() : '',
    message: body.message ? String(body.message).trim().slice(0, 2000) : '',
    source_page: body.source_page || '',
    landing_page: body.landing_page || '',
    utm_source: body.utm_source || '',
    utm_medium: body.utm_medium || '',
    utm_campaign: body.utm_campaign || '',
    utm_term: body.utm_term || '',
    utm_content: body.utm_content || '',
  }

  // Structured log — visible in Vercel function logs
  console.log('[WPB RFQ]', JSON.stringify(lead))

  // BUSINESS_DATA_REQUIRED: Configure one of the following to deliver leads:
  //
  // Option A — Resend (recommended for Next.js):
  //   Install: npm install resend
  //   Set env var: RESEND_API_KEY
  //   Set env var: RFQ_TO_EMAIL (recipient address)
  //
  // Option B — Webhook (e.g. CRM, Zapier, Make):
  //   Set env var: RFQ_WEBHOOK_URL
  //
  // The code below is ready to activate once env vars are set.

  if (process.env.RESEND_API_KEY) {
    try {
      const toEmail = process.env.RFQ_TO_EMAIL || 'sales@wholesalepizzaboxes.com'
      const emailBody = Object.entries(lead)
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n')
      // Uses Resend HTTP API directly — no SDK required
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'WPB RFQ <noreply@wholesalepizzaboxes.com>',
          to: [toEmail],
          subject: `New Container Pricing Request — ${lead.company} (${lead.estimatedVolume})`,
          text: emailBody,
        }),
      })
    } catch (err) {
      console.error('[WPB RFQ] Email delivery failed', err?.message)
      // Do not fail the request — lead is logged above
    }
  }

  if (process.env.RFQ_WEBHOOK_URL) {
    try {
      await fetch(process.env.RFQ_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      })
    } catch (err) {
      console.error('[WPB RFQ] Webhook delivery failed', err?.message)
    }
  }

  return NextResponse.json({ ok: true })
}
