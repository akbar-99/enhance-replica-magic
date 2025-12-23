import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO, { createBreadcrumbSchema, createServiceSchema } from '@/components/SEO';
import { ArrowRight, CheckCircle, Server, Shield, Clock, Headphones, Send, FileText } from 'lucide-react';

const amcFeatures = [
  {
    icon: Server,
    title: 'Hardware Maintenance',
    description: 'Regular maintenance and repair of all IT hardware including servers, workstations, and networking equipment.',
  },
  {
    icon: Shield,
    title: 'Security Updates',
    description: 'Continuous security patches and updates to protect your systems from vulnerabilities and threats.',
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Round-the-clock monitoring of your IT infrastructure to prevent downtime and issues.',
  },
  {
    icon: Headphones,
    title: 'Priority Support',
    description: 'Dedicated support team with guaranteed response times for all your IT issues.',
  },
];

const amcPlans = [
  {
    name: 'Basic',
    description: 'Essential coverage for small businesses',
    features: ['Monthly maintenance visits', 'Email support', 'Hardware diagnostics', 'Software updates'],
  },
  {
    name: 'Professional',
    description: 'Comprehensive coverage for growing businesses',
    features: ['Weekly maintenance visits', '24/7 phone support', 'Hardware repair included', 'Security monitoring', 'Network management'],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Full coverage for large organizations',
    features: ['Daily monitoring', 'Dedicated technician', 'All repairs covered', 'Disaster recovery', 'SLA guarantees', 'Quarterly reviews'],
  },
];

const amcSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://itenhance.tech' },
      { name: 'IT AMC Quote', url: 'https://itenhance.tech/it-amc-quote' },
    ]),
    createServiceSchema("IT Annual Maintenance Contract", "Comprehensive IT AMC services including hardware maintenance, security updates, 24/7 monitoring, and priority support in Dubai, UAE."),
    {
      "@type": "Product",
      "name": "IT Annual Maintenance Contract",
      "description": "Comprehensive IT support and maintenance services",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "AED",
        "availability": "https://schema.org/InStock",
        "offerCount": "3"
      }
    }
  ]
};

export default function ITAMCQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    devices: '',
    requirements: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen page-bg-light">
      <SEO
        title="Get IT AMC Quote | Annual Maintenance Contract | ENHANCE TECH"
        description="Get a customized IT Annual Maintenance Contract (AMC) quote for your business. Comprehensive IT support, hardware maintenance, and 24/7 monitoring services in Dubai, UAE."
        keywords="IT AMC quote Dubai, annual maintenance contract, IT support contract, hardware maintenance UAE, IT services pricing"
        canonicalUrl="https://itenhance.tech/it-amc-quote"
        structuredData={amcSchema}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 page-section-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--glow-cyan))]/5" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-up">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">IT AMC Services</span>
          </div>
          <h1 className="section-title text-slate-900 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Get Your IT <span className="glow-text">AMC Quote</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive Annual Maintenance Contracts tailored to your business needs. Ensure maximum uptime and performance for your IT infrastructure.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 page-section-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 text-center mb-10">
            What's Included in Our AMC
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amcFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-transparent hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 page-section-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">AMC Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {amcPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white border rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${plan.popular
                  ? 'border-primary shadow-xl shadow-primary/10'
                  : 'border-slate-200/80 hover:shadow-xl hover:shadow-primary/10'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 page-section-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-10 shadow-xl shadow-primary/5">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Quote Request Submitted!</h2>
                <p className="text-slate-600 mb-8">
                  Our team will review your requirements and send you a customized AMC quote within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-primary">
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Request a Quote</h2>
                  <p className="text-slate-600">Fill out the form below to receive a customized AMC quote.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-3">Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-3">Email *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-3">Phone *</label>
                      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+971 XX XXX XXXX" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-3">Company *</label>
                      <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Company name" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="employees" className="block text-sm font-semibold text-slate-900 mb-3">Number of Employees</label>
                      <select id="employees" name="employees" value={formData.employees} onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                        <option value="">Select...</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="devices" className="block text-sm font-semibold text-slate-900 mb-3">Number of Devices</label>
                      <select id="devices" name="devices" value={formData.devices} onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                        <option value="">Select...</option>
                        <option value="1-20">1-20</option>
                        <option value="21-50">21-50</option>
                        <option value="51-100">51-100</option>
                        <option value="101-250">101-250</option>
                        <option value="250+">250+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-semibold text-slate-900 mb-3">Specific Requirements</label>
                    <textarea id="requirements" name="requirements" rows={4} value={formData.requirements} onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Describe your IT infrastructure and specific needs..." />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center text-lg py-4">
                    <Send className="w-5 h-5" />
                    Get My Quote
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
