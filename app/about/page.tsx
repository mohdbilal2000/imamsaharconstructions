import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Motif from "@/components/Motif";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import WhyUs from "@/components/sections/WhyUs";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Cta from "@/components/sections/Cta";
import { SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Iron Rod Fabrication is a family-run fabrication workshop in Jagatpura, Jaipur, doing gates, grills, railings, sheds, shutters and industrial steel work for over 20 years.",
  alternates: { canonical: "/about" },
};

const capabilities = [
  { title: "Cutting & bending", desc: "Chop saw, plasma and press work for clean, square edges." },
  { title: "Welding", desc: "Arc, MIG and gas welding — ground smooth and buffed at every joint." },
  { title: "Surface finishing", desc: "De-scaling, red-oxide primer, enamel paint and powder coating." },
  { title: "Site erection", desc: "Our own fitting crew, tools and transport — no third-party fitters." },
];

const materials = [
  "MS square & round pipe",
  "MS angle, flat & channel",
  "SS 202 / SS 304",
  "GI sheet & profile sheet",
  "Polycarbonate sheet",
  "Chequered plate",
  "Toughened glass infill",
  "Wrought iron sections",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About us"
        title={
          <>
            A workshop in Jagatpura, <span className="text-ember-400">run by the welder</span>
          </>
        }
        subtitle="No call centre, no middleman. You speak to the person who will actually build your job."
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="sr-only">About the workshop</h2>
            <Reveal>
              <div className="space-y-5 text-[15px] leading-relaxed text-steel-300">
                <p>
                  {site.name} started as a small workshop doing window grills and gates for
                  neighbours in Jagatpura. Two decades later, the work has grown to parking sheds,
                  shop shutters, staircases and factory structures — but the way we work has not
                  changed.
                </p>
                <p>
                  We still take the measurement ourselves. We still weld it in our own shop instead
                  of farming it out. We still turn up on the day we said we would. That is the whole
                  business, and it is the reason most of our jobs today come from someone who has
                  already worked with us.
                </p>
                <p>
                  If a job needs a heavier section than you asked for, we will tell you and show you
                  why. If it needs less, we will tell you that too and quote it lower. An estimate
                  from us is a real number, not an opening position.
                </p>
                <p className="text-steel-400">
                  हमारा काम ही हमारी पहचान है — सही नाप, सही माल, और तय समय पर डिलीवरी.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {capabilities.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-white/10 bg-steel-900/50 p-5"
                  >
                    <h3 className="flex items-center gap-2 text-sm font-bold text-white">
                      <Icon name="spark" className="size-4 text-ember-500" />
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-400">{c.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <div className="sticky top-28 space-y-5">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-steel-800/70 to-steel-900/80 p-8">
                  <div className="bg-grid absolute inset-0 opacity-40" />
                  <Motif name="structure" className="relative mx-auto h-40 w-full text-ember-400/80" />
                  <dl className="relative mt-6 grid grid-cols-2 gap-5 border-t border-white/10 pt-6">
                    {[
                      ["20+", "Years running"],
                      ["1200+", "Jobs completed"],
                      ["8", "Trained fitters"],
                      ["7 days", "Average turnaround"],
                    ].map(([v, l]) => (
                      <div key={l}>
                        <dt className="sr-only">{l}</dt>
                        <dd>
                          <span className="block text-2xl font-extrabold text-white">{v}</span>
                          <span className="mt-1 block text-xs text-steel-400">{l}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded-3xl border border-white/10 bg-steel-900/50 p-7">
                  <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-steel-400">
                    Material we work with
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {materials.map((m) => (
                      <li
                        key={m}
                        className="rounded-full border border-white/10 bg-steel-950/70 px-3 py-1.5 text-xs font-semibold text-steel-300"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WhyUs />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <SectionHeading
            eyebrow="Our promise"
            title={
              <>
                What you get, <span className="text-ember-400">in writing</span>
              </>
            }
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-3">
            {[
              "The exact material grade and section size written on your estimate.",
              "A fixed rate — no revision after the work starts.",
              "A committed fitting date, and a call the day before.",
              "De-scaling, primer and finish paint included, never charged extra later.",
              "Free repair of any welding or fitting fault in our work.",
            ].map((p) => (
              <Reveal key={p}>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-steel-900/40 px-5 py-4">
                  <Icon name="check" className="mt-0.5 size-5 shrink-0 text-ember-400" strokeWidth={2.4} />
                  <p className="text-sm leading-relaxed text-steel-200">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreas />
      <Cta />
    </>
  );
}
