import Image from "next/image";
import Icon from "../Icon";
import { Button, Stars } from "../ui";
import { img } from "@/lib/images";
import { site, telUrl, whatsappUrl } from "@/lib/site";

const specs = [
  { k: "Established", v: "2005" },
  { k: "Jobs delivered", v: "1200+" },
  { k: "Site visit", v: "Free" },
  { k: "Estimate in", v: "24 hrs" },
];

export default function Hero() {
  return (
    <section className="relative">
      {/* The header sits over this block, so the image starts at the top of the page */}
      <div className="relative -mt-[4.75rem] min-h-[88svh] w-full lg:-mt-[5.25rem] lg:min-h-[92svh]">
        <Image
          src={img.heroWelder}
          alt="Fabricator welding a steel section, sparks flying"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-center"
        />
        {/* Two scrims: one for overall legibility, one to anchor the text corner */}
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-[88rem] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:min-h-[92svh] lg:pb-20">
          <p className="label flex items-center gap-3 text-white/70">
            <span className="h-px w-8 bg-rust" aria-hidden="true" />
            Jagatpura, Jaipur · Since 2005
          </p>

          <h1 className="mt-7 max-w-4xl text-balance text-[clamp(2.6rem,8.5vw,6.25rem)] leading-[0.94] text-white">
            Complete fabrication work,
            <br className="hidden sm:block" />{" "}
            <span className="text-rust">done right the first time.</span>
          </h1>

          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            Gates, grills, railings, sheds, shutters and industrial steel work — measured at your
            site, built in our workshop, fitted by our own team.
          </p>

          <div className="mt-10 flex flex-col gap-px sm:flex-row sm:gap-0">
            <Button href={telUrl()} icon={<Icon name="phone" className="size-4" />}>
              Call {site.phone}
            </Button>
            <Button
              href={whatsappUrl("Hello, I would like a free site visit and quote for fabrication work.")}
              variant="paper"
              icon={<Icon name="whatsapp" className="size-4" />}
            >
              Get a free quote
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Stars />
            <span className="label text-[10px] text-white/70">
              Trusted by 1200+ customers across Jaipur
            </span>
          </div>
        </div>
      </div>

      {/* Spec bar — a technical strip that bridges the dark hero and the paper body */}
      <div className="border-b border-line bg-paper">
        <dl className="mx-auto grid max-w-[88rem] grid-cols-2 gap-px bg-line sm:grid-cols-4">
          {specs.map((s) => (
            <div key={s.k} className="bg-paper px-5 py-7 sm:px-8">
              <dt className="label text-[10px] text-muted">{s.k}</dt>
              <dd className="num mt-2 text-2xl font-semibold text-ink sm:text-3xl">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
