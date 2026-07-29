"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Languages, ArrowRight } from "lucide-react";
import { defaultLocale } from "@/i18n";

export default function Nav() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const locale = useLocale();

  // Strip the locale prefix to get the logical path (e.g. "/growth-automation")
  const logicalPath =
    pathname.replace(/^\/(en|es)(?=\/|$)/, "") || "/";
  const isGrowth = logicalPath.startsWith("/growth-automation");

  // Build a locale-aware href (default locale has no prefix, "as-needed")
  const withLocale = (path: string) => {
    if (locale === defaultLocale) return path;
    return `/${locale}${path === "/" ? "" : path}`;
  };

  // Language toggle target (same logical page, other locale)
  const otherLocale = locale === "en" ? "es" : "en";
  const langHref =
    otherLocale === defaultLocale
      ? logicalPath
      : `/${otherLocale}${logicalPath === "/" ? "" : logicalPath}`;

  const navItem = (active: boolean) =>
    `text-sm font-medium transition-colors ${
      active
        ? "text-primary"
        : "text-gray-600 hover:text-dark"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/25 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Practice links */}
          <nav className="flex items-center gap-4 md:gap-8">
            <Link
              href={withLocale("/")}
              className={navItem(!isGrowth)}
              aria-current={!isGrowth ? "page" : undefined}
            >
              {t("operational")}
            </Link>
            <Link
              href={withLocale("/growth-automation")}
              className={navItem(isGrowth)}
              aria-current={isGrowth ? "page" : undefined}
            >
              {t("growth")}
            </Link>
          </nav>

          {/* Right side: language + CTA */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href={langHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-dark transition-colors"
              aria-label="Change language"
            >
              <Languages className="h-4 w-4 text-primary" />
              {otherLocale.toUpperCase()}
            </Link>
            <a
              href="https://cal.com/kairos-ai/discovery-call"
              className="hidden sm:inline-flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              {t("cta")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
