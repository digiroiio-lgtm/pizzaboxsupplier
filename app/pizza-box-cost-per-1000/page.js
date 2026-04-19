import Link from "next/link";
import { CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "Pizza Box Cost Per 1,000 Units | Bulk Wholesale Pricing Tiers",
  description:
    "Wholesale pizza box cost per 1,000 units across order volumes. MOQ impact, tiered pricing tiers and total cost calculator for USA distributors.",
};

const tiers = [
  { qty: "10,000", perK: "$175–$280", note: "MOQ tier — first trial order" },
  { qty: "25,000", perK: "$155–$255", note: "~10% volume savings" },
  { qty: "50,000", perK: "$140–$235", note: "~15% volume savings" },
  { qty: "100,000", perK: "$128–$218", note: "~20% volume savings; 1×40ft container" },
  { qty: "250,000", perK: "$115–$200", note: "~28% savings; annual program pricing" },
  { qty: "500,000+", perK: "Custom", note: "Annual contract rate; dedicated production slot" },
];

export default function CostPer1000Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            bulk pricing • cost per 1000 units
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Pizza Box Cost Per 1,000 Units: Wholesale Pricing Tiers
          </h1>
          <p className="text-lg text-gray-400">
            See how per-unit cost drops as your order volume grows. Example-based reference pricing for 12-inch pizza boxes — request exact figures for your size and spec.
          </p>
          <TrustBadges />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-bold text-white shadow hover:bg-orange-700"
            >
              Get Exact Quote in 24h →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-3 text-sm text-amber-800">
        <strong>Note:</strong> Prices below are example ranges for a standard 12-inch blank corrugated pizza box (FOB Istanbul). Actual pricing varies by size, board spec, print and finish.
      </div>

      {/* ── Tier table ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Cost Per 1,000 Units by Order Volume</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-700">Order Quantity (units)</th>
                <th className="px-4 py-3 font-semibold text-orange-700">Cost per 1,000 pcs (USD, FOB)</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((row, i) => (
                <tr key={row.qty} className={i < tiers.length - 1 ? "border-b border-gray-100" : ""}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.qty}</td>
                  <td className="px-4 py-3 font-bold text-orange-600">{row.perK}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── MOQ explanation ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">How MOQ Affects Your Cost</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-orange-100 bg-orange-50 p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600">MOQ Start</p>
            <p className="mt-1 text-3xl font-extrabold text-gray-900">10,000</p>
            <p className="mt-1 text-sm text-gray-600">Units per size per order — lowest entry point</p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Volume Sweet Spot</p>
            <p className="mt-1 text-3xl font-extrabold text-gray-900">100K+</p>
            <p className="mt-1 text-sm text-gray-600">Units per order — fills a 40ft container, ~20% lower cost vs MOQ</p>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Max Savings</p>
            <p className="mt-1 text-3xl font-extrabold text-gray-900">30%+</p>
            <p className="mt-1 text-sm text-gray-600">Off MOQ price at annual contract volumes (250,000+ units)</p>
          </div>
        </div>
      </section>

      {/* ── Mixed SKU note ── */}
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-xl font-bold text-gray-900">Ordering Multiple Sizes</h2>
        <p className="text-gray-600">
          Each size has its own 10,000-unit MOQ. Mixed-size orders in the same container count toward overall volume pricing — a 40ft load of 3 different sizes still qualifies for container-level discounts.
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Example: 40,000 × 12-inch + 30,000 × 14-inch + 30,000 × 16-inch = 100,000 units total → qualifies for the 100,000-unit pricing tier.
        </p>
      </section>

      {/* ── CTA ── */}
      <section className="rounded-2xl bg-orange-600 px-8 py-10 text-center text-white shadow-lg">
        <h2 className="mb-2 text-2xl font-extrabold">Get Exact Quote in 24 Hours</h2>
        <p className="mb-6 text-orange-100">
          Tell us your sizes and monthly volume. We'll calculate your exact per-unit cost and container plan.
        </p>
        <Link
          href="/get-quote"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-bold text-orange-700 shadow hover:bg-orange-50"
        >
          Request Distributor Quote →
        </Link>
      </section>

      {/* ── Related links ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Related Pricing Resources</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/pizza-box-price" className="font-semibold text-orange-600 hover:underline">Pizza box price guide by size →</Link></li>
          <li><Link href="/custom-pizza-box-cost" className="font-semibold text-orange-600 hover:underline">Custom pizza box cost: print & finish options →</Link></li>
          <li><Link href="/pizza-box-freight-cost-estimator" className="font-semibold text-orange-600 hover:underline">Add freight cost: FOB vs CIF estimator →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
