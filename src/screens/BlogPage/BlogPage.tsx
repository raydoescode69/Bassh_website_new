"use client";
import React, { useState } from "react";
import { SEO } from "../../components/SEO";
import { Navbar } from "../../components/Navbar";
import { DemoModal } from "../../components/DemoModal";
import { DownloadAppSection } from "../LandingPage/sections/DownloadAppSection";

const posts = [
  {
    title: "The Future of Nightlife Tech",
    excerpt:
      "How technology is transforming the way we experience clubs, bars, and live events.",
    date: "Mar 1, 2025",
    tag: "Industry",
  },
  {
    title: "Guest List Management Best Practices",
    excerpt:
      "Tips for venue operators to streamline entry, reduce wait times, and boost satisfaction.",
    date: "Feb 20, 2025",
    tag: "For Venues",
  },
  {
    title: "Bassh Launches in Miami",
    excerpt:
      "We're thrilled to announce our expansion into Miami's vibrant nightlife scene.",
    date: "Feb 10, 2025",
    tag: "News",
  },
  {
    title: "5 Tips for the Perfect Night Out",
    excerpt:
      "Planning a night out? Here are five ways to make it unforgettable with Bassh.",
    date: "Jan 28, 2025",
    tag: "Lifestyle",
  },
  {
    title: "How Data Drives Better Events",
    excerpt:
      "Learn how analytics and insights help venues create experiences guests love.",
    date: "Jan 15, 2025",
    tag: "Industry",
  },
  {
    title: "Meet the Bassh Team",
    excerpt:
      "A behind-the-scenes look at the passionate people building the future of nightlife.",
    date: "Jan 5, 2025",
    tag: "Company",
  },
];

export const BlogPage = (): JSX.Element => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="w-full flex flex-col min-h-screen overflow-x-hidden bg-[#0a0a0a]">
      <SEO
        title="Blog"
        description="Insights, stories, and updates from Bassh — covering nightlife trends, club management tips, and the future of nightlife tech in India."
        path="/blog"
      />
      <Navbar onRequestDemo={() => setDemoOpen(true)} />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-full max-w-[700px] h-[300px] sm:h-[400px] bg-[#ff007e0c] rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-2">
          <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 sm:mb-4 animate-blur-in">
            Blog
          </h1>
          <p className="[font-family:'Inter',Helvetica] text-white/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Stories, insights, and updates from the world of Bassh.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="relative px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-lg mx-auto text-center py-12 sm:py-16 rounded-xl border border-white/10 bg-white/[0.02] animate-slide-up-fade" style={{ animationDelay: "300ms" }}>
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium text-[#ff007e] rounded-full [font-family:'Poppins',Helvetica] uppercase tracking-wider">
            Coming Soon
          </span>
          <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-lg sm:text-xl mb-2">
            We're working on something exciting
          </h3>
          <p className="[font-family:'Inter',Helvetica] text-white/50 text-sm sm:text-base max-w-md mx-auto px-4">
            Our blog is launching soon with insights on nightlife trends, club management, and everything Bassh. Stay tuned!
          </p>
        </div>
      </section>

      <DownloadAppSection />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};
