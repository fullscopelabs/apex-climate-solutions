import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Home, Search, Phone } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 pt-20 pb-20">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Animation */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-9xl font-bold text-blue-600 mb-4"
          >
            404
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg text-gray-600 mb-8"
          >
            Looks like this page took an unscheduled maintenance break. Let's
            get you back on track.
          </motion.p>

          {/* Navigation Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" asChild>
              <Link to="/">
                <Home className="mr-2 size-5" />
                Go Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                <Search className="mr-2 size-5" />
                View Services
              </Link>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
          >
            <h2 className="font-semibold text-gray-900 mb-4">
              Need Help Right Away?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+18885551234"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                <Phone className="size-5" />
                (888) 555-1234
              </a>
              <span className="hidden sm:inline text-gray-400">•</span>
              <span className="text-gray-600">24/7 Emergency Service</span>
            </div>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8"
          >
            <p className="text-sm text-gray-500 mb-3">Popular pages:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { to: "/about", label: "About Us" },
                { to: "/case-studies", label: "Case Studies" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}