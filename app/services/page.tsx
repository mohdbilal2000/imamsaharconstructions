import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Fabrication Services in Jaipur",
  description:
    "Iron and steel fabrication services in Jaipur — main gates, window grills, SS railings, parking sheds, rolling shutters, spiral staircases, steel doors and industrial site work.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Our services"
        title={
          <>
            Complete fabrication work, <span className="text-rust">start to finish.</span>
          </>
        }
        subtitle="Whatever needs to be cut, welded, primed, painted and fitted — we take the whole job, not just the easy half."
      />
      <Services eyebrow="01 — What we make" />
      <Process />
      <Faq eyebrow="03 — FAQ" />
      <Cta />
    </>
  );
}
