import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Kai Boyd — Leadership Coach | 36 Years Experience",
  description:
    "Kai Boyd is a leadership coach based in Munich with 36 years of experience across military, corporate and coaching roles. Direct, practical coaching for executives who build high performing teams.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-6">
            About Kai Boyd
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-bold">
            I don&rsquo;t coach leadership theory.
            <br />
            I coach what works in the room on Monday morning.
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            36 years. Military, corporate, coaching.
            Here is what that actually taught me.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[680px] mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8">The short version.</h2>
          <div className="space-y-6 text-muted leading-[1.8]">
            <p>
              My first real leadership role was in the German military. I was young, responsible for people older than me, and completely unprepared for the human complexity of leading a team under pressure. Nobody handed me a manual. I learned by getting things wrong and paying attention to what happened when I did.
            </p>
            <p>
              The transition to corporate leadership was a different kind of hard. The military teaches you decisiveness and discipline. Corporate environments reward politics, consensus, and patience. Some of my military habits served me well. Others failed spectacularly. I had to unlearn as much as I had learned.
            </p>
            <p>
              After three decades of leading teams, departments, and organisations, I started coaching. Not because I had run out of things to do &mdash; but because I had spent 30 years learning what worked and what didn&rsquo;t. It made no sense to keep that to myself.
            </p>
            <p>
              Today I work from Munich with an international audience. My podcast, Instagram, and coaching programmes reach leaders across industries and continents. But the work is always the same: practical, direct, and designed for people who have real responsibilities and no time for theory.
            </p>
          </div>
        </div>
      </section>

      {/* Credibility Markers */}
      <section className="py-16 md:py-20 px-6 bg-[#F5F5F7]">
        <div className="max-w-[1040px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { number: "36 Years", label: "Across military, corporate and coaching" },
            { number: "1,000+", label: "Leaders coached and trained" },
            { number: "5 Dysfunctions", label: "Teaches and applies Lencioni's framework" },
            { number: "4,500+", label: "Podcast listeners per episode" },
            { number: "14+", label: "Active social media channels" },
            { number: "10+", label: "Years running leadership programmes" },
          ].map((marker) => (
            <div key={marker.label} className="text-center">
              <p className="font-serif text-2xl md:text-3xl font-bold text-navy">{marker.number}</p>
              <p className="text-xs text-muted mt-2 leading-relaxed">{marker.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy / Approach */}
      <section className="py-20 md:py-30 px-6">
        <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">How I work.</h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                Most coaching programmes are built around what the coach wants to teach.
                Mine is built around what you actually need to fix.
              </p>
              <p>
                Every programme starts with an honest assessment of where your leadership
                is costing you &mdash; in time, in team performance, in your own stress levels.
              </p>
              <p>
                Then we address exactly that. Not a generic curriculum. A specific plan.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "Directness",
                desc: "You will hear things that are uncomfortable. That is the point. Leaders rarely lack information. They lack someone willing to say it clearly.",
              },
              {
                num: "02",
                title: "Practicality",
                desc: "No homework that doesn't connect to a real situation you're currently in. Every concept gets tested against the problem in front of you right now.",
              },
              {
                num: "03",
                title: "Respect for Your Time",
                desc: "You are a busy person leading a real organisation. I will not waste your time with theory, exercises, or sessions that don't move the needle.",
              },
            ].map((principle) => (
              <div key={principle.num}>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted tracking-widest">{principle.num}.</span>
                  <h3 className="font-serif text-lg font-bold">{principle.title}</h3>
                </div>
                <div className="w-full h-px bg-subtle my-3" />
                <p className="text-sm text-muted leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Kai Is NOT */}
      <section className="bg-navy text-white py-20 md:py-24 px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">A few things I&rsquo;m not.</h2>
          <div className="mt-8 space-y-6 text-left text-white/80 leading-relaxed">
            <p>
              I&rsquo;m not a motivational speaker. I won&rsquo;t tell you you&rsquo;re amazing
              and send you home feeling good but changing nothing.
            </p>
            <p>
              I&rsquo;m not an academic. I have no interest in leadership theory for its own sake.
            </p>
            <p>
              I&rsquo;m not a therapist. I work on professional performance, not personal psychology.
            </p>
            <p>
              I&rsquo;m not available to everyone. My programmes have limited places because the work
              requires direct access to me. That means I can only work with a small number of leaders at a time.
            </p>
          </div>
          <p className="mt-8 text-white/70 italic text-sm">
            If that sounds like it fits, let&rsquo;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-white text-navy px-8 py-3.5 rounded text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>

      {/* Programs CTA */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Ready to find out if we&rsquo;re a fit?
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            The first step is a 30-minute call.
            No commitment. No sales pitch. Just an honest conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-navy text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-navy-light transition-colors"
          >
            Book a Discovery Call
          </Link>
          <p className="mt-4">
            <Link href="/programs" className="text-sm text-navy hover:underline">
              Or explore the programmes first &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
