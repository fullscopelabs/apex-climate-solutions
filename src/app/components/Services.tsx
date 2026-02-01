import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Wrench,
  Shield,
  Zap,
  Wind,
  Settings,
  TrendingUp,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { staggerContainer, staggerItem } from "@/app/utils/animations";

const services = [
  {
    icon: Settings,
    title: "HVAC Installation",
    description:
      "Complete commercial HVAC system design and installation with energy-efficient solutions tailored to your facility's needs.",
    features: ["Custom design", "Energy analysis", "System sizing"],
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description:
      "Scheduled maintenance programs to maximize system lifespan, prevent breakdowns, and maintain peak efficiency year-round.",
    features: ["Quarterly inspections", "Priority service", "Cost savings"],
  },
  {
    icon: Zap,
    title: "Emergency Repairs",
    description:
      "24/7 emergency repair service with rapid response times. Our certified technicians diagnose and fix issues fast.",
    features: ["24/7 availability", "Rapid response", "Expert diagnosis"],
  },
  {
    icon: Wind,
    title: "Indoor Air Quality",
    description:
      "Advanced air filtration, ventilation, and purification systems to ensure healthy indoor environments for your employees.",
    features: ["Air testing", "Filtration systems", "Compliance support"],
  },
  {
    icon: TrendingUp,
    title: "Energy Optimization",
    description:
      "Comprehensive energy audits and system upgrades to reduce operating costs and improve environmental sustainability.",
    features: ["Energy audits", "ROI analysis", "Rebate assistance"],
  },
  {
    icon: Shield,
    title: "System Retrofits",
    description:
      "Upgrade existing systems with modern controls, sensors, and components to extend lifespan and improve performance.",
    features: ["Smart controls", "Efficiency boost", "Minimal downtime"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
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
            Comprehensive Commercial HVAC Services
          </h2>
          <p className="text-lg text-gray-600">
            From installation to maintenance and emergency repairs, we provide
            complete climate control solutions for commercial properties.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={staggerItem}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                    <CardHeader>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="size-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300"
                      >
                        <Icon className="size-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      <CardTitle className="mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 mb-4">
                        {service.description}
                      </CardDescription>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.3 }}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                              className="size-1.5 bg-blue-600 rounded-full"
                            />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </CardHeader>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button size="lg" asChild className="px-8">
            <Link to="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
