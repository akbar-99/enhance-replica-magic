import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Floating particle component
const FloatingParticle = ({
  delay,
  duration,
  size,
  left,
  top,
}: {
  delay: number;
  duration: number;
  size: number;
  left: string;
  top: string;
}) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{
      width: size,
      height: size,
      left,
      top,
    }}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);
export default function CTASection() {
  const particles = [
    {
      delay: 0,
      duration: 4,
      size: 6,
      left: "10%",
      top: "20%",
    },
    {
      delay: 0.5,
      duration: 5,
      size: 8,
      left: "20%",
      top: "70%",
    },
    {
      delay: 1,
      duration: 4.5,
      size: 4,
      left: "80%",
      top: "30%",
    },
    {
      delay: 1.5,
      duration: 5.5,
      size: 10,
      left: "85%",
      top: "60%",
    },
    {
      delay: 2,
      duration: 4,
      size: 5,
      left: "15%",
      top: "40%",
    },
    {
      delay: 0.8,
      duration: 6,
      size: 7,
      left: "70%",
      top: "80%",
    },
    {
      delay: 1.2,
      duration: 5,
      size: 6,
      left: "50%",
      top: "15%",
    },
    {
      delay: 2.5,
      duration: 4.5,
      size: 8,
      left: "30%",
      top: "85%",
    },
    {
      delay: 0.3,
      duration: 5.5,
      size: 5,
      left: "90%",
      top: "45%",
    },
    {
      delay: 1.8,
      duration: 4,
      size: 4,
      left: "5%",
      top: "55%",
    },
  ];
  return (
    <section className="relative overflow-hidden py-[35px] bg-white">
      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, index) => (
          <FloatingParticle key={index} {...particle} />
        ))}
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-glow-cyan/10 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Card with gradient border glow effect */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="relative group"
        >
          {/* Gradient glow behind card */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 via-glow-cyan/60 to-primary/50 rounded-3xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Card content */}
          <div className="relative bg-card backdrop-blur-sm rounded-3xl border px-8 text-center overflow-hidden md:px-[63px] py-[35px] border-amber-400">
            {/* Inner card particles */}
            <div className="absolute inset-0 pointer-events-none opacity-50">
              <motion.div
                className="absolute w-2 h-2 bg-glow-cyan/40 rounded-full"
                style={{
                  left: "15%",
                  top: "25%",
                }}
                animate={{
                  y: [-15, 15, -15],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-3 h-3 bg-primary/30 rounded-full"
                style={{
                  right: "20%",
                  top: "35%",
                }}
                animate={{
                  y: [10, -10, 10],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-glow-cyan/30 rounded-full"
                style={{
                  right: "15%",
                  bottom: "30%",
                }}
                animate={{
                  x: [-10, 10, -10],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6"
            >
              <span className="text-white">Ready to Transform Your </span>
              <span className="text-glow-cyan">IT Infrastructure</span>
              <span className="text-white">?</span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="text-lg text-muted-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Book a free consultation with our experts and discover how we can help your business grow with
              cutting-edge technology solutions.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] group/btn"
              >
                Talk to an Expert
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
