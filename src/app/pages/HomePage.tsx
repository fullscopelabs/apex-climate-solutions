import { motion } from "motion/react";
import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";
import { ServiceAreas } from "@/app/components/ServiceAreas";
import { Testimonials } from "@/app/components/Testimonials";
import { Certifications } from "@/app/components/Certifications";
import { CTABanner } from "@/app/components/CTABanner";
import { pageTransition } from "@/app/utils/animations";

export function HomePage() {
  return (
    <motion.div {...pageTransition}>
      <Hero />
      <Services />
      <ServiceAreas />
      <Testimonials />
      <Certifications />
      <CTABanner />
    </motion.div>
  );
}
