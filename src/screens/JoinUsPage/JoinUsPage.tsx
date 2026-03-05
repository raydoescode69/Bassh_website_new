"use client";
import React, { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { SEO } from "../../components/SEO";
import { Navbar } from "../../components/Navbar";
import { DemoModal } from "../../components/DemoModal";
import { DownloadAppSection } from "../LandingPage/sections/DownloadAppSection";

export const JoinUsPage = (): JSX.Element => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [clubNameGstin, setClubNameGstin] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/partner-with-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ownerName, email, clubNameGstin, mobileNumber }),
      });

      if (response.ok) {
        setStatus("success");
        setOwnerName("");
        setEmail("");
        setClubNameGstin("");
        setMobileNumber("");
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        setTimeout(() => { setStatus("idle"); setErrorMessage(""); }, 5000);
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
      setTimeout(() => { setStatus("idle"); setErrorMessage(""); }, 5000);
    }
  };

  return (
    <div className="w-full flex flex-col min-h-screen overflow-x-hidden bg-[#0a0a0a]">
      <SEO
        title="Join Us"
        description="Join the Bassh network and unlock powerful tools to grow your venue. Partner with India's #1 nightlife platform."
        path="/join-us"
      />
      <Navbar onRequestDemo={() => setDemoOpen(true)} />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-full max-w-[700px] h-[300px] sm:h-[400px] bg-[#ff007e10] rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-2">
          <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 sm:mb-4 animate-blur-in">
            Join Us
          </h1>
          <p className="[font-family:'Inter',Helvetica] text-white/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Join the Bassh network and unlock powerful tools to grow your venue.
          </p>
        </div>
      </section>

      {/* Form Card */}
      <section className="relative px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-lg mx-auto">
          <div className="w-full bg-white/[0.05] backdrop-blur-2xl backdrop-saturate-150 rounded-xl sm:rounded-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden animate-slide-up-fade" style={{ animationDelay: "300ms" }}>
            <div className="px-5 sm:px-6 md:px-8 pt-5 sm:pt-6 md:pt-8 pb-2">
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl sm:text-2xl">
                Get Started
              </h2>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-white/50 text-sm mt-1">
                Tell us about your venue and we'll reach out.
              </p>
            </div>

            <div className="px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
              {status === "success" ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff007e]/20 rounded-full mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#ff007e]" />
                  </div>
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-lg mb-2">
                    Details Submitted!
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] text-white/60 text-sm">
                    Thank you for your interest. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Owner Name *"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      required
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff007e] transition-all [font-family:'Inter',Helvetica] text-sm disabled:opacity-50"
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff007e] transition-all [font-family:'Inter',Helvetica] text-sm disabled:opacity-50"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Club Name / GSTIN"
                    value={clubNameGstin}
                    onChange={(e) => setClubNameGstin(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff007e] transition-all [font-family:'Inter',Helvetica] text-sm disabled:opacity-50"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff007e] transition-all [font-family:'Inter',Helvetica] text-sm disabled:opacity-50"
                  />

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-6 py-3 sm:py-3.5 min-h-[2.75rem] bg-gradient-to-r from-[#ff007e] to-[#c30060] hover:from-[#ff1a8e] hover:to-[#d0006d] text-white font-semibold text-sm rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#ff007e]/20 [font-family:'Poppins',Helvetica] flex items-center justify-center"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Submit Details"
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-red-400 text-sm text-center [font-family:'Inter',Helvetica] animate-fade-in">
                      {errorMessage}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <DownloadAppSection />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};
