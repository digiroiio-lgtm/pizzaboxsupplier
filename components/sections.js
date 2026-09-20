'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_URL, RFQ_COMPANY_TYPES, RFQ_VOLUME_TIERS, RFQ_FREQUENCIES, VALUE_PROPS } from '@/lib/content'

export function ValuePropBadges() {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {VALUE_PROPS.map((prop) => (
        <span
          key={prop}
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#e8ecf4',
          }}
          className="px-3 py-1 text-xs font-medium rounded-full"
        >
          {prop}
        </span>
      ))}
    </div>
  )
}

export function TrustSignals() {
  return (
    <div
      style={{ background: 'var(--color-wpb-gray-mid)', borderTop: '1px solid var(--color-wpb-gray-border)', borderBottom: '1px solid var(--color-wpb-gray-border)' }}
      className="py-4 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm font-medium" style={{ color: 'var(--color-wpb-navy)' }}>
          {VALUE_PROPS.map((prop, i) => (
            <div key={prop} className="flex items-center gap-2">
              {i > 0 && <span className="hidden sm:inline text-gray-400" aria-hidden="true">·</span>}
              <span>{prop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function QuoteCTA({ heading, subheading, compact }) {
  const h = heading || 'Ready to Discuss Your Program?'
  const s = subheading || 'Request container pricing for your volume requirements. We work with distributors, chains and high-volume buyers.'
  return (
    <div
      style={{ background: 'var(--color-wpb-navy)', color: 'white' }}
      className={`rounded-lg px-6 ${compact ? 'py-8' : 'py-12'} text-center`}
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-3">{h}</h2>
      <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">{s}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/get-quote"
          style={{ background: 'var(--color-wpb-red)' }}
          className="inline-flex items-center px-6 py-3 font-bold text-white rounded hover:opacity-90 transition-opacity"
        >
          Request Container Pricing
        </Link>
        <Link
          href="/products"
          style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'white' }}
          className="inline-flex items-center px-6 py-3 font-semibold rounded hover:bg-white/10 transition-colors"
        >
          View Products
        </Link>
      </div>
    </div>
  )
}

export function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
      className="group block rounded-lg p-5 hover:shadow-md transition-shadow"
    >
      <div
        style={{ position: 'relative', width: '100%', height: '140px', borderRadius: '4px', marginBottom: '12px', overflow: 'hidden', background: 'var(--color-wpb-gray)' }}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect x="4" y="12" width="32" height="20" rx="2" stroke="var(--color-wpb-navy)" strokeWidth="2"/>
              <path d="M4 17h32" stroke="var(--color-wpb-navy)" strokeWidth="1.5"/>
              <path d="M12 12V8a2 2 0 012-2h12a2 2 0 012 2v4" stroke="var(--color-wpb-navy)" strokeWidth="2"/>
            </svg>
          </div>
        )}
      </div>
      <h3
        style={{ color: 'var(--color-wpb-navy)' }}
        className="font-bold text-base mb-1 group-hover:underline"
      >
        {product.title}
      </h3>
      <p className="text-sm text-gray-600 leading-snug mb-3 line-clamp-2">{product.description}</p>
      <div style={{ color: 'var(--color-wpb-red)' }} className="text-xs font-semibold">
        Request Pricing →
      </div>
    </Link>
  )
}

export function SizeCard({ size }) {
  return (
    <Link
      href={`/pizza-box-sizes/${size.slug}`}
      style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
      className="group flex flex-col items-center rounded-lg p-4 hover:shadow-md transition-shadow text-center"
    >
      <div
        style={{
          background: 'var(--color-wpb-navy)',
          color: 'white',
          width: '56px',
          height: '56px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        {size.shortTitle}
      </div>
      <div style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm group-hover:underline">
        {size.inches} Inch
      </div>
      <div className="text-xs text-gray-500 mt-1 line-clamp-2">{size.commonUses[0]}</div>
    </Link>
  )
}

export function IndustryCard({ industry }) {
  return (
    <div
      style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
      className="rounded-lg p-5"
    >
      <h3 style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-base mb-2">
        {industry.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{industry.description}</p>
    </div>
  )
}

export function ContainerVolumeSection() {
  const tiers = [
    { label: 'Box', sub: 'Individual unit', icon: '📦' },
    { label: 'Case', sub: 'Packed for shipment', icon: '🗃️' },
    { label: 'Pallet', sub: 'Cases stacked & strapped', icon: '🏗️' },
    { label: 'Container', sub: 'Full load procurement', icon: '🚢' },
    { label: 'Program', sub: 'Recurring supply agreement', icon: '🔄' },
  ]
  return (
    <section style={{ background: 'var(--color-wpb-navy)' }} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            How We Think About Volume
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our programs are designed for buyers who think in pallets and containers — not individual boxes.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-0 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <div key={tier.label} className="flex flex-col sm:flex-row items-center">
              <div
                style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.07)' }}
                className="flex flex-col items-center text-center rounded-lg p-4 sm:p-5 min-w-[100px] sm:min-w-[120px]"
              >
                <div className="text-3xl mb-2" aria-hidden="true">{tier.icon}</div>
                <div className="font-bold text-white text-sm">{tier.label}</div>
                <div className="text-xs text-gray-400 mt-1">{tier.sub}</div>
              </div>
              {i < tiers.length - 1 && (
                <div className="flex items-center justify-center my-1 sm:my-0 sm:mx-1" aria-hidden="true">
                  <svg className="rotate-90 sm:rotate-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10h10M10 5l5 5-5 5" stroke="var(--color-wpb-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/get-quote"
            style={{ background: 'var(--color-wpb-red)' }}
            className="inline-flex items-center px-7 py-3 font-bold text-white rounded hover:opacity-90 transition-opacity"
          >
            Request Container Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}

export function SpecTable({ rows, caption }) {
  return (
    <div className="overflow-x-auto">
      <table style={{ border: '1px solid var(--color-wpb-gray-border)' }} className="w-full text-sm border-collapse">
        {caption && (
          <caption className="text-left text-xs text-gray-500 mb-2 font-medium">{caption}</caption>
        )}
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} style={{ borderBottom: '1px solid var(--color-wpb-gray-border)' }}>
              <td
                style={{ background: 'var(--color-wpb-gray)', color: 'var(--color-wpb-navy)' }}
                className="px-4 py-3 font-semibold w-2/5 align-top"
              >
                {label}
              </td>
              <td className="px-4 py-3 text-gray-700 align-top">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function FAQSection({ faqs }) {
  return (
    <div className="space-y-3">
      {faqs.map(({ question, answer }) => (
        <details
          key={question}
          style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
          className="rounded-lg group"
        >
          <summary
            style={{ color: 'var(--color-wpb-navy)' }}
            className="flex items-center justify-between gap-4 px-5 py-4 font-semibold text-sm cursor-pointer list-none hover:bg-gray-50"
          >
            <span>{question}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="flex-shrink-0 transition-transform group-open:rotate-180"
              aria-hidden="true"
            >
              <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed">
            {answer}
          </div>
        </details>
      ))}
    </div>
  )
}

export function BreadcrumbNav({ items }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
        {items.map((item, i) => (
          <li key={item.href || item.label} className="flex items-center gap-1.5">
            {i > 0 && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {item.href ? (
              <Link
                href={item.href}
                style={{ color: 'var(--color-wpb-navy)' }}
                className="hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-gray-700 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function LeadForm({ sourcePage, compact }) {
  const [status, setStatus] = useState('idle')
  const [utms, setUtms] = useState({})

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setUtms({
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
    })
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    const fd = new FormData(e.target)
    const data = {
      fullName: fd.get('fullName'),
      company: fd.get('company'),
      businessEmail: fd.get('businessEmail'),
      phone: fd.get('phone'),
      companyType: fd.get('companyType'),
      deliveryState: fd.get('deliveryState'),
      boxSizes: fd.get('boxSizes'),
      estimatedVolume: fd.get('estimatedVolume'),
      purchaseFrequency: fd.get('purchaseFrequency'),
      boxType: fd.get('boxType'),
      customPrinting: fd.get('customPrinting'),
      message: fd.get('message'),
      source_page: sourcePage || (typeof window !== 'undefined' ? window.location.pathname : ''),
      landing_page: typeof window !== 'undefined' ? window.location.href : '',
      ...utms,
    }
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{ border: '1px solid #86efac', background: '#f0fdf4' }}
        className="rounded-lg p-8 text-center"
      >
        <div className="text-3xl mb-3" aria-hidden="true">✓</div>
        <h3 style={{ color: '#166534' }} className="font-bold text-lg mb-2">Request Received</h3>
        <p className="text-gray-700 text-sm">
          Thank you. We will review your requirements and follow up shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="rf-fullName" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-wpb-navy)' }}>
            Full Name <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="rf-fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            style={{ border: '1px solid var(--color-wpb-gray-border)' }}
            className="w-full rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-0"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="rf-company" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-wpb-navy)' }}>
            Company <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="rf-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            style={{ border: '1px solid var(--color-wpb-gray-border)' }}
            className="w-full rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-0"
            placeholder="Acme Foodservice Distribution"
          />
        </div>
        <div>
          <label htmlFor="rf-email" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-wpb-navy)' }}>
            Business Email <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="rf-email"
            name="businessEmail"
            type="email"
            required
            autoComplete="email"
            style={{ border: '1px solid var(--color-wpb-gray-border)' }}
            className="w-full rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-0"
            placeholder="jane@company.com"
          />
        </div>
        <div>
          <label htmlFor="rf-phone" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-wpb-navy)' }}>
            Phone <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="rf-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            style={{ border: '1px solid var(--color-wpb-gray-border)' }}
            className="w-full rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-0"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div>
          <label htmlFor="rf-companyType" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-wpb-navy)' }}>
            Company Type <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <select
            id="rf-companyType"
            name="companyType"
            required
            defaultValue=""
            style={{ border: '1px solid var(--color-wpb-gray-border)' }}
            className="w-full rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-0"
          >
            <option value="" disabled>Select type…</option>
            {RFQ_COMPANY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="rf-deliveryState" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-wpb-navy)' }}>
            Delivery State / ZIP <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="rf-deliveryState"
            name="deliveryState"
            type="text"
            required
            style={{ border: '1px solid var(--color-wpb-gray-border)' }}
            className="w-full rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-0"
            placeholder="CA or 90210"
          />
        </div>
        <div>
          <label htmlFor="rf-boxSizes" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-wpb-navy)' }}>
            Pizza Box Size(s) <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id="rf-boxSizes"
            name="boxSizes"
            type="text"
            required
            style={{ border: '1px solid var(--color-wpb-gray-border)' }}
            className="w-full rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-0"
            placeholder='e.g. 12", 14", 16"'
          />
        </div>
        <div>
          <label htmlFor="rf-volume" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-wpb-navy)' }}>
            Estimated Order Volume <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <select
            id="rf-volume"
            name="estimatedVolume"
            required
            defaultValue=""
            style={{ border: '1px solid var(--color-wpb-gray-border)' }}
            className="w-full rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-0"
          >
            <option value="" disabled>Select volume…</option>
            {RFQ_VOLUME_TIERS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="rf-frequency" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-wpb-navy)' }}>
            Purchase Frequency <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <select
            id="rf-frequency"
            name="purchaseFrequency"
            required
            defaultValue=""
            style={{ border: '1px solid var(--color-wpb-gray-border)' }}
            className="w-full rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-0"
          >
            <option value="" disabled>Select frequency…</option>
            {RFQ_FREQUENCIES.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="rf-customPrinting" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-wpb-navy)' }}>
            Custom Printing
          </label>
          <select
            id="rf-customPrinting"
            name="customPrinting"
            defaultValue=""
            style={{ border: '1px solid var(--color-wpb-gray-border)' }}
            className="w-full rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-0"
          >
            <option value="">Not sure</option>
            <option value="Yes">Yes — custom print required</option>
            <option value="No">No — plain boxes</option>
          </select>
        </div>
      </div>
      {!compact && (
        <div className="mb-4">
          <label htmlFor="rf-message" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-wpb-navy)' }}>
            Additional Requirements
          </label>
          <textarea
            id="rf-message"
            name="message"
            rows={3}
            style={{ border: '1px solid var(--color-wpb-gray-border)' }}
            className="w-full rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-0 resize-none"
            placeholder="Materials, specifications, delivery timing, or any other requirements…"
          />
        </div>
      )}

      {status === 'error' && (
        <div style={{ border: '1px solid #fca5a5', background: '#fef2f2' }} className="rounded p-3 mb-4 text-sm text-red-700">
          Submission failed. Please email <a href="mailto:sales@wholesalepizzaboxes.com" className="underline">sales@wholesalepizzaboxes.com</a> directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{ background: status === 'loading' ? '#999' : 'var(--color-wpb-red)' }}
        className="w-full py-3.5 font-bold text-white rounded text-sm sm:text-base hover:opacity-90 transition-opacity disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Submitting…' : 'Request Container Pricing'}
      </button>

      <p className="text-xs text-gray-500 mt-3 text-center">
        Best suited for distributors, chains and high-volume buyers requiring container-scale purchasing.
      </p>
    </form>
  )
}
