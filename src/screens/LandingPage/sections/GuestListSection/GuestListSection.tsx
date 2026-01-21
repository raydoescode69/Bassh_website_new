"use client";
import { PlayIcon, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { useEffect, useState } from "react";

const featureBadges = [
  { label: "Guest list", position: "left" },
  { label: "Menu Management", position: "left" },
  { label: "Smart dashboard", position: "left" }, // was Club dashboard
  { label: "Event management", position: "right" },
  { label: "Revenue Analysis", position: "right" },
  { label: "One click notification", position: "right" },
];

export const GuestListSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate progress: 0 when element enters viewport, 1 when fully scrolled past
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return (
    <section className="relative w-full bg-black overflow-hidden py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,28,28,0)_0%,rgba(255,0,103,0.2)_100%)]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <h2
            className={`max-w-[800px] [font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] text-center tracking-[0] leading-tight sm:leading-tight md:leading-[56px] px-4 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transitionDelay: isVisible ? "0ms" : "0ms",
              transform: isVisible 
                ? `translateY(0) scale(${1 - scrollProgress * 0.05})` 
                : "translateY(20px) scale(0.95)",
              transitionProperty: "opacity, transform",
            }}
          >
            Operational intelligence for modern nightclubs.
          </h2>

          <p
            className={`max-w-[720px] [font-family:'Poppins',Helvetica] font-light text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center tracking-[0] leading-relaxed px-4 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transitionDelay: isVisible ? "150ms" : "0ms",
              transform: isVisible 
                ? `translateY(0) scale(${1 - scrollProgress * 0.03})` 
                : "translateY(20px) scale(0.97)",
              transitionProperty: "opacity, transform",
            }}
          >
            Our platform is loaded with powerful features that help you manage
            your club like never before smarter, faster, and effortlessly.
          </p>

          {/* Mobile/Tablet Badge Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full max-w-2xl lg:hidden mt-4 md:mt-6 px-2 sm:px-0 overflow-x-hidden">
            {featureBadges.map((badge, index) => (
              <Badge
                key={index}
                className={`h-[48px] sm:h-[50px] md:h-[56px] px-3 sm:px-5 md:px-6 bg-[#c300602e] rounded-xl border border-solid border-[#ff007e45] hover:bg-[#c300603e] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 2) * 100}ms` : "0ms",
                  transform: isVisible ? "translateY(0)" : "translateY(8px)",
                  transitionProperty: "opacity, transform",
                }}
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs sm:text-sm md:text-base tracking-[0] leading-[30px] whitespace-nowrap">
                  {badge.label}
                </span>
              </Badge>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="relative w-full min-h-[600px] lg:min-h-[780px] mt-6 sm:mt-8 md:mt-10 lg:mt-12 hidden lg:block mx-auto overflow-x-visible">
            {/* Top Left Frame (Guest list widget) */}
            <div
              className={`absolute left-0 lg:left-0 xl:left-0 top-2 xl:top-4 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none z-30 group ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? "300ms" : "0ms",
                transform: isVisible 
                  ? `translateY(${-scrollProgress * 30}px) translateX(${-scrollProgress * 15}px) scale(${1 - scrollProgress * 0.1}) rotate(${-scrollProgress * 2}deg)` 
                  : "translateY(-20px) translateX(-20px) scale(0.9) rotate(-3deg)",
                transitionProperty: "opacity, transform",
              }}
            >
              <div className="transition-shadow duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none drop-shadow-lg hover:shadow-[0_20px_50px_rgba(255,0,126,0.3)]">
                <img
                  src="/Frame 17.svg"
                  alt="Frame 17"
                  className="w-[150px] lg:w-[170px] xl:w-[210px] h-auto"
                />
              </div>
            </div>

            {/* Top Right Promo Card */}
            <div
              className={`absolute top-2 xl:top-4 right-0 lg:right-0 xl:right-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none z-30 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? "400ms" : "0ms",
                transform: isVisible 
                  ? `translateY(${-scrollProgress * 30}px) translateX(${scrollProgress * 15}px) scale(${1 - scrollProgress * 0.1}) rotate(${scrollProgress * 2}deg)` 
                  : "translateY(-20px) translateX(20px) scale(0.9) rotate(3deg)",
                transitionProperty: "opacity, transform",
              }}
            >
              <Card className="w-[240px] lg:w-[260px] xl:w-[300px] h-[160px] lg:h-[175px] xl:h-[200px] bg-[#000000e6] border-[#ff007e45] overflow-hidden group hover:border-[#ff007e] transition-shadow duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none shadow-2xl hover:shadow-[0_20px_50px_rgba(255,0,126,0.3)]">
                <CardContent className="p-0 relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    alt="Feature preview"
                    src="/image-154.png"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Mid callout badges - positioned on sides to avoid dashboard */}
            <div
              className={`absolute left-[8%] lg:left-[10%] top-[35%] z-30 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? "500ms" : "0ms",
                transform: isVisible 
                  ? `translateX(calc(-40% + ${scrollProgress * 20}px)) translateY(${-scrollProgress * 15}px) scale(${1 - scrollProgress * 0.05})` 
                  : "translateX(calc(-40% - 20px)) translateY(-15px) scale(0.95)",
                transitionProperty: "opacity, transform",
              }}
            >
              <div className="pr-1 lg:pr-2 xl:pr-4">
                <Badge className="h-[48px] lg:h-[52px] xl:h-[56px] px-4 lg:px-6 xl:px-7 bg-[#c300602e] rounded-xl border border-solid border-[#ff007e45] hover:bg-[#c300603e] transition-all duration-300 hover:scale-105">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs lg:text-sm xl:text-base tracking-[0] leading-[30px] whitespace-nowrap ml-1 lg:ml-2">
                    Intelligent inventory signals
                  </span>
                </Badge>
              </div>
            </div>

            <div
              className={`absolute right-[8%] lg:right-[10%] top-[35%] z-30 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? "600ms" : "0ms",
                transform: isVisible 
                  ? `translateX(calc(40% - ${scrollProgress * 20}px)) translateY(${-scrollProgress * 15}px) scale(${1 - scrollProgress * 0.05})` 
                  : "translateX(calc(40% + 20px)) translateY(-15px) scale(0.95)",
                transitionProperty: "opacity, transform",
              }}
            >
              <div className="pl-1 lg:pl-2 xl:pl-4">
                <Badge className="h-[48px] lg:h-[52px] xl:h-[56px] px-4 lg:px-6 xl:px-7 bg-[#c300602e] rounded-xl border border-solid border-[#ff007e45] hover:bg-[#c300603e] transition-all duration-300 hover:scale-105">
           
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs lg:text-sm xl:text-base tracking-[0] leading-[30px] whitespace-nowrap ml-1 lg:ml-2">
                    Intelligence layer
                  </span>
                </Badge>
              </div>
            </div>

            {/* Dashboard image container */}
            <div className="relative flex items-start justify-center w-full h-full pt-16 lg:pt-20 xl:pt-24 pb-8 lg:pb-10 overflow-x-visible">
              <div
                className={`relative w-full flex items-center justify-center transition-all duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? "200ms" : "0ms",
                  transform: isVisible 
                    ? `translateY(${-scrollProgress * 40}px) scale(${1 - scrollProgress * 0.08})` 
                    : "translateY(30px) scale(0.92)",
                  transitionProperty: "opacity, transform",
                }}
              >
                <div className="relative z-10 mx-auto transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] px-2 lg:px-0">
                  <img
                    className="w-full max-w-[600px] lg:max-w-[650px] xl:max-w-[750px] h-auto object-contain drop-shadow-2xl"
                    alt="Dashboard preview"
                    src="/image-10.png"
                  />
                </div>

                {/* Connecting Lines SVG Overlay (kept, just subtle) */}
                <svg
                  className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                  style={{ width: "120%", height: "120%", left: "-10%", top: "-10%" }}
                >
                  <defs>
                    <marker
                      id="arrowhead-dashboard"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3, 0 6" fill="#FF007E" fillOpacity="0.25" />
                    </marker>
                  </defs>
                  <line
                    x1="18%"
                    y1="12%"
                    x2="42%"
                    y2="28%"
                    stroke="#FF007E"
                    strokeWidth="2"
                    strokeOpacity={isVisible ? Math.min(0.18 + scrollProgress * 0.1, 0.28) : "0"}
                    strokeDasharray="5,5"
                    markerEnd="url(#arrowhead-dashboard)"
                    style={{
                      transition: "stroke-opacity 800ms cubic-bezier(0.22, 1, 0.36, 1)",
                      transitionDelay: isVisible ? "700ms" : "0ms",
                      transform: `translateY(${-scrollProgress * 10}px)`,
                    }}
                  />
                </svg>
              </div>

              {/* Bottom-left badges - positioned outside dashboard area */}
              {featureBadges
                .filter((b) => b.position === "left")
                .map((badge, index) => {
                  const pos =
                    index === 0
                      ? "left-[8%] lg:left-[10%] bottom-[24%]"
                      : index === 1
                      ? "left-[6%] lg:left-[8%] bottom-[14%]"
                      : "left-[8%] lg:left-[10%] bottom-[4%]";
                  const translateXValue = index === 1 ? "-60%" : "-40%";
                  return (
                    <div
                      key={badge.label}
                      className={`absolute ${pos} z-20 pr-1 lg:pr-2 xl:pr-4`}
                      style={{
                        transform: isVisible 
                          ? `translateX(calc(${translateXValue} + ${scrollProgress * 15}px)) translateY(${scrollProgress * 20}px) scale(${1 - scrollProgress * 0.03})` 
                          : `translateX(calc(${translateXValue} - 15px)) translateY(20px) scale(0.97)`,
                        transitionDelay: isVisible ? `${(index + 5) * 120}ms` : "0ms",
                        transitionProperty: "transform",
                        transitionDuration: "800ms",
                        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      <Badge
                        className={`h-[48px] lg:h-[52px] xl:h-[56px] px-4 lg:px-6 xl:px-7 bg-[#c300602e] rounded-xl border border-solid border-[#ff007e45] hover:bg-[#c300603e] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none hover:scale-105 ${
                          isVisible ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          transitionDelay: isVisible ? `${(index + 5) * 120}ms` : "0ms",
                        }}
                      >
                        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs lg:text-sm xl:text-base tracking-[0] leading-[30px] whitespace-nowrap">
                          {badge.label}
                        </span>
                      </Badge>
                    </div>
                  );
                })}

              {/* Bottom-right badges - positioned outside dashboard area */}
              {featureBadges
                .filter((b) => b.position === "right")
                .map((badge, index) => {
                  const pos =
                    index === 0
                      ? "right-[6%] lg:right-[8%] bottom-[24%]"
                      : index === 1
                      ? "right-[8%] lg:right-[10%] bottom-[14%]"
                      : "right-[10%] lg:right-[14%] bottom-[4%]";
                  const translateXValue = index === 0 ? "60%" : "40%";
                  return (
                    <div
                      key={badge.label}
                      className={`absolute ${pos} z-20 pl-1 lg:pl-2 xl:pl-4`}
                      style={{
                        transform: isVisible 
                          ? `translateX(calc(${translateXValue} - ${scrollProgress * 15}px)) translateY(${scrollProgress * 20}px) scale(${1 - scrollProgress * 0.03})` 
                          : `translateX(calc(${translateXValue} + 15px)) translateY(20px) scale(0.97)`,
                        transitionDelay: isVisible ? `${(index + 8) * 120}ms` : "0ms",
                        transitionProperty: "transform",
                        transitionDuration: "800ms",
                        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      <Badge
                        className={`h-[48px] lg:h-[52px] xl:h-[56px] px-4 lg:px-6 xl:px-7 bg-[#c300602e] rounded-xl border border-solid border-[#ff007e45] hover:bg-[#c300603e] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none hover:scale-105 ${
                          isVisible ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          transitionDelay: isVisible ? `${(index + 8) * 120}ms` : "0ms",
                        }}
                      >
                        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs lg:text-sm xl:text-base tracking-[0] leading-[30px] whitespace-nowrap">
                          {badge.label}
                        </span>
                      </Badge>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Mobile/Tablet Dashboard Preview */}
          <div className="w-full max-w-3xl lg:hidden mt-4 sm:mt-6 md:mt-8 px-2 sm:px-0">
            <div
              className={`transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? "200ms" : "0ms",
                transform: isVisible ? "translateY(0)" : "translateY(8px)",
                transitionProperty: "opacity, transform",
              }}
            >
              <img
                className="w-full h-auto object-contain rounded-xl"
                alt="Dashboard preview"
                src="/image-10.png"
              />
            </div>

            <Card className="w-full max-w-md mx-auto mt-6 sm:mt-8 bg-[#000000cc] border-[#ff007e45] overflow-hidden transition-shadow duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none hover:shadow-[0_20px_50px_rgba(255,0,126,0.3)]">
              <CardContent className="p-0 relative aspect-video">
                <img
                  className="w-full h-full object-cover"
                  alt="Feature preview"
                  src="/image-154.png"
                />
                <Button
                  size="icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#ff007e]/20 hover:bg-[#ff007e]/40 border-2 border-[#ff007e] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none hover:scale-[1.02]"
                >
                  <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
