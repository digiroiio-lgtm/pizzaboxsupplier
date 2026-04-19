import { LeadForm } from "@/components/sections";

export const metadata = {
  title: "Get Quote",
  description: "Request distributor pricing and bulk quote in 24 hours.",
};

export default function GetQuotePage() {
  return (
    <>
      <section className="space-y-4 rounded bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold">Get Distributor Pricing for Wholesale Pizza Boxes</h1>
        <p>Share your volume and target specs. We respond with a structured quote in 24 hours.</p>
      </section>
      <LeadForm />
    </>
  );
}
