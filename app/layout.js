import './globals.css'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL, BRAND, CONTACT } from '@/lib/content'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Wholesale Pizza Boxes for High-Volume U.S. Buyers | WholesalePizzaBoxes.com',
    template: '%s | WholesalePizzaBoxes.com',
  },
  description: 'Wholesale pizza boxes for distributors, restaurant chains, franchise groups and high-volume foodservice buyers. Container-volume programs, custom printing and recurring supply.',
  keywords: ['wholesale pizza boxes', 'bulk pizza boxes', 'custom printed pizza boxes', 'pizza box distributor', 'container volume pizza boxes', 'wholesale pizza box supplier'],
  openGraph: {
    type: 'website',
    siteName: BRAND.name,
    url: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND.name,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  email: CONTACT.email,
  // BUSINESS_DATA_REQUIRED: Add verified phone and address before launch
  sameAs: [],
}

const nav = [
  { label: 'Products', href: '/products' },
  { label: 'Sizes', href: '/pizza-box-sizes' },
  { label: 'Custom Printing', href: '/custom-pizza-boxes' },
  { label: 'Industries', href: '/industries' },
  { label: 'Manufacturer', href: '/about-us' },
  { label: 'Resources', href: '/resources' },
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Utility / trust bar */}
        <div style={{ background: 'var(--color-wpb-navy-dark)', color: '#c8d0e0' }} className="text-xs py-2 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span>Wholesale Pizza Boxes</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span className="hidden sm:inline">Container Programs</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span className="hidden sm:inline">Custom Printing</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span className="hidden sm:inline">Nationwide Delivery Planning</span>
            </div>
            <Link
              href="/get-quote"
              style={{ color: '#ffffff' }}
              className="font-semibold underline underline-offset-2 hover:opacity-80"
            >
              Request Container Pricing →
            </Link>
          </div>
        </div>

        {/* Header */}
        <header style={{ background: 'var(--color-wpb-navy)', borderBottom: '1px solid var(--color-wpb-navy-mid)' }} className="sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label={`${BRAND.name} — Home`}>
              <img src="/logo.svg" alt={BRAND.name} width={36} height={36} className="w-9 h-9" />
              <span className="font-bold text-base leading-tight text-white hidden sm:block">
                WholesalePizzaBoxes<span style={{ color: 'var(--color-wpb-red)' }}>.com</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
              {nav.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {CONTACT.email && (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hidden sm:block text-xs text-gray-300 hover:text-white transition-colors"
                >
                  {CONTACT.email}
                </a>
              )}
              <Link
                href="/get-quote"
                style={{ background: 'var(--color-wpb-red)' }}
                className="inline-flex items-center px-4 py-2 text-sm font-bold text-white rounded hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Get Quote
              </Link>

              {/* Mobile menu button — functional via details/summary for zero-JS */}
              <details className="lg:hidden relative">
                <summary
                  style={{ color: 'white', listStyle: 'none', cursor: 'pointer' }}
                  className="flex items-center justify-center w-9 h-9 rounded hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </summary>
                <div
                  style={{ background: 'var(--color-wpb-navy)', border: '1px solid var(--color-wpb-navy-mid)' }}
                  className="absolute right-0 top-full mt-1 w-56 rounded shadow-xl py-1 z-50"
                >
                  {nav.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-white/10"
                    >
                      {label}
                    </Link>
                  ))}
                  <div style={{ borderTop: '1px solid var(--color-wpb-navy-mid)' }} className="mt-1 pt-1">
                    <Link
                      href="/get-quote"
                      style={{ color: 'var(--color-wpb-red)' }}
                      className="block px-4 py-2.5 text-sm font-bold"
                    >
                      Get Quote →
                    </Link>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer style={{ background: 'var(--color-wpb-navy-dark)', borderTop: '2px solid var(--color-wpb-red)' }} className="mt-16">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              <div>
                <div className="font-bold text-white mb-3 text-base">{BRAND.name}</div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  Wholesale pizza boxes for high-volume U.S. buyers. Container-volume programs for distributors, chains and foodservice buyers.
                </p>
                <Link
                  href="/get-quote"
                  style={{ background: 'var(--color-wpb-red)' }}
                  className="inline-block px-4 py-2 text-sm font-bold text-white rounded hover:opacity-90 transition-opacity"
                >
                  Request Container Pricing
                </Link>
              </div>
              <div>
                <div className="font-semibold text-gray-300 mb-3 text-sm uppercase tracking-wide">Products</div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
                  <li><Link href="/products/wholesale-pizza-boxes" className="hover:text-white transition-colors">Wholesale Pizza Boxes</Link></li>
                  <li><Link href="/products/custom-printed-pizza-boxes" className="hover:text-white transition-colors">Custom Printed</Link></li>
                  <li><Link href="/products/bulk-pizza-boxes" className="hover:text-white transition-colors">Bulk Pizza Boxes</Link></li>
                  <li><Link href="/pizza-box-sizes" className="hover:text-white transition-colors">All Sizes</Link></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-gray-300 mb-3 text-sm uppercase tracking-wide">Company</div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/about-us" className="hover:text-white transition-colors">Manufacturer</Link></li>
                  <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
                  <li><Link href="/custom-pizza-boxes" className="hover:text-white transition-colors">Custom Printing</Link></li>
                  <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-gray-300 mb-3 text-sm uppercase tracking-wide">Contact</div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                      {CONTACT.email}
                    </a>
                  </li>
                  <li><Link href="/get-quote" className="hover:text-white transition-colors">Request Pricing</Link></li>
                </ul>
                <div className="mt-4 space-y-1 text-xs text-gray-500">
                  <Link href="/pizza-box-supplier-usa" className="block hover:text-gray-300 transition-colors">Pizza Box Supplier — USA</Link>
                  <Link href="/pizza-box-supplier-california" className="block hover:text-gray-300 transition-colors">Pizza Box Supplier — California</Link>
                  <Link href="/pizza-box-supplier-new-york" className="block hover:text-gray-300 transition-colors">Pizza Box Supplier — New York</Link>
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
              <div>© {new Date().getFullYear()} WholesalePizzaBoxes.com. All rights reserved.</div>
              <div className="flex items-center gap-4">
                <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
                <span>·</span>
                <Link href="/get-quote" className="hover:text-gray-300 transition-colors">Get Quote</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Mobile sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden" style={{ background: 'var(--color-wpb-red)' }}>
          <Link
            href="/get-quote"
            className="flex items-center justify-center gap-2 py-4 text-white font-bold text-sm w-full"
          >
            <span>Request Container Pricing</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </Link>
        </div>
      </body>
    </html>
  )
}
