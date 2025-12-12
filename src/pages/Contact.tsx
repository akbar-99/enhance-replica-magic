import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Mail, Phone, MapPin, MessageSquare, Headphones, Building } from 'lucide-react';

const contactOptions = [
  {
    icon: MessageSquare,
    title: 'Sales Inquiries',
    description: 'Talk to our sales team about your security needs.',
    contact: 'sales@enhancetech.com',
    type: 'email',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Get help with your existing Enhance Tech products.',
    contact: 'support@enhancetech.com',
    type: 'email',
  },
  {
    icon: Building,
    title: 'Partner Inquiries',
    description: 'Interested in becoming a partner? Let us know.',
    contact: 'partners@enhancetech.com',
    type: 'email',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen page-bg-light">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 page-section-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title text-slate-900 mb-4">
            Contact <span className="glow-text">Us</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 page-section-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactOptions.map((option) => (
              <div key={option.title} className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{option.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{option.description}</p>
                <a
                  href={`mailto:${option.contact}`}
                  className="text-primary hover:underline font-medium"
                >
                  {option.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 page-section-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-900 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select a subject...</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 page-section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Offices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 text-center">
              <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900">San Francisco</h3>
              <p className="text-sm text-slate-600 mt-2">
                123 Security Street<br />
                San Francisco, CA 94105<br />
                United States
              </p>
            </div>
            <div className="p-6 text-center">
              <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900">London</h3>
              <p className="text-sm text-slate-600 mt-2">
                456 Data Lane<br />
                London EC2A 2BB<br />
                United Kingdom
              </p>
            </div>
            <div className="p-6 text-center">
              <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900">Singapore</h3>
              <p className="text-sm text-slate-600 mt-2">
                789 Protection Ave<br />
                Singapore 018956<br />
                Singapore
              </p>
            </div>
            <div className="p-6 text-center">
              <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900">Sydney</h3>
              <p className="text-sm text-slate-600 mt-2">
                321 Secure Plaza<br />
                Sydney NSW 2000<br />
                Australia
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
