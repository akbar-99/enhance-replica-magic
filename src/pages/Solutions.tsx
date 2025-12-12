import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Building2, Brain, FileCheck, ShieldCheck, Users, Factory, Landmark, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    icon: Building2,
    title: 'Enterprise Security',
    description: 'Comprehensive security solutions designed for large organizations with complex requirements.',
    link: '/solutions/enterprise',
  },
  {
    icon: Brain,
    title: 'AI & ML Security',
    description: 'Protect AI workflows and machine learning models from data leakage and manipulation.',
    link: '/solutions/ai-security',
  },
  {
    icon: FileCheck,
    title: 'Compliance',
    description: 'Meet regulatory requirements with automated compliance monitoring and reporting.',
    link: '/solutions/compliance',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Trust',
    description: 'Implement a zero trust security framework across your organization.',
    link: '/solutions/zero-trust',
  },
  {
    icon: Users,
    title: 'Remote Workforce',
    description: 'Secure remote workers and distributed teams with comprehensive protection.',
    link: '/solutions/remote-workforce',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Protect industrial systems and OT environments from cyber threats.',
    link: '/solutions/manufacturing',
  },
  {
    icon: Landmark,
    title: 'Financial Services',
    description: 'Security solutions tailored for banks, insurance, and financial institutions.',
    link: '/solutions/financial-services',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Protect patient data and ensure HIPAA compliance with specialized solutions.',
    link: '/solutions/healthcare',
  },
];

export default function Solutions() {
  return (
    <main className="min-h-screen page-bg-light">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 page-section-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title text-slate-900 mb-4">
            Security <span className="glow-text">Solutions</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Industry-specific solutions and use cases designed to address your unique security challenges.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 page-section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                to={solution.link}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4">{solution.description}</p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
