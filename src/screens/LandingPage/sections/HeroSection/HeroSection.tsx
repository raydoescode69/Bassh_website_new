"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { WaitlistForm } from "@/components/WaitlistForm";

export const HeroSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="w-full flex bg-black py-10 sm:py-12 md:py-20 lg:py-32 xl:py-44">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[91px] max-w-full">
        <Card
          ref={ref}
          className={`relative bg-[#c3006033] rounded-2xl sm:rounded-3xl md:rounded-[40px] border border-solid border-[#ff007e9e] overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row items-center justify-between relative">
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 p-6 sm:p-8 md:p-12 lg:pl-16 xl:pl-[104px] lg:pr-8 lg:py-16 xl:py-20 flex-1 text-center lg:text-left w-full">
                <div>
                  <h1 className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-tight lg:leading-9 mb-3 sm:mb-4">
                    Join the waitlist now!
                  </h1>

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-6 sm:leading-7 lg:leading-8 max-w-[475px] mx-auto lg:mx-0 mb-4 sm:mb-6">
                  Promote events, push offers, and fill slow hours with the right crowd.
                  </p>
                </div>

                <div className="w-full max-w-md mx-auto lg:mx-0">
                  <WaitlistForm variant="footer" />
                </div>
              </div>

              <div className="relative w-full lg:w-[40%] xl:w-[36.11%] h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] flex-shrink-0 lg:mr-8 xl:mr-[91.8px] mb-6 sm:mb-8 lg:mb-0 flex items-center justify-center">
                <img
                  src="/3f7e2757e62fd22592b879bd56b666011742294630-png.png"
                  alt="Phone mockup"
                  className="w-full h-full object-contain"
                />

                <div className="absolute top-[15%] sm:top-[15%] md:top-[18%] lg:top-[22%] left-1/2 -translate-x-1/2 w-[140px] sm:w-[160px] md:w-[195px]">
                  <p className="[font-family:'Inter',Helvetica] font-medium text-black text-xs sm:text-sm md:text-base lg:text-[19.8px] text-center tracking-[0] leading-5 sm:leading-6 md:leading-7">
                    Scan to join
                    <br />
                    the waitlist
                  </p>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[227px] lg:h-[227px] hover:scale-105 transition-transform">
                  <img
                    src="/download-zomato-app.png"
                    alt="QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
