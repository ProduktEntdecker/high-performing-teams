import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lead Without Losing It — $99 Course",
  description:
    "Lead Without Losing It: 29 video lessons on managing difficult team members — without burning out or losing authority. $99 USD. Self-paced. Hosted on Skool.",
};

const checkIcon = (
  <svg className="w-4 h-4 text-navy shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function ProgramsPage() {
  return (
    <>
      {/* Course Hero */}
      <section id="lead-without-losing-it" className="py-24 md:py-36 px-6">
        <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-6">
              Self-Paced Online Course
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] font-bold">
              Lead Without Losing It
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              29 video lessons on managing difficult team members &mdash; without burning out or losing your authority.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.skool.com/lead-without-losing-it"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white px-10 py-4 rounded text-base font-semibold hover:bg-navy-light transition-colors text-center"
              >
                Get the Course &mdash; $99 USD
              </a>
            </div>
            <p className="mt-3 text-xs text-muted">
              Self-paced. Hosted on Skool. Start today.
            </p>
          </div>
          <div className="border border-subtle rounded-lg p-8">
            <h3 className="font-serif text-lg font-bold mb-6">What&rsquo;s inside</h3>
            <div className="space-y-4">
              {[
                { num: "Module 1", title: "21 lessons", desc: "Managing every type of difficult team member — from knowledge hoarders to chronic complainers." },
                { num: "Module 2", title: "8 lessons", desc: "De-escalation, handling criticism, navigating resistance, and setting boundaries while maintaining trust." },
              ].map((mod) => (
                <div key={mod.num} className="flex gap-4">
                  <span className="text-xs text-muted tracking-widest shrink-0 mt-1">{mod.num}</span>
                  <div>
                    <p className="font-medium text-sm">{mod.title}</p>
                    <p className="text-xs text-muted mt-1 leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-subtle grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-serif text-xl font-bold text-navy">29</p>
                <p className="text-xs text-muted">Video Lessons</p>
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-navy">$99</p>
                <p className="text-xs text-muted">One-time</p>
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-navy">Skool</p>
                <p className="text-xs text-muted">Platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F7]">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8">This course is for you if:</h2>
          <div className="space-y-4">
            {[
              "You manage at least one person who is making your job harder than it needs to be.",
              "You have tried being patient, giving feedback, or working around the problem — and nothing has changed.",
              "You want clear, specific steps — not theory or motivation.",
              "You are willing to try a different approach, even if it feels uncomfortable at first.",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                {checkIcon}
                <p className="text-sm leading-relaxed text-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8">Questions worth asking.</h2>
          <div className="space-y-6">
            {[
              {
                q: "How is this different from generic leadership courses?",
                a: "This course focuses on one thing: managing difficult team members. Every lesson gives you specific scripts and steps you can use in your next conversation. No filler, no theory for the sake of it.",
              },
              {
                q: "Where do I access the course?",
                a: "The course is hosted on Skool. After purchase, you get immediate access to all 29 video lessons. Watch at your own pace.",
              },
              {
                q: "Is there a refund policy?",
                a: "If the course is not what you expected, reach out within 14 days for a full refund.",
              },
              {
                q: "I'm not sure I need a full course. Is there something smaller?",
                a: "Yes. Start with the free email course — five days, one difficult employee type per email. It will give you a clear sense of whether Kai's approach works for you.",
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

      {/* Final CTA */}
      <section className="bg-navy text-white py-20 md:py-24 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            29 lessons. $99. Start today.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Stop letting one difficult person drain your energy every week.
          </p>
          <a
            href="https://www.skool.com/lead-without-losing-it"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-navy px-8 py-3.5 rounded text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Get the Course &rarr;
          </a>
          <p className="mt-6">
            <Link href="/email-course" className="text-sm text-white/70 hover:text-white">
              Not ready yet? Start with the free email course &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
