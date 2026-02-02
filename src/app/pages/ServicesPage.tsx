import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Shield,
  Zap,
  Wind,
  Settings,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { QuoteCalculator } from "@/app/components/QuoteCalculator";
import { FAQ } from "@/app/components/FAQ";
import { pageTransition, fadeInUp, staggerContainer, staggerItem } from "@/app/utils/animations";

const services = [
  {
    icon: Settings,
    title: "HVAC Installation",
    slug: "installation",
    description:
      "Complete commercial HVAC system design and installation with energy-efficient solutions tailored to your facility's needs.",
    fullDescription:
      "Our installation services cover everything from initial consultation and system design to final commissioning. We work with you to understand your facility's unique requirements, perform detailed load calculations, and recommend the most efficient systems that balance performance with budget.",
    features: [
      "Custom system design and engineering",
      "Comprehensive energy analysis",
      "Precise load calculations and sizing",
      "Factory-certified installation",
      "Complete system commissioning",
      "Staff training on new systems",
    ],
    benefits: [
      "Optimized energy efficiency",
      "Reduced operating costs",
      "Improved indoor comfort",
      "Extended equipment lifespan",
    ],
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    slug: "maintenance",
    description:
      "Scheduled maintenance programs to maximize system lifespan, prevent breakdowns, and maintain peak efficiency year-round.",
    fullDescription:
      "Regular preventive maintenance is the key to reliable HVAC performance. Our comprehensive maintenance programs include quarterly inspections, cleaning, adjustments, and detailed reporting to catch small issues before they become expensive problems.",
    features: [
      "Quarterly system inspections",
      "Filter replacement and cleaning",
      "Refrigerant level checks",
      "Electrical connection testing",
      "Thermostat calibration",
      "Detailed performance reporting",
    ],
    benefits: [
      "85% reduction in emergency repairs",
      "40% extended equipment lifespan",
      "15-30% energy savings",
      "Priority emergency service",
    ],
  },
  {
    icon: Zap,
    title: "Emergency Repairs",
    slug: "emergency-repairs",
    description:
      "24/7 emergency repair service with rapid response times. Our certified technicians diagnose and fix issues fast.",
    fullDescription:
      "When your HVAC system fails, every minute counts. Our 24/7 emergency repair service ensures you're never left without climate control. With fully-stocked service vehicles throughout the tri-state area, we can respond to most emergencies within 2 hours.",
    features: [
      "24/7/365 availability",
      "Average 2-hour response time",
      "Fully-stocked service vehicles",
      "Expert diagnostic technology",
      "Most repairs completed same-day",
      "Transparent pricing with no surprises",
    ],
    benefits: [
      "Minimal business disruption",
      "Fast problem resolution",
      "Expert troubleshooting",
      "Always available support",
    ],
  },
  {
    icon: Wind,
    title: "Indoor Air Quality",
    slug: "air-quality",
    description:
      "Advanced air filtration, ventilation, and purification systems to ensure healthy indoor environments for your employees.",
    fullDescription:
      "Poor indoor air quality can affect employee health, productivity, and satisfaction. Our IAQ solutions include comprehensive air testing, advanced filtration systems, UV purification, and ventilation improvements to create healthier work environments.",
    features: [
      "Comprehensive air quality testing",
      "HEPA filtration systems",
      "UV air purification",
      "Humidity control solutions",
      "Ventilation optimization",
      "Ongoing monitoring and reporting",
    ],
    benefits: [
      "Healthier work environment",
      "Reduced sick days",
      "Improved employee productivity",
      "Regulatory compliance support",
    ],
  },
  {
    icon: TrendingUp,
    title: "Energy Optimization",
    slug: "energy-optimization",
    description:
      "Comprehensive energy audits and system upgrades to reduce operating costs and improve environmental sustainability.",
    fullDescription:
      "Energy costs are one of the largest operating expenses for commercial facilities. Our energy optimization services identify inefficiencies, recommend improvements, and help you access available rebates and incentives for maximum ROI.",
    features: [
      "Detailed energy audits",
      "ROI analysis and projections",
      "Smart building automation",
      "Variable frequency drive installation",
      "Utility rebate assistance",
      "Ongoing performance monitoring",
    ],
    benefits: [
      "20-50% energy cost reduction",
      "Fast payback periods",
      "Lower carbon footprint",
      "Increased property value",
    ],
  },
  {
    icon: Shield,
    title: "System Retrofits",
    slug: "retrofits",
    description:
      "Upgrade existing systems with modern controls, sensors, and components to extend lifespan and improve performance.",
    fullDescription:
      "System retrofits allow you to modernize your existing HVAC infrastructure without the cost of complete replacement. We upgrade controls, add smart sensors, replace inefficient components, and integrate new technologies to breathe new life into aging systems.",
    features: [
      "Smart thermostat and control upgrades",
      "Energy-efficient component replacement",
      "Building automation integration",
      "Wireless monitoring systems",
      "Variable speed motor retrofits",
      "Minimal downtime during installation",
    ],
    benefits: [
      "Extend system lifespan 5-10 years",
      "Significant efficiency improvements",
      "Lower cost than replacement",
      "Modern control capabilities",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Free on-site assessment and needs analysis",
  },
  {
    number: "02",
    title: "Proposal",
    description: "Detailed quote with multiple options and ROI analysis",
  },
  {
    number: "03",
    title: "Installation",
    description: "Professional installation with minimal disruption",
  },
  {
    number: "04",
    title: "Support",
    description: "Ongoing maintenance and 24/7 support",
  },
];

export function ServicesPage() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              Complete HVAC Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Commercial HVAC Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              From installation to maintenance and emergency repairs, we provide
              comprehensive climate control solutions for commercial facilities
              throughout the tri-state area.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="tel:+18885551234">Call (888) 555-1234</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                    <CardHeader>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="size-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors"
                      >
                        <Icon className="size-8 text-blue-600 group-hover:text-white transition-colors" />
                      </motion.div>
                      <CardTitle className="mb-3">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 mb-4">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <CheckCircle className="size-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" asChild className="w-full">
                        <Link to="/contact">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Service Process
            </h2>
            <p className="text-lg text-gray-600">
              A streamlined approach to delivering exceptional HVAC solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 text-center h-full shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-blue-600/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Businesses Choose Apex Climate Solutions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "Rapid Response",
                    description:
                      "24/7 emergency service with average 2-hour response times",
                  },
                  {
                    icon: Shield,
                    title: "Certified Experts",
                    description:
                      "EPA and NATE certified technicians with ongoing training",
                  },
                  {
                    icon: DollarSign,
                    title: "Cost Savings",
                    description:
                      "Energy optimization that reduces operating costs by 20-50%",
                  },
                  {
                    icon: CheckCircle,
                    title: "Proven Track Record",
                    description:
                      "26+ years serving 500+ commercial clients with 98% satisfaction",
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
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769695832202-0f10d9d21f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHklMjBjb29saW5nJTIwc3lzdGVtfGVufDF8fHx8MTc2OTk4MjAwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Industrial HVAC cooling system"
                className="size-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Calculator */}
      <QuoteCalculator />

      {/* FAQ Section */}
      <FAQ />

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
              Ready to Optimize Your HVAC System?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free consultation and detailed quote from our experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="tel:+18885551234">Call (888) 555-1234</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}