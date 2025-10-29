import React from "react";
import { AppShowcaseSection } from "./sections/AppShowcaseSection";
import { ConnectVibeSection } from "./sections/ConnectVibeSection";
import { DashboardSection } from "./sections/DashboardSection";
import { DownloadAppSection } from "./sections/DownloadAppSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { GuestListSection } from "./sections/GuestListSection";
import { HeroSection } from "./sections/HeroSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col">
      <DashboardSection />
      <FeaturesSection />
      <AppShowcaseSection />
      <ConnectVibeSection />
      <GuestListSection />
      <HeroSection />
      <DownloadAppSection />
    </div>
  );
};
