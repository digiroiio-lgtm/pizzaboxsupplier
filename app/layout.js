import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import { CONTACT, SITE_URL } from "@/lib/content";

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

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PizzaBoxSupplier",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ikitelli OSB",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    sameAs: [CONTACT.whatsapp],
  };

  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-zinc-50 text-zinc-900">
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <header className="border-b bg-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
            <Link href="/" className="text-lg font-bold">PizzaBoxSupplier</Link>
            <nav className="flex flex-wrap gap-3 text-sm">
              {menu.map(([label, href]) => (
                <Link key={href} href={href} className="hover:text-orange-700">{label}</Link>
              ))}
              <Link href="/get-quote" className="rounded bg-orange-600 px-3 py-1 font-semibold text-white">
                Get Quote
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-8">{children}</main>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-4 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg"
        >
          WhatsApp
        </a>
        <Link href="/get-quote" className="fixed bottom-6 right-4 rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
          Get Quote
        </Link>
        <footer className="mt-10 border-t bg-white">
          <div className="mx-auto max-w-6xl space-y-2 px-4 py-6 text-sm text-zinc-700">
            <p>Trusted by distributors in 20+ countries • 35+ containers exported monthly</p>
            <p>{CONTACT.address}</p>
            <p>{CONTACT.phone} • {CONTACT.email}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
