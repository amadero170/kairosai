import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import SocialProof from "@/components/sections/SocialProof";
import WhyDifferent from "@/components/sections/WhyDifferent";
import HubSpotServices from "@/components/sections/HubSpotServices";
import HowWeWork from "@/components/sections/HowWeWork";
import Testimonial from "@/components/sections/Testimonial";
import CaseStudies from "@/components/sections/CaseStudies";
import BeyondHubSpot from "@/components/sections/BeyondHubSpot";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <WhyDifferent />
        <BeyondHubSpot />
        <HowWeWork />
        <FAQ />
        
<div className="hidden">
  <CaseStudies />
</div>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
