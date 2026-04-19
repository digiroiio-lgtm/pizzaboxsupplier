import Link from "next/link";
import { CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "Pizza Box Freight Cost Estimator | FOB vs CIF Comparison for USA Importers",
  description:
    "Estimate your pizza box freight cost: FOB vs CIF comparison, sea freight rates Turkey-to-USA, port surcharges and cost-per-unit breakdown.",
};

export default function FreightCostPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-blue-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-400">
            freight cost guide • fob vs cif • usa import
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Pizza Box Freight Cost Estimator: FOB vs CIF for USA Buyers
          </h1>
          <p className="text-lg text-gray-400">
            Understand the real landed cost of importing pizza boxes from Turkey. Compare FOB and CIF pricing, estimate freight per unit, and plan your procurement budget.
          </p>
          <TrustBadges />
          <CTAButtons />
        </div>
      </section>

      {/* ── FOB vs CIF detailed table ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">FOB vs CIF: Full Cost Comparison</h2>
        <p className="text-gray-600">
          Choose the right Incoterm based on your logistics capability and how much cost control you want.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-700">Cost Component</th>
                <th className="px-4 py-3 font-semibold text-orange-700">FOB Price Includes</th>
                <th className="px-4 py-3 font-semibold text-blue-700">CIF Price Includes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Manufacturing cost", "✓ Yes", "✓ Yes"],
                ["Export packaging", "✓ Yes", "✓ Yes"],
                ["Turkey inland trucking to port", "✓ Yes", "✓ Yes"],
                ["Origin port handling / THC", "✓ Yes", "✓ Yes"],
                ["Sea freight (main leg)", "✗ Buyer arranges", "✓ Included"],
                ["Marine cargo insurance", "✗ Buyer arranges", "✓ Included"],
                ["Destination port THC", "✗ Buyer pays", "✗ Buyer pays"],
                ["US customs brokerage", "✗ Buyer pays", "✗ Buyer pays"],
                ["Drayage / inland US trucking", "✗ Buyer pays", "✗ Buyer pays"],
              ].map(([component, fob, cif], i, arr) => (
                <tr key={component} className={i < arr.length - 1 ? "border-b border-gray-100" : ""}>
                  <td className="px-4 py-3 font-medium text-gray-700">{component}</td>
                  <td className={`px-4 py-3 ${fob.startsWith("✓") ? "text-emerald-700 font-semibold" : "text-gray-400"}`}>{fob}</td>
                  <td className={`px-4 py-3 ${cif.startsWith("✓") ? "text-emerald-700 font-semibold" : "text-gray-400"}`}>{cif}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Estimated freight ranges ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Estimated Sea Freight Ranges (Turkey → USA)</h2>
        <p className="text-gray-600 text-sm">
          Rates fluctuate based on global shipping markets. Values below are reference ranges for budget planning only — request a live quote for current rates.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { route: "Turkey → Los Angeles", container: "20ft", range: "$2,400–$3,800" },
            { route: "Turkey → Los Angeles", container: "40ft", range: "$3,200–$5,200" },
            { route: "Turkey → New York / NJ", container: "20ft", range: "$1,600–$2,800" },
            { route: "Turkey → New York / NJ", container: "40ft", range: "$2,400–$4,000" },
            { route: "Turkey → Houston", container: "20ft", range: "$2,000–$3,200" },
            { route: "Turkey → Houston", container: "40ft", range: "$2,800–$4,800" },
            { route: "Turkey → Miami", container: "20ft", range: "$1,800–$3,000" },
            { route: "Turkey → Miami", container: "40ft", range: "$2,600–$4,400" },
          ].map((row) => (
            <div key={`${row.route}-${row.container}`} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">{row.route}</p>
              <p className="text-xs font-bold uppercase text-gray-400">{row.container}</p>
              <p className="mt-2 text-xl font-extrabold text-orange-600">{row.range}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500">
          Rates exclude origin THC, destination THC, customs brokerage and drayage. Add ~$800–$1,400 for all-in USA-side handling per container.
        </p>
      </section>

      {/* ── Cost per unit example ── */}
      <section className="rounded-xl border border-orange-100 bg-orange-50 p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Example: Cost Per Unit Calculation</h2>
        <p className="mb-4 text-sm text-gray-600">
          Sample calculation for a 40ft container of 12-inch pizza boxes to Los Angeles (FOB pricing):
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <tbody>
              {[
                ["Product cost (FOB factory)", "120,000 units × $0.28", "$33,600"],
                ["Sea freight (40ft to LA)", "Market rate", "$4,200"],
                ["Marine insurance (0.5%)", "On CIF value", "$190"],
                ["Destination THC + customs", "Estimated", "$1,100"],
                ["Total landed cost", "", "$39,090"],
                ["Cost per unit (landed)", "", "$0.326"],
              ].map(([item, note, value]) => (
                <tr key={item} className="border-b border-orange-200 last:border-0">
                  <td className="py-2 pr-4 font-medium text-gray-800">{item}</td>
                  <td className="py-2 pr-4 text-gray-500 text-xs">{note}</td>
                  <td className="py-2 font-bold text-gray-900">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Example values only. Actual cost depends on board spec, print, volume and market freight rates. Request an exact quote.
        </p>
      </section>

      {/* ── Related links ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Related Resources</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/shipping-pizza-boxes-to-usa" className="font-semibold text-orange-600 hover:underline">Shipping guide: transit times & port selection →</Link></li>
          <li><Link href="/pizza-box-container-loading" className="font-semibold text-orange-600 hover:underline">Container loading: units per 20ft/40ft →</Link></li>
          <li><Link href="/pizza-box-import-process-usa" className="font-semibold text-orange-600 hover:underline">Import process: HS code & customs clearance →</Link></li>
          <li><Link href="/pizza-box-price" className="font-semibold text-orange-600 hover:underline">Pizza box price guide →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
