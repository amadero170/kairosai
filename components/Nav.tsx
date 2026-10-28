"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { defaultLocale } from "@/i18n";
import KairosLogo from "@/components/KairosLogo";
import { CASES_PAGE } from "@/components/sections/flags";

export default function Nav() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  // Strip the locale prefix to get the logical path (e.g. "/growth-automation")
  const logicalPath =
    pathname.replace(/^\/(en|es)(?=\/|$)/, "") || "/";

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

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const home = withLocale("/");
  const links = [
    { href: `${home}#construimos`, label: t("build") },
    { href: `${home}#metodo`, label: t("method") },
    { href: CASES_PAGE ? withLocale("/casos") : `${home}#casos`, label: t("cases") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-canvas/85 backdrop-blur-md border-b transition-colors duration-300 ${
        stuck || open ? "border-line" : "border-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-[22px] md:px-10">
        <div className="flex items-center justify-between h-16 md:h-[76px] gap-4">
          <Link
            href={home}
            className="pl-2"
            aria-label="Kairos"
            onClick={() => setOpen(false)}
          >
            <KairosLogo subtitle className="text-[15px]" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-[14.5px] font-medium text-ink-2 hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <Link
              href={langHref}
              className="font-display text-[13px] font-semibold text-muted-2 hover:text-ink transition-colors"
              aria-label="Change language"
            >
              {otherLocale.toUpperCase()}
            </Link>
            <a
              href="https://cal.com/kairos-ai/discovery-call"
              className="hidden sm:inline-flex font-display text-[13px] md:text-sm font-semibold px-4 md:px-5 py-2.5 md:py-[11px] rounded-full bg-ink text-canvas hover:-translate-y-px transition-transform whitespace-nowrap"
            >
              {t("cta")}
            </a>
            <button
              type="button"
              className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 -mr-2 items-center"
              aria-label={t("menu")}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={`block w-[22px] h-0.5 bg-ink rounded transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block w-[22px] h-0.5 bg-ink rounded transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block w-[22px] h-0.5 bg-ink rounded transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 bg-canvas ${
          open ? "max-h-[70vh] border-t border-line-2" : "max-h-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="block px-6 py-4 font-display text-base font-medium text-ink-2 border-b border-line-2 last:border-b-0"
          >
            {link.label}
          </Link>
        ))}
        <div className="px-6 py-4 sm:hidden">
          <a
            href="https://cal.com/kairos-ai/discovery-call"
            className="btn btn-ink w-full justify-center"
          >
            {t("cta")} <span className="arr">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
