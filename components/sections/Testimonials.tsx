import Reveal from "../Reveal";
import { Eyebrow, Stars } from "../ui";
import { testimonials } from "@/lib/content";

export default function Testimonials({ eyebrow = "06 — Reviews" }: { eyebrow?: string }) {
  return (
    <section id="reviews" className="scroll-mt-24 border-t border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-7 max-w-2xl text-balance text-4xl sm:text-5xl lg:text-[3.5rem]">
          What Jaipur customers say.
        </h2>

        <div className="mt-16 grid gap-px bg-line sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 80} as="figure">
              <div className="flex h-full flex-col bg-paper p-8 sm:p-10">
                <Stars />
                <blockquote className="mt-6 flex-1 text-pretty font-display text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-baseline justify-between gap-4 border-t border-line pt-5">
                  <span className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                    {t.name}
                  </span>
                  <span className="label text-[10px] text-muted">{t.place}</span>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
