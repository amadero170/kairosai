"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Discovery Call",
    time: "45-60 min",
    description:
      "We ask detailed questions about your current systems and needs. No sales pitch—just technical understanding.",
  },
  {
    number: "2",
    title: "Detailed Proposal",
    time: "2-3 days",
    description:
      "Clear scope: what's included, what's not, timeline, investment. No hidden costs or surprise 'additional modules.'",
  },
  {
    number: "3",
    title: "Iterative Implementation",
    time: "2-8 weeks",
    description:
      "Weekly check-ins showing real progress. You see things working before everything's done.",
  },
  {
    number: "4",
    title: "Training & Handoff",
    time: "1-2 sessions",
    description:
      "We train your team and provide documentation. You're not dependent on us.",
  },
  {
    number: "5",
    title: "Optional Support",
    time: "Ongoing",
    description:
      "Monthly retainer for ongoing improvements if you want it. Not required.",
  },
];

export default function HowWeWork() {
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
            Our Process:{" "}
            <span className="text-primary">Fast, Iterative, Transparent</span>
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
