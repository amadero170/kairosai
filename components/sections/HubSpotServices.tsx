"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Database,
  Plug,
  Search,
  ArrowRight,
  Clock,
  DollarSign,
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Technical Implementation",
    description:
      "Complete setup of Sales, Marketing, or Service Hub. Custom properties, pipelines, workflows, and dashboards.",
    timeline: "2-4 weeks",
    investment: "$30K-60K MXN",
  },
  {
    icon: Database,
    title: "Enterprise Migration",
    description:
      "Clean data migration from Salesforce, Dynamics, MailChimp, or Excel. Deduplication, validation, and relationship mapping.",
    timeline: "1-3 weeks",
    investment: "$25K-70K MXN",
  },
  {
    icon: Plug,
    title: "Custom Integrations",
    description:
      "Connect HubSpot with your specialized tools via API or middleware. ERP systems, property management, custom databases.",
    timeline: "2-4 weeks",
    investment: "$35K-90K MXN",
  },
  {
    icon: Search,
    title: "HubSpot Audit & Optimization",
    description:
      "Review your current setup and identify improvement opportunities. Workflow optimization, data cleanup, process recommendations.",
    timeline: "1 week",
    investment: "$15K-30K MXN",
  },
];

export default function HubSpotServices() {
  return (
    <section id="services" className="py-16 md:py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            HubSpot <span className="text-primary">Solutions</span>
          </h2>
        </motion.div>

        {/* Services Grid - Pricing Card Style */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-dark">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{service.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-primary">
                      {service.investment}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://meetings.hubspot.com/amadero"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get a Custom Quote
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
