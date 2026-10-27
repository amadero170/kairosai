"use client";

import React from "react";
import { Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

// Replace with the real photo path (e.g. "/alberto-madero.jpg") once available.
const FOUNDER_PHOTO: string | null = null;

export default function HomeTeam() {
  const t = useTranslations("Home.Team");

  return (
    <section className="py-14 md:py-[92px]">
      <div className="max-w-[1240px] mx-auto px-[22px] md:px-10">
        <Reveal>
          <div className="sec-tag">{t("tag")}</div>
          <h2 className="sec-h">
            {t("title")} <span className="accent-serif">{t("titleHighlight")}</span>
          </h2>
          <p className="sec-lead">{t("closing")}</p>
        </Reveal>

        <Reveal delay={0.1} className="grid md:grid-cols-2 mt-12 border border-line rounded-[20px] overflow-hidden bg-paper">
          <div className="p-8 md:p-11 border-b md:border-b-0 md:border-r border-line">
            {FOUNDER_PHOTO ? (
              <img
                src={FOUNDER_PHOTO}
                alt={t("founderName")}
                className="w-[60px] h-[60px] rounded-[14px] object-cover border border-line mb-6"
              />
            ) : (
              <div className="w-[60px] h-[60px] rounded-[14px] bg-canvas-2 border border-line flex items-center justify-center font-display font-bold text-xl text-ink mb-6">
                {t("founderInitials")}
              </div>
            )}
            <h3 className="font-display text-[22px] font-semibold text-ink">{t("founderName")}</h3>
            <div className="font-display text-[13px] font-semibold text-secondary mt-1.5 mb-4">
              {t("founderRole")}
            </div>
            <p className="font-light text-[15px] text-ink-2 leading-relaxed">{t("founderText")}</p>
          </div>
          <div className="p-8 md:p-11">
            <div className="w-[60px] h-[60px] rounded-[14px] bg-canvas-2 border border-line flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-ink" />
            </div>
            <h3 className="font-display text-[22px] font-semibold text-ink">{t("teamName")}</h3>
            <div className="font-display text-[13px] font-semibold text-secondary mt-1.5 mb-4">
              {t("teamRole")}
            </div>
            <p className="font-light text-[15px] text-ink-2 leading-relaxed">{t("teamText")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
