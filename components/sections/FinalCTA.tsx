"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function FinalCTA() {
  const t = useTranslations('FinalCTA');

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary-dark to-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,107,53,0.15)_0%,_transparent_50%)]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('title')}{" "}
            <span className="text-primary">{t('titleHighlight')}</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://meetings.hubspot.com/amadero"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              {t('cta')}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-gray-400">
            <Mail className="h-4 w-4" />
            <span>{t('emailPrefix')}</span>
            <a
              href="mailto:alberto@kairosautomation.ai"
              className="text-white hover:text-primary transition-colors"
            >
              alberto@kairosautomation.ai
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
