"use client";
import React from "react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const contentSections = [
  {
    title: "Guest list approvals",
    description:
      "Enjoy instant discounts on bookings and drinks, only for app users.",
    mainImage: "/image-2528.png",
    decorativeImages: [
      { src: "/image-2537.png" },
      { src: "/image-2535.png" },
      { src: "/image-2536.png" },
    ],
  },
  {
    title: "Connect & Vibe",
    description:
      "Chat freely with fellow partygoers, plan meetups, and make memories.",
    mainImage: "/image-2529.png",
    decorativeImages: [],
  },
];

export const ConnectVibeSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative bg-black overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="absolute left-0 bottom-0 right-0 h-full rotate-180 bg-[linear-gradient(180deg,rgba(28,28,28,0)_0%,rgba(255,0,103,0.2)_100%)]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 xl:gap-24">
          {/* Left Column - Guest List Approvals */}
          <div className={`flex flex-col justify-center transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-4xl md:text-5xl lg:text-[56px] tracking-[0] leading-tight mb-6 md:mb-8 text-center lg:text-left">
              {contentSections[0].title}
            </h2>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-xl md:text-2xl lg:text-[28px] tracking-[0] leading-relaxed max-w-[600px] mb-10 md:mb-12 text-center lg:text-left mx-auto lg:mx-0">
              {contentSections[0].description}
            </p>

            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[280px] md:max-w-[340px] lg:max-w-[400px]">
                <img
                  className="relative z-10 w-full h-auto object-contain"
                  alt="Guest list approvals interface"
                  src={contentSections[0].mainImage}
                />

                {/* Decorative overlays - only show on larger screens and positioned better */}
                <img
                  className="absolute top-[25%] -left-[15%] w-[70%] h-auto object-contain opacity-95 hidden xl:block"
                  alt="Decorative element"
                  src={contentSections[0].decorativeImages[0].src}
                />

                <img
                  className="absolute top-[45%] -left-[18%] w-[65%] h-auto object-contain opacity-95 hidden xl:block"
                  alt="Decorative element"
                  src={contentSections[0].decorativeImages[1].src}
                />

                <img
                  className="absolute bottom-[5%] -left-[10%] w-[75%] h-auto object-contain opacity-95 hidden xl:block"
                  alt="Decorative element"
                  src={contentSections[0].decorativeImages[2].src}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Connect & Vibe */}
          <div className={`flex flex-col justify-center items-center lg:items-end transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="flex justify-center mb-8 md:mb-10">
              <img
                className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] object-cover rounded-full hover:scale-105 transition-transform duration-500 shadow-2xl"
                alt="Connect and vibe profile"
                src={contentSections[1].mainImage}
              />
            </div>

            <div className="w-full max-w-[600px]">
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-4xl md:text-5xl lg:text-[56px] tracking-[0] leading-tight mb-6 md:mb-8 text-center lg:text-right">
                {contentSections[1].title}
              </h2>

              <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-xl md:text-2xl lg:text-[28px] tracking-[0] leading-relaxed text-center lg:text-right">
                {contentSections[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
