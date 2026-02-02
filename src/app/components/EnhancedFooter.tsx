import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Calendar, Shield, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { toast } from "sonner";

export function EnhancedFooter() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  const socialLinks = [
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" },
    { name: "Facebook", icon: "facebook", url: "https://facebook.com" },
    { name: "Instagram", icon: "instagram", url: "https://instagram.com" },
    { name: "YouTube", icon: "youtube", url: "https://youtube.com" },
  ];

  const trustBadges = [
    { icon: Shield, label: "Licensed" },
    { icon: CheckCircle, label: "Insured" },
    { icon: Award, label: "Bonded" },
    { icon: CheckCircle, label: "EPA Certified" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="size-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm"
              >
                AC
              </motion.div>
              <div className="font-bold text-white">
                Apex Climate Solutions
              </div>
            </div>
            <p className="text-xs mb-4 leading-relaxed">
              Premier commercial HVAC solutions serving businesses across the
              tri-state area since 1998.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2 text-sm">
                Subscribe to Our Newsletter
              </h3>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your.email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 h-9 text-sm"
                />
                <Button type="submit" size="icon" className="h-9 w-9">
                  <Send className="size-3.5" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-1.5">
                Get HVAC tips, maintenance guides, and special offers
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-2 text-sm">Follow Us</h3>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="size-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    {/* Simple icon placeholders */}
                    <span className="text-xs font-bold">
                      {social.icon.charAt(0).toUpperCase()}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Quick Links</h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Schedule */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Contact & Hours</h3>
            <div className="flex flex-col gap-2 text-xs mb-4">
              <div className="flex items-center gap-2">
                <Phone className="size-3.5 text-blue-400" />
                <a href="tel:+18885551234" className="hover:text-white">
                  (888) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-3.5 text-blue-400" />
                <a href="mailto:info@apexclimate.com" className="hover:text-white">
                  info@apexclimate.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="size-3.5 text-blue-400 mt-0.5" />
                <span>500 Commercial Dr<br />Newark, NJ 07102</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="size-3.5 text-blue-400 mt-0.5" />
                <span>Mon-Fri: 7am-7pm<br />Sat: 8am-5pm<br /><span className="text-amber-400 font-medium">24/7 Emergency</span></span>
              </div>
            </div>

            {/* Schedule Call Button */}
            <Button
              variant="outline"
              size="sm"
              asChild
              className="w-full bg-transparent border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 h-9 text-xs"
            >
              <a href="tel:+18885551234">
                <Calendar className="mr-2 size-3.5" />
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-4 mb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-3 bg-gray-800 rounded-lg p-3"
                >
                  <Icon className="size-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm font-semibold text-white leading-tight">
                    {badge.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
            <div className="text-gray-400">
              © 2026 Apex Climate Solutions. All rights reserved.
            </div>
            <div className="flex gap-4 text-gray-400">
              <button className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500 text-center md:text-left">
            Licensed HVAC Contractor | EPA Certified | Insured & Bonded | BBB Accredited Business
          </div>
        </div>
      </div>
    </footer>
  );
}