import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { TrendingDown, Zap, Clock, ArrowRight, Building2 } from "lucide-react";
import { pageTransition, fadeInUp, staggerContainer, staggerItem } from "@/app/utils/animations";

const caseStudies = [
  {
    id: "techcorp-energy-savings",
    title: "TechCorp Industries: 53% Energy Cost Reduction",
    category: "Energy Optimization",
    client: "TechCorp Industries",
    location: "Manhattan, NY",
    industry: "Technology",
    size: "200,000 sq ft",
    image: "https://images.unsplash.com/photo-1694702702714-a48c5fabdaf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTkyMjQxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    summary: "Complete HVAC system overhaul for a 200,000 sq ft commercial office building resulting in $120K annual savings.",
    results: [
      { icon: TrendingDown, label: "53% Energy Reduction", value: "$120K/year" },
      { icon: Zap, label: "System Efficiency", value: "92%" },
      { icon: Clock, label: "ROI Period", value: "2.1 years" },
    ],
  },
  {
    id: "metro-medical-reliability",
    title: "Harbor Medical Center: Zero Downtime Achievement",
    category: "Preventive Maintenance",
    client: "Harbor Medical Center",
    location: "Stamford, CT",
    industry: "Healthcare",
    size: "150,000 sq ft",
    image: "https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwSFZBQyUyMHRlY2huaWNpYW4lMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2OTk4MjAwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    summary: "Critical healthcare facility achieves 8 years of perfect climate control reliability through our preventive maintenance program.",
    results: [
      { icon: Clock, label: "Zero Downtime", value: "8 years" },
      { icon: TrendingDown, label: "Cost Savings", value: "$85K/year" },
      { icon: Zap, label: "Patient Comfort", value: "100%" },
    ],
  },
  {
    id: "metro-office-emergency",
    title: "Metropolitan Offices: 90-Minute Emergency Response",
    category: "Emergency Service",
    client: "Metropolitan Office Buildings",
    location: "Jersey City, NJ",
    industry: "Commercial Real Estate",
    size: "300,000 sq ft",
    image: "https://images.unsplash.com/photo-1769695832202-0f10d9d21f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHklMjBjb29saW5nJTIwc3lzdGVtfGVufDF8fHx8MTc2OTk4MjAwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    summary: "Critical system failure during July heatwave resolved within 90 minutes, preventing tenant disruption and revenue loss.",
    results: [
      { icon: Clock, label: "Response Time", value: "90 min" },
      { icon: TrendingDown, label: "Downtime Avoided", value: "$250K" },
      { icon: Zap, label: "Tenants Affected", value: "0" },
    ],
  },
];

const industries = [
  "Commercial Real Estate",
  "Healthcare Facilities",
  "Technology Companies",
  "Manufacturing Plants",
  "Educational Institutions",
  "Retail & Hospitality",
];

export function CaseStudiesPage() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              Real Results
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Success Stories From Our Clients
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              See how we've helped commercial facilities across the tri-state
              area reduce costs, improve efficiency, and achieve reliable
              climate control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {caseStudies.map((study, index) => (
              <motion.div key={study.id} variants={staggerItem}>
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className={`aspect-[4/3] lg:aspect-auto overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                    >
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="size-full object-cover"
                      />
                    </motion.div>

                    {/* Content */}
                    <CardContent className="p-8 flex flex-col justify-center">
                      <Badge className="mb-4 w-fit bg-blue-100 text-blue-700 hover:bg-blue-100">
                        {study.category}
                      </Badge>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {study.title}
                      </h2>
                      <p className="text-gray-600 mb-6">{study.summary}</p>

                      {/* Client Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-500">Client</div>
                          <div className="font-semibold text-gray-900">
                            {study.client}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-500">Location</div>
                          <div className="font-semibold text-gray-900">
                            {study.location}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-500">Industry</div>
                          <div className="font-semibold text-gray-900">
                            {study.industry}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-500">Facility Size</div>
                          <div className="font-semibold text-gray-900">
                            {study.size}
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                        {study.results.map((result, idx) => {
                          const Icon = result.icon;
                          return (
                            <div key={idx} className="text-center">
                              <Icon className="size-6 sm:size-8 text-blue-600 mx-auto mb-2" />
                              <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 break-words">
                                {result.value}
                              </div>
                              <div className="text-xs text-gray-600 leading-tight">
                                {result.label}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <Button asChild className="w-full sm:w-auto">
                        <Link to={`/case-studies/${study.id}`}>
                          Read Full Story
                          <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expertise spans diverse commercial sectors, each with unique
              HVAC requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center"
              >
                <Building2 className="size-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Track Record
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Successful Projects" },
              { value: "$2.5M+", label: "Annual Client Savings" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "26", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can optimize your commercial HVAC systems
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
                <a href="tel:+18885551234">Call (888) 555-1234</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}