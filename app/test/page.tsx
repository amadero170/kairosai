"use client";

import Script from "next/script";
import "./test.css";

// Declare iconify-icon as a custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          icon?: string;
          width?: string | number;
        },
        HTMLElement
      >;
    }
  }
}

export default function TestPage() {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script
        src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
        strategy="beforeInteractive"
      />

      <div className="text-zinc-400 antialiased selection:bg-orange-500/20 selection:text-orange-200">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <a
              href="#"
              className="text-white font-medium tracking-tighter text-lg flex items-center gap-2"
            >
              <div className="w-5 h-5 bg-gradient-to-br from-white to-zinc-500 rounded-sm"></div>
              KAIROS
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a
                href="#expertise"
                className="hover:text-white transition-colors"
              >
                Expertise
              </a>
              <a href="#process" className="hover:text-white transition-colors">
                Process
              </a>
              <a
                href="#solutions"
                className="hover:text-white transition-colors"
              >
                Solutions
              </a>
            </div>
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 text-xs font-medium text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-4 py-2 rounded-full transition-all group"
            >
              Book Consultation
              <iconify-icon
                icon="lucide:arrow-right"
                width="14"
                className="group-hover:translate-x-0.5 transition-transform"
              ></iconify-icon>
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 grid-bg pointer-events-none z-0"></div>
          {/* Spotlight Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-200 text-xs font-medium mb-8">
              <iconify-icon
                icon="lucide:check-circle"
                width="12"
                className="text-orange-500"
              ></iconify-icon>
              HubSpot Certified Solutions Partner
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
              CRM Engineering.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-600">
                Minus the fluff.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              We are technical specialists implementing high-velocity HubSpot
              architectures. No generic marketing jargon, just robust data
              pipelines and automation logic.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#audit"
                className="h-12 px-8 rounded-full bg-white text-black font-medium text-sm flex items-center justify-center hover:bg-zinc-200 transition-colors w-full sm:w-auto"
              >
                Start Technical Audit
              </a>
              <a
                href="#work"
                className="h-12 px-8 rounded-full glass-panel text-white font-medium text-sm flex items-center justify-center hover:bg-white/5 transition-colors w-full sm:w-auto"
              >
                View Architecture
              </a>
            </div>
          </div>
        </section>

        {/* Metrics / Social Proof */}
        <section className="border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-600 mb-8">
              Trusted for complex implementations
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
              {/* Placeholder Logos with Text for demonstration */}
              <div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
                <iconify-icon icon="lucide:box" width="24"></iconify-icon> ACME
                Corp
              </div>
              <div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
                <iconify-icon icon="lucide:hexagon" width="24"></iconify-icon>{" "}
                Polymath
              </div>
              <div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
                <iconify-icon icon="lucide:triangle" width="24"></iconify-icon>{" "}
                Vertex
              </div>
              <div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
                <iconify-icon
                  icon="lucide:circle-dashed"
                  width="24"
                ></iconify-icon>{" "}
                Orbit
              </div>
            </div>
          </div>
        </section>

        {/* Value Prop / Bento Grid */}
        <section id="expertise" className="py-24 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 md:mb-24">
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
                Engineering-First Approach
              </h2>
              <p className="text-zinc-500 max-w-lg text-lg">
                We treat your CRM as a product, not a database. Scalable, clean,
                and documented.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="glass-panel p-8 rounded-2xl col-span-1 md:col-span-2 group hover:border-zinc-700 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500">
                  <iconify-icon
                    icon="lucide:workflow"
                    width="20"
                  ></iconify-icon>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">
                  Advanced Workflow Automation
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                  We build self-healing automation sequences that handle complex
                  routing, lead scoring, and data enrichment without manual
                  intervention.
                </p>
                <div className="mt-8 border-t border-white/5 pt-6 flex gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wider text-zinc-600">
                      Logic
                    </span>
                    <span className="text-sm text-zinc-300 font-mono">
                      Custom Coded Actions
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wider text-zinc-600">
                      Scale
                    </span>
                    <span className="text-sm text-zinc-300 font-mono">
                      Enterprise Grade
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="glass-panel p-8 rounded-2xl col-span-1 group hover:border-zinc-700 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
                  <iconify-icon
                    icon="lucide:database"
                    width="20"
                  ></iconify-icon>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">
                  Data Migration
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Lossless migration from Salesforce, Pipedrive, or legacy SQL
                  databases with strict validation protocols.
                </p>
              </div>

              {/* Card 3 */}
              <div className="glass-panel p-8 rounded-2xl col-span-1 group hover:border-zinc-700 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500">
                  <iconify-icon icon="lucide:webhook" width="20"></iconify-icon>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">
                  API Integration
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Connecting your product database to HubSpot via private apps
                  and webhooks for real-time synchronization.
                </p>
              </div>

              {/* Card 4 */}
              <div className="glass-panel p-8 rounded-2xl col-span-1 md:col-span-2 group hover:border-zinc-700 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-500">
                    <iconify-icon
                      icon="lucide:shield-check"
                      width="20"
                    ></iconify-icon>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    RevOps Architecture
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                    Structuring your deal pipelines and reporting objects to
                    reflect true revenue reality, not wishful thinking.
                  </p>
                </div>
                {/* Visual decoration for code snippet */}
                <div className="bg-black/40 border border-white/5 rounded-lg p-4 font-mono text-xs text-zinc-500 w-full md:w-64">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/20"></div>
                  </div>
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">audit</span> ={" "}
                    <span className="text-purple-400">await</span>{" "}
                    hubspot.crm.search();
                  </p>
                  <p className="mt-1">if (audit.score &gt; 90) {"{"}</p>
                  <p className="pl-4 text-emerald-400">
                    return &quot;Optimized&quot;;
                  </p>
                  <p>{"}"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Process */}
        <section className="py-24 border-y border-white/5 bg-zinc-900/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                  HubSpot Solutions Partner
                </h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  As a certified partner, we don&apos;t just &quot;set up&quot;
                  HubSpot. We engineer it to be the operating system of your
                  revenue team.
                </p>

                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full border border-orange-500/30 flex items-center justify-center bg-orange-500/10 shrink-0">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        Schema Design
                      </h4>
                      <p className="text-sm text-zinc-500 mt-1">
                        Custom objects and property mapping before a single
                        record is imported.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-800 shrink-0">
                      <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        Sanitization
                      </h4>
                      <p className="text-sm text-zinc-500 mt-1">
                        Deduplication and standardization of legacy data using
                        Python scripts.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-800 shrink-0">
                      <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        Deployment & Training
                      </h4>
                      <p className="text-sm text-zinc-500 mt-1">
                        Phased rollout with technical documentation for your
                        internal admins.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative">
                {/* Abstract Interface Representation */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl blur-xl opacity-50"></div>
                <div className="relative bg-zinc-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                  <div className="h-8 bg-zinc-900 border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-orange-500">
                          <iconify-icon
                            icon="lucide:layers"
                            width="16"
                          ></iconify-icon>
                        </div>
                        <div>
                          <div className="text-sm text-white font-medium">
                            Enterprise Portal
                          </div>
                          <div className="text-xs text-zinc-500">
                            HubSpot Ent. Suite
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-green-500 font-mono bg-green-500/10 px-2 py-1 rounded">
                        Active
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-zinc-500">
                        <span>API Usage</span>
                        <span>84%</span>
                      </div>
                      <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-zinc-500 h-full w-[84%]"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="bg-zinc-900/50 p-3 rounded border border-white/5">
                        <div className="text-xs text-zinc-500 mb-1">
                          Workflows
                        </div>
                        <div className="text-lg text-white font-mono">142</div>
                      </div>
                      <div className="bg-zinc-900/50 p-3 rounded border border-white/5">
                        <div className="text-xs text-zinc-500 mb-1">
                          Custom Objects
                        </div>
                        <div className="text-lg text-white font-mono">08</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="solutions" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">
              Specific Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
                <iconify-icon
                  icon="lucide:settings-2"
                  className="text-zinc-400 mb-4"
                  width="24"
                ></iconify-icon>
                <h3 className="text-white text-sm font-medium mb-2">
                  Technical Implementation
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Setup, configuration, and DNS authentication for new portals.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
                <iconify-icon
                  icon="lucide:git-merge"
                  className="text-zinc-400 mb-4"
                  width="24"
                ></iconify-icon>
                <h3 className="text-white text-sm font-medium mb-2">
                  System Integration
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Native and custom integrations with ERP, LMS, and SaaS
                  products.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
                <iconify-icon
                  icon="lucide:file-code"
                  className="text-zinc-400 mb-4"
                  width="24"
                ></iconify-icon>
                <h3 className="text-white text-sm font-medium mb-2">
                  CMS Development
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Custom themes and modules built on HubSpot CMS Hub.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
                <iconify-icon
                  icon="lucide:bar-chart-3"
                  className="text-zinc-400 mb-4"
                  width="24"
                ></iconify-icon>
                <h3 className="text-white text-sm font-medium mb-2">
                  Reporting & Attribution
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Dashboarding that connects marketing spend to closed revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
              Ready to optimize?
            </h2>
            <p className="text-zinc-400 text-lg mb-10">
              Stop wrestling with your CRM. Let us engineer a solution that
              scales.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="work@email.com"
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600"
              />
              <button
                type="button"
                className="bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap"
              >
                Book Consultation
              </button>
            </form>
            <p className="text-zinc-600 text-xs mt-4">
              No marketing spam. Direct line to an architect.
            </p>
          </div>

          {/* Background radial */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-orange-500/10 blur-[100px] pointer-events-none"></div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12 bg-black">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <a
                href="#"
                className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 mb-4"
              >
                KAIROS
              </a>
              <p className="text-zinc-500 text-sm max-w-xs">
                HubSpot Certified Solutions Partner.
                <br />
                Automating the future of work.
              </p>
            </div>

            <div className="flex gap-16 text-sm">
              <div className="flex flex-col gap-3">
                <h4 className="text-white font-medium">Services</h4>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Implementation
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Migration
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Integration
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-white font-medium">Company</h4>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
            <p className="text-zinc-600 text-xs">
              © 2024 Kairos Automation. All rights reserved.
            </p>
            <div className="flex gap-4 text-zinc-600">
              <iconify-icon
                icon="lucide:linkedin"
                width="16"
                className="hover:text-white cursor-pointer transition-colors"
              ></iconify-icon>
              <iconify-icon
                icon="lucide:twitter"
                width="16"
                className="hover:text-white cursor-pointer transition-colors"
              ></iconify-icon>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
