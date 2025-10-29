import { ChevronDownIcon } from "lucide-react";
import React from "react";

export const DashboardSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[900px] bg-white">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Nightclub interior"
        src="/png--20--1.png"
      />

      <div className="absolute left-0 bottom-0 w-full h-full bg-[linear-gradient(180deg,rgba(28,28,28,0)_0%,rgba(255,0,103,0.52)_100%)]" />

      <div className="absolute inset-0 flex items-end justify-center pb-8">
        <div className="flex flex-col items-center gap-6 max-w-[477px] w-full px-4">
          <img
            className="w-[158px] h-[158px] object-cover mb-4"
            alt="Bassh logo"
            src="/image-2.png"
          />

          <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-5xl text-center tracking-[0] leading-[56px]">
            India&apos;s #1
            <br />
            Real-Time Nightlife Platform
          </h1>

          <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-7 max-w-[372px]">
            Experience night life &amp; clubs details in the Bassh mobile app
          </p>

          <div className="flex items-center gap-4 mt-4">
            <div className="w-[189px] h-14 bg-[url(/app-download-logo.png)] bg-cover bg-center" />
            <div className="w-[168px] h-14 bg-[url(/app-download-logo-1.png)] bg-cover bg-center" />
          </div>

          <div className="flex items-center gap-2 mt-7">
            <span className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
              Scroll down
            </span>
            <ChevronDownIcon className="w-[17px] h-4 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};
