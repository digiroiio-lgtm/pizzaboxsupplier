import Link from "next/link";
import { Benefits, CTAButtons, LeadForm, TrustBadges } from "@/components/sections";
import { PRIMARY_KEYWORDS, products } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="space-y-4 rounded bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-orange-700">pizza box supplier USA • pizza box manufacturer</p>
        <h1 className="text-3xl font-bold">Wholesale Pizza Boxes and Custom Manufacturing for USA Distributors</h1>
        <p>Need reliable supply, predictable lead times and direct factory pricing? PizzaBoxSupplier helps chains and importers source wholesale pizza boxes at scale.</p>
        <TrustBadges />
        <CTAButtons />
      </section>

      <Benefits />

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Popular Bulk Pizza Boxes</h2>
        <p>Explore high-demand sizes and custom formats designed for pizza chains and foodservice wholesalers.</p>
        <div className="grid gap-2 sm:grid-cols-3">
          {products.slice(0, 9).map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="rounded border border-zinc-200 bg-white p-3 hover:border-orange-500">
              {product.size}
            </Link>
          ))}
        </div>
        <CTAButtons />
      </section>

      <section className="space-y-3 rounded bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Keyword Coverage</h2>
        <p>{PRIMARY_KEYWORDS.join(" • ")}</p>
        <p>Start with <Link href="/products" className="text-orange-700 underline">all product sizes</Link>, compare <Link href="/wholesale" className="text-orange-700 underline">wholesale programs</Link>, or request pricing from <Link href="/contact" className="text-orange-700 underline">our export team</Link>.</p>
      </section>

      <LeadForm />
    </>
  );
}
