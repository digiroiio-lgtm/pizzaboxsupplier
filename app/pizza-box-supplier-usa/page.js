import { CTAButtons, LeadForm } from "@/components/sections";

export const metadata = {
  title: "Pizza Box Supplier USA",
  description: "Pizza box supplier USA for distributors, importers and restaurant chains.",
};

export default function UsaLocationPage() {
  return (
    <>
      <section className="space-y-3 rounded bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold">Pizza Box Supplier USA: Wholesale and Bulk Programs</h1>
        <p>Reliable lane planning and consistent container quality for nationwide distributor demand.</p>
        <CTAButtons />
      </section>
      <LeadForm />
    </>
  );
}
