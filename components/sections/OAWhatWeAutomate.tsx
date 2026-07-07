"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, ScanText, RefreshCw, FileBarChart, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function OAWhatWeAutomate() {
  const t = useTranslations("OAWhatWeAutomate");

  const cards = [
    { icon: UserCheck, key: "captureOnce" },
    { icon: ScanText, key: "extraction" },
    { icon: RefreshCw, key: "sync" },
    { icon: FileBarChart, key: "reports" },
  ] as const;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-4 md:gap-6 mb-10"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.key}
                className="bg-light-gray rounded-xl p-6 border border-gray-200 flex flex-col"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-gray-800 font-medium mb-4 flex-1">
                  {t(`cards.${card.key}.title`)}
                </p>
                <div className="flex items-start gap-2 pt-4 border-t border-gray-200">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                      {t("resultLabel")}
                    </span>
                    <p className="text-gray-700">
                      {t(`cards.${card.key}.result`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="https://cal.com/kairos-ai/discovery-call"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {t("cta")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
