import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Leadership Coaching for Executives | High Performing Teams",
  description:
    "36 years of leadership experience. Direct, practical coaching for busy executives. Programmes, masterclasses and resources by Kai Boyd.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-6">
            Leadership Coaching
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.15] font-bold">
            You&rsquo;ve been leading for years.
            <br />
            Why is it still this hard?
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-[560px] mx-auto leading-relaxed">
            Most leadership advice is written for people who&rsquo;ve never led anyone.
            This isn&rsquo;t that.
          </p>
          <Link
            href="/webinar"
            className="inline-block mt-8 bg-navy text-white px-10 py-4 rounded text-base font-semibold hover:bg-navy-light transition-colors"
          >
            Watch the Free Masterclass
          </Link>
          <p className="mt-3 text-xs text-muted">
            4 hours. No fluff. What 36 years actually taught me.
          </p>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-navy text-white py-12 md:py-16">
        <div className="max-w-[1040px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "36 Years", label: "Leadership Experience" },
            { number: "1,000+", label: "Leaders Coached" },
            { number: "14+", label: "Social Channels" },
            { number: "4,500+", label: "Podcast Listeners/Episode" },
          ].map((stat) => (
            <div key={stat.label} className="md:border-r md:last:border-r-0 border-white/20">
              <p className="font-serif text-3xl md:text-4xl font-bold">{stat.number}</p>
              <p className="text-xs md:text-sm mt-1 text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-30 px-6">
        <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl leading-[1.2] font-bold">
              Most leaders are good at their jobs.
              <br />
              That&rsquo;s not the problem.
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                The problem is that nobody trained you for the human part.
                The difficult conversations. The team member who undermines everything.
                The peer who takes credit. The boss who&rsquo;s never satisfied.
              </p>
              <p>
                You figured out the technical side years ago.
                The people side? That&rsquo;s still draining you every single week.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="font-serif text-3xl md:text-5xl text-navy leading-snug font-bold text-center md:text-left">
              &ldquo;Leadership
              <br />
              is the job
              <br />
              nobody
              <br />
              prepared
              <br />
              you for.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* The Solution / Approach */}
      <section className="py-20 md:py-30 px-6 bg-[#F5F5F7]">
        <div className="max-w-[760px] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Practical. Direct. No wasted time.
          </h2>
          <p className="mt-6 text-muted leading-relaxed max-w-[600px] mx-auto">
            I work with leaders who don&rsquo;t have time for theory.
            Every session, every framework, every conversation is designed to
            give you something you can use by Monday morning.
          </p>
          <p className="mt-4 text-muted leading-relaxed max-w-[600px] mx-auto">
            Not in six months. Not after a year of &ldquo;self-discovery.&rdquo; Now.
          </p>
        </div>
        <div className="max-w-[1040px] mx-auto mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Clarity",
              desc: "Know exactly what you're dealing with and why.",
            },
            {
              num: "02",
              title: "Confidence",
              desc: "Lead without second-guessing yourself.",
            },
            {
              num: "03",
              title: "Results",
              desc: "Measurable change your team actually notices.",
            },
          ].map((pillar) => (
            <div key={pillar.num} className="text-center">
              <p className="text-xs text-muted tracking-widest">{pillar.num}</p>
              <h3 className="font-serif text-xl font-bold mt-2">{pillar.title}</h3>
              <div className="w-12 h-px bg-navy mx-auto my-4" />
              <p className="text-sm text-muted leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Teaser */}
      <section className="py-20 md:py-30 px-6">
        <div className="max-w-[1040px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Three ways to start.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-subtle rounded p-8 md:p-10">
              <p className="text-xs tracking-[0.15em] uppercase text-muted">Self-Paced Course</p>
              <h3 className="font-serif text-2xl font-bold mt-3">
                Lead Without Losing It
              </h3>
              <p className="text-2xl font-serif font-bold text-navy mt-4">&euro;99</p>
              <p className="text-sm text-muted mt-4 leading-relaxed">
                29 video lessons on managing difficult team members &mdash; without burning out or losing authority.
              </p>
              <a
                href="https://myablefy.com/s/mitarbeiterfuehren/team-that-delivers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm text-navy font-medium hover:underline"
              >
                Get the Course &rarr;
              </a>
            </div>
            <div className="border border-subtle rounded p-8 md:p-10">
              <p className="text-xs tracking-[0.15em] uppercase text-muted">6-Month Programme</p>
              <h3 className="font-serif text-2xl font-bold mt-3">
                The Leadership Edge
              </h3>
              <p className="text-2xl font-serif font-bold text-navy mt-4">From &euro;3,900</p>
              <p className="text-sm text-muted mt-4 leading-relaxed">
                A structured programme for leaders who know they need to change &mdash; and are ready to do the work.
              </p>
              <Link
                href="/programs#leadership-edge"
                className="inline-block mt-6 text-sm text-navy font-medium hover:underline"
              >
                See the Full Programme &rarr;
              </Link>
            </div>
            <div className="border border-subtle rounded p-8 md:p-10 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-navy rounded-t" />
              <div className="flex items-center gap-3">
                <p className="text-xs tracking-[0.15em] uppercase text-muted">12-Month Programme</p>
                <span className="text-[10px] tracking-wider uppercase bg-navy text-white px-2 py-0.5 rounded">
                  Most Comprehensive
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold mt-3">
                The Leadership Partnership
              </h3>
              <p className="text-2xl font-serif font-bold text-navy mt-4">From &euro;5,000</p>
              <p className="text-sm text-muted mt-4 leading-relaxed">
                Sustained transformation and direct access to Kai across a full year.
              </p>
              <Link
                href="/programs#leadership-partnership"
                className="inline-block mt-6 text-sm text-navy font-medium hover:underline"
              >
                See the Full Programme &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 md:py-30 px-6">
        <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded overflow-hidden">
            <Image
              src="/assets/images/Boyd-2.webp"
              alt="Kai Boyd — Leadership Coach"
              width={600}
              height={600}
              className="w-full h-full object-cover"
              priority={false}
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">About Kai Boyd</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-[1.2]">
              Military-trained. 36 years leading teams.
              <br />
              Now he coaches the people who lead them.
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                I&rsquo;m not an academic who studied leadership.
                I led people. Then I coached the people who led people.
                Now I help executives do in months what took me decades.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-6 text-sm text-navy font-medium hover:underline"
            >
              Read Kai&rsquo;s Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram / Social Proof */}
      <section className="py-20 md:py-30 px-6 bg-[#F5F5F7]">
        <div className="max-w-[1040px] mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
            Follow the Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Real leadership advice. Every week.
          </h2>
          <p className="mt-4 text-muted max-w-[560px] mx-auto leading-relaxed">
            Kai shares practical leadership tips, real-world scenarios and honest
            coaching insights on Instagram.
          </p>
          <a
            href="https://www.instagram.com/managing.difficult.people/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-navy text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-navy-light transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Follow @managing.difficult.people
          </a>
          {/* TODO: Instagram video embeds hier einfügen sobald Kai die Reel-URLs liefert */}
        </div>
      </section>

      {/* Free Resource CTA */}
      <section className="bg-navy text-white py-20 md:py-24 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Not ready for a programme yet?
            <br />
            Start here.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            A free 4-hour masterclass. What 36 years of leadership
            condensed into one session looks like.
          </p>
          <Link
            href="/webinar"
            className="inline-block mt-8 bg-white text-navy px-10 py-4 rounded text-base font-semibold hover:bg-white/90 transition-colors"
          >
            Watch the Free Masterclass
          </Link>
          <p className="mt-3 text-xs text-white/70">
            No opt-in required for the preview. Full access with email registration.
          </p>
        </div>
      </section>
    </>
  );
}
