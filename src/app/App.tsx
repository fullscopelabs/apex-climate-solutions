import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Toaster } from "@/app/components/ui/sonner";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { FloatingCallButton } from "@/app/components/FloatingCallButton";
import { SEOMetadata } from "@/app/components/SEOMetadata";
import { ScrollProgress } from "@/app/components/ScrollProgress";
import { HomePage } from "@/app/pages/HomePage";
import { ServicesPage } from "@/app/pages/ServicesPage";
import { AboutPage } from "@/app/pages/AboutPage";
import { CaseStudiesPage } from "@/app/pages/CaseStudiesPage";
import { CaseStudyDetailPage } from "@/app/pages/CaseStudyDetailPage";
import { ContactPage } from "@/app/pages/ContactPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <ScrollProgress />
        <SEOMetadata />
        <Header />
        <main className="min-h-screen">
          <AnimatedRoutes />
        </main>
        <Footer />
        <FloatingCallButton />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}