import { locales } from "@/i18n";
import CasesPage from "@/components/sections/CasesPage";
import HomeFinalCTA from "@/components/sections/HomeFinalCTA";
import Footer from "@/components/sections/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function CasosPage() {
  return (
    <>
      <main className="bg-canvas">
        <CasesPage />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
