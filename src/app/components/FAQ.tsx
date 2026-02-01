import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can you respond to emergency HVAC issues?",
    answer:
      "We provide 24/7 emergency service with an average response time of under 2 hours for critical situations. Our dispatch team is always available, and we maintain a fleet of fully-equipped service vehicles throughout the tri-state area to ensure rapid response.",
  },
  {
    question: "Do you offer preventive maintenance contracts?",
    answer:
      "Yes, we offer comprehensive preventive maintenance programs tailored to your facility's needs. These contracts include quarterly inspections, priority emergency service, discounted repairs, and detailed reporting. Regular maintenance typically reduces emergency repairs by 85% and extends system lifespan by 40%.",
  },
  {
    question: "Are your technicians certified and insured?",
    answer:
      "All our technicians are EPA Section 608 certified and NATE certified. We carry $5 million in liability insurance and are fully licensed in New York, New Jersey, and Connecticut. Every technician undergoes continuous training on the latest HVAC technologies and safety protocols.",
  },
  {
    question: "What brands of commercial HVAC equipment do you service?",
    answer:
      "We service all major commercial HVAC brands including Carrier, Trane, Lennox, York, Daikin, Mitsubishi, and Goodman. Our technicians receive factory training and have access to OEM parts for most major manufacturers.",
  },
  {
    question: "How long does a typical commercial HVAC installation take?",
    answer:
      "Installation timelines vary based on system size and complexity. A typical rooftop unit replacement takes 3-5 days. Complete system installations for office buildings can range from 2-8 weeks depending on the size. We provide detailed project timelines during the quote phase and work to minimize disruption to your business operations.",
  },
  {
    question: "Do you help with energy rebates and incentives?",
    answer:
      "Yes, we actively help clients identify and apply for local, state, and federal energy efficiency rebates and incentives. We're familiar with programs from Con Edison, PSEG, Eversource, and other utilities. Our team can handle the paperwork and ensure you receive all available incentives.",
  },
  {
    question: "What is the typical lifespan of a commercial HVAC system?",
    answer:
      "With proper maintenance, commercial HVAC systems typically last 15-20 years. However, advances in energy efficiency mean that upgrading earlier can result in significant operating cost savings. We provide lifecycle analysis to help you make informed decisions about system replacement.",
  },
  {
    question: "Can you work outside of normal business hours?",
    answer:
      "Absolutely. We understand that many commercial facilities operate 24/7 or prefer minimal disruption during business hours. We regularly schedule installations and major maintenance during evenings, weekends, or overnight shifts at no additional charge for standard projects.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our commercial HVAC services
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-50 rounded-lg px-6 border-none"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-blue-50 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Our team is here to help. Contact us for personalized answers to
            your specific HVAC needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18885551234"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Call (888) 555-1234
            </a>
            <a
              href="mailto:info@apexclimate.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
