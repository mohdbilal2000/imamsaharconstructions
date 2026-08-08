import Icon from "../Icon";
import Reveal from "../Reveal";
import { Eyebrow } from "../ui";
import { faqs } from "@/lib/content";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq({ eyebrow = "07 — FAQ" }: { eyebrow?: string }) {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-7 text-balance text-4xl sm:text-5xl">
              Questions we get every week.
            </h2>
          </div>

          <div className="lg:col-span-8">
            {/* Native <details> — works with JS disabled and is screen-reader friendly */}
            <div className="border-t border-line">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 40}>
                  <details className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-start gap-5 py-6 marker:hidden [&::-webkit-details-marker]:hidden">
                      <span className="num pt-1.5 text-[11px] text-muted transition-colors group-open:text-rust-dark">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-display text-lg font-extrabold tracking-tight text-ink sm:text-xl">
                        {f.q}
                      </span>
                      <span className="mt-1 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45 group-open:text-rust-dark">
                        <Icon name="plus" className="size-5" strokeWidth={1.8} />
                      </span>
                    </summary>
                    <p className="max-w-2xl pb-7 pl-[2.75rem] text-[15px] leading-relaxed text-muted">
                      {f.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
