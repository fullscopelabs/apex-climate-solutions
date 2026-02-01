import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CaseStudy } from "@/app/components/CaseStudy";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { pageTransition } from "@/app/utils/animations";

export function CaseStudyDetailPage() {
  return (
    <motion.div {...pageTransition} className="pt-32 pb-20">
      {/* Back Button */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild>
            <Link to="/case-studies">
              <ArrowLeft className="mr-2 size-4" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </section>

      <CaseStudy />

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
              Ready for Similar Results?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can optimize your commercial HVAC systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Free Consultation</Link>
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
