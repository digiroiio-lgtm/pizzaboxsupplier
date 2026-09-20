import Link from 'next/link'
import { SITE_URL, BRAND, statePages } from '@/lib/content'
import { BreadcrumbNav, LeadForm } from '@/components/sections'

const page = statePages.find(p => p.slug === 'pizza-box-supplier-virginia')

export const metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: { canonical: `${SITE_URL}/${page.slug}` },
  openGraph: {
    title: page.title,
    description: page.description,
    url: `${SITE_URL}/${page.slug}`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Mid-Atlantic', href: '/pizza-box-supplier-mid-atlantic' },
  { label: 'Virginia' },
]

export default function VirginiaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />

      <div className="mb-10">
        <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
          {page.title}
        </h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
          Wholesale pizza box supply for Virginia buyers. Container-volume programs with direct freight planning through the Port of Virginia for distributors and high-volume buyers across the Mid-Atlantic.
        </p>
      </div>

      <section className="mb-12">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Virginia Supply Programs</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {page.buyerContext}
        </p>
        <p className="text-gray-600 leading-relaxed">
          Container and pallet programs with freight coordination for Virginia and Mid-Atlantic delivery destinations. All standard pizza box types and sizes available. Custom printing and private-label options available.
        </p>
      </section>

      <section className="mb-10 p-5 rounded-xl" style={{ background: 'var(--color-wpb-gray)', border: '1px solid var(--color-wpb-gray-border)' }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--color-wpb-red)' }}>Primary Container Gateway</div>
            <div style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-base">{page.portName}</div>
          </div>
          <Link href={`/${page.portSlug}`} style={{ color: 'var(--color-wpb-red)' }} className="text-sm font-semibold hover:underline whitespace-nowrap">
            View port program →
          </Link>
        </div>
      </section>

      <section style={{ background: 'var(--color-wpb-gray)', borderRadius: '12px' }} className="p-6 sm:p-10">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl font-bold mb-3 text-center">Request Pricing — Virginia</h2>
        <p className="text-gray-600 text-center mb-8">Container and pallet programs for Virginia buyers.</p>
        <div style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '12px' }} className="p-6 sm:p-8 max-w-3xl mx-auto">
          <LeadForm sourcePage={`/${page.slug}`} />
        </div>
      </section>
    </div>
  )
}
