import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Thank you! We'll contact you within 2 business hours.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600">
            Ready to improve your commercial HVAC system? Contact us for a free
            consultation and quote. We respond to all inquiries within 2
            business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Request a Free Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Smith"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Acme Corporation"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@acmecorp.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="(555) 123-4567"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Service Needed *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="installation">
                        New Installation
                      </SelectItem>
                      <SelectItem value="maintenance">
                        Preventive Maintenance
                      </SelectItem>
                      <SelectItem value="repair">Emergency Repair</SelectItem>
                      <SelectItem value="energy-audit">
                        Energy Audit
                      </SelectItem>
                      <SelectItem value="retrofit">System Retrofit</SelectItem>
                      <SelectItem value="consultation">
                        General Consultation
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your facility size, current system, and any specific requirements..."
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 size-5" />
                  Submit Request
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We
                  typically respond within 2 business hours.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-900 mb-3 text-lg">
                24/7 Emergency Service
              </h3>
              <a
                href="tel:+18885551234"
                className="flex items-center gap-3 text-red-700 font-semibold text-xl hover:text-red-800"
              >
                <Phone className="size-6" />
                (888) 555-1234
              </a>
              <p className="text-sm text-red-600 mt-2">
                For urgent HVAC emergencies, call us immediately. We provide
                rapid response 24/7/365.
              </p>
            </div>

            {/* Contact Details */}
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                Contact Information
              </h3>
              
              <div className="flex items-start gap-3">
                <Phone className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900">
                    Main Office
                  </div>
                  <a
                    href="tel:+18885551234"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    (888) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <a
                    href="mailto:info@apexclimate.com"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    info@apexclimate.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900">
                    Headquarters
                  </div>
                  <div className="text-gray-600">
                    500 Commercial Drive
                    <br />
                    Newark, NJ 07102
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900">
                    Business Hours
                  </div>
                  <div className="text-gray-600">
                    Mon-Fri: 7:00 AM - 7:00 PM
                    <br />
                    Sat: 8:00 AM - 5:00 PM
                    <br />
                    Sun: Emergency Only
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-2">
                Fast Response Time
              </h3>
              <p className="text-sm text-blue-700">
                We respond to all quotes and inquiries within 2 business hours.
                Emergency service calls are answered immediately 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
