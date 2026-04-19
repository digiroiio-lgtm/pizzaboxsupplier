import Link from "next/link";
import { Benefits, CTAButtons, LeadForm, TrustBadges } from "@/components/sections";

export const metadata = {
  title: "Wholesale",
  description: "Wholesale pizza boxes for USA distributors, importers and foodservice wholesalers.",
};

export default function WholesalePage() {
  return (
    <>
      <section className="space-y-4 rounded bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold">Wholesale Pizza Boxes for USA Distribution</h1>
        <p>Scale your procurement with a pizza box supplier USA buyers trust for quality, lead time and direct manufacturer pricing.</p>
        <TrustBadges />
        <CTAButtons />
      </section>
      <Benefits />
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Program Highlights</h2>
        <p>Dedicated account manager, forecast planning, and mixed-size container optimization.</p>
        <p>Start with <Link href="/products" className="text-orange-700 underline">product sizing</Link> or submit your RFQ via <Link href="/get-quote" className="text-orange-700 underline">quote form</Link>.</p>
        <CTAButtons />
      </section>
      <LeadForm />
    </>
  );
}
