import Link from 'next/link'
import { SITE_URL, BRAND, products } from '@/lib/content'
import { BreadcrumbNav, QuoteCTA, LeadForm } from '@/components/sections'

export const metadata = {
  title: 'Wholesale Pizza Box Supplier — New York | Container & Pallet Programs',
  description: 'Wholesale pizza box supplier for New York buyers. Container-volume programs for foodservice distributors, pizza chains and high-volume buyers. Request wholesale pricing.',
  alternates: { canonical: `${SITE_URL}/pizza-box-supplier-new-york` },
  openGraph: {
    title: 'Wholesale Pizza Box Supplier — New York',
    description: 'Container-volume pizza box supply for New York distributors and chains.',
    url: `${SITE_URL}/pizza-box-supplier-new-york`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Pizza Box Supplier — New York' },
]

export default function SupplierNewYorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />

      <div className="mb-10">
        <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
          Wholesale Pizza Box Supplier — New York
        </h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
          Wholesale pizza box supply for New York buyers. Container-volume programs for foodservice distributors, pizza chains and high-volume buyers. Freight planning for New York destinations.
        </p>
      </div>

      <section className="mb-12">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">New York Supply Programs</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          New York is one of the most active pizza markets in the United States, with strong demand across chains, independent pizzerias, and foodservice distribution. We work with New York-based buyers requiring container-scale supply and wholesale pricing.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Available products include all standard pizza box types and sizes. Container and pallet programs with freight coordination for New York port access and regional distribution.
        </p>
      </section>

      <section style={{ background: 'var(--color-wpb-gray)', borderRadius: '12px' }} className="p-6 sm:p-10 mb-0">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl font-bold mb-3 text-center">Request Pricing — New York</h2>
        <p className="text-gray-600 text-center mb-8">Container and pallet programs for New York buyers.</p>
        <div style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '12px' }} className="p-6 sm:p-8 max-w-3xl mx-auto">
          <LeadForm sourcePage="/pizza-box-supplier-new-york" />
        </div>
      </section>
    </div>
  )
}
