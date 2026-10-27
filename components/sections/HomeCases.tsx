"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import CaseCard, { CaseItem } from "./CaseCard";
import { track } from "@/lib/analytics";
import { SHOW_RVO } from "./flags";

export default function HomeCases() {
  const t = useTranslations("Home.Cases");
  const [showAll, setShowAll] = useState(false);

  const items = [...(t.raw("items") as CaseItem[])];
  if (showAll) {
    if (SHOW_RVO) items.push(t.raw("rvo") as CaseItem);
    items.push(...(t.raw("more") as CaseItem[]));
  }

  return (
    <section id="casos" className="py-14 md:py-[92px] scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-[22px] md:px-10">
        <Reveal>
          <div className="sec-tag">{t("tag")}</div>
          <h2 className="sec-h">
            {t("title")} <span className="accent-serif">{t("titleHighlight")}</span>
          </h2>
          <p className="sec-lead">{t("subtitle")}</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-12">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 0.07}>
              <CaseCard item={item} resultLabel={t("resultLabel")} />
            </Reveal>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => {
                setShowAll(true);
                track("ver_casos_click", { grupo: "todos" });
              }}
              className="btn btn-line"
            >
              {t("allCta")} <span className="arr">&darr;</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
