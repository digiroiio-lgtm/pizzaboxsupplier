import Link from "next/link";
import { notFound } from "next/navigation";
import { CTAButtons, LeadForm } from "@/components/sections";
import { blogPosts } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article className="space-y-4 rounded bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p>{post.description}</p>
        <p>For buyers sourcing wholesale pizza boxes, prioritize board strength, freight efficiency and scalable customization from a pizza box manufacturer.</p>
        <p>Continue with <Link href="/products" className="text-orange-700 underline">product size pages</Link> and request <Link href="/get-quote" className="text-orange-700 underline">bulk pricing</Link>.</p>
        <CTAButtons />
      </article>
      <LeadForm />
    </>
  );
}
