import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { CTAButtons, LeadForm } from "@/components/sections";
import { authors, blogPosts, SITE_URL } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const title = `${post.title} | PizzaBoxSupplier`;
  return {
    title,
    description: post.description,
    openGraph: {
      type: "article",
      title,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
    },
  };
}

const categoryColors = {
  Procurement: "bg-blue-100 text-blue-700",
  "Cost Management": "bg-emerald-100 text-emerald-700",
  "Custom Printing": "bg-orange-100 text-orange-700",
  "Market Trends": "bg-purple-100 text-purple-700",
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const author = authors[post.author];
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          jobTitle: author.role,
          url: `${SITE_URL}/authors/${post.author}`,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "PizzaBoxSupplier",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <Script
        id={`article-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${categoryColors[post.category] ?? "bg-gray-100 text-gray-700"}`}>
              {post.category}
            </span>
            <span className="text-xs text-gray-400">{post.readTime}</span>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="text-lg text-gray-400">{post.description}</p>
          {author && (
            <div className="flex items-center gap-3 pt-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                {author.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{author.name}</p>
                <p className="text-xs text-gray-400">{author.role}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Article body ── */}
      <article className="space-y-8">
        {post.sections?.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">{section.heading}</h2>
            <p className="text-base leading-relaxed text-gray-600">{section.body}</p>
          </section>
        ))}

        {/* ── Mid-article CTA ── */}
        <div className="rounded-xl border border-orange-100 bg-orange-50 px-6 py-5">
          <p className="font-bold text-gray-900 mb-2">Ready to apply this to your procurement?</p>
          <p className="text-sm text-gray-600 mb-4">Share your requirements and receive a structured factory quote in 24 hours.</p>
          <CTAButtons />
        </div>
      </article>

      {/* ── Author bio box ── */}
      {author && (
        <section className="rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">About the Author</p>
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-lg font-bold text-orange-700">
              {author.name.charAt(0)}
            </span>
            <div className="space-y-1">
              <Link href={`/authors/${post.author}`} className="font-bold text-gray-900 hover:text-orange-700">
                {author.name}
              </Link>
              <p className="text-xs font-semibold text-orange-700">{author.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{author.fullBio ?? author.bio}</p>
            </div>
          </div>
        </section>
      )}

      {/* ── Related posts ── */}
      {relatedPosts.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">Related Articles</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-orange-300 hover:shadow-md transition-all block"
              >
                <span className={`mb-2 inline-block rounded-full px-2 py-0.5 text-xs font-bold ${categoryColors[related.category] ?? "bg-gray-100 text-gray-700"}`}>
                  {related.category}
                </span>
                <p className="font-semibold text-gray-900 text-sm leading-snug">{related.title}</p>
                <p className="mt-1 text-xs text-gray-500">{related.readTime}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Navigation ── */}
      <div className="flex justify-between text-sm">
        <Link href="/blog" className="font-semibold text-orange-600 hover:underline">← All articles</Link>
        <Link href="/get-quote" className="font-semibold text-orange-600 hover:underline">Get factory quote →</Link>
      </div>

      <LeadForm />
    </>
  );
}
