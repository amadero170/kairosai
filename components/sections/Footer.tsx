"use client";

import React from "react";
import Image from "next/image";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Image
              src="/logo-kairos-blanco.png"
              alt="Kairos"
              width={360}
              height={120}
              className="h-36 w-auto mb-4"
            />
            <p className="text-gray-400 max-w-sm">
              Technical HubSpot implementation and business automation by
              developers who understand your systems.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  HubSpot Implementation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Data Migration
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Custom Integrations
                </a>
              </li>
              <li>
                <a
                  href="/automation"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Business Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:alberto@kairosautomation.ai"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  alberto@kairosautomation.ai
                </a>
              </li>
              <li>
                <a
                  href="https://meetings.hubspot.com/amadero"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Schedule a Call
                </a>
              </li>
            </ul>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kairos AI. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Technical HubSpot Implementation & Business Automation
          </p>
        </div>
      </div>
    </footer>
  );
}
