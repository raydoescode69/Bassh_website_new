"use client";
import { PlayIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useScrollAnimation } from "../../../../lib/useScrollAnimation";

const featureBadges = [
  { label: "Guest list", position: "left" },
  { label: "Menu Management", position: "left" },
  { label: "Club dashboard", position: "left" },
  { label: "Event management", position: "right" },
  { label: "Revenue Analysis", position: "right" },
  { label: "One click notification", position: "right" },
];

export const GuestListSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative w-full bg-black overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,28,28,0)_0%,rgba(255,0,103,0.2)_100%)]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
          <h2 className={`max-w-[800px] [font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-3xl md:text-4xl lg:text-5xl xl:text-[56px] text-center tracking-[0] leading-tight md:leading-[56px] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            A seamless dashboard for club management
          </h2>

          <p className={`max-w-[720px] [font-family:'Poppins',Helvetica] font-light text-white text-lg md:text-xl lg:text-2xl text-center tracking-[0] leading-relaxed transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Our platform is loaded with powerful features that help you manage
            your club like never before smarter, faster, and effortlessly.
          </p>

          {/* Mobile/Tablet Badge Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-5 w-full max-w-2xl lg:hidden mt-4 md:mt-6">
            {featureBadges.map((badge, index) => (
              <Badge
                key={index}
                className={`h-[50px] md:h-[56px] px-5 md:px-6 bg-[#c300602e] rounded-xl border border-solid border-[#ff007e45] hover:bg-[#c300603e] transition-all duration-500 delay-${(index + 2) * 100} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-[30px] whitespace-nowrap">
                  {badge.label}
                </span>
              </Badge>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="relative w-full max-w-[1400px] min-h-[700px] mt-8 md:mt-10 lg:mt-16 hidden lg:flex items-center justify-center">
            {/* Left badges */}
            <div className="absolute left-0 lg:left-4 xl:left-0 top-1/2 -translate-y-1/2 flex flex-col gap-8">
              {featureBadges
                .filter((b) => b.position === "left")
                .map((badge, index) => (
                  <Badge
                    key={index}
                    className={`h-[56px] px-7 bg-[#c300602e] rounded-xl border border-solid border-[#ff007e45] hover:bg-[#c300603e] transition-all duration-700 delay-${(index + 2) * 100} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  >
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[30px] whitespace-nowrap">
                      {badge.label}
                    </span>
                  </Badge>
                ))}
            </div>

            {/* Right badges */}
            <div className="absolute right-0 lg:right-4 xl:right-0 top-1/2 -translate-y-1/2 flex flex-col gap-8">
              {featureBadges
                .filter((b) => b.position === "right")
                .map((badge, index) => (
                  <Badge
                    key={index}
                    className={`h-[56px] px-7 bg-[#c300602e] rounded-xl border border-solid border-[#ff007e45] hover:bg-[#c300603e] transition-all duration-700 delay-${(index + 5) * 100} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                  >
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-[30px] whitespace-nowrap">
                      {badge.label}
                    </span>
                  </Badge>
                ))}
            </div>

            {/* Dashboard image - centered */}
            <div className={`flex justify-center items-center px-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <img
                className="w-full max-w-[700px] xl:max-w-[900px] h-auto object-contain"
                alt="Dashboard preview"
                src="/image-10.png"
              />
            </div>

            {/* Video preview card - positioned for desktop */}
            <div className={`absolute top-8 right-[8%] xl:right-[12%] transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
              <Card className="w-[280px] xl:w-[320px] h-[190px] xl:h-[220px] bg-[#000000cc] border-[#ff007e45] overflow-hidden group hover:border-[#ff007e] transition-all">
                <CardContent className="p-0 relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="Feature preview"
                    src="/image-154.png"
                  />
                  <Button
                    size="icon"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full bg-[#ff007e]/20 hover:bg-[#ff007e]/40 border-2 border-[#ff007e] transition-all group-hover:scale-110"
                  >
                    <PlayIcon className="w-6 h-6 text-white fill-white" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Decorative frame */}
            <img
              className={`absolute top-[18%] left-[8%] xl:left-[12%] w-[200px] xl:w-[260px] h-auto opacity-40 transition-all duration-700 delay-300 ${isVisible ? "opacity-40 rotate-0" : "opacity-0 -rotate-12"}`}
              alt="Decorative frame"
              src="/frame-17.svg"
            />
          </div>

          {/* Mobile/Tablet Dashboard Preview */}
          <div className="w-full max-w-3xl lg:hidden mt-6 md:mt-8">
            <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <img
                className="w-full h-auto object-contain rounded-xl"
                alt="Dashboard preview"
                src="/image-10.png"
              />
            </div>

            <Card className="w-full max-w-md mx-auto mt-8 bg-[#000000cc] border-[#ff007e45] overflow-hidden">
              <CardContent className="p-0 relative aspect-video">
                <img
                  className="w-full h-full object-cover"
                  alt="Feature preview"
                  src="/image-154.png"
                />
                <Button
                  size="icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full bg-[#ff007e]/20 hover:bg-[#ff007e]/40 border-2 border-[#ff007e]"
                >
                  <PlayIcon className="w-6 h-6 text-white fill-white" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
