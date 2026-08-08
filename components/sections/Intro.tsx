import Image from "next/image";
import Reveal from "../Reveal";
import { Eyebrow, TextLink } from "../ui";
import { img } from "@/lib/images";

export default function Intro() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>01 — Who we are</Eyebrow>
              <h2 className="mt-7 max-w-2xl text-balance text-4xl sm:text-5xl lg:text-[3.5rem]">
                A workshop in Jagatpura, run by the welder.
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-9 grid max-w-2xl gap-5 text-[15px] leading-relaxed text-ink-2 sm:text-base">
                <p>
                  We started doing window grills and gates for neighbours in Golden City. Twenty
                  years later the work runs from a single balcony jaali to full industrial sheds —
                  but it is still measured, welded, painted and fitted by the same hands.
                </p>
                <p className="text-muted">
                  No call centre, no middleman, no handing your job to a third-party fitter. You
                  speak to the person who will actually build it.
                </p>
              </div>
              <div className="mt-9">
                <TextLink href="/about">More about the workshop</TextLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5">
            <figure className="relative">
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={img.workshop}
                  alt="Steel railings being fabricated on the workshop floor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <figcaption className="label mt-4 flex items-center gap-3 text-[10px] text-muted">
                <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
                Railing sections on the shop floor, Jagatpura
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
