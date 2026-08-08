import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import ServiceAreas from "@/components/sections/ServiceAreas";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services limit={8} showAllLink />
      <WhyUs />
      <Process />
      <Gallery limit={6} showAllLink />
      <Testimonials />
      <ServiceAreas />
      <Faq />
      <Cta />
    </>
  );
}
