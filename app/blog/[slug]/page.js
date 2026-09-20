import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, SITE_URL, BRAND } from '@/lib/content'
import { BreadcrumbNav, QuoteCTA } from '@/components/sections'

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }))
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    // Content not yet published — keep noindex until real content is added
    robots: { index: false, follow: true },
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: BRAND.name,
    },
  }
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/blog' },
    { label: post.title },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <BreadcrumbNav items={breadcrumbs} />

      <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-3xl font-bold mb-4">
        {post.title}
      </h1>
      <p className="text-gray-600 mb-8 leading-relaxed">{post.description}</p>

      {/* Content placeholder — BUSINESS_DATA_REQUIRED: Add full article content before publishing */}
      <div
        style={{ border: '1px solid var(--color-wpb-gray-border)', background: 'var(--color-wpb-gray)', borderRadius: '12px' }}
        className="p-8 text-center mb-10"
      >
        <div className="text-4xl mb-3" aria-hidden="true">📋</div>
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="font-bold text-lg mb-2">
          Full Article Coming Soon
        </h2>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          This guide is being prepared. For immediate help with wholesale pizza box procurement, request container pricing directly.
        </p>
        <Link
          href="/get-quote"
          style={{ background: 'var(--color-wpb-red)', color: 'white' }}
          className="inline-block mt-5 px-6 py-2.5 text-sm font-bold rounded hover:opacity-90 transition-opacity"
        >
          Request Container Pricing
        </Link>
      </div>

      <QuoteCTA heading="Need Wholesale Pizza Box Pricing?" subheading="Our team works with distributors, chains and high-volume buyers." compact />
    </div>
  )
}
