import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Target, Users, Award, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Target,
    title: 'Customer First',
    description: 'We put our customers at the center of everything we do.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every product and service we deliver.',
  },
];

const offices = [
  { city: 'San Francisco', country: 'USA', type: 'Headquarters' },
  { city: 'London', country: 'UK', type: 'EMEA HQ' },
  { city: 'Singapore', country: 'Singapore', type: 'APAC HQ' },
  { city: 'Sydney', country: 'Australia', type: 'Office' },
];

const leadership = [
  { name: 'John Smith', role: 'Chief Executive Officer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
  { name: 'Sarah Johnson', role: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
  { name: 'Michael Chen', role: 'Chief Security Officer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop' },
  { name: 'Emily Davis', role: 'Chief Revenue Officer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
];

export default function Company() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title text-foreground mb-4">
            About <span className="glow-text">Enhance Tech</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to protect the world's most sensitive data and enable organizations to embrace digital transformation with confidence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide organizations with the most advanced data security solutions that protect their most valuable assets while enabling innovation and growth.
              </p>
            </div>
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                A world where organizations can operate without fear of data breaches, enabling them to focus on what matters most—serving their customers and growing their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="glass-card p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Leadership Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {leadership.map((leader) => (
              <div key={leader.name} className="text-center group cursor-pointer">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-2 ring-border group-hover:ring-primary transition-all">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {leader.name}
                </h3>
                <p className="text-sm text-muted-foreground">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Global Offices</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="glass-card p-6 text-center">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">{office.city}</h3>
                <p className="text-sm text-muted-foreground">{office.country}</p>
                <span className="text-xs text-primary mt-2 block">{office.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-glow-cyan/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Have questions? Our team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/company/contact" className="btn-primary">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/company/careers" className="btn-secondary">
              View Careers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
