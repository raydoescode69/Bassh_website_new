import { ChevronDownIcon } from "lucide-react";
import React from "react";

export const DashboardSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen h-[900px] bg-white overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Nightclub interior"
        src="/png--20--1.png"
      />

      <div className="absolute left-0 bottom-0 w-full h-full bg-[linear-gradient(180deg,rgba(28,28,28,0)_0%,rgba(255,0,103,0.52)_100%)]" />

      <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12 lg:pb-16">
        <div className="flex flex-col items-center gap-4 md:gap-6 max-w-[477px] w-full px-4 animate-fade-up">
          <img
            className="w-[120px] h-[120px] md:w-[158px] md:h-[158px] object-contain mb-2 md:mb-4 animate-scale-in"
            alt="Bassh logo"
            src="/image-2.png"
          />

          <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight md:leading-[56px]">
            India&apos;s #1
            <br />
            Real-Time Nightlife Platform
          </h1>

          <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base md:text-lg lg:text-xl text-center tracking-[0] leading-6 md:leading-7 max-w-[372px]">
            Experience night life &amp; clubs details in the Bassh mobile app
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mt-4 w-full sm:w-auto justify-center">
            <img
              className="w-[189px] h-14 object-contain transition-transform hover:scale-105"
              src="/app-download-logo.png"
              alt="Download on App Store"
            />
            <img
              className="w-[168px] h-14 object-contain transition-transform hover:scale-105"
              src="/app-download-logo-1.png"
              alt="Get it on Google Play"
            />
          </div>

          <div className="flex items-center gap-2 mt-4 md:mt-7 animate-float">
            <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-6">
              Scroll down
            </span>
            <ChevronDownIcon className="w-4 h-4 md:w-[17px] md:h-4 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};
