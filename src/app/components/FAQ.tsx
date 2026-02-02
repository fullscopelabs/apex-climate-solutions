import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const faqs = [
  {
    question: "How often should commercial HVAC systems be serviced?",
    answer:
      "Commercial HVAC systems should be serviced at least quarterly (every 3 months) to ensure optimal performance and prevent costly breakdowns. High-use facilities or critical environments like hospitals may benefit from monthly maintenance. Our preventive maintenance programs are customized to your facility's specific needs and usage patterns.",
  },
  {
    question: "What's the average lifespan of a commercial HVAC system?",
    answer:
      "A well-maintained commercial HVAC system typically lasts 15-20 years. However, with our comprehensive preventive maintenance program and timely retrofits, many of our clients extend their system lifespan to 25+ years. Factors affecting lifespan include usage intensity, maintenance frequency, environmental conditions, and equipment quality.",
  },
  {
    question: "How quickly can you respond to emergency HVAC failures?",
    answer:
      "We provide 24/7/365 emergency service with an average response time of under 2 hours. Our technicians are strategically located throughout the tri-state area, and we maintain fully-stocked service vehicles to handle most repairs on the first visit. We prioritize emergencies based on facility type and impact, with critical facilities like hospitals receiving immediate attention.",
  },
  {
    question: "Can you help reduce our energy costs?",
    answer:
      "Absolutely! Our energy optimization services typically reduce commercial HVAC energy costs by 20-50%. We conduct comprehensive energy audits, identify inefficiencies, recommend upgrades (like variable frequency drives and smart controls), and help you access utility rebates and incentives. Most energy optimization projects pay for themselves within 2-4 years through energy savings.",
  },
  {
    question: "Do you offer financing options for large HVAC projects?",
    answer:
      "Yes, we offer flexible financing options for commercial HVAC installations and major upgrades. We work with several commercial lending partners to provide competitive rates and terms that fit your budget. We can also help you access energy efficiency rebates and incentives that can significantly offset project costs. Contact us to discuss financing options for your specific project.",
  },
  {
    question: "What certifications do your technicians have?",
    answer:
      "All our technicians are EPA Section 608 certified (required for handling refrigerants) and NATE certified (North American Technician Excellence). Many also hold specialized certifications in building automation systems, energy management, and specific equipment manufacturers. We invest heavily in ongoing training to ensure our team stays current with the latest HVAC technologies and best practices.",
  },
  {
    question: "Can you work around our business hours to minimize disruption?",
    answer:
      "Yes! We understand that minimizing business disruption is critical for our commercial clients. We offer flexible scheduling including nights, weekends, and holidays. For major installations or system replacements, we'll work with you to create a phased implementation plan that keeps your facility operational. Many installations are completed during off-hours or over weekends to ensure zero impact on your business operations.",
  },
  {
    question: "What areas do you service in the tri-state region?",
    answer:
      "We provide commercial HVAC services throughout New York, New Jersey, and Connecticut, with a particular focus on the greater NYC metro area. Our service territory includes Manhattan, Brooklyn, Queens, the Bronx, Staten Island, Jersey City, Newark, Stamford, and surrounding areas. If you're outside our typical service area, give us a call – we often make exceptions for large commercial projects.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our commercial HVAC services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18885551234"
              className="text-blue-600 font-semibold hover:underline"
            >
              Call us at (888) 555-1234
            </a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <a
              href="mailto:info@apexclimate.com"
              className="text-blue-600 font-semibold hover:underline"
            >
              Email info@apexclimate.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
