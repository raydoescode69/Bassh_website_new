import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full flex bg-black py-44">
      <div className="container mx-auto px-[91px]">
        <Card className="relative bg-[#c3006033] rounded-[40px] border border-solid border-[#ff007e9e] overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center justify-between min-h-[530px] relative">
              <div className="flex flex-col gap-8 pl-[104px] pr-8 py-[159px] flex-1">
                <h1 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-9 whitespace-nowrap">
                  Download the app now!
                </h1>

                <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-2xl tracking-[0] leading-8 max-w-[475px]">
                  Experience the club life of cities on Bassh mobile app
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src="/app-download-logo-2.png"
                    alt="Download on App Store"
                    className="h-14 w-[188.44px] object-cover"
                  />
                  <img
                    src="/app-download-logo-3.png"
                    alt="Get it on Google Play"
                    className="h-14 w-[167.5px] object-cover"
                  />
                </div>
              </div>

              <div className="relative w-[36.11%] h-[470px] flex-shrink-0 mr-[91.8px]">
                <img
                  src="/3f7e2757e62fd22592b879bd56b666011742294630-png.png"
                  alt="Phone mockup"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[195px]">
                  <p className="[font-family:'Inter',Helvetica] font-medium text-black text-[19.8px] text-center tracking-[0] leading-7">
                    Scan the QR code to
                    <br />
                    download the app
                  </p>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[227px] h-[227px]">
                  <img
                    src="/download-zomato-app.png"
                    alt="QR Code"
                    className="w-full h-full object-cover"
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
