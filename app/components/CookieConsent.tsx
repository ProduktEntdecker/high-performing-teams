"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "cookie-consent";
const GA_ID = "G-5Q1HRMZCYV";

function loadGA() {
  if (document.querySelector(`script[src*="${GA_ID}"]`)) return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_ID);
}

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === "accepted") {
      loadGA();
    } else if (consent === null) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    loadGA();
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-[680px] mx-auto bg-white border border-subtle rounded-lg shadow-lg p-5 md:p-6">
        <p className="text-sm text-muted leading-relaxed">
          We use cookies to analyze how visitors use this website so we can improve it.
          No data is shared with advertisers.{" "}
          <Link href="/privacy" className="text-navy underline">
            Privacy Policy
          </Link>
        </p>
        <div className="mt-4 flex gap-3">
          <button
            onClick={accept}
            className="bg-navy text-white px-5 py-2 rounded text-sm font-semibold hover:bg-navy-light transition-colors"
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="border border-subtle text-muted px-5 py-2 rounded text-sm font-medium hover:bg-[#F5F5F7] transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
