import Link from "next/link";
import { CTAButtons, LeadForm } from "@/components/sections";

export const metadata = {
  title: "Pizza Box Export Markets | 20+ Countries Served Direct from Turkey",
  description:
    "PizzaBoxSupplier exports pizza boxes to 20+ countries including USA, UK, Germany, France, Australia and GCC. View our export market coverage and distribution reach.",
};

const exportRegions = [
  {
    region: "North America",
    flag: "🇺🇸",
    countries: ["USA", "Canada"],
    notes: "Primary export market. Regular container service to LA/Long Beach, NY/NJ, Houston and Miami ports.",
    volume: "45% of total export volume",
  },
  {
    region: "United Kingdom",
    flag: "🇬🇧",
    countries: ["United Kingdom"],
    notes: "Felixstowe and Southampton port receiving. Fast Atlantic transit of 12–16 days.",
    volume: "15% of total export volume",
  },
  {
    region: "Western Europe",
    flag: "🇪🇺",
    countries: ["Germany", "Netherlands", "France", "Belgium", "Austria"],
    notes: "Rotterdam, Antwerp and Hamburg port receiving. Intra-EU distribution by road.",
    volume: "20% of total export volume",
  },
  {
    region: "GCC & Middle East",
    flag: "🌍",
    countries: ["UAE", "Saudi Arabia", "Kuwait", "Qatar"],
    notes: "Jebel Ali (Dubai) and Dammam port receiving. Regional distribution to foodservice operators.",
    volume: "10% of total export volume",
  },
  {
    region: "Asia-Pacific",
    flag: "🌏",
    countries: ["Australia", "New Zealand", "Singapore"],
    notes: "Port of Melbourne and Sydney receiving. Pacific routing via Singapore hub.",
    volume: "7% of total export volume",
  },
  {
    region: "Other Markets",
    flag: "🌐",
    countries: ["Scandinavia", "Eastern Europe", "South Africa", "and more"],
    notes: "Serving growing distributor networks across additional markets.",
    volume: "3% of total export volume",
  },
];

const buyerTypes = [
  { type: "Foodservice Distributors", count: "60%+", desc: "Broadline and pizza-specialist distributors reselling to restaurants and chains." },
  { type: "Pizza Restaurant Chains", count: "20%", desc: "Regional and national chains ordering direct for branded box programs." },
  { type: "Wholesale Importers", count: "12%", desc: "Importers buying FOB and reselling through local distribution networks." },
  { type: "Retail & CPG Brands", count: "8%", desc: "Frozen food and retail brands using our food-safe corrugated for shelf-ready packaging." },
];

export default function ExportMarketsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-blue-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-400">
            export markets • 20+ countries
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Pizza Box Export Markets: 20+ Countries Served
          </h1>
          <p className="text-lg text-gray-400">
            35+ containers shipped monthly to distributors, chains and importers across North America, Europe, GCC and Asia-Pacific.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Direct from Manufacturer", "Used by High-Volume Buyers", "Consistent Supply Guaranteed"].map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-200">✓ {t}</span>
            ))}
          </div>
          <CTAButtons />
        </div>
      </section>

      {/* ── Region map ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Export Regions</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exportRegions.map((r) => (
            <div key={r.region} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{r.flag}</span>
                <p className="font-bold text-gray-900">{r.region}</p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                {r.countries.join(" • ")}
              </p>
              <p className="text-sm text-gray-600">{r.notes}</p>
              <span className="inline-block rounded-full bg-orange-100 px-2 py-0.5 text-xs font-bold text-orange-700">
                {r.volume}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Buyer types ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Who Buys from Us</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {buyerTypes.map((b) => (
            <div key={b.type} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3 mb-2">
                <p className="font-bold text-gray-900">{b.type}</p>
                <span className="rounded-full bg-orange-100 px-3 py-0.5 text-sm font-extrabold text-orange-700">{b.count}</span>
              </div>
              <p className="text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 italic">
          Client names not disclosed per standard NDA arrangements. All buyer types are representative of active accounts.
        </p>
      </section>

      {/* ── CTA ── */}
      <section className="rounded-2xl bg-orange-600 px-8 py-10 text-center text-white shadow-lg">
        <h2 className="mb-2 text-2xl font-extrabold">Join 20+ Countries Already Supplied</h2>
        <p className="mb-6 text-orange-100">
          Become a distributor or importer in your market. We respond with a full quote in 24 hours.
        </p>
        <Link
          href="/get-quote"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-bold text-orange-700 shadow hover:bg-orange-50"
        >
          Get Container Pricing →
        </Link>
      </section>

      <LeadForm />
    </>
  );
}
