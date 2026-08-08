import Image from "next/image";
import Icon from "../Icon";
import Reveal from "../Reveal";
import { Eyebrow, TextLink } from "../ui";
import { services } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export default function Services({
  limit,
  showAllLink = false,
  eyebrow = "02 — What we make",
}: {
  limit?: number;
  showAllLink?: boolean;
  eyebrow?: string;
}) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="scroll-mt-24 border-t border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-7 max-w-2xl text-balance text-4xl sm:text-5xl lg:text-[3.5rem]">
              Every kind of iron work, under one roof.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-[15px] leading-relaxed text-muted">
            From a single window grill to a full industrial shed — same workshop, same team, same
            finish standard.
          </p>
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 80} as="article">
              <a
                id={s.slug}
                href={whatsappUrl(`Hello, I need a quote for: ${s.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full scroll-mt-28 flex-col"
              >
                <div className="relative aspect-4/5 w-full overflow-hidden bg-paper-2">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
                    placeholder="blur"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="num absolute left-0 top-0 bg-ink px-3 py-2 text-[11px] font-medium text-paper">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
                </div>

                <h3 className="mt-6 text-xl leading-tight text-ink">{s.title}</h3>
                <p className="label mt-2 text-[10px] text-rust-dark">{s.titleHi}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.blurb}</p>

                {/* flex-1 pushes the CTA to the card foot so a whole row lines up */}
                <ul className="mt-4 flex-1 space-y-1.5 border-t border-line pt-4">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[13px] text-ink-2">
                      <Icon name="check" className="mt-0.5 size-3.5 shrink-0 text-rust" strokeWidth={2.6} />
                      {p}
                    </li>
                  ))}
                </ul>

                <span className="mt-5 inline-flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-wide text-ink transition-colors group-hover:text-rust">
                  Get a price
                  <Icon
                    name="arrow"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-16 border-t border-line pt-8">
            <TextLink href="/services">See all services in detail</TextLink>
          </div>
        )}
      </div>
    </section>
  );
}
