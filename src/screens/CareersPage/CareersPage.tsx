"use client";
import React, { useState } from "react";
import { MapPin, Clock } from "lucide-react";
import { SEO } from "../../components/SEO";
import { Navbar } from "../../components/Navbar";
import { DemoModal } from "../../components/DemoModal";
import { DownloadAppSection } from "../LandingPage/sections/DownloadAppSection";

const openings = [
  {
    title: "Senior Frontend Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "Growth Marketing Manager",
    team: "Marketing",
    location: "Los Angeles, CA",
    type: "Full-time",
  },
  {
    title: "Backend Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Partnerships Lead",
    team: "Business Development",
    location: "Miami, FL",
    type: "Full-time",
  },
];

export const CareersPage = (): JSX.Element => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="w-full flex flex-col min-h-screen overflow-x-hidden bg-[#0a0a0a]">
      <SEO
        title="Careers"
        description="Join the Bassh team and help build India's #1 nightlife platform. Explore open positions in engineering, design, marketing, and more."
        path="/careers"
      />
      <Navbar onRequestDemo={() => setDemoOpen(true)} />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-full max-w-[600px] h-[300px] sm:h-[400px] bg-[#ff007e0c] rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-2">
          <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 sm:mb-4 animate-blur-in">
            Join the Team
          </h1>
          <p className="[font-family:'Inter',Helvetica] text-white/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Help us redefine nightlife. We're looking for passionate people who
            want to build something extraordinary.
          </p>
        </div>
      </section>

      {/* Openings */}
      <section className="relative px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="[font-family:'Poppins',Helvetica] font-medium text-white text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">
            Open Positions
          </h2>
          <div className="text-center py-12 sm:py-16 rounded-xl border border-white/10 bg-white/[0.02] animate-slide-up-fade" style={{ animationDelay: "300ms" }}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium text-[#ff007e] border border-[#ff007e]/30 rounded-full [font-family:'Poppins',Helvetica] uppercase tracking-wider">
              Coming Soon
            </span>
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-lg sm:text-xl mb-2">
              We're launching soon!
            </h3>
            <p className="[font-family:'Inter',Helvetica] text-white/50 text-sm sm:text-base max-w-md mx-auto px-4">
              We're building something exciting. Check back soon for open positions, or reach out to us at careers@bassh.app
            </p>
          </div>
        </div>
      </section>

      <DownloadAppSection />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};
