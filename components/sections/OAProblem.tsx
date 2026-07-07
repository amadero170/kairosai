"use client";

import React from "react";
import { motion } from "framer-motion";
import { Repeat, Unplug, FileWarning, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function OAProblem() {
  const t = useTranslations("OAProblem");

  const failures = [
    { icon: Repeat, key: "repeat" },
    { icon: Unplug, key: "dropped" },
    { icon: FileWarning, key: "manual" },
    { icon: Clock, key: "inconsistent" },
  ] as const;

  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {failures.map((failure, index) => {
            const Icon = failure.icon;
            return (
              <motion.div
                key={failure.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark">
                    {t(`failures.${failure.key}.title`)}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                      {t("clientLabel")}
                    </span>
                    <p className="text-gray-700 mt-1">
                      {t(`failures.${failure.key}.client`)}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {t("costLabel")}
                    </span>
                    <p className="text-gray-500 mt-1">
                      {t(`failures.${failure.key}.cost`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
