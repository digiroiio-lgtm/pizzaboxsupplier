import Link from 'next/link'
import { SITE_URL, BRAND } from '@/lib/content'
import { BreadcrumbNav, QuoteCTA, LeadForm, SpecTable } from '@/components/sections'

export const metadata = {
  title: 'Custom Printed Pizza Boxes — Logo, Branded & Private Label Wholesale',
  description: 'Custom printed pizza boxes for chains, franchise groups and private-label programs. Logo printing, branded designs and custom specifications. Container and pallet programs for high-volume buyers.',
  alternates: { canonical: `${SITE_URL}/custom-pizza-boxes` },
  openGraph: {
    title: 'Custom Printed Pizza Boxes — Logo, Branded & Private Label',
    description: 'Custom printing programs for chains, franchise groups and private-label buyers. Container-volume supply.',
    url: `${SITE_URL}/custom-pizza-boxes`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Custom Printing' },
]

export default function CustomPizzaBoxesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />

      <div className="mb-10">
        <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
          Custom Printed Pizza Boxes
        </h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
          Logo printing, branded designs and private-label pizza box programs for chains, franchise groups and high-volume buyers. Container and pallet programs available.
        </p>
      </div>

      {/* Overview */}
      <section className="mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Custom Printing Programs</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We supply custom printed pizza boxes for pizza chains, franchise groups and buyers with branded packaging programs. Printing ranges from single-color logo applications through full custom design.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Custom print programs are available in container and pallet volumes. Specifications, artwork requirements, minimum order quantities and lead times are confirmed during the quoting process.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Private-label programs are available for distributors and wholesalers supplying branded packaging to their customers.
            </p>
          </div>
          <div>
            <SpecTable
              caption="Custom printing — general specifications (exact values confirmed at quote)"
              rows={[
                ['Print Options', 'Single-color logo, multi-color, full custom design'],
                ['Print Coverage', 'Partial or full coverage — confirmed based on design'],
                ['Artwork Format', 'Vector artwork preferred — specifications confirmed at quote'],
                ['Print Colors', 'Color specifications confirmed based on design and material'],
                ['MOQ for Custom', 'Confirmed during quoting based on size and specification'],
                ['Lead Time', 'Confirmed during quoting based on specification and volume'],
                ['Repeat Runs', 'Repeat order programs available — specifications locked per program'],
                ['Box Types', 'White, kraft, clay-coated — confirmed based on print requirement'],
                ['Available Sizes', '8" to 20" — size availability confirmed based on print specification'],
              ]}
            />
          </div>
        </div>
      </section>

      {/* Print options detail */}
      <section className="mb-14">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-5">
          Printing Options
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: 'Logo Printing',
              desc: 'Single or dual-color logo printing on plain or white pizza boxes. Cost-effective branded packaging for chains and franchises.',
              buyers: ['Pizza chains', 'Franchise groups', 'Restaurant programs'],
            },
            {
              title: 'Custom Design',
              desc: 'Full custom design printing across the box surface. For premium branded programs and distinctive packaging.',
              buyers: ['Premium chains', 'Brand-focused programs', 'Marketing campaigns'],
            },
            {
              title: 'Private Label',
              desc: 'Private-label printing programs for distributors and wholesalers supplying branded packaging under their own label.',
              buyers: ['Packaging distributors', 'Foodservice distributors', 'Wholesale programs'],
            },
          ].map(({ title, desc, buyers }) => (
            <div
              key={title}
              style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
              className="rounded-lg p-5"
            >
              <h3 style={{ color: 'var(--color-wpb-navy)', borderBottom: '2px solid var(--color-wpb-red)', paddingBottom: '8px', marginBottom: '10px' }} className="font-bold text-base inline-block">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{desc}</p>
              <div className="text-xs text-gray-500">
                <div className="font-semibold mb-1" style={{ color: 'var(--color-wpb-navy)' }}>Typical buyers:</div>
                <ul className="space-y-0.5">
                  {buyers.map((b) => (
                    <li key={b} className="flex items-center gap-1.5">
                      <span style={{ color: 'var(--color-wpb-red)' }}>·</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Buyer guide */}
      <section className="mb-14" style={{ background: 'var(--color-wpb-gray)', borderRadius: '12px', padding: '32px' }}>
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">
          What Procurement Buyers Need to Know
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { q: 'What can be printed?', a: 'Logo, text, custom design, full coverage — options depend on box material and print specification. Confirmed during quoting.' },
            { q: 'How is artwork supplied?', a: 'Vector artwork (AI, EPS, PDF) is preferred for print quality. Artwork requirements are confirmed when the program is set up.' },
            { q: 'What affects MOQ?', a: 'Box size, material, print color count and coverage all affect the minimum order quantity for custom printing. MOQ is confirmed during quoting.' },
            { q: 'What affects lead time?', a: 'Custom printing adds production time compared to plain stock. Lead time depends on print specification, volume and material. Confirmed during quoting.' },
            { q: 'How are repeat runs managed?', a: 'Specifications are locked when a custom program is set up. Repeat orders reproduce the same specification. Reorder timing and volume are agreed with your procurement team.' },
            { q: 'Can we match existing box specifications?', a: 'Yes. If you have an existing box specification or sample, we can work from that. Include details in your pricing request.' },
          ].map(({ q, a }) => (
            <div key={q} style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)' }} className="rounded-lg p-4">
              <div style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm mb-2">{q}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RFQ */}
      <section id="request-pricing" style={{ background: 'var(--color-wpb-gray)', borderRadius: '12px' }} className="p-6 sm:p-10 mb-0">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl font-bold mb-3 text-center">
          Request Custom Printing Pricing
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">
          Complete the form to request pricing for a custom printed pizza box program. Available for container and pallet volumes.
        </p>
        <div style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '12px' }} className="p-6 sm:p-8 max-w-3xl mx-auto">
          <LeadForm sourcePage="/custom-pizza-boxes" />
        </div>
      </section>
    </div>
  )
}
