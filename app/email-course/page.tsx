import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Email Course — Managing Difficult Employees",
  description:
    "A free email course by Kai Boyd. Five days. One difficult employee type per email. Real scripts you can use in your next conversation.",
};

export default function EmailCoursePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-6">
              Free Email Course
            </p>
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.15] font-bold">
              Managing Difficult Employees
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              A free email course. Five days. One difficult employee type per email.
              Real scripts you can use in your next conversation.
            </p>

            <div className="mt-8">
              {/* TODO: Email signup form — connect to email provider */}
              <div className="border border-subtle rounded-lg p-6 bg-[#F5F5F7]">
                <p className="font-serif text-lg font-bold">Get the Free Email Course</p>
                <p className="text-sm text-muted mt-2">
                  Enter your email to start the five-day course.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 border border-subtle rounded text-sm bg-white"
                  />
                  <button
                    type="button"
                    className="bg-navy text-white px-6 py-3 rounded text-sm font-semibold hover:bg-navy-light transition-colors whitespace-nowrap"
                  >
                    Get the Free Email Course
                  </button>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted">
              Free. Five emails. Unsubscribe any time.
            </p>
          </div>

          <div>
            <div className="aspect-[4/5] rounded overflow-hidden mb-6">
              <Image
                src="/assets/images/Boyd-10.webp"
                alt="Kai Boyd — Leadership Coach"
                width={600}
                height={750}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="border border-subtle rounded p-6">
              <h3 className="font-serif text-lg font-bold">What you&rsquo;ll get</h3>
              <div className="mt-4 space-y-2 text-sm text-muted">
                <div className="flex justify-between">
                  <span>Format</span>
                  <span className="font-medium text-foreground">Email (5 days)</span>
                </div>
                <div className="flex justify-between">
                  <span>Price</span>
                  <span className="font-medium text-foreground">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Content</span>
                  <span className="font-medium text-foreground">5 employee types + scripts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 md:py-30 px-6 bg-[#F5F5F7]">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">
            Five days. Five difficult types.
          </h2>
          <div className="space-y-8">
            {[
              "The Underminer — the team member who agrees in the room and does something completely different outside it.",
              "The Disengaged — the person who has quietly checked out but still takes up space, energy, and a salary.",
              "The Know-It-All — the one who questions everything, corrects everyone, and makes every meeting longer than it needs to be.",
              "The Drama Creator — the team member who turns small issues into crises and pulls others into conflict.",
              "The Blocker — the person who resists every change, slows every decision, and says 'that won't work' before hearing the idea.",
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
            <h2 className="font-serif text-3xl font-bold mb-6">Who writes these emails.</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Kai Boyd is a leadership coach based in Munich
                with 36 years of experience across military, corporate
                and coaching contexts.
              </p>
              <p>
                He has coached leaders at Telekom, O2, ProSieben, and fast-growing startups across Europe.
                His approach: no theory, no soft frameworks. Just clear steps that work on Monday morning.
              </p>
              <p className="font-medium text-foreground">
                This email course contains exactly what he tells leaders one-to-one &mdash; at no cost.
              </p>
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

      {/* Second CTA */}
      <section className="bg-navy text-white py-20 md:py-24 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Start the free email course today.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Five days. Real scripts. No fluff.
          </p>
          {/* TODO: Connect to email signup */}
          <div className="mt-8 max-w-[400px] mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded text-sm text-foreground"
            />
            <button
              type="button"
              className="bg-white text-navy px-6 py-3 rounded text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Start Free
            </button>
          </div>
          <p className="mt-3 text-xs text-white/70">
            Free. Five emails. Unsubscribe any time.
          </p>
          <p className="mt-6">
            <Link href="/programs" className="text-sm text-white/70 hover:text-white">
              Want the full course? Lead Without Losing It &mdash; $99 &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
