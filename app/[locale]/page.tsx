import Hero from "@/components/sections/Hero";
import WhyDifferent from "@/components/sections/WhyDifferent";
import SpeedToLead from "@/components/sections/SpeedToLead";
import Features from "@/components/sections/Features";
import HowWeWork from "@/components/sections/HowWeWork";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <WhyDifferent />
        <SpeedToLead />
        <Features />
        <HowWeWork />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
