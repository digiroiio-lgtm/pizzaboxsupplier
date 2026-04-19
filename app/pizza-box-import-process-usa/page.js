import Link from "next/link";
import { CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "Pizza Box Import Process USA | HS Code 4819.10 & Customs Guide",
  description:
    "Step-by-step US import process for pizza boxes: HS code 4819.10, ISF filing, commercial invoice requirements, customs clearance and FDA compliance.",
};

const steps = [
  {
    step: "01",
    title: "Purchase Order & Proforma Invoice",
    body: "Buyer issues PO with sizes, quantities, print specs and requested delivery port. We respond with a Proforma Invoice within 24 hours.",
  },
  {
    step: "02",
    title: "Production & Quality Control",
    body: "Production runs 2–4 weeks. Pre-shipment QC inspection is conducted inline and pre-dispatch. BRCGS, ISO 22000 and HACCP documentation available.",
  },
  {
    step: "03",
    title: "ISF Filing (10+2 Rule)",
    body: "Your customs broker files the Importer Security Filing (ISF) at least 24 hours before vessel departure from Turkey. We provide HS code, shipper and commodity details.",
  },
  {
    step: "04",
    title: "Bill of Lading & Export Documents",
    body: "We issue: Commercial Invoice, Packing List, Bill of Lading (or AWB), Certificate of Origin, and health/food safety certificates as required.",
  },
  {
    step: "05",
    title: "US Customs Entry (CBP)",
    body: "Your broker files a Formal Entry with US Customs and Border Protection. Pizza boxes (corrugated) typically clear under HS 4819.10 with standard duties.",
  },
  {
    step: "06",
    title: "Port Release & Inland Delivery",
    body: "After CBP release, drayage moves your container to warehouse. We can assist with freight forwarder recommendations for major USA ports.",
  },
];

export default function ImportProcessPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-blue-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-400">
            import guide • hs code 4819.10 • us customs
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Pizza Box Import Process USA: Step-by-Step Guide
          </h1>
          <p className="text-lg text-gray-400">
            From purchase order to warehouse receipt — a complete guide for US distributors and importers sourcing pizza boxes from Turkey.
          </p>
          <TrustBadges />
          <CTAButtons />
        </div>
      </section>

      {/* ── HS Code highlight ── */}
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">HS Code (Corrugated)</p>
          <p className="mt-1 text-3xl font-extrabold text-gray-900">4819.10</p>
          <p className="mt-1 text-xs text-gray-600">Most pizza boxes (corrugated board)</p>
        </div>
        <div className="rounded-xl border border-orange-100 bg-orange-50 p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-600">US Import Duty</p>
          <p className="mt-1 text-3xl font-extrabold text-gray-900">Free – 3%</p>
          <p className="mt-1 text-xs text-gray-600">Varies by country of origin & trade agreement</p>
        </div>
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">FDA Registration</p>
          <p className="mt-1 text-3xl font-extrabold text-gray-900">Required</p>
          <p className="mt-1 text-xs text-gray-600">Food-contact packaging requires FDA facility registration</p>
        </div>
      </section>

      {/* ── Step-by-step process ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">The 6-Step Import Process</h2>
        <div className="space-y-3">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-extrabold text-white">
                {s.step}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{s.title}</p>
                <p className="mt-1 text-sm text-gray-600">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Document checklist ── */}
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Required Import Documents</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Commercial Invoice", "Issued by factory; includes unit price, total, HS code, Incoterms"],
            ["Packing List", "Per pallet/carton breakdown of SKUs, weights and dimensions"],
            ["Bill of Lading", "Ocean B/L or Express Release B/L; surrendered at destination port"],
            ["Certificate of Origin", "Form A or EUR.1 for GSP/trade agreement duty reduction"],
            ["ISF 10+2 Filing", "Filed by your US customs broker ≥24h before vessel departure"],
            ["FDA Prior Notice", "Required for food-contact packaging imported into the USA"],
          ].map(([doc, desc]) => (
            <div key={doc} className="rounded-lg border border-gray-100 bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">{doc}</p>
              <p className="mt-0.5 text-xs text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related links ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Related Resources</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/shipping-pizza-boxes-to-usa" className="font-semibold text-orange-600 hover:underline">Shipping guide: Turkey → USA ports & transit times →</Link></li>
          <li><Link href="/pizza-box-container-loading" className="font-semibold text-orange-600 hover:underline">Container loading guide: 20ft & 40ft capacity →</Link></li>
          <li><Link href="/pizza-box-freight-cost-estimator" className="font-semibold text-orange-600 hover:underline">Freight cost estimator →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
