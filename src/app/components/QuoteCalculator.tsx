import { motion } from "motion/react";
import { useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card";
import { Label } from "@/app/components/ui/label";
import { Slider } from "@/app/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Button } from "@/app/components/ui/button";
import { Link } from "react-router-dom";

const serviceTypes = [
  { value: "installation", label: "New Installation", baseRate: 150 },
  { value: "maintenance", label: "Preventive Maintenance", baseRate: 80 },
  { value: "repair", label: "Repair Service", baseRate: 120 },
  { value: "retrofit", label: "System Retrofit", baseRate: 100 },
  { value: "optimization", label: "Energy Optimization", baseRate: 90 },
];

export function QuoteCalculator() {
  const [facilitySize, setFacilitySize] = useState([25000]);
  const [numUnits, setNumUnits] = useState([5]);
  const [serviceType, setServiceType] = useState("installation");

  const calculateEstimate = () => {
    const service = serviceTypes.find((s) => s.value === serviceType);
    if (!service) return { min: 0, max: 0 };

    const sizeMultiplier = facilitySize[0] / 10000;
    const unitMultiplier = numUnits[0];
    const baseRate = service.baseRate;

    const estimate = baseRate * sizeMultiplier * unitMultiplier;
    const min = Math.round(estimate * 0.8);
    const max = Math.round(estimate * 1.2);

    return { min, max };
  };

  const { min, max } = calculateEstimate();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Calculator className="size-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Instant Quote Calculator
          </h2>
          <p className="text-lg text-gray-600">
            Get a ballpark estimate for your commercial HVAC project
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="shadow-xl">
            <CardContent className="pt-6">
              <div className="space-y-8">
                {/* Facility Size */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Facility Size: {facilitySize[0].toLocaleString()} sq ft
                  </Label>
                  <Slider
                    value={facilitySize}
                    onValueChange={setFacilitySize}
                    min={5000}
                    max={200000}
                    step={5000}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>5,000 sq ft</span>
                    <span>200,000 sq ft</span>
                  </div>
                </div>

                {/* Number of Units */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Number of HVAC Units: {numUnits[0]}
                  </Label>
                  <Slider
                    value={numUnits}
                    onValueChange={setNumUnits}
                    min={1}
                    max={50}
                    step={1}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>1 unit</span>
                    <span>50 units</span>
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <Label htmlFor="service-type" className="text-base font-semibold mb-3 block">
                    Service Type
                  </Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger id="service-type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Estimated Price */}
                <motion.div
                  key={`${min}-${max}`}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="size-5" />
                    <p className="text-sm font-medium">Estimated Project Cost</p>
                  </div>
                  <motion.div
                    key={min}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-5xl font-bold mb-2"
                  >
                    ${min.toLocaleString()} - ${max.toLocaleString()}
                  </motion.div>
                  <p className="text-blue-100 text-sm">
                    This is a ballpark estimate. Actual costs may vary.
                  </p>
                </motion.div>

                {/* CTA */}
                <div className="text-center space-y-3">
                  <Button size="lg" asChild className="w-full md:w-auto">
                    <Link to="/contact">
                      Get Detailed Quote
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-600">
                    Or call us at{" "}
                    <a
                      href="tel:+18885551234"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      (888) 555-1234
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xs text-gray-500 text-center mt-6"
        >
          * Estimates are for planning purposes only. Final pricing depends on
          specific equipment, labor requirements, permits, and site conditions.
          Contact us for a detailed quote.
        </motion.p>
      </div>
    </section>
  );
}
