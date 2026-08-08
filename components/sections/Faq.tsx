import Icon from "../Icon";
import Reveal from "../Reveal";
import { SectionHeading } from "../ui";
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

export default function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 border-t border-white/10 bg-steel-900/40 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions we get <span className="text-ember-400">every week</span>
            </>
          }
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              {/* Native <details> — works with JS disabled and is screen-reader friendly */}
              <details className="group rounded-2xl border border-white/10 bg-steel-950/60 transition-colors open:border-ember-500/30 open:bg-steel-950">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-[15px] font-bold text-white marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-steel-300 transition-all duration-300 group-open:rotate-180 group-open:border-ember-500/30 group-open:text-ember-400">
                    <Icon name="chevron" className="size-4" strokeWidth={2.2} />
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-steel-400">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
