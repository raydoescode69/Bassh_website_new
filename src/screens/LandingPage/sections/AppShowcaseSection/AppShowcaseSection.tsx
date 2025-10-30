"use client";
import React from "react";
import { useScrollAnimation } from "../../../../lib/useScrollAnimation";

export const AppShowcaseSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative w-full bg-black overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,28,28,0)_0%,rgba(255,0,103,0.2)_100%)]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center">
          {/* Left Column */}
          <div className={`flex flex-col space-y-8 md:space-y-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-4xl md:text-5xl lg:text-[56px] tracking-[0] leading-tight">
                All-Access Club Pass
              </h2>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-xl md:text-2xl lg:text-[28px] tracking-[0] leading-relaxed">
                Unlock entry to 300+ clubs across India – party anywhere,
                anytime.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start space-y-6">
              <img
                className="w-full max-w-[350px] lg:max-w-[400px] h-auto object-contain hover:scale-105 transition-transform duration-300"
                alt="App showcase"
                src="/image-2524.png"
              />
              <img
                className="w-full max-w-[360px] lg:max-w-[400px] h-auto object-contain hover:scale-105 transition-transform duration-300"
                alt="QR code"
                src="/image-2538.png"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className={`flex flex-col space-y-8 md:space-y-10 items-center lg:items-end transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <img
              className="w-full max-w-[700px] md:max-w-[900px] lg:max-w-[1100px] h-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_60px_rgba(255,0,126,0.5)]"
              alt="iPhone app preview"
              src="/iPhone15.svg"
            />

            <div className="space-y-4 md:space-y-6 text-center lg:text-right w-full">
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-4xl md:text-5xl lg:text-[56px] tracking-[0] leading-tight">
                Exclusive Club Perks
              </h2>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-xl md:text-2xl lg:text-[28px] tracking-[0] leading-relaxed">
                Enjoy instant discounts on bookings and drinks, only for app
                users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
