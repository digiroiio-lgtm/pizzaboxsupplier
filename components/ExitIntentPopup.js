"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

/**
 * ExitIntentPopup – shows a "5% off first container" offer when the
 * user moves their cursor toward the top of the viewport (exit intent).
 * Shown once per session via sessionStorage.
 */
export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      sessionStorage.setItem("exitPopupDismissed", "1");
    } catch {
      // sessionStorage may be unavailable in some environments
    }
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("exitPopupDismissed")) return;
    } catch {
      return;
    }

    let triggered = false;

    function handleMouseLeave(e) {
      if (triggered) return;
      if (e.clientY <= 20) {
        triggered = true;
        setVisible(true);
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">
        {/* Coloured top bar */}
        <div className="bg-orange-600 px-6 py-5 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-200">
            First Container Offer
          </p>
          <h2
            id="exit-popup-title"
            className="mt-1 text-2xl font-extrabold text-white"
          >
            Get 5% Off Your First Container
          </h2>
          <p className="mt-1 text-sm text-orange-100">
            Factory-direct pizza boxes. Quote in 24 hours.
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-6 text-center space-y-4">
          <p className="text-gray-600 text-sm">
            Mention this offer when you submit your quote request and we'll apply a{" "}
            <strong>5% discount on your first container order</strong> — any size mix, any destination port.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/get-quote"
              onClick={dismiss}
              className="block w-full rounded-lg bg-orange-600 px-6 py-3 text-center font-bold text-white hover:bg-orange-700"
            >
              Claim Offer — Get Quote Now →
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="block w-full rounded-lg border border-gray-200 px-6 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              No thanks, I'll pay full price
            </button>
          </div>

          <p className="text-xs text-gray-400">
            Offer valid for new accounts. One container minimum. Contact us to confirm availability.
          </p>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close offer popup"
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
