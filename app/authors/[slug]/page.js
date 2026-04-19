import { notFound } from "next/navigation";
import Link from "next/link";
import { CTAButtons, LeadForm } from "@/components/sections";
import { authors, blogPosts } from "@/lib/content";

export function generateStaticParams() {
  return Object.keys(authors).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const author = authors[slug];
  if (!author) return {};
  return {
    title: `${author.name} — ${author.role} | PizzaBoxSupplier`,
    description: author.bio,
  };
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const author = authors[slug];
  if (!author) notFound();

  const authorPosts = blogPosts.filter((p) => p.author === slug);

  const categoryColors = {
    Procurement: "bg-blue-100 text-blue-700",
    "Cost Management": "bg-emerald-100 text-emerald-700",
    "Custom Printing": "bg-orange-100 text-orange-700",
    "Market Trends": "bg-purple-100 text-purple-700",
  };

  return (
    <>
      {/* ── Profile card ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-3xl space-y-5">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            author profile • pizza box supplier usa
          </p>
          <div className="flex items-start gap-5">
            <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-2xl font-extrabold text-orange-700">
              {author.name.charAt(0)}
            </span>
            <div>
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl">{author.name}</h1>
              <p className="mt-1 text-base font-semibold text-orange-400">{author.role}</p>
              <p className="mt-3 text-base text-gray-400 leading-relaxed">
                {author.fullBio ?? author.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      {author.credentials && (
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">Credentials</h2>
          <ul className="space-y-2">
            {author.credentials.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm text-sm text-gray-700">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700 text-xs font-bold">✓</span>
                {c}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ── Expertise areas ── */}
      {author.expertise && (
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">Areas of Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {author.expertise.map((e) => (
              <span key={e} className="rounded-full bg-orange-50 border border-orange-200 px-4 py-1.5 text-sm font-semibold text-orange-700">
                {e}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ── Articles by author ── */}
      {authorPosts.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Articles by {author.name}</h2>
          <div className="space-y-3">
            {authorPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm hover:border-orange-300 hover:shadow-md transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${categoryColors[post.category] ?? "bg-gray-100 text-gray-700"}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <p className="font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-0.5 text-sm text-gray-500">{post.description}</p>
                </div>
                <span className="flex-shrink-0 text-sm font-semibold text-orange-600">Read →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── E-E-A-T note ── */}
      <section className="rounded-xl border border-blue-100 bg-blue-50 px-6 py-4 text-sm text-gray-600">
        <p>
          <strong className="text-gray-900">About our authors:</strong> All content is written by practitioners with direct industry experience in corrugated pizza packaging manufacturing, export logistics and B2B procurement. Content is reviewed against production data and buyer feedback from active accounts before publication.
        </p>
      </section>

      {/* ── CTA ── */}
      <section className="rounded-xl border border-orange-100 bg-orange-50 px-6 py-5">
        <p className="font-bold text-gray-900 mb-2">Questions about wholesale pricing or procurement structure?</p>
        <p className="text-sm text-gray-600 mb-4">Our export team responds to RFQs within 24 hours.</p>
        <CTAButtons />
      </section>

      <LeadForm />
    </>
  );
}
