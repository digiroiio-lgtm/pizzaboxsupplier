import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import PizzaBoxImage from "@/components/PizzaBoxImage";
import { Benefits, CTAButtons, FAQSection, LeadForm, TrustBadges } from "@/components/sections";
import { buildFaqSchema, products, SITE_URL } from "@/lib/content";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};

  if (product.type === "custom") {
    return {
      title: `${product.size} – Wholesale & Private Label | PizzaBoxSupplier`,
      description: `${product.size} for ${product.uses}. Factory-direct wholesale pricing, full CMYK print, private label, MOQ from 10,000 units. 24h quote.`,
    };
  }

  return {
    title: `${product.size} Pizza Box – Wholesale Bulk Supply for USA Distributors`,
    description: `${product.size} pizza box supplier USA. Dimensions ${product.dims ?? ""}, ${product.board ?? "corrugated"}, ${product.cap40ft ?? ""} units per 40ft container. FOB from ${product.priceBlank ?? ""}/unit. 24h quote.`,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const faqSchema = buildFaqSchema();
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.size} Pizza Boxes`,
    description: `${product.size} wholesale pizza boxes for ${product.uses}.`,
    brand: "PizzaBoxSupplier",
    category: "Pizza Packaging",
    url: `${SITE_URL}/products/${product.slug}`,
    image: `${SITE_URL}/logo.svg`,
    ...(product.priceBlank
      ? {
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            lowPrice: product.priceBlank.replace(/[^0-9.]/g, "").split("–")[0],
            highPrice: product.priceCmyk?.replace(/[^0-9.]/g, "").split("–")[1],
            offerCount: "1",
          },
        }
      : {}),
  };

  const adjacentProducts = (product.adjacentSlugs ?? [])
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean);

  // ── Custom-format products (non-size) ── redirect-style landing
  if (product.type === "custom") {
    return (
      <>
        <Script id={`${product.slug}-faq`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <Script id={`${product.slug}-product`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

        {/* Hero */}
        <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
              custom pizza boxes wholesale • private label • direct manufacturer
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              {product.size}: Factory-Direct Custom Packaging
            </h1>
            <p className="text-lg text-gray-400">
              {product.uses.charAt(0).toUpperCase() + product.uses.slice(1)} — MOQ from 10,000 units, full CMYK print, private label standard, 24h quote.
            </p>
            <TrustBadges />
            <CTAButtons />
          </div>
        </section>

        {/* Adjacent custom products */}
        {adjacentProducts.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">Related Custom Formats & Sizes</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {adjacentProducts.map((adj) => (
                <Link
                  key={adj.slug}
                  href={`/products/${adj.slug}`}
                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-orange-300 hover:shadow-md transition-all"
                >
                  <p className="font-semibold text-gray-900 text-sm">{adj.size}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{adj.uses}</p>
                  {adj.priceBlank && (
                    <p className="mt-1 text-xs font-semibold text-orange-600">From {adj.priceBlank}</p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5">
          <h2 className="mb-3 text-lg font-bold text-gray-900">Full Custom Pizza Box Guide</h2>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/custom-pizza-boxes" className="font-semibold text-orange-600 hover:underline">Custom pizza boxes: print levels, private label, process →</Link></li>
            <li><Link href="/custom-pizza-box-cost" className="font-semibold text-orange-600 hover:underline">Custom pizza box cost guide →</Link></li>
            <li><Link href="/blog/custom-pizza-box-printing-guide" className="font-semibold text-orange-600 hover:underline">Custom printing guide: artwork, boards & lead times →</Link></li>
          </ul>
        </section>

        <Benefits />
        <FAQSection />
        <LeadForm />
      </>
    );
  }

  // ── Size-specific product pages ──
  const specRows = [
    ["Box Size", product.size],
    ["Dimensions", product.dims],
    ["Board Grade", product.board],
    ["Blank Price (FOB)", `${product.priceBlank} / unit`],
    ["Full CMYK Price (FOB)", `${product.priceCmyk} / unit`],
    ["20ft Container Capacity", `${product.cap20ft} units`],
    ["40ft Container Capacity", `${product.cap40ft} units`],
    ["Minimum Order Quantity", "10,000 units per size"],
    ["Lead Time", "2–4 weeks production"],
    ["Certifications", "BRCGS, ISO 22000, HACCP"],
  ];

  return (
    <>
      <Script id={`${product.slug}-faq`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id={`${product.slug}-product`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* ── Product hero: two columns ── */}
      <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col lg:flex-row">
          {/* Image panel */}
          <div className="flex items-center justify-center border-b border-gray-100 bg-[#fdf6ee] p-10 lg:w-2/5 lg:border-b-0 lg:border-r">
            <PizzaBoxImage
              size={product.size}
              uses={product.uses}
              className="w-full max-w-xs"
            />
          </div>

          {/* Info panel */}
          <div className="flex flex-1 flex-col justify-center gap-5 p-6 lg:p-8">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-600">
                wholesale pizza boxes • direct manufacturer • usa distributor pricing
              </p>
              <h1 className="text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl">
                {product.size} Pizza Box — Wholesale Supply for USA Distributors
              </h1>
              <p className="mt-2 text-sm text-gray-500">{product.popularFor}</p>
              <p className="mt-3 text-gray-600">
                Built for {product.uses}. {product.dims} • {product.board} • {product.cap40ft} units per 40ft container.
              </p>
            </div>
            <TrustBadges />

            {/* Quick price strip */}
            <div className="grid grid-cols-2 gap-3 rounded-xl border border-orange-100 bg-orange-50 px-4 py-3 text-center text-sm">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-orange-600">Blank (no print)</p>
                <p className="text-xl font-extrabold text-gray-900">{product.priceBlank}</p>
                <p className="text-[10px] text-gray-400">per unit FOB • 10K MOQ</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-orange-600">Full CMYK Print</p>
                <p className="text-xl font-extrabold text-gray-900">{product.priceCmyk}</p>
                <p className="text-[10px] text-gray-400">per unit FOB • 10K MOQ</p>
              </div>
            </div>

            <CTAButtons />
          </div>
        </div>
      </section>

      {/* ── Full specifications table ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">{product.size} Pizza Box Specifications</h2>
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <tbody>
              {specRows.map(([label, value], i) => (
                <tr key={label} className={i < specRows.length - 1 ? "border-b border-gray-100" : ""}>
                  <th className="w-2/5 bg-gray-50 px-5 py-3 font-semibold text-gray-700">{label}</th>
                  <td className="px-5 py-3 text-gray-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          All prices FOB Istanbul, Turkey. Actual pricing may vary based on board spec, print file and annual volume.{" "}
          <Link href="/pizza-box-price" className="font-semibold text-orange-600 hover:underline">See full price guide →</Link>
        </p>
      </section>

      {/* ── Container capacity callout ── */}
      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-blue-100 bg-blue-50 px-6 py-5">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-600">20ft Container</p>
          <p className="text-3xl font-extrabold text-gray-900">{product.cap20ft}</p>
          <p className="mt-1 text-sm text-gray-600">units of {product.size} pizza boxes, flat-packed</p>
        </div>
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-6 py-5">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-emerald-600">40ft Container (HC)</p>
          <p className="text-3xl font-extrabold text-gray-900">{product.cap40ft}</p>
          <p className="mt-1 text-sm text-gray-600">units of {product.size} pizza boxes, flat-packed</p>
        </div>
      </section>

      <CTAButtons />

      {/* ── Use cases grid ── */}
      {product.useCases?.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Who Uses {product.size} Pizza Boxes?</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {product.useCases.map((uc) => (
              <div key={uc.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="mb-2 font-bold text-gray-900">{uc.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{uc.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Volume / pricing tiers ── */}
      <section className="rounded-xl border border-orange-100 bg-orange-50 px-6 py-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Volume Pricing for {product.size} Pizza Boxes</h2>
        <div className="grid gap-3 sm:grid-cols-3 text-center text-sm">
          <div className="rounded-lg bg-white border border-orange-100 p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">MOQ (10,000 units)</p>
            <p className="text-lg font-extrabold text-gray-900">{product.priceBlank}</p>
            <p className="text-xs text-gray-500 mt-0.5">blank • per unit FOB</p>
          </div>
          <div className="rounded-lg bg-white border border-orange-100 p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">Volume (50,000+)</p>
            <p className="text-sm font-semibold text-gray-700 mt-1">~8–10% below base rate</p>
            <p className="text-xs text-gray-500 mt-0.5">request exact quote</p>
          </div>
          <div className="rounded-lg bg-white border border-orange-100 p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">Full Container (FCL)</p>
            <p className="text-sm font-semibold text-gray-700 mt-1">Best per-unit rate</p>
            <p className="text-xs text-gray-500 mt-0.5">{product.cap40ft} units / 40ft</p>
          </div>
        </div>
        <p className="text-xs text-gray-500">
          Prices are FOB Istanbul. Mixed-SKU container loads available — combine {product.size} with other sizes in a single 40ft container.{" "}
          <Link href="/pizza-box-container-loading" className="font-semibold text-orange-600 hover:underline">Container loading guide →</Link>
        </p>
      </section>

      <Benefits />

      {/* ── Adjacent sizes navigation ── */}
      {adjacentProducts.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">Compare Adjacent Sizes</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {adjacentProducts.map((adj) => (
              <Link
                key={adj.slug}
                href={`/products/${adj.slug}`}
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-orange-300 hover:shadow-md transition-all"
              >
                <p className="font-semibold text-gray-900">{adj.size}</p>
                <p className="mt-0.5 text-xs text-gray-500">{adj.uses}</p>
                {adj.priceBlank && (
                  <p className="mt-1.5 text-xs font-semibold text-orange-600">From {adj.priceBlank} / unit</p>
                )}
                {adj.dims && (
                  <p className="mt-0.5 text-xs text-gray-400">{adj.dims}</p>
                )}
              </Link>
            ))}
          </div>
          <Link href="/products" className="inline-block text-sm font-semibold text-orange-600 hover:underline">
            View all sizes →
          </Link>
        </section>
      )}

      {/* ── Internal links ── */}
      <section className="space-y-2 rounded-xl border border-gray-100 bg-gray-50 p-5">
        <h2 className="text-lg font-bold text-gray-900">Related Resources</h2>
        <ul className="space-y-1.5 text-sm">
          <li>
            <Link className="font-semibold text-orange-600 hover:underline" href="/pizza-box-price">
              Pizza box price guide by size and print level →
            </Link>
          </li>
          <li>
            <Link className="font-semibold text-orange-600 hover:underline" href="/pizza-box-container-loading">
              Container capacity: 20ft and 40ft loading guide →
            </Link>
          </li>
          <li>
            <Link className="font-semibold text-orange-600 hover:underline" href="/custom-pizza-boxes">
              Custom printed pizza boxes wholesale →
            </Link>
          </li>
          <li>
            <Link className="font-semibold text-orange-600 hover:underline" href="/pizza-boxes-for-distributors">
              Pizza boxes for distributors: container programs →
            </Link>
          </li>
        </ul>
      </section>

      <FAQSection />
      <LeadForm />
    </>
  );
}
