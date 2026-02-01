import { MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const areas = [
  {
    state: "New York",
    cities: [
      "Manhattan",
      "Brooklyn",
      "Queens",
      "Bronx",
      "Staten Island",
      "Westchester",
      "Long Island",
      "White Plains",
    ],
  },
  {
    state: "New Jersey",
    cities: [
      "Newark",
      "Jersey City",
      "Hoboken",
      "Paterson",
      "Elizabeth",
      "Edison",
      "Trenton",
      "Bergen County",
    ],
  },
  {
    state: "Connecticut",
    cities: [
      "Stamford",
      "Bridgeport",
      "New Haven",
      "Hartford",
      "Waterbury",
      "Norwalk",
      "Danbury",
      "Fairfield County",
    ],
  },
];

export function ServiceAreas() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="service-areas" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="size-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serving the Tri-State Area
          </h2>
          <p className="text-lg text-gray-600">
            We provide professional commercial HVAC services throughout New
            York, New Jersey, and Connecticut. Fast response times and local
            expertise you can trust.
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="size-5 text-blue-600" />
                {area.state}
              </h3>
              <ul className="space-y-2">
                {area.cities.map((city, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 className="size-4 text-green-500 flex-shrink-0" />
                    <span>{city}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don't See Your Location?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We regularly expand our service coverage. Contact us to check if we
            serve your area or to discuss service options for your commercial
            facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Check Service Availability
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = "tel:+18885551234"}
            >
              Call (888) 555-1234
            </Button>
          </div>
        </div>

        {/* Response Time Guarantee */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {"<"}2 Hrs
            </div>
            <div className="text-gray-600">Emergency Response Time</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Service Availability</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Service Area Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
}
