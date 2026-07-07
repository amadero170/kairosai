"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Workflow } from "lucide-react";
import { useTranslations } from "next-intl";

export default function OAHero() {
  const t = useTranslations("OAHero");

  return (
    <section className="bg-white relative overflow-hidden flex flex-col">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(0,78,137,0.03)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(255,107,53,0.03)_0%,_transparent_40%)]" />

      {/* Hero background with overlay logo (nav floats over the top of this) */}
      <div className="relative w-full mb-8 h-64 md:h-[50vh]">
        <img
          src="/fondo-claro-2.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/logo-kairos-negro.png"
            alt="Kairos Software Studio"
            className="w-64 md:w-[28rem] h-auto object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 pt-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-1.5 bg-secondary/5 border border-secondary/20 rounded-full px-3 py-1 mb-8">
            <Workflow className="h-3.5 w-3.5 text-[#FF6B35]" />
            <span className="text-secondary text-[10px] md:text-sm font-medium tracking-wide">
              {t("badge")}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 max-w-4xl mx-auto leading-tight">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
            {t("subtitle")}
          </p>

          <div className="flex justify-center items-center">
            <a
              href="https://cal.com/kairos-ai/discovery-call"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
            >
              {t("cta")}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
