import Link from 'next/link'
import { SITE_URL, BRAND, products, sizes } from '@/lib/content'
import { BreadcrumbNav, QuoteCTA, LeadForm } from '@/components/sections'

export const metadata = {
  title: 'Wholesale Pizza Box Supplier — USA | High-Volume Supply Programs',
  description: 'Wholesale pizza box supplier for U.S. buyers. Container-volume programs for foodservice distributors, restaurant chains and high-volume buyers nationwide. Request pricing.',
  alternates: { canonical: `${SITE_URL}/pizza-box-supplier-usa` },
  openGraph: {
    title: 'Wholesale Pizza Box Supplier — USA',
    description: 'Container-volume pizza box supply for U.S. distributors, chains and high-volume buyers.',
    url: `${SITE_URL}/pizza-box-supplier-usa`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Pizza Box Supplier — USA' },
]

export default function SupplierUSAPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />

      <div className="mb-10">
        <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
          Wholesale Pizza Box Supplier — USA
        </h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
          Container-volume pizza box supply programs for U.S. buyers. We work with foodservice distributors, restaurant chains, franchise groups and high-volume buyers across the United States.
        </p>
      </div>

      <section className="mb-14">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">U.S. Supply Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="text-gray-600 leading-relaxed">
            We supply wholesale pizza boxes to U.S. buyers requiring container-scale purchasing. Our programs are designed for distributors, chains and procurement buyers who need consistent specification, reliable supply and competitive volume pricing.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Supply programs include container and pallet-scale ordering, custom printing, private-label options and recurring supply for established buyers. Freight planning and logistics coordination are part of the program.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-5">Available Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.slice(0, 6).map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
              className="group block rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm group-hover:underline">{product.title}</div>
              <div className="text-xs text-gray-500 mt-1">{product.sizes.join(', ')}</div>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/products" style={{ color: 'var(--color-wpb-red)' }} className="text-sm font-semibold hover:underline">
            View all products →
          </Link>
        </div>
      </section>

      <section style={{ background: 'var(--color-wpb-gray)', borderRadius: '12px' }} className="p-6 sm:p-10 mb-0">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl font-bold mb-3 text-center">Request Container Pricing</h2>
        <p className="text-gray-600 text-center mb-8">Container and pallet programs for U.S. buyers.</p>
        <div style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '12px' }} className="p-6 sm:p-8 max-w-3xl mx-auto">
          <LeadForm sourcePage="/pizza-box-supplier-usa" />
        </div>
      </section>
    </div>
  )
}
