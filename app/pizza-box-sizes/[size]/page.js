import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SITE_URL, BRAND, sizes, productFaqs, buildFaqSchema } from '@/lib/content'
import { BreadcrumbNav, SpecTable, FAQSection, LeadForm, QuoteCTA } from '@/components/sections'
import Script from 'next/script'

export function generateStaticParams() {
  return sizes.map(({ slug }) => ({ size: slug }))
}

export function generateMetadata({ params }) {
  const size = sizes.find((s) => s.slug === params.size)
  if (!size) return {}
  return {
    title: `${size.title} — Wholesale Bulk Supply for U.S. Buyers`,
    description: `Wholesale ${size.title.toLowerCase()} for high-volume U.S. buyers. Container and pallet programs available for distributors and chains. Request pricing.`,
    alternates: { canonical: `${SITE_URL}/pizza-box-sizes/${size.slug}` },
    openGraph: {
      title: `${size.title} — Wholesale Supply`,
      description: `Container-volume wholesale ${size.inches}-inch pizza boxes for distributors and high-volume buyers.`,
      url: `${SITE_URL}/pizza-box-sizes/${size.slug}`,
      siteName: BRAND.name,
    },
  }
}

export default function SizePage({ params }) {
  const size = sizes.find((s) => s.slug === params.size)
  if (!size) notFound()

  const prevSize = sizes[sizes.findIndex((s) => s.slug === size.slug) - 1]
  const nextSize = sizes[sizes.findIndex((s) => s.slug === size.slug) + 1]

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Pizza Box Sizes', href: '/pizza-box-sizes' },
    { label: size.title },
  ]

  const faqSchema = buildFaqSchema(productFaqs)

  return (
    <>
      <Script id={`faq-schema-size-${size.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <BreadcrumbNav items={breadcrumbs} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
              {size.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Wholesale {size.inches}-inch pizza boxes for high-volume U.S. buyers. Container and pallet programs available for distributors, chains and foodservice buyers. {size.notes}
            </p>

            {/* Common uses */}
            <section className="mb-10">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Common Uses</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {size.commonUses.map((use) => (
                  <li key={use} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg style={{ color: 'var(--color-wpb-red)', flexShrink: 0 }} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {use}
                  </li>
                ))}
              </ul>
            </section>

            {/* Specifications */}
            <section className="mb-10">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Specifications</h2>
              <SpecTable
                caption="General specifications — exact values confirmed at quote"
                rows={[
                  ['Size', `${size.inches} inch (${size.inches}" x ${size.inches}" nominal)`],
                  ['Material', 'Food-grade corrugated board — grade confirmed at quote'],
                  ['Print Options', 'Plain, single-color or custom printed — options confirmed at quote'],
                  ['MOQ', 'BUSINESS_DATA_REQUIRED — confirmed during quoting'],
                  ['Cases per Pallet', 'BUSINESS_DATA_REQUIRED — confirmed during quoting'],
                  ['Boxes per Container', 'BUSINESS_DATA_REQUIRED — confirmed during quoting'],
                  ['Lead Time', 'BUSINESS_DATA_REQUIRED — confirmed during quoting'],
                ]}
              />
            </section>

            {/* Ordering context */}
            <section className="mb-10">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Wholesale Ordering</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {size.inches}-inch pizza boxes are available in container and pallet programs for high-volume U.S. buyers. Pricing, minimum order quantities and container loading are confirmed during the quoting process.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Custom printing, private-label programs and recurring supply options are available. Specifications are confirmed based on your program requirements.
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-10">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-5">Frequently Asked Questions</h2>
              <FAQSection faqs={productFaqs} />
            </section>

            {/* Size navigation */}
            <nav className="flex items-center justify-between gap-4 pt-6" style={{ borderTop: '1px solid var(--color-wpb-gray-border)' }} aria-label="Size navigation">
              {prevSize ? (
                <Link href={`/pizza-box-sizes/${prevSize.slug}`} style={{ color: 'var(--color-wpb-navy)' }} className="flex items-center gap-1 text-sm font-semibold hover:underline">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {prevSize.title}
                </Link>
              ) : <div />}
              {nextSize ? (
                <Link href={`/pizza-box-sizes/${nextSize.slug}`} style={{ color: 'var(--color-wpb-navy)' }} className="flex items-center gap-1 text-sm font-semibold hover:underline">
                  {nextSize.title}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              ) : <div />}
            </nav>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div style={{ background: 'var(--color-wpb-navy)', borderRadius: '12px' }} className="p-6">
                <h2 className="text-base font-bold text-white mb-2">Request {size.title} Pricing</h2>
                <p className="text-gray-300 text-sm mb-4">Container and pallet programs available.</p>
                <Link
                  href="/get-quote"
                  style={{ background: 'var(--color-wpb-red)' }}
                  className="block text-center py-3 font-bold text-white rounded hover:opacity-90 transition-opacity text-sm"
                >
                  Request Container Pricing
                </Link>
              </div>
              <div style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }} className="rounded-lg p-5">
                <h3 style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-sm mb-3">All Sizes</h3>
                <ul className="space-y-1">
                  {sizes.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/pizza-box-sizes/${s.slug}`}
                        style={{ color: s.slug === size.slug ? 'var(--color-wpb-red)' : 'var(--color-wpb-navy)', fontWeight: s.slug === size.slug ? 700 : 400 }}
                        className="text-sm hover:underline"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <QuoteCTA heading={`Request Wholesale Pricing for ${size.title}`} subheading="Container and pallet programs available for all sizes." compact />
        </div>
      </div>
    </>
  )
}
