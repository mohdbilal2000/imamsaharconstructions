import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Ticker from "@/components/sections/Ticker";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Services limit={8} showAllLink />
      <Process />
      <Gallery limit={5} showAllLink />
      <WhyUs />
      <Testimonials />
      <Ticker />
      <ServiceAreas />
      <Faq />
      <Cta />
    </>
  );
}
