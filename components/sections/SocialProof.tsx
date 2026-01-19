"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: "20+",
    text: "Enterprise HubSpot migrations completed",
  },
  {
    number: "0",
    text: "Failed migrations (100% success rate)",
  },
  {
    number: "Global",
    text: "Implementations for brands like Mazda, HAAS Automation, Air New Zealand",
  },
  {
    number: "100+",
    text: "Hours per month saved across automation projects",
  },
];

const clientLogos = [
  { name: "Mazda" },
  { name: "HAAS Automation" },
  { name: "Air New Zealand" },
  { name: "Enterprise Client" },
  { name: "Tech Company" },
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Companies That Don&apos;t Settle for{" "}
            <span className="text-primary">&quot;Good Enough&quot;</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-gray-400">{stat.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-wider">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg px-6 py-4 text-gray-400 font-medium hover:bg-gray-800 transition-colors"
              >
                {/* Logo placeholder */}
                <span className="text-sm">{client.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
