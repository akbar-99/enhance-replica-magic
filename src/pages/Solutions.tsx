import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Building2, Brain, FileCheck, ShieldCheck, Users, Factory, Landmark, Heart, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

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

import RevealOnScroll from '@/components/RevealOnScroll';

export default function Solutions() {
  return (
    <main className="min-h-screen page-bg-light">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 page-section-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--glow-cyan))]/5" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[hsl(var(--glow-cyan))]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Industry Solutions</span>
            </div>
            <h1 className="section-title text-slate-900 mb-6">
              Security <span className="glow-text">Solutions</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Industry-specific solutions and use cases designed to address your unique security challenges.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Solutions Grid */}
      <RevealOnScroll>
        <section className="py-20 page-section-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => (
                <Link
                  key={solution.title}
                  to={solution.link}
                  className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 hover:border-transparent hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{ transitionDelay: `${index * 50}ms` }}
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
      </RevealOnScroll>

      {/* Stats Section */}
      <RevealOnScroll>
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
              ].map((stat) => (
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
      </RevealOnScroll>

      {/* CTA Section */}
      <RevealOnScroll>
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
      </RevealOnScroll>

      <Footer />
    </main>
  );
}
