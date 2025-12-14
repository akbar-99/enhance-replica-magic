import { ArrowRight, Shield, Cloud, Lock, Database, Zap, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const features = [
  {
    icon: Shield,
    title: 'Data Security Platform',
    description: 'Comprehensive protection for your most sensitive data across all environments.',
    link: '/products/data-security',
    gradient: 'from-primary to-glow-cyan',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'Secure cloud workloads with advanced threat detection and automated response.',
    link: '/products/cloud-security',
    gradient: 'from-glow-cyan to-glow-purple',
  },
  {
    icon: Lock,
    title: 'Zero Trust Security',
    description: 'Never trust, always verify. Implement zero trust across your organization.',
    link: '/solutions/zero-trust',
    gradient: 'from-glow-purple to-glow-pink',
  },
  {
    icon: Database,
    title: 'Data Discovery',
    description: 'Find and classify sensitive data automatically using AI-powered scanning.',
    link: '/products/data-discovery',
    gradient: 'from-glow-pink to-primary',
  },
  {
    icon: Zap,
    title: 'Threat Prevention',
    description: 'Stop threats before they impact your business with real-time protection.',
    link: '/products/threat-prevention',
    gradient: 'from-primary to-glow-purple',
  },
  {
    icon: Eye,
    title: 'Visibility & Analytics',
    description: 'Get complete visibility into data flows and user behavior analytics.',
    link: '/products/analytics',
    gradient: 'from-glow-cyan to-primary',
  },
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
            Our Solutions
          </span>
          <h2 className="section-title text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Complete Security <span className="glow-text">Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Protect your organization with our comprehensive suite of security solutions designed for the modern enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              to={feature.link}
              className="group relative rounded-2xl p-6 bg-card/50 backdrop-blur-xl border border-border/50 hover-glow transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]`}>
                <div className="w-full h-full rounded-2xl bg-card" />
              </div>

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-[1px] mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <feature.icon className={`w-7 h-7 bg-gradient-to-r ${feature.gradient} bg-clip-text`} style={{ color: hoveredIndex === index ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))' }} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:glow-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{feature.description}</p>
                
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-4 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
