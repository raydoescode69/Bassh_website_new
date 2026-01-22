"use client";
import {
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerColumns = [
  {
    title: "For Clubs",
    links: [{ text: "Partner With Us", href: "/partner-with-us", isRouterLink: true }],
  },
  {
    title: "Learn More",
    links: [
      { text: "Help & Support", href: "/help-support", isRouterLink: true },
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
  { icon: XIcon, href: "#", alt: "X" },
  { icon: InstagramIcon, href: "#", alt: "Instagram" },
  { icon: LinkedinIcon, href: "#", alt: "LinkedIn" },
];

export const DownloadAppSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <footer className="w-full bg-black py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-8 mb-6 sm:mb-8 md:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="lg:col-span-1 flex justify-center sm:justify-start">
            <img className="w-24 h-8 sm:w-28 sm:h-10 md:w-32 md:h-12 object-contain" alt="BASSH Logo" src="/image-2-1.png" />
          </div>

          {footerColumns.map((column, index) => (
            <nav key={index} className="flex flex-col gap-2 sm:gap-2.5 text-center sm:text-left">
              <h3 className="[font-family:'Poppins',Helvetica] font-normal text-[#e8e8e8] text-sm sm:text-base md:text-lg tracking-[0] leading-6 sm:leading-7 mb-1 md:mb-2">
                {column.title}
              </h3>
              {column.links.map((link, linkIndex) => {
                const linkProps = {
                  key: linkIndex,
                  className: "[font-family:'Inter',Helvetica] font-normal text-[#62626a] text-xs sm:text-sm md:text-base tracking-[0] leading-5 sm:leading-6 hover:text-[#ff007e] transition-colors",
                };

                if ((link as any).isRouterLink) {
                  return (
                    <Link {...linkProps} to={link.href}>
                      {link.text}
                    </Link>
                  );
                }

                return (
                  <a {...linkProps} href={link.href}>
                    {link.text}
                  </a>
                );
              })}
            </nav>
          ))}

          <div className="flex flex-col gap-3 sm:gap-4 items-center sm:items-start">
            <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#e8e8e8] text-sm sm:text-base md:text-[17.7px] tracking-[0] leading-6 sm:leading-7">
              Social Links
            </h3>
            <div className="flex gap-2.5 sm:gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center text-[#e8e8e8] hover:text-[#ff007e] transition-all hover:scale-110 rounded-full hover:bg-[#ff007e1a]"
                    aria-label={social.alt}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-[#62626a] pt-4 sm:pt-6 md:pt-8">
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#62626a] text-[8px] sm:text-[9px] md:text-[10px] text-center tracking-[0] leading-[12px] sm:leading-[14px] md:leading-[15px] max-w-4xl mx-auto px-2">
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
