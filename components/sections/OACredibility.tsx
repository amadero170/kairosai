"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { defaultLocale } from "@/i18n";

export default function OACredibility() {
  const t = useTranslations("OACredibility");
  const locale = useLocale();

  const growthHref = locale === defaultLocale ? "/growth-automation" : `/${locale}/growth-automation`;

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
            {t("description")}
          </p>
        </motion.div>

        {/* Mirror block → Growth Automation (home) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-secondary-dark to-secondary rounded-2xl p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,107,53,0.15)_0%,_transparent_50%)]" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                {t("mirrorLabel")}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-3">
                {t("mirrorTitle")}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t("mirrorText")}
              </p>
            </div>
            <Link
              href={growthHref}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-secondary-dark px-6 py-3 rounded-lg font-semibold transition-colors flex-shrink-0 whitespace-nowrap"
            >
              {t("mirrorCta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
