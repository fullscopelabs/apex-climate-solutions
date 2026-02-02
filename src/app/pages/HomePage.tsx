import { motion } from "motion/react";
import { EnhancedHero } from "@/app/components/EnhancedHero";
import { FeaturedIn } from "@/app/components/FeaturedIn";
import { Services } from "@/app/components/Services";
import { ServiceAreas } from "@/app/components/ServiceAreas";
import { Testimonials } from "@/app/components/Testimonials";
import { GoogleReviews } from "@/app/components/GoogleReviews";
import { Certifications } from "@/app/components/Certifications";
import { CTABanner } from "@/app/components/CTABanner";
import { ActiveClientsIndicator } from "@/app/components/ActiveClientsIndicator";
import { pageTransition } from "@/app/utils/animations";

export function HomePage() {
  return (
    <motion.div {...pageTransition}>
      <EnhancedHero />
      <FeaturedIn />
      
      {/* Active Clients Indicator */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <ActiveClientsIndicator />
        </div>
      </section>

      <Services />
      
      {/* Google Reviews Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <GoogleReviews />
        </div>
      </section>

      <ServiceAreas />
      <Testimonials />
      <Certifications />
      <CTABanner />
    </motion.div>
  );
}