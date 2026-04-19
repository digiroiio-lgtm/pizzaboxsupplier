import Link from "next/link";
import { CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

/**
 * GeoPageTemplate – shared layout for all state-level pizza box supplier pages.
 * Accepts a `page` object from `statePages` in lib/content.js plus a `stateCta` string.
 */
export default function GeoPageTemplate({ page }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            pizza box supplier {page.state.toLowerCase()} • wholesale pizza boxes
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {page.h1}
          </h1>
          <p className="text-lg text-gray-400">{page.tagline}</p>
          <TrustBadges />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-bold text-white shadow hover:bg-orange-700"
            >
              {page.cta} →
            </Link>
            <CTAButtons />
          </div>
        </div>
      </section>

      {/* ── Demand signals ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">{page.demandTitle}</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {page.demandFacts.map((fact) => (
            <li
              key={fact}
              className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-sm text-gray-700">{fact}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Shipping & logistics ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Shipping Pizza Boxes to {page.state}
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-600">Entry Port</p>
            <p className="text-sm font-semibold text-gray-900">{page.port}</p>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-emerald-600">Transit Time</p>
            <p className="text-sm font-semibold text-gray-900">{page.transitTime}</p>
          </div>
          <div className="rounded-xl border border-orange-100 bg-orange-50 p-5">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-orange-600">Delivery Plan</p>
            <p className="text-sm font-semibold text-gray-900">{page.shippingNotes}</p>
          </div>
        </div>
      </section>

      {/* ── Container & logistics reference ── */}
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Container Planning for {page.state} Buyers</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-700">Container</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Approx. Units (12")</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 font-medium">20ft FCL</td>
                <td className="px-4 py-3 text-gray-600">~50,000–60,000 pcs</td>
                <td className="px-4 py-3 text-gray-600">Mid-size distributors, first import trial</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">40ft FCL</td>
                <td className="px-4 py-3 text-gray-600">~110,000–130,000 pcs</td>
                <td className="px-4 py-3 text-gray-600">High-volume chains, annual procurement programs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Capacity varies by box size. HS Code: <strong>4819.10</strong> (corrugated paper/paperboard boxes). FOB and CIF pricing available.{" "}
          <Link href="/pizza-box-container-loading" className="text-orange-600 hover:underline">See full container loading guide →</Link>
        </p>
      </section>

      {/* ── Cross-links ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Resources for {page.state} Buyers</h2>
        <ul className="space-y-1.5 text-sm">
          <li>
            <Link href="/shipping-pizza-boxes-to-usa" className="font-semibold text-orange-600 hover:underline">
              Shipping guide: Turkey → USA ports →
            </Link>
          </li>
          <li>
            <Link href="/pizza-box-import-process-usa" className="font-semibold text-orange-600 hover:underline">
              US import process for pizza boxes (HS 4819.10) →
            </Link>
          </li>
          <li>
            <Link href="/pizza-box-price" className="font-semibold text-orange-600 hover:underline">
              Pizza box price guide by size →
            </Link>
          </li>
          <li>
            <Link href="/products" className="font-semibold text-orange-600 hover:underline">
              Browse all pizza box sizes →
            </Link>
          </li>
        </ul>
      </section>

      {/* ── Final CTA ── */}
      <section className="rounded-2xl bg-orange-600 px-8 py-10 text-center text-white shadow-lg">
        <h2 className="mb-2 text-2xl font-extrabold">{page.cta}</h2>
        <p className="mb-6 text-orange-100">
          Share your volume, sizes and shipping destination. We respond with a full quote in 24 hours.
        </p>
        <Link
          href="/get-quote"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-bold text-orange-700 shadow hover:bg-orange-50"
        >
          Request Distributor Quote →
        </Link>
      </section>

      <LeadForm />
    </>
  );
}
