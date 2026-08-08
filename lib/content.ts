export type Service = {
  slug: string;
  title: string;
  titleHi: string;
  blurb: string;
  points: string[];
  /** Key of the SVG motif drawn on the card — see components/Motif.tsx */
  motif: MotifKey;
};

export type MotifKey =
  | "gate"
  | "grill"
  | "railing"
  | "shed"
  | "shutter"
  | "staircase"
  | "door"
  | "structure";

export const services: Service[] = [
  {
    slug: "gates",
    title: "Main Gates & Sliding Gates",
    titleHi: "मेन गेट व स्लाइडिंग गेट",
    blurb:
      "Heavy-duty main gates built to your opening size — swing, sliding or folding, in MS, SS or wrought iron.",
    points: ["Custom designs", "Smooth roller tracks", "Anti-rust primer + paint"],
    motif: "gate",
  },
  {
    slug: "grills",
    title: "Window Grills & Safety Jaali",
    titleHi: "खिड़की ग्रिल व सेफ्टी जाली",
    blurb:
      "Strong, good-looking window grills and balcony jaali that keep the house safe without blocking the light.",
    points: ["Designer & plain patterns", "Exact on-site measurement", "Powder coating option"],
    motif: "grill",
  },
  {
    slug: "railings",
    title: "Staircase & Balcony Railings",
    titleHi: "सीढ़ी व बालकनी रेलिंग",
    blurb:
      "Stainless steel and MS railings with glass or rod infill — clean welds, smooth buffing, level finish.",
    points: ["SS 202 / 304 grade", "Glass & rod infill", "Mirror or matte polish"],
    motif: "railing",
  },
  {
    slug: "sheds",
    title: "Sheds & Roofing Structures",
    titleHi: "शेड व छत का ढांचा",
    blurb:
      "Parking sheds, terrace covers and factory roofing in tin, polycarbonate or profile sheet on a steel frame.",
    points: ["Truss & purlin work", "Leak-proof sheeting", "Wind-load safe design"],
    motif: "shed",
  },
  {
    slug: "shutters",
    title: "Rolling Shutters & Shop Fronts",
    titleHi: "रोलिंग शटर व शॉप फ्रंट",
    blurb:
      "Manual and motorised rolling shutters for shops, godowns and garages, plus complete shop front fabrication.",
    points: ["Manual & automatic", "Gear + spring balancing", "On-call servicing"],
    motif: "shutter",
  },
  {
    slug: "staircase",
    title: "Steel & Spiral Staircases",
    titleHi: "स्टील व गोल सीढ़ी",
    blurb:
      "Space-saving spiral and straight steel staircases with chequered plate, wooden or glass treads.",
    points: ["Spiral & straight flights", "Chequered / wood treads", "Site assembled"],
    motif: "staircase",
  },
  {
    slug: "doors",
    title: "Steel Doors & Frames",
    titleHi: "स्टील दरवाज़े व चौखट",
    blurb:
      "MS and GI doors, chowkhat frames and safety doors for homes, shops, terraces and meter rooms.",
    points: ["Fire-exit & safety doors", "Perfect frame alignment", "Lock & hinge fitting"],
    motif: "door",
  },
  {
    slug: "structures",
    title: "Industrial & Site Fabrication",
    titleHi: "साइट व इंडस्ट्रियल फैब्रिकेशन",
    blurb:
      "Columns, beams, platforms, water-tank stands, ladders and any on-site welding or repair job.",
    points: ["Site welding & cutting", "Girder & platform work", "Repair + re-painting"],
    motif: "structure",
  },
];

export const steps = [
  {
    n: "01",
    title: "Call or WhatsApp",
    desc: "Tell us the work. Send a photo of the spot if you have one — it saves a trip.",
  },
  {
    n: "02",
    title: "Free site measurement",
    desc: "We visit anywhere in Jaipur, take exact measurements and suggest the right design and section.",
  },
  {
    n: "03",
    title: "Clear written quote",
    desc: "Rate per sq.ft or per piece, material grade and delivery date — all fixed in writing. No surprises.",
  },
  {
    n: "04",
    title: "Fabrication & fitting",
    desc: "Built in our workshop, primed, painted and fitted at your site by our own team.",
  },
];

export const reasons = [
  {
    title: "20+ years on the tools",
    desc: "Gates, grills, sheds and industrial jobs across Jaipur — the hand is trained, not guessed.",
    icon: "hammer",
  },
  {
    title: "Fixed price, in writing",
    desc: "The rate we quote is the rate you pay. Material grade and section are written on the estimate.",
    icon: "receipt",
  },
  {
    title: "Our own fitting team",
    desc: "No handing you off to a third-party fitter. The people who build it are the people who fit it.",
    icon: "team",
  },
  {
    title: "Rust-proof finish",
    desc: "Every job is de-scaled, red-oxide primed and finish painted — so it survives Jaipur summers and rain.",
    icon: "shield",
  },
  {
    title: "On-time delivery",
    desc: "A committed date on the estimate, and a call from us the day before fitting.",
    icon: "clock",
  },
  {
    title: "After-work support",
    desc: "Hinge sagging, shutter jam, a weld that needs a touch-up — one call and we are there.",
    icon: "wrench",
  },
];

export const testimonials = [
  {
    quote:
      "Got the main gate and all window grills done for our Golden City house. Measurement was exact, fitting was clean, and they finished two days before the date they gave.",
    name: "Rajesh Sharma",
    place: "Golden City, Jagatpura",
  },
  {
    quote:
      "Parking shed for four cars at our society. Good quality pipe used, no leakage after the rains. Rate was fair and nothing extra was added later.",
    name: "Anil Meena",
    place: "Vrinda Garden, Jaipur",
  },
  {
    quote:
      "Rolling shutter for my shop on Tonk Road. Installed in one day and the balancing is perfect — my wife can open it with one hand.",
    name: "Imran Khan",
    place: "Tonk Road, Jaipur",
  },
  {
    quote:
      "SS railing for the staircase and balcony. The polish and welding finish is really good, much better than the quote I had from a bigger shop.",
    name: "Pooja Agarwal",
    place: "Malviya Nagar, Jaipur",
  },
];

export const faqs = [
  {
    q: "Do you give a free site visit and estimate?",
    a: "Yes. Site measurement and the written estimate are completely free anywhere in Jaipur. Call or WhatsApp us and we will fix a time that suits you.",
  },
  {
    q: "How do you charge — per square foot or per kilo?",
    a: "It depends on the job. Gates, grills and railings are usually quoted per square foot, sheds per square foot of covered area, and industrial or structural work per kilo of steel. Whichever way, the rate and the material section are written on your estimate before work starts.",
  },
  {
    q: "How long does a typical job take?",
    a: "Window grills and small gates are normally ready in 3–5 days. Main gates, railings and sheds take about a week to ten days depending on the size and design. We commit a date in writing and call you the day before fitting.",
  },
  {
    q: "Which material do you use?",
    a: "MS (mild steel) square and round pipe, angle and flat for gates, grills and structures; SS 202 or SS 304 for railings; GI and profile sheet for sheds. You choose the grade — we tell you honestly what it costs and how long it lasts.",
  },
  {
    q: "Do you also do repair work?",
    a: "Yes. Sagging gates, jammed shutters, broken welds, rusted railings and any on-site welding or cutting job. Repairs are usually done the same week.",
  },
  {
    q: "Which areas do you cover?",
    a: "All of Jaipur. We work most often in Jagatpura, Malviya Nagar, Sitapura, Pratap Nagar, Tonk Road and Mansarovar, and we take jobs in nearby towns too.",
  },
];
