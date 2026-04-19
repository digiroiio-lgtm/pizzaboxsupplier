"use client";

import { useState } from "react";
import Link from "next/link";
import { CONTACT, CORE_BOOSTERS, TRUST_BADGES, productFaqs } from "@/lib/content";

/* ─────────────────────────────────────────────
   Small inline SVG icons (aria-hidden so screen
   readers skip them; text carries the meaning).
───────────────────────────────────────────── */
function IconShield() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path fillRule="evenodd" d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.589 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.563 2 12.162 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.749z" clipRule="evenodd" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconChevron({ open }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}

/* Map benefit labels to icons (content unchanged; only visual layer added) */
const BENEFIT_ICONS = {
  "Fast export": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  "Custom printing": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  "Bulk pricing": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "USA shipping": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
};

/* ═══════════════════════════════════════════
   TrustBadges
═══════════════════════════════════════════ */
export function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      {TRUST_BADGES.map((badge) => (
        <span
          key={badge}
          className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800"
        >
          <IconShield />
          {badge}
        </span>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   CTAButtons
═══════════════════════════════════════════ */
export function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/get-quote"
        className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-700 hover:shadow-md"
      >
        Get Distributor Pricing
        <IconArrow />
      </Link>
      <Link
        href="/get-quote"
        className="inline-flex items-center gap-2 rounded-lg border-2 border-orange-600 px-5 py-2.5 text-sm font-bold text-orange-700 hover:bg-orange-50"
      >
        Request Bulk Quote
      </Link>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-green-700 hover:shadow-md"
      >
        <IconWhatsApp />
        WhatsApp
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Benefits
═══════════════════════════════════════════ */
export function Benefits() {
  const items = ["Fast export", "Custom printing", "Bulk pricing", "USA shipping"];
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Wholesale Benefits for USA Buyers</h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
              {BENEFIT_ICONS[item]}
            </span>
            <span className="font-semibold text-gray-900">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-500">{CORE_BOOSTERS.join(" • ")}</p>
      <CTAButtons />
    </section>
  );
}

/* ═══════════════════════════════════════════
   FAQSection  (animated accordion)
═══════════════════════════════════════════ */
function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50"
        aria-expanded={open}
      >
        <span>{faq.question}</span>
        <IconChevron open={open} />
      </button>
      {open && (
        <div className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-gray-600">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
      <div className="space-y-2">
        {productFaqs.map((faq) => (
          <FAQItem key={faq.question} faq={faq} />
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   LeadForm
═══════════════════════════════════════════ */
export function LeadForm() {
  const [status, setStatus] = useState("");
  const statusClass = status.startsWith("Thanks")
    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
    : "bg-red-50 text-red-700 border border-red-200";

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setStatus("Thanks. Your quote request was received.");
      event.currentTarget.reset();
      return;
    }

    setStatus("Submission failed. Please email sales@pizzaboxsupplier.com.");
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md" id="lead-form">
      {/* Form header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-5">
        <h2 className="text-xl font-bold text-white">Request Quote in 24 Hours</h2>
        <p className="mt-1 text-sm text-orange-100">
          Share your requirements and receive a structured distributor quote.
        </p>
      </div>

      {/* Form body */}
      <div className="px-6 py-6">
        <form
          className="grid gap-4 sm:grid-cols-2"
          action="/api/quote"
          method="post"
          onSubmit={handleSubmit}
        >
          <label className="space-y-1.5">
            <span className="block text-sm font-semibold text-gray-700">Company Name</span>
            <input
              required
              name="companyName"
              placeholder="Company Name"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
            />
          </label>
          <label className="space-y-1.5">
            <span className="block text-sm font-semibold text-gray-700">Business Email</span>
            <input
              required
              name="businessEmail"
              type="email"
              placeholder="Business Email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
            />
          </label>
          <label className="space-y-1.5 sm:col-span-2">
            <span className="block text-sm font-semibold text-gray-700">I am a:</span>
            <select
              name="buyerSegment"
              defaultValue=""
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
            >
              <option value="" disabled>Select your buyer type…</option>
              <option value="distributor">Distributor / Importer</option>
              <option value="chain">Restaurant Chain / Franchise</option>
              <option value="importer">Wholesale Importer</option>
              <option value="ghost-kitchen">Ghost Kitchen / Virtual Brand</option>
              <option value="wholesale">Wholesale Buyer / Buying Group</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="space-y-1.5">
            <span className="block text-sm font-semibold text-gray-700">Required Box Size</span>
            <input
              name="requiredBoxSize"
              placeholder="Required Box Size"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
            />
          </label>
          <label className="space-y-1.5">
            <span className="block text-sm font-semibold text-gray-700">Order Volume</span>
            <input
              name="orderVolume"
              placeholder="Order Volume"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
            />
          </label>
          <label className="space-y-1.5 sm:col-span-2">
            <span className="block text-sm font-semibold text-gray-700">Project Details</span>
            <textarea
              name="projectDetails"
              placeholder="Project Details"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none resize-none"
              rows={4}
            />
          </label>
          <button
            type="submit"
            className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-gray-700 hover:shadow-md"
          >
            Request Bulk Quote
            <IconArrow />
          </button>
        </form>

        {status && (
          <p className={`mt-3 rounded-lg px-4 py-2.5 text-sm font-medium ${statusClass}`}>
            {status}
          </p>
        )}

        <p className="mt-4 text-xs text-gray-400">
          Email: {CONTACT.email} • Phone: {CONTACT.phone}
        </p>
      </div>
    </section>
  );
}
