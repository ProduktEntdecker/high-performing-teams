import type { Metadata } from "next";
import Image from "next/image";
import { WebinarForm } from "../components/WebinarForm";

export const metadata: Metadata = {
  title: "Free Leadership Masterclass — 4 Hours",
  description:
    "36 years of leadership experience in 4 hours. Free masterclass by Kai Boyd. What separates effective leaders from exhausted ones. Register now.",
};

export default function WebinarPage() {
  return (
    <>
      {/* Hero with Registration */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Copy + Form */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-6">
              Free Leadership Masterclass
            </p>
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.15] font-bold">
              What 36 years of leadership taught me &mdash; in 4 hours.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              The conversations, frameworks and decisions that separate effective leaders from exhausted ones.
              Free. On demand. Practical.
            </p>

            <div className="mt-8">
              <WebinarForm />
            </div>
            <p className="mt-3 text-xs text-muted">
              No spam. Unsubscribe at any time.
              By registering, you receive the Leadership Brief newsletter.
            </p>
          </div>

          {/* Right: Photo + Details */}
          <div>
            <div className="aspect-[4/5] rounded overflow-hidden mb-6">
              <Image
                src="/assets/images/Boyd-10.webp"
                alt="Kai Boyd — Leadership Masterclass"
                width={600}
                height={750}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="border border-subtle rounded p-6">
              <h3 className="font-serif text-lg font-bold">The Leadership Masterclass</h3>
              <div className="mt-4 space-y-2 text-sm text-muted">
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span className="font-medium text-foreground">4 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Format</span>
                  <span className="font-medium text-foreground">Video (on demand)</span>
                </div>
                <div className="flex justify-between">
                  <span>Price</span>
                  <span className="font-medium text-foreground">Free</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted">
                Available immediately after registration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 md:py-30 px-6 bg-[#F5F5F7]">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">
            In four hours, you&rsquo;ll learn:
          </h2>
          <div className="space-y-8">
            {[
              "The one conversation most managers avoid that is costing them more than they realise.",
              "How to identify the real dysfunction in your team (hint: it's almost never what you think it is).",
              "The decision-making pattern that breaks down under pressure — and how to replace it.",
              "Why feedback either changes behaviour or creates resentment — and how to make it do the former.",
              "The honest assessment of where your leadership is strong and where it is genuinely weak.",
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <span className="font-serif text-xl font-bold text-navy shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Kai (Short) */}
      <section className="py-20 md:py-30 px-6">
        <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">Your host.</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Kai Boyd is a leadership coach based in Munich
                with 36 years of experience across military, corporate
                and coaching contexts.
              </p>
              <p>
                He has worked with leaders from multinational companies,
                government departments, and scaling startups &mdash;
                and his leadership content reaches thousands
                of followers across 14+ social media channels.
              </p>
              <p className="font-medium text-foreground">
                This masterclass contains what he teaches one-to-one &mdash; at no cost.
              </p>
            </div>
            <div className="mt-8 flex gap-8">
              {[
                { number: "36 Years", label: "Leadership experience" },
                { number: "1,000+", label: "Leaders coached" },
                { number: "4,500+", label: "Podcast listeners/episode" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-xl font-bold text-navy">{stat.number}</p>
                  <p className="text-xs text-muted mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square rounded overflow-hidden">
            <Image
              src="/assets/images/Boyd-49.webp"
              alt="Kai Boyd"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-navy text-white py-12 md:py-16">
        <div className="max-w-[1040px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "2,500+", label: "Registered for this masterclass" },
            { number: "1,000+", label: "Leaders coached and trained" },
            { number: "36 Years", label: "Leadership experience" },
            { number: "4,500+", label: "Podcast listeners/episode" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-2xl md:text-3xl font-bold">{stat.number}</p>
              <p className="text-xs mt-1 text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[680px] mx-auto">
          <div className="space-y-6">
            {[
              {
                q: "Is this really free?",
                a: "Yes. No payment required. You register with your email and receive immediate access.",
              },
              {
                q: "Will I be sold to during the masterclass?",
                a: "At the end, Kai briefly mentions his paid programmes. The masterclass itself contains zero sales pressure. You can leave before the final 10 minutes if you prefer.",
              },
              {
                q: "Can I watch it later?",
                a: "Yes. The recording is available on demand. You can watch at your own pace.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex justify-between items-center cursor-pointer py-4 border-b border-subtle">
                  <span className="font-medium text-sm pr-4">{faq.q}</span>
                  <span className="text-muted text-lg shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-muted leading-relaxed py-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Second Registration CTA */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Ready to stop leading on instinct?
          </h2>
          <div className="mt-8 max-w-[400px] mx-auto">
            <WebinarForm buttonText="Register for Free" />
          </div>
          <p className="mt-3 text-xs text-muted">
            Takes 30 seconds. Cancel at any time.
          </p>
        </div>
      </section>
    </>
  );
}
