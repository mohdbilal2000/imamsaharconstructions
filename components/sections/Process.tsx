import Reveal from "../Reveal";
import { SectionHeading } from "../ui";
import { steps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              Four steps, <span className="text-ember-400">no guesswork</span>
            </>
          }
          subtitle="You always know what is happening, what it costs and when it will be done."
        />

        <div className="relative mt-16">
          {/* Connecting rail on desktop */}
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-linear-to-r from-transparent via-ember-500/30 to-transparent lg:block"
            aria-hidden="true"
          />

          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90} as="li">
                <div className="relative">
                  <span className="relative z-10 inline-grid size-16 place-items-center rounded-2xl border border-ember-500/25 bg-steel-950 text-xl font-extrabold text-ember-400 shadow-lg shadow-black/40">
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-400">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
