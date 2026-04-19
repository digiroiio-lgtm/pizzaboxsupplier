import Link from "next/link";
import { CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "Custom Pizza Box Cost | Wholesale Pricing for Custom Printed Boxes",
  description:
    "Custom pizza box wholesale cost guide: print options (1-color to full CMYK), finishing, private label setup fees and per-unit cost drivers.",
};

const printOptions = [
  {
    level: "Blank (no print)",
    setupFee: "$0",
    unitAdd: "$0",
    desc: "Plain kraft or white liner box. Fastest lead time, lowest cost. Ideal for cost-sensitive bulk buyers.",
  },
  {
    level: "1–2 Color Flexo",
    setupFee: "$150–$400",
    unitAdd: "+$0.04–$0.08",
    desc: "Simple logo or brand mark in 1–2 Pantone colors. Very low setup cost, common for regional chains.",
  },
  {
    level: "3–4 Color Flexo",
    setupFee: "$400–$800",
    unitAdd: "+$0.08–$0.14",
    desc: "Multi-color brand identity with bold coverage. Standard for pizza chain branded packaging.",
  },
  {
    level: "Full CMYK Offset",
    setupFee: "$800–$1,800",
    unitAdd: "+$0.12–$0.22",
    desc: "Photo-quality printing for premium brand presentation. Required for national chain programs.",
  },
  {
    level: "Full CMYK + UV Spot",
    setupFee: "$1,200–$2,500",
    unitAdd: "+$0.20–$0.36",
    desc: "UV spot varnish or matte OPP lamination over full-print. Premium unboxing experience.",
  },
];

const finishingOptions = [
  { finish: "Matte OPP Lamination", unitAdd: "+$0.06–$0.12", desc: "Soft-touch premium feel, moisture barrier" },
  { finish: "Gloss OPP Lamination", unitAdd: "+$0.05–$0.10", desc: "High-gloss brand impact, protective coating" },
  { finish: "UV Spot Varnish", unitAdd: "+$0.04–$0.08", desc: "Selective gloss highlights over matte base" },
  { finish: "Embossing / Debossing", unitAdd: "+$0.08–$0.16", desc: "Tactile logo; requires additional tooling" },
  { finish: "Food-Safe Aqueous Coat", unitAdd: "+$0.02–$0.04", desc: "Interior coating for direct food contact" },
];

export default function CustomPizzaBoxCostPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            custom pizza box cost • private label pricing
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Custom Pizza Box Cost: Print, Finish & Private Label Pricing
          </h1>
          <p className="text-lg text-gray-400">
            Understand the cost structure of custom pizza box manufacturing — from print setup to per-unit costs for different volumes and finish levels.
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
        <strong>Note:</strong> All setup fees and unit additions are example ranges. Actual cost depends on artwork complexity, board spec and order volume. Request a binding quote.
      </div>

      {/* ── Print levels ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Print Level Options & Cost Impact</h2>
        <div className="space-y-3">
          {printOptions.map((opt) => (
            <div key={opt.level} className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-start sm:gap-6">
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-900">{opt.level}</p>
                <p className="mt-1 text-sm text-gray-600">{opt.desc}</p>
              </div>
              <div className="flex gap-4 sm:flex-col sm:text-right">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Setup Fee</p>
                  <p className="font-bold text-gray-900">{opt.setupFee}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Per Unit Add</p>
                  <p className="font-bold text-orange-600">{opt.unitAdd}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Finishing options ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Finishing & Coating Options</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {finishingOptions.map((opt) => (
            <div key={opt.finish} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold text-gray-900">{opt.finish}</p>
                <span className="flex-shrink-0 rounded-full bg-orange-100 px-2 py-0.5 text-xs font-bold text-orange-700">{opt.unitAdd}</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">{opt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Private label cost block ── */}
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Private Label Program Pricing</h2>
        <p className="mb-4 text-gray-600">
          Private label programs include full brand ownership of the design, exclusive colorway production slots and priority capacity booking for annual orders.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-orange-100 bg-orange-50 p-4 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600">Dieline & Artwork</p>
            <p className="mt-1 text-xl font-extrabold text-gray-900">Free</p>
            <p className="mt-0.5 text-xs text-gray-500">We provide box dielines and pre-press support</p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Printing Plates</p>
            <p className="mt-1 text-xl font-extrabold text-gray-900">$200–$1,800</p>
            <p className="mt-0.5 text-xs text-gray-500">One-time cost; plates stored for repeat orders</p>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Sample Approval</p>
            <p className="mt-1 text-xl font-extrabold text-gray-900">7–10 Days</p>
            <p className="mt-0.5 text-xs text-gray-500">Printed samples shipped by DHL before mass production</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="rounded-2xl bg-orange-600 px-8 py-10 text-center text-white shadow-lg">
        <h2 className="mb-2 text-2xl font-extrabold">Get Exact Quote in 24 Hours</h2>
        <p className="mb-6 text-orange-100">
          Share your brand guidelines, sizes and volume. We'll return a full custom pricing breakdown with plate costs and per-unit production cost.
        </p>
        <Link
          href="/get-quote"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-bold text-orange-700 shadow hover:bg-orange-50"
        >
          Request Custom Pricing →
        </Link>
      </section>

      {/* ── Related links ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Related Pricing Resources</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/pizza-box-price" className="font-semibold text-orange-600 hover:underline">Pizza box price guide by size →</Link></li>
          <li><Link href="/pizza-box-cost-per-1000" className="font-semibold text-orange-600 hover:underline">Cost per 1,000 units & bulk pricing tiers →</Link></li>
          <li><Link href="/products/custom-printed-pizza-boxes" className="font-semibold text-orange-600 hover:underline">Custom printed pizza boxes product page →</Link></li>
          <li><Link href="/custom-pizza-boxes" className="font-semibold text-orange-600 hover:underline">Custom pizza boxes wholesale →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
