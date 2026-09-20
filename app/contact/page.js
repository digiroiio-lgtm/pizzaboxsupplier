import Link from 'next/link'
import { SITE_URL, BRAND, CONTACT } from '@/lib/content'
import { BreadcrumbNav, LeadForm } from '@/components/sections'

export const metadata = {
  title: 'Contact — Wholesale Pizza Box Pricing & Inquiries',
  description: 'Contact WholesalePizzaBoxes.com to request container pricing, discuss supply programs or ask about wholesale pizza box availability for your business.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact — Wholesale Pizza Box Pricing & Inquiries',
    description: 'Request container pricing or discuss your wholesale pizza box program.',
    url: `${SITE_URL}/contact`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Contact' },
]

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl font-bold mb-3">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            Send your requirements using the form below, or email us directly. We work with distributors, chains and high-volume buyers.
          </p>
          <div
            style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '12px' }}
            className="p-6 sm:p-8"
          >
            <LeadForm sourcePage="/contact" />
          </div>
        </div>
        <div>
          <div className="sticky top-24 space-y-4">
            <div style={{ background: 'var(--color-wpb-navy)', borderRadius: '12px' }} className="p-6 text-white">
              <h2 className="font-bold text-base mb-3">Contact Information</h2>
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <div className="font-semibold text-white mb-0.5">Email</div>
                  <a href={`mailto:${CONTACT.email}`} style={{ color: '#93c5fd' }} className="hover:underline">{CONTACT.email}</a>
                </div>
              </div>
            </div>
            <div style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white', borderRadius: '12px' }} className="p-5">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-sm mb-3">Request Pricing Directly</h2>
              <p className="text-sm text-gray-600 mb-3">For container pricing requests, use our dedicated form:</p>
              <Link
                href="/get-quote"
                style={{ background: 'var(--color-wpb-red)', color: 'white' }}
                className="block text-center py-2.5 text-sm font-bold rounded hover:opacity-90 transition-opacity"
              >
                Request Container Pricing →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
