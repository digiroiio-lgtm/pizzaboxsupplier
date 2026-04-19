import Link from "next/link";
import { CTAButtons, LeadForm } from "@/components/sections";

export const metadata = {
  title: "Pizza Box Manufacturer Certifications | BRCGS, ISO 22000, HACCP",
  description:
    "PizzaBoxSupplier quality certifications: BRCGS food safety, ISO 22000 food management system, HACCP compliance. Full documentation available for buyers.",
};

const certifications = [
  {
    name: "BRCGS (British Retail Consortium Global Standards)",
    badge: "BRCGS",
    color: "emerald",
    why: "The highest internationally recognized food safety standard for packaging manufacturers. Required by most major UK, EU and US retail and foodservice buyers.",
    scope: "Corrugated pizza box manufacturing — all production lines and board grades.",
    relevance: "BRCGS certificates are provided with every commercial invoice for food-contact packaging imports. USA importers can share this with their compliance teams.",
  },
  {
    name: "ISO 22000 Food Safety Management System",
    badge: "ISO 22000",
    color: "blue",
    why: "International standard for food safety management systems across the food supply chain, including food-contact packaging manufacturers.",
    scope: "Full facility scope — raw material intake, production, finishing, warehousing and dispatch.",
    relevance: "Required by many USA and EU foodservice buyers for supplier qualification. Certificate available in PDF upon request.",
  },
  {
    name: "HACCP (Hazard Analysis Critical Control Points)",
    badge: "HACCP",
    color: "orange",
    why: "Systematic preventive approach to food safety hazards. Identifies critical control points in the manufacturing process to prevent contamination.",
    scope: "Applied to all production stages: board storage, ink/coating application, die-cutting, packaging and loading.",
    relevance: "HACCP documentation supports buyer due diligence and FDA facility compliance for food-contact packaging imports to the USA.",
  },
];

export default function CertificationsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-emerald-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400">
            certifications • quality assurance • e-e-a-t
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Quality Certifications: BRCGS, ISO 22000 & HACCP
          </h1>
          <p className="text-lg text-gray-400">
            Every pizza box we export is produced under verified food safety management systems. Certification documents are available for all commercial orders.
          </p>
          <div className="flex flex-wrap gap-2">
            {["BRCGS Certified", "ISO 22000", "HACCP Compliant"].map((b) => (
              <span key={b} className="rounded-full border border-emerald-400 bg-emerald-900/30 px-3 py-1 text-xs font-bold text-emerald-300">{b}</span>
            ))}
          </div>
          <CTAButtons />
        </div>
      </section>

      {/* ── Cert details ── */}
      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-gray-900">Certification Details</h2>
        {certifications.map((cert) => (
          <div key={cert.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-3">
            <div className="flex items-start gap-4">
              <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-${cert.color}-100 text-${cert.color}-700 text-xs font-extrabold text-center`}>
                {cert.badge}
              </span>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{cert.name}</h3>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 text-sm">
              <div className="rounded-lg bg-gray-50 p-3">
                <p className="font-semibold text-gray-700 mb-1">Why It Matters</p>
                <p className="text-gray-600">{cert.why}</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3">
                <p className="font-semibold text-gray-700 mb-1">Certification Scope</p>
                <p className="text-gray-600">{cert.scope}</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3">
                <p className="font-semibold text-gray-700 mb-1">Buyer Relevance</p>
                <p className="text-gray-600">{cert.relevance}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── Document request ── */}
      <section className="rounded-xl border border-emerald-100 bg-emerald-50 px-6 py-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Request Certification Documents</h2>
        <p className="text-sm text-gray-600">
          Certificate PDFs, scope letters and technical data sheets are available to verified buyers and importers. Submit a quote request and specify "certifications required" in your project details.
        </p>
        <Link href="/get-quote" className="inline-block rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-800">
          Request Documents →
        </Link>
      </section>

      {/* ── Cross-links ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Related Pages</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/factory" className="font-semibold text-orange-600 hover:underline">Factory details: production lines & capacity →</Link></li>
          <li><Link href="/about-us" className="font-semibold text-orange-600 hover:underline">About us: manufacturer profile →</Link></li>
          <li><Link href="/pizza-box-import-process-usa" className="font-semibold text-orange-600 hover:underline">US import process: documentation checklist →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
