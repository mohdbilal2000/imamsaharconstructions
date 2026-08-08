import type { MotifKey } from "@/lib/content";

/**
 * Line-art motifs of the actual products. Iron work is geometry, so drawing it
 * beats stock photography here: it is sharp at any size, weighs nothing, and
 * every card stays visually consistent.
 */

const common = {
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

function Gate() {
  const bars = [42, 58, 74, 90, 110, 126, 142, 158];
  return (
    <>
      <path d="M26 132V54c0-14 16-26 36-26h76c20 0 36 12 36 26v78" strokeWidth="3" {...common} />
      <path d="M14 132h172" strokeWidth="3" {...common} />
      <path d="M100 34v98" strokeWidth="2.5" {...common} />
      {bars.map((x) => (
        <path key={x} d={`M${x} ${x > 96 && x < 104 ? 34 : 40}v92`} strokeWidth="1.5" {...common} opacity="0.75" />
      ))}
      <path d="M30 74h140M30 104h140" strokeWidth="2" {...common} />
      <path d="M62 104c8-14 30-14 38 0M100 104c8-14 30-14 38 0" strokeWidth="1.5" {...common} opacity="0.7" />
    </>
  );
}

function Grill() {
  return (
    <>
      <rect x="26" y="22" width="148" height="112" rx="4" strokeWidth="3" {...common} />
      <rect x="38" y="34" width="124" height="88" rx="2" strokeWidth="1.5" {...common} opacity="0.6" />
      <path d="M100 34v88M38 78h124" strokeWidth="2" {...common} />
      <path d="M38 34l62 44M162 34l-62 44M38 122l62-44M162 122l-62-44" strokeWidth="1.5" {...common} opacity="0.55" />
      <circle cx="100" cy="78" r="11" strokeWidth="2" {...common} />
      <circle cx="69" cy="56" r="5" strokeWidth="1.5" {...common} opacity="0.7" />
      <circle cx="131" cy="56" r="5" strokeWidth="1.5" {...common} opacity="0.7" />
      <circle cx="69" cy="100" r="5" strokeWidth="1.5" {...common} opacity="0.7" />
      <circle cx="131" cy="100" r="5" strokeWidth="1.5" {...common} opacity="0.7" />
    </>
  );
}

function Railing() {
  const posts = [40, 60, 80, 100, 120, 140, 160];
  return (
    <>
      <path d="M18 44h164" strokeWidth="4" {...common} />
      <path d="M18 58h164" strokeWidth="1.5" {...common} opacity="0.6" />
      <path d="M18 130h164" strokeWidth="3" {...common} />
      <path d="M26 44v86M174 44v86" strokeWidth="3.5" {...common} />
      {posts.map((x) => (
        <path key={x} d={`M${x} 58v72`} strokeWidth="1.75" {...common} opacity="0.75" />
      ))}
      <path d="M18 96h164" strokeWidth="1.5" {...common} opacity="0.45" />
      <circle cx="26" cy="38" r="5" strokeWidth="2" {...common} />
      <circle cx="174" cy="38" r="5" strokeWidth="2" {...common} />
    </>
  );
}

function Shed() {
  return (
    <>
      <path d="M14 52 100 22l86 30" strokeWidth="3.5" {...common} />
      <path d="M14 64 100 34l86 30" strokeWidth="1.5" {...common} opacity="0.55" />
      <path d="M28 58v76M172 58v76M100 30v18" strokeWidth="3" {...common} />
      <path d="M10 134h180" strokeWidth="3" {...common} />
      <path d="M28 76h144" strokeWidth="2" {...common} opacity="0.8" />
      <path d="M28 76l36-13M64 63l36 13M100 76l36-13M136 63l36 13" strokeWidth="1.5" {...common} opacity="0.6" />
      <path d="M64 63v13M136 63v13" strokeWidth="1.5" {...common} opacity="0.6" />
      <path d="M46 96v38M154 96v38" strokeWidth="1.5" {...common} opacity="0.4" />
    </>
  );
}

function Shutter() {
  const slats = [44, 56, 68, 80, 92, 104, 116];
  return (
    <>
      <rect x="24" y="20" width="152" height="20" rx="6" strokeWidth="3" {...common} />
      <circle cx="100" cy="30" r="6" strokeWidth="2" {...common} />
      <path d="M30 40v96M170 40v96" strokeWidth="3.5" {...common} />
      {slats.map((y) => (
        <path key={y} d={`M36 ${y}h128`} strokeWidth="2" {...common} opacity={y > 100 ? 0.45 : 0.8} />
      ))}
      <path d="M36 128h128" strokeWidth="3" {...common} />
      <path d="M92 128v8h16v-8" strokeWidth="2" {...common} />
      <path d="M18 140h164" strokeWidth="2.5" {...common} />
    </>
  );
}

function Staircase() {
  const steps = [
    [40, 128],
    [58, 112],
    [76, 96],
    [94, 80],
    [112, 64],
    [130, 48],
  ];
  return (
    <>
      {steps.map(([x, y]) => (
        <path key={x} d={`M${x} ${y}h26v0`} strokeWidth="3.5" {...common} />
      ))}
      {steps.map(([x, y]) => (
        <path key={`r${x}`} d={`M${x + 26} ${y}v16`} strokeWidth="2" {...common} opacity="0.6" />
      ))}
      <path d="M34 138 152 34" strokeWidth="3" {...common} />
      <path d="M34 108 152 4" strokeWidth="2.5" {...common} opacity="0.85" />
      <path d="M46 130v-27M82 98v-27M118 66v-27" strokeWidth="1.75" {...common} opacity="0.7" />
      <path d="M64 114v-27M100 82v-27M136 50v-27" strokeWidth="1.75" {...common} opacity="0.7" />
      <path d="M22 140h156" strokeWidth="2.5" {...common} />
    </>
  );
}

function Door() {
  return (
    <>
      <path d="M34 132V32h132v100" strokeWidth="3.5" {...common} />
      <rect x="48" y="44" width="104" height="88" strokeWidth="2.5" {...common} />
      <rect x="60" y="56" width="80" height="30" rx="2" strokeWidth="1.5" {...common} opacity="0.65" />
      <rect x="60" y="96" width="80" height="26" rx="2" strokeWidth="1.5" {...common} opacity="0.65" />
      <path d="M60 71h80" strokeWidth="1.25" {...common} opacity="0.4" />
      <circle cx="140" cy="90" r="4" strokeWidth="2.5" {...common} />
      <path d="M20 132h160" strokeWidth="3" {...common} />
      <path d="M34 60h-8M34 90h-8M34 118h-8" strokeWidth="2" {...common} opacity="0.6" />
    </>
  );
}

function Structure() {
  return (
    <>
      <path d="M52 20h96M52 138h96" strokeWidth="4" {...common} />
      <path d="M100 20v118" strokeWidth="4" {...common} />
      <path d="M64 30h72M64 128h72" strokeWidth="1.5" {...common} opacity="0.5" />
      <path d="M100 44 56 78l44 34 44-34z" strokeWidth="2" {...common} opacity="0.8" />
      <path d="M22 44v90M178 44v90" strokeWidth="3" {...common} />
      <path d="M22 60 100 44M178 60 100 44M22 118l78 16M178 118l-78 16" strokeWidth="1.5" {...common} opacity="0.55" />
      <circle cx="100" cy="78" r="6" strokeWidth="2" {...common} />
      <circle cx="100" cy="44" r="3" strokeWidth="2" {...common} />
      <circle cx="100" cy="112" r="3" strokeWidth="2" {...common} />
    </>
  );
}

const shapes: Record<MotifKey, () => React.JSX.Element> = {
  gate: Gate,
  grill: Grill,
  railing: Railing,
  shed: Shed,
  shutter: Shutter,
  staircase: Staircase,
  door: Door,
  structure: Structure,
};

export default function Motif({
  name,
  className = "",
}: {
  name: MotifKey;
  className?: string;
}) {
  const Shape = shapes[name];
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <Shape />
    </svg>
  );
}
