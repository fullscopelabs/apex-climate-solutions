import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-blue-50 pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={false}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-100/30 rounded-full blur-3xl"
        />
        <motion.div
          initial={false}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs sm:text-sm">
                26+ Years of Excellence
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Commercial HVAC Solutions Built for Reliability
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8"
            >
              Apex Climate Solutions delivers enterprise-grade heating,
              cooling, and ventilation systems for commercial facilities
              throughout the tri-state area. Licensed, certified, and trusted
              by over 500+ businesses.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8">
                  <Link to="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 size-4 sm:size-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8"
                >
                  <a href="tel:+18885551234">
                    <Phone className="mr-2 size-4 sm:size-5" />
                    (888) 555-1234
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm"
            >
              {[
                "24/7 Emergency Service",
                "EPA Certified",
                "Licensed & Insured",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    initial={false}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut",
                    }}
                    className="size-2 bg-green-500 rounded-full flex-shrink-0"
                  />
                  <span className="text-gray-600">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwSFZBQyUyMHRlY2huaWNpYW4lMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2OTk4MjAwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Commercial HVAC technician working on industrial system"
                className="size-full object-cover"
              />
            </motion.div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3 sm:gap-4"
            >
              {[
                { value: "500+", label: "Active Clients" },
                { value: "26", label: "Years Experience" },
                { value: "98%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="bg-white rounded-lg shadow-lg p-3 sm:p-4 text-center cursor-default"
                >
                  <motion.div
                    initial={false}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut",
                    }}
                    className="text-xl sm:text-2xl font-bold text-blue-600"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}