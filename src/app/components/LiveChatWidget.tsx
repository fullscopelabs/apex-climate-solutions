import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
        className="fixed bottom-6 left-6 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="size-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center relative cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="size-6" />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle className="size-6" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification badge */}
          {!isOpen && (
            <motion.div
              initial={false}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1 -right-1 size-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
            >
              <span className="text-xs font-bold">1</span>
            </motion.div>
          )}
        </motion.button>

        {/* Pulsing ring effect */}
        {!isOpen && (
          <motion.div
            initial={false}
            animate={{
              scale: [1, 1.4],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              repeatDelay: 0,
            }}
            className="absolute inset-0 bg-blue-600 rounded-full pointer-events-none"
          />
        )}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 left-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl z-40 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="size-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="size-5" />
                  </div>
                  <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-blue-700" />
                </div>
                <div>
                  <h4 className="font-semibold">Apex Climate Support</h4>
                  <p className="text-xs text-blue-100">
                    Typically replies in minutes
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 h-64 overflow-y-auto bg-gray-50">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg p-3 shadow-sm mb-3 max-w-[80%]"
              >
                <p className="text-sm text-gray-700">
                  👋 Hi! How can we help you today? We're here to answer your
                  commercial HVAC questions!
                </p>
                <p className="text-xs text-gray-400 mt-1">Just now</p>
              </motion.div>
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // Placeholder functionality
                  setMessage("");
                }}
                className="flex gap-2"
              >
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={!message}>
                  <Send className="size-4" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                Or call us at{" "}
                <a href="tel:+18885551234" className="text-blue-600 font-semibold">
                  (888) 555-1234
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}