import Link from "next/link";
import { Eyebrow } from "./ui";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumb: string;
}) {
  return (
    <section className="bg-blueprint border-b border-line bg-paper">
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 lg:py-24">
        <nav aria-label="Breadcrumb" className="label mb-9 text-[10px] text-muted">
          <Link href="/" className="transition-colors hover:text-rust-dark">
            Home
          </Link>
          <span className="mx-2.5 text-line-strong">/</span>
          <span className="text-ink">{breadcrumb}</span>
        </nav>

        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-7 max-w-4xl text-balance text-[clamp(2.5rem,6.5vw,5rem)] leading-[0.95]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
