import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import WhyUs from "@/components/sections/WhyUs";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Cta from "@/components/sections/Cta";
import { Eyebrow } from "@/components/ui";
import { img } from "@/lib/images";
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

const stats = [
  ["20+", "Years running"],
  ["1200+", "Jobs completed"],
  ["8", "Trained fitters"],
  ["7 days", "Average turnaround"],
];

const promises = [
  "The exact material grade and section size written on your estimate.",
  "A fixed rate — no revision after the work starts.",
  "A committed fitting date, and a call the day before.",
  "De-scaling, primer and finish paint included, never charged extra later.",
  "Free repair of any welding or fitting fault in our work.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About us"
        title={
          <>
            A workshop in Jagatpura, <span className="text-rust">run by the welder.</span>
          </>
        }
        subtitle="No call centre, no middleman. You speak to the person who will actually build your job."
      />

      {/* Story + workshop photography */}
      <section className="border-b border-line bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <h2 className="sr-only">Our story</h2>
              <Reveal>
                <div className="space-y-5 text-[15px] leading-relaxed text-ink-2 sm:text-base">
                  <p className="font-display text-2xl font-extrabold leading-snug tracking-tight text-ink sm:text-[1.75rem]">
                    {site.name} started as a small workshop doing window grills and gates for
                    neighbours in Jagatpura.
                  </p>
                  <p>
                    Two decades later, the work has grown to parking sheds, shop shutters,
                    staircases and factory structures — but the way we work has not changed. We
                    still take the measurement ourselves. We still weld it in our own shop instead
                    of farming it out. We still turn up on the day we said we would.
                  </p>
                  <p>
                    That is the whole business, and it is the reason most of our jobs today come
                    from someone who has already worked with us.
                  </p>
                  <p className="text-muted">
                    If a job needs a heavier section than you asked for, we will tell you and show
                    you why. If it needs less, we will tell you that too and quote it lower. An
                    estimate from us is a real number, not an opening position.
                  </p>
                  <p className="text-muted">
                    हमारा काम ही हमारी पहचान है — सही नाप, सही माल, और तय समय पर डिलीवरी.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <dl className="mt-12 grid grid-cols-2 gap-px border border-line bg-line">
                  {stats.map(([v, l]) => (
                    <div key={l} className="bg-paper px-6 py-7">
                      <dt className="label text-[10px] text-muted">{l}</dt>
                      <dd className="num mt-2 text-3xl font-semibold text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={160}>
                <div className="relative aspect-4/5 w-full overflow-hidden">
                  <Image
                    src={img.workshop}
                    alt="Steel railing sections laid out on the workshop floor"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Reveal delay={220}>
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={img.workshopGrind}
                      alt="Fabricator grinding a welded steel joint"
                      fill
                      sizes="(max-width: 1024px) 50vw, 22vw"
                      placeholder="blur"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={280}>
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={img.workshopDrill}
                      alt="Drilling a steel plate on the workshop bench"
                      fill
                      sizes="(max-width: 1024px) 50vw, 22vw"
                      placeholder="blur"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability & materials */}
      <section className="border-b border-line bg-paper py-20 lg:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>02 — Capability</Eyebrow>
              <h2 className="mt-7 text-balance text-4xl sm:text-5xl">
                What we can do in-house.
              </h2>
              <ul className="mt-9 flex flex-wrap gap-2">
                {materials.map((m) => (
                  <li
                    key={m}
                    className="label border border-line-strong px-3 py-2 text-[10px] text-ink-2"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="grid gap-px bg-line sm:grid-cols-2 lg:col-span-8">
              {capabilities.map((c) => (
                <Reveal key={c.title} as="li">
                  <div className="h-full bg-paper p-8">
                    <h3 className="text-xl text-ink">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <WhyUs eyebrow="03 — Why us" />

      {/* Written promise */}
      <section className="border-t border-line bg-paper py-20 lg:py-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>04 — Our promise</Eyebrow>
              <h2 className="mt-7 text-balance text-4xl sm:text-5xl">What you get, in writing.</h2>
            </div>

            <ul className="border-t border-line lg:col-span-8">
              {promises.map((p) => (
                <Reveal key={p} as="li">
                  <div className="flex items-start gap-4 border-b border-line py-6">
                    <Icon name="check" className="mt-0.5 size-5 shrink-0 text-rust" strokeWidth={2.4} />
                    <p className="text-[15px] leading-relaxed text-ink-2 sm:text-base">{p}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ServiceAreas />
      <Cta />
    </>
  );
}
