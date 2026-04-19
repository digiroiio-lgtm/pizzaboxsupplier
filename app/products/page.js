import Link from "next/link";
import { CTAButtons } from "@/components/sections";
import { products } from "@/lib/content";

export const metadata = {
  title: "Products",
  description: "Wholesale pizza boxes by size and custom format for USA distributors.",
};

export default function ProductsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Wholesale Pizza Boxes by Size and Type</h1>
      <p>Find the right SKU mix for chain, distributor and importer demand.</p>
      <div className="grid gap-2 sm:grid-cols-3">
        {products.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`} className="rounded border border-zinc-200 bg-white p-3 hover:border-orange-500">
            {product.size}
          </Link>
        ))}
      </div>
      <CTAButtons />
    </section>
  );
}
