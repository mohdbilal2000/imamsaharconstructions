import Reveal from "../Reveal";
import { Eyebrow } from "../ui";
import { steps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow tone="paper">03 — How we work</Eyebrow>
            <h2 className="mt-7 max-w-2xl text-balance text-4xl text-white sm:text-5xl lg:text-[3.5rem]">
              Four steps, no guesswork.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-[15px] leading-relaxed text-white/60">
            You always know what is happening, what it costs and when it will be done.
          </p>
        </div>

        <ol className="mt-16 grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} as="li">
              <div className="h-full bg-ink px-0 py-8 sm:px-8 sm:py-10 lg:px-9">
                <span className="num block text-5xl font-medium text-rust lg:text-6xl">{s.n}</span>
                <h3 className="mt-7 text-xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
