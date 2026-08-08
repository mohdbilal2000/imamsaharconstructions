/**
 * Single source of truth for every business detail shown on the site.
 * Change a value here and it updates the header, footer, contact page,
 * WhatsApp links, sitemap and Google structured data everywhere at once.
 */

export const site = {
  name: "Iron Rod Fabrication",
  tagline: "Complete Fabrication Work",
  taglineHi: "हर तरह का फैब्रिकेशन काम",
  description:
    "Iron Rod Fabrication in Jagatpura, Jaipur — gates, grills, railings, sheds, shutters and complete steel fabrication work. Custom made, site fitted, guaranteed finish.",

  // TODO: replace with the real business number before going live.
  phone: "+91 90000 00000",
  phoneHref: "+919000000000",
  whatsapp: "919000000000",
  email: "imamsaharconstructions@gmail.com",

  address: {
    line1: "31, Golden City",
    line2: "Near Vrinda Garden, Jagatpura",
    city: "Jaipur",
    state: "Rajasthan",
    postalCode: "302017",
    country: "IN",
  },
  addressLine: "31, Golden City, Near Vrinda Garden, Jagatpura, Jaipur, Rajasthan",
  mapsQuery: "31 Golden City, Near Vrinda Garden, Jagatpura, Jaipur, Rajasthan",

  geo: { lat: 26.8236, lng: 75.8506 },

  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { days: "Sunday", time: "10:00 AM – 4:00 PM" },
  ],
  openingHoursSpec: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "20:00" },
    { days: ["Sunday"], opens: "10:00", closes: "16:00" },
  ],

  serviceAreas: [
    "Jagatpura",
    "Malviya Nagar",
    "Sitapura",
    "Pratap Nagar",
    "Mansarovar",
    "Tonk Road",
    "Vaishali Nagar",
    "Jaipur & nearby",
  ],

  url: "https://imamsaharconstructions.vercel.app",
} as const;

export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
}

/** Builds a wa.me link with a pre-filled message so an enquiry is one tap away. */
export function whatsappUrl(message?: string) {
  const text = message ?? `Hello ${site.name}, I need a quote for fabrication work.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function telUrl() {
  return `tel:${site.phoneHref}`;
}
