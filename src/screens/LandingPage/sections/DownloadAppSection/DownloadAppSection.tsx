import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

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
  return (
    <footer className="w-full bg-black py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <img className="w-32 h-12" alt="BASSH Logo" src="/image-2-1.png" />
          </div>

          {footerColumns.map((column, index) => (
            <nav key={index} className="flex flex-col gap-2.5">
              <h3 className="[font-family:'Poppins',Helvetica] font-normal text-[#e8e8e8] text-lg tracking-[0] leading-7 mb-2">
                {column.title}
              </h3>
              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  className="[font-family:'Inter',Helvetica] font-normal text-[#62626a] text-base tracking-[0] leading-6 hover:text-[#e8e8e8] transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#e8e8e8] text-[17.7px] tracking-[0] leading-7">
              Social Links
            </h3>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-6 h-6 flex items-center justify-center text-[#e8e8e8] hover:text-white transition-colors"
                    aria-label={social.alt}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="#"
                className="w-[163px] h-14 bg-[url(/app-download-logo-4.png)] bg-cover bg-center hover:opacity-80 transition-opacity"
                aria-label="Download on Google Play"
              />
              <a
                href="#"
                className="w-[163px] h-14 bg-[url(/app-download-logo-5.png)] bg-cover bg-center hover:opacity-80 transition-opacity"
                aria-label="Download on App Store"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#62626a] pt-4">
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#62626a] text-[10px] text-center tracking-[0] leading-[15px] max-w-4xl mx-auto">
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
