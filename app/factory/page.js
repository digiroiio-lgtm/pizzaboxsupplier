import Link from "next/link";
import { CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "Pizza Box Factory | Production Facility in Istanbul, Turkey",
  description:
    "22,000m² pizza box manufacturing facility in Ikitelli OSB, Istanbul. Flexo and offset printing lines, 35+ containers/month capacity, direct Ambarlı port access.",
};

const specs = [
  { label: "Production Area", value: "22,000 m²" },
  { label: "Monthly Output", value: "35+ containers / month" },
  { label: "Printing Technology", value: "Flexo (up to 6-color) + Offset CMYK" },
  { label: "Board Grades", value: "E-flute, B-flute, BC-flute double wall" },
  { label: "QA Equipment", value: "Inline compression tester, color spectrometer, BCT machine" },
  { label: "Port Access", value: "Ambarlı Port — 12 km (Turkey's largest container port)" },
  { label: "Pallet Configuration", value: "EUR 1200×800mm, custom pallet patterns per SKU" },
  { label: "Workforce", value: "280+ production staff, 3-shift operation" },
];

const productionLines = [
  { line: "Die-Cut & Crease", desc: "High-speed Bobst and rotary die-cut lines for all standard and custom pizza box shapes." },
  { line: "Flexo Printing", desc: "2× 6-color Flexo units. Pantone-matched printing for 1–6 color brand programs." },
  { line: "Offset Printing", desc: "Full CMYK offset for photo-quality brand packaging and retail-grade print finish." },
  { line: "Lamination & Coating", desc: "OPP matte/gloss lamination, UV spot varnish and aqueous food-safe interior coating." },
  { line: "Auto Folder-Gluer", desc: "High-speed folder-gluers for folded flat-packed pizza box blanks. Output: 80,000+ units/shift." },
  { line: "Pallet & Container Loading", desc: "Stretch-wrap pallet line; container stuffing bay with forklift access. Full packing list per pallet." },
];

export default function FactoryPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-blue-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-400">
            production facility • istanbul, turkey
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Pizza Box Factory: 22,000m² Manufacturing Facility
          </h1>
          <p className="text-lg text-gray-400">
            Tour our production facility — from raw board intake to container loading. Verified by BRCGS, ISO 22000 and HACCP certifications.
          </p>
          <TrustBadges />
          <CTAButtons />
        </div>
      </section>

      {/* ── Facility photos ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Production Facility</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {["Factory Floor — Corrugating Line", "Flexo Printing Line", "Container Loading Bay"].map((label) => (
            <div key={label} className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center text-sm text-gray-500">
              {label}
            </div>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {["Die-Cut & Crease Station", "QA Inspection Area", "Finished Pallet Warehouse"].map((label) => (
            <div key={label} className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center text-sm text-gray-500">
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* ── Production specs ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Factory Specifications</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <tbody>
              {specs.map((row, i) => (
                <tr key={row.label} className={i < specs.length - 1 ? "border-b border-gray-100" : ""}>
                  <td className="px-4 py-3 font-semibold text-gray-700 w-1/3">{row.label}</td>
                  <td className="px-4 py-3 text-gray-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Production lines ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Production Lines</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productionLines.map((pl) => (
            <div key={pl.line} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="font-bold text-gray-900">{pl.line}</p>
              <p className="mt-1 text-sm text-gray-600">{pl.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Location & port ── */}
      <section className="rounded-xl border border-blue-100 bg-blue-50 px-6 py-5 space-y-2">
        <h2 className="text-xl font-bold text-gray-900">Location & Port Access</h2>
        <p className="text-sm text-gray-600">
          <strong>Address:</strong> Ikitelli OSB, Basaksehir, Istanbul, Turkey — Turkey's primary organized industrial zone for packaging and corrugated board manufacturers.
        </p>
        <p className="text-sm text-gray-600">
          <strong>Ambarlı Port:</strong> 12 km from factory. Turkey's largest container port. Weekly service to USA East Coast, West Coast, Gulf and UK ports.
        </p>
      </section>

      {/* ── Cross-links ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Explore Further</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/certifications" className="font-semibold text-orange-600 hover:underline">Quality certifications: BRCGS, ISO 22000, HACCP →</Link></li>
          <li><Link href="/export-markets" className="font-semibold text-orange-600 hover:underline">Export markets: 20+ countries →</Link></li>
          <li><Link href="/shipping-pizza-boxes-to-usa" className="font-semibold text-orange-600 hover:underline">Shipping guide: Turkey → USA →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
