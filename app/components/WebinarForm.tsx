"use client";

export function WebinarForm({ buttonText = "Watch Free Now" }: { buttonText?: string }) {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        required
        autoComplete="given-name"
        aria-label="First Name"
        className="w-full px-4 py-3 border border-subtle rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        autoComplete="email"
        aria-label="Email Address"
        className="w-full px-4 py-3 border border-subtle rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors"
      />
      <button
        type="submit"
        className="w-full bg-navy text-white py-3.5 rounded text-sm font-medium hover:bg-navy-light transition-colors"
      >
        {buttonText}
      </button>
    </form>
  );
}
