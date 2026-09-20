import Link from 'next/link'
import { SITE_URL, BRAND, blogPosts } from '@/lib/content'
import { BreadcrumbNav, QuoteCTA } from '@/components/sections'

export const metadata = {
  title: 'Wholesale Pizza Box Resources & Articles',
  description: 'Procurement articles and guides for wholesale pizza box buyers. Covering sizes, custom printing, container ordering and B2B supply for distributors and chains.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Wholesale Pizza Box Resources & Articles',
    description: 'Guides and articles for wholesale pizza box buyers.',
    url: `${SITE_URL}/blog`,
    siteName: BRAND.name,
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Resources' },
]

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />
      <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl font-bold mb-4">
        Wholesale Pizza Box Resources
      </h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Procurement guides and articles for wholesale pizza box buyers.
        For immediate pricing, use our{' '}
        <Link href="/get-quote" style={{ color: 'var(--color-wpb-red)' }} className="hover:underline">
          request container pricing form
        </Link>.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'white' }}
            className="rounded-lg p-5"
          >
            <h2 style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-base mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{post.description}</p>
            <div
              style={{ background: 'var(--color-wpb-gray)', borderRadius: '4px' }}
              className="inline-block px-3 py-1 text-xs text-gray-500"
            >
              Content coming soon
            </div>
          </div>
        ))}
      </div>

      <QuoteCTA
        heading="Ready to Source Wholesale Pizza Boxes?"
        subheading="Skip the research — request container pricing directly for your program."
        compact
      />
    </div>
  )
}
