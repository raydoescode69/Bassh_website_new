"use client";
import React from "react";
import { Link } from "react-router-dom";
import { PartnerWithUsForm } from "../../components/PartnerWithUsForm";
import { DownloadAppSection } from "../LandingPage/sections/DownloadAppSection";

export const PartnerWithUsPage = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col min-h-screen overflow-x-hidden bg-black">
      {/* Header */}
      <header className="w-full bg-black py-4 sm:py-6 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <Link to="/" className="transition-opacity hover:opacity-80">
            <img
              className="w-20 h-6 sm:w-24 sm:h-8 md:w-28 md:h-10 object-contain cursor-pointer"
              alt="BASSH Logo"
              src="/image-2-1.png"
            />
          </Link>
          <span className="[font-family:'Inter',Helvetica] font-normal text-white/60 text-sm sm:text-base md:text-lg">
            Partner With Us
          </span>
        </div>
      </header>

      {/* Hero Image Section */}
      <section className="w-full relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Partner with us hero"
          src="/Nightclub Scene 1.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      </section>

      {/* Main Content - Form Section */}
      <section className="w-full bg-gradient-to-b from-[rgba(255,0,126,0.1)] via-[rgba(28,28,28,0.3)] to-black py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl mx-auto">
          <PartnerWithUsForm />
        </div>
      </section>

      {/* Footer */}
      <DownloadAppSection />
    </div>
  );
};
