import Link from "next/link";
import { CTAButtons, LeadForm } from "@/components/sections";

export const metadata = {
  title: "Bulk Pizza Box Orders | Volume Pricing and Container Programs",
  description:
    "Bulk pizza boxes with stable supply, annual pricing and export-ready documentation. Volume tiers from 10,000 pcs to full container loads for USA distributors.",
};

const volumeTiers = [
  { label: "10,000 – 49,999 pcs", badge: "Starter", color: "bg-gray-100 text-gray-700", saving: "Base price" },
  { label: "50,000 – 99,999 pcs", badge: "Volume", color: "bg-orange-100 text-orange-700", saving: "Save 8–10%" },
  { label: "100,000+ pcs", badge: "Contract", color: "bg-orange-600 text-white", saving: "Save 12–18%" },
];

const workflowSteps = [
  {
    num: "01",
    title: "Share Your Requirements",
    desc: "Tell us sizes, monthly usage, print needs and your delivery port. Takes 3 minutes.",
  },
  {
    num: "02",
    title: "Receive Optimized Quote",
    desc: "We send a structured factory quote with lead time plan and container loading summary — within 24 hours.",
  },
  {
    num: "03",
    title: "Approve Samples",
    desc: "Physical samples dispatched by courier. Approve spec and print before production commit.",
  },
  {
    num: "04",
    title: "Launch Production",
    desc: "Production starts on deposit. 2–4 week lead time. Export docs prepared before shipment.",
  },
];

const bulkAdvantages = [
  { icon: "📉", text: "Price drops 8–18% with volume — ask for tier breakdown" },
  { icon: "🔒", text: "Annual contracts lock pricing through seasonal fluctuations" },
  { icon: "🚢", text: "Container-optimized loading reduces freight per unit" },
  { icon: "📦", text: "Mixed sizes per container — avoid over-ordering single SKUs" },
  { icon: "🖨", text: "Custom print included from 10,000 pcs/size" },
  { icon: "📄", text: "Full export documentation: BL, packing list, EUR.1, MSDS" },
];

export default function BulkOrdersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-3xl space-y-5">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            bulk pizza boxes · direct manufacturer pricing
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Bulk Pizza Box Orders with Direct Manufacturer Pricing
          </h1>
          <p className="text-lg text-gray-400">
            Lock in annual purchasing terms for chain expansion and distributor inventory planning.
            Price drops with volume — from 10,000 pcs to full container loads.
          </p>
          <CTAButtons />
        </div>
      </section>

      {/* ── Volume tiers ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Bulk Pricing Tiers</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {volumeTiers.map(({ label, badge, color, saving }) => (
            <div key={badge} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm text-center">
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${color}`}>{badge}</span>
              <p className="mt-3 font-semibold text-gray-900 text-sm">{label}</p>
              <p className="mt-1 text-lg font-extrabold text-orange-600">{saving}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500">
          Per-unit prices FOB Istanbul. Exact figures depend on board spec and print level.{" "}
          <Link href="/pizza-box-price" className="text-orange-600 hover:underline font-semibold">
            See price guide →
          </Link>
        </p>
      </section>

      {/* ── Workflow ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Bulk Ordering Workflow</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {workflowSteps.map(({ num, title, desc }) => (
            <div key={num} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-extrabold text-white">
                {num}
              </span>
              <div>
                <p className="font-semibold text-gray-900">{title}</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bulk advantages ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Why Buy in Bulk Direct from Factory?</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bulkAdvantages.map(({ icon, text }) => (
            <div key={text} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <span className="text-xl flex-shrink-0">{icon}</span>
              <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="rounded-2xl bg-orange-600 px-8 py-10 text-center text-white shadow-lg">
        <h2 className="mb-2 text-2xl font-extrabold">Start Your Bulk Order Today</h2>
        <p className="mb-6 text-orange-100">
          Share your sizes, quantities and print requirements. We respond with factory pricing in 24 hours.
        </p>
        <Link
          href="/get-quote"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-bold text-orange-700 shadow hover:bg-orange-50"
        >
          Request Bulk Quote →
        </Link>
      </section>

      {/* ── Related ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Related Pages</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/wholesale" className="font-semibold text-orange-600 hover:underline">Wholesale container programs →</Link></li>
          <li><Link href="/pizza-box-price" className="font-semibold text-orange-600 hover:underline">Pizza box price by size and print level →</Link></li>
          <li><Link href="/pizza-box-cost-per-1000" className="font-semibold text-orange-600 hover:underline">Cost per 1,000 units calculator →</Link></li>
          <li><Link href="/custom-pizza-boxes" className="font-semibold text-orange-600 hover:underline">Custom pizza boxes wholesale →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
