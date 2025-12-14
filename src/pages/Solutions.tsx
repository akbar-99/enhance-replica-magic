import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Building2, Brain, FileCheck, ShieldCheck, Users, Factory, Landmark, Heart, ChevronRight, Sparkles, Shield, Lock, Mail, Database, Cloud, AlertTriangle, Eye, FileSearch } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const solutions = [
  {
    icon: Building2,
    title: 'Enterprise Security',
    description: 'Comprehensive security solutions designed for large organizations with complex requirements.',
    link: '/solutions/enterprise',
    color: 'bg-blue-500',
  },
  {
    icon: Brain,
    title: 'AI & ML Security',
    description: 'Protect AI workflows and machine learning models from data leakage and manipulation.',
    link: '/solutions/ai-security',
    color: 'bg-purple-500',
  },
  {
    icon: FileCheck,
    title: 'Compliance',
    description: 'Meet regulatory requirements with automated compliance monitoring and reporting.',
    link: '/solutions/compliance',
    color: 'bg-emerald-500',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Trust',
    description: 'Implement a zero trust security framework across your organization.',
    link: '/solutions/zero-trust',
    color: 'bg-cyan-500',
  },
  {
    icon: Users,
    title: 'Remote Workforce',
    description: 'Secure remote workers and distributed teams with comprehensive protection.',
    link: '/solutions/remote-workforce',
    color: 'bg-indigo-500',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Protect industrial systems and OT environments from cyber threats.',
    link: '/solutions/manufacturing',
    color: 'bg-orange-500',
  },
  {
    icon: Landmark,
    title: 'Financial Services',
    description: 'Security solutions tailored for banks, insurance, and financial institutions.',
    link: '/solutions/financial-services',
    color: 'bg-amber-500',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Protect patient data and ensure HIPAA compliance with specialized solutions.',
    link: '/solutions/healthcare',
    color: 'bg-rose-500',
  },
];

const detailedSolutions = [
  {
    id: 'prevent-data-loss',
    icon: Shield,
    title: 'Prevent Data Loss',
    description: 'Protect sensitive data across endpoints, networks, and cloud environments with advanced DLP solutions.',
    color: 'bg-blue-500',
  },
  {
    id: 'data-access-governance',
    icon: Lock,
    title: 'Data Access Governance',
    description: 'Control and monitor who has access to critical business data with comprehensive governance tools.',
    color: 'bg-purple-500',
  },
  {
    id: 'compliance-readiness',
    icon: FileCheck,
    title: 'Compliance Readiness',
    description: 'Ensure your organization meets all regulatory requirements with automated compliance tools.',
    color: 'bg-emerald-500',
  },
  {
    id: 'insider-risk-protection',
    icon: Eye,
    title: 'Insider Risk Protection',
    description: 'Detect and prevent insider threats before they become data breaches.',
    color: 'bg-amber-500',
  },
  {
    id: 'data-security-ai',
    icon: Brain,
    title: 'Data Security for AI',
    description: 'Secure AI workflows and protect sensitive data in machine learning environments.',
    color: 'bg-indigo-500',
  },
  {
    id: 'email-security',
    icon: Mail,
    title: 'Comprehensive Email Security',
    description: 'Protect against phishing, malware, and email-based threats with advanced email security.',
    color: 'bg-cyan-500',
  },
  {
    id: 'ai-data-classification',
    icon: FileSearch,
    title: 'AI Data Classification',
    description: 'Automatically classify and label sensitive data using AI-powered classification.',
    color: 'bg-violet-500',
  },
  {
    id: 'byod-security',
    icon: Users,
    title: 'BYOD Security',
    description: 'Secure personal devices accessing corporate data without compromising user privacy.',
    color: 'bg-orange-500',
  },
  {
    id: 'breach-incident-readiness',
    icon: AlertTriangle,
    title: 'Unified Breach and Incident Readiness',
    description: 'Prepare for and respond to security incidents with unified incident management.',
    color: 'bg-rose-500',
  },
  {
    id: 'microsoft-365-copilot',
    icon: Cloud,
    title: 'Secure Microsoft 365 and Copilot',
    description: 'Protect Microsoft 365 environments and secure AI-powered Copilot interactions.',
    color: 'bg-sky-500',
  },
  {
    id: 'chatgpt-data-protection',
    icon: Database,
    title: 'Protect Data in ChatGPT',
    description: 'Prevent sensitive data from being exposed through ChatGPT and other AI tools.',
    color: 'bg-teal-500',
  },
  {
    id: 'data-risk-mitigation',
    icon: ShieldCheck,
    title: 'Data Risk Mitigation',
    description: 'Identify and reduce data security risks across your entire organization.',
    color: 'bg-slate-600',
  },
  {
    id: 'stop-ransomware',
    icon: Shield,
    title: 'Stop Ransomware',
    description: 'Protect against ransomware attacks with proactive threat detection and response.',
    color: 'bg-red-500',
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
              <div
                key={solution.id}
                id={solution.id}
                className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 hover:border-transparent hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden scroll-mt-32"
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
                  <p className="text-sm text-slate-600 leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Industry Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Tailored solutions for your specific industry requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Link
                key={solution.title}
                to={solution.link}
                className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 hover:border-transparent hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">{solution.description}</p>
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
