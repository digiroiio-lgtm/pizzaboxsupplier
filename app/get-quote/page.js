import Link from 'next/link'
import { SITE_URL, BRAND, CONTACT, VALUE_PROPS } from '@/lib/content'
import { LeadForm, BreadcrumbNav } from '@/components/sections'

export const metadata = {
  title: 'Request Container Pricing — Wholesale Pizza Boxes',
  description: 'Request wholesale pricing for pizza boxes. Container and pallet programs for distributors, restaurant chains, franchise groups and high-volume foodservice buyers.',
  alternates: { canonical: `${SITE_URL}/get-quote` },
  openGraph: {
    title: 'Request Container Pricing — Wholesale Pizza Boxes',
    description: 'Request wholesale pizza box pricing for your distribution or chain program.',
    url: `${SITE_URL}/get-quote`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Request Container Pricing' },
]

export default function GetQuotePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Form column */}
        <div className="lg:col-span-2">
          <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-3">
            Request Container Pricing
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Complete the form below to request wholesale pricing for your pizza box program. We work with distributors, chains and high-volume buyers. We respond to qualified inquiries.
          </p>

          <div
            style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '12px' }}
            className="p-6 sm:p-8"
          >
            <LeadForm sourcePage="/get-quote" />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-5">
            {/* What to expect */}
            <div style={{ background: 'var(--color-wpb-navy)', borderRadius: '12px' }} className="p-6 text-white">
              <h2 className="font-bold text-base mb-3">What to Expect</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  'We review your requirements',
                  'Follow up to clarify your program',
                  'Provide wholesale pricing for your volume',
                  'Coordinate specifications and logistics',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg style={{ color: 'var(--color-wpb-red)', flexShrink: 0, marginTop: '3px' }} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Value props */}
            <div style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white', borderRadius: '12px' }} className="p-5">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-sm mb-3">Program Highlights</h2>
              <ul className="space-y-2">
                {VALUE_PROPS.map((prop) => (
                  <li key={prop} className="flex items-center gap-2 text-sm text-gray-700">
                    <span style={{ background: 'var(--color-wpb-red)', width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0 }} aria-hidden="true" />
                    {prop}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white', borderRadius: '12px' }} className="p-5">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-sm mb-3">Prefer Email?</h2>
              <p className="text-sm text-gray-600 mb-2">Send your requirements directly:</p>
              <a
                href={`mailto:${CONTACT.email}`}
                style={{ color: 'var(--color-wpb-red)' }}
                className="text-sm font-semibold hover:underline break-all"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Who we work with */}
            <div style={{ background: 'var(--color-wpb-gray)', borderRadius: '12px' }} className="p-5">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-sm mb-3">Best Suited For</h2>
              <ul className="space-y-1 text-xs text-gray-700">
                {[
                  'Foodservice Distributors',
                  'Packaging Distributors',
                  'Pizza Chains & Franchise Groups',
                  'Restaurant Supply Distributors',
                  'Food Manufacturers',
                  'Importers & Wholesalers',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span style={{ color: 'var(--color-wpb-red)' }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
