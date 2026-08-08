import Icon from "../Icon";
import Reveal from "../Reveal";
import { SectionHeading } from "../ui";
import { reasons } from "@/lib/content";

type ReasonIcon = "hammer" | "receipt" | "team" | "shield" | "clock" | "wrench";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-steel-900/40 py-20 lg:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 size-[38rem] -translate-x-1/2 rounded-full bg-ember-600/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Why us"
          title={
            <>
              The reason people call us <span className="text-ember-400">back</span>
            </>
          }
          subtitle="Fabrication is easy to promise and hard to finish. Here is what we actually hold ourselves to."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80} as="article">
              <div className="group h-full rounded-2xl border border-white/10 bg-steel-950/50 p-7 backdrop-blur-sm transition-all duration-300 hover:border-ember-500/30 hover:bg-steel-950/80">
                <span className="inline-grid size-12 place-items-center rounded-xl border border-ember-500/20 bg-ember-500/10 text-ember-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={r.icon as ReasonIcon} className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-white">{r.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-steel-400">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
