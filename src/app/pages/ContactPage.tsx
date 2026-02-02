import { motion } from "motion/react";
import { EnhancedContact } from "@/app/components/EnhancedContact";
import { Badge } from "@/app/components/ui/badge";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { pageTransition, fadeInUp } from "@/app/utils/animations";

const serviceAreas = [
  { state: "New York", count: "8 cities" },
  { state: "New Jersey", count: "8 cities" },
  { state: "Connecticut", count: "8 cities" },
];

export function ContactPage() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Optimize Your HVAC System
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Contact us for a free consultation and quote. We respond to all
              inquiries within 2 business hours, and we're available 24/7 for
              emergencies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <motion.a
              href="tel:+18885551234"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="size-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">
                  Call Us
                </div>
                <div className="text-blue-600 font-semibold">
                  (888) 555-1234
                </div>
                <div className="text-sm text-gray-600">24/7 Available</div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:info@apexclimate.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="size-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">
                  Email Us
                </div>
                <div className="text-blue-600 font-semibold text-sm">
                  info@apexclimate.com
                </div>
                <div className="text-sm text-gray-600">2hr response</div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="size-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">
                  Visit Us
                </div>
                <div className="text-sm text-gray-700">
                  500 Commercial Dr
                </div>
                <div className="text-sm text-gray-600">Newark, NJ 07102</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="size-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">
                  Business Hours
                </div>
                <div className="text-sm text-gray-700">Mon-Fri: 7am-7pm</div>
                <div className="text-sm text-gray-600">Sat: 8am-5pm</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <EnhancedContact />

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Serve the Tri-State Area
            </h2>
            <p className="text-lg text-gray-600">
              Professional commercial HVAC services across New York, New Jersey,
              and Connecticut
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all"
              >
                <MapPin className="size-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {area.state}
                </h3>
                <p className="text-gray-600">{area.count}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              Don't see your location? We regularly expand our service coverage.
            </p>
            <a
              href="tel:+18885551234"
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Call us to check availability →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              HVAC Emergency? We're Here 24/7
            </h3>
            <p className="text-red-100 mb-6">
              Average response time under 2 hours for critical situations
            </p>
            <a
              href="tel:+18885551234"
              className="inline-block bg-white text-red-600 font-bold px-8 py-4 rounded-lg hover:bg-red-50 transition-colors text-lg"
            >
              Call Emergency Line: (888) 555-1234
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}