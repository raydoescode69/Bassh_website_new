"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export const HeroSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="waitlist" className="relative w-full flex bg-[#0a0a0a] py-10 sm:py-12 md:py-20 lg:py-32 xl:py-44">
      {/* Match DashboardSection's gradient style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-[#ff007e18] via-[#c3006010] to-transparent" />
        <div className="absolute top-[10%] right-[5%] w-[700px] h-[700px] bg-[#ff007e0c] rounded-full blur-[150px]" />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-[#a200ff08] rounded-full blur-[120px]" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[91px] max-w-full">
        <Card
          ref={ref}
          className={`relative bg-[#c3006033] rounded-2xl sm:rounded-3xl md:rounded-[40px] border border-solid border-[#ff007e9e] overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row items-center justify-between relative">
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 p-6 sm:p-8 md:p-12 lg:pl-16 xl:pl-[104px] lg:pr-8 lg:py-16 xl:py-20 flex-1 text-center lg:text-left w-full">
                <div>
                  <h1 className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-tight lg:leading-9 mb-3 sm:mb-4">
                    Download the app now!
                  </h1>

                  <p className="[font-family:'Poppins',Helvetica] font-normal italic text-white text-base sm:text-lg md:text-xl lg:text-[22px] tracking-[0] leading-6 sm:leading-7 lg:leading-8 max-w-[475px] mx-auto lg:mx-0 mb-4 sm:mb-6">
                    If it&apos;s lit, it&apos;s on Bassh.
                  </p>
                </div>

                {/* App Store Buttons */}
                <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                  <a
                    href="#"
                    className="transition-transform duration-300 hover:scale-105 focus:outline-none"
                    aria-label="Download on Google Play"
                  >
                    <img
                      src="/app-download-logo-1.png"
                      alt="Get it on Google Play"
                      className="h-[44px] sm:h-[48px] md:h-[52px] w-auto object-contain"
                    />
                  </a>
                  <a
                    href="#"
                    className="transition-transform duration-300 hover:scale-105 focus:outline-none"
                    aria-label="Download on the App Store"
                  >
                    <img
                      src="/app-download-logo-2.png"
                      alt="Download on the App Store"
                      className="h-[44px] sm:h-[48px] md:h-[52px] w-auto object-contain"
                    />
                  </a>
                </div>
              </div>

              <div className="relative w-full lg:w-[40%] xl:w-[36.11%] h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] flex-shrink-0 lg:mr-8 xl:mr-[91.8px] mb-6 sm:mb-8 lg:mb-0 flex items-end justify-center">
                <div className="relative w-[80%] h-[90%] animate-float-smooth">
                  <img
                    src="/3f7e2757e62fd22592b879bd56b666011742294630-png.png"
                    alt="Bassh app — scan QR code to download"
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                  {/* QR code overlay on phone screen */}
                  <div className="absolute top-[32%] left-1/2 -translate-x-1/2 w-[52%] flex flex-col items-center gap-2 sm:gap-3">
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-[10px] sm:text-xs md:text-sm text-center leading-tight">
                      Scan the QR code to<br />download the app
                    </p>
                    <div className="relative">
                      <div className="absolute -inset-2 bg-[#ff007e]/20 rounded-xl animate-ping-slow" />
                      <img
                        src="/qr-code.png"
                        alt="QR Code — download the Bassh app"
                        loading="lazy"
                        className="relative w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
