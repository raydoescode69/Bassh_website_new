import React from "react";
import { DashboardSection } from "./sections/DashboardSection";
import { DownloadAppSection } from "./sections/DownloadAppSection";
import { GuestListSection } from "./sections/GuestListSection";
import { HeroSection } from "./sections/HeroSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col min-h-screen overflow-x-hidden">
      <DashboardSection />
      <GuestListSection />
      <HeroSection />
      <DownloadAppSection />
    </div>
  );
};
