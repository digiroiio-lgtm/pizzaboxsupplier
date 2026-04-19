import Link from "next/link";
import { CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "Pizza Box Price Guide | Wholesale Pricing by Size & Print Level",
  description:
    "Pizza box price ranges by size, board type and print level. Example-based wholesale pricing guide for USA distributors — get an exact quote in 24h.",
};

const priceTable = [
  { size: "10 Inch", blank: "$0.12–$0.18", oneColor: "$0.18–$0.26", fullPrint: "$0.26–$0.38" },
  { size: "12 Inch", blank: "$0.16–$0.24", oneColor: "$0.24–$0.34", fullPrint: "$0.34–$0.48" },
  { size: "14 Inch", blank: "$0.20–$0.30", oneColor: "$0.30–$0.42", fullPrint: "$0.42–$0.58" },
  { size: "16 Inch", blank: "$0.26–$0.38", oneColor: "$0.38–$0.52", fullPrint: "$0.52–$0.72" },
  { size: "18 Inch", blank: "$0.32–$0.46", oneColor: "$0.46–$0.64", fullPrint: "$0.64–$0.88" },
  { size: "20 Inch", blank: "$0.40–$0.56", oneColor: "$0.56–$0.76", fullPrint: "$0.76–$1.05" },
];

const costDrivers = [
  { driver: "Box Size", impact: "Primary cost driver — larger board area = higher material cost" },
  { driver: "Board Grade", impact: "E-flute vs B-flute; recycled vs virgin kraft liner — affects price 10–25%" },
  { driver: "Print Level", impact: "Blank → 1 color → 2-4 color → full CMYK; each level adds $0.04–$0.15/unit" },
  { driver: "Coating / Finish", impact: "Matte OPP, gloss lamination or UV spot — adds $0.06–$0.20/unit" },
  { driver: "Order Volume (MOQ)", impact: "MOQ 10,000 pcs. Price drops 8–15% at 50,000+ pcs per size" },
  { driver: "Custom Die-Cut / Window", impact: "Special die-cut adds $0.05–$0.12/unit for tooling amortization" },
];

export default function PizzaBoxPricePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            pizza box price • wholesale pricing guide
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Pizza Box Price Guide: Wholesale Pricing by Size and Print Level
          </h1>
          <p className="text-lg text-gray-400">
            Example-based price ranges to help USA distributors benchmark wholesale pizza box costs. Get an exact quote from our factory in 24 hours.
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

      {/* ── Price disclaimer ── */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-3 text-sm text-amber-800">
        <strong>Note:</strong> All prices below are example ranges for budget planning only. Actual prices depend on board spec, print file, finishing and order volume. Contact us for a binding quote.
      </div>

      {/* ── Price table ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Pizza Box Price by Size (FOB Factory, USD)</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-700">Box Size</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Blank (no print)</th>
                <th className="px-4 py-3 font-semibold text-gray-700">1-Color Print</th>
                <th className="px-4 py-3 font-semibold text-orange-700">Full CMYK Print</th>
              </tr>
            </thead>
            <tbody>
              {priceTable.map((row, i) => (
                <tr key={row.size} className={i < priceTable.length - 1 ? "border-b border-gray-100" : ""}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.size}</td>
                  <td className="px-4 py-3 text-gray-600">{row.blank}</td>
                  <td className="px-4 py-3 text-gray-600">{row.oneColor}</td>
                  <td className="px-4 py-3 font-semibold text-orange-700">{row.fullPrint}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          Prices quoted per unit FOB Istanbul. Minimum order quantity: 10,000 pcs per size. Volume discounts apply at 50,000+ pcs.
        </p>
      </section>

      {/* ── Cost drivers ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">What Drives Pizza Box Price?</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {costDrivers.map((item) => (
            <div key={item.driver} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="font-semibold text-gray-900">{item.driver}</p>
              <p className="mt-1 text-sm text-gray-600">{item.impact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA block ── */}
      <section className="rounded-2xl bg-orange-600 px-8 py-10 text-center text-white shadow-lg">
        <h2 className="mb-2 text-2xl font-extrabold">Get Exact Quote in 24 Hours</h2>
        <p className="mb-6 text-orange-100">
          Share your sizes, quantities and print requirements. We'll send a binding factory quote with current pricing.
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
          <li><Link href="/pizza-box-cost-per-1000" className="font-semibold text-orange-600 hover:underline">Pizza box cost per 1,000 units →</Link></li>
          <li><Link href="/custom-pizza-box-cost" className="font-semibold text-orange-600 hover:underline">Custom pizza box cost: print, finish & private label →</Link></li>
          <li><Link href="/pizza-box-freight-cost-estimator" className="font-semibold text-orange-600 hover:underline">Add freight: cost estimator FOB vs CIF →</Link></li>
          <li><Link href="/products" className="font-semibold text-orange-600 hover:underline">Browse all pizza box sizes →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
