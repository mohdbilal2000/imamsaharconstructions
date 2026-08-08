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

export default function Ticker() {
  return (
    <section className="overflow-hidden border-y border-line bg-paper-2 py-3.5" aria-label="What we fabricate">
      {/* The list is duplicated so the -50% translation loops seamlessly */}
      <div className="animate-ticker flex w-max items-center">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="label px-6 text-[10px] text-ink-2">{item}</span>
            <span className="size-1 rotate-45 bg-rust" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
