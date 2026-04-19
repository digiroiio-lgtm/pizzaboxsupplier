import Link from "next/link";
import { Benefits, CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "Custom Pizza Boxes Wholesale | Private Label & Branded Packaging",
  description:
    "Custom pizza boxes wholesale from direct manufacturer. Full CMYK print, private label, blank to branded — MOQ 10,000 units. Get your artwork on a box in 3–4 weeks.",
};

const printLevels = [
  {
    level: "Blank",
    price: "From $0.12",
    icon: "⬜",
    desc: "No print. Food-grade corrugated board. Kraft or white liner. Add your sticker or label at point of use.",
    bestFor: "Cost-sensitive bulk buyers, private label with sticker application",
  },
  {
    level: "1-Color Flexo",
    price: "From $0.18",
    icon: "🟠",
    desc: "Single Pantone-matched color. Logo, brand mark or basic identity. Efficient for high-volume single-brand programs.",
    bestFor: "Single-location restaurants, cost-effective brand presence",
  },
  {
    level: "2–4 Color Flexo",
    price: "From $0.26",
    icon: "🎨",
    desc: "Multi-color brand identity, background fills, illustrated graphics. The standard for restaurant chain programs.",
    bestFor: "Restaurant chains, distributors with branded SKUs",
  },
  {
    level: "Full CMYK Offset",
    price: "From $0.36",
    icon: "🖼",
    desc: "Photo-quality print, gradients, retail-shelf presentation. Offset on white liner for maximum color impact.",
    bestFor: "Retail, DTC, premium restaurant brands, frozen food packaging",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Request a Quote",
    desc: "Tell us box size, quantity, print level and any reference artwork. We respond in 24h with pricing and dieline template.",
  },
  {
    num: "02",
    title: "Submit Artwork",
    desc: "Provide AI/EPS vector file to our dieline. Our design team checks artwork before plate creation at no extra cost.",
  },
  {
    num: "03",
    title: "Approve Proof & Sample",
    desc: "Digital proof for approval. Physical printed sample dispatched by courier before production commit.",
  },
  {
    num: "04",
    title: "Production & Export",
    desc: "2–4 week production. Full BRCGS, ISO 22000 documentation. Container loaded and dispatched to your port.",
  },
];

const customFormats = [
  { href: "/products/custom-pizza-boxes", label: "Custom Pizza Boxes", desc: "Full branding, any size, private label" },
  { href: "/products/custom-printed-pizza-boxes", label: "Custom Printed Boxes", desc: "CMYK and flexo print programs" },
  { href: "/products/personalized-pizza-boxes", label: "Personalized Boxes", desc: "Regional and chain localization" },
  { href: "/products/blank-pizza-boxes", label: "Blank Pizza Boxes", desc: "Unprinted, cost-efficient bulk" },
];

export default function CustomLandingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-3xl space-y-5">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            custom pizza boxes wholesale · private label · direct manufacturer
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Custom Pizza Boxes Wholesale: Your Brand on Every Box
          </h1>
          <p className="text-lg text-gray-400">
            From blank to full CMYK — custom printed pizza boxes wholesale from a direct manufacturer. MOQ from 10,000 units, 3–4 week turnaround, private label standard.
          </p>
          <TrustBadges />
          <CTAButtons />
        </div>
      </section>

      {/* ── Print level cards ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Choose Your Print Level</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {printLevels.map(({ level, price, icon, desc, bestFor }) => (
            <div key={level} className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-orange-300 hover:shadow-md transition-all">
              <span className="text-3xl">{icon}</span>
              <div>
                <p className="font-bold text-gray-900">{level}</p>
                <p className="text-lg font-extrabold text-orange-600">{price}</p>
                <p className="text-xs text-gray-400 mt-0.5">per unit (12-inch, 10K MOQ, FOB)</p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              <p className="mt-auto text-xs font-semibold text-gray-500">
                <span className="text-orange-600">Best for:</span> {bestFor}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500">
          Prices are example ranges. Actual pricing depends on size, board grade, finishing and volume.{" "}
          <Link href="/pizza-box-price" className="font-semibold text-orange-600 hover:underline">See full price guide →</Link>
        </p>
      </section>

      {/* ── Custom format grid ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Custom Formats</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {customFormats.map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-orange-400 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-gray-900 group-hover:text-orange-700">{label}</p>
              <p className="mt-1 text-xs text-gray-500">{desc}</p>
              <p className="mt-2 text-xs font-semibold text-orange-600">Explore →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Private label callout ── */}
      <section className="rounded-xl border border-emerald-100 bg-emerald-50 px-6 py-5 space-y-2">
        <h2 className="text-xl font-bold text-gray-900">100% Private Label — No Manufacturer Branding</h2>
        <p className="text-sm text-gray-600">
          All custom programs are fully private label. Your logo, your brand, your barcode — no manufacturer name or watermark anywhere on the box. Plates and artwork are kept confidential and are not shared with competing buyers.
        </p>
        <ul className="mt-2 space-y-1 text-sm">
          {["Plates owned by buyer or destroyed after contract", "Artwork files kept confidential", "No co-branding or manufacturer watermark", "Exclusive design within agreed product categories"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-gray-700">
              <span className="text-emerald-600 font-bold">✓</span> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Process ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Custom Order Process: From Quote to Container</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {processSteps.map(({ num, title, desc }) => (
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
        <p className="text-xs text-gray-500">
          Total timeline: 5–7 weeks from first artwork submission to goods in your USA warehouse (including 14–25 day sea transit).
        </p>
      </section>

      <Benefits />

      {/* ── CTA block ── */}
      <section className="rounded-2xl bg-orange-600 px-8 py-10 text-center text-white shadow-lg">
        <h2 className="mb-2 text-2xl font-extrabold">Start Your Custom Pizza Box Program</h2>
        <p className="mb-6 text-orange-100">
          Share your sizes, volumes and print requirements. Our team will send dieline templates and a binding quote in 24 hours.
        </p>
        <Link
          href="/get-quote"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-bold text-orange-700 shadow hover:bg-orange-50"
        >
          Request Custom Quote →
        </Link>
      </section>

      {/* ── Related ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Related Resources</h2>
        <ul className="space-y-1.5 text-sm">
          <li><Link href="/custom-pizza-box-cost" className="font-semibold text-orange-600 hover:underline">Custom pizza box cost: print, finish & private label →</Link></li>
          <li><Link href="/pizza-box-price" className="font-semibold text-orange-600 hover:underline">Pizza box price guide by size and print level →</Link></li>
          <li><Link href="/blog/custom-pizza-box-printing-guide" className="font-semibold text-orange-600 hover:underline">Custom printing guide: artwork, boards & lead times →</Link></li>
          <li><Link href="/wholesale" className="font-semibold text-orange-600 hover:underline">Wholesale container programs →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
