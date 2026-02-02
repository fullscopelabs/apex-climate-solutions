import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "@/app/components/ErrorBoundary";
import { SkipToMain } from "@/app/components/SkipToMain";
import { Header } from "@/app/components/Header";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { EnhancedFooter } from "@/app/components/EnhancedFooter";
import { AnimatedRoutes } from "@/app/components/AnimatedRoutes";
import { SEOMetadata } from "@/app/components/SEOMetadata";
import { ScrollProgress } from "@/app/components/ScrollProgress";
import { ScrollToTop } from "@/app/components/ScrollToTop";
import { StickyQuoteButton } from "@/app/components/StickyQuoteButton";
import { ExitIntentPopup } from "@/app/components/ExitIntentPopup";
import { LiveChatWidget } from "@/app/components/LiveChatWidget";

export default function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="relative min-h-screen bg-white overflow-x-hidden">
            <SkipToMain />
            <ScrollProgress />
            <SEOMetadata />
            <Header />
            <Breadcrumb />
            <main id="main-content" className="relative min-h-screen">
              <AnimatedRoutes />
            </main>
            <EnhancedFooter />
            <LiveChatWidget />
            <ExitIntentPopup onVisibilityChange={setIsPopupVisible} />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}