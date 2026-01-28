"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Users, MessageSquare } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function WhyDifferent() {
  const t = useTranslations('WhyDifferent');

  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-8">
            {t('title')}{" "}
            <span className="text-primary">
              {t('titleHighlight')}
            </span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
            <p className="font-semibold text-dark">
              {t('paragraph3')}
            </p>
          </div>

          {/* Visual indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center p-6"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-7 w-7 text-primary" />
              </div>
              <span className="font-semibold text-dark">{t('technicalTeam')}</span>
              <span className="text-sm text-gray-500">{t('everyoneCodes')}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center p-6"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="h-7 w-7 text-primary" />
              </div>
              <span className="font-semibold text-dark">{t('directAccess')}</span>
              <span className="text-sm text-gray-500">
                {t('talkToBuilders')}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center p-6"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <span className="font-semibold text-dark">{t('noMiddlemen')}</span>
              <span className="text-sm text-gray-500">
                {t('zeroErrors')}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
