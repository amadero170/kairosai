"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

export default function HomeFit() {
  const t = useTranslations("Home.Fit");
  const yes = t.raw("yes") as string[];
  const no = t.raw("no") as string[];

  return (
    <section className="py-14 md:py-[92px]">
      <div className="max-w-[1240px] mx-auto px-[22px] md:px-10">
        <Reveal>
          <div className="sec-tag">{t("tag")}</div>
          <h2 className="sec-h">
            {t("title")} <span className="accent-serif">{t("titleHighlight")}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="grid md:grid-cols-2 gap-5 md:gap-6 mt-12">
          <div className="p-8 md:p-[38px] rounded-[20px] border border-ok/40 bg-[linear-gradient(180deg,rgba(22,163,74,0.055),#fff_55%)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-[34px] h-[34px] rounded-[10px] bg-ok flex items-center justify-center">
                <Check className="h-[18px] w-[18px] text-white" strokeWidth={3} />
              </span>
              <h3 className="font-display text-[21px] font-semibold text-ink">{t("yesTitle")}</h3>
            </div>
            <ul>
              {yes.map((item) => (
                <li key={item} className="text-[15.5px] text-ink-2 leading-normal py-3.5 border-t border-line-2 first:border-t-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 md:p-[38px] rounded-[20px] border border-line bg-paper">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-[34px] h-[34px] rounded-[10px] bg-muted-2 flex items-center justify-center">
                <X className="h-[18px] w-[18px] text-white" strokeWidth={3} />
              </span>
              <h3 className="font-display text-[21px] font-semibold text-ink">{t("noTitle")}</h3>
            </div>
            <ul>
              {no.map((item) => (
                <li key={item} className="text-[15.5px] text-ink-2 leading-normal py-3.5 border-t border-line-2 first:border-t-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
