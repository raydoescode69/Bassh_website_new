import React from "react";

export const AppShowcaseSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,28,28,0)_0%,rgba(255,0,103,0.2)_100%)]" />

      <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-4xl md:text-5xl tracking-[0] leading-tight">
                All-Access Club Pass
              </h2>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-xl md:text-[25px] tracking-[0] leading-normal">
                Unlock entry to 300+ clubs across India – party anywhere,
                anytime.
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <img
                className="w-full max-w-[372px] h-auto object-cover"
                alt="App showcase"
                src="/image-2524.png"
              />
              <img
                className="w-full max-w-[344px] h-auto object-cover"
                alt="QR code"
                src="/image-2538.png"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <img
              className="w-full max-w-[587px] h-auto object-cover"
              alt="iPhone app preview"
              src="/iphone-15.png"
            />

            <div className="space-y-4">
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-4xl md:text-[52px] tracking-[0] leading-normal">
                Exclusive Club Perks
              </h2>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-xl md:text-[25px] tracking-[0] leading-normal">
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
