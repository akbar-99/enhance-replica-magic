import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ctaBackground from "@/assets/cta-background.jpg";
// Floating particle component
const FloatingParticle = ({
  delay,
  duration,
  size,
  left,
  top
}: {
  delay: number;
  duration: number;
  size: number;
  left: string;
  top: string;
}) => <motion.div className="absolute rounded-full bg-glow-cyan/20" style={{
  width: size,
  height: size,
  left,
  top
}} animate={{
  y: [-20, 20, -20],
  x: [-10, 10, -10],
  opacity: [0.3, 0.6, 0.3],
  scale: [1, 1.2, 1]
}} transition={{
  duration,
  delay,
  repeat: Infinity,
  ease: "easeInOut"
}} />;
export default function CTASection() {
  const {
    t
  } = useTranslation();
  const particles = [{
    delay: 0,
    duration: 4,
    size: 6,
    left: "10%",
    top: "20%"
  }, {
    delay: 0.5,
    duration: 5,
    size: 8,
    left: "20%",
    top: "70%"
  }, {
    delay: 1,
    duration: 4.5,
    size: 4,
    left: "80%",
    top: "30%"
  }, {
    delay: 1.5,
    duration: 5.5,
    size: 10,
    left: "85%",
    top: "60%"
  }, {
    delay: 2,
    duration: 4,
    size: 5,
    left: "15%",
    top: "40%"
  }, {
    delay: 0.8,
    duration: 6,
    size: 7,
    left: "70%",
    top: "80%"
  }, {
    delay: 1.2,
    duration: 5,
    size: 6,
    left: "50%",
    top: "15%"
  }, {
    delay: 2.5,
    duration: 4.5,
    size: 8,
    left: "30%",
    top: "85%"
  }, {
    delay: 0.3,
    duration: 5.5,
    size: 5,
    left: "90%",
    top: "45%"
  }, {
    delay: 1.8,
    duration: 4,
    size: 4,
    left: "5%",
    top: "55%"
  }];
  return <section className="relative overflow-hidden py-16 bg-gradient-to-r from-cyan-500 to-blue-600">
    {/* Floating particles background */}
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle, index) => <FloatingParticle key={index} {...particle} />)}
    </div>

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Card with animated border glow effect */}
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="relative group">
        {/* Animated corner glows */}
        <motion.div className="absolute -top-2 -left-2 w-32 h-32 bg-glow-cyan/60 rounded-full blur-2xl" animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.2, 1]
        }} transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
        <motion.div className="absolute -bottom-2 -right-2 w-32 h-32 bg-glow-cyan/60 rounded-full blur-2xl" animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.2, 1]
        }} transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }} />

        {/* Subtle cyan glow on sides */}
        <motion.div className="absolute top-1/2 -left-4 w-24 h-48 bg-glow-cyan/30 rounded-full blur-3xl -translate-y-1/2" animate={{
          opacity: [0.2, 0.5, 0.2],
          x: [-10, 10, -10]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
        <motion.div className="absolute top-1/2 -right-4 w-24 h-48 bg-glow-cyan/30 rounded-full blur-3xl -translate-y-1/2" animate={{
          opacity: [0.2, 0.5, 0.2],
          x: [10, -10, 10]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }} />

        {/* Card content */}
        <div className="relative bg-black backdrop-blur-xl rounded-3xl border border-white/10 px-8 text-center overflow-hidden md:px-16 py-12 group-hover:border-white/20 transition-colors duration-500 shadow-none opacity-75">
          {/* Inner animated light streaks */}
          <motion.div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-glow-cyan/20 to-transparent" animate={{
            opacity: [0, 0.5, 0],
            y: [-100, 100, -100]
          }} transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }} />
          <motion.div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-glow-cyan/20 to-transparent" animate={{
            opacity: [0, 0.5, 0],
            y: [100, -100, 100]
          }} transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }} />

          {/* Floating orbs inside card */}
          <motion.div className="absolute w-3 h-3 bg-glow-cyan/40 rounded-full blur-sm" style={{
            left: "10%",
            top: "20%"
          }} animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            opacity: [0.3, 0.7, 0.3]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
          <motion.div className="absolute w-4 h-4 bg-white/30 rounded-full blur-sm" style={{
            right: "15%",
            top: "30%"
          }} animate={{
            y: [10, -10, 10],
            opacity: [0.2, 0.5, 0.2]
          }} transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }} />
          <motion.div className="absolute w-2 h-2 bg-glow-cyan/40 rounded-full blur-sm" style={{
            right: "25%",
            bottom: "25%"
          }} animate={{
            x: [-10, 10, -10],
            y: [5, -5, 5],
            opacity: [0.3, 0.6, 0.3]
          }} transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }} />

          <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 relative">
            <span className="text-white">{t('cta.title')} </span>
            <motion.span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 relative inline-block" whileHover={{
              scale: 1.05
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
              {t('cta.titleHighlight')}
              {/* Glow effect under text */}
              <span className="absolute inset-0 blur-lg bg-glow-cyan/30 -z-10" />
            </motion.span>
          </motion.h2>

          <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="text-lg text-gray-300/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('cta.description')}
          </motion.p>

          <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }}>
            <Link to="/contact" className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-white overflow-hidden group/btn transition-all duration-300 hover:scale-105">
              {/* Glass gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--glow-cyan))] to-primary rounded-full" />

              {/* Animated shine effect */}
              <motion.span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full" animate={{
                x: ["-100%", "100%"]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 3
              }} />

              {/* Glass overlay */}
              <span className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full" />

              {/* Glow effect on hover */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_hsl(var(--glow-cyan)/0.6),inset_0_0_20px_hsl(var(--glow-cyan)/0.3)]" />

              {/* Border */}
              <span className="absolute inset-0 rounded-full border border-white/30 group-hover/btn:border-white/50 transition-colors duration-300" />

              <span className="relative z-10 font-semibold">{t('cta.getStarted')}</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>;
}