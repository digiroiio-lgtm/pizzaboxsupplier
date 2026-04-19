import Link from "next/link";
import { CONTACT } from "@/lib/content";
import { CTAButtons, LeadForm } from "@/components/sections";

export const metadata = {
  title: "Contact Pizza Box Supplier | Talk to an Export Manager",
  description:
    "Contact our export team for wholesale pizza boxes, bulk orders and custom projects. WhatsApp instant response or email — Istanbul office, UTC+3.",
};

const contactCards = [
  {
    icon: "💬",
    title: "WhatsApp — Fastest Response",
    desc: "Send your requirements via WhatsApp. Typical reply: under 2 hours during office hours.",
    cta: "Message on WhatsApp",
    href: CONTACT.whatsapp,
    external: true,
    style: "bg-green-600 hover:bg-green-700 text-white",
  },
  {
    icon: "📧",
    title: "Email Export Team",
    desc: `Send specs and RFQ to ${CONTACT.email}. We reply with a structured quote in 24 hours.`,
    cta: "Send Email",
    href: `mailto:${CONTACT.email}`,
    external: false,
    style: "bg-orange-600 hover:bg-orange-700 text-white",
  },
  {
    icon: "📞",
    title: "Call Istanbul Office",
    desc: `${CONTACT.phone} · Office hours: Mon–Fri 09:00–18:00 Istanbul time (UTC+3).`,
    cta: "Call Now",
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
    external: false,
    style: "bg-gray-900 hover:bg-gray-700 text-white",
  },
];

const responseGuarantees = [
  { icon: "⏱", label: "WhatsApp", time: "< 2 hours" },
  { icon: "📧", label: "Email quote", time: "< 24 hours" },
  { icon: "📦", label: "Sample dispatch", time: "3–5 business days" },
  { icon: "🏭", label: "Production start", time: "After sample approval" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="inline-block rounded-full bg-orange-600/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            talk to an export manager · pizza box supplier USA
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Talk to an Export Manager
          </h1>
          <p className="text-lg text-gray-400">
            Direct contact with our export team for wholesale pizza boxes, bulk orders and custom projects.
            Istanbul office — UTC+3 — we respond faster than most suppliers promise.
          </p>
        </div>
      </section>

      {/* ── Response guarantees ── */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {responseGuarantees.map(({ icon, label, time }) => (
          <div key={label} className="rounded-xl border border-gray-200 bg-white px-4 py-4 text-center shadow-sm">
            <p className="text-2xl">{icon}</p>
            <p className="mt-1 text-xs font-medium text-gray-500">{label}</p>
            <p className="mt-0.5 text-sm font-extrabold text-orange-600">{time}</p>
          </div>
        ))}
      </div>

      {/* ── Contact cards ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Choose Your Preferred Channel</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {contactCards.map(({ icon, title, desc, cta, href, external, style }) => (
            <div key={title} className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-3xl">{icon}</p>
              <div>
                <p className="font-semibold text-gray-900">{title}</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`mt-auto inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-bold shadow-sm ${style}`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Address / office info ── */}
      <section className="rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-gray-900">Office & Factory</h2>
        <div className="grid gap-4 sm:grid-cols-2 text-sm">
          <div className="space-y-1">
            <p className="font-semibold text-gray-700">Address</p>
            <p className="text-gray-600">{CONTACT.address}</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-gray-700">Phone</p>
            <p className="text-gray-600">{CONTACT.phone}</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-gray-700">Email</p>
            <p className="text-gray-600">{CONTACT.email}</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-gray-700">Timezone</p>
            <p className="text-gray-600">Istanbul UTC+3 · Office hours Mon–Fri 09:00–18:00</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="rounded-xl border border-orange-100 bg-orange-50 px-6 py-5">
        <h2 className="mb-2 text-base font-bold text-gray-900">Prefer to submit a detailed RFQ?</h2>
        <p className="mb-4 text-sm text-gray-600">
          Use our quote form to share sizes, volumes and print requirements. We'll respond with a structured factory quote.
        </p>
        <CTAButtons />
      </section>

      {/* ── Related ── */}
      <section className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-4">
        <h2 className="mb-2 text-sm font-bold text-gray-700">Useful before you contact us</h2>
        <ul className="space-y-1 text-sm">
          <li><Link href="/pizza-box-price" className="font-semibold text-orange-600 hover:underline">Pizza box price guide →</Link></li>
          <li><Link href="/wholesale" className="font-semibold text-orange-600 hover:underline">Wholesale container programs →</Link></li>
          <li><Link href="/products" className="font-semibold text-orange-600 hover:underline">All product sizes →</Link></li>
        </ul>
      </section>

      <LeadForm />
    </>
  );
}
