import Link from 'next/link'
import { SITE_URL, BRAND, products, sizes } from '@/lib/content'
import { ProductCard, SizeCard, QuoteCTA, BreadcrumbNav } from '@/components/sections'

export const metadata = {
  title: 'Wholesale Pizza Box Products — All Types & Materials',
  description: 'Wholesale pizza box products for high-volume U.S. buyers. Stock, bulk, custom printed, white, kraft, corrugated and premium pizza boxes. Container and pallet programs available.',
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: {
    title: 'Wholesale Pizza Box Products — All Types & Materials',
    description: 'Container-volume pizza box supply for distributors, chains and high-volume buyers.',
    url: `${SITE_URL}/products`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Products' },
]

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />

      <div className="mb-10">
        <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
          Wholesale Pizza Box Products
        </h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed">
          High-volume pizza box supply for U.S. distributors, restaurant chains, franchise groups and foodservice buyers. Container-scale programs available across all product types and sizes.
        </p>
      </div>

      {/* Product grid */}
      <section className="mb-14">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-5">
          Product Range
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Size navigation */}
      <section className="mb-14" style={{ background: 'var(--color-wpb-gray)', borderRadius: '12px', padding: '32px 24px' }}>
        <div className="flex items-end justify-between mb-6">
          <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold">Available Sizes</h2>
          <Link href="/pizza-box-sizes" style={{ color: 'var(--color-wpb-red)' }} className="text-sm font-semibold hover:underline">
            Size Guide →
          </Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {sizes.map((size) => (
            <SizeCard key={size.slug} size={size} />
          ))}
        </div>
      </section>

      {/* Ordering info */}
      <section className="mb-14">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-5">
          Ordering Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'Minimum Orders',
              body: 'Our programs are designed for high-volume buyers. Minimum order quantities are confirmed during the quoting process based on size, material and print specification.',
            },
            {
              title: 'Container Programs',
              body: 'We work with buyers requiring one or more containers of pizza boxes. Container-volume programs include supply planning, consistent specifications and freight coordination.',
            },
            {
              title: 'Custom Printing',
              body: 'Logo and custom-print programs available for chains, franchise groups and private-label buyers. Specifications, artwork requirements and MOQ confirmed at quote.',
            },
          ].map(({ title, body }) => (
            <div key={title} style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }} className="rounded-lg p-5">
              <h3 style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-sm mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <QuoteCTA />
    </div>
  )
}
