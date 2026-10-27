"use client";

import React from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { defaultLocale } from "@/i18n";
import KairosLogo from "@/components/KairosLogo";
import { CASES_PAGE } from "./flags";

export default function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");
  const locale = useLocale();

  const withLocale = (path: string) => {
    if (locale === defaultLocale) return path;
    return `/${locale}${path === "/" ? "" : path}`;
  };
  const home = withLocale("/");

  const colTitle = "font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2 mb-3.5";
  const colLink = "block text-sm text-ink-2 hover:text-secondary transition-colors mb-2.5";

  return (
    <footer className="bg-canvas border-t border-line pt-14 pb-11">
      <div className="max-w-[1240px] mx-auto px-[22px] md:px-10">
        <div className="flex flex-wrap justify-between gap-8 items-start">
          <div className="max-w-[300px]">
            <Link href={home} aria-label="Kairos" className="inline-block py-5 pl-3">
              <KairosLogo subtitle className="text-[20px]" />
            </Link>
            <p className="font-light text-[13.5px] text-muted mt-3 leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div>
            <h5 className={colTitle}>{t("exploreTitle")}</h5>
            <Link href={`${home}#construimos`} className={colLink}>{nav("build")}</Link>
            <Link href={`${home}#metodo`} className={colLink}>{nav("method")}</Link>
            <Link href={CASES_PAGE ? withLocale("/casos") : `${home}#casos`} className={colLink}>{nav("cases")}</Link>
          </div>

          <div>
            <h5 className={colTitle}>{t("startTitle")}</h5>
            <a href="https://cal.com/kairos-ai/discovery-call" className={colLink}>{nav("cta")}</a>
          </div>

          <div>
            <h5 className={colTitle}>{t("contactTitle")}</h5>
            <span className="block font-display text-[12.5px] font-semibold text-ink mb-2">Alberto Madero</span>
            <a href="mailto:alberto@kairosautomation.ai" className={colLink}>alberto@kairosautomation.ai</a>
          </div>
        </div>

        <div className="mt-12 pt-5 border-t border-line flex flex-col md:flex-row justify-between gap-3 text-[13px] text-muted-2">
          <div className="flex flex-col gap-1">
            <span>© {new Date().getFullYear()} Kairos Automation. {t("copyright")}</span>
            <span className="text-xs">{t("legalName")}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href={withLocale("/privacy-policy")} className="hover:text-ink transition-colors">
              {t("privacyPolicy")}
            </Link>
            <Link href={withLocale("/terms-of-service")} className="hover:text-ink transition-colors">
              {t("termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
