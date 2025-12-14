import { ArrowRight, Shield, Cloud, Lock, Database, Zap, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
const features = [{
  icon: Shield,
  title: 'Managed IT Services',
  description: 'Comprehensive protection for your most sensitive data across all environments.',
  link: '/products/data-security',
  iconBg: 'bg-primary',
  iconColor: 'text-white'
}, {
  icon: Cloud,
  title: 'Cloud Security',
  description: 'Secure cloud workloads with advanced threat detection and automated response.',
  link: '/products/cloud-security',
  iconBg: 'bg-purple-500',
  iconColor: 'text-white'
}, {
  icon: Lock,
  title: 'Zero Trust Security',
  description: 'Never trust, always verify. Implement zero trust across your organization.',
  link: '/solutions/zero-trust',
  iconBg: 'bg-emerald-500',
  iconColor: 'text-white'
}, {
  icon: Database,
  title: 'Data Discovery',
  description: 'Find and classify sensitive data automatically using AI-powered scanning.',
  link: '/products/data-discovery',
  iconBg: 'bg-cyan-500',
  iconColor: 'text-white'
}, {
  icon: Zap,
  title: 'Threat Prevention',
  description: 'Stop threats before they impact your business with real-time protection.',
  link: '/products/threat-prevention',
  iconBg: 'bg-orange-500',
  iconColor: 'text-white'
}, {
  icon: Eye,
  title: 'Visibility & Analytics',
  description: 'Get complete visibility into data flows and user behavior analytics.',
  link: '/products/analytics',
  iconBg: 'bg-indigo-500',
  iconColor: 'text-white'
}];
export default function FeaturesSection() {
  return <section className="bg-white py-[35px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-800">​Scalable Solutions for the </span>{' '}
            <span className="text-primary">​Modern Enterprise</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Protect your organization with our comprehensive suite of security solutions designed for the modern enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => <Link key={feature.title} to={feature.link} className="bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300 group hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1" style={{
          animationDelay: `${index * 100}ms`
        }}>
              {/* Icon container */}
              <div className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} strokeWidth={2} />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-500 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Learn More link */}
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide group-hover:gap-3 transition-all duration-300">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>)}
        </div>
      </div>
    </section>;
}