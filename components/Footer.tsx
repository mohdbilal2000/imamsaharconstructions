import Link from "next/link";
import Icon from "./Icon";
import { Logo } from "./ui";
import { services } from "@/lib/content";
import { mapsUrl, site, telUrl, whatsappUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-steel-950">
      <div className="hairline absolute inset-x-0 top-0 h-px" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel-400">
            Complete iron and steel fabrication in Jaipur — gates, grills, railings, sheds,
            shutters and site work. Measured properly, built properly, fitted properly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={telUrl()}
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-b from-ember-400 to-ember-600 px-4 py-2.5 text-sm font-bold text-steel-950 transition hover:brightness-110"
            >
              <Icon name="phone" className="size-4" />
              {site.phone}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-bold text-emerald-300 transition hover:bg-emerald-500/20"
            >
              <Icon name="whatsapp" className="size-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-steel-500">Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="text-steel-400 transition hover:text-ember-400"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-semibold text-ember-400 hover:text-ember-300">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-steel-500">Company</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[
              { href: "/about", label: "About us" },
              { href: "/gallery", label: "Our work" },
              { href: "/contact", label: "Contact" },
              { href: "/#process", label: "How we work" },
              { href: "/#faq", label: "FAQs" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-steel-400 transition hover:text-ember-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-steel-500">
            Workshop
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-steel-400">
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-ember-500" />
              <a href={mapsUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-ember-400">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city}, {site.address.state}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-ember-500" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}
                    <br />
                    <span className="text-steel-300">{h.time}</span>
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-steel-500 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Serving Jagatpura, Malviya Nagar, Sitapura & all of Jaipur.</p>
        </div>
      </div>
    </footer>
  );
}
