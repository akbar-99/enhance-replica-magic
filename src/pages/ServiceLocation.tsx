import { useState } from 'react';
import { toast } from 'sonner';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

import SEO from '@/components/SEO';
import { ArrowRight, CheckCircle, MapPin, Phone, Mail, Send, Shield, Server, Clock, Headphones, Building, Network, Cloud, Settings, Loader2 } from 'lucide-react';
import { submitToHubSpot } from "@/lib/hubspot";

const locationData: Record<string, {
  name: string;
  fullName: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  services: { icon: typeof Shield; title: string; description: string }[];
  benefits: string[];
}> = {
  'it-support-dubai': {
    name: 'Dubai',
    fullName: 'IT Support in Dubai',
    description: 'Comprehensive IT support services for businesses in Dubai. From managed IT services to cybersecurity, we provide enterprise-grade solutions tailored to your needs.',
    seoTitle: 'IT Support in Dubai | Managed IT Services | ENHANCE TECH',
    seoDescription: 'Professional IT support services in Dubai. 24/7 help desk, network management, cybersecurity, and cloud solutions for businesses of all sizes.',
    services: [
      { icon: Headphones, title: '24/7 Help Desk', description: 'Round-the-clock technical support with rapid response times.' },
      { icon: Network, title: 'Network Management', description: 'Complete network design, implementation, and monitoring.' },
      { icon: Shield, title: 'Cybersecurity', description: 'Advanced threat protection and security monitoring.' },
      { icon: Cloud, title: 'Cloud Services', description: 'AWS and Azure cloud migration and management.' },
    ],
    benefits: ['Same-day on-site support', 'Certified IT professionals', 'Flexible SLA options', 'Proactive monitoring', 'Cost-effective solutions'],
  },
  'it-support-sharjah': {
    name: 'Sharjah',
    fullName: 'IT Support in Sharjah',
    description: 'Reliable IT support services for Sharjah businesses. We deliver comprehensive technology solutions that keep your operations running smoothly.',
    seoTitle: 'IT Support in Sharjah | Professional IT Services | ENHANCE TECH',
    seoDescription: 'Expert IT support services in Sharjah. Managed IT, network solutions, cybersecurity, and technical support for businesses across Sharjah.',
    services: [
      { icon: Server, title: 'Server Management', description: 'Server setup, maintenance, and optimization.' },
      { icon: Network, title: 'Network Solutions', description: 'Wired and wireless network infrastructure.' },
      { icon: Shield, title: 'Data Protection', description: 'Backup solutions and disaster recovery planning.' },
      { icon: Settings, title: 'IT Consulting', description: 'Strategic IT planning and advisory services.' },
    ],
    benefits: ['Quick response times', 'Local support team', 'Industry expertise', 'Scalable solutions', 'Transparent pricing'],
  },
  'it-support-difc': {
    name: 'DIFC',
    fullName: 'IT Support in DIFC',
    description: 'Specialized IT support for financial institutions and businesses in Dubai International Financial Centre. Enterprise-grade security and compliance-focused solutions.',
    seoTitle: 'IT Support in DIFC | Financial Services IT | ENHANCE TECH',
    seoDescription: 'Specialized IT support for DIFC businesses. Compliance-focused, secure, and reliable IT services for financial services and corporate clients.',
    services: [
      { icon: Shield, title: 'Compliance & Security', description: 'DFSA and regulatory compliance solutions.' },
      { icon: Server, title: 'High-Availability Systems', description: 'Mission-critical infrastructure management.' },
      { icon: Network, title: 'Secure Networking', description: 'Encrypted communications and VPN solutions.' },
      { icon: Clock, title: 'Priority Response', description: 'SLA-backed rapid response for critical issues.' },
    ],
    benefits: ['Financial sector expertise', 'Compliance specialists', 'Premium SLA options', 'Dedicated account manager', '24/7 priority support'],
  },
  'it-support-qatar': {
    name: 'Qatar',
    fullName: 'IT Support in Qatar',
    description: 'Professional IT support services for businesses in Qatar. We provide comprehensive technology solutions to help your organization thrive.',
    seoTitle: 'IT Support in Qatar | Enterprise IT Solutions | ENHANCE TECH',
    seoDescription: 'Reliable IT support services in Qatar. Managed IT, infrastructure solutions, cybersecurity, and cloud services for businesses in Doha and across Qatar.',
    services: [
      { icon: Building, title: 'Enterprise Solutions', description: 'Large-scale IT infrastructure and management.' },
      { icon: Cloud, title: 'Cloud Migration', description: 'Seamless transition to cloud platforms.' },
      { icon: Shield, title: 'Security Services', description: 'Comprehensive cybersecurity solutions.' },
      { icon: Headphones, title: 'Remote Support', description: 'Remote monitoring and support services.' },
    ],
    benefits: ['Regional presence', 'Multi-language support', 'Enterprise experience', 'Flexible engagement', 'Local partnerships'],
  },
  'it-consulting-dubai': {
    name: 'Dubai',
    fullName: 'IT Consulting in Dubai',
    description: 'Strategic IT consulting services in Dubai. We help businesses leverage technology to achieve their goals with expert guidance and implementation support.',
    seoTitle: 'IT Consulting in Dubai | Technology Strategy | ENHANCE TECH',
    seoDescription: 'Expert IT consulting services in Dubai. Digital transformation, technology strategy, IT assessment, and implementation services for businesses.',
    services: [
      { icon: Settings, title: 'IT Strategy', description: 'Technology roadmap and strategic planning.' },
      { icon: Network, title: 'Digital Transformation', description: 'Modernize operations with digital solutions.' },
      { icon: Shield, title: 'Security Assessment', description: 'Vulnerability assessments and security audits.' },
      { icon: Cloud, title: 'Cloud Strategy', description: 'Cloud adoption and optimization planning.' },
    ],
    benefits: ['Experienced consultants', 'Vendor-neutral advice', 'ROI-focused approach', 'Implementation support', 'Knowledge transfer'],
  },
};

export default function ServiceLocation() {
  const { slug } = useParams<{ slug: string }>();
  const location = locationData[slug || ''] || locationData['it-support-dubai'];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // HubSpot Submission
      const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
      const consultationFormId = import.meta.env.VITE_HUBSPOT_CONSULTATION_FORM_ID;

      if (!portalId || !consultationFormId) {
        throw new Error('HubSpot configuration missing. Please check your .env file.');
      }

      await submitToHubSpot(portalId, consultationFormId, {
        email: formData.email,
        firstname: formData.name,
        phone: formData.phone,
        company: formData.company,
        message: `Location: ${location.name}. ${formData.message}`,
      });

      setSubmitted(true);
      toast.success("Consultation request sent successfully!");
    } catch (error) {
      console.error('Consultation Error:', error);
      toast.error("Failed to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen page-bg-light">
      <SEO
        title={location.seoTitle}
        description={location.seoDescription}
        keywords={`IT support ${location.name}, managed IT services, technology solutions, IT consulting`}
        canonicalUrl={`https://itenhance.tech/services/${slug}`}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 page-section-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--glow-cyan))]/5" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-up">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{location.name}</span>
          </div>
          <h1 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {location.fullName}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {location.description}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 page-section-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {location.services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-transparent hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 page-section-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 mb-6">Why Choose Us in {location.name}</h2>
              <ul className="space-y-4">
                {location.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/it-amc-quote" className="btn-secondary">
                  Get AMC Quote
                </Link>
              </div>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl shadow-primary/5">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Get a Free Consultation</h3>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Thank You!</h4>
                  <p className="text-slate-600 text-sm mb-6">We'll contact you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary py-2 px-4 text-sm mx-auto"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name *"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email Address *"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                  <textarea name="message" rows={3} value={formData.message} onChange={handleChange} placeholder="How can we help?"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Submit Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 page-section-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
          <p className="text-slate-600 mb-8">Contact us today for a free consultation and learn how we can help your business succeed.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+97143296840" className="btn-primary">
              <Phone className="w-4 h-4" /> +97143296840
            </a>
            <a href="mailto:connect@itenhance.tech" className="btn-secondary">
              <Mail className="w-4 h-4" /> connect@itenhance.tech
            </a>
          </div>
        </div>
      </section>


    </main>
  );
}
