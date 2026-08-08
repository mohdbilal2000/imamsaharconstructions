import Link from "next/link";
import Icon from "./Icon";

/* ---------------------------------- Logo --------------------------------- */

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label="Iron Rod Fabrication — home"
    >
      <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-linear-to-br from-ember-400 to-ember-600 shadow-lg shadow-ember-600/25 ring-1 ring-white/20">
        {/* Arched gate with bars — the shop's most recognisable product */}
        <svg viewBox="0 0 24 24" className="size-6 text-steel-950" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19V9a8 8 0 0 1 16 0v10" strokeWidth="2" />
            <path d="M2.5 19h19" strokeWidth="2" />
            <path d="M12 4v15M8 6.2V19M16 6.2V19" strokeWidth="1.4" opacity=".85" />
            <path d="M4.6 12h14.8" strokeWidth="1.4" opacity=".85" />
          </g>
        </svg>
      </span>
      <span className="leading-none">
        <span className="block text-[15px] font-extrabold tracking-tight text-white">
          Iron Rod <span className="text-ember-400">Fabrication</span>
        </span>
        <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-steel-400">
          Jagatpura, Jaipur
        </span>
      </span>
    </Link>
  );
}

/* --------------------------------- Buttons -------------------------------- */

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  external?: boolean;
  icon?: React.ReactNode;
  /** Rendered after the label — use for "next step" arrows */
  iconAfter?: React.ReactNode;
};

const variants = {
  primary:
    "bg-linear-to-b from-ember-400 to-ember-600 text-steel-950 shadow-lg shadow-ember-600/25 hover:shadow-xl hover:shadow-ember-600/35 hover:brightness-110 active:brightness-95",
  outline:
    "border border-steel-600 bg-steel-900/60 text-steel-100 backdrop-blur hover:border-ember-500/70 hover:bg-steel-800 hover:text-white",
  ghost: "text-steel-200 hover:bg-white/5 hover:text-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
  icon,
  iconAfter,
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold tracking-tight transition-all duration-200 ${variants[variant]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {icon}
        {children}
        {iconAfter}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {icon}
      {children}
      {iconAfter}
    </Link>
  );
}

/* ------------------------------ Section parts ----------------------------- */

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ember-500/25 bg-ember-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ember-300">
      <span className="size-1.5 rounded-full bg-ember-400" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-steel-400">{subtitle}</p>
      )}
    </div>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span role="img" aria-label="5 out of 5 stars" className={`flex gap-0.5 text-ember-400 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className="size-4 fill-ember-400" strokeWidth={1.2} />
      ))}
    </span>
  );
}
