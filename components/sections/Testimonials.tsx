import Reveal from "../Reveal";
import { SectionHeading, Stars } from "../ui";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Reviews"
          title={
            <>
              What Jaipur customers <span className="text-ember-400">say</span>
            </>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 80} as="figure">
              <div className="relative h-full rounded-2xl border border-white/10 bg-linear-to-b from-steel-800/50 to-steel-900/60 p-7">
                <span
                  className="absolute right-6 top-4 select-none font-serif text-6xl leading-none text-ember-500/15"
                  aria-hidden="true"
                >
                  &rdquo;
                </span>

                <Stars />
                <blockquote className="mt-4 text-pretty text-[15px] leading-relaxed text-steel-200">
                  {t.quote}
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-linear-to-br from-ember-400 to-ember-600 text-sm font-extrabold text-steel-950">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white">{t.name}</span>
                    <span className="block text-xs text-steel-500">{t.place}</span>
                  </span>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
