import { locales } from "@/i18n";
import OAHero from "@/components/sections/OAHero";
import OAProblem from "@/components/sections/OAProblem";
import OAWhatWeAutomate from "@/components/sections/OAWhatWeAutomate";
import OAExamples from "@/components/sections/OAExamples";
import OAHowWeWork from "@/components/sections/OAHowWeWork";
import OACredibility from "@/components/sections/OACredibility";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function HomePage() {
  return (
    <>
      <main>
        <OAHero />
        <OAExamples />
        <OAProblem />
        <OAWhatWeAutomate />
        <OAHowWeWork />
        <OACredibility />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
