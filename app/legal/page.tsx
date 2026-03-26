import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice (Impressum)",
  description: "Legal notice and company information for high-performing.team — Boyd GmbH, Munich, Germany.",
};

export default function LegalPage() {
  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-[680px] mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-12">
          Legal Notice (Impressum)
        </h1>

        <div className="space-y-8 text-sm text-muted leading-relaxed">
          <div>
            <h2 className="font-medium text-foreground text-base mb-2">Company</h2>
            <p>
              Boyd GmbH
              <br />
              Nadistraße 137
              <br />
              D-80809 München, Germany
            </p>
          </div>

          <div>
            <h2 className="font-medium text-foreground text-base mb-2">Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:hello@high-performing.team" className="text-navy hover:underline">
                hello@high-performing.team
              </a>
              <br />
              Phone: +49 176 7033 0000
            </p>
          </div>

          <div>
            <h2 className="font-medium text-foreground text-base mb-2">Registration</h2>
            <p>
              Registered at: Amtsgericht München
              <br />
              Registration Number: HRB 262149
              <br />
              VAT ID: DE340823729
            </p>
          </div>

          <div>
            <h2 className="font-medium text-foreground text-base mb-2">
              Responsible for content (§ 55 Abs. 2 RStV)
            </h2>
            <p>
              Kai Boyd
              <br />
              Nadistraße 137
              <br />
              D-80809 München, Germany
            </p>
          </div>

          <div>
            <h2 className="font-medium text-foreground text-base mb-2">Disclaimer</h2>
            <p>
              Despite careful content control, we assume no liability for the content of external links.
              The operators of the linked pages are solely responsible for their content.
            </p>
            <p className="mt-2">
              All content on this website is protected by copyright. Reproduction, processing,
              distribution, or any form of commercialisation beyond the limits of copyright law
              requires the prior written consent of the respective author or creator.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-foreground text-base mb-2">
              EU Online Dispute Resolution
            </h2>
            <p>
              The European Commission provides a platform for online dispute resolution (ODR):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:underline"
              >
                ec.europa.eu/consumers/odr
              </a>
              . We are not obliged or willing to participate in dispute resolution proceedings
              before a consumer arbitration board.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
