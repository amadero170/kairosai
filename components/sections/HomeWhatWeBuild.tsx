"use client";

import React from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { defaultLocale } from "@/i18n";
import { track } from "@/lib/analytics";
import Reveal from "./Reveal";
import { CASES_PAGE } from "./flags";

const cards = ["platform", "automation", "speed"] as const;

export default function HomeWhatWeBuild() {
  const t = useTranslations("Home.Build");
  const locale = useLocale();
  const casesHref = locale === defaultLocale ? "/casos" : `/${locale}/casos`;

  return (
    <section id="construimos" className="py-14 md:py-[92px] scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-[22px] md:px-10">
        <Reveal>
          <div className="sec-tag">{t("tag")}</div>
          <h2 className="sec-h">
            {t("title")} <span className="accent-serif">{t("titleHighlight")}</span>
          </h2>
          <p className="sec-lead">{t("subtitle")}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 border-t border-line">
          {cards.map((key, index) => {
            const includes = t.raw(`cards.${key}.includes`) as string[];
            return (
              <div
                key={key}
                className="grid grid-cols-1 md:grid-cols-[80px_1fr_1.3fr_180px] gap-3 md:gap-8 items-start py-9 md:py-11 border-b border-line transition-colors hover:bg-canvas-2"
              >
                <div className="hidden md:block font-display text-sm text-muted-2 pt-1.5">
                  {String(index + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-display text-[11.5px] font-semibold uppercase tracking-[0.16em] text-secondary mb-3">
                    {t(`cards.${key}.kicker`)}
                  </div>
                  <h3 className="font-display text-2xl md:text-[30px] font-semibold tracking-[-0.02em] leading-tight text-ink">
                    {t(`cards.${key}.title`)}
                  </h3>
                </div>
                <div>
                  <p className="font-light text-[15.5px] text-ink-2 leading-relaxed">
                    {t(`cards.${key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5" aria-label={t("includesLabel")}>
                    {includes.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 font-display text-[13px] font-semibold text-ink-2 px-3.5 py-1.5 bg-paper border border-line rounded-full"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-grad" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:pt-1 md:justify-self-end">
                  {CASES_PAGE ? (
                    <Link href={`${casesHref}#${key}`} className="btn btn-line !px-5 !py-3 !text-sm">
                      {t("casesCta")} <span className="arr">&rarr;</span>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => track("ver_casos_click", { grupo: key })}
                      className="btn btn-line !px-5 !py-3 !text-sm"
                    >
                      {t("casesCta")} <span className="arr">&rarr;</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
