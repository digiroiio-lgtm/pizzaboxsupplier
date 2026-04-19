import Link from "next/link";
import { Benefits, CTAButtons, LeadForm } from "@/components/sections";

export const metadata = {
  title: "Custom Pizza Boxes",
  description: "Custom pizza boxes wholesale and private label production for USA distributors.",
};

export default function CustomLandingPage() {
  return (
    <>
      <section className="space-y-4 rounded bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold">Custom Pizza Boxes Wholesale for Private Label Programs</h1>
        <p>From blank SKUs to high-impact branding, get custom pizza boxes wholesale with export-grade consistency.</p>
        <CTAButtons />
      </section>
      <Benefits />
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Explore Custom Formats</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li><Link href="/products/custom-pizza-boxes" className="text-orange-700 underline">Custom pizza boxes</Link></li>
          <li><Link href="/products/custom-printed-pizza-boxes" className="text-orange-700 underline">Custom printed pizza boxes</Link></li>
          <li><Link href="/products/personalized-pizza-boxes" className="text-orange-700 underline">Personalized pizza boxes</Link></li>
          <li><Link href="/products/blank-pizza-boxes" className="text-orange-700 underline">Blank pizza boxes</Link></li>
        </ul>
        <CTAButtons />
      </section>
      <LeadForm />
    </>
  );
}
