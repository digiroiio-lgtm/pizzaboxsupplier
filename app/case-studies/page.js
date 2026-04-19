import Link from "next/link";
import { CTAButtons, LeadForm } from "@/components/sections";

export const metadata = {
  title: "Pizza Box Case Studies | How Distributors & Chains Buy Direct",
  description:
    "Anonymized case studies: how USA distributors, restaurant chains, ghost kitchens and importers source pizza boxes direct from our Turkey factory.",
};

const cases = [
  {
    id: "cs-01",
    label: "Northeast USA Broadline Distributor",
    segment: "Distributor",
    result: "28% landed cost reduction",
    challenge: "This distributor was sourcing pizza boxes from a domestic reseller at a significant premium. Quality was inconsistent between batches and lead times were unreliable, causing stockouts at key restaurant accounts.",
    solution: "Switched to a direct container program. Monthly 2×40ft loads with 6 mixed SKUs (10-inch through 16-inch). We provide advance shipping notice 2 weeks before vessel departure for warehouse planning.",
    outcome: "Landed cost dropped 28% vs. prior supplier. Zero stockouts in 14 months. Private label branding added in month 4 at no MOQ increase.",
    metrics: ["2×40ft FCL / month", "6 SKUs per load", "28% cost reduction", "14 months, zero supply issues"],
  },
  {
    id: "cs-02",
    label: "Regional Pizza Chain — 60 Locations",
    segment: "Restaurant Chain",
    result: "$85,000 annual savings",
    challenge: "The chain's packaging costs were rising 12% annually through their distributor. Branding consistency was also an issue — boxes from different distributor batches had slightly different colors.",
    solution: "Direct factory supply for their 3 core box sizes with full CMYK branded printing. Annual contract with quarterly container shipments. Plates stored on file for zero re-setup on reorders.",
    outcome: "Annual savings of approximately $85,000. Brand consistency across all 60 locations. Same-batch color consistency guaranteed per production run.",
    metrics: ["3 box sizes", "Full CMYK print", "$85K annual savings", "Quarterly containers"],
  },
  {
    id: "cs-03",
    label: "LA Ghost Kitchen Operator — 5 Virtual Brands",
    segment: "Ghost Kitchen",
    result: "5 brands, 1 container",
    challenge: "Operating 5 virtual pizza brands from 2 ghost kitchen facilities, the operator needed separate branded boxes for each brand but couldn't meet individual MOQs per brand at standard suppliers.",
    solution: "Mixed container program: 5 brands × 2 sizes = 10 SKUs in one 40ft container. Each brand 10,000–20,000 units. Pallets labeled by brand for easy warehouse sorting.",
    outcome: "Single quarterly container covers all 5 brands. Total per-unit cost 22% lower than previous branded packaging source.",
    metrics: ["5 brands", "10 SKUs per container", "10,000 unit MOQ/brand", "22% unit cost savings"],
  },
  {
    id: "cs-04",
    label: "Texas Foodservice Importer",
    segment: "Wholesale Importer",
    result: "Scaled 1→3 containers/month in 8 months",
    challenge: "A new importer entering the pizza box market needed a reliable factory partner with clean documentation for US Customs and a first-trial order that didn't require a full 40ft commitment.",
    solution: "Trial order: 1×20ft FCL, 3 sizes. Full documentation package provided: commercial invoice, COO, packing list, B/L and HS code declarations. CIF Houston pricing to simplify first import logistics.",
    outcome: "Trial cleared customs in 48 hours. Reordered within 6 weeks. Now on a 3-container/month program with FOB pricing and their own freight forwarder.",
    metrics: ["1×20ft trial", "Full customs docs", "6-week first reorder", "3 containers/month at month 8"],
  },
  {
    id: "cs-05",
    label: "UK Pizza Chain — Nationwide",
    segment: "Restaurant Chain (UK)",
    result: "National supply program active",
    challenge: "A UK pizza chain was sourcing boxes locally at high per-unit cost. They needed a factory-direct alternative that could deliver to UK ports consistently.",
    solution: "12-day transit to Felixstowe. 2×40ft per month with 4 custom-branded SKUs. BRCGS certification provided for UK buyer compliance.",
    outcome: "UK-wide chain now on a 12-month rolling contract. Per-unit saving vs. local supplier: 31%. BRCGS certificate accepted by their food safety compliance team.",
    metrics: ["12-day transit", "4 branded SKUs", "31% per-unit savings", "BRCGS compliance passed"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            case studies • used by high-volume buyers
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Pizza Box Case Studies: How Buyers Work with Us
          </h1>
          <p className="text-lg text-gray-400">
            Anonymized examples of distributor, chain, ghost kitchen and importer programs — from first trial to annual contract.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Direct from Manufacturer (No Middleman)", "Consistent Supply Guaranteed", "Used by High-Volume Buyers"].map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-200">✓ {t}</span>
            ))}
          </div>
          <CTAButtons />
        </div>
      </section>

      {/* ── Cases ── */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Client Case Studies</h2>
        {cases.map((c) => (
          <div key={c.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-600">{c.segment}</span>
                <h3 className="mt-0.5 text-lg font-bold text-gray-900">{c.label}</h3>
              </div>
              <span className="rounded-full bg-emerald-100 px-4 py-1 text-sm font-extrabold text-emerald-700">
                {c.result}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 text-sm">
              <div>
                <p className="font-semibold text-gray-700 mb-1">Challenge</p>
                <p className="text-gray-600">{c.challenge}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-1">Solution</p>
                <p className="text-gray-600">{c.solution}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-1">Outcome</p>
                <p className="text-gray-600">{c.outcome}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {c.metrics.map((m) => (
                <span key={m} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">{m}</span>
              ))}
            </div>
          </div>
        ))}

        <p className="text-xs text-gray-400 italic">
          Client names withheld per NDA. All cases represent real account structures and outcomes.
        </p>
      </section>

      {/* ── CTA ── */}
      <section className="rounded-2xl bg-orange-600 px-8 py-10 text-center text-white shadow-lg">
        <h2 className="mb-2 text-2xl font-extrabold">Start Your Own Case Study</h2>
        <p className="mb-6 text-orange-100">
          Share your segment, volume and destination. We'll build a program that makes sense for your business.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-bold text-orange-700 shadow hover:bg-orange-50"
          >
            Get Container Pricing →
          </Link>
        </div>
      </section>

      {/* ── Segment links ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Find Your Segment</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/pizza-boxes-for-distributors" className="font-semibold text-orange-600 hover:underline">Pizza boxes for distributors →</Link></li>
          <li><Link href="/pizza-boxes-for-restaurant-chains" className="font-semibold text-orange-600 hover:underline">Pizza boxes for restaurant chains →</Link></li>
          <li><Link href="/pizza-boxes-for-wholesale-importers" className="font-semibold text-orange-600 hover:underline">Pizza boxes for wholesale importers →</Link></li>
          <li><Link href="/pizza-boxes-for-ghost-kitchens" className="font-semibold text-orange-600 hover:underline">Pizza boxes for ghost kitchens →</Link></li>
          <li><Link href="/pizza-boxes-for-frozen-food-brands" className="font-semibold text-orange-600 hover:underline">Pizza boxes for frozen food brands →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
