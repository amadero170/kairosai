"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function HowWeWork() {
  const t = useTranslations('HowWeWork');

  const steps = [
    {
      number: "1",
      title: t('steps.discovery.title'),
      time: t('steps.discovery.time'),
      description: t('steps.discovery.description'),
    },
    {
      number: "2",
      title: t('steps.proposal.title'),
      time: t('steps.proposal.time'),
      description: t('steps.proposal.description'),
    },
    {
      number: "3",
      title: t('steps.implementation.title'),
      time: t('steps.implementation.time'),
      description: t('steps.implementation.description'),
    },
    {
      number: "4",
      title: t('steps.training.title'),
      time: t('steps.training.time'),
      description: t('steps.training.description'),
    },
    {
      number: "5",
      title: t('steps.support.title'),
      time: t('steps.support.time'),
      description: t('steps.support.description'),
    },
  ];

  return (
    <section id="how-we-work" className="py-16 md:py-24 bg-light-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            {t('title')}{" "}
            <span className="text-primary">{t('titleHighlight')}</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-5 md:p-6 border border-gray-200 shadow-sm">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-dark">
                      {step.title}
                    </h3>
                    <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-0.5 rounded">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
