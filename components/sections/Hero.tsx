"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(0,78,137,0.03)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(255,107,53,0.03)_0%,_transparent_40%)]" />

      {/* Hero with Background and Overlay Logo */}
      <div className="relative w-full mb-8 h-64 md:h-[50vh]">
        <img
          src="/fondo-claro-2.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/logo-kairos-negro.png"
            alt="Kairos Software Studio"
            className="w-64 md:w-[28rem] h-auto object-contain"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* Subheadline - Enhanced prominence */}
            <div className="max-w-4xl mx-auto mb-14 space-y-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
                  We&apos;ve done 20+ enterprise HubSpot migrations.
                </p>
                {/* HubSpot Partner Badge - Smaller & Below Text on Mobile, Inline on Desktop */}
                <div className="inline-flex items-center gap-1.5 bg-secondary/5 border border-secondary/20 rounded-full px-3 py-1 flex-shrink-0">
                  <Shield className="h-3.5 w-3.5 text-[#FF6B35]" />
                  <span className="text-secondary text-[10px] md:text-sm font-medium tracking-wide">
                    HubSpot Solutions Provider
                  </span>
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We&apos;ve integrated systems for companies with $1B+ in revenue.
              </p>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                These are some of the companies we&apos;ve worked with:
              </p>
            </div>

            {/* Client Logos */}
            <div className="mb-16 md:my-16 w-full max-w-5xl mx-auto overflow-hidden">
              <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
                <img src="/clients-logos/mazda-white-logo-png-701751694713321wd3xjkgicu.png" alt="Mazda" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" />
                <img src="/clients-logos/haas.webp" alt="Haas" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" />
                <img src="/clients-logos/air-new-zealand-logo.png" alt="Air New Zealand" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" />
                <img src="/clients-logos/ahoy-club-logo.webp" alt="Ahoy Club" className="h-5 md:h-7 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" />
                <img src="/clients-logos/dbvisit_dark-logo.svg" alt="DBVisit" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" />
                <img src="/clients-logos/epassi-logo.svg" alt="Epassi" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" />
                <img src="/clients-logos/jacobsen-logo.svg" alt="Jacobsen" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" />
                <img src="/clients-logos/EnergySmart Icon_Lime.svg" alt="EnergySmart" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" />
                <img src="/clients-logos/crew-cut-logo-1-300x77+(1).webp" alt="Crew Cut" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" />
                <img src="/clients-logos/medianet-logo.webp" alt="MediaNet" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 bg-gray-800 px-2 py-1 rounded" />
                <img src="/clients-logos/greenline-logo.jpg" alt="Greenline" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 rounded" />
                <img src="/clients-logos/sertronic-logo.png" alt="Sertronic" className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" />
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center items-center">
              <a
                href="https://meetings.hubspot.com/amadero"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
              >
                Schedule Technical Consultation
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
