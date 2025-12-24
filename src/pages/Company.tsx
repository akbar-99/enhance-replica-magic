import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO, { organizationSchema, createBreadcrumbSchema } from "@/components/SEO";
import { ArrowRight, Target, Users, Award, MapPin, Building2, Lightbulb, Heart, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
const values = [
  {
    icon: Target,
    title: "Customer First",
    description: "We put our customers at the center of everything we do.",
    color: "bg-blue-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication.",
    color: "bg-emerald-500",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every product and service we deliver.",
    color: "bg-purple-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push boundaries and embrace new ideas to solve complex problems.",
    color: "bg-orange-500",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We act with honesty, transparency, and ethical responsibility.",
    color: "bg-rose-500",
  },
  {
    icon: Building2,
    title: "Accountability",
    description: "We take ownership of our actions and deliver on our commitments.",
    color: "bg-cyan-500",
  },
];
const offices = [
  {
    city: "Dubai",
    country: "UAE",
    type: "Headquarters",
    timezone: "PST",
  },
  {
    city: "Doha",
    country: "Qatar",
    type: "EMEA HQ",
    timezone: "GMT",
  },
  {
    city: "Riyadh",
    country: "KSA",
    type: "APAC HQ",
    timezone: "SGT",
  },
  {
    city: "Kochi",
    country: "India",
    type: "Office",
    timezone: "AEST",
  },
];
const leadership = [
  {
    name: "John Smith",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Chief Security Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  },
  {
    name: "Emily Davis",
    role: "Chief Revenue Officer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
];
export default function Company() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://itenhance.tech" },
    { name: "Company", url: "https://itenhance.tech/company" },
  ]);

  return (
    <main className="min-h-screen page-bg-light">
      <SEO
        title="About ENHANCE TECH | IT Solutions Company Dubai"
        description="Learn about ENHANCE TECH's mission, vision, and values. We're a leading IT solutions provider in Dubai, UAE, committed to delivering enterprise-grade technology solutions."
        keywords="about ENHANCE TECH, IT company Dubai, technology company UAE, IT solutions provider, enterprise technology"
        canonicalUrl="https://itenhance.tech/company"
        structuredData={{ "@graph": [organizationSchema, breadcrumbSchema] }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 page-section-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--glow-cyan))]/5" />
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-[hsl(var(--glow-cyan))]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-up">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>
          <h1
            className="section-title text-slate-900 mb-6 animate-fade-up"
            style={{
              animationDelay: "0.1s",
            }}
          >
            About <span className="glow-text">Enhance Tech</span>
          </h1>
          <p
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{
              animationDelay: "0.2s",
            }}
          >
            We're on a mission to protect the world's most sensitive data and enable organizations to embrace digital
            transformation with confidence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 page-section-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-primary/5 to-[hsl(var(--glow-cyan))]/5 border border-slate-200/80 rounded-3xl p-10 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide organizations with the most advanced data security solutions that protect their most valuable
                assets while enabling innovation and growth.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-[hsl(var(--glow-cyan))]/5 to-primary/5 border border-slate-200/80 rounded-3xl p-10 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--glow-cyan))] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                A world where organizations can operate without fear of data breaches, enabling them to focus on what
                matters most—serving their customers and growing their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 page-section-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide everything we do.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group bg-white border border-slate-200/80 rounded-3xl p-8 text-center hover:border-transparent hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}

      {/* Offices */}
      <section className="py-20 page-section-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Global Offices</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              With offices around the world, we're always close to our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {offices.map((office, index) => (
              <div
                key={office.city}
                className="group bg-white border border-slate-200/80 rounded-3xl p-8 text-center hover:border-transparent hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-primary transition-colors duration-300">
                  {office.city}
                </h3>
                <p className="text-slate-600 mt-1">{office.country}</p>
                <span className="inline-flex items-center gap-1 mt-3 px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary">
                  {office.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Have questions? Our team is here to help.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/company/careers" className="btn-secondary border-slate-600 text-white hover:bg-slate-700">
              View Careers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


    </main>
  );
}
