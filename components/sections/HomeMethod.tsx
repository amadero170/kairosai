"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

const steps = ["m", "e", "d", "i", "r"] as const;

export default function HomeMethod() {
  const t = useTranslations("Home.Method");

  return (
    <section id="metodo" className="py-14 md:py-24 scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-[22px] md:px-10">
        <Reveal>
          <div className="sec-tag">{t("tag")}</div>
          <h2 className="sec-h">
            {t("title")} <span className="accent-serif">{t("titleHighlight")}</span>
          </h2>
          <p className="sec-lead">{t("subtitle")}</p>
        </Reveal>

        {/* Roadmap: cards alternate sides of a center line on desktop, stack on a left rail on mobile */}
        <div className="relative max-w-[920px] mx-auto mt-14">
          <div className="absolute left-[18px] md:left-1/2 top-4 bottom-4 w-0.5 md:w-0 md:border-l-2 md:border-dashed md:border-line bg-brand-grad md:bg-none rounded md:-translate-x-1/2" />

          <div className="flex flex-col pl-[46px] md:pl-0">
            {steps.map((key, index) => {
              const right = index % 2 === 0;
              return (
                <motion.div
                  key={key}
                  initial="off"
                  whileInView="on"
                  viewport={{ once: false, margin: "-45% 0px -45% 0px" }}
                  className={`relative flex items-center mb-6 md:mb-0 md:min-h-[260px] ${
                    right ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {/* Node */}
                  <div className="absolute -left-[46px] top-7 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-full bg-canvas border border-line flex items-center justify-center z-10">
                    <motion.span
                      variants={{
                        off: { backgroundColor: "#7A808A", boxShadow: "0 0 0 rgba(0,78,137,0)" },
                        on: { backgroundColor: "#004E89", boxShadow: "0 0 18px rgba(44,125,184,0.7)" },
                      }}
                      transition={{ duration: 0.45 }}
                      className="w-3.5 h-3.5 rounded-full"
                    />
                  </div>

                  <motion.div
                    variants={{
                      off: { opacity: 0.85, y: 12, borderColor: "#E4DFD6" },
                      on: { opacity: 1, y: 0, borderColor: "rgba(44,125,184,0.45)" },
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="w-full md:w-[42%] p-7 md:p-8 rounded-[18px] bg-paper border shadow-[0_18px_44px_-30px_rgba(30,30,40,0.4)]"
                  >
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="font-serif italic font-semibold text-[52px] leading-none bg-brand-grad bg-clip-text text-transparent pr-1">
                        {t(`steps.${key}.letter`)}
                      </span>
                      <span className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary">
                        {t(`steps.${key}.kicker`)}
                      </span>
                    </div>
                    <h3 className="font-display text-[22px] font-semibold tracking-[-0.02em] text-ink mb-2.5">
                      {t(`steps.${key}.title`)}
                    </h3>
                    <p className="font-light text-[14.5px] text-ink-2 leading-relaxed">
                      {t(`steps.${key}.description`)}
                    </p>
                    <div className="mt-5 pt-4 border-t border-line-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13.5px]">
                      <span className="lbl !text-[10.5px] !tracking-[0.14em]">{t("timeLabel")}</span>
                      <span className="text-ink-2">{t(`steps.${key}.time`)}</span>
                      {t.has(`steps.${key}.payment`) && (
                        <span className="ml-auto font-display text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ok bg-ok/10 px-2.5 py-1 rounded-full">
                          {t(`steps.${key}.payment`)}
                        </span>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-12 md:mt-16 text-center">
          <p className="font-serif italic font-semibold text-[clamp(22px,3vw,34px)] text-ink max-w-3xl mx-auto leading-snug">
            {t("closing")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
