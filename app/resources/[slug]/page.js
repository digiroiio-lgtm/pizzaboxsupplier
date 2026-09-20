import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SITE_URL, BRAND, sizes, products } from '@/lib/content'
import { contentGuides, GUIDE_CTA_CONFIGS } from '@/lib/guides'
import { BreadcrumbNav, LeadForm } from '@/components/sections'
import { GuideVisual } from '@/components/diagrams'

export function generateStaticParams() {
  return contentGuides.map(({ slug }) => ({ slug }))
}

export function generateMetadata({ params }) {
  const guide = contentGuides.find((g) => g.slug === params.slug)
  if (!guide) return {}
  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: { canonical: `${SITE_URL}/resources/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${SITE_URL}/resources/${guide.slug}`,
      siteName: BRAND.name,
      type: 'article',
    },
  }
}

function renderSection(section, i) {
  if (section.type === 'text') {
    return (
      <section key={i} className="mb-8">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-3">{section.heading}</h2>
        {section.body.split('\n\n').map((para, j) => (
          <p key={j} className="text-gray-600 leading-relaxed mb-3">{para}</p>
        ))}
      </section>
    )
  }

  if (section.type === 'list') {
    return (
      <section key={i} className="mb-8">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-3">{section.heading}</h2>
        <ul className="space-y-2">
          {section.items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-gray-600">
              <span style={{ color: 'var(--color-wpb-red)', flexShrink: 0, fontWeight: 700, marginTop: '2px' }}>•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    )
  }

  if (section.type === 'table') {
    return (
      <section key={i} className="mb-8">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-xl font-bold mb-3">{section.heading}</h2>
        <div className="overflow-x-auto">
          <table style={{ border: '1px solid var(--color-wpb-gray-border)' }} className="w-full text-sm border-collapse">
            <tbody>
              {section.rows.map((row, j) => (
                <tr key={j} style={{ background: j % 2 === 0 ? 'white' : 'var(--color-wpb-gray)', borderBottom: '1px solid var(--color-wpb-gray-border)' }}>
                  <td className="px-4 py-2.5 font-semibold w-1/3" style={{ color: 'var(--color-wpb-navy)' }}>{row.label}</td>
                  <td className="px-4 py-2.5 text-gray-700">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    )
  }

  if (section.type === 'callout') {
    // BUSINESS_DATA_REQUIRED label is mapped to a neutral user-facing badge
    const badgeLabel = section.label === 'BUSINESS_DATA_REQUIRED' ? 'Verify Before Ordering' : section.label
    return (
      <section key={i} className="mb-8 p-5 rounded-xl" style={{ background: 'var(--color-wpb-gray)', border: '1px solid var(--color-wpb-gray-border)' }}>
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-lg font-bold mb-2">{section.heading}</h2>
        <div className="inline-block mb-3 px-2 py-1 text-xs font-semibold rounded" style={{ background: '#fff3cd', color: '#856404' }}>
          {badgeLabel}
        </div>
        <p className="text-gray-700 leading-relaxed text-sm">{section.body}</p>
      </section>
    )
  }

  return null
}

export default function GuideDetailPage({ params }) {
  const guide = contentGuides.find((g) => g.slug === params.slug)
  if (!guide) notFound()

  const ctaConfig = GUIDE_CTA_CONFIGS[guide.cluster]

  const relatedSizeObjects = (guide.relatedSizes || [])
    .map((slug) => sizes.find((s) => s.slug === slug))
    .filter(Boolean)

  const relatedProductObjects = (guide.relatedProducts || [])
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean)

  const relatedGuideObjects = (guide.relatedGuides || [])
    .map((slug) => contentGuides.find((g) => g.slug === slug))
    .filter(Boolean)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    url: `${SITE_URL}/resources/${guide.slug}`,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    publisher: {
      '@type': 'Organization',
      name: BRAND.name,
      url: SITE_URL,
    },
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: guide.title },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <BreadcrumbNav items={breadcrumbs} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {/* Category badge + H1 + intro */}
          <div className="mb-8">
            <div
              className="inline-block mb-3 px-2 py-1 text-xs font-semibold rounded uppercase tracking-wide"
              style={{ background: 'var(--color-wpb-gray)', color: 'var(--color-wpb-navy)' }}
            >
              {guide.category}
            </div>
            <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl sm:text-4xl font-bold mb-4">
              {guide.title}
            </h1>
            <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">{guide.intro}</p>
          </div>

          {/* Guide-specific visual diagram */}
          <GuideVisual slug={guide.slug} />

          {/* Sections */}
          {guide.sections.map((section, i) => renderSection(section, i))}

          {/* Related sizes */}
          {relatedSizeObjects.length > 0 && (
            <section className="mb-8">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-lg font-bold mb-3">Related Size Ordering Guides</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {relatedSizeObjects.map((size) => (
                  <Link
                    key={size.slug}
                    href={`/pizza-box-sizes/${size.slug}`}
                    style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
                    className="group rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm group-hover:underline">{size.title}</div>
                    <div className="text-xs text-gray-400 mt-1">Order this size →</div>
                  </Link>
                ))}
              </div>
              <div className="mt-3">
                <Link href="/pizza-box-sizes" style={{ color: 'var(--color-wpb-red)' }} className="text-sm font-semibold hover:underline">
                  Full size guide →
                </Link>
              </div>
            </section>
          )}

          {/* Related products */}
          {relatedProductObjects.length > 0 && (
            <section className="mb-8">
              <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-lg font-bold mb-3">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedProductObjects.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
                    className="group rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div style={{ color: 'var(--color-wpb-navy)' }} className="font-semibold text-sm group-hover:underline">{product.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{product.sizes.slice(0, 3).join(', ')}</div>
                  </Link>
                ))}
              </div>
              <div className="mt-3">
                <Link href="/products" style={{ color: 'var(--color-wpb-red)' }} className="text-sm font-semibold hover:underline">
                  All products →
                </Link>
              </div>
            </section>
          )}

          {/* Related guides — populates related-guide graph */}
          {relatedGuideObjects.length > 0 && (
            <section className="mb-8 p-4 rounded-lg" style={{ background: 'var(--color-wpb-gray)', border: '1px solid var(--color-wpb-gray-border)' }}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--color-wpb-navy)' }}>Related Guides</div>
              <div className="flex flex-col gap-1.5">
                {relatedGuideObjects.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/resources/${g.slug}`}
                    style={{ color: 'var(--color-wpb-red)' }}
                    className="text-sm font-semibold hover:underline"
                  >
                    {g.title} →
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div>
          <div className="sticky top-6 space-y-4">
            {/* Cluster CTA */}
            <div style={{ background: 'var(--color-wpb-navy)', borderRadius: '12px' }} className="p-6">
              <h3 className="text-base font-bold text-white mb-2">{ctaConfig.heading}</h3>
              <p className="text-gray-300 text-sm mb-4">{ctaConfig.subheading}</p>
              <Link
                href="/get-quote"
                style={{ background: 'var(--color-wpb-red)' }}
                className="block text-center py-3 font-bold text-white rounded hover:opacity-90 transition-opacity text-sm"
              >
                Request Container Pricing
              </Link>
            </div>

            {/* Quick links */}
            <div style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white', borderRadius: '12px' }} className="p-5">
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--color-wpb-navy)' }}>Quick Links</div>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products" style={{ color: 'var(--color-wpb-red)' }} className="hover:underline font-semibold">All Products →</Link></li>
                <li><Link href="/pizza-box-sizes" style={{ color: 'var(--color-wpb-red)' }} className="hover:underline font-semibold">Size Guide →</Link></li>
                <li><Link href="/custom-pizza-boxes" style={{ color: 'var(--color-wpb-red)' }} className="hover:underline font-semibold">Custom Printing →</Link></li>
                <li><Link href="/resources" style={{ color: 'var(--color-wpb-red)' }} className="hover:underline font-semibold">All Resources →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom RFQ form */}
      <section style={{ background: 'var(--color-wpb-navy)', borderRadius: '12px' }} className="p-8 sm:p-10 mt-10">
        <h2 className="text-2xl font-bold mb-2 text-white text-center">{ctaConfig.heading}</h2>
        <p className="text-gray-300 text-center mb-8">{ctaConfig.subheading}</p>
        <div style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '12px' }} className="p-6 sm:p-8 max-w-3xl mx-auto">
          <LeadForm sourcePage={`/resources/${guide.slug}`} />
        </div>
      </section>
    </div>
  )
}
