"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const otherLocale = locale === "en" ? "es" : "en";

  const pathWithoutLocale = pathname.replace(/^\/(en|es)(?=\/|$)/, "") || "/";
  const href =
    otherLocale === "en"
      ? pathWithoutLocale
      : `/es${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;

  return (
    <Link
      href={href}
      className="fixed top-4 right-4 z-50 inline-flex items-center gap-1.5 bg-white border border-gray-200 shadow-md rounded-full px-3 py-2 text-sm font-semibold text-dark hover:bg-gray-50 transition-colors"
    >
      <Languages className="h-4 w-4 text-primary" />
      {otherLocale.toUpperCase()}
    </Link>
  );
}
