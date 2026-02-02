import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { staggerContainer, staggerItem } from "@/app/utils/animations";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Facilities Manager",
    company: "TechCorp Industries",
    location: "Manhattan, NY",
    rating: 5,
    text: "Apex Climate Solutions transformed our aging HVAC system into a modern, efficient operation. Their preventive maintenance program has saved us over $50,000 annually in energy costs. The team is professional, responsive, and truly experts in their field.",
    results: "50% reduction in energy costs",
  },
  {
    name: "Sarah Martinez",
    role: "Property Director",
    company: "Metropolitan Office Buildings",
    location: "Jersey City, NJ",
    rating: 5,
    text: "When our main cooling system failed during a July heatwave, Apex had a team on-site within 90 minutes. They diagnosed the issue quickly and had us back online before end of business. Their 24/7 emergency service is worth every penny.",
    results: "90-minute emergency response",
  },
  {
    name: "David Thompson",
    role: "Operations Manager",
    company: "Harbor Medical Center",
    location: "Stamford, CT",
    rating: 5,
    text: "Healthcare facilities require absolute reliability in climate control. Apex has maintained our systems flawlessly for 8 years. Their preventive maintenance program ensures we never face downtime, which is critical for patient care.",
    results: "8 years of zero downtime",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. See what our commercial clients
            have to say about our HVAC services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={staggerItem}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <motion.div
                      animate={{ rotate: [0, 5, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <Quote className="size-8 text-blue-600/20 mb-4" />
                    </motion.div>
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i, duration: 0.3 }}
                        >
                          <Star className="size-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 mb-6">{testimonial.text}</p>

                    {/* Results Badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6"
                    >
                      <div className="text-sm font-semibold text-blue-900">
                        Key Result:
                      </div>
                      <div className="text-sm text-blue-700">
                        {testimonial.results}
                      </div>
                    </motion.div>

                    {/* Author Info */}
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.company}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {testimonial.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid sm:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "500+", label: "Commercial Clients" },
            { value: "98%", label: "Customer Retention" },
            { value: "26", label: "Years in Business" },
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                className="text-4xl font-bold text-blue-600 mb-2"
              >
                {metric.value}
              </motion.div>
              <div className="text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}