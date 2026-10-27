"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

export default function HomeFinalCTA() {
  const t = useTranslations("Home.FinalCTA");

  return (
    <section className="py-16 md:py-[104px] text-center">
      <div className="max-w-[1240px] mx-auto px-[22px] md:px-10">
        <Reveal>
          <h2 className="font-display font-semibold text-ink text-[clamp(36px,5.5vw,72px)] leading-[1.04] tracking-[-0.04em] max-w-[900px] mx-auto">
            {t("title")} <span className="accent-serif">{t("titleHighlight")}</span>
          </h2>
          <p className="font-light text-[19px] text-muted max-w-[480px] mx-auto mt-6 mb-9 leading-relaxed">
            {t("description")}
          </p>
          <a
            href="https://cal.com/kairos-ai/discovery-call"
            className="btn btn-ink !px-8 !py-[17px] !text-base"
          >
            {t("cta")} <span className="arr">&rarr;</span>
          </a>
          <p className="mt-7 text-sm text-muted">
            {t("emailPrefix")}{" "}
            <a href="mailto:alberto@kairosautomation.ai" className="text-ink font-medium hover:text-secondary transition-colors">
              alberto@kairosautomation.ai
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
