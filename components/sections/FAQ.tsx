"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What if we already have a poorly configured CRM?",
    answer:
      "No problem. We start with an audit to understand the current state, identify what works and what doesn't, and create a plan to optimize without losing historical data. Whether it's HubSpot, Salesforce, or Pipedrive, we've handled complex cleanup projects.",
  },
  {
    question: "Will we lose data during migration?",
    answer:
      "No. Our process includes data validation before, during, and after migration. We make complete backups and run in a test environment first. In 20+ enterprise migrations, we have never lost a single record.",
  },
  {
    question: "How do AI agents integrate with our existing systems?",
    answer:
      "We build custom AI agents that connect directly to your CRM, databases, and communication channels. They can handle customer inquiries, qualify leads, schedule appointments, and more—all while syncing data back to your systems in real-time.",
  },
  {
    question: "Can you automate workflows between different tools?",
    answer:
      "Absolutely. We specialize in connecting disparate systems—CRMs, ERPs, inventory systems, communication tools. If there's an API, we can integrate it. If there isn't, we build custom solutions.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope: basic CRM implementation 2-4 weeks, migrations 1-3 weeks, custom integrations 2-4 weeks, AI agent development 3-6 weeks. We give you a specific timeline in the proposal.",
  },
  {
    question: "What if we need changes afterwards?",
    answer:
      "We train your team so they can make minor adjustments. For major changes, we offer optional support through monthly retainer or one-off projects. You're not tied to us, but we're available if you need us.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-dark pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
