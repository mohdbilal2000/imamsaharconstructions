import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import Faq from "@/components/sections/Faq";
import { Eyebrow } from "@/components/ui";
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
            Free site visit, <span className="text-rust">free estimate.</span>
          </>
        }
        subtitle="Send the details once and we will call you back with a rate. Anywhere in Jaipur, no charge for measurement."
      />

      <section className="border-b border-line bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          {/* Contact channels */}
          <div className="lg:col-span-5">
            <Eyebrow>01 — Reach us</Eyebrow>

            <div className="mt-8 border-t border-line">
              <Reveal>
                <a href={telUrl()} className="group flex items-start gap-5 border-b border-line py-7">
                  <span className="grid size-11 shrink-0 place-items-center bg-rust text-white">
                    <Icon name="phone" className="size-5" />
                  </span>
                  <span>
                    <span className="label block text-[10px] text-muted">Call us</span>
                    <span className="num mt-1.5 block text-xl font-semibold text-ink transition-colors group-hover:text-rust">
                      {site.phone}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
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
                  className="group flex items-start gap-5 border-b border-line py-7"
                >
                  <span className="grid size-11 shrink-0 place-items-center bg-ink text-white">
                    <Icon name="whatsapp" className="size-5" />
                  </span>
                  <span>
                    <span className="label block text-[10px] text-muted">WhatsApp</span>
                    <span className="mt-1.5 block font-display text-xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-rust">
                      Send photos & sizes
                    </span>
                    <span className="mt-1 block text-sm text-muted">
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
                  className="group flex items-start gap-5 border-b border-line py-7"
                >
                  <span className="grid size-11 shrink-0 place-items-center border border-line-strong text-rust">
                    <Icon name="pin" className="size-5" />
                  </span>
                  <span>
                    <span className="label block text-[10px] text-muted">Workshop</span>
                    <span className="mt-1.5 block text-[15px] font-semibold leading-relaxed text-ink transition-colors group-hover:text-rust">
                      {site.address.line1}, {site.address.line2}
                      <br />
                      {site.address.city}, {site.address.state} {site.address.postalCode}
                    </span>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={180}>
                <div className="flex items-start gap-5 border-b border-line py-7">
                  <span className="grid size-11 shrink-0 place-items-center border border-line-strong text-rust">
                    <Icon name="clock" className="size-5" />
                  </span>
                  <div>
                    <span className="label block text-[10px] text-muted">Working hours</span>
                    <dl className="mt-2 space-y-1 text-sm">
                      {site.hours.map((h) => (
                        <div key={h.days} className="flex flex-wrap gap-x-3">
                          <dt className="text-muted">{h.days}</dt>
                          <dd className="num font-medium text-ink">{h.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-5 border-b border-line py-7"
                >
                  <span className="grid size-11 shrink-0 place-items-center border border-line-strong text-rust">
                    <Icon name="mail" className="size-5" />
                  </span>
                  <span>
                    <span className="label block text-[10px] text-muted">Email</span>
                    <span className="mt-1.5 block break-all text-[15px] font-semibold text-ink transition-colors group-hover:text-rust">
                      {site.email}
                    </span>
                  </span>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <div className="border border-line bg-paper-2/50 p-7 sm:p-10">
                <Eyebrow>02 — Request a quote</Eyebrow>
                <h2 className="mt-6 text-3xl sm:text-4xl">Tell us what you need.</h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                  Fill this in and it goes straight to our WhatsApp — no waiting for an email
                  reply.
                </p>
                <div className="mt-9">
                  <QuoteForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-b border-line bg-paper">
        <Reveal>
          <iframe
            src={mapSrc}
            title={`Map showing ${site.name} in Jagatpura, Jaipur`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full border-0 bg-paper-2 grayscale-[45%] contrast-105"
            allowFullScreen
          />
        </Reveal>
      </section>

      <Faq eyebrow="03 — FAQ" />
    </>
  );
}
