import { notFound } from 'next/navigation'
import { authors, SITE_URL, BRAND } from '@/lib/content'

export const metadata = {
  robots: { index: false, follow: false },
}

export function generateStaticParams() {
  return Object.keys(authors).map((slug) => ({ slug }))
}

export default async function AuthorPage({ params }) {
  const { slug } = await params
  const author = authors[slug]
  if (!author) notFound()

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl font-bold mb-2">{author.name}</h1>
      <p style={{ color: 'var(--color-wpb-red)' }} className="font-semibold text-sm mb-3">{author.role}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{author.bio}</p>
    </div>
  )
}
