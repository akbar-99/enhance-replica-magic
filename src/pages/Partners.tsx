import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Handshake, Search, Cpu, Award, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const partnerTypes = [
  {
    icon: Handshake,
    title: 'Partner Program',
    description: 'Join our ecosystem of security partners and grow your business with Enhance Tech.',
    benefits: ['Revenue Share', 'Training & Certification', 'Marketing Support', 'Deal Registration'],
    link: '/partners/program',
  },
  {
    icon: Search,
    title: 'Find a Partner',
    description: 'Connect with certified partners in your region for local expertise and support.',
    benefits: ['Local Expertise', 'Implementation Support', 'Managed Services', 'Custom Solutions'],
    link: '/partners/find',
  },
  {
    icon: Cpu,
    title: 'Technology Partners',
    description: 'Explore our technology alliance partners and integration ecosystem.',
    benefits: ['API Access', 'Technical Integration', 'Joint Solutions', 'Co-Development'],
    link: '/partners/technology',
  },
];

const stats = [
  { icon: Users, value: '500+', label: 'Global Partners' },
  { icon: Globe, value: '100+', label: 'Countries' },
  { icon: Award, value: '1,000+', label: 'Certifications' },
];

export default function Partners() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title text-foreground mb-4">
            Partner <span className="glow-text">Ecosystem</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our global network of partners and help organizations protect their most valuable assets.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                  <span className="text-3xl font-bold glow-text">{stat.value}</span>
                </div>
                <span className="text-muted-foreground text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {partnerTypes.map((type) => (
              <div
                key={type.title}
                className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <type.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-2 mb-6">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to={type.link}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
