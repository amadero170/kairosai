"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { track } from "@/lib/analytics";
import ClientLogos from "./ClientLogos";

export default function HomeHero() {
  const t = useTranslations("Home.Hero");

  return (
    <>
      <header className="relative overflow-hidden pt-[120px] md:pt-[168px] pb-10 md:pb-16">
        {/* Faint double ring, the circle from the Kairos logo */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          className="hidden lg:block absolute -right-[12vw] top-[150px] w-[40vw] max-w-[600px] text-secondary pointer-events-none"
        >
          <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.12" />
          <circle cx="52" cy="49" r="45.5" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.09" />
        </svg>
        <div className="relative max-w-[1240px] mx-auto px-[22px] md:px-10">
          <div className="rise lbl flex items-center gap-3.5 mb-7 after:content-[''] after:h-px after:w-20 after:bg-line">
            {t("eyebrow")}
          </div>
          <h1 className="rise [animation-delay:70ms] font-display font-semibold text-ink text-[clamp(42px,7.4vw,96px)] leading-[1.02] tracking-[-0.04em] max-w-[1100px]">
            {t("title")}{" "}
            <span className="accent-serif">{t("titleHighlight")}</span>
          </h1>
          <p className="rise [animation-delay:140ms] font-light text-[clamp(17px,1.7vw,20px)] text-ink-2 max-w-[620px] mt-8 leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="rise [animation-delay:210ms] flex flex-wrap gap-3 mt-10">
            <a href="https://cal.com/kairos-ai/discovery-call" className="btn btn-ink">
              {t("cta")} <span className="arr">&rarr;</span>
            </a>
            <a
              href="#casos"
              onClick={() => track("ver_casos_click", { grupo: "hero" })}
              className="btn btn-line"
            >
              {t("ctaSecondary")} <span className="arr">&rarr;</span>
            </a>
          </div>
        </div>
      </header>

      <section className="pt-8 pb-4">
        <div className="max-w-[1240px] mx-auto px-[22px] md:px-10">
          <span className="lbl block text-center mb-7">{t("clientsIntro")}</span>
        </div>
        <ClientLogos />
      </section>
    </>
  );
}
