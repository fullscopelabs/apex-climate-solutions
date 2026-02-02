import { motion } from "motion/react";
import { Users } from "lucide-react";

export function ActiveClientsIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="size-2 bg-green-500 rounded-full"
      />
      <Users className="size-4 text-green-700" />
      <span className="text-sm font-medium text-green-900">
        Currently serving <span className="font-bold">523</span> active clients
      </span>
    </motion.div>
  );
}
