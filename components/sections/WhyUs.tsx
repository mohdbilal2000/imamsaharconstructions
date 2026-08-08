import Reveal from "../Reveal";
import { Eyebrow } from "../ui";
import { reasons } from "@/lib/content";

export default function WhyUs({ eyebrow = "05 — Why us" }: { eyebrow?: string }) {
  return (
    <section id="why-us" className="scroll-mt-24 border-t border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Heading parks itself while the list scrolls past */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Eyebrow>{eyebrow}</Eyebrow>
              <h2 className="mt-7 text-balance text-4xl sm:text-5xl lg:text-[3.5rem]">
                The reason people call us back.
              </h2>
              <p className="mt-6 max-w-md text-pretty text-[15px] leading-relaxed text-muted">
                Fabrication is easy to promise and hard to finish. Here is what we actually hold
                ourselves to.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-line">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={(i % 3) * 60} as="li">
                  <div className="group grid grid-cols-[2.5rem_1fr] gap-x-5 border-b border-line py-7 transition-colors hover:bg-paper-2/60 sm:grid-cols-[3.5rem_1fr] sm:py-8">
                    <span className="num pt-1 text-[11px] text-muted transition-colors group-hover:text-rust-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl text-ink sm:text-2xl">{r.title}</h3>
                      <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-muted sm:text-[15px]">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
