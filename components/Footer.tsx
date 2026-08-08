import Link from "next/link";
import Icon from "./Icon";
import { services } from "@/lib/content";
import { mapsUrl, site, telUrl, whatsappUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        {/* Oversized wordmark — the sign over the workshop door */}
        <div className="border-b border-white/12 py-14 lg:py-20">
          <p className="font-display text-[clamp(2.25rem,9vw,7rem)] font-extrabold leading-[0.9] tracking-tighter text-white">
            IRON ROD
            <br />
            <span className="text-rust">FABRICATION</span>
          </p>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Complete iron and steel fabrication in Jaipur — gates, grills, railings, sheds,
              shutters and site work. Measured properly, built properly, fitted properly.
            </p>
            <div className="mt-7 flex flex-wrap gap-px">
              <a
                href={telUrl()}
                className="inline-flex items-center gap-2 bg-rust px-5 py-3.5 font-display text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-rust-dark"
              >
                <Icon name="phone" className="size-4" />
                {site.phone}
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/25 px-5 py-3.5 font-display text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ink"
              >
                <Icon name="whatsapp" className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="label text-[10px] text-white/55">Services</h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-white/65 transition-colors hover:text-rust-light"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="font-semibold text-rust-light hover:text-white">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="label text-[10px] text-white/55">Company</h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                { href: "/about", label: "About us" },
                { href: "/gallery", label: "Our work" },
                { href: "/contact", label: "Contact" },
                { href: "/#process", label: "How we work" },
                { href: "/#faq", label: "FAQs" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/65 transition-colors hover:text-rust-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="label text-[10px] text-white/55">Workshop</h2>
            <ul className="mt-5 space-y-5 text-sm text-white/65">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-rust-light" />
                <a href={mapsUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-rust-light">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.state}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-rust-light" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="mb-2 block last:mb-0">
                      {h.days}
                      <br />
                      <span className="num text-white/90">{h.time}</span>
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="label flex flex-col items-center justify-between gap-3 border-t border-white/12 py-7 text-[10px] text-white/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name} · All rights reserved
          </p>
          <p>Jagatpura · Malviya Nagar · Sitapura · All Jaipur</p>
        </div>
      </div>
    </footer>
  );
}
