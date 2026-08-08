import Icon from "../Icon";
import { Button } from "../ui";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export default function Cta() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-ember-500/20 bg-linear-to-br from-steel-800 via-steel-900 to-steel-950 px-7 py-14 text-center shadow-2xl shadow-black/40 sm:px-12">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-ember-500/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 size-72 rounded-full bg-ember-700/15 blur-[90px]" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Tell us the work. We&rsquo;ll measure it{" "}
              <span className="text-ember-400">free of cost.</span>
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-steel-300">
              One call is enough. We come to your site anywhere in Jaipur, take the measurements
              and give you a written rate the same day.
            </p>
            <p className="mt-2 text-sm font-medium text-steel-400">
              एक कॉल कीजिए — नाप और एस्टीमेट बिल्कुल फ्री.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={telUrl()} icon={<Icon name="phone" className="size-4" />} className="px-6 py-4 text-base">
                Call {site.phone}
              </Button>
              <Button
                href={whatsappUrl()}
                variant="outline"
                icon={<Icon name="whatsapp" className="size-4" />}
                className="px-6 py-4 text-base"
              >
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
