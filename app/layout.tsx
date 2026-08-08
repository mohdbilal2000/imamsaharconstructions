import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline} in Jagatpura, Jaipur`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "iron fabrication Jaipur",
    "fabrication work Jagatpura",
    "iron gate maker Jaipur",
    "window grill Jaipur",
    "steel railing Jaipur",
    "rolling shutter Jaipur",
    "parking shed fabrication",
    "welding work Jagatpura",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline} in Jagatpura, Jaipur`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0f1218",
  width: "device-width",
  initialScale: 1,
};

/** LocalBusiness structured data — this is what puts the shop in Google's local results. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneHref,
  email: site.email,
  priceRange: "₹₹",
  image: `${site.url}/og.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  areaServed: site.serviceAreas.map((a) => ({ "@type": "Place", name: a })),
  openingHoursSpecification: site.openingHoursSpec.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  makesOffer: [
    "Iron main gates and sliding gates",
    "Window grills and safety jaali",
    "Staircase and balcony railings",
    "Parking sheds and roofing structures",
    "Rolling shutters and shop fronts",
    "Steel doors and frames",
    "Industrial and on-site fabrication",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="min-h-screen bg-steel-950 font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ember-500 focus:px-4 focus:py-2 focus:font-bold focus:text-steel-950"
        >
          Skip to content
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
        {/* Bottom bar is fixed on phones — keep the footer clear of it */}
        <div className="h-16 md:hidden" aria-hidden="true" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
