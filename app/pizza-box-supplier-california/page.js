import Link from 'next/link'
import { SITE_URL, BRAND, products } from '@/lib/content'
import { BreadcrumbNav, QuoteCTA, LeadForm } from '@/components/sections'

export const metadata = {
  title: 'Wholesale Pizza Box Supplier — California | Container & Pallet Programs',
  description: 'Wholesale pizza box supplier for California buyers. Container and pallet programs for distributors, restaurant groups and foodservice buyers. Request wholesale pricing.',
  alternates: { canonical: `${SITE_URL}/pizza-box-supplier-california` },
  openGraph: {
    title: 'Wholesale Pizza Box Supplier — California',
    description: 'Container-volume pizza box supply for California distributors and chains.',
    url: `${SITE_URL}/pizza-box-supplier-california`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Pizza Box Supplier — California' },
]

export default function SupplierCaliforniaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />

      <div className="mb-10">
        <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
          Wholesale Pizza Box Supplier — California
        </h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
          Wholesale pizza box supply for California-based buyers. Container and pallet programs for foodservice distributors, restaurant groups and high-volume buyers. Delivery and logistics planning for California destinations.
        </p>
      </div>

      <section className="mb-12">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">California Supply Programs</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          California is one of the largest foodservice markets in the United States. We work with California-based distributors, restaurant chains and packaging buyers requiring container-scale supply and competitive wholesale pricing.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Available products include wholesale, bulk, custom-printed, white, kraft and corrugated pizza boxes in all standard sizes. Container and pallet programs with freight planning for California ports and distribution points.
        </p>
      </section>

      <section style={{ background: 'var(--color-wpb-gray)', borderRadius: '12px' }} className="p-6 sm:p-10 mb-0">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl font-bold mb-3 text-center">Request Pricing — California</h2>
        <p className="text-gray-600 text-center mb-8">Container and pallet programs for California buyers.</p>
        <div style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '12px' }} className="p-6 sm:p-8 max-w-3xl mx-auto">
          <LeadForm sourcePage="/pizza-box-supplier-california" />
        </div>
      </section>
    </div>
  )
}
