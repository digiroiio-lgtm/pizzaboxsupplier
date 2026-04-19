import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
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
  };

  return (
    <>
      <Script id={`${product.slug}-faq`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id={`${product.slug}-product`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <section className="space-y-4 rounded bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-orange-700">wholesale pizza boxes • bulk pizza boxes • pizza box manufacturer</p>
        <h1 className="text-3xl font-bold">{product.size} Pizza Boxes – Wholesale Bulk Supplier for USA Distributors</h1>
        <p>Built for {product.uses}, this SKU supports stable procurement for restaurant chains and importers.</p>
        <TrustBadges />
        <CTAButtons />
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Specifications Table</h2>
        <table className="w-full border-collapse overflow-hidden rounded border border-zinc-200 bg-white text-left text-sm">
          <tbody>
            <tr><th className="border-b p-2">Material</th><td className="border-b p-2">Food-grade corrugated board</td></tr>
            <tr><th className="border-b p-2">Print</th><td className="border-b p-2">Blank, 1-4 color, full custom print</td></tr>
            <tr><th className="border-b p-2">MOQ</th><td className="border-b p-2">Low MOQ available from 10,000 pcs</td></tr>
            <tr><th className="p-2">Lead Time</th><td className="p-2">2-4 weeks production</td></tr>
          </tbody>
        </table>
      </section>

      <CTAButtons />

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Use Cases for Pizza Shops and Chains</h2>
        <p>Ideal for dine-in, delivery and wholesale distribution programs where consistency, stackability and print quality matter.</p>
        <h3 className="text-xl font-semibold">Bulk Pricing Explanation</h3>
        <p>Tiered container pricing reduces per-unit cost as volumes increase. Ask for USA lane-based freight planning and annual contracts.</p>
      </section>

      <Benefits />

      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Internal Links</h2>
        <p>
          Compare with <Link className="text-orange-700 underline" href="/products/12-inch-pizza-box">12 inch pizza boxes</Link>, review <Link className="text-orange-700 underline" href="/custom-pizza-boxes">custom pizza boxes wholesale</Link>, and read our <Link className="text-orange-700 underline" href="/blog">buyer resources</Link>.
        </p>
      </section>

      <FAQSection />
      <LeadForm />
    </>
  );
}
