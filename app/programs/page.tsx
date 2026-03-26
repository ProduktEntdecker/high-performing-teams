import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership Coaching Programmes",
  description:
    "Leadership programmes by Kai Boyd: Lead Without Losing It course (€99), The Leadership Edge (6 months, €3,900) and The Leadership Partnership (12 months, €5,000). Build high performing teams.",
};

const checkIcon = (
  <svg className="w-4 h-4 text-navy shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function ProgramsPage() {
  return (
    <>
      {/* Self-Paced Course */}
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
              The practical leadership masterclass. 29 video lessons on managing
              difficult team members &mdash; without burning out or losing your authority.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://myablefy.com/s/mitarbeiterfuehren/team-that-delivers"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white px-10 py-4 rounded text-base font-semibold hover:bg-navy-light transition-colors text-center"
              >
                Get the Course &mdash; &euro;99
              </a>
            </div>
            <p className="mt-3 text-xs text-muted">
              Self-paced. Lifetime access. 14-day refund guarantee.
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
                <p className="font-serif text-xl font-bold text-navy">&euro;99</p>
                <p className="text-xs text-muted">One-time</p>
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-navy">&infin;</p>
                <p className="text-xs text-muted">Lifetime Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[200px] mx-auto h-px bg-subtle" />

      {/* 6-Month Programme */}
      <section id="leadership-edge" className="py-24 md:py-36 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-6">
            6-Month Leadership Programme
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-bold">
            Six months to fix what ten years of management experience hasn&rsquo;t.
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-[560px] mx-auto">
            A structured, direct programme for leaders who know something isn&rsquo;t working &mdash; and are ready to change it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-navy text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-navy-light transition-colors"
            >
              Apply for the Programme
            </Link>
            <Link
              href="/contact"
              className="border border-navy text-navy px-8 py-3.5 rounded text-sm font-medium hover:bg-navy hover:text-white transition-colors"
            >
              Book a Discovery Call First
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F7]">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8">This programme is for you if:</h2>
          <div className="space-y-4">
            {[
              "You have been leading for at least 3 years but feel like something fundamental is still missing.",
              "You have a specific problem — a difficult team member, a communication breakdown, a trust issue — that you haven't been able to solve.",
              "You want direct, honest feedback — not validation.",
              "You can commit 2-3 hours per week for six months.",
              "You are willing to be uncomfortable for a period in exchange for lasting change.",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                {checkIcon}
                <p className="text-sm leading-relaxed text-muted">{item}</p>
              </div>
            ))}
          </div>
          <div className="w-full h-px bg-subtle my-8" />
          <h3 className="font-serif text-xl font-bold mb-4 text-muted">And this is not for you if:</h3>
          <div className="space-y-3">
            {[
              "You are looking for quick fixes or motivational content.",
              "You want someone to tell you you're doing everything right.",
              "You are not currently leading a real team in a real organisation.",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <span className="text-muted shrink-0 mt-0.5">&times;</span>
                <p className="text-sm leading-relaxed text-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-30 px-6">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Here is what nobody tells you about leadership.
          </h2>
          <div className="mt-8 space-y-4 text-muted leading-[1.8]">
            <p>
              You can be technically excellent at your job, respected by your peers,
              and still quietly struggling every single week.
            </p>
            <p>
              The team meeting where someone checks out.
              The direct report who agrees in the room and does something else
              completely when they leave it.
              The performance review you&rsquo;ve been putting off for three months
              because you don&rsquo;t know how to have that conversation.
            </p>
            <p>
              This is not a skills problem. You have skills.
              This is a gap problem. A specific set of things that weren&rsquo;t in
              any training programme you ever attended.
            </p>
            <p className="font-medium text-foreground">
              That&rsquo;s what this programme closes.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-30 px-6 bg-[#F5F5F7]">
        <div className="max-w-[760px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">
            What the six months looks like.
          </h2>
          <div className="space-y-12">
            {[
              {
                num: "01",
                period: "Month 1-2",
                title: "Find the real problem.",
                desc: "Before we fix anything, we name it precisely. A structured assessment of your leadership, your team dynamics, and the specific gaps that are costing you most. Output: A written Leadership Gap Analysis you keep.",
              },
              {
                num: "02",
                period: "Month 2-3",
                title: "Say what needs to be said.",
                desc: "The conversations you've been avoiding. The feedback nobody else will give. The frameworks for difficult dialogues that actually lead to changed behaviour, not resentment.",
              },
              {
                num: "03",
                period: "Month 3-4",
                title: "Fix what's broken in the team.",
                desc: "Using Patrick Lencioni's Five Dysfunctions framework — the most widely validated team analysis tool in leadership — to identify and address what's stopping your team from performing at the level you need.",
              },
              {
                num: "04",
                period: "Month 4-5",
                title: "Lead clearly when it's hard.",
                desc: "The situations that test every leader — uncertainty, conflict, underperformance, upward pressure. Build the decision-making patterns that don't break under stress.",
              },
              {
                num: "05",
                period: "Month 5-6",
                title: "Make the change stick.",
                desc: "The last thing a leadership programme needs to be is something you finish and then forget. The final phase is about building the habits, systems and accountability structures that hold the change in place permanently.",
              },
            ].map((module) => (
              <div key={module.num} className="flex gap-6">
                <div className="shrink-0">
                  <span className="text-xs text-muted tracking-widest">{module.num}</span>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">{module.period}</p>
                  <h3 className="font-serif text-xl font-bold mt-1">{module.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mt-2">{module.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-subtle">
            <h3 className="font-serif text-xl font-bold mb-6">Also included:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "12 x 60-minute 1:1 sessions with Kai (bi-weekly)",
                "Unlimited async messaging between sessions",
                "Leadership Gap Analysis report (Month 1)",
                "Five Dysfunctions team assessment",
                "All frameworks and tools in a private resource library",
                "Access to the private Skool community during the programme",
                "One additional session if needed (no extra charge)",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  {checkIcon}
                  <p className="text-sm text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 md:py-30 px-6">
        <div className="max-w-[1040px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            What leaders typically experience.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "A Senior Director in a professional services firm came in with a team attrition problem. Three talented people had left in 12 months. By month 4, they had restructured their 1:1 process and introduced a team agreement. By the end of the programme, nobody had left — and two people who had been quietly interviewing elsewhere had told them directly they'd decided to stay.",
              "A Managing Director had been promoted to a level where the skills that got them there were no longer enough. They were technically brilliant but struggled to delegate, to challenge peers, and to hold their direct reports accountable without creating resentment. Six months in, they described the experience as 'finally being given the manual I should have had at 35.'",
              "A government official running a 200-person department brought a team-level intervention to their senior team. The Five Dysfunctions assessment identified two specific fault lines. Three months of targeted work rebuilt the trust that underpinned both of them.",
            ].map((study, i) => (
              <div key={i} className="bg-[#F5F5F7] rounded p-8">
                <p className="text-sm text-muted leading-relaxed italic">&ldquo;{study}&rdquo;</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted text-center mt-6 italic">
            All case studies are anonymised. Outcomes reflect individual programme members and are not guaranteed.
          </p>
        </div>
      </section>

      {/* Investment - 6 Month */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-8">The investment.</h2>
          <div className="border border-subtle rounded-lg p-8 md:p-12">
            <p className="text-sm text-muted">The Leadership Edge &mdash; 6-Month Programme</p>
            <p className="font-serif text-5xl font-bold text-navy mt-4">&euro;3,900</p>
            <p className="text-sm text-muted mt-2">Single payment</p>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-navy text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-navy-light transition-colors"
            >
              Apply Now
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted">
            Or 3 payments of &euro;1,350. First payment on acceptance, then monthly.
          </p>
          <p className="mt-6 text-sm text-muted">
            Not sure if this is the right programme?{" "}
            <Link href="/contact" className="text-navy hover:underline">
              Book a 30-minute call
            </Link>{" "}
            &mdash; no commitment, no pitch.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F7]">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8">Questions worth asking.</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need to have a specific problem to join?",
                a: "No. Some leaders come with a clear problem in mind. Others know something isn't working but haven't named it yet. The first month is designed to get clarity either way.",
              },
              {
                q: "How much time will this take each week?",
                a: "Budget 2-3 hours. One 60-minute session every two weeks, plus time to apply what we discuss. This is not a passive programme.",
              },
              {
                q: "I've done leadership training before. How is this different?",
                a: "Most leadership training teaches you frameworks. This programme works on the specific situations you are currently in. The difference is the difference between reading a recipe and actually cooking the meal.",
              },
              {
                q: "Can I expense this through my company?",
                a: "Many programme members do. An invoice can be issued to a company address. Whether it qualifies as a training expense depends on your organisation's policies.",
              },
              {
                q: "What if I need to pause during the programme?",
                a: "Life happens. We can pause for up to 4 weeks without any change to what's included. If you need longer, we'll work it out.",
              },
              {
                q: "Is there a refund policy?",
                a: "If after the first session you decide this isn't the right fit, you receive a full refund. After that, payments are non-refundable.",
              },
              {
                q: "How many places are available?",
                a: "Limited. I work with a small number of leaders at any one time to maintain the quality of the work. When cohort spaces are full, the waitlist opens.",
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

      {/* Final CTA - 6 Month */}
      <section className="bg-navy text-white py-20 md:py-24 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Six months from now, you will either have closed the gap &mdash; or you won&rsquo;t.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            The programme does not do the work for you. But it makes sure the work is the right work.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-navy px-8 py-3.5 rounded text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Apply for the Leadership Edge
          </Link>
          <p className="mt-4">
            <Link href="/contact" className="text-sm text-white/70 hover:text-white">
              Book a call to discuss it first &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="py-4" />

      {/* 12-Month Program */}
      <section id="leadership-partnership" className="py-24 md:py-36 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-6">
            12-Month Leadership Programme &mdash; Limited Places
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] font-bold">
            The leaders who change the most aren&rsquo;t the ones who work hardest.
            They&rsquo;re the ones who get honest feedback the longest.
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-[560px] mx-auto">
            Twelve months of direct access, structured work, community, and accountability.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-navy text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-navy-light transition-colors"
            >
              Apply for the Partnership
            </Link>
            <Link
              href="/contact"
              className="border border-navy text-navy px-8 py-3.5 rounded text-sm font-medium hover:bg-navy hover:text-white transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-6">
            What makes this different from the 6-month programme.
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              The 6-month programme builds the foundations. The 12-month Partnership sustains them &mdash; and goes further.
            </p>
            <p>
              The difference is not volume. It&rsquo;s depth. A year means we can work through multiple situations,
              adapt to what changes in your role or organisation, and not stop when we&rsquo;ve made progress on the obvious problems.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-foreground">
                  <th className="text-left py-3 font-medium"></th>
                  <th className="text-left py-3 font-medium">6-Month Edge</th>
                  <th className="text-left py-3 font-medium">12-Month Partnership</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  ["Duration", "6 months", "12 months"],
                  ["1:1 Sessions", "12", "24"],
                  ["Async Messaging", "Yes", "Priority access"],
                  ["Skool Community", "During only", "Lifetime access"],
                  ["Team Assessment", "1", "Up to 3"],
                  ["Cohort Check-ins", "No", "Monthly group call"],
                  ["Direct WhatsApp/DM", "No", "Yes"],
                  ["Investment", "€3,900", "€5,000"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-subtle">
                    <td className="py-3 font-medium text-foreground">{row[0]}</td>
                    <td className="py-3">{row[1]}</td>
                    <td className="py-3 font-medium text-navy">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 12-Month What's Included */}
      <section className="py-20 md:py-30 px-6 bg-[#F5F5F7]">
        <div className="max-w-[760px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">
            What a year together includes.
          </h2>
          <div className="space-y-12">
            {[
              {
                num: "01",
                period: "Months 1-2",
                title: "Deep Diagnosis",
                desc: "An expanded assessment going deeper than the 6-month version, examining not just your leadership gaps but organisational dynamics, team culture, and stakeholder relationships.",
              },
              {
                num: "02",
                period: "Months 3-5",
                title: "Communication & Team Dynamics",
                desc: "The same foundational work as the 6-month programme, but with more iterations and real-time adaptation as situations evolve in your organisation.",
              },
              {
                num: "03",
                period: "Months 6-8",
                title: "Navigate the game you didn't sign up for.",
                desc: "Peer rivalries. Board dynamics. Managing upwards. The politics that nobody acknowledges but everyone plays. By month 6 we know each other well enough to be completely honest about this part.",
              },
              {
                num: "04",
                period: "Months 9-10",
                title: "Personal Leadership Identity",
                desc: "What kind of leader do you want to be? Not what your organisation expects — what actually works for you, your values, and the impact you want to have.",
              },
              {
                num: "05",
                period: "Months 11-12",
                title: "Legacy & Succession",
                desc: "How do you build leadership capacity around you? The final phase ensures you're not just a better leader — you're developing leaders within your team.",
              },
            ].map((module) => (
              <div key={module.num} className="flex gap-6">
                <div className="shrink-0">
                  <span className="text-xs text-muted tracking-widest">{module.num}</span>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">{module.period}</p>
                  <h3 className="font-serif text-xl font-bold mt-1">{module.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mt-2">{module.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-subtle">
            <h3 className="font-serif text-xl font-bold mb-6">Everything included:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "24 x 60-minute 1:1 sessions (bi-weekly)",
                "Priority async messaging (48-hour response guarantee)",
                "Direct access via WhatsApp/DM for urgent situations",
                "Monthly group coaching call with other Partnership members",
                "Lifetime Skool community membership",
                "All 6-month programme assets + advanced materials",
                "Up to 3 team assessments (Five Dysfunctions)",
                "Annual Leadership Summary (written report, yours to keep)",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  {checkIcon}
                  <p className="text-sm text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 md:py-30 px-6">
        <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              You won&rsquo;t be doing this alone.
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                Partnership members get lifetime access to a private Skool community of leaders at the same level &mdash;
                executives who are doing the same work, facing similar problems, and not allowed to sugarcoat anything.
              </p>
              <p>
                This is not a social network. There are no likes.
                It is a working group of serious professionals who check in, share what&rsquo;s working,
                and ask for help without fear of appearing weak.
              </p>
            </div>
          </div>
          <div className="bg-subtle rounded-lg aspect-video flex items-center justify-center">
            <p className="text-muted text-sm">[Community Screenshot]</p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F7]">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">This programme is not open enrollment.</h2>
          <p className="text-muted leading-relaxed">
            I work with a very small number of leaders at any one time.
            Not because of artificial scarcity &mdash; because the work requires me to know your situation in real depth.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Book a call", desc: "No commitment." },
              { num: "2", title: "30-minute discovery call", desc: "Honest conversation." },
              { num: "3", title: "Receive your offer", desc: "Within 48 hours." },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-navy text-navy font-serif font-bold">
                  {step.num}
                </span>
                <h3 className="font-medium mt-3">{step.title}</h3>
                <p className="text-xs text-muted mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment - 12 Month */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-8">The investment.</h2>
          <div className="border border-subtle rounded-lg p-8 md:p-12">
            <p className="text-sm text-muted">The Leadership Partnership &mdash; 12-Month Programme</p>
            <p className="font-serif text-5xl font-bold text-navy mt-4">&euro;5,000</p>
            <p className="text-sm text-muted mt-2">Single payment</p>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-navy text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-navy-light transition-colors"
            >
              Apply Now
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted">
            Or 5 payments of &euro;1,100. First payment on acceptance, then monthly.
          </p>
          <p className="mt-6 text-sm text-muted italic">
            For context: the cost of losing one senior employee through poor leadership
            is estimated at 6-9 months of their salary. This programme pays for itself
            if it prevents one departure.
          </p>
        </div>
      </section>

      {/* 12-Month FAQ */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F7]">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-8">Questions about the Partnership.</h2>
          <div className="space-y-6">
            {[
              {
                q: "What's the real difference between this and the 6-month programme?",
                a: "Time and access. More sessions, but more importantly: we get to work on the problems that surface later — the ones that only appear after the first layer of change. And you have direct access between sessions for the situations that can't wait two weeks.",
              },
              {
                q: "I'm very senior. Is this still relevant?",
                a: "The more senior you are, the less feedback you receive. This programme is specifically valuable for leaders who have reached a level where honest challenge has effectively stopped coming from around them.",
              },
              {
                q: "Can my company sponsor this?",
                a: "Yes. An invoice can be raised to a company address. If you need a detailed scope for procurement purposes, this can be provided.",
              },
              {
                q: "What happens after 12 months?",
                a: "Lifetime Skool community access continues. Some Partnership members choose to continue with a lighter-touch annual retainer. This is discussed individually at month 11.",
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

      {/* Final CTA - 12 Month */}
      <section className="bg-navy text-white py-20 md:py-24 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Places are limited. Discovery calls are open now.
          </h2>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-navy px-8 py-3.5 rounded text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Book Your Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
