import Link from "next/link";
import { CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "Pizza Boxes for Takeaway Business | Wholesale & Custom Branded",
  description:
    "Wholesale pizza boxes for takeaway businesses. Branded custom printing from 10,000 units. Low MOQ, factory-direct pricing, fast delivery.",
};

export default function TakeawayBusinessPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            pizza boxes for takeaway • wholesale pricing
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Pizza Boxes for Takeaway Business: Branded Packaging at Wholesale Cost
          </h1>
          <p className="text-lg text-gray-400">
            Custom printed takeaway pizza boxes from a direct manufacturer — no middleman, no minimum order surprise. Serving takeaway businesses across USA, UK and beyond.
          </p>
          <TrustBadges />
          <div className="flex flex-wrap gap-2">
            {["Direct from Manufacturer (No Middleman)", "10,000 Unit MOQ", "Full CMYK Branding"].map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-200">✓ {t}</span>
            ))}
          </div>
          <CTAButtons />
        </div>
      </section>

      {/* ── Why takeaway needs the right box ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Why Takeaway Packaging Matters</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Brand Visibility in Every Delivery", body: "The pizza box is the only physical brand touchpoint for delivery and takeaway customers. Custom printed boxes reinforce brand recall at no extra per-unit cost vs. blank." },
            { title: "Delivery Durability", body: "Takeaway boxes travel further and take more abuse. Our E-flute and B-flute corrugated specs maintain heat, stack strength and moisture resistance from oven to door." },
            { title: "Low MOQ for Single Locations", body: "MOQ starts at 10,000 units — low enough for a single takeaway location, mixed across 2–3 sizes." },
            { title: "Consistent Weekly Supply", body: "Distributor and direct delivery programs ensure you never run out. We work with your freight partner for regular replenishment cycles." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="font-bold text-gray-900 mb-1">{item.title}</p>
              <p className="text-sm text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing reference ── */}
      <section className="rounded-xl border border-orange-100 bg-orange-50 px-6 py-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Takeaway Box Pricing Reference</h2>
        <div className="grid gap-4 sm:grid-cols-3 text-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600">Blank (no print)</p>
            <p className="text-2xl font-extrabold text-gray-900">From $0.16</p>
            <p className="text-xs text-gray-500">12-inch, 10,000 units FOB</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600">1-Color Print</p>
            <p className="text-2xl font-extrabold text-gray-900">From $0.24</p>
            <p className="text-xs text-gray-500">12-inch, 10,000 units FOB</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600">Full CMYK Print</p>
            <p className="text-2xl font-extrabold text-gray-900">From $0.34</p>
            <p className="text-xs text-gray-500">12-inch, 10,000 units FOB</p>
          </div>
        </div>
        <p className="text-xs text-gray-500">
          Example prices only. Actual pricing varies by size, spec and volume.{" "}
          <Link href="/pizza-box-price" className="font-semibold text-orange-600 hover:underline">See full price guide →</Link>
        </p>
      </section>

      {/* ── Related links ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Related Resources</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/pizza-box-price" className="font-semibold text-orange-600 hover:underline">Pizza box price guide →</Link></li>
          <li><Link href="/custom-pizza-box-cost" className="font-semibold text-orange-600 hover:underline">Custom pizza box cost →</Link></li>
          <li><Link href="/pizza-boxes-for-restaurant-chains" className="font-semibold text-orange-600 hover:underline">Pizza boxes for restaurant chains →</Link></li>
          <li><Link href="/pizza-boxes-for-ghost-kitchens" className="font-semibold text-orange-600 hover:underline">Pizza boxes for ghost kitchens →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
