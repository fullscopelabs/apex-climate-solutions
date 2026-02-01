import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function FloatingCallButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-40 md:hidden"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Button
          size="lg"
          onClick={() => window.location.href = "tel:+18885551234"}
          className="size-16 rounded-full shadow-2xl relative"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Phone className="size-6" />
          </motion.div>
        </Button>
      </motion.div>
      
      {/* Pulsing ring effect */}
      <motion.div
        animate={{
          scale: [1, 1.5],
          opacity: [0.6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-blue-600 rounded-full"
      />
      
      {/* Online indicator */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-1 -right-1 size-5 bg-green-500 rounded-full border-2 border-white"
      />
    </motion.div>
  );
}
