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
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-32 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-ember-600/12 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs font-semibold text-steel-500">
          <Link href="/" className="transition hover:text-ember-400">
            Home
          </Link>
          <span className="mx-2 text-steel-700">/</span>
          <span className="text-steel-300">{breadcrumb}</span>
        </nav>

        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-steel-400">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
