import HomeHero, { type HeroCover } from "./HomeHero";
import HomeWhatWeBuild from "./HomeWhatWeBuild";
import HomeMethod from "./HomeMethod";
import HomeCases from "./HomeCases";
import HomeFit from "./HomeFit";
import HomeTeam from "./HomeTeam";
import HomeFinalCTA from "./HomeFinalCTA";
import Footer from "./Footer";
import { SHOW_TEAM } from "./flags";

// Full home page; `cover` brings back the previous version's image in the hero
export default function HomeContent({ cover }: { cover?: HeroCover }) {
  return (
    <>
      <main className="bg-canvas">
        <HomeHero cover={cover} />
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
