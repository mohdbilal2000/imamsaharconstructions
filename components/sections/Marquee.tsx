const items = [
  "Main Gates",
  "Window Grills",
  "SS Railings",
  "Parking Sheds",
  "Rolling Shutters",
  "Spiral Staircases",
  "Steel Doors",
  "Balcony Jaali",
  "Water Tank Stands",
  "Site Welding",
  "Shop Fronts",
  "Truss Work",
];

export default function Marquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-steel-900/60 py-4"
      aria-label="What we fabricate"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-steel-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-steel-950 to-transparent" />

      {/* Duplicated list so the -50% translation loops seamlessly */}
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-steel-400">
              {item}
            </span>
            <span className="size-1.5 rotate-45 bg-ember-500/70" />
          </span>
        ))}
      </div>
    </section>
  );
}
