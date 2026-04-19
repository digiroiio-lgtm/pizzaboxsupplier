import Link from "next/link";
import { CTAButtons, LeadForm, TrustBadges } from "@/components/sections";
import { SITE_URL } from "@/lib/content";

export const metadata = {
  title: "Shipping Pizza Boxes to USA | Transit Times, Ports & Container Guide",
  description:
    "Complete guide to shipping pizza boxes from Turkey to the USA. Container options, transit times by port, FOB/CIF, and cost per unit breakdown.",
};

const ports = [
  {
    port: "Los Angeles / Long Beach (POLB)",
    coast: "West Coast",
    transit: "18–22 days",
    serves: "California, Pacific Northwest, Southwest",
  },
  {
    port: "New York / New Jersey (Port Newark)",
    coast: "East Coast",
    transit: "14–18 days",
    serves: "NY, NJ, PA, New England, mid-Atlantic",
  },
  {
    port: "Houston (Barbours Cut / Bayport)",
    coast: "Gulf Coast",
    transit: "20–25 days",
    serves: "Texas, Oklahoma, Louisiana, Midwest via I-10",
  },
  {
    port: "Miami / Port Everglades",
    coast: "Southeast",
    transit: "16–21 days",
    serves: "Florida, Georgia, Southeast USA",
  },
];

export default function ShippingGuide() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-blue-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-400">
            logistics guide • pizza box import usa
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Shipping Pizza Boxes to USA: Complete Logistics Guide
          </h1>
          <p className="text-lg text-gray-400">
            Everything a USA distributor or importer needs to know — transit times by port, container options, HS codes and total landed cost.
          </p>
          <TrustBadges />
          <CTAButtons />
        </div>
      </section>

      {/* ── Port transit table ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Turkey → USA Transit Times by Port</h2>
        <p className="text-gray-600">
          All shipments depart from Istanbul (Ambarlı Port, Turkey's largest container hub). Transit times are sea freight estimates and exclude customs clearance.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-700">Destination Port</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Coast</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Sea Transit</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Distribution Reach</th>
              </tr>
            </thead>
            <tbody>
              {ports.map((row, i) => (
                <tr key={row.port} className={i < ports.length - 1 ? "border-b border-gray-100" : ""}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.port}</td>
                  <td className="px-4 py-3 text-gray-600">{row.coast}</td>
                  <td className="px-4 py-3 font-bold text-orange-600">{row.transit}</td>
                  <td className="px-4 py-3 text-gray-600">{row.serves}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          Lead times include 2–4 week production after order confirmation. Total door-to-door: typically 5–8 weeks.
        </p>
      </section>

      {/* ── HS Code block ── */}
      <section className="rounded-xl border border-blue-100 bg-blue-50 px-6 py-5">
        <h2 className="mb-3 text-xl font-bold text-gray-900">HS Code for Pizza Boxes</h2>
        <div className="flex flex-wrap gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">HS Code (Corrugated)</p>
            <p className="text-2xl font-extrabold text-gray-900">4819.10</p>
            <p className="text-sm text-gray-600">Cartons, boxes and cases of corrugated paper or paperboard</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">For non-corrugated</p>
            <p className="text-2xl font-extrabold text-gray-900">4819.20</p>
            <p className="text-sm text-gray-600">Folding cartons, boxes and cases of non-corrugated paper or paperboard</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          Most pizza boxes (corrugated) ship under <strong>4819.10</strong>. Your customs broker will confirm the correct sub-heading based on board specification.{" "}
          <Link href="/pizza-box-import-process-usa" className="font-semibold text-blue-700 hover:underline">
            See full import process →
          </Link>
        </p>
      </section>

      {/* ── FOB vs CIF comparison ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">FOB vs CIF: Which is Right for Your Import?</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-700">Factor</th>
                <th className="px-4 py-3 font-semibold text-orange-700">FOB (Free on Board)</th>
                <th className="px-4 py-3 font-semibold text-blue-700">CIF (Cost, Insurance & Freight)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Who arranges freight", "You (buyer / your forwarder)", "Factory (seller)"],
                ["Who controls carrier selection", "You", "Factory"],
                ["Freight cost on invoice", "No — quoted separately", "Yes — included"],
                ["Best for", "Buyers with established forwarders", "First-time importers"],
                ["Price transparency", "Higher — you see freight cost", "Lower — bundled"],
                ["Typical buyer type", "Experienced importers, chains", "New buyers, smaller volumes"],
              ].map(([factor, fob, cif], i, arr) => (
                <tr key={factor} className={i < arr.length - 1 ? "border-b border-gray-100" : ""}>
                  <td className="px-4 py-3 font-medium text-gray-700">{factor}</td>
                  <td className="px-4 py-3 text-gray-600">{fob}</td>
                  <td className="px-4 py-3 text-gray-600">{cif}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Related links ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Related Logistics Resources</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/pizza-box-container-loading" className="font-semibold text-orange-600 hover:underline">Container loading guide: 20ft & 40ft capacity →</Link></li>
          <li><Link href="/pizza-box-import-process-usa" className="font-semibold text-orange-600 hover:underline">US import process: HS codes, ISF filing, customs →</Link></li>
          <li><Link href="/pizza-box-freight-cost-estimator" className="font-semibold text-orange-600 hover:underline">Freight cost estimator: FOB vs CIF →</Link></li>
          <li><Link href="/pizza-box-supplier-california" className="font-semibold text-orange-600 hover:underline">Pizza box supplier California →</Link></li>
          <li><Link href="/pizza-box-supplier-new-york" className="font-semibold text-orange-600 hover:underline">Pizza box supplier New York →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
