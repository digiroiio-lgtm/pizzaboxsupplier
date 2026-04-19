import { CTAButtons, LeadForm } from "@/components/sections";

export const metadata = {
  title: "Pizza Box Supplier California",
  description: "Bulk pizza boxes for California chains and foodservice wholesalers.",
};

export default function CaliforniaLocationPage() {
  return (
    <>
      <section className="space-y-3 rounded bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold">Pizza Box Supplier California for High-Volume Chains</h1>
        <p>Plan recurring shipments and private label custom pizza boxes wholesale for California markets.</p>
        <CTAButtons />
      </section>
      <LeadForm />
    </>
  );
}
