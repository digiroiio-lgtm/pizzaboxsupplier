"use client";

import { useState } from "react";
import Link from "next/link";
import { CONTACT, CORE_BOOSTERS, TRUST_BADGES, productFaqs } from "@/lib/content";

export function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-2 text-sm font-medium">
      {TRUST_BADGES.map((badge) => (
        <span key={badge} className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-900">
          {badge}
        </span>
      ))}
    </div>
  );
}

export function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/get-quote" className="rounded bg-orange-600 px-4 py-2 font-semibold text-white hover:bg-orange-700">
        Get Distributor Pricing
      </Link>
      <Link href="/get-quote" className="rounded border border-orange-600 px-4 py-2 font-semibold text-orange-700 hover:bg-orange-50">
        Request Bulk Quote
      </Link>
      <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700">
        WhatsApp
      </a>
    </div>
  );
}

export function Benefits() {
  const items = ["Fast export", "Custom printing", "Bulk pricing", "USA shipping"];
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-bold">Wholesale Benefits for USA Buyers</h2>
      <ul className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="rounded border border-zinc-200 p-3">{item}</li>
        ))}
      </ul>
      <p className="text-sm text-zinc-700">{CORE_BOOSTERS.join(" • ")}</p>
      <CTAButtons />
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-bold">FAQ</h2>
      <div className="space-y-2">
        {productFaqs.map((faq) => (
          <details key={faq.question} className="rounded border border-zinc-200 p-3">
            <summary className="cursor-pointer font-semibold">{faq.question}</summary>
            <p className="mt-2 text-zinc-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function LeadForm() {
  const [status, setStatus] = useState("");

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
    <section className="space-y-3" id="lead-form">
      <h2 className="text-2xl font-bold">Request Quote in 24 Hours</h2>
      <form className="grid gap-3 sm:grid-cols-2" action="/api/quote" method="post" onSubmit={handleSubmit}>
        <label className="space-y-1">
          <span className="text-sm font-medium">Company Name</span>
          <input required name="companyName" placeholder="Company Name" className="w-full rounded border border-zinc-300 p-2" />
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium">Business Email</span>
          <input required name="businessEmail" type="email" placeholder="Business Email" className="w-full rounded border border-zinc-300 p-2" />
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium">Required Box Size</span>
          <input name="requiredBoxSize" placeholder="Required Box Size" className="w-full rounded border border-zinc-300 p-2" />
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium">Order Volume</span>
          <input name="orderVolume" placeholder="Order Volume" className="w-full rounded border border-zinc-300 p-2" />
        </label>
        <label className="space-y-1 sm:col-span-2">
          <span className="text-sm font-medium">Project Details</span>
          <textarea name="projectDetails" placeholder="Project Details" className="w-full rounded border border-zinc-300 p-2" rows={4} />
        </label>
        <button type="submit" className="sm:col-span-2 rounded bg-zinc-900 px-4 py-2 font-semibold text-white hover:bg-zinc-700">
          Request Bulk Quote
        </button>
      </form>
      {status ? <p className="text-sm font-medium text-emerald-700">{status}</p> : null}
      <p className="text-sm text-zinc-700">Email: {CONTACT.email} • Phone: {CONTACT.phone}</p>
    </section>
  );
}
