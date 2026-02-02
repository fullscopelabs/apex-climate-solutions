import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function StickyQuoteButton() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 400], [0, 1]);
  const scale = useTransform(scrollY, [300, 400], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="fixed bottom-6 right-6 z-40 hidden md:block"
    >
      <motion.div
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button
          size="lg"
          asChild
          className="shadow-2xl bg-amber-500 hover:bg-amber-600 text-white px-6 py-6 rounded-full group cursor-pointer"
        >
          <Link to="/contact">
            <motion.div
              initial={false}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Calculator className="size-5 mr-2" />
            </motion.div>
            <span className="font-semibold">Get Quote</span>
          </Link>
        </Button>
      </motion.div>

      {/* Pulsing ring effect */}
      <motion.div
        initial={false}
        animate={{
          scale: [1, 1.3],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          repeatDelay: 0,
        }}
        className="absolute inset-0 bg-amber-500 rounded-full pointer-events-none"
      />
    </motion.div>
  );
}