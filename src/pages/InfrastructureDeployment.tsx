import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Server, Globe, Power, Lock, Ruler, Search, Settings, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Images
import networkImg from "@/assets/network-connectivity.png";
import serverImg from "@/assets/server-storage.png";
import cablingImg from "@/assets/structured-cabling.png";
import securityImg from "@/assets/managed-security.png"; // Reusing as placeholder/best fit

export default function InfrastructureDeployment() {
  return (
    <main className="min-h-screen page-bg-light overflow-x-hidden">
      <SEO
        title="IT Infrastructure Deployment, Cabling & Networking | Enhance Tech"
        description="Build a robust IT foundation with Enhance Tech. We specialize in structured cabling, enterprise Wi-Fi, server installation, and data center solutions using Aruba, Dell, and Legrand."
        keywords="Infrastructure Deployment, Structured Cabling, Enterprise Wi-Fi, Server Installation, Data Center Solutions, Dubai, UAE"
        canonicalUrl="https://itenhance.tech/services/infrastructure-deployment"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden page-section-blue">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />

        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 mb-6 animate-fade-up">
              Building the Backbone of Your Digital Business
            </h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-up animation-delay-200">
              A Robust Foundation for Scalable Growth
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-up animation-delay-400">
              <Link to="/contact">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/25">
                  Request a Site Survey
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
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
              <img
                src={serverImg}
                alt="Server Room Infrastructure"
                className="relative rounded-2xl shadow-2xl border border-slate-100"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-cyan-600 font-semibold tracking-wider uppercase text-sm">
                About Infrastructure Deployment
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Future-Proof Your Foundation</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Your software and cloud applications are only as good as the hardware they run on. A weak physical
                  infrastructure leads to slow connectivity, constant buffering, and costly outages.
                </p>
                <p>
                  Infrastructure Deployment is the physical engineering of your IT environment. From the cables in the
                  walls to the servers in the rack, Enhance Tech designs, installs, and configures the physical backbone
                  of your organization.
                </p>
                <p>
                  We ensure your facility is connected, powered, and secure, providing a "future-proof" foundation that
                  supports high-speed data transfer and seamless scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 mb-4">Our Infrastructure Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Enterprise-grade solutions for connectivity, storage, and security.
            </p>
          </div>

          <div className="space-y-32">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <img
                  src={networkImg}
                  alt="Network & Connectivity 3D Illustration"
                  className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 rotate-3 hover:rotate-6 transition-transform">
                  <Globe className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2"> Network & Connectivity Solutions</h3>
                <p className="text-lg font-medium text-cyan-600 mb-6">"High-Speed Enterprise Connectivity"</p>
                <p className="text-slate-600 mb-8">
                  We design intelligent network architectures that eliminate dead zones and ensure seamless roaming.
                  Whether you are a small office or a large campus, we deploy high-performance switching and Wi-Fi
                  solutions.
                </p>

                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem
                    value="item-1"
                    className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors"
                  >
                    <AccordionTrigger className="text-slate-900 hover:text-green-600 hover:no-underline font-semibold text-left">
                      Enterprise Wi-Fi Deployment
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Indoor and outdoor wireless access points (Wi-Fi 6/7) using leaders like Aruba and Ruijie.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors"
                  >
                    <AccordionTrigger className="text-slate-900 hover:text-green-600 hover:no-underline font-semibold text-left">
                      Switching & Routing
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Managed switches and core routers to optimize traffic flow and reduce latency.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors"
                  >
                    <AccordionTrigger className="text-slate-900 hover:text-green-600 hover:no-underline font-semibold text-left">
                      SD-WAN & Edge Networking
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Modernizing your wide-area network for better cloud application performance.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-4"
                    className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors"
                  >
                    <AccordionTrigger className="text-slate-900 hover:text-green-600 hover:no-underline font-semibold text-left">
                      Network Security Hardware
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Installation of next-gen firewalls (Fortinet/SonicWall) at the gateway level.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <img
                  src={serverImg}
                  alt="Server & Storage 3D Illustration"
                  className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500"
                />
              </div>
              <div className="order-2 lg:order-1">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 -rotate-3 hover:-rotate-6 transition-transform">
                  <Server className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2"> Server & Storage Implementation</h3>
                <p className="text-lg font-medium text-indigo-600 mb-6">"Data Center Grade Performance"</p>
                <p className="text-slate-600 mb-8">
                  We supply and configure the processing power your business needs. From single-tower servers to complex
                  rack-mounted clusters, we ensure your hardware is optimized.
                </p>

                <ul className="space-y-4">
                  {[
                    "Server Installation (Dell, Lenovo, HP)",
                    "Storage Solutions (SAN/NAS - Synology, QNAP)",
                    "Virtualization Setup (VMware/Hyper-V)",
                    "Rack Organization & Cable Management",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-1 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-orange-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <img
                  src={cablingImg}
                  alt="Structured Cabling 3D Illustration"
                  className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 rotate-3 hover:rotate-6 transition-transform">
                  <Power className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2"> Structured Cabling & Data Center Power</h3>
                <p className="text-lg font-medium text-orange-600 mb-6">"The Physical Veins of Your IT"</p>
                <p className="text-slate-600 mb-8">
                  Messy cabling is a major risk. We provide structured, labeled, and certified cabling solutions that
                  make troubleshooting easy and ensure maximum speed.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Structured Cabling (Cat6, Fiber)",
                    "Data Center Power (UPS, PDU)",
                    "Cooling & Environmental Monitoring",
                    "Patch Panel Management",
                  ].map((item, idx) => (
                    <div key={idx} className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">{item}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Solution 4 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-red-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <img
                  src={securityImg}
                  alt="Physical Security 3D Illustration"
                  className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500"
                />
              </div>
              <div className="order-2 lg:order-1">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 -rotate-3 hover:-rotate-6 transition-transform">
                  <Lock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2"> Physical Security Systems</h3>
                <p className="text-lg font-medium text-red-600 mb-6">"Protecting Your People and Premises"</p>
                <p className="text-slate-600 mb-8">
                  Infrastructure isn't just about data; it's about safety. We integrate physical security directly into
                  your network for centralized management.
                </p>

                <ul className="space-y-4">
                  {[
                    "CCTV Surveillance (HikVision, Dahua)",
                    "Access Control (HID, ZKTeco)",
                    "Time & Attendance Systems",
                    "Integrated Security Management",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 mt-1 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Deployment Process</h2>
            <p className="text-slate-300">From Blueprint to "Go Live"</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                icon: Search,
                title: "Site Survey",
                desc: "Map out floor plans and identify routes.",
              },
              {
                icon: Ruler,
                title: "Design",
                desc: "Detailed diagrams and hardware specs.",
              },
              {
                icon: Settings,
                title: "Installation",
                desc: "Clean cabling and hardware mounting.",
              },
              {
                icon: FileCheck,
                title: "Testing",
                desc: "Configuration and Fluke certification.",
              },
              {
                icon: CheckCircle2,
                title: "Handover",
                desc: "Full documentation and training.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative group text-center">
                <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300 ring-1 ring-slate-700">
                  <item.icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                {idx < 4 && (
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
              { title: "Top-Tier Partnerships", desc: "Authorized partners with Aruba, Dell, Legrand, and Vertiv." },
              { title: "Future-Ready Design", desc: "Networks that can handle tomorrow's bandwidth demands." },
              { title: "Neat & Professional", desc: "We take pride in our cable management. No messy wires." },
              { title: "End-to-End Solution", desc: "From the power outlet to the cloud connection." },
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
      <section className="py-24 bg-gradient-to-r from-cyan-500 to-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Infrastructure?</h2>
          <p className="text-lg text-cyan-100 mb-10">Build a foundation that supports your success.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-blue-600 font-bold hover:bg-white">
                Request a Site Survey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


    </main>
  );
}
