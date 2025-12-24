import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Monitor, Shield, Phone, RefreshCcw, Users, BarChart, Search, Map, Rocket, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Images
import managedItImg from "@/assets/managed-it.png";
import managedSecurityImg from "@/assets/managed-security.png";
import consultancyImg from "@/assets/consultancy.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ManagedITServices() {
  return (
    <main className="min-h-screen page-bg-light overflow-x-hidden">
      <SEO
        title="Managed IT Services Dubai | Enhance Tech"
        description="Comprehensive Managed IT Services, Cybersecurity, and Consultancy for businesses in UAE. 24/7 Support, Remote Monitoring, and Strategic Guidance."
        keywords="Managed IT Services Dubai, IT Support UAE, Cybersecurity Services, IT Consultancy, Enhance Tech"
        canonicalUrl="https://itenhance.tech/managed-it-services"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden page-section-blue">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />

        {/* Animated Background Blobs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 mb-6 animate-fade-up">
              Proactive Support, Strategic Security, and Expert Guidance for Your Business
            </h1>
            <p className="text-xl text-slate-600 mb-8 animate-fade-up animation-delay-200">
              Transforming IT from a Cost Center to a Growth Engine.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-up animation-delay-400">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
                  Book Your Free Initial Audit Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                alt="IT Team Collaboration"
                className="relative rounded-2xl shadow-2xl border border-slate-100"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                About Managed Services
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
                Stop Waiting for Things to Break
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  In today’s fast-paced digital landscape, relying on a "break-fix" model—where you only call IT when
                  something breaks—is no longer sustainable. Downtime costs money, security breaches ruin reputations,
                  and outdated technology slows down your team.
                </p>
                <p>
                  Managed Services is a proactive approach where Enhance Tech takes full responsibility for your IT
                  infrastructure, security, and strategy for a predictable monthly fee. Instead of waiting for problems
                  to occur, we prevent them.
                </p>
                <p>
                  We act as your fully integrated IT department, monitoring your systems 24/7 to ensure your business
                  runs efficiently, securely, and without interruption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference (Break-Fix vs Managed) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">The Difference</h2>
            <p className="text-slate-600 mt-4">Break-Fix vs. Managed Services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-red-100 bg-red-50/10 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <RefreshCcw className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">The Old Way (Break-Fix)</h3>
                <p className="text-slate-600">
                  You wait for a failure, suffer downtime while waiting for repairs, and pay unpredictable emergency
                  rates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-12 -mt-12 blur-xl" />
              <CardContent className="p-8 relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">The Enhance Tech Way</h3>
                <p className="text-slate-700 font-medium">
                  We detect and fix issues in the background before they impact you, all for a fixed, budget-friendly
                  monthly subscription.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Managed Offerings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 mb-4">Our Core Managed Offerings</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive solutions tailored to your business needs.</p>
          </div>

          <div className="space-y-32">
            {/* Service 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="order-2 lg:order-1 relative group h-fit lg:sticky lg:top-32">
                <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <img
                  src={managedItImg}
                  alt="Managed IT Services 3D Illustration"
                  className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500"
                />
              </div>
              <div className="order-1 lg:order-2">

                <h3 className="text-2xl font-bold text-slate-900 mb-2"> Managed IT Services</h3>
                <p className="text-lg font-medium text-blue-600 mb-6">"Your 24/7 Remote IT Department"</p>
                <p className="text-slate-600 mb-8">
                  We act as an extension of your team, providing enterprise-level IT management. By combining advanced
                  monitoring tools with a 24/7 helpdesk, we ensure your infrastructure runs smoothly.
                </p>

                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem
                    value="item-1"
                    className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors"
                  >
                    <AccordionTrigger className="text-slate-900 hover:text-primary hover:no-underline font-semibold text-left">
                      24/7 Helpdesk & Remote Support
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Instant access to expert engineers for remote resolution of day-to-day IT issues (desktops,
                      laptops, mobile devices).
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors"
                  >
                    <AccordionTrigger className="text-slate-900 hover:text-primary hover:no-underline font-semibold text-left">
                      Proactive System Monitoring
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      We use advanced RMM tools to detect server health, disk space, and performance issues before they
                      cause outages.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors"
                  >
                    <AccordionTrigger className="text-slate-900 hover:text-primary hover:no-underline font-semibold text-left">
                      Ticket Management
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Streamlined issue tracking and resolution using industry-leading platforms like Freshdesk and Halo
                      ITSM.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-4"
                    className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors"
                  >
                    <AccordionTrigger className="text-slate-900 hover:text-primary hover:no-underline font-semibold text-left">
                      Patch & Update Management
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Automated deployment of critical security updates for Windows, macOS, and third-party
                      applications.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-5"
                    className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors"
                  >
                    <AccordionTrigger className="text-slate-900 hover:text-primary hover:no-underline font-semibold text-left">
                      User Management
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      We handle all new employee on-boarding and off-boarding across Microsoft 365 and Zoho.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="order-1 lg:order-2 relative group h-fit lg:sticky lg:top-32">
                <div className="absolute inset-0 bg-purple-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <img
                  src={managedSecurityImg}
                  alt="Managed Cyber Security 3D Illustration"
                  className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500"
                />
              </div>
              <div className="order-2 lg:order-1">

                <h3 className="text-2xl font-bold text-slate-900 mb-2"> Managed Cyber Security</h3>
                <p className="text-lg font-medium text-purple-600 mb-6">"Continuous Protection Backed by a 24/7 SOC"</p>
                <p className="text-slate-600 mb-8">
                  Modern threats require more than just an antivirus. Our Managed Security service deploys a
                  multi-layered defense strategy designed to predict, prevent, and respond to cyber attacks.
                </p>

                <ul className="space-y-4">
                  {[
                    "24/7 Security Operations Center (SOC)",
                    "Next-Gen Endpoint Protection",
                    "Email Security",
                    "Vulnerability Assessments",
                    "Compliance Readiness",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="order-2 lg:order-1 relative group h-fit lg:sticky lg:top-32">
                <div className="absolute inset-0 bg-amber-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <img
                  src={consultancyImg}
                  alt="IT Consultancy 3D Illustration"
                  className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500"
                />
              </div>
              <div className="order-1 lg:order-2">

                <h3 className="text-2xl font-bold text-slate-900 mb-2"> IT Consultancy & Audit</h3>
                <p className="text-lg font-medium text-amber-600 mb-6">"Strategic Vision for Digital Growth"</p>
                <p className="text-slate-600 mb-8">
                  Technology should be an investment, not just a cost. Our consultants bridge the gap between technical
                  jargon and business goals.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "IT Infrastructure Audits",
                    "Digital Transformation Strategy",
                    "Budget Planning (CapEx vs. OpEx)",
                    "Disaster Recovery Planning",
                  ].map((item, idx) => (
                    <div key={idx} className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">{item}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-hero-gradient page-section-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-slate-300">Our 4-Step Onboarding Process</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: "Discovery & Audit",
                desc: "Full, non-intrusive scan of your network to understand assets and security posture.",
              },
              {
                icon: Map,
                title: "Strategic Roadmap",
                desc: "Report highlighting risks and a plan to fix them, with a roadmap for improvements.",
              },
              {
                icon: Rocket,
                title: "Deployment",
                desc: "Installation of management agents and security tools with zero disruption.",
              },
              {
                icon: Headphones,
                title: "Go Live & Support",
                desc: "Immediate access to our 24/7 helpdesk and proactive system management.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group text-center animate-fade-up"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300 ring-1 ring-slate-700">
                  <item.icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-slate-800 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Why Choose Enhance Tech?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Vendor Agnostic",
                desc: "We work with the best in the industry—Microsoft, Dell, Fortinet, and more.",
              },
              {
                title: "Local Expertise",
                desc: "Global standards delivered by a local team that understands your business.",
              },
              { title: "Transparent Pricing", desc: "No hidden fees. Just predictable, scalable IT costs." },
              {
                title: "Results Driven",
                desc: "Focus on boosting efficiency and enabling scalability for your business.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 text-center"
              >
                <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your IT Operations?</h2>
          <p className="text-lg text-blue-100 mb-10">
            Partner with Enhance Tech for reliable support and strategic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-primary font-bold hover:bg-white">
                Book Your Free Initial Audit Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


    </main>
  );
}
