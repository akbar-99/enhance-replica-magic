import { ArrowRight, Shield, Cloud, Lock, Database, Zap, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [{
  icon: Shield,
  title: 'Data Security Platform',
  description: 'Comprehensive protection for your most sensitive data across all environments.',
  link: '/products/data-security'
}, {
  icon: Cloud,
  title: 'Cloud Security',
  description: 'Secure cloud workloads with advanced threat detection and automated response.',
  link: '/products/cloud-security'
}, {
  icon: Lock,
  title: 'Zero Trust Security',
  description: 'Never trust, always verify. Implement zero trust across your organization.',
  link: '/solutions/zero-trust'
}, {
  icon: Database,
  title: 'Data Discovery',
  description: 'Find and classify sensitive data automatically using AI-powered scanning.',
  link: '/products/data-discovery'
}, {
  icon: Zap,
  title: 'Threat Prevention',
  description: 'Stop threats before they impact your business with real-time protection.',
  link: '/products/threat-prevention'
}, {
  icon: Eye,
  title: 'Visibility & Analytics',
  description: 'Get complete visibility into data flows and user behavior analytics.',
  link: '/products/analytics'
}];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
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
              className="relative bg-slate-500/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-400/30 transition-all duration-500 group hover:bg-slate-600/90 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon container */}
              <div className="w-14 h-14 rounded-xl border-2 border-primary/60 bg-transparent flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-200/80 mb-6 leading-relaxed group-hover:text-slate-100 transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Learn More link */}
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide group-hover:gap-3 transition-all duration-300">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}