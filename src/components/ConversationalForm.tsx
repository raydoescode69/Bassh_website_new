"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { ArrowRight, Check, Loader2, CheckCircle2 } from "lucide-react";

export interface FormStep {
  key: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
}

interface ConversationalFormProps {
  steps: FormStep[];
  onSubmit: (values: Record<string, string>) => void;
  status: "idle" | "loading" | "success" | "error";
  errorMessage: string;
  successTitle: string;
  successMessage: string;
  submitLabel?: string;
}

const validateField = (step: FormStep, value: string): string | null => {
  const val = value.trim();
  if (!val && !step.required) return null;
  if (!val && step.required) return null; // handled by canProceed

  if (step.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
      return "Please enter a valid email address";
    }
  }

  if (step.type === "tel" && val) {
    const digitsOnly = val.replace(/[\s\-\+\(\)]/g, "");
    // Allow with or without country code: 10 digits, or country code + 10 digits
    if (digitsOnly.length < 10 || digitsOnly.length > 13) {
      return "Please enter a valid 10-digit phone number";
    }
    // If just digits (no country code), must be exactly 10
    if (/^\d+$/.test(digitsOnly) && digitsOnly.length !== 10) {
      return "Phone number must be exactly 10 digits";
    }
  }

  return null;
};

export const ConversationalForm: React.FC<ConversationalFormProps> = ({
  steps,
  onSubmit,
  status,
  errorMessage,
  successTitle,
  successMessage,
  submitLabel = "Submit",
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [stepKey, setStepKey] = useState(0);
  const [fieldError, setFieldError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  const totalSteps = steps.length;
  const isLastStep = currentStep === totalSteps - 1;
  const currentField = steps[currentStep];

  // Auto-focus input on step change
  useEffect(() => {
    if (!showSummary && status !== "success") {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [currentStep, showSummary, status]);

  // Focus summary div for Enter key support
  useEffect(() => {
    if (showSummary && summaryRef.current) {
      summaryRef.current.focus();
    }
  }, [showSummary]);

  // Clear field error when value changes
  useEffect(() => {
    setFieldError(null);
  }, [values, currentStep]);

  const canProceed = useCallback(() => {
    if (!currentField) return false;
    const val = values[currentField.key] || "";
    if (currentField.required) return val.trim().length > 0;
    return true;
  }, [currentField, values]);

  const goNext = useCallback(() => {
    if (!canProceed()) return;

    // Validate current field
    const val = values[currentField.key] || "";
    const error = validateField(currentField, val);
    if (error) {
      setFieldError(error);
      return;
    }

    setFieldError(null);
    setStepKey((k) => k + 1);

    if (isLastStep) {
      setShowSummary(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  }, [canProceed, isLastStep, currentField, values]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentField?.type !== "textarea") {
      e.preventDefault();
      goNext();
    }
  };

  const handleSummaryKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && status !== "loading") {
      e.preventDefault();
      onSubmit(values);
    }
  };

  const handleSubmit = () => {
    onSubmit(values);
  };

  // Success state
  if (status === "success") {
    return (
      <div className="text-center py-8" style={{ animation: "convStepIn 0.4s ease-out both" }}>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
          <CheckCircle2
            className="w-10 h-10 text-[#ff007e]"
            style={{ animation: "convTickPop 0.5s ease-out both" }}
          />
        </div>
        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-lg mb-2">
          {successTitle}
        </h3>
        <p className="[font-family:'Inter',Helvetica] text-white/60 text-sm">
          {successMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col" style={{ minHeight: 260 }}>
      {/* Progress bar */}
      <div className="flex items-center gap-1.5 mb-6">
        {steps.map((_, i) => (
          <div
            key={i}
            className="h-[3px] rounded-full transition-all duration-500 ease-out"
            style={{
              flex: i <= currentStep || showSummary ? 2 : 1,
              backgroundColor:
                i < currentStep || showSummary
                  ? "#ff007e"
                  : i === currentStep && !showSummary
                  ? "rgba(255,0,126,0.5)"
                  : "rgba(255,255,255,0.1)",
            }}
          />
        ))}
      </div>

      {showSummary ? (
        /* ── Summary view ── */
        <div
          ref={summaryRef}
          tabIndex={-1}
          onKeyDown={handleSummaryKeyDown}
          key="summary"
          style={{ animation: "convStepIn 0.35s ease-out both", outline: "none" }}
          className="flex-1 flex flex-col"
        >
          <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm mb-3">
            Review your details
          </p>

          <div className="space-y-1.5 mb-5 overflow-y-auto max-h-[220px] pr-1 custom-summary-scroll">
            {steps.map((step) => {
              const val = values[step.key];
              if (!val) return null;
              return (
                <div
                  key={step.key}
                  className="flex items-start justify-between gap-3 px-3 py-2.5 bg-white/[0.04] rounded-lg border border-white/[0.06]"
                >
                  <span className="text-white/40 text-xs [font-family:'Inter',Helvetica] shrink-0 pt-0.5">
                    {step.label.replace(/\?$/, "")}
                  </span>
                  <span className="text-white text-sm [font-family:'Inter',Helvetica] text-right break-words min-w-0">
                    {val}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-auto space-y-3">
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full px-6 py-3.5 bg-gradient-to-r from-[#ff007e] to-[#c30060] hover:from-[#ff1a8e] hover:to-[#d0006d] text-white font-semibold text-sm rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#ff007e]/20 [font-family:'Poppins',Helvetica] flex items-center justify-center"
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </span>
              ) : (
                submitLabel
              )}
            </button>

            <button
              onClick={() => {
                setShowSummary(false);
                setStepKey((k) => k + 1);
              }}
              disabled={status === "loading"}
              className="w-full text-center text-white/40 hover:text-white/60 text-xs [font-family:'Inter',Helvetica] transition-colors disabled:opacity-50"
            >
              Go back and edit
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center [font-family:'Inter',Helvetica]">
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      ) : (
        /* ── Question view ── */
        <div className="flex-1 flex flex-col">
          {/* Previous answers as chips */}
          {currentStep > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {steps.slice(0, currentStep).map((step) => {
                const val = values[step.key];
                if (!val) return null;
                return (
                  <span
                    key={step.key}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#ff007e]/10 border border-[#ff007e]/15 rounded-full text-xs text-white/60 [font-family:'Inter',Helvetica] max-w-[180px]"
                  >
                    <Check className="w-3 h-3 text-[#ff007e] shrink-0" />
                    <span className="truncate">
                      {val}
                    </span>
                  </span>
                );
              })}
            </div>
          )}

          {/* Current question */}
          <div
            key={stepKey}
            className="flex-1 flex flex-col"
            style={{ animation: "convStepIn 0.35s ease-out both" }}
          >
            <label className="[font-family:'Poppins',Helvetica] font-medium text-white text-base sm:text-lg mb-1">
              {currentField.label}
            </label>
            <div className="mb-3" />

            {currentField.type === "textarea" ? (
              <textarea
                ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                value={values[currentField.key] || ""}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, [currentField.key]: e.target.value }))
                }
                placeholder={currentField.placeholder}
                rows={3}
                className={`w-full px-4 py-3 bg-white/[0.06] border rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:bg-white/[0.08] transition-all [font-family:'Inter',Helvetica] text-sm resize-none ${
                  fieldError ? "border-red-500/50 focus:border-red-500/70" : "border-white/10 focus:border-[#ff007e]/50"
                }`}
              />
            ) : (
              <input
                ref={inputRef as React.RefObject<HTMLInputElement>}
                type={currentField.type}
                value={values[currentField.key] || ""}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, [currentField.key]: e.target.value }))
                }
                onKeyDown={handleKeyDown}
                placeholder={currentField.placeholder}
                className={`w-full px-4 py-3 bg-white/[0.06] border rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:bg-white/[0.08] transition-all [font-family:'Inter',Helvetica] text-sm ${
                  fieldError ? "border-red-500/50 focus:border-red-500/70" : "border-white/10 focus:border-[#ff007e]/50"
                }`}
              />
            )}

            {/* Validation error */}
            {fieldError && (
              <p className="text-red-400 text-xs mt-1.5 [font-family:'Inter',Helvetica]" style={{ animation: "convStepIn 0.2s ease-out both" }}>
                {fieldError}
              </p>
            )}

            <div className="flex items-center justify-end mt-4">
              <button
                onClick={goNext}
                disabled={currentField.required && !(values[currentField.key]?.trim())}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff007e] hover:bg-[#ff1a8e] text-white font-medium text-sm rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:scale-100 [font-family:'Poppins',Helvetica]"
              >
                {isLastStep ? "Review" : "Continue"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
