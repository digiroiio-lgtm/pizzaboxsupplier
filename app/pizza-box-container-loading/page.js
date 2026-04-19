import Link from "next/link";
import { CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "Pizza Box Container Loading Guide | 20ft & 40ft Capacity by Size",
  description:
    "How many pizza boxes fit in a 20ft or 40ft container? Units per container by box size, pallet configurations and mixed-load planning.",
};

const containerData = [
  { size: "10 Inch", flat20: "70,000–80,000", flat40: "150,000–170,000" },
  { size: "12 Inch", flat20: "55,000–65,000", flat40: "110,000–130,000" },
  { size: "14 Inch", flat20: "40,000–50,000", flat40: "85,000–105,000" },
  { size: "16 Inch", flat20: "30,000–38,000", flat40: "65,000–80,000" },
  { size: "18 Inch", flat20: "22,000–28,000", flat40: "48,000–58,000" },
  { size: "20 Inch", flat20: "16,000–20,000", flat40: "35,000–42,000" },
];

export default function ContainerLoadingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-blue-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-400">
            container logistics • pizza box import guide
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Pizza Box Container Loading: Capacity, Pallets & Mixed Loads
          </h1>
          <p className="text-lg text-gray-400">
            Understand exactly how many pizza boxes fit per container, how pallets are configured, and how to mix sizes for cost-efficient loading.
          </p>
          <TrustBadges />
          <CTAButtons />
        </div>
      </section>

      {/* ── Container capacity table ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Units Per Container by Pizza Box Size</h2>
        <p className="text-gray-600">
          Counts below are for flat-packed (knocked-down) boxes bundled in master packs. Actual units vary slightly by board thickness and bundle configuration.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-700">Box Size</th>
                <th className="px-4 py-3 font-semibold text-orange-700">20ft FCL (approx.)</th>
                <th className="px-4 py-3 font-semibold text-blue-700">40ft FCL (approx.)</th>
              </tr>
            </thead>
            <tbody>
              {containerData.map((row, i) => (
                <tr key={row.size} className={i < containerData.length - 1 ? "border-b border-gray-100" : ""}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.size}</td>
                  <td className="px-4 py-3 text-gray-600">{row.flat20}</td>
                  <td className="px-4 py-3 text-gray-600">{row.flat40}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          All figures are estimates for planning purposes. Contact us for an exact loading plan based on your size mix.
        </p>
      </section>

      {/* ── Container specs ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Container Specifications</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-orange-100 bg-orange-50 p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-600">20ft Standard Container</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><strong>Internal volume:</strong> ~33 CBM</li>
              <li><strong>Max payload:</strong> ~21,700 kg</li>
              <li><strong>Pallets:</strong> 10–11 standard EUR pallets</li>
              <li><strong>Best for:</strong> Trial orders, 1–2 size SKUs</li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">40ft Standard Container</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><strong>Internal volume:</strong> ~67 CBM</li>
              <li><strong>Max payload:</strong> ~26,500 kg</li>
              <li><strong>Pallets:</strong> 20–22 standard EUR pallets</li>
              <li><strong>Best for:</strong> Annual programs, multi-size SKU mix</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Mixed load guidance ── */}
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Mixed-Size Container Loading</h2>
        <p className="text-gray-600">
          Most distributors order 3–5 different sizes per container. We optimize pallet configuration to maximize cubic efficiency:
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></span>
            <span>Larger boxes are loaded on bottom-row pallets; smaller sizes stacked above.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></span>
            <span>Each pallet is labeled by SKU with barcode and size indication for easy warehouse sorting.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></span>
            <span>We provide a full packing list (including pallet IDs and unit counts) with every shipment.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></span>
            <span>HS Code <strong>4819.10</strong> (corrugated) is declared per pallet line on the commercial invoice.</span>
          </li>
        </ul>
      </section>

      {/* ── Related links ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Related Logistics Pages</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/shipping-pizza-boxes-to-usa" className="font-semibold text-orange-600 hover:underline">Shipping guide: Turkey → USA ports & transit times →</Link></li>
          <li><Link href="/pizza-box-import-process-usa" className="font-semibold text-orange-600 hover:underline">USA import process: HS code, customs clearance, ISF →</Link></li>
          <li><Link href="/pizza-box-freight-cost-estimator" className="font-semibold text-orange-600 hover:underline">Freight cost estimator: FOB vs CIF breakdown →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
