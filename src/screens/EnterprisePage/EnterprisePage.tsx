"use client";
import React, { useState } from "react";
import { Building2, BarChart3, Shield, Headphones } from "lucide-react";
import { SEO } from "../../components/SEO";
import { Navbar } from "../../components/Navbar";
import { DemoModal } from "../../components/DemoModal";
import { DownloadAppSection } from "../LandingPage/sections/DownloadAppSection";

const features = [
  {
    icon: Building2,
    title: "Multi-Venue Management",
    description:
      "Manage all your venues from a single dashboard. Unified analytics, guest lists, and promotions across your entire portfolio.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Deep insights into attendance patterns, revenue metrics, and customer demographics to drive data-informed decisions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant infrastructure with role-based access control, SSO integration, and dedicated data privacy controls.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Priority 24/7 support with a dedicated account manager and custom onboarding for your team.",
  },
];

export const EnterprisePage = (): JSX.Element => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="w-full flex flex-col min-h-screen overflow-x-hidden bg-[#0a0a0a]">
      <SEO
        title="Enterprise"
        description="Bassh Enterprise — multi-venue management, advanced analytics, priority support, and custom integrations for large nightlife groups."
        path="/enterprise"
      />
      <Navbar onRequestDemo={() => setDemoOpen(true)} />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-full max-w-[600px] h-[300px] sm:h-[400px] bg-[#ff007e10] rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-full max-w-[400px] h-[200px] sm:h-[300px] bg-[#a200ff08] rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-2">
          <span className="inline-block px-4 py-1.5 mb-4 sm:mb-6 text-xs font-medium text-[#ff007e] border border-[#ff007e]/30 rounded-full [font-family:'Poppins',Helvetica] uppercase tracking-wider">
            Enterprise
          </span>
          <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 sm:mb-4 animate-blur-in">
            Built for Scale
          </h1>
          <p className="[font-family:'Inter',Helvetica] text-white/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Powerful tools for hospitality groups and large venue operators.
            Streamline operations and elevate every guest experience.
          </p>
          <button
            onClick={() => setDemoOpen(true)}
            className="inline-flex items-center px-5 py-2.5 min-h-[2.75rem] text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200 [font-family:'Poppins',Helvetica]"
          >
            Request a Demo
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/[0.08] bg-white/[0.05] backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-white/[0.15] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(255,0,126,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] animate-slide-up-fade"
                style={{ animationDelay: `${300 + i * 150}ms` }}
              >
                <div className="mb-4">
                  <Icon className="w-6 h-6 text-[#ff007e]" />
                </div>
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-white text-base sm:text-lg mb-1.5 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <DownloadAppSection />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};
