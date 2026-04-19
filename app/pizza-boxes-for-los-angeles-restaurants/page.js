import Link from "next/link";
import { CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "Pizza Boxes for Los Angeles Restaurants | Factory-Direct Supply",
  description:
    "Wholesale pizza boxes for Los Angeles restaurants, ghost kitchens and foodservice distributors. LA/Long Beach port receiving, custom print, 24h quote.",
};

export default function LosAngelesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            pizza boxes for los angeles • direct from manufacturer
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Pizza Boxes for Los Angeles Restaurants: Direct Factory Supply
          </h1>
          <p className="text-lg text-gray-400">
            Serving LA's 2,500+ pizza restaurants with factory-direct corrugated boxes. Port of Los Angeles receiving — lowest landed cost on the West Coast.
          </p>
          <TrustBadges />
          <div className="flex flex-wrap gap-2">
            {["Direct from Manufacturer (No Middleman)", "Consistent Supply Guaranteed", "Used by High-Volume Buyers"].map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-200">✓ {t}</span>
            ))}
          </div>
          <CTAButtons />
        </div>
      </section>

      {/* ── LA market facts ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Los Angeles Pizza Market</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "2,500+ pizza restaurants in the Los Angeles metro — second-highest density in the USA",
            "LA's ghost kitchen market is one of the fastest-growing in the country",
            "Food delivery demand in LA is 40% above the US national average",
            "Large distributor networks based in LA serve the entire Southern California market",
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
          <p className="text-sm font-semibold text-gray-900">Port of Los Angeles / Long Beach (POLB)</p>
        </div>
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-emerald-600">Transit Time</p>
          <p className="text-sm font-semibold text-gray-900">18–22 days (Turkey → LA/Long Beach)</p>
        </div>
        <div className="rounded-xl border border-orange-100 bg-orange-50 p-5">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-orange-600">Inland Delivery</p>
          <p className="text-sm font-semibold text-gray-900">1–2 day trucking to LA, Inland Empire, OC and San Diego distribution centers</p>
        </div>
      </section>

      {/* ── Related links ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Related Resources</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/pizza-box-supplier-california" className="font-semibold text-orange-600 hover:underline">Pizza box supplier California →</Link></li>
          <li><Link href="/pizza-boxes-for-distributors" className="font-semibold text-orange-600 hover:underline">Pizza boxes for distributors →</Link></li>
          <li><Link href="/pizza-boxes-for-ghost-kitchens" className="font-semibold text-orange-600 hover:underline">Pizza boxes for ghost kitchens →</Link></li>
          <li><Link href="/shipping-pizza-boxes-to-usa" className="font-semibold text-orange-600 hover:underline">Shipping guide: Turkey → USA ports →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
