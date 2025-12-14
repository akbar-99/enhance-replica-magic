import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Shield, Clock, Users, Play, Star, Quote } from 'lucide-react';

const benefits = [
  { icon: Shield, text: 'See our platform in action', description: 'Live demonstration of key features' },
  { icon: Clock, text: 'Personalized 30-minute demo', description: 'Tailored to your specific needs' },
  { icon: Users, text: 'Talk to a security expert', description: 'Get answers to all your questions' },
];

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Expert Support' },
];

export default function Demo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: '',
    country: '',
    employees: '',
    message: '',
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

  if (submitted) {
    return (
      <main className="min-h-screen page-bg-light">
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="max-w-xl mx-auto px-4 text-center">
            <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-8 animate-bounce">
              <CheckCircle className="w-12 h-12 text-emerald-500" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Thank You!</h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We've received your demo request. A member of our team will contact you within 24 hours to schedule your personalized demo.
            </p>
            <a href="/" className="btn-primary">
              Return Home
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen page-bg-light">
      <Navbar />
      
      <section className="pt-32 pb-20 page-section-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--glow-cyan))]/5" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-[hsl(var(--glow-cyan))]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-up">
                <Play className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Request a Demo</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Book a <span className="glow-text">Demo</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
                See how Enhance Tech can help protect your organization's most sensitive data with a personalized demo from one of our security experts.
              </p>
              
              <div className="space-y-6 mb-10">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit.text} 
                    className="flex items-start gap-4 group animate-fade-up"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-300">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">{benefit.text}</span>
                      <span className="text-slate-600 text-sm">{benefit.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-[hsl(var(--glow-cyan))] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-lg relative overflow-hidden group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic leading-relaxed mb-6">
                  "Enhance Tech transformed how we protect our data. Their platform gave us complete visibility and control over our sensitive information."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[hsl(var(--glow-cyan))]" />
                  <div>
                    <p className="font-bold text-slate-900">Michael Thompson</p>
                    <p className="text-sm text-slate-500">CISO, Fortune 500 Company</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-10 shadow-xl shadow-primary/5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-slate-900 mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-slate-900 mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-3">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john.doe@company.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-3">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-semibold text-slate-900 mb-3">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      required
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Security Director"
                    />
                  </div>
                  <div>
                    <label htmlFor="employees" className="block text-sm font-semibold text-slate-900 mb-3">
                      Company Size *
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      required
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select...</option>
                      <option value="1-50">1-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-1000">201-1,000</option>
                      <option value="1001-5000">1,001-5,000</option>
                      <option value="5000+">5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-3">
                    What are you looking to solve?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your security challenges..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-lg py-4">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</a> and{' '}
                  <a href="/terms" className="text-primary hover:underline font-medium">Terms of Service</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
