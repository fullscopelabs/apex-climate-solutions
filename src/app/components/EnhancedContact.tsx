import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, Upload, CheckCircle, Calendar } from "lucide-react";
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
import confetti from "canvas-confetti";

export function EnhancedContact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    preferredTime: "",
    message: "",
    file: null as File | null,
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#2563eb", "#3b82f6", "#60a5fa"],
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        preferredTime: "",
        message: "",
        file: null,
      });
    }, 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file });
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-2xl p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="size-20 text-green-500 mx-auto mb-6" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Reaching Out!
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              We've received your message and will respond within 2 business hours.
            </p>
            <p className="text-gray-500">
              A member of our team will contact you at {formData.email}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info with Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Let's Discuss Your HVAC Needs
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get a free consultation and quote. We respond to all inquiries
              within 2 business hours.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "(888) 555-1234",
                  href: "tel:+18885551234",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@apexclimate.com",
                  href: "mailto:info@apexclimate.com",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "500 Commercial Dr, Newark, NJ 07102",
                  href: "#",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon-Fri: 7am-7pm, Sat: 8am-5pm",
                  href: "#",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="size-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {item.label}
                      </div>
                      {item.href.startsWith("#") ? (
                        <div className="text-gray-600">{item.value}</div>
                      ) : (
                        <a
                          href={item.href}
                          className="text-blue-600 hover:underline"
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Embedded Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200"
            >
              <div className="size-full bg-gray-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="size-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 font-medium">
                    500 Commercial Dr, Newark, NJ 07102
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    [Google Maps would be embedded here]
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Request a Free Consultation
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <Label htmlFor="name">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`mt-1 ${errors.name ? "border-red-500" : ""}`}
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="mt-1"
                    placeholder="ABC Corporation"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`mt-1 ${errors.email ? "border-red-500" : ""}`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">
                      Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`mt-1 ${errors.phone ? "border-red-500" : ""}`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Service & Preferred Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service">
                      Service Needed <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger
                        id="service"
                        className={`mt-1 ${errors.service ? "border-red-500" : ""}`}
                      >
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="installation">Installation</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="repair">Repair</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="emergency">Emergency Service</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="preferredTime">Preferred Contact Time</Label>
                    <Select
                      value={formData.preferredTime}
                      onValueChange={(value) =>
                        setFormData({ ...formData, preferredTime: value })
                      }
                    >
                      <SelectTrigger id="preferredTime" className="mt-1">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8am-12pm)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12pm-5pm)</SelectItem>
                        <SelectItem value="evening">Evening (5pm-7pm)</SelectItem>
                        <SelectItem value="anytime">Anytime</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`mt-1 ${errors.message ? "border-red-500" : ""}`}
                    rows={4}
                    placeholder="Tell us about your HVAC needs..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* File Upload */}
                <div>
                  <Label htmlFor="file">
                    Attach Building Plans (Optional)
                  </Label>
                  <div className="mt-1">
                    <label
                      htmlFor="file"
                      className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition-colors"
                    >
                      <Upload className="size-5 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {formData.file ? formData.file.name : "Click to upload files"}
                      </span>
                      <input
                        id="file"
                        type="file"
                        onChange={handleFileChange}
                        className="sr-only"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, JPG, PNG (Max 10MB)
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="size-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 size-5" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We'll respond within 2 business hours. For emergencies, call{" "}
                  <a href="tel:+18885551234" className="text-blue-600 font-semibold">
                    (888) 555-1234
                  </a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
