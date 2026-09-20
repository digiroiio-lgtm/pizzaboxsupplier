import Link from 'next/link'
import { SITE_URL, BRAND, CONTACT } from '@/lib/content'
import { BreadcrumbNav, QuoteCTA } from '@/components/sections'

export const metadata = {
  title: 'Manufacturer & Supply Capability — Wholesale Pizza Boxes',
  description: 'High-capacity corrugated pizza box supply for U.S. buyers. Container-volume programs, consistent specification, custom printing and recurring supply for distributors and chains.',
  alternates: { canonical: `${SITE_URL}/about-us` },
  openGraph: {
    title: 'Manufacturer & Supply Capability',
    description: 'High-capacity pizza box supply for container-scale U.S. buyers.',
    url: `${SITE_URL}/about-us`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Manufacturer' },
]

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />

      <div className="mb-10">
        <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
          Supply Capability
        </h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
          High-capacity corrugated pizza box supply designed for the U.S. market. Container-volume programs for distributors, chains and high-volume buyers requiring consistent specification and reliable supply.
        </p>
      </div>

      {/* Supply overview */}
      <section className="mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              WholesalePizzaBoxes.com is a B2B packaging supply platform connecting U.S. buyers with high-capacity pizza box supply. We work with distributors, foodservice chains, franchise groups and food manufacturers requiring container-scale purchasing.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our programs are built for buyers who need consistent specification, reliable reorder supply and logistics that scale with their business.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We supply across the U.S. market, coordinating freight, container logistics and supply planning as part of our procurement programs.
            </p>
          </div>
          <div>
            <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Supply Highlights</h2>
            <ul className="space-y-3">
              {[
                { title: 'Production Capacity', desc: 'High-volume corrugated pizza box production. Container-scale supply available. Capacity details confirmed during program discussion.' },
                { title: 'Product Range', desc: 'Pizza boxes from 8" to 20" across multiple materials and construction types. Plain and custom-printed options.' },
                { title: 'Custom Printing', desc: 'Custom logo printing, branded programs and private-label supply for chains and franchise groups.' },
                { title: 'Quality Process', desc: 'Consistent specification across production runs. Quality confirmation for container orders.' },
                { title: 'USA Supply', desc: 'Supply programs for U.S. buyers including freight planning, container logistics and delivery coordination.' },
              ].map(({ title, desc }) => (
                <li
                  key={title}
                  style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
                  className="rounded-lg p-4"
                >
                  <div style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm mb-1">{title}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Capability detail */}
      <section className="mb-14">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-6">Supply Program Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              heading: 'Manufacturing',
              body: 'Corrugated pizza box manufacturing with high-volume production capacity. Specifications confirmed for container programs. Production details available during quoting.',
            },
            {
              heading: 'Materials',
              body: 'Food-grade corrugated board in white, kraft and clay-coated construction. Board grades and specifications confirmed based on buyer requirements.',
            },
            {
              heading: 'Printing',
              body: 'Plain (unprinted), single-color logo and full custom printing. Artwork requirements and print specifications confirmed during program setup.',
            },
            {
              heading: 'Container Loading',
              body: 'Efficient container loading for all sizes. Pallet configurations and container quantities confirmed based on size, board grade and program volume.',
            },
            {
              heading: 'Logistics',
              body: 'Freight coordination for U.S. buyers. Container-scale logistics planning as part of the supply program. Delivery timelines confirmed during quoting.',
            },
            {
              heading: 'Repeat Orders',
              body: 'Recurring supply programs available for distributors, chains and high-volume buyers. Consistent specification maintained across reorders.',
            },
          ].map(({ heading, body }) => (
            <div
              key={heading}
              style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
              className="rounded-lg p-5"
            >
              <h3 style={{ color: 'var(--color-wpb-navy)', borderBottom: '2px solid var(--color-wpb-red)', paddingBottom: '8px', marginBottom: '10px' }} className="font-bold text-sm inline-block">
                {heading}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Buyer confidence section */}
      <section
        style={{ background: 'var(--color-wpb-gray)', borderRadius: '12px' }}
        className="p-6 sm:p-10 mb-14"
      >
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-6 text-center">
          What Container-Scale Buyers Ask
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            { q: 'Can you handle our volume?', a: 'We work with buyers requiring one or more containers per order. Production capacity and supply program details are confirmed during the quoting process.' },
            { q: 'Can you maintain consistent specification?', a: 'Consistent specification across production runs and reorders is a core part of our program. Specification locking is confirmed when a supply program is established.' },
            { q: 'Do you support custom printing?', a: 'Yes. Custom printing programs including logo printing and private label are available. Artwork specifications and MOQ are confirmed during quoting.' },
            { q: 'How is freight handled?', a: 'We coordinate container freight and logistics for U.S. buyers. Freight planning and logistics details are part of the quoting process.' },
          ].map(({ q, a }) => (
            <div key={q} style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)' }} className="rounded-lg p-4">
              <div style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm mb-2">{q}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mb-14">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-4">Contact</h2>
        <div style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white', borderRadius: '12px' }} className="p-6 max-w-md">
          <dl className="space-y-3 text-sm">
            <div>
              <dt style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold mb-0.5">Email</dt>
              <dd>
                <a href={`mailto:${CONTACT.email}`} style={{ color: 'var(--color-wpb-red)' }} className="hover:underline">{CONTACT.email}</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <QuoteCTA
        heading="Discuss Your Supply Program"
        subheading="Request container pricing or discuss your volume requirements with our team."
      />
    </div>
  )
}
