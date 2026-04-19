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

  return {
    title: `${product.size} Pizza Boxes – Wholesale Bulk Supplier for USA Distributors`,
    description: `${product.size} pizza box supplier USA. Wholesale pizza boxes and bulk pizza boxes with direct manufacturer pricing and custom print options.`,
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
  };

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
                wholesale pizza boxes • bulk pizza boxes • pizza box manufacturer
              </p>
              <h1 className="text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl">
                {product.size} Pizza Boxes – Wholesale Bulk Supplier for USA Distributors
              </h1>
              <p className="mt-3 text-gray-600">
                Built for {product.uses}, this SKU supports stable procurement for restaurant chains and importers.
              </p>
            </div>
            <TrustBadges />
            <CTAButtons />
          </div>
        </div>
      </section>

      {/* ── Specifications ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Specifications Table</h2>
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <tbody>
              {[
                ["Material", "Food-grade corrugated board"],
                ["Print", "Blank, 1-4 color, full custom print"],
                ["MOQ", "Low MOQ available from 10,000 pcs"],
                ["Lead Time", "2-4 weeks production"],
              ].map(([label, value], i, arr) => (
                <tr key={label} className={i < arr.length - 1 ? "border-b border-gray-100" : ""}>
                  <th className="w-1/3 bg-gray-50 px-5 py-3 font-semibold text-gray-700">{label}</th>
                  <td className="px-5 py-3 text-gray-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <CTAButtons />

      {/* ── Use cases ── */}
      <section className="space-y-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">Use Cases for Pizza Shops and Chains</h2>
        <p className="text-gray-600">Ideal for dine-in, delivery and wholesale distribution programs where consistency, stackability and print quality matter.</p>
        <h3 className="text-lg font-semibold text-gray-900">Bulk Pricing Explanation</h3>
        <p className="text-gray-600">Tiered container pricing reduces per-unit cost as volumes increase. Ask for USA lane-based freight planning and annual contracts.</p>
      </section>

      <Benefits />

      {/* ── Internal links ── */}
      <section className="space-y-2 rounded-xl border border-gray-100 bg-gray-50 p-5">
        <h2 className="text-lg font-bold text-gray-900">Internal Links</h2>
        <p className="text-sm text-gray-600">
          Compare with{" "}
          <Link className="font-semibold text-orange-600 underline hover:text-orange-700" href="/products/12-inch-pizza-box">12 inch pizza boxes</Link>
          , review{" "}
          <Link className="font-semibold text-orange-600 underline hover:text-orange-700" href="/custom-pizza-boxes">custom pizza boxes wholesale</Link>
          , and read our{" "}
          <Link className="font-semibold text-orange-600 underline hover:text-orange-700" href="/blog">buyer resources</Link>.
        </p>
      </section>

      <FAQSection />
      <LeadForm />
    </>
  );
}
