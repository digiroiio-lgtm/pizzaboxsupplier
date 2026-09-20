import { SITE_URL, BRAND, industries } from '@/lib/content'
import { BreadcrumbNav, QuoteCTA, LeadForm } from '@/components/sections'

export const metadata = {
  title: 'Industries We Supply — Wholesale Pizza Boxes for B2B Buyers',
  description: 'Wholesale pizza box supply for foodservice distributors, packaging distributors, restaurant chains, franchise groups, food manufacturers and importers. Container-volume programs for high-volume buyers.',
  alternates: { canonical: `${SITE_URL}/industries` },
  openGraph: {
    title: 'Industries We Supply — Wholesale Pizza Boxes',
    description: 'Container-volume pizza box programs for distributors, chains, manufacturers and importers.',
    url: `${SITE_URL}/industries`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Industries' },
]

const industryDetails = [
  {
    slug: 'foodservice-distributors',
    title: 'Foodservice Distributors',
    description: 'Container-volume supply programs designed for foodservice distributors requiring consistent delivery, broad SKU coverage and reliable reorder cycles.',
    body: 'Foodservice distributors require consistent specification, predictable lead times and efficient container loading to maintain inventory across their customer base. Our programs are designed for distributors managing container-scale purchasing on a recurring basis. We work with your procurement team to establish specifications, reorder cycles and supply continuity.',
    needs: ['Consistent box specification across orders', 'Reliable reorder programs', 'Broad size range (8"–20")', 'Efficient container and pallet loading', 'White-label and custom print options'],
  },
  {
    slug: 'packaging-distributors',
    title: 'Packaging Distributors',
    description: 'Wholesale pizza box supply for packaging distributors requiring broad size coverage, plain and custom-printed options, and efficient container loading.',
    body: 'Packaging distributors need reliable supply across multiple SKUs with consistent quality and competitive pricing. We supply packaging distributors with the full size range in plain and custom-printed options, with container and pallet programs designed for efficient stock management.',
    needs: ['Full size range in stock programs', 'Plain and custom-printed options', 'Container and pallet pricing', 'Consistent board specification', 'Repeat order programs'],
  },
  {
    slug: 'restaurant-supply-distributors',
    title: 'Restaurant Supply Distributors',
    description: 'Supply programs for restaurant supply distributors serving pizza operators across regional and national markets.',
    body: 'Restaurant supply distributors serving pizza operators need reliable supply of the sizes their customers use most. We work with distributors to establish programs that match their sales patterns and supply requirements.',
    needs: ['Most common sizes (10", 12", 14", 16")', 'Consistent specification for reorders', 'Volume pricing for distribution programs', 'Custom print options for chain customers'],
  },
  {
    slug: 'pizza-chains',
    title: 'Pizza Chains & Franchise Groups',
    description: 'Branded and private-label pizza box programs for multi-location pizza chains and franchise groups requiring consistency across locations.',
    body: 'Pizza chains and franchise groups require consistent branded packaging across all locations. We work with chains to develop branded or private-label pizza box programs with locked specifications, consistent print quality and supply programs that match their growth requirements.',
    needs: ['Custom branded printing', 'Private-label programs', 'Consistent specification across reorders', 'Programs that scale with new locations', 'Container and warehouse-level supply'],
  },
  {
    slug: 'food-manufacturers',
    title: 'Food Manufacturers',
    description: 'Container-volume pizza box supply for food manufacturers, frozen pizza producers and co-packers requiring high-volume corrugated packaging.',
    body: 'Food manufacturers and frozen pizza producers require packaging that meets food-contact standards, consistent board specification and supply that matches production schedules. We work with manufacturers to develop supply programs aligned to their production volume and scheduling requirements.',
    needs: ['Food-contact compliant materials', 'Consistent board and construction', 'Container-scale supply aligned to production', 'Custom printed or plain options', 'Recurring supply programs'],
  },
  {
    slug: 'importers-wholesalers',
    title: 'Importers & Wholesalers',
    description: 'Direct container purchasing programs for U.S. importers, packaging wholesalers and procurement departments with established import experience.',
    body: 'U.S. importers and packaging wholesalers with existing import infrastructure can source directly at container scale. We work with importers to develop programs that leverage container-level economics, consistent specification and efficient logistics.',
    needs: ['Direct container purchasing', 'Container-scale pricing', 'Efficient loading specifications', 'Consistent specification for resale', 'Repeat container programs'],
  },
]

export default function IndustriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />

      <div className="mb-10">
        <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
          Industries We Supply
        </h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed">
          Our wholesale pizza box programs are designed for professional procurement buyers and high-volume foodservice businesses. We work with distributors, chains, manufacturers and importers across the United States.
        </p>
      </div>

      {/* Industry detail cards */}
      <div className="space-y-10 mb-14">
        {industryDetails.map((industry, i) => (
          <section
            key={industry.slug}
            id={industry.slug}
            style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white', borderRadius: '12px' }}
            className="p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div
                  style={{ background: 'var(--color-wpb-red)', color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
                  className="inline-block px-2.5 py-1 rounded mb-3"
                >
                  Industry {String(i + 1).padStart(2, '0')}
                </div>
                <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl sm:text-2xl font-bold mb-3">
                  {industry.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">{industry.body}</p>
              </div>
              <div>
                <h3 style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm mb-3">
                  Program Requirements
                </h3>
                <ul className="space-y-2">
                  {industry.needs.map((need) => (
                    <li key={need} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg style={{ color: 'var(--color-wpb-red)', flexShrink: 0, marginTop: '3px' }} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {need}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* RFQ section */}
      <section style={{ background: 'var(--color-wpb-gray)', borderRadius: '12px', padding: '40px 32px' }} className="mb-0">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl font-bold mb-3 text-center">
            Request Container Pricing for Your Industry
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Complete the form to discuss your program requirements. We respond to qualified inquiries.
          </p>
          <div style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '12px' }} className="p-6 sm:p-8">
            <LeadForm sourcePage="/industries" />
          </div>
        </div>
      </section>
    </div>
  )
}
