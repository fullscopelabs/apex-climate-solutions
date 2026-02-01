import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Users, Award, TrendingUp, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "45+",
    label: "Certified Technicians",
  },
  {
    icon: Award,
    value: "500+",
    label: "Successful Projects",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Customer Satisfaction",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Emergency Support",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              26 Years of Commercial HVAC Excellence
            </h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Founded in 1998, Apex Climate Solutions has grown from a small
                local contractor to the tri-state area's most trusted commercial
                HVAC service provider. Our commitment to technical excellence,
                customer service, and energy efficiency has earned us
                partnerships with over 500 commercial clients.
              </p>
              <p>
                We specialize in large-scale commercial installations,
                preventive maintenance programs, and emergency repair services
                for office buildings, medical facilities, manufacturing plants,
                and retail spaces throughout New York, New Jersey, and
                Connecticut.
              </p>
              <p>
                Our team of 45+ EPA-certified and NATE-certified technicians
                brings decades of combined experience to every project. We stay
                current with the latest HVAC technologies and energy-efficient
                solutions to deliver maximum value to our clients.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="size-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="space-y-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739285452618-0b7b3d04f953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHRlYW18ZW58MXx8fHwxNzY5OTgyMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional business team collaboration"
                className="size-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730584475795-f0be0efd606e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljaWFuJTIwdGFibGV0JTIwaW5kdXN0cmlhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njk5ODIwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Technician using tablet with industrial equipment"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            To provide reliable, energy-efficient commercial HVAC solutions that
            keep businesses running smoothly while minimizing environmental
            impact and operating costs. We're not just maintaining systems—we're
            building long-term partnerships based on trust, expertise, and
            exceptional service.
          </p>
        </div>
      </div>
    </section>
  );
}
