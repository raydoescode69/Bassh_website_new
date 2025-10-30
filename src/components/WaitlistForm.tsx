"use client";
import React, { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";

interface WaitlistFormProps {
  variant?: "hero" | "footer";
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ variant = "hero" }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");
        
        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const isHero = variant === "hero";

  if (status === "success") {
    return (
      <div className="w-full max-w-xl mx-auto text-center py-6 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff007e]/20 rounded-full mb-4">
          <Sparkles className="w-8 h-8 text-[#ff007e]" />
        </div>
        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl md:text-2xl mb-2">
          You're on the list!
        </h3>
        <p className="[font-family:'Inter',Helvetica] text-white/70 text-sm md:text-base">
          We'll notify you when Bassh launches 🎉
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      {isHero && (
        <div className="text-center mb-6">
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
            className="flex-1 px-5 py-3.5 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#ff007e] focus:bg-white/15 transition-all [font-family:'Inter',Helvetica] text-base disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-3.5 md:py-4 bg-gradient-to-r from-[#ff007e] to-[#c30060] hover:from-[#ff1a8e] hover:to-[#d0006d] text-white font-semibold text-base rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#ff007e]/30 [font-family:'Poppins',Helvetica] whitespace-nowrap"
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Joining...
              </span>
            ) : (
              "Join Waitlist"
            )}
          </button>
        </div>

        {status === "error" && (
          <p className="text-red-400 text-sm text-center [font-family:'Inter',Helvetica] animate-fade-in">
            Something went wrong. Please try again.
          </p>
        )}
      </form>

      {isHero && (
        <p className="text-center text-white/40 text-xs md:text-sm mt-4 [font-family:'Inter',Helvetica]">
          Be the first to experience India's #1 nightlife platform
        </p>
      )}
    </div>
  );
};

