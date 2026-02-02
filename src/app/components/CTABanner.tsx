import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={false}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={false}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Commercial HVAC System?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Get a free consultation and quote from the tri-state area's most
            trusted commercial HVAC experts. Available 24/7 for emergencies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8">
                <Link to="/contact">
                  <Calendar className="mr-2 size-4 sm:size-5" />
                  Schedule Consultation
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 bg-white/10 border-white text-white hover:bg-white hover:text-blue-600"
              >
                <a href="tel:+18885551234">
                  <Phone className="mr-2 size-4 sm:size-5" />
                  Call (888) 555-1234
                </a>
              </Button>
            </motion.div>
          </div>
          
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-blue-200">
            Licensed & Insured | EPA Certified | 26+ Years of Excellence
          </p>
        </motion.div>
      </div>
    </section>
  );
}