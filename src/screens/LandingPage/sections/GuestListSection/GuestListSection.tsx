import { PlayIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const featureBadges = [
  {
    top: "top-[583px]",
    left: "left-[-21px]",
    label: "Guest list",
  },
  {
    top: "top-[678px]",
    left: "left-[140px]",
    label: "Menu Management",
  },
  {
    top: "top-[777px]",
    left: "left-[-21px]",
    label: "Club dashboard",
  },
  {
    top: "top-[583px]",
    left: "left-[1096px]",
    label: "Event management",
  },
  {
    top: "top-[678px]",
    left: "left-[1247px]",
    label: "Revenue Analysis",
  },
  {
    top: "top-[773px]",
    left: "left-[1092px]",
    label: "One click notification",
  },
];

export const GuestListSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,28,28,0)_0%,rgba(255,0,103,0.2)_100%)]" />

      <div className="relative container mx-auto px-4 py-20">
        <div className="flex flex-col items-center gap-8">
          <h2 className="max-w-[667px] [font-family:'Poppins',Helvetica] font-semibold text-[#ff007e] text-5xl text-center tracking-[0] leading-[56px]">
            A seamless dashboard for club management
          </h2>

          <p className="max-w-[687px] [font-family:'Poppins',Helvetica] font-light text-white text-lg text-center tracking-[0] leading-7">
            Our platform is loaded with powerful features that help you manage
            your club like never before smarter, faster, and effortlessly.
          </p>

          <div className="relative w-full max-w-[1440px] h-[600px] mt-12">
            {featureBadges.map((badge, index) => (
              <Badge
                key={index}
                className={`absolute ${badge.top} ${badge.left} h-[50px] px-6 bg-[#c300602e] rounded-lg border border-solid border-[#ff007e45] hover:bg-[#c300603e] transition-colors`}
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm tracking-[0] leading-[30px] whitespace-nowrap">
                  {badge.label}
                </span>
              </Badge>
            ))}

            <img
              className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[790px] h-[484px] object-cover"
              alt="Dashboard preview"
              src="/image-10.png"
            />

            <Card className="absolute top-0 right-[106px] w-[268px] h-[185px] bg-[#000000a1] border-[#2f2f2f]">
              <CardContent className="p-0">
                <img
                  className="w-full h-[185px] object-cover rounded-xl"
                  alt="Feature preview"
                  src="/image-154.png"
                />
              </CardContent>
            </Card>

            <Button
              size="icon"
              className="absolute top-[182px] right-[90px] w-[42px] h-[42px] rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
            >
              <PlayIcon className="w-5 h-5 text-white fill-white" />
            </Button>

            <img
              className="absolute top-[103px] left-[61px] w-[220px] h-[306px]"
              alt="Decorative frame"
              src="/frame-17.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
