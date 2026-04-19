import Link from "next/link";
import { Benefits, CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "Wholesale Pizza Boxes for USA Distributors | Container Programs",
  description:
    "Wholesale pizza boxes for USA distributors, importers and foodservice wholesalers. Direct manufacturer pricing, mixed-size container programs and 24h quote turnaround.",
};

const moqTable = [
  { volume: "10,000 – 49,999 pcs", tier: "Standard", discount: "Base price", notes: "Per size, per order" },
  { volume: "50,000 – 99,999 pcs", tier: "Volume", discount: "–8 to –10%", notes: "Mixed sizes per container" },
  { volume: "100,000+ pcs", tier: "Contract", discount: "–12 to –18%", notes: "Annual framework pricing" },
  { volume: "Full container (FCL)", tier: "Container", discount: "Best rate", notes: "~35,000–55,000 pcs/40HQ" },
];

const programHighlights = [
  {
    icon: "🏭",
    title: "Direct from Manufacturer",
    desc: "No middlemen. You buy from the factory floor, not a trading house. Price difference: 15–25%.",
  },
  {
    icon: "📦",
    title: "Mixed-Size Container Optimization",
    desc: "Combine 10\", 12\", 14\" and 16\" SKUs into a single 40HQ container to minimize freight per unit.",
  },
  {
    icon: "📋",
    title: "Forecast Planning",
    desc: "Lock in quarterly schedules to guarantee slot availability and stable pricing during peak seasons.",
  },
  {
    icon: "👤",
    title: "Dedicated Account Manager",
    desc: "One contact for spec changes, reorder scheduling, documentation and customs prep.",
  },
  {
    icon: "🖨",
    title: "Private Label Ready",
    desc: "Full CMYK custom print from 10,000 pcs/size. Your brand, our factory.",
  },
  {
    icon: "🚢",
    title: "Export Documentation",
    desc: "FOB Istanbul. We prepare BL, packing list, EUR.1 and MSDS. USA CBP compliant.",
  },
];

export default function WholesalePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-3xl space-y-5">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            wholesale pizza boxes · factory-direct · USA distribution
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Wholesale Pizza Boxes for USA Distribution — Direct Container Pricing
          </h1>
          <p className="text-lg text-gray-400">
            Scale your procurement with a pizza box supplier USA buyers trust for consistent quality, predictable lead
            times and direct factory pricing — no middlemen.
          </p>
          <TrustBadges />
          <CTAButtons />
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { value: "35+", label: "Containers / Month" },
          { value: "20+", label: "Export Countries" },
          { value: "18+", label: "Years Factory Experience" },
          { value: "10K", label: "Min. Order (pcs / size)" },
        ].map(({ value, label }) => (
          <div key={label} className="rounded-xl border border-gray-200 bg-white px-4 py-4 text-center shadow-sm">
            <p className="text-2xl font-extrabold text-orange-600">{value}</p>
            <p className="mt-0.5 text-xs font-medium text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      {/* ── Program highlights ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Wholesale Program Highlights</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programHighlights.map(({ icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="mb-2 text-2xl">{icon}</p>
              <p className="font-semibold text-gray-900">{title}</p>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MOQ / Volume table ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Volume Tiers and Pricing</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-700">Order Volume</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Tier</th>
                <th className="px-4 py-3 font-semibold text-orange-700">Discount vs Base</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody>
              {moqTable.map((row, i) => (
                <tr key={row.tier} className={i < moqTable.length - 1 ? "border-b border-gray-100" : ""}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.volume}</td>
                  <td className="px-4 py-3 text-gray-600">{row.tier}</td>
                  <td className="px-4 py-3 font-semibold text-orange-700">{row.discount}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          Prices FOB Istanbul. Container rates include loading and export docs. Contact us for exact pricing.
        </p>
      </section>

      <Benefits />

      {/* ── CTA block ── */}
      <section className="rounded-2xl bg-orange-600 px-8 py-10 text-center text-white shadow-lg">
        <h2 className="mb-2 text-2xl font-extrabold">Ready to Start Your Wholesale Program?</h2>
        <p className="mb-6 text-orange-100">
          Submit your requirements and receive a structured factory quote within 24 hours.
        </p>
        <Link
          href="/get-quote"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-bold text-orange-700 shadow hover:bg-orange-50"
        >
          Request Distributor Quote →
        </Link>
      </section>

      {/* ── Related ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Related Resources</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/pizza-box-price" className="font-semibold text-orange-600 hover:underline">Pizza box price guide →</Link></li>
          <li><Link href="/bulk-orders" className="font-semibold text-orange-600 hover:underline">Bulk order workflow →</Link></li>
          <li><Link href="/products" className="font-semibold text-orange-600 hover:underline">All product sizes →</Link></li>
          <li><Link href="/custom-pizza-boxes" className="font-semibold text-orange-600 hover:underline">Custom pizza boxes wholesale →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
