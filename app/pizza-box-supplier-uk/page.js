import Link from "next/link";
import { CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "Pizza Box Supplier UK | Wholesale Pizza Boxes from Turkey",
  description:
    "Pizza box manufacturer for UK distributors and restaurant chains. Factory-direct wholesale pizza boxes, custom printing, 12–16 day transit to UK ports.",
};

export default function PizzaBoxSupplierUKPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            pizza box supplier uk • direct from manufacturer
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Pizza Box Supplier UK: Wholesale from Direct Manufacturer
          </h1>
          <p className="text-lg text-gray-400">
            Factory-direct pizza boxes for UK distributors, chains and importers. Felixstowe and Southampton receiving, BRCGS certified, 12–16 day transit from Turkey.
          </p>
          <TrustBadges />
          <div className="flex flex-wrap gap-2">
            {["Direct from Manufacturer (No Middleman)", "BRCGS Certified", "Used by High-Volume Buyers"].map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-200">✓ {t}</span>
            ))}
          </div>
          <CTAButtons />
        </div>
      </section>

      {/* ── UK market ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">UK Pizza Market Overview</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "UK pizza delivery market worth £1.8B annually — one of Europe's most active",
            "12,000+ pizza restaurants and takeaways operating across the UK",
            "UK foodservice distributors increasingly source packaging direct from Turkey to cut cost",
            "BRCGS certification is mandatory for most UK retail and foodservice packaging buyers",
          ].map((fact) => (
            <li key={fact} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm text-sm text-gray-700">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700 text-[10px] font-bold">✓</span>
              {fact}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Port & shipping ── */}
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-600">Entry Port</p>
          <p className="text-sm font-semibold text-gray-900">Felixstowe / Southampton (UK primary container ports)</p>
        </div>
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-emerald-600">Transit Time</p>
          <p className="text-sm font-semibold text-gray-900">12–16 days (Turkey → UK via Atlantic / Mediterranean)</p>
        </div>
        <div className="rounded-xl border border-orange-100 bg-orange-50 p-5">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-orange-600">Compliance</p>
          <p className="text-sm font-semibold text-gray-900">BRCGS certified. COO and customs docs provided for HMRC clearance.</p>
        </div>
      </section>

      {/* ── Related links ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Related Resources</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/certifications" className="font-semibold text-orange-600 hover:underline">Certifications: BRCGS, ISO 22000, HACCP →</Link></li>
          <li><Link href="/pizza-boxes-for-distributors" className="font-semibold text-orange-600 hover:underline">Pizza boxes for distributors →</Link></li>
          <li><Link href="/pizza-box-import-process-usa" className="font-semibold text-orange-600 hover:underline">Import process guide →</Link></li>
          <li><Link href="/export-markets" className="font-semibold text-orange-600 hover:underline">All export markets →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
