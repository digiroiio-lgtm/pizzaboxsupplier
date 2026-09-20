import Link from 'next/link'
import { SITE_URL, BRAND, sizes, products } from '@/lib/content'
import { contentGuides } from '@/lib/guides'
import { BreadcrumbNav, QuoteCTA } from '@/components/sections'

export const metadata = {
  title: 'Wholesale Pizza Box Resources — Buyer Guides & Procurement Information',
  description: 'Procurement resources for wholesale pizza box buyers. Buying guides, size guides, custom printing information, container ordering guide and specification references.',
  alternates: { canonical: `${SITE_URL}/resources` },
  openGraph: {
    title: 'Wholesale Pizza Box Resources',
    description: 'Buyer guides and procurement resources for wholesale pizza box buyers.',
    url: `${SITE_URL}/resources`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Resources' },
]

const CLUSTER_LABELS = {
  sizes: 'Size Guides',
  wholesale: 'Wholesale & Container',
  cost: 'Pricing & Cost',
  custom: 'Custom Printing',
  materials: 'Materials & Specification',
  procurement: 'Procurement & Import',
}

const CLUSTER_ORDER = ['sizes', 'wholesale', 'cost', 'custom', 'materials', 'procurement']

export default function ResourcesPage() {
  const guidesByCluster = CLUSTER_ORDER.reduce((acc, cluster) => {
    acc[cluster] = contentGuides.filter((g) => g.cluster === cluster)
    return acc
  }, {})

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />

      <div className="mb-10">
        <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
          Wholesale Pizza Box Resources
        </h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed">
          Procurement guides, specification references and ordering information for wholesale pizza box buyers. Designed for distributors, chains and high-volume foodservice buyers.
        </p>
      </div>

      {/* Buyer guides by cluster */}
      {CLUSTER_ORDER.map((cluster) => {
        const clusterGuides = guidesByCluster[cluster]
        if (!clusterGuides || clusterGuides.length === 0) return null
        return (
          <section key={cluster} className="mb-12">
            <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-5">{CLUSTER_LABELS[cluster]}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {clusterGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/resources/${guide.slug}`}
                  style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
                  className="group rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col"
                >
                  <div
                    style={{ background: 'var(--color-wpb-gray)', color: 'var(--color-wpb-navy)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                    className="inline-block px-2 py-1 rounded mb-3 self-start"
                  >
                    {guide.category}
                  </div>
                  <h3 style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-sm mb-2 leading-snug group-hover:underline flex-1">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{guide.description}</p>
                  <span style={{ color: 'var(--color-wpb-red)' }} className="text-xs font-semibold">
                    Read guide →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )
      })}

      {/* Size reference */}
      <section className="mb-14">
        <div className="flex items-end justify-between mb-5">
          <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold">Size Reference</h2>
          <Link href="/pizza-box-sizes" style={{ color: 'var(--color-wpb-red)' }} className="text-sm font-semibold hover:underline">
            Full Size Guide →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table style={{ border: '1px solid var(--color-wpb-gray-border)' }} className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: 'var(--color-wpb-navy)', color: 'white' }}>
                <th className="px-4 py-3 text-left font-semibold">Size</th>
                <th className="px-4 py-3 text-left font-semibold">Common Applications</th>
                <th className="px-4 py-3 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((size, i) => (
                <tr key={size.slug} style={{ background: i % 2 === 0 ? 'white' : 'var(--color-wpb-gray)', borderBottom: '1px solid var(--color-wpb-gray-border)' }}>
                  <td className="px-4 py-2.5 font-semibold" style={{ color: 'var(--color-wpb-navy)' }}>
                    <Link href={`/pizza-box-sizes/${size.slug}`} className="hover:underline">{size.shortTitle}</Link>
                  </td>
                  <td className="px-4 py-2.5 text-gray-700 text-xs">{size.commonUses.join(', ')}</td>
                  <td className="px-4 py-2.5 text-gray-500 text-xs">{size.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Product reference */}
      <section className="mb-14">
        <div className="flex items-end justify-between mb-5">
          <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold">Product Reference</h2>
          <Link href="/products" style={{ color: 'var(--color-wpb-red)' }} className="text-sm font-semibold hover:underline">
            All Products →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
              className="group flex items-center gap-3 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div>
                <div style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm group-hover:underline">{product.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{product.sizes.join(', ')}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Container ordering brief */}
      <section className="mb-14" style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white', borderRadius: '12px', padding: '32px' }}>
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Container Ordering Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              Container ordering is available for qualified buyers requiring one or more containers of pizza boxes. Container quantities vary by box size, board grade and pallet configuration.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              For exact container quantities, loading specifications and logistics planning, contact us to request a detailed quotation for your specific size and program requirements.
            </p>
          </div>
          <div>
            <h3 style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm mb-3">What to include in your inquiry:</h3>
            <ul className="space-y-1.5">
              {[
                'Required pizza box size(s)',
                'Estimated quantity per order',
                'Order frequency',
                'Delivery state or region',
                'Plain or custom-printed requirement',
                'Any existing specification to match',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg style={{ color: 'var(--color-wpb-red)', flexShrink: 0, marginTop: '3px' }} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href="/get-quote"
            style={{ background: 'var(--color-wpb-red)', color: 'white' }}
            className="inline-block px-6 py-3 text-sm font-bold rounded hover:opacity-90 transition-opacity"
          >
            Request Container Pricing
          </Link>
        </div>
      </section>

      <QuoteCTA />
    </div>
  )
}
