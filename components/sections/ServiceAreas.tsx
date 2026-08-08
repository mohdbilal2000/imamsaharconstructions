import Icon from "../Icon";
import Reveal from "../Reveal";
import { site } from "@/lib/site";

export default function ServiceAreas() {
  return (
    <section className="border-t border-line bg-paper-2 py-14">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl">We come to your site — all over Jaipur.</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                Based in Jagatpura, working across the city and nearby towns. No travel charge for
                measurement.
              </p>
            </div>

            <ul className="flex flex-wrap gap-2 lg:col-span-8 lg:justify-end">
              {site.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="label inline-flex items-center gap-1.5 border border-line-strong bg-paper px-3.5 py-2.5 text-[10px] text-ink-2"
                >
                  <Icon name="pin" className="size-3.5 text-rust" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
