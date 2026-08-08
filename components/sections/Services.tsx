import Icon from "../Icon";
import Motif from "../Motif";
import Reveal from "../Reveal";
import { Button, SectionHeading } from "../ui";
import { services } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export default function Services({
  limit,
  showAllLink = false,
}: {
  limit?: number;
  showAllLink?: boolean;
}) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="What we make"
          title={
            <>
              Every kind of iron work,{" "}
              <span className="text-ember-400">under one roof</span>
            </>
          }
          subtitle="From a single window grill to a full industrial shed — same workshop, same team, same finish standard."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 70} as="article">
              <div
                id={s.slug}
                className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-steel-800/50 to-steel-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember-500/40 hover:shadow-2xl hover:shadow-ember-900/20"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-ember-500/0 blur-2xl transition-all duration-500 group-hover:bg-ember-500/15" />

                <div className="relative mb-5 grid h-28 place-items-center rounded-xl border border-white/5 bg-steel-950/60">
                  <div className="bg-grid absolute inset-0 rounded-xl opacity-50" />
                  <Motif
                    name={s.motif}
                    className="relative h-24 w-full text-steel-400 transition-colors duration-300 group-hover:text-ember-400"
                  />
                </div>

                <h3 className="text-lg font-bold leading-snug tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-ember-400/80">{s.titleHi}</p>
                <p className="mt-3 text-sm leading-relaxed text-steel-400">{s.blurb}</p>

                <ul className="mt-4 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-steel-300">
                      <Icon name="check" className="mt-0.5 size-3.5 shrink-0 text-ember-500" strokeWidth={2.6} />
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl(`Hello, I need a quote for: ${s.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold text-steel-300 transition-colors group-hover:text-ember-400"
                >
                  Get a price
                  <Icon
                    name="arrow"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-12 text-center">
            <Button
              href="/services"
              variant="outline"
              iconAfter={<Icon name="arrow" className="size-4" />}
            >
              See all services in detail
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
