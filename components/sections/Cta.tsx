import Image from "next/image";
import Icon from "../Icon";
import { Button } from "../ui";
import { img } from "@/lib/images";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export default function Cta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image
        src={img.ctaSparks}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-center opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />

      <div className="relative mx-auto max-w-[88rem] px-5 py-24 sm:px-8 lg:py-32">
        <p className="label flex items-center gap-3 text-white/60">
          <span className="h-px w-8 bg-rust" aria-hidden="true" />
          Free site visit · Free estimate
        </p>

        <h2 className="mt-7 max-w-3xl text-balance text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.96] text-white">
          Tell us the work. We&rsquo;ll measure it{" "}
          <span className="text-rust">free of cost.</span>
        </h2>

        <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
          One call is enough. We come to your site anywhere in Jaipur, take the measurements and
          give you a written rate the same day.
        </p>
        <p className="mt-2 text-[15px] text-white/50">
          एक कॉल कीजिए — नाप और एस्टीमेट बिल्कुल फ्री.
        </p>

        <div className="mt-11 flex flex-col gap-px sm:flex-row sm:gap-0">
          <Button href={telUrl()} icon={<Icon name="phone" className="size-4" />}>
            Call {site.phone}
          </Button>
          <Button
            href={whatsappUrl()}
            variant="paper"
            icon={<Icon name="whatsapp" className="size-4" />}
          >
            Message on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
