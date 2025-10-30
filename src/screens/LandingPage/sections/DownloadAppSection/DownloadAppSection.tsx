"use client";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { useScrollAnimation } from "../../../../lib/useScrollAnimation";

const footerColumns = [
  {
    title: "For Clubs",
    links: [{ text: "Partner With Us", href: "#" }],
  },
  {
    title: "Learn More",
    links: [
      { text: "Help & Support", href: "#" },
      { text: "Report a Fraud", href: "#" },
      { text: "Blog", href: "#" },
    ],
  },
  {
    title: "More info",
    links: [
      { text: "Privacy", href: "#" },
      { text: "Security", href: "#" },
      { text: "Terms of Service", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: FacebookIcon, href: "#", alt: "Facebook" },
  { icon: TwitterIcon, href: "#", alt: "Twitter" },
  { icon: InstagramIcon, href: "#", alt: "Instagram" },
  { icon: LinkedinIcon, href: "#", alt: "LinkedIn" },
  { icon: YoutubeIcon, href: "#", alt: "YouTube" },
];

export const DownloadAppSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <footer className="w-full bg-black py-12 md:py-16 px-4 md:px-8">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-8 mb-8 md:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="lg:col-span-1 flex justify-center sm:justify-start">
            <img className="w-28 h-10 md:w-32 md:h-12 object-contain" alt="BASSH Logo" src="/image-2-1.png" />
          </div>

          {footerColumns.map((column, index) => (
            <nav key={index} className="flex flex-col gap-2.5 text-center sm:text-left">
              <h3 className="[font-family:'Poppins',Helvetica] font-normal text-[#e8e8e8] text-base md:text-lg tracking-[0] leading-7 mb-1 md:mb-2">
                {column.title}
              </h3>
              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  className="[font-family:'Inter',Helvetica] font-normal text-[#62626a] text-sm md:text-base tracking-[0] leading-6 hover:text-[#ff007e] transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          ))}

          <div className="flex flex-col gap-4 items-center sm:items-start">
            <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#e8e8e8] text-base md:text-[17.7px] tracking-[0] leading-7">
              Social Links
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-[#e8e8e8] hover:text-[#ff007e] transition-all hover:scale-110 rounded-full hover:bg-[#ff007e1a]"
                    aria-label={social.alt}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="#"
                className="w-[163px] h-14 hover:opacity-80 transition-all hover:scale-105"
                aria-label="Download on Google Play"
              >
                <img 
                  src="/app-download-logo-4.png" 
                  alt="Google Play" 
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="#"
                className="w-[163px] h-14 hover:opacity-80 transition-all hover:scale-105"
                aria-label="Download on App Store"
              >
                <img 
                  src="/app-download-logo-5.png" 
                  alt="App Store" 
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#62626a] pt-6 md:pt-8">
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#62626a] text-[9px] md:text-[10px] text-center tracking-[0] leading-[14px] md:leading-[15px] max-w-4xl mx-auto">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy, and Content Guidelines. All
            trademarks are property of their respective owners.
            <br />
            2008–2025 © BASSH™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
