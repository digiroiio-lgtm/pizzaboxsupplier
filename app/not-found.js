import Link from "next/link";
import { CTAButtons, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "Page Not Found | PizzaBoxSupplier",
  description: "The page you are looking for does not exist. Browse our wholesale pizza boxes and bulk pizza box products.",
  robots: { index: false, follow: false },
};

const popularSegments = [
  ["For Distributors", "/pizza-boxes-for-distributors"],
  ["For Restaurant Chains", "/pizza-boxes-for-restaurant-chains"],
  ["For Wholesale Importers", "/pizza-boxes-for-wholesale-importers"],
  ["For Ghost Kitchens", "/pizza-boxes-for-ghost-kitchens"],
];

const popularProducts = [
  ["10 Inch Pizza Boxes", "/products/10-inch-pizza-box"],
  ["12 Inch Pizza Boxes", "/products/12-inch-pizza-box"],
  ["14 Inch Pizza Boxes", "/products/14-inch-pizza-box"],
  ["16 Inch Pizza Boxes", "/products/16-inch-pizza-box"],
  ["Custom Printed Boxes", "/products/custom-printed-pizza-boxes"],
];

export default function NotFound() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-12 sm:px-10 text-center">
        <div className="mx-auto max-w-2xl space-y-4">
          <p className="text-8xl font-black text-orange-600">404</p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            This Page Does Not Exist
          </h1>
          <p className="text-lg text-gray-400">
            The URL you followed may be incorrect or the page may have been
            moved. Use the links below to find what you need.
          </p>
          <TrustBadges />
        </div>
      </section>

      {/* ── Quick nav grid ── */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Buyer segments */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
            By Buyer Type
          </h2>
          <ul className="space-y-2">
            {popularSegments.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-orange-600"
                >
                  <span className="text-orange-500">→</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product sizes */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
            Product Sizes
          </h2>
          <ul className="space-y-2">
            {popularProducts.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-orange-600"
                >
                  <span className="text-orange-500">→</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── More links ── */}
      <div className="flex flex-wrap gap-3 text-sm">
        <Link href="/wholesale" className="font-semibold text-orange-600 hover:underline">
          Wholesale programs →
        </Link>
        <Link href="/pizza-box-price" className="font-semibold text-orange-600 hover:underline">
          Price guide →
        </Link>
        <Link href="/blog" className="font-semibold text-orange-600 hover:underline">
          Buyer resources →
        </Link>
        <Link href="/contact" className="font-semibold text-orange-600 hover:underline">
          Contact export team →
        </Link>
      </div>

      {/* ── CTA ── */}
      <section className="rounded-xl border border-orange-100 bg-orange-50 px-6 py-6 space-y-3">
        <h2 className="text-lg font-bold text-gray-900">
          Ready to get factory-direct pricing?
        </h2>
        <p className="text-sm text-gray-600">
          Share your requirements and receive a structured quote in 24 hours.
        </p>
        <CTAButtons />
      </section>
    </>
  );
}
