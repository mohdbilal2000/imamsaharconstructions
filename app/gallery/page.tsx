import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Cta from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Our Work — Fabrication Gallery",
  description:
    "Recent fabrication jobs completed across Jaipur — main gates, window grills, SS railings, parking sheds, rolling shutters, spiral staircases and site structures.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        breadcrumb="Work"
        eyebrow="Portfolio"
        title={
          <>
            Work that is still standing <span className="text-rust">years later.</span>
          </>
        }
        subtitle="A selection of jobs delivered around Jaipur. Want photos of something similar to your requirement? Message us on WhatsApp and we will send them."
      />
      <Gallery eyebrow="01 — Selected jobs" />
      <Testimonials eyebrow="02 — Reviews" />
      <Cta />
    </>
  );
}
