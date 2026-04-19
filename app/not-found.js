import Link from "next/link";
import { CTAButtons } from "@/components/sections";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist. Browse our wholesale pizza boxes and bulk pizza box products.",
};

export default function NotFound() {
  return (
    <section className="space-y-4 rounded bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-orange-700">404 – Page Not Found</p>
      <h1 className="text-3xl font-bold">This Page Does Not Exist</h1>
      <p>The URL you followed may be incorrect or the page may have been removed. Use the links below to find what you need.</p>
      <ul className="space-y-1 text-sm">
        <li><Link href="/products" className="text-orange-700 underline">Browse all wholesale pizza box sizes</Link></li>
        <li><Link href="/custom-pizza-boxes" className="text-orange-700 underline">Custom pizza boxes wholesale</Link></li>
        <li><Link href="/wholesale" className="text-orange-700 underline">Wholesale programs</Link></li>
        <li><Link href="/blog" className="text-orange-700 underline">Buyer resources and guides</Link></li>
        <li><Link href="/contact" className="text-orange-700 underline">Contact our export team</Link></li>
      </ul>
      <CTAButtons />
    </section>
  );
}
