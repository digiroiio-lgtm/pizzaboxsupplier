import { SITE_URL, BRAND, portPages } from '@/lib/content'
import { BreadcrumbNav, LeadForm, QuoteCTA } from '@/components/sections'

const port = portPages.find(p => p.slug === 'pizza-box-supplier-port-new-york-new-jersey')

export const metadata = {
  title: port.metaTitle,
  description: port.description,
  alternates: { canonical: `${SITE_URL}/${port.slug}` },
  openGraph: {
    title: port.title,
    description: port.description,
    url: `${SITE_URL}/${port.slug}`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'East Coast Supply', href: '/pizza-box-supplier-northeast' },
  { label: 'Port of NY/NJ' },
]

export default function PortNYNJPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />

      <div className="mb-10">
        <div className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full" style={{ background: 'var(--color-wpb-gray)', color: 'var(--color-wpb-navy)' }}>
          Northeast Gateway
        </div>
        <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
          {port.title}
        </h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
          Container-volume pizza box supply for importers and distributors receiving through the Port of New York and New Jersey. Wholesale pricing, freight planning and recurring supply programs for Northeast buyers.
        </p>
      </div>

      {/* Supply chain proposition */}
      <section className="mb-14 p-6 sm:p-8 rounded-xl" style={{ background: 'var(--color-wpb-navy)', color: 'white' }}>
        <h2 className="text-lg font-bold mb-6 text-center opacity-80 uppercase tracking-wider text-sm">Supply Chain Route</h2>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0">
          {[
            { label: 'Turkey', sub: 'Manufacturing' },
            { label: 'Atlantic Ocean', sub: 'Ocean Freight' },
            { label: 'Port of NY/NJ', sub: 'Container Entry', highlight: true },
            { label: 'NJ / NY DCs', sub: 'Distribution' },
            { label: 'Northeast Buyers', sub: 'Delivery' },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className={`text-center px-3 py-2 rounded-lg ${step.highlight ? 'bg-white/20 ring-2 ring-white/40' : 'bg-white/10'}`}>
                <div className="font-semibold text-sm text-white">{step.label}</div>
                <div className="text-xs opacity-60 mt-0.5">{step.sub}</div>
              </div>
              {i < 4 && (
                <span className="text-white/40 font-bold text-lg hidden sm:block">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
        <div className="lg:col-span-2">
          <section className="mb-8">
            <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Port of New York and New Jersey</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Port of New York and New Jersey is the busiest container port on the East Coast and one of the largest in North America. For wholesale pizza box buyers in the Northeast, it is the most direct and efficient container entry point.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              {port.buyerContext}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {port.distributionContext}
            </p>
          </section>

          <section className="mb-8">
            <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Who This Program Serves</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Foodservice Distributors', desc: 'NY/NJ metro and Northeast corridor distribution operations' },
                { title: 'Packaging Distributors', desc: 'Multi-SKU wholesale programs with recurring container supply' },
                { title: 'Restaurant Chains', desc: 'NYC, NJ and Northeast chain operators requiring consistent supply' },
                { title: 'Importers & Wholesalers', desc: 'Direct container purchasing through established import programs' },
              ].map((item) => (
                <div key={item.title} style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }} className="rounded-lg p-4">
                  <div style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-3">States Covered from NY/NJ</h2>
            <div className="flex flex-wrap gap-2">
              {port.statesCovered.map((state) => (
                <span key={state} style={{ background: 'var(--color-wpb-gray)', color: 'var(--color-wpb-navy)' }} className="text-xs font-semibold px-3 py-1.5 rounded-full">
                  {state}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div>
          <div style={{ background: 'var(--color-wpb-gray)', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '12px' }} className="p-5 sticky top-6">
            <h3 style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-base mb-4">Container Program</h3>
            <ul className="space-y-2 text-sm text-gray-600 mb-5">
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-wpb-red)' }} className="font-bold mt-0.5">✓</span>
                Container-volume wholesale pricing
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-wpb-red)' }} className="font-bold mt-0.5">✓</span>
                Freight planning to NY/NJ port
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-wpb-red)' }} className="font-bold mt-0.5">✓</span>
                All standard sizes available
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-wpb-red)' }} className="font-bold mt-0.5">✓</span>
                Custom printing options
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-wpb-red)' }} className="font-bold mt-0.5">✓</span>
                Recurring supply programs
              </li>
            </ul>
            <a
              href="/get-quote"
              style={{ background: 'var(--color-wpb-red)', color: 'white' }}
              className="block text-center py-3 px-4 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Request Container Pricing
            </a>
          </div>
        </div>
      </div>

      <section style={{ background: 'var(--color-wpb-gray)', borderRadius: '12px' }} className="p-6 sm:p-10">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl font-bold mb-3 text-center">Request Pricing — NY/NJ Port Program</h2>
        <p className="text-gray-600 text-center mb-8">Container and pallet programs for Northeast buyers receiving through NY/NJ.</p>
        <div style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '12px' }} className="p-6 sm:p-8 max-w-3xl mx-auto">
          <LeadForm sourcePage={`/${port.slug}`} />
        </div>
      </section>
    </div>
  )
}
