import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Download, CheckCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

interface ExitIntentPopupProps {
  onVisibilityChange?: (isVisible: boolean) => void;
}

export function ExitIntentPopup({ onVisibilityChange }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    onVisibilityChange?.(isVisible);
  }, [isVisible, onVisibilityChange]);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !isSubmitted) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown, isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setIsVisible(false)}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-lg"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sm:p-6 relative">
                <button
                  onClick={() => setIsVisible(false)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 hover:bg-white/20 p-1.5 sm:p-2 rounded-full transition-colors cursor-pointer"
                  aria-label="Close popup"
                >
                  <X className="size-4 sm:size-5" />
                </button>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <Download className="size-10 sm:size-12 mb-2 sm:mb-3" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 pr-8">
                  Wait! Don't Leave Empty-Handed
                </h3>
                <p className="text-sm sm:text-base text-blue-100">
                  Download our FREE Commercial HVAC Maintenance Checklist
                </p>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-6">
                {!isSubmitted ? (
                  <>
                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                        This comprehensive guide includes:
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                        {[
                          "Monthly maintenance checklist",
                          "Seasonal preparation tips",
                          "Energy efficiency optimization",
                          "Common problem prevention",
                          "Equipment lifespan extension strategies",
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="size-3.5 sm:size-4 text-green-500 flex-shrink-0" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                      <div>
                        <Label htmlFor="exit-email" className="text-sm">Email Address</Label>
                        <Input
                          id="exit-email"
                          type="email"
                          placeholder="your.email@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="mt-1 text-sm sm:text-base"
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full text-sm sm:text-base">
                        <Download className="mr-2 size-4 sm:size-5" />
                        Download Free Checklist
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        We respect your privacy. Unsubscribe anytime.
                      </p>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 sm:py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="size-12 sm:size-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                    </motion.div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      Check Your Email!
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600">
                      Your free checklist is on its way to {email}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}