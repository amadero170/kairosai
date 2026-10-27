import { locales } from "@/i18n";
import HomeHero from "@/components/sections/HomeHero";
import HomeWhatWeBuild from "@/components/sections/HomeWhatWeBuild";
import HomeMethod from "@/components/sections/HomeMethod";
import HomeCases from "@/components/sections/HomeCases";
import HomeFit from "@/components/sections/HomeFit";
import HomeTeam from "@/components/sections/HomeTeam";
import HomeFinalCTA from "@/components/sections/HomeFinalCTA";
import { SHOW_TEAM } from "@/components/sections/flags";
import Footer from "@/components/sections/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function HomePage() {
  return (
    <>
      <main className="bg-canvas">
        <HomeHero />
        <HomeWhatWeBuild />
        <HomeMethod />
        <HomeCases />
        <HomeFit />
        {SHOW_TEAM && <HomeTeam />}
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
