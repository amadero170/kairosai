"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

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
              {t('description')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('servicesTitle')}</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">
                  {t('omnichannelInbox')}
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  {t('dataMigration')}
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  {t('customIntegrations')}
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  {t('businessAutomation')}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('contactTitle')}</h4>
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
                  href="https://cal.com/kairos-ai/discovery-call"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {t('scheduleCall')}
                </a>
              </li>
            </ul>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Kairos Automation. {t('copyright')}
            </p>
            <p className="text-gray-600 text-xs">
              {t('legalName')}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-gray-500 text-sm hover:text-primary transition-colors">
              {t('privacyPolicy')}
            </Link>
            <span className="text-gray-700">|</span>
            <Link href="/terms-of-service" className="text-gray-500 text-sm hover:text-primary transition-colors">
              {t('termsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
