import Link from "next/link";
import Icon from "./Icon";

/* ---------------------------------- Logo --------------------------------- */

export function Logo({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  const text = tone === "paper" ? "text-white" : "text-ink";
  const sub = tone === "paper" ? "text-white/55" : "text-muted";

  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Iron Rod Fabrication — home">
      <span className="grid size-9 shrink-0 place-items-center bg-rust text-white">
        {/* Arched gate with bars — the shop's most recognisable product */}
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeLinecap="square">
            <path d="M4 19V9a8 8 0 0 1 16 0v10" strokeWidth="2" />
            <path d="M2.5 19.5h19" strokeWidth="2" />
            <path d="M12 3.5V19M8 5.6V19M16 5.6V19M4.6 12h14.8" strokeWidth="1.3" opacity=".9" />
          </g>
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[15px] font-extrabold tracking-tight ${text}`}>
          IRON ROD FABRICATION
        </span>
        <span className={`label mt-1.5 block text-[9px] tracking-[0.22em] ${sub}`}>
          Jagatpura · Jaipur
        </span>
      </span>
    </Link>
  );
}

/* --------------------------------- Buttons -------------------------------- */

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "rust" | "ink" | "outline" | "paper";
  className?: string;
  icon?: React.ReactNode;
  iconAfter?: React.ReactNode;
};

const variants = {
  rust: "bg-rust text-white hover:bg-rust-dark",
  ink: "bg-ink text-paper hover:bg-ink-2",
  paper: "bg-white text-ink hover:bg-paper-2",
  outline: "border border-current text-ink hover:bg-ink hover:text-paper hover:border-ink",
};

export function Button({
  href,
  children,
  variant = "rust",
  className = "",
  icon,
  iconAfter,
}: ButtonProps) {
  // Sharp corners throughout — the whole design language avoids soft radii
  const cls = `group inline-flex items-center justify-center gap-2.5 px-6 py-4 font-display text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`;
  const isExternal = /^(https?:|tel:|mailto:)/.test(href);

  if (isExternal) {
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

/** Mono index label with a leading rule — the recurring section marker. */
export function Eyebrow({
  children,
  tone = "ink",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <span
      className={`label flex items-center gap-3 ${
        tone === "paper" ? "text-white/60" : "text-rust-dark"
      } ${className}`}
    >
      <span
        className={`h-px w-8 ${tone === "paper" ? "bg-white/30" : "bg-rust/40"}`}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "ink",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-6 max-w-3xl text-balance text-4xl sm:text-5xl lg:text-[3.75rem] ${
          tone === "paper" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 max-w-xl text-pretty text-base leading-relaxed ${
            tone === "paper" ? "text-white/65" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span role="img" aria-label="5 out of 5 stars" className={`flex gap-1 text-rust ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className="size-3.5 fill-rust" strokeWidth={1} />
      ))}
    </span>
  );
}

/** Editorial text link with an underline that draws in on hover. */
export function TextLink({
  href,
  children,
  tone = "ink",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "ink" | "paper" | "rust";
}) {
  const colour =
    tone === "paper" ? "text-white" : tone === "rust" ? "text-rust" : "text-ink";
  const isExternal = /^(https?:|tel:|mailto:)/.test(href);
  const cls = `link-rule inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide ${colour}`;
  const inner = (
    <>
      {children}
      <Icon name="arrow" className="size-4" strokeWidth={2} />
    </>
  );

  return isExternal ? (
    <a
      href={href}
      className={cls}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
