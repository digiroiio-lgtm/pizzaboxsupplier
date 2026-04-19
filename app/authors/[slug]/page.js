import { notFound } from "next/navigation";
import { authors } from "@/lib/content";

export function generateStaticParams() {
  return Object.keys(authors).map((slug) => ({ slug }));
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const author = authors[slug];
  if (!author) notFound();

  return (
    <section className="space-y-3 rounded bg-white p-6 shadow-sm">
      <h1 className="text-3xl font-bold">{author.name}</h1>
      <p className="font-semibold text-orange-700">{author.role}</p>
      <p>{author.bio}</p>
    </section>
  );
}
