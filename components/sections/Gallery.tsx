import Image from "next/image";
import Reveal from "../Reveal";
import { Eyebrow, TextLink } from "../ui";
import { works } from "@/lib/content";

export default function Gallery({
  limit,
  showAllLink = false,
  eyebrow = "04 — Our work",
}: {
  limit?: number;
  showAllLink?: boolean;
  eyebrow?: string;
}) {
  const list = limit ? works.slice(0, limit) : works;

  return (
    <section id="work" className="scroll-mt-24 border-t border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-7 max-w-2xl text-balance text-4xl sm:text-5xl lg:text-[3.5rem]">
              Recent jobs around Jaipur.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-[15px] leading-relaxed text-muted">
            A sample of what has left the workshop lately. Ask us on WhatsApp for photos of any job
            type.
          </p>
        </div>

        {/* Uneven row spans keep the grid from reading as a plain table of thumbnails */}
        <div className="mt-16 grid auto-rows-[13rem] grid-flow-row-dense grid-cols-2 gap-4 sm:auto-rows-[15rem] lg:grid-cols-3 lg:gap-5">
          {list.map((w, i) => (
            <Reveal
              key={w.title}
              delay={(i % 3) * 70}
              as="figure"
              className={w.tall ? "row-span-2" : ""}
            >
              <div className="group relative h-full w-full overflow-hidden bg-paper-2">
                <Image
                  src={w.image}
                  alt={w.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Explicit stops rather than a via-gradient: some job photos are
                    near-white, and the caption has to stay readable on all of them */}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,20,15,0.94)_0%,rgba(23,20,15,0.8)_30%,rgba(23,20,15,0.25)_62%,rgba(23,20,15,0)_100%)] transition-opacity duration-500 group-hover:opacity-90" />

                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="label text-[9px] text-rust-light">{w.place}</p>
                  <h3 className="mt-2 text-base leading-tight text-white sm:text-lg">{w.title}</h3>
                  <p className="num mt-1.5 text-[11px] text-white/60">{w.meta}</p>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-16 border-t border-line pt-8">
            <TextLink href="/gallery">View the full gallery</TextLink>
          </div>
        )}
      </div>
    </section>
  );
}
