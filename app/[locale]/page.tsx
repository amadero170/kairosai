import { locales } from "@/i18n";
import HomeContent from "@/components/sections/HomeContent";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function HomePage() {
  return <HomeContent cover="background" />;
}
