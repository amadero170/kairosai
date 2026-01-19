"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const traditionalAgencies = [
  "3 months of 'strategy discovery'",
  "Buyer persona workshops you've already done",
  "Project managers who translate (poorly) between you and developers",
  "$15K/month retainers with unclear deliverables",
];

const whatYouNeed = [
  "Clean migration from your current system",
  "Custom integrations that actually work",
  "Workflows that match YOUR process",
  "Direct communication with the developers doing the work",
];

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Most HubSpot Agencies Sell You What They Want,{" "}
            <span className="text-primary">Not What You Need</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Traditional Agencies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-6 md:p-8 border border-gray-200"
          >
            <h3 className="text-xl md:text-2xl font-bold text-dark mb-6">
              Traditional HubSpot Agencies:
            </h3>
            <ul className="space-y-4">
              {traditionalAgencies.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What You Actually Need */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-lg"
          >
            <h3 className="text-xl md:text-2xl font-bold text-dark mb-6">
              What You Actually Need:
            </h3>
            <ul className="space-y-4">
              {whatYouNeed.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
