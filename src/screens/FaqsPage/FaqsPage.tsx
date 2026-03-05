"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { SEO } from "../../components/SEO";
import { Navbar } from "../../components/Navbar";
import { DemoModal } from "../../components/DemoModal";
import { DownloadAppSection } from "../LandingPage/sections/DownloadAppSection";

const faqs = [
  {
    question: "What is Bassh?",
    answer:
      "Bassh is a nightlife platform that connects partygoers with the best clubs, events, and experiences. We make it easy to discover venues, get on guest lists, and enjoy VIP experiences.",
  },
  {
    question: "How do I get on a guest list?",
    answer:
      "Simply browse events on the Bassh app, select the one you want to attend, and tap 'Join Guest List'. You'll receive a confirmation and QR code for seamless entry.",
  },
  {
    question: "Is Bassh another ticketing platform?",
    answer:
      "Bassh isn't just a ticketing platform; it's a real-time nightlife operating system that helps people discover where the best crowd, events, and experiences are happening while helping clubs drive footfall and understand nightlife intelligence.",
  },
  {
    question: "Which cities is Bassh available in?",
    answer:
      "We're launching soon in cities like New Delhi, Chandigarh, Mohali, Panchkula and more! We'll be expanding rapidly across India, so stay tuned for new city launches and download the app to be the first to know.",
  },
  {
    question: "How do clubs join Bassh?",
    answer:
      "Clubs and venues can join the Bassh network by visiting our Join Us page. We offer tools for guest list management, promotions, and analytics to help grow your venue.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team through the Help & Support page on our website, or directly within the Bassh app under Settings > Help. We typically respond within 24 hours.",
  },
];

const FaqItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border border-white/10 rounded-xl overflow-hidden transition-colors hover:border-white/20">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left min-h-[3rem]"
    >
      <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base sm:text-lg pr-4">
        {question}
      </span>
      <ChevronDown
        className={`w-5 h-5 text-white/60 flex-shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="px-4 sm:px-6 pb-4 sm:pb-5 [font-family:'Inter',Helvetica] text-white/60 text-sm sm:text-base leading-relaxed">
        {answer}
      </p>
    </div>
  </div>
);

export const FaqsPage = (): JSX.Element => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full flex flex-col min-h-screen overflow-x-hidden bg-[#0a0a0a]">
      <SEO
        title="FAQs"
        description="Find answers to common questions about Bassh — India's #1 real-time nightlife platform. Learn how to get on guest lists, discover clubs, and more."
        path="/faqs"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>
      <Navbar onRequestDemo={() => setDemoOpen(true)} />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] sm:h-[400px] bg-[#ff007e10] rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-2">
          <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 sm:mb-4 animate-blur-in">
            Frequently Asked Questions
          </h1>
          <p className="[font-family:'Inter',Helvetica] text-white/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed animate-slide-up-fade" style={{ animationDelay: "200ms" }}>
            Everything you need to know about Bassh. Can't find your answer?
            Reach out to our support team.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="relative px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto flex flex-col gap-2.5 sm:gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="animate-slide-up-fade" style={{ animationDelay: `${300 + i * 100}ms` }}>
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </div>
          ))}
        </div>
      </section>

      <DownloadAppSection />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};
