import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO, { organizationSchema } from "@/components/SEO";
import { ArrowRight, Mail, Phone, MapPin, MessageSquare, Headphones, Building, Send, CheckCircle } from "lucide-react";

const contactOptions = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team for immediate assistance.",
    contact: "+971 4 329 6840",
    type: "phone",
    color: "bg-blue-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours.",
    contact: "Info@itenhance.tech",
    type: "email",
    color: "bg-emerald-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come visit our office in Dubai.",
    contact: "AlDiyar Building, Sheikh Zayed Road, Dubai, UAE",
    type: "address",
    color: "bg-purple-500",
  },
];

const offices = [
  { city: "Dubai", address: "AlDiyar Building, Sheikh Zayed Road", region: "Dubai", country: "UAE" },
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

const companyContact = {
  phone: "+971 4 329 6840",
  email: "Info@itenhance.tech",
  address: "AlDiyar Building, Sheikh Zayed Road, Dubai, UAE",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: organizationSchema,
  };

  return (
    <main className="min-h-screen page-bg-light">
      <SEO
        title="Contact Us | ENHANCE TECH Dubai"
        description="Get in touch with ENHANCE TECH. Contact us for IT solutions, cybersecurity services, and enterprise technology support in Dubai, UAE. Phone: +97143296840"
        keywords="contact ENHANCE TECH, IT support Dubai, cybersecurity contact, technology consultation UAE"
        canonicalUrl="https://itenhance.tech/contact"
        structuredData={contactSchema}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 page-section-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--glow-cyan))]/5" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-[hsl(var(--glow-cyan))]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-up">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </div>
          <h1 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Contact Us
          </h1>
          <p
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 page-section-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <div
                key={option.title}
                className="group bg-white border border-slate-200/80 rounded-3xl p-8 text-center hover:border-transparent hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${option.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <option.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {option.title}
                </h3>
                <p className="text-slate-600 mb-5 leading-relaxed">{option.description}</p>
                {option.type === "phone" ? (
                  <a
                    href={`tel:${option.contact}`}
                    className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    {option.contact}
                  </a>
                ) : option.type === "email" ? (
                  <a
                    href={`mailto:${option.contact}`}
                    className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    <Mail className="w-4 h-4" />
                    {option.contact}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    <MapPin className="w-4 h-4" />
                    {option.contact}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 page-section-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-10 shadow-xl shadow-primary/5 h-full">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                  <p className="text-slate-600 mb-8">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 mb-2">Send us a Message</h2>
                    <p className="text-slate-600">Fill out the form below and we'll respond promptly.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-3">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-3">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-3">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center text-lg py-4">
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Map Section */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-4 shadow-xl shadow-primary/5 h-full min-h-[500px] flex flex-col">
              <div className="p-4 mb-2">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Find Us
                </h2>
                <p className="text-slate-600 mt-2">
                  AlDiyar Building, Sheikh Zayed Road, Dubai, UAE
                </p>
              </div>
              <div className="flex-grow w-full rounded-2xl overflow-hidden border border-slate-100 relative bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178510024345!2d55.2721877!3d25.1972018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa4ec9701a0808600!2sAl%20Diyar%20General%20Trading%20Co.%20LLC!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Enhance Tech Location"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 page-section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 mb-4">Our Offices</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Visit us at one of our global locations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {offices.map((office, index) => (
              <div
                key={office.city}
                className="group bg-white border border-slate-200/80 rounded-3xl p-8 hover:border-transparent hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                  {office.city}
                </h3>
                <div className="text-slate-600 text-sm space-y-1">
                  <p>{office.address}</p>
                  <p>{office.region}</p>
                  <p className="font-medium text-slate-700">{office.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
