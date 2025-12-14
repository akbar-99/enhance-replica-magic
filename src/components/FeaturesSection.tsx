import { ArrowRight, Monitor, ShieldCheck, Server, Network, Code, Cloud, Headphones, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [{
  icon: Monitor,
  title: 'Managed IT Services',
  description: 'Boost efficiency with reliable Managed IT Services. Proactive monitoring, 24/7 support & tailored solutions for your business growth.',
  link: '/products/managed-it',
  iconBg: 'bg-primary',
  iconColor: 'text-white'
}, {
  icon: ShieldCheck,
  title: 'Information Security Solutions',
  description: 'Our security solutions help improve collaboration, enhance user experience, and increase productivity with comprehensive protection.',
  link: '/products/security',
  iconBg: 'bg-purple-500',
  iconColor: 'text-white'
}, {
  icon: Server,
  title: 'Server and Storage Solutions',
  description: 'Reduce costs and complexity by investing in systems that handle your infrastructure needs efficiently.',
  link: '/products/server-storage',
  iconBg: 'bg-emerald-500',
  iconColor: 'text-white'
}, {
  icon: Network,
  title: 'Network Solutions',
  description: 'Intelligently integrated network solutions that secure connectivity and enhance your business operations.',
  link: '/products/network',
  iconBg: 'bg-cyan-500',
  iconColor: 'text-white'
}, {
  icon: Code,
  title: 'Software Solutions',
  description: 'Advanced software solutions designed to streamline your operations and drive digital transformation.',
  link: '/products/software',
  iconBg: 'bg-orange-500',
  iconColor: 'text-white'
}, {
  icon: Cloud,
  title: 'AWS Cloud Services',
  description: 'Expert AWS cloud services to help you scale, optimize costs, and accelerate innovation in the cloud.',
  link: '/products/aws-cloud',
  iconBg: 'bg-indigo-500',
  iconColor: 'text-white'
}, {
  icon: Headphones,
  title: 'Unified Communications',
  description: 'Reliable and seamless communication solutions that keep your team connected across all channels.',
  link: '/products/unified-communications',
  iconBg: 'bg-rose-500',
  iconColor: 'text-white'
}, {
  icon: ShoppingCart,
  title: 'Procurement Services',
  description: 'Professional procurement services to help you source the right technology at the best value.',
  link: '/products/procurement',
  iconBg: 'bg-teal-500',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <p className="text-slate-500 mb-6 leading-relaxed text-sm">
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