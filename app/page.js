import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import {
  SITE_URL,
  BRAND,
  products,
  sizes,
  industries,
  homepageFaqs,
  resourceGuides,
  buildFaqSchema,
} from '@/lib/content'
import {
  TrustSignals,
  ContainerVolumeSection,
  SizeCard,
  IndustryCard,
  ProductCard,
  LeadForm,
  FAQSection,
  QuoteCTA,
  ValuePropBadges,
} from '@/components/sections'

export const metadata = {
  title: 'Wholesale Pizza Boxes for High-Volume U.S. Buyers | WholesalePizzaBoxes.com',
  description: 'Bulk pizza box supply for distributors, restaurant chains, franchise groups and high-volume foodservice buyers requiring container-scale purchasing. Custom printing, private label, recurring supply programs.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Wholesale Pizza Boxes for High-Volume U.S. Buyers',
    description: 'Container-volume wholesale pizza box supply for U.S. distributors, chains and high-volume foodservice buyers.',
    url: SITE_URL,
    type: 'website',
    siteName: BRAND.name,
  },
}

const featuredProducts = products.slice(0, 6)
const faqSchema = buildFaqSchema(homepageFaqs)

export default function HomePage() {
  return (
    <>
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero */}
      <section
        style={{ background: 'linear-gradient(135deg, var(--color-wpb-navy-dark) 0%, var(--color-wpb-navy) 60%, var(--color-wpb-navy-mid) 100%)', overflow: 'hidden' }}
        className="px-4 py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div
                style={{ background: 'var(--color-wpb-red)', color: 'white' }}
                className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide rounded mb-5"
              >
                USA B2B Wholesale Supply
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Wholesale Pizza Boxes for High-Volume U.S. Buyers
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Bulk pizza box supply for distributors, restaurant chains, franchise groups and high-volume foodservice buyers requiring container-scale purchasing.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/get-quote"
                  style={{ background: 'var(--color-wpb-red)' }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-white rounded text-base hover:opacity-90 transition-opacity"
                >
                  Request Container Pricing
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  href="/products"
                  style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'white' }}
                  className="inline-flex items-center px-7 py-3.5 font-semibold rounded text-base hover:bg-white/10 transition-colors"
                >
                  View Products
                </Link>
              </div>
              <ValuePropBadges />
            </div>
            <div className="relative hidden lg:block" style={{ height: '440px', borderRadius: '12px', overflow: 'hidden' }}>
              <Image
                src="/lpack-1776968243178-header.png"
                alt="Wholesale pizza boxes stacked for distribution — container-volume supply programs"
                fill
                priority
                sizes="50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust signals bar */}
      <TrustSignals />

      {/* 3. Product categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl sm:text-3xl font-bold mb-2">
                Wholesale Pizza Box Products
              </h2>
              <p className="text-gray-600">Stock and custom programs for high-volume buyers.</p>
            </div>
            <Link
              href="/products"
              style={{ color: 'var(--color-wpb-red)' }}
              className="text-sm font-semibold whitespace-nowrap hover:underline flex-shrink-0"
            >
              All Products →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Box → Container procurement hierarchy */}
      <ContainerVolumeSection />

      {/* 5. Size selector */}
      <section className="py-16 px-4" style={{ background: 'var(--color-wpb-gray)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl sm:text-3xl font-bold mb-3">
              Wholesale Pizza Box Sizes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Standard sizes from 8" to 20". Container and pallet programs available for all sizes.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 mb-8">
            {sizes.map((size) => (
              <SizeCard key={size.slug} size={size} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/pizza-box-sizes"
              style={{ border: '1px solid var(--color-wpb-navy)', color: 'var(--color-wpb-navy)' }}
              className="inline-block px-6 py-2.5 text-sm font-semibold rounded hover:bg-white transition-colors"
            >
              View Size Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Custom printing capability */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                style={{ color: 'var(--color-wpb-red)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}
              >
                Custom Printing
              </div>
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl sm:text-3xl font-bold mb-4">
                Branded &amp; Private-Label Pizza Boxes
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Custom printed pizza boxes for chains, franchise groups and private-label programs. Logo printing, full custom designs and branded packaging programs available for high-volume buyers.
              </p>
              <Link
                href="/custom-pizza-boxes"
                style={{ background: 'var(--color-wpb-navy)', color: 'white' }}
                className="inline-block px-6 py-3 text-sm font-bold rounded hover:opacity-90 transition-opacity"
              >
                Custom Printing Options →
              </Link>
            </div>
            <div
              style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
              className="rounded-lg p-6"
            >
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Print Options', 'Logo, custom design, private label'],
                    ['Print Colors', 'Single color through full custom — confirm at quote'],
                    ['Artwork', 'Vector artwork preferred — specifications confirmed at quote'],
                    ['MOQ for Custom', 'Confirmed during quoting based on size and specification'],
                    ['Lead Time', 'Confirmed during quoting based on specification and volume'],
                    ['Repeat Runs', 'Repeat order programs available for consistent supply'],
                  ].map(([label, value]) => (
                    <tr key={label} style={{ borderBottom: '1px solid var(--color-wpb-gray-mid)' }}>
                      <td style={{ color: 'var(--color-wpb-navy)' }} className="py-2.5 pr-4 font-semibold align-top w-1/3 text-xs">{label}</td>
                      <td className="py-2.5 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Who we supply — industry tiles */}
      <section className="py-16 px-4" style={{ background: 'var(--color-wpb-gray)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl sm:text-3xl font-bold mb-3">
              Who We Supply
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our programs are designed for professional procurement buyers and high-volume foodservice businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/industries"
              style={{ border: '1px solid var(--color-wpb-navy)', color: 'var(--color-wpb-navy)' }}
              className="inline-block px-6 py-2.5 text-sm font-semibold rounded hover:bg-white transition-colors"
            >
              View All Industries →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Container & recurring supply proposition */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                style={{ color: 'var(--color-wpb-red)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}
              >
                Container &amp; Supply Programs
              </div>
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl sm:text-3xl font-bold mb-4">
                Designed for Container-Scale Procurement
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our programs are built around buyers who need one or more containers of pizza boxes on a reliable schedule. We work with distributors, chains and importers to establish supply programs that match their volume, specification and delivery requirements.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Container and pallet-volume pricing',
                  'Recurring supply programs for consistent inventory',
                  'Custom specifications locked to your program',
                  'Freight and logistics planning support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg style={{ color: 'var(--color-wpb-red)', flexShrink: 0, marginTop: '2px' }} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/get-quote"
                style={{ background: 'var(--color-wpb-red)', color: 'white' }}
                className="inline-block px-6 py-3 text-sm font-bold rounded hover:opacity-90 transition-opacity"
              >
                Request Container Pricing
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '1 Container', desc: 'Qualified buyer threshold', icon: '🚢' },
                { label: '2–3 Containers', desc: 'Strong buyer program', icon: '📦' },
                { label: '4–10 Containers', desc: 'High-value program', icon: '🏗️' },
                { label: '10+ Containers', desc: 'Enterprise supply program', icon: '🔄' },
              ].map(({ label, desc, icon }) => (
                <div
                  key={label}
                  style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
                  className="rounded-lg p-4 text-center"
                >
                  <div className="text-2xl mb-2" aria-hidden="true">{icon}</div>
                  <div style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-sm">{label}</div>
                  <div className="text-xs text-gray-500 mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Manufacturer / supply capability teaser */}
      <section className="py-16 px-4" style={{ background: 'var(--color-wpb-gray)' }}>
        <div className="max-w-7xl mx-auto">
          <div
            style={{ background: 'var(--color-wpb-navy)', borderRadius: '12px' }}
            className="px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Supply Capability Built for High-Volume Buyers
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                High-capacity corrugated pizza box supply designed for the U.S. market. Consistent specifications, reliable reorder programs and experienced packaging supply for container-scale buyers.
              </p>
            </div>
            <Link
              href="/about-us"
              style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'white', flexShrink: 0 }}
              className="inline-block px-6 py-3 text-sm font-semibold rounded hover:bg-white/10 transition-colors"
            >
              About the Manufacturer →
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Buyer guides / resources */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl sm:text-3xl font-bold mb-2">
                Procurement Resources
              </h2>
              <p className="text-gray-600">Guides and tools for wholesale pizza box buyers.</p>
            </div>
            <Link href="/resources" style={{ color: 'var(--color-wpb-red)' }} className="text-sm font-semibold whitespace-nowrap hover:underline flex-shrink-0">
              All Resources →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resourceGuides.map((guide) => (
              <Link
                key={guide.slug}
                href="/resources"
                style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
                className="group block rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <div
                  style={{ background: 'var(--color-wpb-gray)', color: 'var(--color-wpb-navy)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                  className="inline-block px-2 py-1 rounded mb-3"
                >
                  {guide.category}
                </div>
                <h3 style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-sm mb-2 group-hover:underline leading-snug">
                  {guide.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. RFQ qualification section */}
      <section
        id="get-quote"
        className="py-16 px-4"
        style={{ background: 'var(--color-wpb-gray)' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl sm:text-3xl font-bold mb-3">
              Request Container Pricing
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Complete the form to request wholesale pricing for your program. We respond to qualified inquiries promptly.
            </p>
          </div>
          <div
            style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)' }}
            className="rounded-xl p-6 sm:p-8"
          >
            <LeadForm sourcePage="/" />
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQSection faqs={homepageFaqs} />
          <div className="mt-10 text-center">
            <QuoteCTA
              heading="Ready to Discuss Your Volume?"
              subheading="Request container pricing for your pizza box program. We work with distributors, chains and high-volume buyers across the United States."
              compact
            />
          </div>
        </div>
      </section>
    </>
  )
}
