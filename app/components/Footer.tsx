import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-subtle">
      <div className="max-w-[1040px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-serif text-lg font-bold">High Performing Teams</p>
            <p className="text-sm text-muted mt-1">Leadership Coaching by Kai Boyd</p>
            <p className="text-sm text-muted">Munich, Germany</p>
            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/managing.difficult.people/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted hover:text-navy transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Skool Community — URL wird nachgeliefert */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Skool Community"
                className="text-muted hover:text-navy transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-3">
            <div className="flex gap-6 text-sm">
              <Link href="/programs" className="hover:text-navy transition-colors">
                Programmes
              </Link>
              <Link href="/about" className="hover:text-navy transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-navy transition-colors">
                Contact
              </Link>
              {/* Skool Community — URL wird nachgeliefert */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy transition-colors"
              >
                Community
              </a>
            </div>
            <Link
              href="/contact"
              className="text-sm text-navy font-medium hover:underline"
            >
              Book a Discovery Call &rarr;
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-subtle flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Boyd GmbH. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal" className="hover:text-navy transition-colors">
              Legal Notice
            </Link>
            <Link href="/privacy" className="hover:text-navy transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
