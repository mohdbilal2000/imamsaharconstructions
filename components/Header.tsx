"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { Logo } from "./ui";
import { site, telUrl, whatsappUrl } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation, and never leave the body locked behind it.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Utility strip — the phone number is the single most useful thing here */}
      <aside
        aria-label="Shop address and contact"
        className="hidden border-b border-white/5 bg-steel-950 lg:block"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs text-steel-400">
          <p className="flex items-center gap-2">
            <Icon name="pin" className="size-3.5 text-ember-500" />
            {site.addressLine}
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Icon name="clock" className="size-3.5 text-ember-500" />
              Mon–Sat 9:00 AM – 8:00 PM
            </span>
            <a
              href={telUrl()}
              className="flex items-center gap-2 font-semibold text-steel-200 transition hover:text-ember-400"
            >
              <Icon name="phone" className="size-3.5 text-ember-500" />
              {site.phone}
            </a>
          </div>
        </div>
      </aside>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-steel-950/85 shadow-lg shadow-black/30 backdrop-blur-xl"
            : "border-b border-transparent bg-steel-950/40 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                    active ? "text-white" : "text-steel-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-ember-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-bold text-emerald-300 transition hover:bg-emerald-500/20 sm:inline-flex"
            >
              <Icon name="whatsapp" className="size-4" />
              WhatsApp
            </a>
            <a
              href={telUrl()}
              className="hidden items-center gap-2 rounded-xl bg-linear-to-b from-ember-400 to-ember-600 px-4 py-2.5 text-sm font-bold text-steel-950 shadow-lg shadow-ember-600/25 transition hover:brightness-110 md:inline-flex"
            >
              <Icon name="phone" className="size-4" />
              Call Now
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="size-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className={`absolute inset-x-0 top-0 origin-top border-b border-white/10 bg-steel-900 px-5 pb-6 pt-24 shadow-2xl transition-transform duration-300 ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="space-y-1">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition ${
                      active
                        ? "bg-ember-500/12 text-ember-300"
                        : "text-steel-200 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <Icon name="arrow" className="size-4 opacity-50" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={telUrl()}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-b from-ember-400 to-ember-600 px-4 py-3.5 text-sm font-bold text-steel-950"
            >
              <Icon name="phone" className="size-4" />
              Call
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3.5 text-sm font-bold text-emerald-300"
            >
              <Icon name="whatsapp" className="size-4" />
              WhatsApp
            </a>
          </div>

          <p className="mt-5 text-center text-xs leading-relaxed text-steel-500">
            {site.addressLine}
          </p>
        </nav>
      </div>
    </>
  );
}
