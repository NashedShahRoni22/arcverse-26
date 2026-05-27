import { AboutTeaser } from "@/components/home/AboutTeaser";
import { CTABand } from "@/components/home/CTABand";
import { CreativePlatforms } from "@/components/home/CreativePlatforms";
import { FAQ } from "@/components/home/FAQ";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Pricing } from "@/components/home/Pricing";
import { ServicesAccordion } from "@/components/home/ServicesAccordion";
import { ServicesStack } from "@/components/home/ServicesStack";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutTeaser />
      <FeaturedWork />
      <ServicesStack />
      <ServicesAccordion />
      <Pricing />
      <FAQ />
      <CreativePlatforms />
      <Testimonials />
      <CTABand />
    </>
  );
}
