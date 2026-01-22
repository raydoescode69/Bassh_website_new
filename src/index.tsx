import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import { HelpSupportPage } from "./screens/HelpSupportPage";
import { PartnerWithUsPage } from "./screens/PartnerWithUsPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/help-support" element={<HelpSupportPage />} />
        <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
