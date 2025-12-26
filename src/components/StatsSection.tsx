import statsBackground from "@/assets/stats-background.webp";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [{
  value: 99.9,
  suffix: '%',
  label: 'Uptime SLA',
  decimals: 1
}, {
  value: 14,
  suffix: 'K+',
  label: 'Enterprise Customers',
  decimals: 0
}, {
  value: 150,
  suffix: '+',
  label: 'Countries Protected',
  decimals: 0
}, {
  value: 24,
  suffix: '/7',
  label: 'Global Support',
  decimals: 0
}];

function AnimatedStat({ value, suffix, label, decimals, delay }: { value: number, suffix: string, label: string, decimals: number, delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 400 });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        motionValue.set(value);
      }, delay);
    }
  }, [inView, value, motionValue, delay]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals) + suffix;
      }
    });
  }, [springValue, decimals, suffix]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold glow-text mb-2">
        <span
          ref={ref}
        >
          {0 + suffix}
        </span>
      </div>
      <div className="text-muted-foreground text-sm md:text-base">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return <section style={{
    backgroundImage: "url(\"/lovable-uploads/3b8ba20a-8b8c-4a2c-bdad-bc96de88f2f2.webp\")"
  }} className="my-[2px] bg-cover bg-center bg-no-repeat py-[72px]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <AnimatedStat
            key={stat.label}
            {...stat}
            delay={index * 150}
          />
        ))}
      </div>
    </div>
  </section>;
}