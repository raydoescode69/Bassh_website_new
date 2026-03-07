"use client";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const brands = [
  "Bassh",
  "Bassh",
  "Bassh",
  "Bassh",
  "Bassh",
  "Bassh",
  "Bassh",
  "Bassh",
  "Bassh",
  "Bassh",
];

export const PartnershipsSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden py-16 sm:py-20 md:py-28 lg:py-36">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-[#ff007e18] via-[#c3006010] to-transparent" />
        <div className="absolute top-[10%] right-[5%] w-[700px] h-[700px] bg-[#ff007e0c] rounded-full blur-[150px]" />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-[#a200ff08] rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative flex flex-col items-center gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
        <h2
          className={`[font-family:'Poppins',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-center leading-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Trusted by top clubs
        </h2>
        <p
          className={`[font-family:'Poppins',Helvetica] font-normal text-white/50 text-sm sm:text-base md:text-lg text-center max-w-[520px] leading-relaxed px-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
        >
          Our platform is loaded with powerful features that help you manage your
          club like never before smarter, faster, and effortlessly.
        </p>
      </div>

      {/* Marquee Row 1 - moves left */}
      <div className="relative w-full overflow-hidden mb-6 sm:mb-8">
        <div className="flex animate-[marqueeLeft_20s_linear_infinite] w-max">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={`row1-${i}`}
              className="[font-family:'Poppins',Helvetica] font-bold italic text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-14 sm:mx-18 md:mx-24 lg:mx-32 whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - moves left (slower, offset) */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-[marqueeLeft_28s_linear_infinite] w-max">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={`row2-${i}`}
              className="[font-family:'Poppins',Helvetica] font-bold italic text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-14 sm:mx-18 md:mx-24 lg:mx-32 whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
