import { CTAButtons, LeadForm } from "@/components/sections";

export const metadata = {
  title: "About Us",
  description: "Pizza box manufacturer profile, factory details, certifications and export footprint.",
};

export default function AboutPage() {
  return (
    <>
      <section className="space-y-4 rounded bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold">About PizzaBoxSupplier: Export-Focused Pizza Box Manufacturer</h1>
        <p>18+ years in corrugated food packaging with dedicated pizza box lines serving USA, UK and EU buyers.</p>
        <CTAButtons />
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Factory Details and Experience</h2>
        <p>Production area: 22,000 m² • Monthly capacity: 35+ containers • QA: inline compression and print checks.</p>
        <h3 className="text-xl font-semibold">Export Countries and Certifications</h3>
        <p>Exporting to 20+ countries with BRCGS, ISO 22000 and HACCP-aligned production controls.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Real Production Images (Placeholder)</h2>
        <div className="grid gap-2 sm:grid-cols-3">
          <div className="rounded border border-dashed border-zinc-300 bg-white p-8 text-center">Factory Floor Image</div>
          <div className="rounded border border-dashed border-zinc-300 bg-white p-8 text-center">Printing Line Image</div>
          <div className="rounded border border-dashed border-zinc-300 bg-white p-8 text-center">Pallet Loading Image</div>
        </div>
        <CTAButtons />
      </section>

      <LeadForm />
    </>
  );
}
