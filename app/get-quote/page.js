import Link from "next/link";
import { LeadForm, TrustBadges } from "@/components/sections";
import { CONTACT } from "@/lib/content";

export const metadata = {
  title: "Get Quote – Wholesale Pizza Boxes | Factory Pricing in 24h",
  description:
    "Request distributor pricing for wholesale pizza boxes. Share your segment, volume and delivery port — we respond with a structured factory quote in 24 hours.",
};

const segments = [
  { id: "distributor", label: "Distributor / Importer", desc: "Buying for resale or warehouse stock in the USA" },
  { id: "chain", label: "Restaurant Chain", desc: "Multi-location chain or franchise procurement" },
  { id: "ghost", label: "Ghost Kitchen / Dark Kitchen", desc: "High-volume delivery-only operations" },
  { id: "wholesale", label: "Wholesale Buyer", desc: "Foodservice wholesalers and buying groups" },
];

const whyUs = [
  { icon: "🏭", text: "Direct from manufacturer — no middleman markup" },
  { icon: "⏱", text: "Structured quote in 24h, not 48h" },
  { icon: "📦", text: "35+ containers/month export capacity" },
  { icon: "✅", text: "BRCGS · ISO 22000 · HACCP certified" },
];

export default function GetQuotePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            factory-direct · pizza box supplier USA
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Get Distributor Pricing for Wholesale Pizza Boxes
          </h1>
          <p className="text-lg text-gray-400">
            Share your segment, volume and delivery port. We send a structured factory quote in{" "}
            <span className="font-bold text-orange-400">24 hours — not 48</span>.
          </p>
          <TrustBadges />
        </div>
      </section>

      {/* ── Why us strip ── */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {whyUs.map(({ icon, text }) => (
          <div key={text} className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <span className="text-2xl">{icon}</span>
            <p className="text-xs font-medium text-gray-700 leading-snug">{text}</p>
          </div>
        ))}
      </div>

      {/* ── Segment picker ── */}
      <section className="space-y-4 rounded-2xl border border-orange-100 bg-orange-50 px-6 py-6">
        <h2 className="text-lg font-bold text-gray-900">Which buyer type describes you best?</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {segments.map(({ id, label, desc }) => (
            <div key={id} className="flex gap-3 rounded-xl border border-orange-200 bg-white p-4 shadow-sm">
              <div className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-full border-2 border-orange-500 bg-white ring-2 ring-orange-100" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">{label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-orange-700 font-medium">
          Select your segment when filling the form below — it helps us tailor container pricing and lead time.
        </p>
      </section>

      {/* ── Main lead form ── */}
      <LeadForm />

      {/* ── Alternative contact ── */}
      <section className="rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
        <h2 className="mb-3 text-base font-bold text-gray-900">Prefer to talk directly?</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-700"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp — Instant Response
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-orange-600 px-5 py-2.5 text-sm font-bold text-orange-700 hover:bg-orange-50"
          >
            Email Export Team
          </a>
        </div>
        <p className="mt-3 text-xs text-gray-400">
          Istanbul office · UTC+3 · Typical reply within 2 business hours during office hours
        </p>
      </section>

      {/* ── Related ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-4">
        <h2 className="mb-2 text-sm font-bold text-gray-700">Before you submit — useful pages</h2>
        <ul className="space-y-1 text-sm">
          <li><Link href="/pizza-box-price" className="font-semibold text-orange-600 hover:underline">Pizza box price guide by size and print level →</Link></li>
          <li><Link href="/products" className="font-semibold text-orange-600 hover:underline">Browse all box sizes →</Link></li>
          <li><Link href="/wholesale" className="font-semibold text-orange-600 hover:underline">Wholesale container programs →</Link></li>
        </ul>
      </section>
    </>
  );
}
