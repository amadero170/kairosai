import { locales } from "@/i18n";
import OAHero from "@/components/sections/OAHero";
import OAProblem from "@/components/sections/OAProblem";
import OAWhatWeAutomate from "@/components/sections/OAWhatWeAutomate";
import OAHowWeWork from "@/components/sections/OAHowWeWork";
import OACredibility from "@/components/sections/OACredibility";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function OperationalAutomationPage() {
  return (
    <>
      <main>
        <OAHero />
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
