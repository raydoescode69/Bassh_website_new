"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onRequestDemo?: () => void;
}

export const Navbar = ({ onRequestDemo }: NavbarProps): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "FAQs", to: "/faqs" },
    { label: "Enterprise", to: "/enterprise" },
    { label: "Careers", to: "/careers" },
    { label: "Blog", to: "/blog" },
  ];

  return (
    <nav
      className={`fixed left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "top-4 sm:top-5"
          : "top-3 sm:top-4"
      }`}
    >
      <div className={`max-w-[1280px] mx-auto transition-all duration-700 ease-in-out border rounded-2xl ${
        scrolled
          ? "mx-4 sm:mx-6 lg:mx-auto px-5 sm:px-6 lg:px-8 bg-white/[0.04] backdrop-blur-2xl backdrop-saturate-150 border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)]"
          : "px-6 sm:px-8 lg:px-12 bg-transparent border-transparent shadow-none"
      }`}>
        <div className="flex items-center justify-between h-[64px] sm:h-[68px]">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/image-2.png"
              alt="Bassh"
              className="h-14 sm:h-16 object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="flex items-center gap-1 text-[15px] text-white/60 hover:text-white transition-colors duration-200 [font-family:'Poppins',Helvetica] font-normal"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onRequestDemo}
              className="hidden sm:inline-flex items-center px-5 py-2 text-[14px] font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200 [font-family:'Poppins',Helvetica] hover:shadow-[0_0_20px_rgba(255,0,126,0.25)]"
            >
              Request demo
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 border-t border-white/[0.06] px-6 py-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-1 px-3 py-3 text-[15px] text-white/60 hover:text-white rounded-lg transition-colors [font-family:'Poppins',Helvetica]"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 px-3">
            <button
              onClick={() => {
                setMobileOpen(false);
                onRequestDemo?.();
              }}
              className="block w-full text-center px-5 py-2.5 text-[14px] font-medium text-white bg-white/10 border border-white/10 rounded-lg [font-family:'Poppins',Helvetica]"
            >
              Request demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
