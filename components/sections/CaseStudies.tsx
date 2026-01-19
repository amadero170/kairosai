"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Sun } from "lucide-react";

const cases = [
  {
    icon: Building2,
    title: "Property Management Company - 52K Contacts Migration",
    challenge: "Moving from MailChimp with 15 properties, complex guest data",
    solution: "Clean migration + Guesty integration + automated workflows",
    result: "Single source of truth for marketing, sales, and operations",
    link: "/hubspot",
    gradient: "from-secondary to-secondary-dark",
  },
  {
    icon: Sun,
    title: "Solar Energy Company - Operations Automation",
    challenge: "Manual reporting, deposits tracking, commission calculations",
    solution: "Real-time dashboard + automated reconciliation + instant payouts",
    result: "21 hours/month saved, zero calculation errors",
    link: "/automation",
    gradient: "from-primary to-primary-hover",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Recent <span className="text-primary">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Gradient header / image placeholder */}
                <div
                  className={`h-32 md:h-40 bg-gradient-to-br ${caseStudy.gradient} flex items-center justify-center`}
                >
                  <Icon className="h-16 w-16 text-white/80" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-bold text-dark mb-4">
                    {caseStudy.title}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Challenge
                      </span>
                      <p className="text-gray-600 text-sm mt-1">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Solution
                      </span>
                      <p className="text-gray-600 text-sm mt-1">
                        {caseStudy.solution}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Result
                      </span>
                      <p className="text-dark font-medium text-sm mt-1">
                        {caseStudy.result}
                      </p>
                    </div>
                  </div>

                  <a
                    href={caseStudy.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Read Full Case Study
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
