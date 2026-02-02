import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { HomePage } from "@/app/pages/HomePage";
import { AboutPage } from "@/app/pages/AboutPage";
import { ServicesPage } from "@/app/pages/ServicesPage";
import { CaseStudiesPage } from "@/app/pages/CaseStudiesPage";
import { CaseStudyDetailPage } from "@/app/pages/CaseStudyDetailPage";
import { ContactPage } from "@/app/pages/ContactPage";
import { NotFoundPage } from "@/app/pages/NotFoundPage";

export function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    console.log('Route changed to:', location.pathname);
    console.log('Scrolling to top...');
    window.scrollTo(0, 0);
    console.log('Current scroll position:', window.scrollY);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}