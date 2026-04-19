import { CTAButtons, LeadForm } from "@/components/sections";

export const metadata = {
  title: "Pizza Box Supplier New York",
  description: "Wholesale pizza boxes and custom printing support for New York distributors.",
};

export default function NewYorkLocationPage() {
  return (
    <>
      <section className="space-y-3 rounded bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold">Pizza Box Supplier New York for Distributor Networks</h1>
        <p>Secure bulk pizza boxes, quality consistency and quote turnaround built for New York demand cycles.</p>
        <CTAButtons />
      </section>
      <LeadForm />
    </>
  );
}
