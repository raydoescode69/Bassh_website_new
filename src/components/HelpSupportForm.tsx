"use client";
import React, { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export const HelpSupportForm: React.FC = () => {
  const [problem, setProblem] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // TODO: Replace with actual API endpoint when available
      const response = await fetch("/api/help-support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problem,
          fullName,
          email,
          mobileNumber,
          message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        // Reset form
        setProblem("");
        setFullName("");
        setEmail("");
        setMobileNumber("");
        setMessage("");
        
        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        setTimeout(() => {
          setStatus("idle");
          setErrorMessage("");
        }, 5000);
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  if (status === "success") {
    return (
      <div className="w-full max-w-xl mx-auto text-center py-12 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff007e]/20 rounded-full mb-4">
          <CheckCircle2 className="w-8 h-8 text-[#ff007e]" />
        </div>
        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl md:text-2xl mb-2">
          Feedback Submitted!
        </h3>
        <p className="[font-family:'Inter',Helvetica] text-white/70 text-sm md:text-base">
          Thank you for contacting us. We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Problem Statement */}
        <div>
          <input
            type="text"
            placeholder="Please state your problem*"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            required
            disabled={status === "loading"}
            className="w-full px-4 sm:px-5 py-3 sm:py-3.5 md:py-4 bg-white border border-[#ff007e]/30 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-[#ff007e] focus:ring-1 focus:ring-[#ff007e] transition-all [font-family:'Inter',Helvetica] text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name*"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            disabled={status === "loading"}
            className="w-full px-4 sm:px-5 py-3 sm:py-3.5 md:py-4 bg-white border border-[#ff007e]/30 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-[#ff007e] focus:ring-1 focus:ring-[#ff007e] transition-all [font-family:'Inter',Helvetica] text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Email Address */}
        <div>
          <input
            type="email"
            placeholder="Email Address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
            className="w-full px-4 sm:px-5 py-3 sm:py-3.5 md:py-4 bg-white border border-[#ff007e]/30 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-[#ff007e] focus:ring-1 focus:ring-[#ff007e] transition-all [font-family:'Inter',Helvetica] text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Mobile Number (Optional) */}
        <div>
          <input
            type="tel"
            placeholder="Mobile Number (optional)"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            disabled={status === "loading"}
            className="w-full px-4 sm:px-5 py-3 sm:py-3.5 md:py-4 bg-white border border-[#ff007e]/30 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-[#ff007e] focus:ring-1 focus:ring-[#ff007e] transition-all [font-family:'Inter',Helvetica] text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Message Textarea */}
        <div>
          <textarea
            placeholder="Type text*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={status === "loading"}
            rows={6}
            className="w-full px-4 sm:px-5 py-3 sm:py-3.5 md:py-4 bg-white border border-[#ff007e]/30 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-[#ff007e] focus:ring-1 focus:ring-[#ff007e] transition-all [font-family:'Inter',Helvetica] text-sm sm:text-base resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[#ff007e] to-[#c30060] hover:from-[#ff1a8e] hover:to-[#d0006d] text-white font-semibold text-sm sm:text-base rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#ff007e]/30 [font-family:'Poppins',Helvetica] whitespace-nowrap flex items-center justify-center"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              <span>Submitting...</span>
            </span>
          ) : (
            "Submit feedback"
          )}
        </button>

        {/* Error Message */}
        {status === "error" && (
          <p className="text-red-400 text-sm text-center [font-family:'Inter',Helvetica] animate-fade-in">
            {errorMessage || "Something went wrong. Please try again."}
          </p>
        )}
      </form>
    </div>
  );
};
