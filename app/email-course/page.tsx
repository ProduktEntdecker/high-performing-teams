import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EmailSignupForm from "../components/EmailSignupForm";

export const metadata: Metadata = {
  title: "Free 9-Day Leadership Email Training — High Performing Teams",
  description:
    "Join Kai Boyd's free 9-day email training. Learn how to handle difficult people — with calm, clarity, and control. 409+ leaders already enrolled.",
};

export default function EmailCoursePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-6">
              Free Email Training
            </p>
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.15] font-bold">
              Join my 9-day leadership email training
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Learn how to handle difficult people &mdash; with calm, clarity, and control.
            </p>

            <div className="mt-8">
              <EmailSignupForm buttonText="Start the Training" />
            </div>
            <p className="mt-3 text-xs text-muted">
              Free. Nine emails over nine days. Unsubscribe any time.
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
                  <span className="font-medium text-foreground">Email (9 days)</span>
                </div>
                <div className="flex justify-between">
                  <span>Price</span>
                  <span className="font-medium text-foreground">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Already enrolled</span>
                  <span className="font-medium text-foreground">409+ leaders</span>
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
            Nine days. Nine leadership lessons.
          </h2>
          <div className="space-y-8">
            {[
              "The Underminer — the team member who agrees in the room and does something completely different outside it.",
              "The Disengaged — the person who has quietly checked out but still takes up space, energy, and a salary.",
              "The Know-It-All — the one who questions everything, corrects everyone, and makes every meeting longer than it needs to be.",
              "The Drama Creator — the team member who turns small issues into crises and pulls others into conflict.",
              "The Blocker — the person who resists every change, slows every decision, and says 'that won't work' before hearing the idea.",
              "The Boundary Crosser — how to handle pushback, protect your authority, and set limits without becoming the villain.",
              "The Feedback Conversation — the exact script for addressing poor performance without destroying the relationship.",
              "The Escalation — when talking doesn't work. How to document, escalate, and protect yourself legally.",
              "The Reset — how to rebuild team trust after a difficult period and create a culture where these problems don't keep recurring.",
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
                This email training contains exactly what he tells leaders one-to-one &mdash; at no cost.
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
            Start the free email training today.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Nine days. Real scripts. No fluff.
          </p>
          <div className="mt-8 max-w-[480px] mx-auto">
            <EmailSignupForm variant="dark" buttonText="Start Free" />
          </div>
          <p className="mt-3 text-xs text-white/70">
            Free. Nine emails. Unsubscribe any time.
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
