"use client";

import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-subtle">
      <div className="max-w-[1040px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg md:text-xl font-bold tracking-tight">
          High Performing Teams
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/programs" className="text-sm hover:text-navy transition-colors">
            Course
          </Link>
          <Link href="/email-course" className="text-sm hover:text-navy transition-colors">
            Free Email Course
          </Link>
          <Link href="/about" className="text-sm hover:text-navy transition-colors">
            About
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-subtle bg-background px-6 py-4 space-y-4">
          <Link href="/programs" className="block text-sm" onClick={() => setOpen(false)}>
            Course
          </Link>
          <Link href="/email-course" className="block text-sm" onClick={() => setOpen(false)}>
            Free Email Course
          </Link>
          <Link href="/about" className="block text-sm" onClick={() => setOpen(false)}>
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
