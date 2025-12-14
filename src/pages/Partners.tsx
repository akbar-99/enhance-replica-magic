import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Handshake, Search, Cpu, Award, Users, Globe, ChevronRight, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const partnerTypes = [
  {
    icon: Handshake,
    title: 'Partner Program',
    description: 'Join our ecosystem of security partners and grow your business with Enhance Tech.',
    benefits: ['Revenue Share', 'Training & Certification', 'Marketing Support', 'Deal Registration'],
    link: '/partners/program',
    color: 'bg-blue-500',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: Search,
    title: 'Find a Partner',
    description: 'Connect with certified partners in your region for local expertise and support.',
    benefits: ['Local Expertise', 'Implementation Support', 'Managed Services', 'Custom Solutions'],
    link: '/partners/find',
    color: 'bg-emerald-500',
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: Cpu,
    title: 'Technology Partners',
    description: 'Explore our technology alliance partners and integration ecosystem.',
    benefits: ['API Access', 'Technical Integration', 'Joint Solutions', 'Co-Development'],
    link: '/partners/technology',
    color: 'bg-purple-500',
    gradient: 'from-purple-500/10 to-indigo-500/10',
  },
];

const stats = [
  { icon: Users, value: '500+', label: 'Global Partners' },
  { icon: Globe, value: '100+', label: 'Countries' },
  { icon: Award, value: '1,000+', label: 'Certifications' },
];

const partnerLogos = [
  'Microsoft', 'AWS', 'Google Cloud', 'Salesforce', 'ServiceNow', 'Okta'
];

export default function Partners() {
  return (
    <main className="min-h-screen page-bg-light">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 page-section-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--glow-cyan))]/5" />
        <div className="absolute top-10 right-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-[hsl(var(--glow-cyan))]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-up">
            <Handshake className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Partner Network</span>
          </div>
          <h1 className="section-title text-slate-900 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Partner <span className="glow-text">Ecosystem</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Join our global network of partners and help organizations protect their most valuable assets.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 page-section-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-[hsl(var(--glow-cyan))] bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                <span className="text-slate-600 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 page-section-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Partnership Opportunities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore the different ways you can partner with Enhance Tech.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div
                key={type.title}
                className={`bg-gradient-to-br ${type.gradient} border border-slate-200/80 rounded-3xl p-8 hover:border-transparent hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 rounded-2xl ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{type.description}</p>
                <ul className="space-y-3 mb-8">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={type.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 page-section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technology Alliances</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We integrate with leading technology platforms to deliver comprehensive security solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partnerLogos.map((logo, index) => (
              <div 
                key={logo} 
                className="group px-8 py-4 bg-slate-50 rounded-2xl hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                <span className="text-xl font-bold text-slate-400 group-hover:text-primary transition-colors duration-300">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Become a Partner</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Join our partner ecosystem and unlock new revenue opportunities while helping organizations secure their data.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/partners/apply" className="btn-primary">
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-secondary border-slate-600 text-white hover:bg-slate-700">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
