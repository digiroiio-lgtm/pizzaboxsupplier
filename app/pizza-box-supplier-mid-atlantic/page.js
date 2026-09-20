import Link from 'next/link'
import { SITE_URL, BRAND, regionPages } from '@/lib/content'
import { BreadcrumbNav, LeadForm } from '@/components/sections'

const region = regionPages.find(r => r.slug === 'pizza-box-supplier-mid-atlantic')

export const metadata = {
  title: region.metaTitle,
  description: region.description,
  alternates: { canonical: `${SITE_URL}/${region.slug}` },
  openGraph: {
    title: region.title,
    description: region.description,
    url: `${SITE_URL}/${region.slug}`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Pizza Box Supplier — Mid-Atlantic USA' },
]

const stateLinks = [
  { label: 'Virginia', href: '/pizza-box-supplier-virginia' },
  { label: 'Pennsylvania', href: '/pizza-box-supplier-pennsylvania' },
]

export default function MidAtlanticPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />

      <div className="mb-10">
        <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
          {region.title}
        </h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
          Container-volume pizza box supply for Mid-Atlantic distributors and buyers in Virginia, Maryland, Delaware and Washington DC. Freight planning through the Port of Virginia for efficient distribution across the Mid-Atlantic corridor.
        </p>
      </div>

      <section className="mb-12">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Mid-Atlantic Supply Programs</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {region.buyerContext}
        </p>
        <p className="text-gray-600 leading-relaxed">
          Container programs include container-volume wholesale pricing, pallet ordering, custom printing and private-label options. Freight planning for Mid-Atlantic destinations is part of the container program.
        </p>
      </section>

      {/* Port gateway callout */}
      <section className="mb-12 p-5 rounded-xl" style={{ background: 'var(--color-wpb-gray)', border: '1px solid var(--color-wpb-gray-border)' }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--color-wpb-red)' }}>Primary Container Gateway</div>
            <div style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-base">{region.primaryPort}</div>
            <div className="text-sm text-gray-500 mt-1">Container entry point for Mid-Atlantic distribution</div>
          </div>
          <Link href={`/${region.primaryPortSlug}`} style={{ color: 'var(--color-wpb-red)' }} className="text-sm font-semibold hover:underline whitespace-nowrap">
            View port program →
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Mid-Atlantic States Covered</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {region.statesCovered.map((state) => (
            <span key={state} style={{ background: 'var(--color-wpb-gray)', color: 'var(--color-wpb-navy)' }} className="text-xs font-semibold px-3 py-1.5 rounded-full">
              {state}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {stateLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }} className="group rounded-lg p-4 hover:shadow-md transition-shadow">
              <div style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm group-hover:underline">{link.label}</div>
              <div className="text-xs text-gray-400 mt-1">View state program →</div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--color-wpb-gray)', borderRadius: '12px' }} className="p-6 sm:p-10">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl font-bold mb-3 text-center">Request Pricing — Mid-Atlantic</h2>
        <p className="text-gray-600 text-center mb-8">Container and pallet programs for Mid-Atlantic buyers.</p>
        <div style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '12px' }} className="p-6 sm:p-8 max-w-3xl mx-auto">
          <LeadForm sourcePage={`/${region.slug}`} />
        </div>
      </section>
    </div>
  )
}
