import Link from "next/link";
import { blogPosts } from "@/lib/content";

export const metadata = {
  title: "Blog",
  description: "Buyer education for wholesale pizza boxes, bulk procurement and custom printing.",
};

export default function BlogPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Blog: Wholesale Pizza Boxes USA Insights</h1>
      <p>Conversion-focused guides for distributors and chain buyers.</p>
      <div className="grid gap-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded border border-zinc-200 bg-white p-4">
            <h2 className="text-xl font-semibold"><Link href={`/blog/${post.slug}`} className="hover:text-orange-700">{post.title}</Link></h2>
            <p>{post.description}</p>
            <Link href={`/authors/${post.author}`} className="text-sm text-orange-700 underline">Author profile</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
