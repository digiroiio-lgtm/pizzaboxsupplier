import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | WholesalePizzaBoxes.com',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <div className="text-7xl font-bold mb-4" style={{ color: 'var(--color-wpb-gray-mid)' }}>404</div>
      <h1 style={{ color: 'var(--color-wpb-navy)' }} className="text-2xl sm:text-3xl font-bold mb-4">
        Page Not Found
      </h1>
      <p className="text-gray-600 mb-10 leading-relaxed">
        The page you're looking for doesn't exist or has moved. Use the links below to find what you need.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
        {[
          { label: 'Products', href: '/products' },
          { label: 'Sizes', href: '/pizza-box-sizes' },
          { label: 'Get Quote', href: '/get-quote' },
          { label: 'Home', href: '/' },
        ].map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            style={{ border: '1px solid var(--color-wpb-gray-border)', color: 'var(--color-wpb-navy)' }}
            className="rounded-lg p-4 text-sm font-semibold hover:shadow-md transition-shadow bg-white"
          >
            {label}
          </Link>
        ))}
      </div>

      <div style={{ background: 'var(--color-wpb-gray)', borderRadius: '12px' }} className="p-6 sm:p-8">
        <h2 style={{ color: 'var(--color-wpb-navy)' }} className="text-lg font-bold mb-2">
          Looking for wholesale pizza box pricing?
        </h2>
        <p className="text-gray-600 text-sm mb-5">
          Container and pallet programs for distributors, chains and high-volume buyers.
        </p>
        <Link
          href="/get-quote"
          style={{ background: 'var(--color-wpb-red)' }}
          className="inline-flex items-center px-6 py-3 text-sm font-bold text-white rounded hover:opacity-90 transition-opacity"
        >
          Request Container Pricing →
        </Link>
      </div>
    </div>
  )
}
