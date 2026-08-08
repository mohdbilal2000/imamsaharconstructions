import Icon from "../Icon";
import Reveal from "../Reveal";
import { site } from "@/lib/site";

export default function ServiceAreas() {
  return (
    <section className="border-y border-white/10 bg-steel-900/40 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-md">
              <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                We come to your site — all over Jaipur
              </h2>
              <p className="mt-2 text-sm text-steel-400">
                Based in Jagatpura, working across the city and nearby towns. No travel charge for
                measurement.
              </p>
            </div>

            <ul className="flex flex-wrap justify-center gap-2 lg:justify-end">
              {site.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-steel-950/60 px-3.5 py-2 text-xs font-semibold text-steel-300"
                >
                  <Icon name="pin" className="size-3.5 text-ember-500" />
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
