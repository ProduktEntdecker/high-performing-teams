import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for high-performing.team — how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-[680px] mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted mb-12">Last updated: March 2026</p>

        <div className="space-y-8 text-sm text-muted leading-relaxed">
          <div>
            <h2 className="font-medium text-foreground text-base mb-2">1. Data Controller</h2>
            <p>
              Boyd GmbH
              <br />
              Nadistraße 137, D-80809 München, Germany
              <br />
              Email:{" "}
              <a href="mailto:hello@high-performing.team" className="text-navy hover:underline">
                hello@high-performing.team
              </a>
              <br />
              Phone: +49 176 7033 0000
            </p>
          </div>

          <div>
            <h2 className="font-medium text-foreground text-base mb-2">
              2. What Data We Collect
            </h2>
            <p>When you use this website, we may collect:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Contact information</strong> you provide voluntarily (name, email address)
                when registering for the email course or newsletter.
              </li>
              <li>
                <strong>Usage data</strong> collected automatically by our hosting provider
                (IP address, browser type, pages visited, time of access). This data is processed
                for security purposes and to ensure the functionality of the website.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium text-foreground text-base mb-2">
              3. Purpose and Legal Basis
            </h2>
            <p>We process your personal data for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Newsletter and email course registration:</strong> To send you the requested
                content and the Leadership Brief newsletter. Legal basis: your consent (Art. 6(1)(a) GDPR).
              </li>
              <li>
                <strong>Website operation:</strong> To provide and secure this website.
                Legal basis: legitimate interest (Art. 6(1)(f) GDPR).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium text-foreground text-base mb-2">
              4. Third-Party Services
            </h2>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-foreground">Hosting: Vercel Inc.</p>
                <p>
                  This website is hosted on Vercel (San Francisco, USA). Vercel processes server
                  log data to provide and secure the hosting service. For details, see{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:underline"
                  >
                    Vercel&rsquo;s Privacy Policy
                  </a>
                  . Data transfer to the US is covered by Vercel&rsquo;s adherence to the
                  EU-US Data Privacy Framework.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">Course Platform: Skool</p>
                <p>
                  When you purchase a course, you are redirected to Skool. Payment processing
                  and course delivery are handled by Skool under their own privacy policy.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-medium text-foreground text-base mb-2">
              5. Your Rights
            </h2>
            <p>Under the GDPR (and UK GDPR where applicable), you have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Rectify inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time (without affecting lawfulness of prior processing)</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:hello@high-performing.team" className="text-navy hover:underline">
                hello@high-performing.team
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-medium text-foreground text-base mb-2">
              6. Data Retention
            </h2>
            <p>
              We retain your data only as long as necessary for the purposes described above
              or as required by law. Newsletter subscribers can unsubscribe at any time using
              the link in every email, after which their data is deleted within 30 days.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-foreground text-base mb-2">
              7. Cookies
            </h2>
            <p>
              This website does not use cookies for tracking or advertising purposes.
              Essential cookies may be set by our hosting provider (Vercel) for security
              and performance purposes.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-foreground text-base mb-2">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. The latest version is
              always available on this page with the date of the last update.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
