import Icon from "@/components/Icon";
import { Button } from "@/components/ui";
import { telUrl } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-blueprint bg-paper">
      <div className="mx-auto max-w-[88rem] px-5 py-28 sm:px-8 lg:py-40">
        <p className="num text-[clamp(5rem,18vw,13rem)] font-semibold leading-none text-rust">404</p>
        <h1 className="mt-8 max-w-2xl text-balance text-4xl sm:text-5xl lg:text-6xl">
          This gate doesn&rsquo;t open.
        </h1>
        <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted">
          The page you were looking for isn&rsquo;t here. Head back home, or just call us — it is
          usually quicker anyway.
        </p>
        <div className="mt-10 flex flex-col gap-px sm:flex-row sm:gap-0">
          <Button href="/" iconAfter={<Icon name="arrow" className="size-4" />}>
            Back to home
          </Button>
          <Button href={telUrl()} variant="ink" icon={<Icon name="phone" className="size-4" />}>
            Call the workshop
          </Button>
        </div>
      </div>
    </section>
  );
}
