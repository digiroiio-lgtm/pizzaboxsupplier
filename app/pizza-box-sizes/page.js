import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL, BRAND, sizes } from '@/lib/content'
import { BreadcrumbNav, QuoteCTA, SizeCard } from '@/components/sections'

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pizza Box Sizes — Wholesale Ordering Guide',
  url: `${SITE_URL}/pizza-box-sizes`,
  itemListElement: sizes.map((size, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: size.title,
    url: `${SITE_URL}/pizza-box-sizes/${size.slug}`,
  })),
}

export const metadata = {
  title: 'Pizza Box Sizes — Wholesale Ordering Guide (8" to 20")',
  description: 'Wholesale pizza box sizes from 8 inch to 20 inch. Size guide for distributors and high-volume buyers covering common uses and container ordering. Request wholesale pricing.',
  alternates: { canonical: `${SITE_URL}/pizza-box-sizes` },
  openGraph: {
    title: 'Pizza Box Sizes — Wholesale Ordering Guide',
    description: 'Wholesale pizza box size guide for high-volume buyers. 8" to 20" sizes with container program options.',
    url: `${SITE_URL}/pizza-box-sizes`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Pizza Box Sizes' },
]

export default function SizesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Script id="sizes-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <BreadcrumbNav items={breadcrumbs} />

      <div className="mb-10">
        <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
          Pizza Box Sizes — Wholesale Ordering Guide
        </h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed">
          We supply wholesale pizza boxes from 8 inch through 20 inch. Container and pallet programs are available for all standard sizes. Select a size to view details, or request pricing for multiple sizes at once.
        </p>
      </div>

      {/* Size card grid */}
      <section className="mb-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 mb-8">
          {sizes.map((size) => (
            <SizeCard key={size.slug} size={size} />
          ))}
        </div>
      </section>

      {/* Size comparison table */}
      <section className="mb-14">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-5">
          Size Comparison Table
        </h2>
        <div className="overflow-x-auto">
          <table style={{ border: '1px solid var(--color-wpb-gray-border)' }} className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: 'var(--color-wpb-navy)', color: 'white' }}>
                <th className="px-4 py-3 text-left font-semibold">Size</th>
                <th className="px-4 py-3 text-left font-semibold">Common Uses</th>
                <th className="px-4 py-3 text-left font-semibold">Typical Programs</th>
                <th className="px-4 py-3 text-left font-semibold">Pricing</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((size, i) => (
                <tr
                  key={size.slug}
                  style={{
                    background: i % 2 === 0 ? 'white' : 'var(--color-wpb-gray)',
                    borderBottom: '1px solid var(--color-wpb-gray-border)',
                  }}
                >
                  <td className="px-4 py-3 font-bold" style={{ color: 'var(--color-wpb-navy)' }}>
                    <Link href={`/pizza-box-sizes/${size.slug}`} style={{ color: 'var(--color-wpb-navy)' }} className="hover:underline">
                      {size.shortTitle}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{size.commonUses.slice(0, 2).join(', ')}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs">{size.notes}</td>
                  <td className="px-4 py-3">
                    <Link
                      href="/get-quote"
                      style={{ color: 'var(--color-wpb-red)' }}
                      className="text-xs font-semibold hover:underline"
                    >
                      Request Pricing →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Pricing, MOQ and container/pallet quantities are confirmed during the quoting process. <Link href="/get-quote" style={{ color: 'var(--color-wpb-red)' }} className="hover:underline">Request container pricing →</Link>
        </p>
      </section>

      {/* Ordering info */}
      <section className="mb-14">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-5">
          Wholesale Size Ordering
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: 'Most Common Sizes',
              desc: '12", 14" and 16" are the most common high-volume sizes for chain and distribution programs. 10" is widely used for small-format programs.',
            },
            {
              title: 'Multi-Size Programs',
              desc: 'Many buyers require multiple sizes across their program. We work with buyers to coordinate supply across size ranges in a single container or pallet program.',
            },
            {
              title: 'Size-Specific Quantities',
              desc: 'Case counts per pallet and container loading vary by size. Exact quantities are confirmed during the quoting process based on your specific size and board grade.',
            },
          ].map(({ title, desc }) => (
            <div key={title} style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }} className="rounded-lg p-5">
              <h3 style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <QuoteCTA
        heading="Request Wholesale Pizza Box Pricing"
        subheading="Container and pallet programs for all sizes. We work with distributors, chains and high-volume buyers."
      />
    </div>
  )
}
