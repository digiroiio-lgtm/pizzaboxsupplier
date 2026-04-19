import Link from "next/link";
import PizzaBoxImage from "@/components/PizzaBoxImage";
import { CTAButtons } from "@/components/sections";
import { products } from "@/lib/content";

export const metadata = {
  title: "Products",
  description: "Wholesale pizza boxes by size and custom format for USA distributors.",
};

export default function ProductsPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-gray-900">Wholesale Pizza Boxes by Size and Type</h1>
        <p className="text-gray-600">Find the right SKU mix for chain, distributor and importer demand.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:border-orange-400 hover:shadow-md"
          >
            <div className="border-b border-gray-100 bg-[#fdf6ee] px-4 pt-4 pb-2">
              <PizzaBoxImage
                size={product.size}
                uses={product.uses}
                className="mx-auto h-28"
              />
            </div>
            <div className="px-4 py-3">
              <p className="font-semibold text-gray-900 group-hover:text-orange-700">{product.size}</p>
              <p className="mt-0.5 text-xs text-gray-500 leading-relaxed">{product.uses}</p>
            </div>
          </Link>
        ))}
      </div>

      <CTAButtons />
    </section>
  );
}
