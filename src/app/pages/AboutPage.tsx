import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { About } from "@/app/components/About";
import { Certifications } from "@/app/components/Certifications";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Users, Target, Heart, Award } from "lucide-react";
import { pageTransition, fadeInUp, staggerContainer, staggerItem } from "@/app/utils/animations";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for technical excellence in every installation, repair, and maintenance service we provide.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Honest communication, transparent pricing, and doing what's right for our clients, always.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Your success is our success. We build long-term partnerships, not just one-time transactions.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "Staying ahead of HVAC technology trends to deliver cutting-edge, energy-efficient solutions.",
  },
];

const timeline = [
  {
    year: "1998",
    title: "Founded",
    description: "Apex Climate Solutions established in Newark, NJ with a team of 5 technicians",
  },
  {
    year: "2005",
    title: "Expansion",
    description: "Extended service coverage to tri-state area with 20+ technicians",
  },
  {
    year: "2012",
    title: "Innovation Leader",
    description: "Early adopter of smart building automation and energy optimization",
  },
  {
    year: "2018",
    title: "500th Client",
    description: "Reached milestone of 500 active commercial clients",
  },
  {
    year: "2024",
    title: "Today",
    description: "45+ certified technicians serving the tri-state area with excellence",
  },
];

export function AboutPage() {
  return (
    <motion.div {...pageTransition} className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              Since 1998
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              26 Years of HVAC Excellence
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Built on a foundation of technical expertise, integrity, and
              unwavering commitment to customer satisfaction. We're more than
              HVAC contractors—we're your long-term climate control partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Content */}
      <About />

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide every decision we make and every service
              we deliver
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="size-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon className="size-8 text-blue-600" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-xl">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              26 years of growth, innovation, and unwavering dedication
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 size-6 bg-blue-600 rounded-full border-4 border-white shadow-md hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner With a Trusted Leader
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the Apex difference. Let's discuss how we can optimize
              your commercial HVAC systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
