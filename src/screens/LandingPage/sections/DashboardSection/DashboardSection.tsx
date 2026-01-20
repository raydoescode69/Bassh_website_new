import { ChevronDownIcon } from "lucide-react";

export const DashboardSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden max-w-full">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Nightclub interior"
        src="/png--20--1.png"
      />

      <div className="absolute left-0 bottom-0 w-full h-full bg-[linear-gradient(180deg,rgba(28,28,28,0)_0%,rgba(255,0,103,0.52)_100%)]" />

      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 max-w-2xl w-full animate-fade-up">
          <img
            className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[158px] md:h-[158px] object-contain mb-1 sm:mb-2 md:mb-4 animate-scale-in"
            alt="Bassh logo"
            src="/image-2.png"
          />

          <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center tracking-[0] leading-tight sm:leading-tight md:leading-[56px] px-2">
            India&apos;s #1
            <br />
            Real-Time Nightlife Platform
          </h1>

          <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg lg:text-xl text-center tracking-[0] leading-5 sm:leading-6 md:leading-7 max-w-[520px] mb-4 sm:mb-6 px-4">
            Experience night life &amp; clubs details in the Bassh mobile app
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-6 md:mb-8">
            <a
              href="#"
              className="transition-transform duration-300 hover:scale-105 focus:outline-none"
              aria-label="Download on Google Play"
            >
              <img
                src="/app-download-logo-1.png"
                alt="Get it on Google Play"
                className="h-[40px] sm:h-[45px] md:h-[50px] lg:h-[55px] w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] object-contain"
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
                className="h-[40px] sm:h-[45px] md:h-[50px] lg:h-[55px] w-[140px] sm:w-[150px] md:w-[160px] lg:w-[170px] object-contain"
              />
            </a>
          </div>

          <div className="flex items-center gap-2 mt-4 sm:mt-6 md:mt-8 animate-float">
            <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xs sm:text-sm md:text-base tracking-[0] leading-6">
              Scroll down
            </span>
            <ChevronDownIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[17px] md:h-4 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};
