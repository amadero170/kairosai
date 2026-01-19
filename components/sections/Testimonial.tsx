"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Quote icon */}
          <div className="absolute -top-4 -left-2 md:-left-8">
            <Quote className="h-16 w-16 md:h-24 md:w-24 text-primary/10" />
          </div>

          <div className="relative z-10 text-center">
            {/* Quote text */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-dark leading-relaxed mb-8">
              &quot;Kairos migró 52,000 contactos en 2 semanas sin perder un
              solo dato. Su equipo técnico entendió exactamente lo que
              necesitábamos desde la primera llamada.&quot;
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center">
              {/* Avatar placeholder */}
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <User className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-dark">
                  Director de Operaciones
                </p>
                <p className="text-gray-500">Property Management Company</p>
                <p className="text-sm text-gray-400 mt-1">Florida, USA</p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-2 md:-right-8 rotate-180">
            <Quote className="h-16 w-16 md:h-24 md:w-24 text-primary/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
