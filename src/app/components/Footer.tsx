import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-6">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="size-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
                AC
              </div>
              <div className="font-bold text-white">
                Apex Climate
              </div>
            </div>
            <p className="text-xs mb-3 leading-relaxed">
              Premier commercial HVAC solutions serving the tri-state area since 1998.
            </p>
            <div className="flex flex-col gap-1.5 text-xs">
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

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Our Services</h3>
            <ul className="space-y-1.5 text-xs">
              <li>HVAC Installation</li>
              <li>System Maintenance</li>
              <li>Emergency Repairs</li>
              <li>Energy Audits</li>
              <li>Indoor Air Quality</li>
              <li>Preventive Maintenance</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Service Areas</h3>
            <div className="flex items-start gap-2 text-xs mb-3">
              <MapPin className="size-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>NY, NJ, CT</div>
            </div>
            <h3 className="text-white font-semibold mb-2 text-sm">Hours</h3>
            <div className="flex items-start gap-2 text-xs">
              <Clock className="size-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <div>Mon-Fri: 7am - 7pm</div>
                <div>Sat: 8am - 5pm</div>
                <div className="text-amber-400 font-medium">24/7 Emergency</div>
              </div>
            </div>
          </div>

          {/* Certifications - New compact column */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Certified</h3>
            <ul className="space-y-1.5 text-xs">
              <li>EPA Section 608</li>
              <li>NATE Certified</li>
              <li>Licensed & Insured</li>
              <li>Energy Star Partner</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - More Compact */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
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
        </div>
      </div>
    </footer>
  );
}