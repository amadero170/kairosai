"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { track } from "@/lib/analytics";
import ClientLogos from "./ClientLogos";

export type HeroCover = "banner" | "background";

// `cover` brings back the previous version's image: "banner" = image + large logo above the headline,
// "background" = image behind the current hero, faded into the canvas so the text stays readable
export default function HomeHero({ cover }: { cover?: HeroCover }) {
  const t = useTranslations("Home.Hero");

  return (
    <>
      {cover === "banner" && (
        <div className="relative w-full h-64 md:h-[50vh]">
          <img src="/fondo-claro-2.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/logo-kairos-negro.png"
              alt="Kairos Software Studio"
              className="w-64 md:w-[28rem] h-auto object-contain"
            />
          </div>
        </div>
      )}
      <header
        className={`relative overflow-hidden pb-8 md:pb-10 ${
          cover === "banner" ? "pt-14 md:pt-20" : "pt-[120px] md:pt-[156px]"
        }`}
      >
        {cover === "background" && (
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img src="/fondo-claro-2.jpg" alt="" className="w-full h-full object-cover object-[80%_center] md:object-[center_60%]" />
            {/* Light veil over the text column, then fade into the canvas under the nav and at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-r from-canvas/60 via-canvas/30 to-canvas/0 md:from-canvas/75 md:via-canvas/35" />
            <div className="absolute inset-x-0 top-0 h-20 md:h-40 bg-gradient-to-b from-canvas to-canvas/0" />
            <div className="absolute inset-x-0 bottom-0 h-1/5 md:h-1/3 bg-gradient-to-b from-canvas/0 to-canvas" />
          </div>
        )}
        {/* Faint double ring, the circle from the Kairos logo */}
        {!cover && (
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="hidden lg:block absolute -right-[12vw] top-[150px] w-[40vw] max-w-[600px] text-secondary pointer-events-none"
          >
            <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.12" />
            <circle cx="52" cy="49" r="45.5" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.09" />
          </svg>
        )}
        <div className="relative max-w-[1240px] mx-auto px-[22px] md:px-10">
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

      <section className="pt-4 pb-4">
        <div className="max-w-[1240px] mx-auto px-[22px] md:px-10">
          <span className="lbl block text-center mb-5">{t("clientsIntro")}</span>
        </div>
        <ClientLogos />
      </section>
    </>
  );
}
