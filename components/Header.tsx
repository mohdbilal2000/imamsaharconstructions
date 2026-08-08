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
  { href: "/gallery", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // The home hero is a full-bleed dark photo, so the bar starts transparent there
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const transparent = overHero && !scrolled;

  return (
    <>
      {/* Utility strip — address and hours, the two things people scan for */}
      <aside
        aria-label="Shop address and hours"
        className="hidden bg-ink text-white/70 lg:block"
      >
        <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-8 py-2.5">
          <p className="label flex items-center gap-2 text-[10px] text-white/55">
            <Icon name="pin" className="size-3.5 text-rust" />
            {site.addressLine}
          </p>
          <div className="label flex items-center gap-7 text-[10px] text-white/55">
            <span className="flex items-center gap-2">
              <Icon name="clock" className="size-3.5 text-rust" />
              Mon–Sat 9:00–20:00
            </span>
            <a href={telUrl()} className="flex items-center gap-2 text-white transition hover:text-rust-light">
              <Icon name="phone" className="size-3.5 text-rust" />
              {site.phone}
            </a>
          </div>
        </div>
      </aside>

      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          transparent ? "bg-transparent" : "border-b border-line bg-paper/95 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <Logo tone={transparent ? "paper" : "ink"} />

          <nav className="hidden items-center lg:flex" aria-label="Main">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-4 py-2 font-display text-[13px] font-bold uppercase tracking-wide transition-colors ${
                    transparent
                      ? active
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      : active
                        ? "text-ink"
                        : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-4 bottom-0 h-0.5 bg-rust" aria-hidden="true" />
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
              className={`hidden size-11 place-items-center border transition-colors sm:grid ${
                transparent
                  ? "border-white/25 text-white hover:bg-white hover:text-ink"
                  : "border-line-strong text-ink hover:bg-ink hover:text-paper"
              }`}
              aria-label="Message us on WhatsApp"
            >
              <Icon name="whatsapp" className="size-5" />
            </a>
            <a
              href={telUrl()}
              className="hidden items-center gap-2.5 bg-rust px-5 py-3.5 font-display text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-rust-dark md:inline-flex"
            >
              <Icon name="phone" className="size-4" />
              Call now
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`grid size-11 place-items-center border transition-colors lg:hidden ${
                open || !transparent
                  ? "border-line-strong text-ink"
                  : "border-white/25 text-white"
              }`}
            >
              <Icon name={open ? "close" : "menu"} className="size-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 lg:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/60 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className={`absolute inset-x-0 top-0 border-b border-line bg-paper px-5 pb-8 pt-24 shadow-2xl transition-transform duration-300 ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="divide-y divide-line border-y border-line">
            {nav.map((item, i) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-baseline gap-4 py-4 font-display text-2xl font-extrabold tracking-tight transition-colors ${
                      active ? "text-rust" : "text-ink"
                    }`}
                  >
                    <span className="num text-[11px] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-px bg-line">
            <a
              href={telUrl()}
              className="inline-flex items-center justify-center gap-2 bg-rust px-4 py-4 font-display text-sm font-bold uppercase tracking-wide text-white"
            >
              <Icon name="phone" className="size-4" />
              Call
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ink px-4 py-4 font-display text-sm font-bold uppercase tracking-wide text-paper"
            >
              <Icon name="whatsapp" className="size-4" />
              WhatsApp
            </a>
          </div>

          <p className="label mt-6 text-center text-[10px] leading-relaxed text-muted">
            {site.addressLine}
          </p>
        </nav>
      </div>
    </>
  );
}
