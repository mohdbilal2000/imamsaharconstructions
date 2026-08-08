import Icon from "../Icon";
import Motif from "../Motif";
import { Button, Stars } from "../ui";
import { site, telUrl, whatsappUrl } from "@/lib/site";

const stats = [
  { value: "20+", label: "Years of work" },
  { value: "1200+", label: "Jobs delivered" },
  { value: "100%", label: "Site fitted by us" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient light — a furnace glow behind the content */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -left-40 -top-40 size-[34rem] rounded-full bg-ember-600/12 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 size-[30rem] rounded-full bg-sky-500/8 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-steel-950 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-24">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Open today · Free site visit
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-steel-300">
              <Icon name="pin" className="size-3.5 text-ember-500" />
              Jagatpura, Jaipur
            </span>
          </div>

          <h1 className="mt-7 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.9rem]">
            Complete{" "}
            <span className="relative whitespace-nowrap">
              <span className="bg-linear-to-r from-ember-300 via-ember-400 to-ember-600 bg-clip-text text-transparent">
                fabrication work
              </span>
              <svg
                viewBox="0 0 300 12"
                className="absolute -bottom-1.5 left-0 w-full text-ember-500/45"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8c60-5 120-6 180-3s90 4 116 1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            done right the first time.
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-steel-300">
            Gates, grills, railings, sheds, shutters and industrial steel work — measured at your
            site, built in our workshop, fitted by our own team. Anywhere in Jaipur.
          </p>
          <p className="mt-2 text-base font-medium text-steel-400">
            {site.taglineHi} — भरोसे के साथ, तय समय पर.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={telUrl()} icon={<Icon name="phone" className="size-4" />} className="px-6 py-4 text-base">
              Call {site.phone}
            </Button>
            <Button
              href={whatsappUrl("Hello, I would like a free site visit and quote for fabrication work.")}
              variant="outline"
              icon={<Icon name="whatsapp" className="size-4" />}
              className="px-6 py-4 text-base"
            >
              Get a free quote
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-steel-400">
            <span className="flex items-center gap-2">
              <Stars />
              <span className="font-semibold text-steel-200">Trusted by 1200+ customers</span>
            </span>
            <span className="hidden h-4 w-px bg-white/10 sm:block" />
            <span className="flex items-center gap-2">
              <Icon name="check" className="size-4 text-ember-400" strokeWidth={2.4} />
              No advance for measurement
            </span>
          </div>
        </div>

        {/* Product line-art composition instead of stock photography */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-ember-500/20 via-transparent to-sky-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-steel-800/80 to-steel-900/90 p-8 shadow-2xl shadow-black/50 backdrop-blur">
              <div className="bg-grid absolute inset-0 opacity-40" />

              <Motif name="gate" className="relative w-full text-ember-400/90 drop-shadow-[0_0_18px_rgba(245,158,11,0.28)]" />

              {/* Sparks off the weld */}
              <span className="animate-spark absolute right-10 top-12 size-1.5 rounded-full bg-ember-300" />
              <span className="animate-spark absolute left-12 top-24 size-1 rounded-full bg-ember-400 [animation-delay:1.2s]" />
              <span className="animate-spark absolute right-20 bottom-24 size-1 rounded-full bg-ember-300 [animation-delay:2.1s]" />

              <div className="relative mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-extrabold tracking-tight text-white">{s.value}</p>
                    <p className="mt-1 text-[11px] font-medium leading-tight text-steel-400">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-white/10 bg-steel-900/95 px-4 py-3 shadow-xl backdrop-blur sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-steel-500">
                Estimate in
              </p>
              <p className="text-lg font-extrabold text-ember-400">24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
