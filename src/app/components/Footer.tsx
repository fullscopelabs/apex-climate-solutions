import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
                AC
              </div>
              <div className="font-bold text-white text-lg">
                Apex Climate
              </div>
            </div>
            <p className="text-sm mb-4">
              Premier commercial HVAC solutions serving businesses across the
              tri-state area since 1998.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-blue-400" />
                <a href="tel:+18885551234" className="hover:text-white">
                  (888) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-blue-400" />
                <a href="mailto:info@apexclimate.com" className="hover:text-white">
                  info@apexclimate.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
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

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>HVAC Installation</li>
              <li>System Maintenance</li>
              <li>Emergency Repairs</li>
              <li>Energy Audits</li>
              <li>Indoor Air Quality</li>
              <li>Preventive Maintenance</li>
            </ul>
          </div>

          {/* Service Areas & Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <div className="flex items-start gap-2 text-sm mb-4">
              <MapPin className="size-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                New York, New Jersey, Connecticut
              </div>
            </div>
            <h3 className="text-white font-semibold mb-4">Hours</h3>
            <div className="flex items-start gap-2 text-sm">
              <Clock className="size-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <div>Mon-Fri: 7am - 7pm</div>
                <div>Sat: 8am - 5pm</div>
                <div>24/7 Emergency Service</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>
              © 2026 Apex Climate Solutions. All rights reserved.
            </div>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center md:text-left">
            Licensed HVAC Contractor | EPA Certified | Insured & Bonded
          </div>
        </div>
      </div>
    </footer>
  );
}