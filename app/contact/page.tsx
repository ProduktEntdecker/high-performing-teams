import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kai Boyd at High Performing Teams. Questions about the course or email course? Reach out.",
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
            Questions? Reach out.
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-[520px] mx-auto">
            Whether you have a question about the course, the free email course, or just want to say hello.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-30 px-6">
        <div className="max-w-[680px] mx-auto">
          <div className="p-6 bg-[#F5F5F7] rounded text-sm text-muted">
            <p className="font-medium text-foreground mb-2">Email</p>
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
