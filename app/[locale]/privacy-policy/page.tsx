"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  const t = useTranslations("Footer");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-dark pt-24 pb-8">
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
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: October 27, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Kairos Automation (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a trade name of Mariana Valdivia Reyes, operates the website kairosautomation.ai, the platform at app.kairosautomation.ai, and custom business systems built and operated for its clients (collectively, the &quot;Service&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We collect information in the following ways:</p>
            <h3 className="text-lg font-medium text-dark mb-2">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Account registration information (name, email address, business name)</li>
              <li>Communication content sent and received through our platform (messages via WhatsApp, Instagram, Facebook Messenger, email, and other connected channels)</li>
              <li>Contact information of your customers/guests that you manage through our platform</li>
              <li>Business information provided during onboarding (hotel details, services, policies)</li>
            </ul>

            <h3 className="text-lg font-medium text-dark mt-4 mb-2">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Usage data (pages visited, features used, interaction patterns)</li>
              <li>Device information (browser type, operating system, IP address)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-lg font-medium text-dark mt-4 mb-2">2.3 Information from Third-Party Platforms</h3>
            <p className="text-gray-600 leading-relaxed">
              When you connect your social media and messaging accounts to our Service, we receive information from Meta Platforms (Facebook, Instagram, WhatsApp) and other providers as authorized by you. This includes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
              <li>Facebook Page information and metadata</li>
              <li>Instagram business account information</li>
              <li>WhatsApp Business account information and message content</li>
              <li>Messenger conversation content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We use the collected information to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Provide, operate, and maintain our omnichannel communication platform</li>
              <li>Route and deliver messages between you and your customers/guests across connected channels</li>
              <li>Power AI-assisted responses and automated workflows configured by you</li>
              <li>Generate analytics and reports on communication performance</li>
              <li>Improve and optimize our Service</li>
              <li>Communicate with you about your account and our Service</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">4. Use of Meta Platform Data</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Service integrates with Meta Platforms (Facebook, Instagram, WhatsApp) to enable omnichannel messaging. We access and use Meta platform data strictly in accordance with Meta&apos;s Platform Terms and Developer Policies. Specifically:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-3">
              <li>We use <strong>pages_read_engagement</strong> and <strong>pages_show_list</strong> to retrieve and display your Facebook Pages so you can select which page to connect to the inbox.</li>
              <li>We use <strong>pages_messaging</strong> to send and receive messages on your behalf through Facebook Messenger.</li>
              <li>We use <strong>instagram_business_basic</strong> to access your Instagram business account information for channel connection.</li>
              <li>We use <strong>instagram_business_manage_messages</strong> to send and receive Instagram Direct Messages on your behalf.</li>
              <li>We use <strong>whatsapp_business_messaging</strong> to send and receive WhatsApp messages on your behalf.</li>
              <li>We use <strong>whatsapp_business_management</strong> to manage your WhatsApp Business account configuration.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              We do not sell, lease, or share Meta platform data with third parties for their own purposes. Data obtained from Meta APIs is used solely to provide our Service to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">5. Use of Google User Data</h2>
            <p className="text-gray-600 leading-relaxed">
              Some parts of our Service let you sign in with your Google account. When you do, we receive only your name, email address, and profile picture (the <strong>openid</strong>, <strong>email</strong>, and <strong>profile</strong> scopes). Specifically:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-3">
              <li>We use this information solely to identify you, verify that your email address has been granted access by the account owner, and keep your session active.</li>
              <li>We do not access your Gmail, Google Drive, Calendar, contacts, or any other Google data through your sign-in.</li>
              <li>We do not sell Google user data, use it for advertising, or transfer it to third parties except as needed to operate the Service, comply with the law, or with your consent.</li>
              <li>Our use of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" className="underline" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              Where a client&apos;s system stores files in that client&apos;s own Google Drive, the system connects through a service account that the client adds to a specific shared drive. It does not access any individual user&apos;s Google account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">6. Custom Systems Built for Clients</h2>
            <p className="text-gray-600 leading-relaxed">
              We build and operate custom business systems (for example, budgeting, payments, and project control) for companies that hire us. In these systems:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-3">
              <li><strong>The client is the owner and controller of the data.</strong> Kairos Automation processes it only on the client&apos;s behalf and under its instructions, to build, operate, maintain, and support the system.</li>
              <li>Only people whose email address has been registered by the client can access the system.</li>
              <li>We do not use client data for any purpose other than providing the system, and we do not share it with other clients.</li>
              <li>When the engagement ends, we return the data to the client in a standard format and then delete it from our systems, except where retention is required by law.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              If you are a user of a system we operate for one of our clients, you may contact that client or us to exercise your rights over your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">7. Data Storage and Security</h2>
            <p className="text-gray-600 leading-relaxed">
              Your data is stored on secure servers. We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption in transit (TLS/SSL), access controls, and regular security reviews.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">8. Data Sharing and Disclosure</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li><strong>Service providers:</strong> Third-party services that help us operate our platform (hosting, databases, file storage, email delivery, AI processing), such as Vercel, Neon, and Google, under strict data processing agreements.</li>
              <li><strong>Legal requirements:</strong> When required by law, regulation, or legal process.</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              <li><strong>With your consent:</strong> When you explicitly authorize sharing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">9. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your data for as long as your account is active or as needed to provide you with our Service. You may request deletion of your data at any time by contacting us. Upon account termination, we will delete or anonymize your data within 90 days, except where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">10. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              To exercise any of these rights, please contact us at alberto@kairosautomation.ai.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">11. Data Deletion</h2>
            <p className="text-gray-600 leading-relaxed">
              You can request deletion of your data by emailing alberto@kairosautomation.ai. For data obtained through Meta platforms, you may also revoke our access at any time through your Facebook, Instagram, or WhatsApp settings. If you signed in with Google, you can revoke our access at any time at <a href="https://myaccount.google.com/permissions" className="underline" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a>. Upon receiving a deletion request, we will remove your data within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">12. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of the Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-3">13. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, please contact us:
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
