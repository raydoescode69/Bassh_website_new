"use client";
import React, { useState, useEffect } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [clubName, setClubName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const resetForm = () => {
    setName("");
    setClubName("");
    setCity("");
    setEmail("");
    setPhone("");
    setMessage("");
    setStatus("idle");
    setErrorMessage("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          clubNameCity: `${clubName}, ${city}`,
          phone,
          message,
        }),
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (response.ok) {
          setStatus("success");
          setTimeout(() => {
            handleClose();
          }, 3000);
        } else {
          setErrorMessage(data.error || "Something went wrong.");
          setStatus("error");
        }
      } else {
        setStatus("success");
        setTimeout(() => {
          handleClose();
        }, 3000);
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Request a Demo"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

      {/* Modal wrapper with rotating border */}
      <div
        className="relative w-full max-w-lg rounded-2xl p-[2px] animate-scale-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Rotating gradient border — oversized square that spins */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "150%",
            height: "150%",
            marginLeft: "-75%",
            marginTop: "-75%",
            background: "conic-gradient(from 0deg, transparent, #ff007e, #c30060, transparent, transparent, #ff007e, #c30060, transparent)",
            animation: "spinBorder 10s linear infinite",
            borderRadius: "0",
          }}
        />

        {/* Inner modal */}
        <div className="relative z-10 w-full bg-[#111111] rounded-[14px] shadow-2xl border border-white/10 overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-1.5 text-white/40 hover:text-white transition-colors rounded-lg hover:bg-white/10"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-2">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl sm:text-2xl">
            Request a Demo
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-white/50 text-sm mt-1">
            Tell us about your club and we'll get back to you.
          </p>
        </div>

        {/* Content */}
        <div className="px-6 sm:px-8 py-4 sm:py-6">
          {status === "success" ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff007e]/20 rounded-full mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#ff007e]" />
              </div>
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-lg mb-2">
                Request Sent!
              </h3>
              <p className="[font-family:'Inter',Helvetica] text-white/60 text-sm">
                Our team will reach out to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Club Name *"
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff007e] transition-all [font-family:'Inter',Helvetica] text-sm disabled:opacity-50"
                />
                <input
                  type="text"
                  placeholder="City *"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff007e] transition-all [font-family:'Inter',Helvetica] text-sm disabled:opacity-50"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff007e] transition-all [font-family:'Inter',Helvetica] text-sm disabled:opacity-50"
              />
              <textarea
                placeholder="Tell us about your club (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === "loading"}
                rows={3}
                className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff007e] transition-all [font-family:'Inter',Helvetica] text-sm disabled:opacity-50 resize-none"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3.5 bg-gradient-to-r from-[#ff007e] to-[#c30060] hover:from-[#ff1a8e] hover:to-[#d0006d] text-white font-semibold text-sm rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#ff007e]/20 [font-family:'Poppins',Helvetica] flex items-center justify-center"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Submit Request"
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
    </div>
  );
};
