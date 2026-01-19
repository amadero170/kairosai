"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Workflow, LayoutDashboard, Package, ArrowRight, GitMerge } from "lucide-react";

const automationServices = [
  {
    icon: GitMerge,
    text: "CRM integration & migration (Salesforce, Pipedrive, HubSpot)",
  },
  {
    icon: MessageSquare,
    text: "AI agents implementation for your specific needs",
  },
  {
    icon: Workflow,
    text: "Workflow automation connecting your existing tools",
  },
  {
    icon: LayoutDashboard,
    text: "Custom portals and dashboards with real-time data",
  },
  {
    icon: Package,
    text: "Inventory and forecast systems for manufacturing",
  },
];

export default function BeyondHubSpot() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            What We <span className="text-primary">Build</span>
          </h2>
          <p className="text-lg text-gray-600">
            Technical solutions that scale with your business
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-4 md:gap-6 mb-10"
        >
          {automationServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 bg-light-gray rounded-lg p-4 border border-gray-200"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-700">{service.text}</span>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="https://meetings.hubspot.com/amadero"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}