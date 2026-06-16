"use client";

import React, { useState, useEffect } from "react";
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
  ArrowRight,
  Calculator
} from "lucide-react";
import { useTranslations } from 'next-intl';

export default function SpeedToLead() {
  const t = useTranslations('SpeedToLead');
  
  // Calculator State
  const [leads, setLeads] = useState(300);
  const [avgBooking, setAvgBooking] = useState(4000);
  const [responseRate, setResponseRate] = useState(40);
  const [lostRevenue, setLostRevenue] = useState(0);

  useEffect(() => {
    // Logic: Non-immediate leads (1 - rate) have a much lower conversion.
    // We estimate 20% of those non-immediate leads are lost bookings.
    const nonImmediatePercentage = 1 - (responseRate / 100);
    const estimatedLostBookings = leads * nonImmediatePercentage * 0.20;
    const loss = estimatedLostBookings * avgBooking;
    setLostRevenue(Math.round(loss));
  }, [leads, avgBooking, responseRate]);

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

        {/* Strategy and Calculator Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Arguments */}
          <div className="space-y-8">
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

          {/* Calculator Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark rounded-3xl p-8 md:p-10 text-white shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Calculator className="h-24 w-24" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <Calculator className="h-6 w-6 text-primary" />
              {t('calculator.title')}
            </h3>
            <p className="text-gray-400 mb-8 text-sm">
              {t('calculator.description')}
            </p>

            <div className="space-y-6">
              {/* Leads Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">{t('calculator.leadsLabel')}</label>
                  <span className="text-primary font-bold">{leads}</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="2000" 
                  step="10"
                  value={leads}
                  onChange={(e) => setLeads(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Booking Value Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">{t('calculator.bookingLabel')}</label>
                  <span className="text-primary font-bold">${avgBooking.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="20000" 
                  step="500"
                  value={avgBooking}
                  onChange={(e) => setAvgBooking(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Response Rate Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">{t('calculator.responseLabel')}</label>
                  <span className="text-primary font-bold">{responseRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  value={responseRate}
                  onChange={(e) => setResponseRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Result */}
              <div className="pt-8 border-t border-gray-800">
                <p className="text-sm text-gray-400 mb-1">{t('calculator.resultLabel')}</p>
                <div className="text-4xl md:text-5xl font-black text-primary">
                  ${lostRevenue.toLocaleString()}
                </div>
              </div>

              <a
                href="https://cal.com/kairos-ai/discovery-call"
                className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold text-center transition-colors flex items-center justify-center gap-2 mt-4"
              >
                {t('calculator.cta')}
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
