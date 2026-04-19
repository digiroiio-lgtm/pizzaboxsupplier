import Link from "next/link";
import { CTAButtons, LeadForm } from "@/components/sections";
import { authors, blogPosts } from "@/lib/content";

export const metadata = {
  title: "Pizza Box Insights Blog | Procurement Guides for Distributors & Chains",
  description:
    "Buyer education for wholesale pizza boxes: procurement guides, cost frameworks, custom printing advice and USA packaging trends for distributors, importers and chains.",
};

const categoryColors = {
  Procurement: "bg-blue-100 text-blue-700",
  "Cost Management": "bg-emerald-100 text-emerald-700",
  "Custom Printing": "bg-orange-100 text-orange-700",
  "Market Trends": "bg-purple-100 text-purple-700",
};

export default function BlogPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            procurement education • wholesale pizza boxes
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Pizza Box Insights: Procurement Guides for Distributors & Chains
          </h1>
          <p className="text-lg text-gray-400">
            Practical buyer education from our export and engineering teams — covering wholesale pricing, container programs, custom printing and USA market trends.
          </p>
        </div>
      </section>

      {/* ── Article grid ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {blogPosts.map((post) => {
            const author = authors[post.author];
            return (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:border-orange-300 hover:shadow-md transition-all"
              >
                <div className="flex-1 px-5 pt-5 pb-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${categoryColors[post.category] ?? "bg-gray-100 text-gray-700"}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-orange-700">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{post.description}</p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3">
                  <Link href={`/authors/${post.author}`} className="flex items-center gap-2 text-xs text-gray-500 hover:text-orange-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                      {author?.name?.charAt(0)}
                    </span>
                    <span className="font-medium">{author?.name}</span>
                    <span className="text-gray-400">· {author?.role}</span>
                  </Link>
                  <Link href={`/blog/${post.slug}`} className="text-xs font-semibold text-orange-600 hover:underline">
                    Read →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Topics overview ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 space-y-3">
        <h2 className="text-lg font-bold text-gray-900">Topics Covered</h2>
        <div className="flex flex-wrap gap-2">
          {Object.entries(categoryColors).map(([cat, cls]) => (
            <span key={cat} className={`rounded-full px-3 py-1 text-xs font-bold ${cls}`}>{cat}</span>
          ))}
        </div>
        <p className="text-sm text-gray-600">
          Content is written by our export and engineering team — practitioners with 12–15 years direct experience in corrugated pizza packaging for wholesale and foodservice markets.
        </p>
        <div className="flex gap-3">
          <Link href="/authors/ayse-demir" className="text-sm font-semibold text-orange-600 hover:underline">Ayse Demir — Export Sales →</Link>
          <Link href="/authors/mert-kaya" className="text-sm font-semibold text-orange-600 hover:underline">Mert Kaya — Engineering →</Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTAButtons />
      <LeadForm />
    </>
  );
}
