import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Discovery Call",
  description:
    "Book a free 30-minute discovery call with Kai Boyd at High Performing Teams. No commitment, no sales pitch — just an honest conversation about your leadership.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-6">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-[1.15]">
            30 minutes. No pitch. Just honesty.
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-[520px] mx-auto">
            No commitment. No preparation needed.
            Just an honest conversation about where you are and what you need.
          </p>
        </div>
      </section>

      {/* Calendly Placeholder */}
      <section className="pb-20 md:pb-30 px-6">
        <div className="max-w-[680px] mx-auto">
          <div className="border border-subtle rounded-lg p-12 md:p-16 text-center bg-[#F5F5F7]">
            <p className="text-muted text-sm mb-4">[Calendly Embed]</p>
            <p className="font-serif text-2xl font-bold">Book Your Discovery Call</p>
            <p className="text-sm text-muted mt-3">
              Choose a time that works for you. The call is via Zoom and takes 30 minutes.
            </p>
            <div className="mt-8 border border-subtle rounded bg-white p-8">
              <p className="text-xs text-muted">
                Calendly widget will be embedded here.
                <br />
                Replace this placeholder with the Calendly inline widget script.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="font-serif text-2xl font-bold">What to expect.</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <div className="flex gap-4">
                <span className="text-navy font-serif font-bold text-lg shrink-0">01</span>
                <div>
                  <p className="font-medium text-foreground">Book a time</p>
                  <p className="text-sm">Pick a 30-minute slot. No preparation needed on your end.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-navy font-serif font-bold text-lg shrink-0">02</span>
                <div>
                  <p className="font-medium text-foreground">Have an honest conversation</p>
                  <p className="text-sm">We talk about where you are, what&rsquo;s not working, and what you want to change.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-navy font-serif font-bold text-lg shrink-0">03</span>
                <div>
                  <p className="font-medium text-foreground">Get a clear recommendation</p>
                  <p className="text-sm">I&rsquo;ll tell you honestly whether my programmes are the right fit &mdash; or point you somewhere better.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[#F5F5F7] rounded text-sm text-muted">
            <p className="font-medium text-foreground mb-2">Prefer email?</p>
            <p>
              Reach out at{" "}
              <a href="mailto:hello@high-performing.team" className="text-navy hover:underline">
                hello@high-performing.team
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
