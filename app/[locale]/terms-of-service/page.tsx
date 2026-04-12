"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
  const t = useTranslations("Footer");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-dark py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Link>
          <Image
            src="/logo-kairos-blanco.png"
            alt="Kairos Automation"
            width={200}
            height={67}
            className="h-16 w-auto"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: April 12, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">1. Agreement to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the services provided by Kairos Automation (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a trade name of Mariana Valdivia Reyes, including our website at kairosautomation.ai and our platform at app.kairosautomation.ai (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed">
              Kairos Automation provides an omnichannel communication platform that enables businesses, primarily in the hospitality industry, to manage guest and customer communications across multiple messaging channels (including WhatsApp, Instagram, Facebook Messenger, email, and web chat) from a unified inbox. Our Service includes AI-powered automated responses, analytics, and integration with third-party messaging platforms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">3. Account Registration</h2>
            <p className="text-gray-600 leading-relaxed">
              To use our Service, you must create an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">4. Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed mb-3">You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Send unsolicited or spam messages</li>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Transmit harmful, offensive, or illegal content</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with or disrupt the Service or its infrastructure</li>
              <li>Violate the terms of service of connected third-party platforms (Meta, WhatsApp, etc.)</li>
              <li>Use the Service for any purpose other than legitimate business communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">5. Third-Party Platforms</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Service integrates with third-party platforms including Meta Platforms (Facebook, Instagram, WhatsApp) and others. Your use of these integrations is subject to the respective terms and policies of those platforms. We are not responsible for changes to third-party platform policies, API availability, or pricing that may affect the functionality of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">6. AI-Powered Features</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Service includes AI-powered features such as automated responses and message suggestions. While we strive for accuracy, AI-generated content may occasionally contain errors. You are responsible for reviewing and approving automated responses configured for your account. We recommend monitoring AI interactions regularly to ensure quality and accuracy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">7. Payment and Billing</h2>
            <p className="text-gray-600 leading-relaxed">
              Service fees are as agreed upon during onboarding. Payment terms, billing cycles, and pricing will be specified in your service agreement. We reserve the right to modify pricing with 30 days&apos; written notice. Failure to pay may result in suspension or termination of your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">8. Data and Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of the Service is also governed by our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>. You are responsible for ensuring that your use of the Service complies with applicable data protection laws and that you have obtained necessary consents from your customers/guests for the processing of their data through our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">9. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              The Service, including its design, features, and content (excluding your data), is owned by Kairos Automation and protected by intellectual property laws. You retain ownership of your data and content. By using the Service, you grant us a limited license to process your data solely for the purpose of providing the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">10. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              To the maximum extent permitted by law, Kairos Automation shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of the Service. Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">11. Service Availability</h2>
            <p className="text-gray-600 leading-relaxed">
              We strive to maintain high availability of the Service but do not guarantee uninterrupted access. We may perform maintenance, updates, or modifications that temporarily affect availability. We will make reasonable efforts to provide advance notice of planned downtime.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">12. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              Either party may terminate the service relationship with 30 days&apos; written notice. We may suspend or terminate your account immediately if you violate these Terms. Upon termination, you may request export of your data within 30 days. After that period, we will delete your data in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">13. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through the Service. Your continued use of the Service after changes take effect constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">14. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of the Service shall be resolved through good-faith negotiation first, and if necessary, through binding arbitration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">15. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none pl-0 text-gray-600 space-y-1 mt-3">
              <li><strong>Kairos Automation</strong></li>
              <li>Email: alberto@kairosautomation.ai</li>
              <li>Website: kairosautomation.ai</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
