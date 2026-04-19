import Link from "next/link";
import { CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "About PizzaBoxSupplier | Factory-Direct Pizza Box Manufacturer",
  description:
    "Pizza box manufacturer profile: 22,000m² factory, 35+ containers/month, BRCGS certified, exporting to 20+ countries. Direct from Istanbul, Turkey.",
};

const stats = [
  { value: "18+", label: "Years in corrugated food packaging" },
  { value: "22,000 m²", label: "Factory production area" },
  { value: "35+", label: "Containers exported per month" },
  { value: "20+", label: "Countries served" },
  { value: "10,000", label: "Minimum order quantity (units)" },
  { value: "24h", label: "Quote response time" },
];

const clientTypes = [
  { type: "Foodservice Distributors", desc: "Broadline and specialist distributors supplying restaurant chains and independent operators across the USA, UK and EU." },
  { type: "Restaurant Chains", desc: "Regional and national pizza chains requiring branded custom-printed boxes at consistent quality across all locations." },
  { type: "Wholesale Importers", desc: "USA and EU importers who resell to distributors and restaurant groups under private label or standard specifications." },
  { type: "Ghost Kitchens & Virtual Brands", desc: "Delivery-only operators who require custom branding and multi-SKU mixed container programs." },
  { type: "Frozen Food & Retail Brands", desc: "CPG brands selling frozen pizza through retail, club stores and direct-to-consumer channels requiring food-safe corrugated packaging." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            direct from manufacturer • istanbul, turkey
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            About PizzaBoxSupplier: Export-Focused Pizza Box Manufacturer
          </h1>
          <p className="text-lg text-gray-400">
            18+ years producing corrugated pizza packaging. Factory-direct supply to distributors, chains and importers across 20+ countries.
          </p>
          <TrustBadges />
          <CTAButtons />
        </div>
      </section>

      {/* ── Stats grid ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Factory at a Glance</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm text-center">
              <p className="text-3xl font-extrabold text-orange-600">{s.value}</p>
              <p className="mt-1 text-sm text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Production facility ── */}
      <section className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">Production Facility</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-sm text-gray-500">
            Factory Floor — 22,000 m²
          </div>
          <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-sm text-gray-500">
            Flexo + Offset Printing Lines
          </div>
          <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-sm text-gray-500">
            Container Loading & Pallet Bay
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Located at Ikitelli OSB, Basaksehir, Istanbul — Turkey's primary organized industrial zone for packaging manufacturers, with direct access to Ambarlı Port.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/factory" className="font-semibold text-orange-600 hover:underline">Factory details →</Link>
          <Link href="/certifications" className="font-semibold text-orange-600 hover:underline">View certifications →</Link>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Certifications & Quality Standards</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { cert: "BRCGS", desc: "Global food safety certification — highest standard for food-contact packaging. Required by most major retail and foodservice buyers." },
            { cert: "ISO 22000", desc: "Food safety management system certification. Covers hazard analysis and critical control points across the full production process." },
            { cert: "HACCP", desc: "Hazard Analysis Critical Control Points — built into production planning to prevent food safety issues at every production stage." },
          ].map((c) => (
            <div key={c.cert} className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
              <p className="text-xl font-extrabold text-emerald-700">{c.cert}</p>
              <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
        <Link href="/certifications" className="inline-block text-sm font-semibold text-orange-600 hover:underline">
          See full certifications page →
        </Link>
      </section>

      {/* ── Who we supply ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Who We Supply</h2>
        <div className="space-y-3">
          {clientTypes.map((c) => (
            <div key={c.type} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700 text-xs font-bold">✓</span>
              <div>
                <p className="font-semibold text-gray-900">{c.type}</p>
                <p className="mt-0.5 text-sm text-gray-600">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Export reach ── */}
      <section className="rounded-xl border border-blue-100 bg-blue-50 px-6 py-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Export Markets</h2>
        <p className="text-sm text-gray-600">
          We export to distributors and importers in 20+ countries including the USA, UK, Germany, the Netherlands, France, Australia and GCC markets.
        </p>
        <Link href="/export-markets" className="inline-block text-sm font-semibold text-blue-700 hover:underline">
          See all export markets →
        </Link>
      </section>

      <LeadForm />
    </>
  );
}
