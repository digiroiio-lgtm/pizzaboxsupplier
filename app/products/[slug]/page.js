import { notFound } from 'next/navigation'
import Script from 'next/script'
import Link from 'next/link'
import { SITE_URL, BRAND, products, productFaqs, buildFaqSchema } from '@/lib/content'
import { BreadcrumbNav, SpecTable, FAQSection, LeadForm, QuoteCTA } from '@/components/sections'

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }))
}

export function generateMetadata({ params }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return {}
  return {
    title: `${product.title} — Wholesale Supply for U.S. Buyers`,
    description: `${product.description} Container and pallet programs available. Request wholesale pricing.`,
    alternates: { canonical: `${SITE_URL}/products/${product.slug}` },
    openGraph: {
      title: `${product.title} — Wholesale Supply`,
      description: product.description,
      url: `${SITE_URL}/products/${product.slug}`,
      siteName: BRAND.name,
    },
  }
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3)

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: product.title },
  ]

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    brand: { '@type': 'Brand', name: BRAND.name },
    category: 'Wholesale Pizza Box',
    url: `${SITE_URL}/products/${product.slug}`,
  }

  const faqSchema = buildFaqSchema(productFaqs)

  return (
    <>
      <Script id={`product-schema-${product.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Script id={`faq-schema-${product.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <BreadcrumbNav items={breadcrumbs} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Product overview */}
            <section className="mb-10">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Product Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {product.title} are available for high-volume U.S. buyers through container and pallet programs. Our supply programs are designed for distributors, chains and procurement buyers requiring consistent specifications and reliable reorder cycles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Pricing, minimum order quantities, lead times and logistics are confirmed during the quoting process based on your specific requirements.
              </p>
            </section>

            {/* Available sizes */}
            <section className="mb-10">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Available Sizes</h2>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <span
                    key={s}
                    style={{ background: 'var(--color-wpb-gray)', border: '1px solid var(--color-wpb-gray-border)', color: 'var(--color-wpb-navy)' }}
                    className="px-3 py-1.5 text-sm font-medium rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-500">
                Size availability for specific materials and print options is confirmed during quoting.{' '}
                <Link href="/pizza-box-sizes" style={{ color: 'var(--color-wpb-red)' }} className="hover:underline">View size guide →</Link>
              </p>
            </section>

            {/* Specifications */}
            <section className="mb-10">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Specifications</h2>
              <SpecTable
                caption="General specifications — exact values confirmed at quote"
                rows={[
                  ['Material', 'Food-grade corrugated board — grade confirmed at quote'],
                  ['Construction', 'Standard corrugated construction — specification confirmed at quote'],
                  ['Print Options', product.slug.includes('plain') ? 'Unprinted (blank)' : 'Plain, single-color, multi-color or full custom — confirmed at quote'],
                  ['Available Sizes', product.sizes.join(', ')],
                  ['MOQ', 'BUSINESS_DATA_REQUIRED — confirmed during quoting based on size and specification'],
                  ['Lead Time', 'BUSINESS_DATA_REQUIRED — confirmed during quoting based on volume and specification'],
                  ['Pallet Qty', 'BUSINESS_DATA_REQUIRED — confirmed during quoting based on size and board grade'],
                  ['Container Qty', 'BUSINESS_DATA_REQUIRED — confirmed during quoting based on size and pallet configuration'],
                ]}
              />
              <p className="mt-3 text-xs text-gray-500">
                BUSINESS_DATA_REQUIRED entries are confirmed with exact values during the pricing process.
              </p>
            </section>

            {/* Buyer use cases */}
            <section className="mb-10">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Typical Buyer Programs</h2>
              <ul className="space-y-2">
                {product.uses.map((use) => (
                  <li key={use} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg style={{ color: 'var(--color-wpb-red)', flexShrink: 0, marginTop: '3px' }} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {use}
                  </li>
                ))}
              </ul>
            </section>

            {/* Ordering */}
            <section className="mb-10">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Ordering & Supply Programs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Container Programs', desc: 'Full container purchasing for distributors and high-volume buyers. Quantities and logistics confirmed during quoting.' },
                  { title: 'Pallet Orders', desc: 'Pallet-scale ordering available. Pallet quantities per SKU confirmed based on size and board specification.' },
                  { title: 'Custom Print', desc: product.slug.includes('plain') ? 'Available as unprinted blank stock for in-house print programs.' : 'Custom printing available — artwork, colors and specifications confirmed at quote.' },
                  { title: 'Recurring Supply', desc: 'Recurring supply programs for consistent inventory. Reorder schedules confirmed with your procurement team.' },
                ].map(({ title, desc }) => (
                  <div key={title} style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }} className="rounded-lg p-4">
                    <h3 style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm mb-1">{title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-5">Frequently Asked Questions</h2>
              <FAQSection faqs={productFaqs} />
            </section>

            {/* Related products */}
            <section className="mb-10">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-5">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
                    className="group block rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm mb-1 group-hover:underline">{p.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{p.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div
                style={{ background: 'var(--color-wpb-navy)', borderRadius: '12px' }}
                className="p-6 mb-4"
              >
                <h2 className="text-lg font-bold text-white mb-2">Request Container Pricing</h2>
                <p className="text-gray-300 text-sm mb-5">
                  Get wholesale pricing for {product.title}. Container and pallet programs available.
                </p>
                <Link
                  href="/get-quote"
                  style={{ background: 'var(--color-wpb-red)' }}
                  className="block text-center py-3 font-bold text-white rounded hover:opacity-90 transition-opacity text-sm"
                >
                  Request Container Pricing
                </Link>
              </div>
              <div style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }} className="rounded-lg p-5 text-sm">
                <h3 style={{ color: 'var(--color-wpb-navy)' }} className="font-bold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/products" style={{ color: 'var(--color-wpb-red)' }} className="hover:underline">← All Products</Link></li>
                  <li><Link href="/pizza-box-sizes" style={{ color: 'var(--color-wpb-navy)' }} className="hover:underline">Pizza Box Size Guide</Link></li>
                  <li><Link href="/custom-pizza-boxes" style={{ color: 'var(--color-wpb-navy)' }} className="hover:underline">Custom Printing</Link></li>
                  <li><Link href="/industries" style={{ color: 'var(--color-wpb-navy)' }} className="hover:underline">Industries We Supply</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <QuoteCTA heading={`Request Pricing for ${product.title}`} subheading="Container and pallet programs available. We work with distributors, chains and high-volume buyers." compact />
        </div>
      </div>
    </>
  )
}
