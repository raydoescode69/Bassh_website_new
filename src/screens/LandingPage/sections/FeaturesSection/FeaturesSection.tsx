"use client";
import React from "react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export const FeaturesSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative w-full bg-black overflow-hidden py-16 md:py-24 lg:py-32 px-4">
      <div className="absolute left-0 bottom-0 right-0 h-full rotate-180 shadow-[0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(28,28,28,0)_0%,rgba(255,0,103,0.24)_100%)]" />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        <h2 className={`[font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight md:leading-[56px] mb-12 md:mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Where Nightlife Meets Convenience
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          <div className={`flex-shrink-0 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <img
              className="w-[280px] h-[420px] md:w-[340px] md:h-[510px] lg:w-[380px] lg:h-[570px] object-contain"
              alt="App screenshot showing heat map"
              src="/image-2523.png"
            />
          </div>

          <div className={`flex-shrink-0 hidden lg:flex flex-col gap-6 items-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <img
              className="w-[80px] h-auto object-contain"
              alt="Decorative element"
              src="/image-2530.png"
            />
          </div>

          <div className={`flex-1 max-w-[600px] text-center lg:text-left transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-4xl md:text-5xl lg:text-[56px] tracking-[0] leading-tight md:leading-[56px] mb-6 md:mb-8">
              Live Heat Maps
            </h3>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-xl md:text-2xl lg:text-[28px] tracking-[0] leading-relaxed">
              Spot the hottest clubs in real time – vibe where the energy&apos;s
              high.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
