import { Shield, Award, CheckCircle, Star } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";

const certifications = [
  {
    icon: Shield,
    title: "EPA Section 608 Certified",
    description: "Universal certification for handling all types of refrigerants",
  },
  {
    icon: Award,
    title: "NATE Certified Technicians",
    description: "North American Technician Excellence certification",
  },
  {
    icon: CheckCircle,
    title: "Licensed & Insured",
    description: "Fully licensed in NY, NJ, and CT with $5M liability coverage",
  },
  {
    icon: Star,
    title: "Energy Star Partner",
    description: "Committed to energy-efficient HVAC solutions",
  },
];

const memberships = [
  "Air Conditioning Contractors of America (ACCA)",
  "Sheet Metal and Air Conditioning Contractors' National Association (SMACNA)",
  "Building Owners and Managers Association (BOMA)",
  "American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE)",
];

export function Certifications() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Trust & Excellence
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Licensed, Certified & Trusted
          </h2>
          <p className="text-lg text-gray-600">
            Our certifications and industry memberships demonstrate our
            commitment to excellence and ongoing professional development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="size-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="size-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            );
          })}
        </div>

        {/* Industry Memberships */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Professional Memberships & Affiliations
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {memberships.map((membership, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="size-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{membership}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">$5M</div>
            <div className="text-gray-600">Liability Coverage</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Background Checked</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">26+</div>
            <div className="text-gray-600">Years Licensed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
