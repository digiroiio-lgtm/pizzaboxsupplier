import Link from "next/link";
import PizzaBoxImage from "@/components/PizzaBoxImage";
import { CTAButtons } from "@/components/sections";
import { products } from "@/lib/content";

export const metadata = {
  title: "Wholesale Pizza Boxes by Size | Factory-Direct from Manufacturer",
  description: "Wholesale pizza boxes in every size — 5 inch to 20 inch plus custom formats. Factory-direct pricing, low MOQ, custom print. For USA distributors and chains.",
};

const sizeProducts = products.filter((p) => !p.type);
const customProducts = products.filter((p) => p.type === "custom");

export default function ProductsPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-gray-900">Wholesale Pizza Boxes by Size and Type</h1>
        <p className="text-gray-600">Find the right SKU mix for chain, distributor and importer demand. All sizes from 5 inch to 20 inch — custom print from 10,000 units.</p>
      </div>

      {/* ── Size SKUs ── */}
      <div>
        <h2 className="mb-3 text-lg font-bold text-gray-900">Pizza Box Sizes</h2>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {sizeProducts.map((product) => (
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
                {product.priceBlank && (
                  <p className="mt-1.5 text-xs font-semibold text-orange-600">From {product.priceBlank} / unit FOB</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Custom formats ── */}
      <div>
        <h2 className="mb-3 text-lg font-bold text-gray-900">Custom Formats</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {customProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-xl border border-dashed border-orange-200 bg-orange-50 shadow-sm transition-all hover:border-orange-400 hover:shadow-md"
            >
              <div className="px-4 py-5">
                <p className="font-semibold text-gray-900 group-hover:text-orange-700">{product.size}</p>
                <p className="mt-0.5 text-xs text-gray-500 leading-relaxed">{product.uses}</p>
                <p className="mt-2 text-xs font-semibold text-orange-600">Explore →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CTAButtons />
    </section>
  );
}
