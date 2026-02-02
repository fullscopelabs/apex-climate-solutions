import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { TrendingDown, Zap, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export function CaseStudy() {
  return (
    <section className="pt-12 pb-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">
            Success Story
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Helped TechCorp Save $120K Annually
          </h2>
          <p className="text-lg text-gray-600">
            A complete HVAC system overhaul for a 200,000 sq ft commercial
            office building in Manhattan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image */}
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1694702702714-a48c5fabdaf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTkyMjQxNXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern commercial office building exterior"
              className="size-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Challenge
            </h3>
            <p className="text-gray-600 mb-6">
              TechCorp Industries was facing increasing energy costs and
              frequent system failures with their 15-year-old HVAC system. Their
              200,000 sq ft Manhattan headquarters was experiencing:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Monthly energy bills exceeding $45,000",
                "Frequent breakdowns causing productivity loss",
                "Inconsistent temperature control across floors",
                "Unable to meet new energy efficiency standards",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="size-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="size-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Our Solution
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Phase 1: Assessment & Planning
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Complete energy audit of existing systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Load calculations for optimal sizing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>ROI analysis and financing options</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Phase 2: Implementation
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Installed 4 high-efficiency rooftop units</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Smart building automation system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Zone-based temperature control</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Measurable Results
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TrendingDown className="size-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  53%
                </div>
                <div className="text-gray-600">Energy Cost Reduction</div>
                <div className="text-sm text-green-600 font-semibold mt-2">
                  $120K Annual Savings
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Zap className="size-12 text-blue-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  92%
                </div>
                <div className="text-gray-600">System Efficiency</div>
                <div className="text-sm text-blue-600 font-semibold mt-2">
                  Energy Star Rated
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="size-12 text-purple-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  Zero
                </div>
                <div className="text-gray-600">Unplanned Downtime</div>
                <div className="text-sm text-purple-600 font-semibold mt-2">
                  First 12 Months
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <CheckCircle className="size-12 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  2.1
                </div>
                <div className="text-gray-600">Year ROI Period</div>
                <div className="text-sm text-orange-600 font-semibold mt-2">
                  Under Budget
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Client Quote */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-600">
          <p className="text-lg text-gray-700 italic mb-4">
            "Apex Climate Solutions transformed our facility operations. The new
            system not only cut our energy costs in half but also improved
            comfort for our 800 employees. Their project management was
            flawless—completed on time with minimal disruption to our business."
          </p>
          <div className="flex items-center gap-4">
            <div className="size-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
              MC
            </div>
            <div>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-600">
                Facilities Director, TechCorp Industries
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}