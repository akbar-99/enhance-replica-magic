import { ArrowRight, Shield, Cloud, Lock, Database, Zap, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Shield,
    title: 'Data Security Platform',
    description: 'Comprehensive protection for your most sensitive data across all environments.',
    link: '/products/data-security',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'Secure cloud workloads with advanced threat detection and automated response.',
    link: '/products/cloud-security',
  },
  {
    icon: Lock,
    title: 'Zero Trust Security',
    description: 'Never trust, always verify. Implement zero trust across your organization.',
    link: '/solutions/zero-trust',
  },
  {
    icon: Database,
    title: 'Data Discovery',
    description: 'Find and classify sensitive data automatically using AI-powered scanning.',
    link: '/products/data-discovery',
  },
  {
    icon: Zap,
    title: 'Threat Prevention',
    description: 'Stop threats before they impact your business with real-time protection.',
    link: '/products/threat-prevention',
  },
  {
    icon: Eye,
    title: 'Visibility & Analytics',
    description: 'Get complete visibility into data flows and user behavior analytics.',
    link: '/products/analytics',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            Complete Security <span className="glow-text">Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Protect your organization with our comprehensive suite of security solutions designed for the modern enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              to={feature.link}
              className="glass-card p-6 hover:bg-card/70 transition-all duration-300 group hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
