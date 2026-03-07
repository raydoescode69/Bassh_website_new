"use client";
import { Wine, MapPin, PartyPopper } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const stats = [
  { value: "Clubs", label: "Coming Soon", icon: Wine },
  { value: "Cities", label: "Coming Soon", icon: MapPin },
  { value: "Events", label: "Coming Soon", icon: PartyPopper },
];

export const GuestListSection = (): JSX.Element => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden py-12 sm:py-16 md:py-24 lg:py-32">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-[#ff007e18] via-[#c3006010] to-transparent" />
        <div className="absolute top-[10%] right-[5%] w-[700px] h-[700px] bg-[#ff007e0c] rounded-full blur-[150px]" />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-[#a200ff08] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div ref={statsRef} className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
          <h2
            className={`[font-family:'Poppins',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-center leading-tight transition-all duration-700 ${
              statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Where Nightlife Meets
            <br />
            Convenience
          </h2>

          <p
            className={`[font-family:'Poppins',Helvetica] font-normal text-white/60 text-sm sm:text-base md:text-lg text-center max-w-[520px] leading-relaxed transition-all duration-700 ${
              statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: statsVisible ? "100ms" : "0ms" }}
          >
            We connect party-goers with premium clubs, simplifying entry and
            enhancing experiences.
          </p>

          <div className="flex flex-row items-center justify-center gap-16 sm:gap-20 md:gap-28 lg:gap-36 mt-4 sm:mt-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.value}
                  className={`w-[160px] sm:w-[170px] md:w-[190px] h-[140px] sm:h-[150px] md:h-[160px] rounded-2xl border border-white/[0.12] bg-white/[0.04] backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(255,255,255,0.05)] flex flex-col items-center justify-center gap-3 transition-all duration-700 hover:border-white/[0.2] hover:bg-white/[0.07] hover:scale-105 hover:shadow-[0_8px_40px_rgba(255,0,126,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] ${
                    statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{
                    transitionDelay: statsVisible ? `${(index + 2) * 150}ms` : "0ms",
                    animation: statsVisible ? `floatCard${index} 3s ease-in-out ${index * 0.4}s infinite` : "none",
                  }}
                >
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#ff007e]" style={{ animation: statsVisible ? `pulse 2s ease-in-out ${index * 0.3}s infinite` : "none" }} />
                  <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-xs sm:text-sm">
                    {stat.label}
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base sm:text-lg md:text-xl -mt-1">
                    {stat.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
