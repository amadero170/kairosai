"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, TrendingUp, ClipboardList, HardHat, Factory } from "lucide-react";
import { useTranslations } from "next-intl";

export default function OAExamples() {
  const t = useTranslations("OAExamples");

  const industries = [
    { icon: Landmark, key: "finance", items: ["a", "b", "c"] },
    { icon: TrendingUp, key: "sales", items: ["a", "b", "c"] },
    { icon: ClipboardList, key: "operations", items: ["a", "b", "c"] },
    { icon: HardHat, key: "construction", items: ["a", "b", "c"] },
    { icon: Factory, key: "manufacturing", items: ["a", "b", "c"] },
  ] as const;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 max-w-3xl mx-auto leading-tight">
            {t("title")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="bg-light-gray rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark">
                    {t(`industries.${industry.key}.name`)}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {industry.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        {t(`industries.${industry.key}.items.${item}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* Closing prompt card — invites the "that's my problem" reflex */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-secondary-dark to-secondary rounded-xl p-6 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,107,53,0.15)_0%,_transparent_50%)]" />
            <p className="relative z-10 text-white font-semibold text-lg leading-snug mb-4">
              {t("promptTitle")}
            </p>
            <a
              href="https://cal.com/kairos-ai/discovery-call"
              className="relative z-10 inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-secondary-dark px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors w-fit"
            >
              {t("promptCta")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
