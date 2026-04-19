import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import { CONTACT, SITE_URL } from "@/lib/content";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import StickyCtaBar from "@/components/StickyCtaBar";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pizza Box Supplier USA | Wholesale Pizza Boxes & Custom Manufacturing",
    template: "%s | PizzaBoxSupplier",
  },
  description:
    "Pizza box manufacturer for USA distributors. Wholesale pizza boxes, bulk pizza boxes, and custom pizza boxes wholesale with direct factory pricing.",
  keywords: [
    "pizza box supplier USA",
    "wholesale pizza boxes",
    "bulk pizza boxes",
    "custom pizza boxes wholesale",
    "pizza box manufacturer",
  ],
};

const menu = [
  ["Home", "/"],
  ["Products", "/products"],
  ["Wholesale", "/wholesale"],
  ["Bulk Orders", "/bulk-orders"],
  ["Custom Pizza Boxes", "/custom-pizza-boxes"],
  ["About Us", "/about-us"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

const footerLinks = {
  "Quick Links": [
    ["Products", "/products"],
    ["Wholesale", "/wholesale"],
    ["Bulk Orders", "/bulk-orders"],
    ["Custom Pizza Boxes", "/custom-pizza-boxes"],
    ["Get Quote", "/get-quote"],
  ],
  "Product Sizes": [
    ["10 Inch Pizza Boxes", "/products/10-inch-pizza-box"],
    ["12 Inch Pizza Boxes", "/products/12-inch-pizza-box"],
    ["14 Inch Pizza Boxes", "/products/14-inch-pizza-box"],
    ["16 Inch Pizza Boxes", "/products/16-inch-pizza-box"],
    ["Custom Printed Boxes", "/products/custom-printed-pizza-boxes"],
  ],
  "Geo: By State": [
    ["Pizza Box Supplier USA", "/pizza-box-supplier-usa"],
    ["Pizza Box Supplier California", "/pizza-box-supplier-california"],
    ["Pizza Box Supplier Texas", "/pizza-box-supplier-texas"],
    ["Pizza Box Supplier Florida", "/pizza-box-supplier-florida"],
    ["Pizza Box Supplier New York", "/pizza-box-supplier-new-york"],
    ["Pizza Box Supplier New Jersey", "/pizza-box-supplier-new-jersey"],
    ["Pizza Box Supplier Illinois", "/pizza-box-supplier-illinois"],
    ["Pizza Box Supplier UK", "/pizza-box-supplier-uk"],
  ],
  "Logistics & Pricing": [
    ["Shipping Pizza Boxes to USA", "/shipping-pizza-boxes-to-usa"],
    ["Container Loading Guide", "/pizza-box-container-loading"],
    ["Import Process USA", "/pizza-box-import-process-usa"],
    ["Freight Cost Estimator", "/pizza-box-freight-cost-estimator"],
    ["Pizza Box Price Guide", "/pizza-box-price"],
    ["Cost Per 1,000 Units", "/pizza-box-cost-per-1000"],
    ["Custom Pizza Box Cost", "/custom-pizza-box-cost"],
  ],
  "Buyer Segments": [
    ["For Distributors", "/pizza-boxes-for-distributors"],
    ["For Restaurant Chains", "/pizza-boxes-for-restaurant-chains"],
    ["For Wholesale Importers", "/pizza-boxes-for-wholesale-importers"],
    ["For Ghost Kitchens", "/pizza-boxes-for-ghost-kitchens"],
    ["For Frozen Food Brands", "/pizza-boxes-for-frozen-food-brands"],
    ["For Takeaway Business", "/pizza-boxes-for-takeaway-business"],
    ["For LA Restaurants", "/pizza-boxes-for-los-angeles-restaurants"],
  ],
  "Trust & Company": [
    ["About Us", "/about-us"],
    ["Factory", "/factory"],
    ["Certifications", "/certifications"],
    ["Export Markets", "/export-markets"],
    ["Case Studies", "/case-studies"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ],
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Manufacturer", "LocalBusiness"],
    name: "PizzaBoxSupplier",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ikitelli OSB",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    sameAs: [CONTACT.whatsapp],
    description:
      "Factory-direct wholesale pizza box manufacturer. Trusted by 400+ buyers in 20+ countries. BRCGS, ISO 22000 and HACCP certified.",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 150 },
    areaServed: ["US", "GB", "AU", "CA", "DE", "FR", "NL"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wholesale Pizza Boxes",
      url: `${SITE_URL}/products`,
    },
  };

  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#f8f9fa] text-gray-900">
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        {/* ── Top utility bar ── */}
        <div className="border-b border-gray-200 bg-gray-50 text-xs text-gray-600">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 1a5 5 0 100 10A5 5 0 008 1zM6.354 5.646a.5.5 0 10-.708.708L7.293 8 5.646 9.646a.5.5 0 00.708.708L8 8.707l1.646 1.647a.5.5 0 00.708-.708L8.707 8l1.647-1.646a.5.5 0 00-.708-.708L8 7.293 6.354 5.646z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-emerald-700">BRCGS Certified</span>
              </span>
              <span className="flex items-center gap-1">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 1a5 5 0 100 10A5 5 0 008 1zM6.354 5.646a.5.5 0 10-.708.708L7.293 8 5.646 9.646a.5.5 0 00.708.708L8 8.707l1.646 1.647a.5.5 0 00.708-.708L8.707 8l1.647-1.646a.5.5 0 00-.708-.708L8 7.293 6.354 5.646z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-emerald-700">ISO 22000</span>
              </span>
              <span className="flex items-center gap-1">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 1a5 5 0 100 10A5 5 0 008 1zM6.354 5.646a.5.5 0 10-.708.708L7.293 8 5.646 9.646a.5.5 0 00.708.708L8 8.707l1.646 1.647a.5.5 0 00.708-.708L8.707 8l1.647-1.646a.5.5 0 00-.708-.708L8 7.293 6.354 5.646z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-emerald-700">HACCP</span>
              </span>
              {/* Social proof — visible on mobile too */}
              <span className="hidden sm:inline font-medium text-gray-500">
                Trusted by <strong className="text-orange-600">400+</strong> buyers in <strong className="text-orange-600">20+</strong> countries
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-orange-600">{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-orange-600">{CONTACT.email}</a>
            </div>
          </div>
        </div>

        {/* ── Main header ── */}
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
          {/* Logo + CTA row */}
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-orange-600 text-white font-black text-sm group-hover:bg-orange-700">
                PB
              </span>
              <span className="text-xl font-extrabold tracking-tight text-gray-900">
                PizzaBox<span className="text-orange-600">Supplier</span>
              </span>
            </Link>

            <div className="hidden items-center gap-3 sm:flex">
              <div className="text-right text-xs text-gray-500">
                <p className="font-semibold text-gray-700">Quote in 24 hours</p>
                <p>
                  <span className="font-semibold text-orange-600">400+</span> buyers ·{" "}
                  <span className="font-semibold text-orange-600">20+</span> countries ·{" "}
                  35 containers/month
                </p>
              </div>
              <Link
                href="/get-quote"
                className="rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-700 hover:shadow-md"
              >
                Get Quote →
              </Link>
            </div>
          </div>

          {/* Navigation strip */}
          <nav className="border-t border-gray-100 bg-gray-900" aria-label="Main navigation">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-0.5 px-4 py-0">
              {menu.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="px-3 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-sm transition-colors"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/get-quote"
                className="ml-auto rounded bg-orange-600 px-4 py-2 text-sm font-bold text-white hover:bg-orange-500 sm:hidden"
              >
                Get Quote
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-4 py-8">{children}</main>

        {/* ── Exit intent popup ── */}
        <ExitIntentPopup />

        {/* ── Mobile sticky CTA bar (replaces floating buttons on small screens) ── */}
        <StickyCtaBar />

        {/* ── Floating CTAs — desktop only (sm+) ── */}
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-4 z-30 hidden sm:flex items-center gap-2 rounded-full bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-green-700 hover:shadow-xl"
          aria-label="Talk to Export Manager via WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Talk to Export Manager
        </a>
        <Link
          href="/get-quote"
          className="fixed bottom-6 right-4 z-30 hidden sm:block rounded-full bg-orange-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-orange-700 hover:shadow-xl"
          aria-label="Get container pricing"
        >
          Get Container Pricing
        </Link>

        {/* ── Footer ── */}
        <footer className="mt-10 border-t border-gray-200 bg-gray-900 text-gray-400">
          <div className="mx-auto max-w-7xl px-4 py-10">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
              {/* Brand column */}
              <div className="space-y-4">
                <Link href="/" className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded bg-orange-600 text-white font-black text-xs">PB</span>
                  <span className="text-base font-extrabold text-white">PizzaBox<span className="text-orange-500">Supplier</span></span>
                </Link>
                <p className="text-sm leading-relaxed">
                  Trusted by distributors in 20+ countries. 35+ containers exported monthly.
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-300">{CONTACT.address}</p>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="block hover:text-orange-400">{CONTACT.phone}</a>
                  <a href={`mailto:${CONTACT.email}`} className="block hover:text-orange-400">{CONTACT.email}</a>
                </div>
              </div>

              {/* Link columns */}
              {Object.entries(footerLinks).map(([heading, links]) => (
                <div key={heading} className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">{heading}</h3>
                  <ul className="space-y-1.5 text-sm">
                    {links.map(([label, href]) => (
                      <li key={href}>
                        <Link href={href} className="hover:text-orange-400 hover:underline">{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-gray-700 pt-6 text-xs text-gray-500">
              <p>© {new Date().getFullYear()} PizzaBoxSupplier. All rights reserved.</p>
              <div className="flex gap-3">
                <span className="rounded border border-gray-700 px-2 py-0.5 text-emerald-500">BRCGS Certified</span>
                <span className="rounded border border-gray-700 px-2 py-0.5 text-emerald-500">ISO 22000</span>
                <span className="rounded border border-gray-700 px-2 py-0.5 text-emerald-500">HACCP</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
