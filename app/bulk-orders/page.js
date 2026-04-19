import { CTAButtons, LeadForm } from "@/components/sections";

export const metadata = {
  title: "Bulk Orders",
  description: "Bulk pizza boxes with stable supply and export-ready documentation.",
};

export default function BulkOrdersPage() {
  return (
    <>
      <section className="space-y-4 rounded bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold">Bulk Pizza Boxes with Direct Manufacturer Pricing</h1>
        <p>Lock in annual purchasing terms for chain expansion and distributor inventory planning.</p>
        <CTAButtons />
      </section>
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Bulk Ordering Workflow</h2>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Share sizes, monthly usage and print needs.</li>
          <li>Receive optimized quote and lead time plan.</li>
          <li>Approve samples and launch production.</li>
        </ol>
        <CTAButtons />
      </section>
      <LeadForm />
    </>
  );
}
