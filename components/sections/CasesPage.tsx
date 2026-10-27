"use client";

import React from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { defaultLocale } from "@/i18n";
import Reveal from "./Reveal";
import CaseCard, { CaseItem } from "./CaseCard";
import { SHOW_RVO } from "./flags";

const groups = ["platform", "automation", "speed"] as const;

export default function CasesPage() {
  const t = useTranslations("CasesPage");
  const locale = useLocale();
  const speedHref =
    locale === defaultLocale ? "/growth-automation" : `/${locale}/growth-automation`;

  return (
    <>
      <header className="pt-[120px] md:pt-[160px] pb-6">
        <div className="max-w-[1240px] mx-auto px-[22px] md:px-10">
          <div className="rise sec-tag">{t("tag")}</div>
          <h1 className="rise [animation-delay:70ms] font-display font-semibold text-ink text-[clamp(40px,6vw,76px)] leading-[1.03] tracking-[-0.04em] max-w-[900px]">
            {t("title")} <span className="accent-serif">{t("titleHighlight")}</span>
          </h1>
          <p className="rise [animation-delay:140ms] sec-lead">{t("subtitle")}</p>
        </div>
      </header>

      {groups.map((group, index) => {
        const items = [...(t.raw(`groups.${group}.items`) as CaseItem[])];
        if (group === "platform" && SHOW_RVO) items.push(t.raw("rvo") as CaseItem);

        return (
          <section key={group} id={group} className="py-12 md:py-16 scroll-mt-20">
            <div className="max-w-[1240px] mx-auto px-[22px] md:px-10">
              <Reveal className="flex flex-wrap items-end justify-between gap-4 pt-10 border-t border-line">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-display text-sm text-muted-2">
                      {String(index + 1).padStart(2, "0")} / {String(groups.length).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[11.5px] font-semibold uppercase tracking-[0.16em] text-secondary">
                      {t(`groups.${group}.kicker`)}
                    </span>
                  </div>
                  <h2 className="font-display font-semibold text-ink text-[clamp(28px,3.6vw,42px)] tracking-[-0.03em] leading-tight">
                    {t(`groups.${group}.title`)}
                  </h2>
                </div>
                {group === "speed" && (
                  <Link href={speedHref} className="btn btn-line !px-5 !py-3 !text-sm">
                    {t(`groups.${group}.link`)} <span className="arr">&rarr;</span>
                  </Link>
                )}
              </Reveal>

              <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-8">
                {items.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.07}>
                    <CaseCard item={item} resultLabel={t("resultLabel")} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
