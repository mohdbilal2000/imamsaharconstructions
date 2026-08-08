import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import Faq from "@/components/sections/Faq";
import { mapsUrl, site, telUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description: `Contact ${site.name} in Jagatpura, Jaipur for a free site visit and written estimate. Call ${site.phone} or message on WhatsApp.`,
  alternates: { canonical: "/contact" },
};

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=15&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in touch"
        title={
          <>
            Free site visit, <span className="text-ember-400">free estimate</span>
          </>
        }
        subtitle="Send the details once and we will call you back with a rate. Anywhere in Jaipur, no charge for measurement."
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12">
          {/* Contact cards */}
          <div className="space-y-4 lg:col-span-5">
            <Reveal>
              <a
                href={telUrl()}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-linear-to-br from-ember-500/12 to-transparent p-6 transition hover:border-ember-500/40"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-ember-500/15 text-ember-400">
                  <Icon name="phone" className="size-6" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-steel-500">
                    Call us
                  </span>
                  <span className="mt-1 block text-lg font-extrabold text-white group-hover:text-ember-400">
                    {site.phone}
                  </span>
                  <span className="mt-1 block text-xs text-steel-400">
                    Fastest way to reach the workshop
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={60}>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-linear-to-br from-emerald-500/12 to-transparent p-6 transition hover:border-emerald-500/40"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <Icon name="whatsapp" className="size-6" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-steel-500">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-lg font-extrabold text-white group-hover:text-emerald-400">
                    Send photos & sizes
                  </span>
                  <span className="mt-1 block text-xs text-steel-400">
                    Best for sharing a picture of the spot
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={120}>
              <a
                href={mapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-steel-900/50 p-6 transition hover:border-ember-500/30"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/5 text-ember-400">
                  <Icon name="pin" className="size-6" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-steel-500">
                    Workshop
                  </span>
                  <span className="mt-1 block text-[15px] font-bold leading-relaxed text-white group-hover:text-ember-400">
                    {site.address.line1}, {site.address.line2}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.postalCode}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-steel-900/50 p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/5 text-ember-400">
                  <Icon name="clock" className="size-6" />
                </span>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-steel-500">
                    Working hours
                  </span>
                  <dl className="mt-2 space-y-1 text-sm">
                    {site.hours.map((h) => (
                      <div key={h.days} className="flex flex-wrap gap-x-2">
                        <dt className="text-steel-400">{h.days}</dt>
                        <dd className="font-semibold text-white">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-steel-900/50 p-6 transition hover:border-ember-500/30"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/5 text-ember-400">
                  <Icon name="mail" className="size-6" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-steel-500">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm font-bold text-white group-hover:text-ember-400">
                    {site.email}
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          {/* Enquiry form */}
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <div className="rounded-3xl border border-white/10 bg-linear-to-b from-steel-800/60 to-steel-900/70 p-7 shadow-2xl shadow-black/30 sm:p-9">
                <h2 className="text-2xl font-extrabold tracking-tight text-white">
                  Request a quote
                </h2>
                <p className="mt-2 text-sm text-steel-400">
                  Fill this in and it goes straight to our WhatsApp — no waiting for an email
                  reply.
                </p>
                <div className="mt-8">
                  <QuoteForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-steel-900">
              <iframe
                src={mapSrc}
                title={`Map showing ${site.name} in Jagatpura, Jaipur`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full border-0 bg-steel-900 grayscale-[35%] contrast-110"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Faq />
    </>
  );
}
