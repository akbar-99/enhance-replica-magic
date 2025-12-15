import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, ChevronRight, Sparkles, Shield, Server, Monitor, Lock, Cloud, ShieldAlert, HardDrive, Headphones, Network, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const detailedSolutions = [
  {
    id: 'secure-network',
    icon: Network,
    title: 'Secure Your Network',
    description: 'Comprehensive network security solutions including firewalls, intrusion detection, and secure connectivity for your business infrastructure.',
    color: 'bg-blue-500',
  },
  {
    id: 'prevent-data-loss',
    icon: Shield,
    title: 'Prevent Data Loss',
    description: 'Protect sensitive data across endpoints, networks, and cloud environments with advanced DLP and backup solutions.',
    color: 'bg-purple-500',
  },
  {
    id: 'meeting-spaces',
    icon: Monitor,
    title: 'Modernize Meeting Spaces',
    description: 'Transform your conference rooms with unified communication solutions, video conferencing, and smart collaboration tools.',
    color: 'bg-emerald-500',
  },
  {
    id: 'physical-security',
    icon: Lock,
    title: 'Enhance Physical Security',
    description: 'Protect your premises with access control systems, CCTV surveillance, biometric authentication, and integrated security solutions.',
    color: 'bg-amber-500',
  },
  {
    id: 'cloud-operations',
    icon: Cloud,
    title: 'Optimize Cloud Operations',
    description: 'Maximize your AWS and cloud investments with expert management, cost optimization, and cloud-native solutions.',
    color: 'bg-cyan-500',
  },
  {
    id: 'cyber-threats',
    icon: ShieldAlert,
    title: 'Stop Cyber Threats',
    description: 'Defend against ransomware, phishing, and advanced persistent threats with proactive threat detection and response.',
    color: 'bg-red-500',
  },
  {
    id: 'enterprise-hardware',
    icon: HardDrive,
    title: 'Upgrade Enterprise Hardware',
    description: 'Source and deploy enterprise-grade servers, storage, and networking equipment from leading global vendors.',
    color: 'bg-indigo-500',
  },
  {
    id: 'it-support',
    icon: Headphones,
    title: 'Streamline IT Support',
    description: 'Reduce downtime with managed IT services, 24/7 helpdesk support, and proactive system monitoring.',
    color: 'bg-orange-500',
  },
  {
    id: 'infrastructure',
    icon: Server,
    title: 'Strengthen Infrastructure',
    description: 'Build resilient IT infrastructure with power solutions, data center optimization, and robust server environments.',
    color: 'bg-slate-600',
  },
  {
    id: 'microsoft-365',
    icon: Settings,
    title: 'Manage Microsoft 365',
    description: 'Deploy, manage, and secure your Microsoft 365 environment with expert administration and licensing support.',
    color: 'bg-sky-500',
  },
];

export default function Solutions() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <main className="min-h-screen page-bg-light">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 page-section-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--glow-cyan))]/5" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[hsl(var(--glow-cyan))]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Industry Solutions</span>
          </div>
          <h1 className="section-title text-slate-900 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Security <span className="glow-text">Solutions</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Industry-specific solutions and use cases designed to address your unique security challenges.
          </p>
        </div>
      </section>

      {/* Detailed Solutions Grid */}
      <section className="py-20 page-section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore Our Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive security solutions to protect your data and business from every angle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedSolutions.map((solution, index) => (
              <Link
                key={solution.id}
                to={`/solutions/${solution.id}`}
                className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 hover:border-transparent hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[hsl(var(--glow-cyan))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{solution.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our solutions protect organizations across all major industries worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10K+', label: 'Organizations Protected' },
              { value: '50+', label: 'Industries Served' },
              { value: '99.9%', label: 'Threat Detection Rate' },
              { value: '24/7', label: 'Expert Support' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-[hsl(var(--glow-cyan))] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-white to-[hsl(var(--glow-cyan))]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Find Your Solution
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Talk to our experts to discover the best security solution for your industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/demo" className="btn-primary">
              Request Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-secondary border-slate-300 text-slate-900 hover:bg-slate-100">
              Contact Sales
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
