import React from "react";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black overflow-hidden py-24 px-4">
      <div className="absolute left-0 bottom-0 right-0 h-full rotate-180 shadow-[0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(28,28,28,0)_0%,rgba(255,0,103,0.24)_100%)]" />

      <div className="relative max-w-7xl mx-auto">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-5xl text-center tracking-[0] leading-[56px] mb-16">
          Where Nightlife Meets Convenience
        </h2>

        <div className="flex items-center justify-between gap-8">
          <div className="flex-shrink-0">
            <img
              className="w-[300px] h-[450px] object-cover"
              alt="Image"
              src="/image-2523.png"
            />
          </div>

          <div className="flex-shrink-0">
            <img
              className="w-[66px] h-[213px] object-cover"
              alt="Image"
              src="/image-2530.png"
            />
          </div>

          <div className="flex-1 max-w-[580px]">
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-5xl tracking-[0] leading-[56px] mb-8">
              Live Heat Maps
            </h3>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal]">
              Spot the hottest clubs in real time – vibe where the energy&apos;s
              high.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
