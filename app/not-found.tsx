import Icon from "@/components/Icon";
import Motif from "@/components/Motif";
import { Button } from "@/components/ui";
import { telUrl } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-0 size-[30rem] -translate-x-1/2 rounded-full bg-ember-600/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center sm:px-6 lg:py-32">
        <Motif name="gate" className="w-56 text-steel-700" />
        <p className="mt-8 text-6xl font-extrabold tracking-tight text-ember-400">404</p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          This gate doesn&rsquo;t open
        </h1>
        <p className="mt-4 text-base leading-relaxed text-steel-400">
          The page you were looking for isn&rsquo;t here. Head back home, or just call us — it is
          usually quicker anyway.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/" iconAfter={<Icon name="arrow" className="size-4" />}>
            Back to home
          </Button>
          <Button href={telUrl()} variant="outline" icon={<Icon name="phone" className="size-4" />}>
            Call the workshop
          </Button>
        </div>
      </div>
    </section>
  );
}
