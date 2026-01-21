"use client";
import React, { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";

interface WaitlistFormProps {
  variant?: "hero" | "footer";
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ variant = "hero" }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [clubNameCity, setClubNameCity] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:3001/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, club: clubNameCity }),
      });

      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      let data;
      
      if (contentType && contentType.includes("application/json")) {
        const text = await response.text();
        if (text) {
          try {
            data = JSON.parse(text);
          } catch (parseError) {
            console.error("JSON parse error:", parseError);
            throw new Error("Invalid response from server. Please make sure the backend server is running on port 3001.");
          }
        } else {
          throw new Error("Empty response from server. Please check the backend server logs.");
        }
      } else {
        // Not a JSON response
        if (response.status === 404) {
          throw new Error("Backend server not found. Please make sure the server is running on port 3001.");
        }
        const text = await response.text();
        throw new Error(`Server returned non-JSON response (${response.status}). Please check your server configuration.`);
      }

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setName("");
        setClubNameCity("");
        setErrorMessage("");
        
        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      } else {
        console.error("API Error:", data);
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        setTimeout(() => {
          setStatus("idle");
          setErrorMessage("");
        }, 5000);
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      console.error("Error type:", error.name);
      console.error("Error message:", error.message);
      
      if (error.name === "TypeError" && error.message.includes("Failed to fetch")) {
        setErrorMessage("Cannot connect to server. Make sure 'vercel dev' is running and the API route is accessible.");
      } else {
        setErrorMessage(error.message || "Network error. Please check your connection and try again.");
      }
      
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
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

      <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={status === "loading"}
          className="w-full px-4 sm:px-5 py-3 sm:py-3.5 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#ff007e] focus:bg-white/15 transition-all [font-family:'Inter',Helvetica] text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <input
          type="text"
          placeholder="Club name & city"
          value={clubNameCity}
          onChange={(e) => setClubNameCity(e.target.value)}
          required
          disabled={status === "loading"}
          className="w-full px-4 sm:px-5 py-3 sm:py-3.5 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#ff007e] focus:bg-white/15 transition-all [font-family:'Inter',Helvetica] text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
          className="w-full px-4 sm:px-5 py-3 sm:py-3.5 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#ff007e] focus:bg-white/15 transition-all [font-family:'Inter',Helvetica] text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[#ff007e] to-[#c30060] hover:from-[#ff1a8e] hover:to-[#d0006d] text-white font-semibold text-sm sm:text-base rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#ff007e]/30 [font-family:'Poppins',Helvetica] whitespace-nowrap flex items-center justify-center"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              <span className="hidden sm:inline">Joining...</span>
              <span className="sm:hidden">Joining</span>
            </span>
          ) : (
            "Join Waitlist"
          )}
        </button>

        {status === "error" && (
          <p className="text-red-400 text-sm text-center [font-family:'Inter',Helvetica] animate-fade-in">
            {errorMessage || "Something went wrong. Please try again."}
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

