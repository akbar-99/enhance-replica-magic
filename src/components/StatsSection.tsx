import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 99.9, suffix: '%', label: 'Uptime SLA' },
  { value: 14, suffix: 'K+', label: 'Enterprise Customers' },
  { value: 150, suffix: '+', label: 'Countries Protected' },
  { value: 24, suffix: '/7', label: 'Global Support' },
];

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

export default function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="glow-text">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our platform powers security for enterprises around the globe
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value, 2000);
            
            return (
              <div
                key={stat.label}
                ref={ref}
                className="group relative text-center p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover-glow transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient accent on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-glow-cyan to-glow-purple rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold glow-text mb-3">
                  {count}{stat.suffix}
                </div>
                <div className="text-muted-foreground text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
