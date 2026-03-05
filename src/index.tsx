import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "./components/ScrollToTop";
import { LandingPage } from "./screens/LandingPage";
import { HelpSupportPage } from "./screens/HelpSupportPage";
import { JoinUsPage } from "./screens/JoinUsPage";
import { FaqsPage } from "./screens/FaqsPage";
import { EnterprisePage } from "./screens/EnterprisePage";
import { CareersPage } from "./screens/CareersPage";
import { BlogPage } from "./screens/BlogPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/help-support" element={<HelpSupportPage />} />
          <Route path="/join-us" element={<JoinUsPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
