"use client";
import React, { useState } from "react";
import { SEO } from "../../components/SEO";
import { Navbar } from "../../components/Navbar";
import { DemoModal } from "../../components/DemoModal";
import { DownloadAppSection } from "../LandingPage/sections/DownloadAppSection";
import { ConversationalForm, FormStep } from "../../components/ConversationalForm";

const steps: FormStep[] = [
  { key: "problem", label: "What's the issue?", placeholder: "Brief summary of the problem", type: "text", required: true },
  { key: "fullName", label: "What's your name?", placeholder: "Your full name", type: "text", required: true },
  { key: "email", label: "What's your email?", placeholder: "you@example.com", type: "email", required: true },
  { key: "mobileNumber", label: "Mobile number?", placeholder: "+91 98765 43210", type: "tel", required: false },
  { key: "message", label: "Describe your issue in detail", placeholder: "Tell us everything so we can help...", type: "textarea", required: true },
];

export const HelpSupportPage = (): JSX.Element => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = async (values: Record<string, string>) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/help-support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problem: values.problem,
          fullName: values.fullName,
          email: values.email,
          mobileNumber: values.mobileNumber,
          message: values.message,
        }),
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (response.ok) {
          setStatus("success");
          setTimeout(() => { setStatus("idle"); setFormKey((k) => k + 1); }, 4000);
        } else {
          setErrorMessage(data.error || "Something went wrong. Please try again.");
          setStatus("error");
          setTimeout(() => { setStatus("idle"); setErrorMessage(""); }, 5000);
        }
      } else {
        setStatus("success");
        setTimeout(() => { setStatus("idle"); setFormKey((k) => k + 1); }, 4000);
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
        title="Help & Support"
        description="Need help with Bassh? Submit a support request and our team will get back to you as soon as possible."
        path="/help-support"
      />
      <Navbar onRequestDemo={() => setDemoOpen(true)} />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] sm:h-[400px] bg-[#ff007e10] rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-2">
          <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 sm:mb-4 animate-blur-in">
            Help & Support
          </h1>
          <p className="[font-family:'Inter',Helvetica] text-white/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Having an issue? Tell us about it and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Form Card */}
      <section className="relative px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-lg mx-auto">
          <div className="w-full bg-white/[0.05] backdrop-blur-2xl backdrop-saturate-150 rounded-xl sm:rounded-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden animate-slide-up-fade" style={{ animationDelay: "300ms" }}>
            <div className="px-5 sm:px-6 md:px-8 pt-5 sm:pt-6 md:pt-8 pb-2">
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl sm:text-2xl">
                Submit a Request
              </h2>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-white/50 text-sm mt-1">
                Describe your issue and we'll help you out.
              </p>
            </div>

            <div className="px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
              <ConversationalForm
                key={formKey}
                steps={steps}
                onSubmit={handleSubmit}
                status={status}
                errorMessage={errorMessage}
                successTitle="Feedback Submitted!"
                successMessage="Thank you for contacting us. We'll get back to you soon."
                submitLabel="Submit Request"
              />
            </div>
          </div>
          <p className="text-center mt-4 sm:mt-5 [font-family:'Inter',Helvetica] text-white/40 text-sm">
            Or email us directly at{" "}
            <a href="mailto:support@bassh.in" className="text-[#ff007e] hover:text-[#ff1a8e] transition-colors">
              support@bassh.in
            </a>
          </p>
        </div>
      </section>

      <DownloadAppSection />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};
