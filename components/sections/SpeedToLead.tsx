"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Users,
  TrendingDown,
  Timer,
  MousePointer2,
  Ghost,
  DollarSign,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { useTranslations } from 'next-intl';

export default function SpeedToLead() {
  const t = useTranslations('SpeedToLead');

  const stats = [
    {
      icon: Timer,
      title: t('stats.fiveMin.title'),
      description: t('stats.fiveMin.description'),
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: MousePointer2,
      title: t('stats.firstResponder.title'),
      description: t('stats.firstResponder.description'),
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      icon: TrendingDown,
      title: t('stats.interestDrop.title'),
      description: t('stats.interestDrop.description'),
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      icon: Users,
      title: t('stats.travelerExpectation.title'),
      description: t('stats.travelerExpectation.description'),
      color: "text-green-500",
      bg: "bg-green-50"
    }
  ];

  const arguments_content = [
    {
      icon: Zap,
      title: t('arguments.window.title'),
      description: t('arguments.window.description'),
    },
    {
      icon: Ghost,
      title: t('arguments.ghosting.title'),
      description: t('arguments.ghosting.description'),
    },
    {
      icon: DollarSign,
      title: t('arguments.inventory.title'),
      description: t('arguments.inventory.description'),
    },
    {
      icon: ShieldCheck,
      title: t('arguments.authority.title'),
      description: t('arguments.authority.description'),
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
            {t('title')} <span className="text-primary">{t('titleHighlight')}</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-4`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{stat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Arguments */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto mb-12">
          {arguments_content.map((arg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <arg.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-dark mb-1">{arg.title}</h4>
                <p className="text-gray-600 leading-relaxed">{arg.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="https://cal.com/kairos-ai/discovery-call"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            {t('cta')}
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
