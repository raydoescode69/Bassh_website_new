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

      {/* Blog Grid */}
      <section className="relative px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group flex flex-col rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#ff007e]/30 transition-all duration-300 overflow-hidden cursor-pointer hover:shadow-[0_0_30px_rgba(255,0,126,0.1)] hover:-translate-y-1 animate-slide-up-fade"
              style={{ animationDelay: `${300 + i * 120}ms` }}
            >
              <div className="w-full h-32 sm:h-36 md:h-40 bg-gradient-to-br from-[#ff007e]/20 to-[#a200ff]/10" />
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                <span className="inline-block self-start px-2.5 py-0.5 mb-2.5 sm:mb-3 text-[11px] font-medium text-[#ff007e] border border-[#ff007e]/30 rounded-full [font-family:'Poppins',Helvetica] uppercase tracking-wider">
                  {post.tag}
                </span>
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-white text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-[#ff007e] transition-colors">
                  {post.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] text-white/50 text-sm leading-relaxed mb-3 sm:mb-4 flex-1">
                  {post.excerpt}
                </p>
                <span className="[font-family:'Inter',Helvetica] text-white/30 text-xs">
                  {post.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <DownloadAppSection />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};
