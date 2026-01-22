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
      // Use relative URL for API route (works with vercel dev)
      const apiUrl = "/api/waitlist";
      console.log("Making request to:", apiUrl);
      
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, clubNameCity }),
      });
      
      console.log("Response status:", response.status);
      console.log("Response URL:", response.url);

      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      let data;
      
      // Check for 404 first - this usually means the route isn't found
      if (response.status === 404) {
        const text = await response.text();
        // If it's HTML, it means Vercel served the SPA fallback instead of the API route
        if (text.includes("<!DOCTYPE") || text.includes("<html") || !contentType?.includes("application/json")) {
          throw new Error("API route not found. Make sure you're running 'npm run dev:vercel' (not 'npm run dev') and restart the server after configuration changes.");
        }
        // Otherwise it's a JSON 404 from the API itself
        try {
          data = JSON.parse(text);
          throw new Error(data.error || "API route returned 404");
        } catch {
          throw new Error("API route not found. Please check your configuration.");
        }
      }
      
      if (contentType && contentType.includes("application/json")) {
        const text = await response.text();
        if (text) {
          try {
            data = JSON.parse(text);
          } catch (parseError) {
            console.error("JSON parse error:", parseError);
            throw new Error("Invalid response from server. Please try again.");
          }
        } else {
          throw new Error("Empty response from server. Please try again.");
        }
      } else {
        // Not a JSON response
        const text = await response.text();
        if (text.includes("<!DOCTYPE") || text.includes("<html")) {
          throw new Error("API route not found. The server returned HTML instead of JSON. Make sure you're running 'npm run dev:vercel'.");
        }
        throw new Error(`Server returned non-JSON response (${response.status}). Please try again.`);
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
        setErrorMessage("Cannot connect to API. Make sure you're running 'npm run dev:vercel' (not 'npm run dev'). API routes only work with 'vercel dev'.");
      } else if (error.message.includes("404") || error.message.includes("not found")) {
        setErrorMessage("API route not found. Please ensure you're running 'npm run dev:vercel' and that the server has been restarted after configuration changes.");
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

