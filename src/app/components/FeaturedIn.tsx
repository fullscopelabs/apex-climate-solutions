import { motion } from "motion/react";

const logos = [
  { name: "ASHRAE", width: 120 },
  { name: "ACCA", width: 100 },
  { name: "SMACNA", width: 130 },
  { name: "Building Owner", width: 140 },
  { name: "HVAC News", width: 110 },
];

export function FeaturedIn() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">
            As Featured In & Certified By
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              {/* Placeholder SVG logo */}
              <svg
                width={logo.width}
                height="48"
                viewBox="0 0 120 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="116"
                  height="44"
                  rx="4"
                  fill="white"
                  stroke="#E5E7EB"
                  strokeWidth="2"
                />
                <text
                  x="60"
                  y="28"
                  textAnchor="middle"
                  fill="#6B7280"
                  fontSize="14"
                  fontWeight="600"
                >
                  {logo.name}
                </text>
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}