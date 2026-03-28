"use client";

import { useState, type FormEvent } from "react";

interface EmailSignupFormProps {
  variant?: "light" | "dark";
  buttonText?: string;
}

export default function EmailSignupForm({
  variant = "light",
  buttonText = "Start the Training",
}: EmailSignupFormProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || !consent || status === "submitting") return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!response.ok) throw new Error("Subscription failed");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-lg p-6 text-center ${
          variant === "dark" ? "bg-white/10" : "border border-subtle bg-[#F5F5F7]"
        }`}
      >
        <p className={`font-serif text-lg font-bold ${variant === "dark" ? "text-white" : ""}`}>
          You&rsquo;re in.
        </p>
        <p className={`text-sm mt-2 ${variant === "dark" ? "text-white/70" : "text-muted"}`}>
          Check your inbox — Day 1 is on its way.
        </p>
      </div>
    );
  }

  const isDark = variant === "dark";

  return (
    <form onSubmit={handleSubmit} className={`rounded-lg p-6 ${isDark ? "bg-white/10" : "border border-subtle bg-[#F5F5F7]"}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className={`flex-1 px-4 py-3 rounded text-sm ${
            isDark ? "bg-white text-foreground" : "border border-subtle bg-white"
          }`}
        />
        <button
          type="submit"
          disabled={status === "submitting" || !consent}
          className={`px-6 py-3 rounded text-sm font-semibold transition-colors whitespace-nowrap disabled:opacity-50 ${
            isDark
              ? "bg-white text-navy hover:bg-white/90"
              : "bg-navy text-white hover:bg-navy-light"
          }`}
        >
          {status === "submitting" ? "Sending..." : buttonText}
        </button>
      </div>
      <label className={`mt-3 flex items-start gap-2 text-xs cursor-pointer ${isDark ? "text-white/70" : "text-muted"}`}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 shrink-0"
          required
        />
        <span>
          I agree that my information may be stored and processed. Read the{" "}
          <a href="/privacy" className={`underline ${isDark ? "text-white/90" : "text-foreground"}`}>
            privacy policy
          </a>.
        </span>
      </label>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
