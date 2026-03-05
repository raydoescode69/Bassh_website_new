import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { DemoModal } from "@/components/DemoModal";
import { DashboardSection } from "./sections/DashboardSection";
import { DownloadAppSection } from "./sections/DownloadAppSection";
import { GuestListSection } from "./sections/GuestListSection";
import { PartnershipsSection } from "./sections/PartnershipsSection";
import { HeroSection } from "./sections/HeroSection";

export const LandingPage = (): JSX.Element => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="w-full flex flex-col min-h-screen overflow-x-hidden">
      <SEO path="/" />
      <Navbar onRequestDemo={() => setDemoOpen(true)} />
      <DashboardSection onRequestDemo={() => setDemoOpen(true)} />
      <GuestListSection />
      <PartnershipsSection />
      <HeroSection />
      <DownloadAppSection />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};
