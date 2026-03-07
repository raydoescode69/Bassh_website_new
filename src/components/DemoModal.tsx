"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { ConversationalForm, FormStep } from "./ConversationalForm";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps: FormStep[] = [
  { key: "name", label: "What's your name?", placeholder: "Your full name", type: "text", required: true },
  { key: "email", label: "What's your email?", placeholder: "you@example.com", type: "email", required: true },
  { key: "clubName", label: "What's your club called?", placeholder: "Club name", type: "text", required: true },
  { key: "city", label: "Which city is it in?", placeholder: "City", type: "text", required: true },
  { key: "phone", label: "Phone number?", placeholder: "+91 98765 43210", type: "tel", required: true },
  { key: "message", label: "Anything else you'd like us to know?", placeholder: "Tell us about your club...", type: "textarea", required: false },
];

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formKey, setFormKey] = useState(0);

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

  const handleClose = () => {
    setStatus("idle");
    setErrorMessage("");
    setFormKey((k) => k + 1);
    onClose();
  };

  const handleSubmit = async (values: Record<string, string>) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          clubNameCity: `${values.clubName}, ${values.city}`,
          phone: values.phone,
          message: values.message,
        }),
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (response.ok) {
          setStatus("success");
          setTimeout(() => handleClose(), 3000);
        } else {
          setErrorMessage(data.error || "Something went wrong.");
          setStatus("error");
        }
      } else {
        setStatus("success");
        setTimeout(() => handleClose(), 3000);
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
        {/* Rotating gradient border */}
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
            <ConversationalForm
              key={formKey}
              steps={steps}
              onSubmit={handleSubmit}
              status={status}
              errorMessage={errorMessage}
              successTitle="Request Sent!"
              successMessage="Our team will reach out to you shortly."
              submitLabel="Submit Request"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
