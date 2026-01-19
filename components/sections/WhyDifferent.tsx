"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Users, MessageSquare } from "lucide-react";

export default function WhyDifferent() {
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
            Why We&apos;re Different:{" "}
            <span className="text-primary">
              Developers First, Not Marketers
            </span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>At Kairos, everyone on the team is technical—including sales.</p>
            <p>
              When you talk to us about migrating from Salesforce or building a
              custom integration with your ERP, you&apos;re speaking directly
              with the developers who will build it.
            </p>
            <p className="font-semibold text-dark">
              No telephone game. No project managers translating. No surprises.
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
              <span className="font-semibold text-dark">Technical Team</span>
              <span className="text-sm text-gray-500">Everyone codes</span>
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
              <span className="font-semibold text-dark">Direct Access</span>
              <span className="text-sm text-gray-500">
                Talk to the builders
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
              <span className="font-semibold text-dark">No Middlemen</span>
              <span className="text-sm text-gray-500">
                Zero translation errors
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
