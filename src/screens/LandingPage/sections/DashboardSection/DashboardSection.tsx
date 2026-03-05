"use client";
import React from "react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

interface DashboardSectionProps {
  onRequestDemo?: () => void;
}

export const DashboardSection = ({ onRequestDemo }: DashboardSectionProps): JSX.Element => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({
    threshold: 0.15,
  });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({
    threshold: 0.15,
  });

  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Right-side gradient wash — soft pink/magenta fog on the right half */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient zone — right side only */}
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-[#ff007e18] via-[#c3006010] to-transparent" />
        {/* Soft radial glow */}
        <div className="absolute top-[10%] right-[5%] w-[700px] h-[700px] bg-[#ff007e0c] rounded-full blur-[150px]" />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-[#a200ff08] rounded-full blur-[120px]" />
      </div>

      {/* Content container */}
      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center min-h-screen pt-[72px]">
          {/* Left side — ~45% */}
          <div
            ref={leftRef}
            className={`w-full lg:w-[45%] flex flex-col justify-center py-20 sm:py-24 lg:py-0 text-center lg:text-left transition-all duration-700 ease-out ${
              leftVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* Decorative badge */}
            <div className="flex items-end gap-1.5 justify-center lg:justify-start mb-10 sm:mb-12">
              <span className="w-[6px] h-[6px] rounded-full bg-[#ff007e] animate-[dotBounce_1.2s_ease-in-out_infinite_0s]" />
              <span className="w-[6px] h-[6px] rounded-full bg-[#ff007e] animate-[dotBounce_1.2s_ease-in-out_infinite_0.15s]" />
              <span className="w-[6px] h-[6px] rounded-full bg-[#ff007e60] animate-[dotBounce_1.2s_ease-in-out_infinite_0.3s]" />
              <span className="w-[6px] h-[6px] rounded-full bg-[#ff007e30] animate-[dotBounce_1.2s_ease-in-out_infinite_0.45s]" />
            </div>

            {/* Heading */}
            <h1
              className={`[font-family:'Poppins',Helvetica] font-semibold text-white text-[32px] sm:text-[38px] md:text-[44px] lg:text-[46px] xl:text-[50px] tracking-[-0.02em] leading-[1.15] mb-6 sm:mb-8 transition-all duration-700 ${
                leftVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-sm"
              }`}
              style={{ transitionDelay: leftVisible ? "200ms" : "0ms" }}
            >
              India&apos;s #1 Real-Time Nightlife Platform
            </h1>

            {/* Subtitle */}
            <p
              className={`[font-family:'Poppins',Helvetica] font-normal text-white/40 text-[16px] sm:text-[17px] md:text-[18px] leading-[1.7] max-w-[440px] mx-auto lg:mx-0 mb-10 sm:mb-12 transition-all duration-700 ${
                leftVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-sm"
              }`}
              style={{ transitionDelay: leftVisible ? "400ms" : "0ms" }}
            >
              Run your club on Bassh, the operating system for nightlife. Get real-time insights on crowd demand, events, and artists to drive footfall and grow revenue with data, not guesswork.
            </p>

            {/* Single CTA */}
            <div
              className={`flex justify-center lg:justify-start transition-all duration-700 ${
                leftVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-sm"
              }`}
              style={{ transitionDelay: leftVisible ? "600ms" : "0ms" }}
            >
              <button
                onClick={onRequestDemo}
                className="inline-flex items-center px-6 py-3 text-[14px] font-medium text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] hover:border-white/[0.2] rounded-lg transition-all duration-200 [font-family:'Poppins',Helvetica] hover:shadow-[0_0_20px_rgba(255,0,126,0.2)]"
              >
                Request demo
              </button>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:w-[5%]" />

          {/* Right side — ~50% — Dashboard floating on gradient */}
          <div
            ref={rightRef}
            className={`w-full lg:w-[50%] flex items-center justify-center lg:justify-end py-8 lg:py-0 transition-all duration-700 delay-150 ease-out ${
              rightVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative w-full max-w-[640px]">
              {/* Soft glow behind the image */}
              <div className="absolute -inset-8 sm:-inset-12 bg-gradient-to-br from-[#ff007e20] via-[#c3006015] to-[#a200ff10] rounded-[40px] blur-3xl pointer-events-none animate-glow-pulse" />

              {/* Dashboard image with rotating gradient border */}
              <div className="relative rounded-xl p-[1px] overflow-hidden">
                {/* Rotating conic gradient border */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "150%",
                    height: "150%",
                    marginLeft: "-75%",
                    marginTop: "-75%",
                    background: "conic-gradient(from 0deg, transparent, #ff007e, #c30060, transparent, transparent, #ff007e, #c30060, transparent)",
                    animation: "spinBorder 10s linear infinite",
                    borderRadius: "0",
                  }}
                />
                <img
                  src="/dashboard.png"
                  alt="Bassh Dashboard — real-time nightlife analytics and guest list management"
                  loading="lazy"
                  className="relative z-10 w-full h-auto rounded-[10px] shadow-2xl shadow-black/40"
                />
              </div>

              {/* Floating cards — hidden on small screens */}
              <div className="hidden sm:block absolute inset-0 pointer-events-none z-20">
                {/* Offers card — top-right */}
                <div className="absolute -top-10 -right-10 lg:-top-12 lg:-right-16 animate-[orbitA_12s_ease-in-out_infinite]">
                  <img
                    src="/offers.png"
                    alt="Spring Break Special Offer"
                    loading="lazy"
                    className="w-[180px] lg:w-[220px] h-auto rounded-xl shadow-lg shadow-black/30"
                  />
                </div>

                {/* Guest List Image — bottom-left */}
                <div className="absolute -bottom-14 -left-8 lg:-bottom-16 lg:-left-12 animate-[orbitC_12s_ease-in-out_infinite]">
                  <img
                    src="/guestlistimage.png"
                    alt="Guest List Management"
                    loading="lazy"
                    className="w-[145px] lg:w-[165px] h-auto rounded-xl shadow-lg shadow-black/30"
                  />
                  {/* Arrow pointing up towards the card */}
                  <img
                    src="/arrow.png"
                    alt=""
                    className="w-[28px] lg:w-[34px] h-auto mt-1 ml-auto mr-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
