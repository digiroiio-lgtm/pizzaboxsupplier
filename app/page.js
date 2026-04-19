import Link from "next/link";
import PizzaBoxImage from "@/components/PizzaBoxImage";
import { Benefits, CTAButtons, LeadForm, TrustBadges } from "@/components/sections";
import { PRIMARY_KEYWORDS, products } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ── Hero: split dark layout ── */}
      <section className="-mx-4 -mt-8 mb-4 overflow-hidden rounded-2xl bg-gray-900 px-6 py-12 sm:px-10 lg:px-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-16 lg:px-10">
          {/* Text side */}
          <div className="flex-1 space-y-5 text-center lg:text-left">
            <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
              pizza box supplier USA • pizza box manufacturer
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Wholesale Pizza Boxes and Custom Manufacturing for USA Distributors
            </h1>
            <p className="text-lg text-gray-400">
              Need reliable supply, predictable lead times and direct factory pricing? PizzaBoxSupplier helps chains and importers source wholesale pizza boxes at scale.
            </p>
            <TrustBadges />
            <CTAButtons />
          </div>

          {/* Image side */}
          <div className="w-full max-w-sm flex-shrink-0 lg:max-w-xs xl:max-w-sm">
            <PizzaBoxImage
              size="Wholesale"
              uses="USA distributor bulk pizza box orders"
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { value: "35+", label: "Containers / Month" },
          { value: "20+", label: "Export Countries" },
          { value: "18+", label: "Years Experience" },
          { value: "24h", label: "Quote Response" },
        ].map(({ value, label }) => (
          <div key={label} className="rounded-xl border border-gray-200 bg-white px-4 py-4 text-center shadow-sm">
            <p className="text-2xl font-extrabold text-orange-600">{value}</p>
            <p className="mt-0.5 text-xs font-medium text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      <Benefits />

      {/* ── Product grid ── */}
      <section className="space-y-5">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-900">Popular Bulk Pizza Boxes</h2>
          <Link href="/products" className="text-sm font-semibold text-orange-600 hover:text-orange-700">
            View all →
          </Link>
        </div>
        <p className="text-gray-600">Explore high-demand sizes and custom formats designed for pizza chains and foodservice wholesalers.</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {products.slice(0, 9).map((product) => (
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
                <p className="mt-0.5 text-xs text-gray-500">{product.uses}</p>
              </div>
            </Link>
          ))}
        </div>
        <CTAButtons />
      </section>

      {/* ── Keyword Coverage (SEO) ── */}
      <section className="rounded-xl border border-orange-100 bg-orange-50 px-6 py-5">
        <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-700">Keyword Coverage</h2>
        <p className="text-sm text-orange-900">{PRIMARY_KEYWORDS.join(" • ")}</p>
        <p className="mt-2 text-sm text-orange-800">
          Start with{" "}
          <Link href="/products" className="font-semibold underline hover:text-orange-600">
            all product sizes
          </Link>
          , compare{" "}
          <Link href="/wholesale" className="font-semibold underline hover:text-orange-600">
            wholesale programs
          </Link>
          , or request pricing from{" "}
          <Link href="/contact" className="font-semibold underline hover:text-orange-600">
            our export team
          </Link>
          .
        </p>
      </section>

      <LeadForm />
    </>
  );
}
