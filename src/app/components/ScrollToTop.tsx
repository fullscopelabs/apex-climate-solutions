import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('ScrollToTop effect triggered for:', pathname);
    
    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Try multiple scroll methods
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    console.log('After scroll - window.scrollY:', window.scrollY);
    
    // Also try after next frame
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      console.log('After RAF - window.scrollY:', window.scrollY);
    });
  }, [pathname]);

  return null;
}