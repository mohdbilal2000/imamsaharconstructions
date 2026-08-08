import Icon from "../Icon";
import Motif from "../Motif";
import Reveal from "../Reveal";
import { Button, SectionHeading } from "../ui";
import type { MotifKey } from "@/lib/content";

type Work = {
  title: string;
  place: string;
  meta: string;
  motif: MotifKey;
  /** Wide tiles anchor the grid so it does not read as a plain 3×N block */
  wide?: boolean;
};

const works: Work[] = [
  { title: "Double-leaf main gate", place: "Golden City, Jagatpura", meta: "MS square pipe · 14 ft", motif: "gate", wide: true },
  { title: "Designer window grills", place: "Vrinda Garden", meta: "12 windows · powder coated", motif: "grill" },
  { title: "SS 304 staircase railing", place: "Malviya Nagar", meta: "3 floors · mirror polish", motif: "railing" },
  { title: "Four-car parking shed", place: "Sitapura", meta: "Profile sheet · 620 sq.ft", motif: "shed" },
  { title: "Motorised rolling shutter", place: "Tonk Road", meta: "Shop front · 16 ft", motif: "shutter", wide: true },
  { title: "Spiral staircase", place: "Pratap Nagar", meta: "Chequered plate treads", motif: "staircase" },
  { title: "Safety doors & frames", place: "Mansarovar", meta: "MS · 6 units", motif: "door" },
  { title: "Water tank stand", place: "Jagatpura", meta: "Angle frame · 2000 L", motif: "structure", wide: true },
  { title: "Balcony grill & jaali", place: "Vaishali Nagar", meta: "Anti-rust finish", motif: "grill" },
];

export default function Gallery({ limit, showAllLink = false }: { limit?: number; showAllLink?: boolean }) {
  const list = limit ? works.slice(0, limit) : works;

  return (
    <section id="work" className="relative scroll-mt-24 border-y border-white/10 bg-steel-900/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Our work"
          title={
            <>
              Recent jobs around <span className="text-ember-400">Jaipur</span>
            </>
          }
          subtitle="A sample of what has left the workshop lately. Ask us for photos of any job type on WhatsApp."
        />

        <div className="mt-14 grid auto-rows-[13rem] grid-cols-2 gap-4 lg:grid-cols-4">
          {list.map((w, i) => (
            <Reveal
              key={w.title}
              delay={(i % 4) * 60}
              className={w.wide ? "col-span-2" : ""}
              as="article"
            >
              <div className="group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-steel-800/60 via-steel-900 to-steel-950 p-5 transition-all duration-300 hover:border-ember-500/40">
                <div className="bg-grid absolute inset-0 opacity-40" />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-steel-950 via-steel-950/50 to-transparent" />

                {/* Wide tiles push the art to the right so the caption gets its own column */}
                <Motif
                  name={w.motif}
                  className={`absolute top-3 h-28 text-steel-600 transition-all duration-500 group-hover:scale-105 group-hover:text-ember-500/80 ${
                    w.wide ? "right-2 w-1/2 sm:right-6" : "inset-x-0 mx-auto w-4/5"
                  }`}
                />

                <div className="relative">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ember-400/90">
                    {w.place}
                  </p>
                  <h3 className="mt-1.5 text-sm font-bold leading-snug text-white sm:text-base">
                    {w.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-steel-400">{w.meta}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-12 text-center">
            <Button
              href="/gallery"
              variant="outline"
              iconAfter={<Icon name="arrow" className="size-4" />}
            >
              View the full gallery
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
