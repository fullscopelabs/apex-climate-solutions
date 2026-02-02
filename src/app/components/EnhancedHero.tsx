import { Phone, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLSpanElement>(null);
  
  // Split text by <br /> tags to handle line breaks properly
  const lines = text.split('<br />');
  
  useEffect(() => {
    // Calculate total characters including line breaks
    const totalChars = lines.reduce((acc, line, i) => 
      acc + line.length + (i < lines.length - 1 ? 1 : 0), 0
    );
    
    if (currentIndex < totalChars) {
      const timeout = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, lines]);
  
  useEffect(() => {
    let charCount = 0;
    let result = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineEndIndex = charCount + line.length;
      
      if (currentIndex <= charCount) {
        break;
      } else if (currentIndex <= lineEndIndex) {
        result += line.substring(0, currentIndex - charCount);
        break;
      } else {
        result += line;
        if (i < lines.length - 1) {
          result += '<br />';
          charCount += 1; // Count the line break
        }
      }
      charCount += line.length;
    }
    
    setDisplayText(result);
  }, [currentIndex, lines]);

  return (
    <span className="relative inline-block w-full">
      <span ref={textRef} dangerouslySetInnerHTML={{ __html: displayText }} />
      <span className="inline-block w-0 overflow-visible animate-pulse" style={{ opacity: 0.7 }}>|</span>
    </span>
  );
};

export function EnhancedHero() {
  const { scrollY } = useScroll();
  
  // Create parallax effect based on scroll position
  const y = useTransform(scrollY, [0, 800], ["0%", "50%"]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  const { ref: statsRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 pt-24 sm:pt-36 md:pt-32 pb-12 sm:pb-20 min-h-[90vh] sm:min-h-screen flex items-center">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-100/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-200/20 rounded-full blur-3xl"
        />
      </div>

      {/* Parallax background video */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-blue-900/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-industrial-factory-with-workers-4331-large.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                26+ Years of Excellence
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-8 h-[120px] sm:h-[140px] lg:h-[220px] overflow-hidden"
            >
              <span className="block max-w-full lg:max-w-[600px] leading-[1.1]">
                <TypewriterText text="Commercial HVAC<br />Solutions Built for<br />Reliability" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 hidden sm:block leading-relaxed"
            >
              Apex Climate Solutions delivers enterprise-grade heating,
              cooling, and ventilation systems for commercial facilities
              throughout the tri-state area. Licensed, certified, and trusted
              by over 500+ businesses.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base text-blue-100 mb-5 sm:mb-8 sm:hidden leading-relaxed"
            >
              Enterprise-grade HVAC systems for commercial facilities. Licensed, certified, and trusted by 500+ businesses.
            </motion.p>

            {/* CTAs with micro-interactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-5 sm:mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" asChild className="text-lg px-8 shadow-lg hover:shadow-xl transition-shadow">
                  <Link to="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <a href="tel:+18885551234">
                    <Phone className="mr-2 size-5" />
                    (888) 555-1234
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-2 sm:gap-4"
            >
              {[
                "24/7 Emergency Service",
                "EPA Certified",
                "Licensed & Insured",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-2 py-2.5 sm:px-4 sm:py-3 border border-white/20"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="size-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50 flex-shrink-0"
                  />
                  <span className="text-white font-medium text-[11px] sm:text-sm leading-tight">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Stats - Inline below trust indicators */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="grid grid-cols-3 gap-2 sm:gap-3 mt-5 lg:hidden"
            >
              {[
                { value: 500, suffix: "+", label: "Clients" },
                { value: 26, suffix: "", label: "Years" },
                { value: 98, suffix: "%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  className="backdrop-blur-xl bg-white/95 border border-white/50 rounded-2xl shadow-xl p-3 sm:p-3 text-center"
                  style={{
                    backdropFilter: "blur(16px) saturate(180%)",
                    WebkitBackdropFilter: "blur(16px) saturate(180%)",
                  }}
                >
                  <motion.div className="text-2xl sm:text-xl font-bold text-blue-600">
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      delay={0}
                    />
                    {stat.suffix}
                  </motion.div>
                  <div className="text-[10px] sm:text-[10px] text-gray-700 font-medium mt-1 sm:mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image with glassmorphism stat cards - Desktop Only */}
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwSFZBQyUyMHRlY2huaWNpYW4lMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2OTk4MjAwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Commercial HVAC technician working on industrial system"
                className="size-full object-cover"
                loading="eager"
              />
            </motion.div>

            {/* Glassmorphism floating stat cards with animated counters */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-4"
            >
              {[
                { value: 500, suffix: "+", label: "Active Clients" },
                { value: 26, suffix: "", label: "Years Experience" },
                { value: 98, suffix: "%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="backdrop-blur-xl bg-white/90 border border-white/40 rounded-lg shadow-2xl p-4 text-center cursor-default"
                  style={{
                    backdropFilter: "blur(16px) saturate(180%)",
                    WebkitBackdropFilter: "blur(16px) saturate(180%)",
                  }}
                >
                  <motion.div className="text-2xl font-bold text-blue-600">
                    {inView ? (
                      <>
                        <CountUp
                          end={stat.value}
                          duration={2.5}
                          delay={0.5}
                        />
                        {stat.suffix}
                      </>
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </motion.div>
                  <div className="text-xs text-gray-700 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile to prevent overlap */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm text-white/70 font-medium">Scroll to explore</span>
          <ChevronDown className="size-6 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}