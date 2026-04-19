import { CONTACT } from "@/lib/content";
import { CTAButtons, LeadForm } from "@/components/sections";

export const metadata = {
  title: "Contact",
  description: "Contact PizzaBoxSupplier for wholesale pizza boxes, bulk orders and custom projects.",
};

export default function ContactPage() {
  return (
    <>
      <section className="space-y-4 rounded bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold">Contact Pizza Box Supplier USA Team</h1>
        <p>Talk to our export specialists for wholesale pizza boxes and custom pizza boxes wholesale.</p>
        <p><strong>Address:</strong> {CONTACT.address}</p>
        <p><strong>Phone:</strong> {CONTACT.phone}</p>
        <p><strong>Email:</strong> {CONTACT.email}</p>
        <CTAButtons />
      </section>
      <LeadForm />
    </>
  );
}
