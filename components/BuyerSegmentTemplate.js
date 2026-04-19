import Link from "next/link";
import Script from "next/script";
import { CTAButtons, LeadForm, TrustBadges } from "@/components/sections";
import { CONTACT } from "@/lib/content";

/**
 * BuyerSegmentTemplate – shared layout for buyer-segment pages.
 * Accepts a `page` object from `buyerSegmentPages` in lib/content.js.
 */
export default function BuyerSegmentTemplate({ page }) {
  const waLink = `${CONTACT.whatsappRaw}?text=I%20want%20pricing%20for%20pizza%20boxes%20-%20${encodeURIComponent(page.segment)}`;

  const faqSchema = page.segmentFaqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.segmentFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      {faqSchema && (
        <Script
          id={`${page.slug}-faq-schema`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            pizza boxes for {page.segment.toLowerCase()} • direct from manufacturer
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {page.h1}
          </h1>
          <p className="text-lg text-gray-400">{page.tagline}</p>

          {/* Sales psychology triggers */}
          <div className="flex flex-wrap gap-2">
            {["Direct from Manufacturer (No Middleman)", "Consistent Supply Guaranteed", "Scale from 1 to 100 Containers/Month"].map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-200">
                ✓ {t}
              </span>
            ))}
          </div>

          <TrustBadges />

          <div className="flex flex-wrap gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-bold text-white shadow hover:bg-orange-700"
            >
              {page.cta} →
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-bold text-white shadow hover:bg-green-700"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Talk to Export Manager
            </a>
          </div>
        </div>
      </section>

      {/* ── Pain points ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Challenges We Solve for {page.segment}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {page.painPoints.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-extrabold text-orange-700">
                  ✓
                </span>
                <p className="font-bold text-gray-900">{item.title}</p>
              </div>
              <p className="text-sm text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Recommended sizes ── */}
      {page.recommendedSizes?.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Recommended Pizza Box Sizes for {page.segment}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {page.recommendedSizes.map((size) => (
              <Link
                key={size.slug}
                href={`/products/${size.slug}`}
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-orange-300 hover:shadow-md transition-all"
              >
                <p className="font-bold text-gray-900">{size.size}</p>
                <p className="mt-1 text-xs text-gray-500">{size.note}</p>
                <p className="mt-2 text-xs font-semibold text-orange-600">View specs →</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            All sizes available in blank, 1-color, 2–4 color and full CMYK print.{" "}
            <Link href="/products" className="font-semibold text-orange-600 hover:underline">Browse all sizes →</Link>
          </p>
        </section>
      )}

      {/* ── Volume assumptions ── */}
      <section className="rounded-xl border border-blue-100 bg-blue-50 px-6 py-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-900">
          Volume Assumptions for {page.segment}
        </h2>
        <ul className="space-y-2">
          {page.volumeAssumptions.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
              <span className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center font-bold">→</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Case-style examples ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Examples: How {page.segment} Work with Us</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {page.caseExamples.map((ex) => (
            <div key={ex.label} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-600">
                {ex.label}
              </p>
              <p className="text-sm text-gray-700">{ex.body}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 italic">
          Client names withheld per NDA. Examples are representative of real account structures.
        </p>
      </section>

      {/* ── Why direct factory ── */}
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Why Buy Direct from Manufacturer?
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "No Middleman Markup", desc: "Factory price = your price. No agent, no importer, no extra margin layer." },
            { label: "Consistent Supply", desc: "Production slots reserved for regular accounts. No stockouts, no supply surprises." },
            { label: "Used by High-Volume Buyers", desc: "35+ containers shipped monthly to distributors in 20+ countries." },
            { label: "Scale to 100 Containers", desc: "Start with 1 container. Scale to 100/month with the same factory, same quality." },
          ].map((item) => (
            <div key={item.label} className="rounded-lg bg-gray-50 p-4">
              <p className="font-bold text-gray-900 text-sm">{item.label}</p>
              <p className="mt-1 text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Segment FAQ ── */}
      {page.segmentFaqs?.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">
            FAQ: Pizza Boxes for {page.segment}
          </h2>
          <div className="space-y-2">
            {page.segmentFaqs.map((faq) => (
              <details
                key={faq.q}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-semibold text-gray-900 hover:bg-gray-50 list-none">
                  <span>{faq.q}</span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </summary>
                <div className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-gray-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* ── Final CTA ── */}
      <section className="rounded-2xl bg-orange-600 px-8 py-10 text-center text-white shadow-lg">
        <h2 className="mb-2 text-2xl font-extrabold">{page.cta}</h2>
        <p className="mb-6 text-orange-100">
          Share your volume, sizes and delivery destination. We respond with a full quote in 24 hours.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-bold text-orange-700 shadow hover:bg-orange-50"
          >
            Get Container Pricing →
          </Link>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3 font-bold text-white hover:bg-white/10"
          >
            Talk to Export Manager
          </a>
        </div>
      </section>

      <LeadForm />
    </>
  );
}
