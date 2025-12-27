
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Users,
  MessageSquare,
  Smartphone,
  Laptop,
  LayoutGrid,
  MonitorPlay,
  Wifi,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Reusing existing assets to maintain visual consistency and overcome generation limits
import modernWorkplaceImg from "@/assets/features/modern-workplace.webp";
import cloudImg from "@/assets/consultancy.webp"; // Abstract flow fits Cloud
import meetingImg from "@/assets/server-storage.webp"; // Tech hardware fits Meeting Rooms
import commsImg from "@/assets/managed-it.webp"; // General IT/People fits Communications
import securityImg from "@/assets/network-connectivity.webp"; // Connectivity fits Remote Access

export default function WorkplaceModernization() {
  return (
    <main className="min-h-screen page-bg-light overflow-x-hidden">
      <SEO
        title="Workplace Modernization, Cloud Migration & M365 | Enhance Tech"
        description="Transform your operations with Enhance Tech. We specialize in Microsoft 365 migration, hybrid meeting room setups (Poly/Logitech), and secure remote collaboration tools."
        keywords="Workplace Modernization, Cloud Migration, Microsoft 365, Hybrid Meetings, Remote Work, Dubai, UAE"
        canonicalUrl="https://itenhance.tech/services/workplace-modernization"
      />


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden page-section-blue">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />

        {/* Animated Background Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-500 mb-6 animate-fade-up">
              Transform Your Daily Operations with Secure Cloud & Collaboration Tools
            </h1>
            <p className="text-xl text-slate-300 mb-8 animate-fade-up animation-delay-200">
              The Office isn't a Place. It's a Capability.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-up animation-delay-400">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25"
                >
                  Schedule a Modern Workplace Assessment
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
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Office Collaboration"
                className="relative rounded-2xl shadow-2xl border border-slate-100"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
                About Workplace Modernization
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Work From Anywhere, Securely</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  The way we work has changed forever. Rigid, on-premise servers and isolated workstations are slowing
                  down business growth. To compete today, your team needs the freedom to collaborate securely from
                  anywhere, on any device.
                </p>
                <p>
                  Workplace Modernization is the process of moving your legacy systems to the cloud and equipping your
                  staff with modern tools. Enhance Tech helps you build a "Digital Headquarters."
                </p>
                <p>
                  We migrate your data to the cloud, integrate seamless communication platforms, and set up smart
                  meeting rooms that bridge the gap between remote and in-office employees.
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
            <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 mb-4">Our Modernization Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive tools for the hybrid workforce.</p>
          </div>

          <div className="space-y-32">
            {/* Solution 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-purple-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <img
                  src="/lovable-uploads/cloud-migration.webp"
                  alt="Cloud Migration Digital Art"
                  className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500 w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 rotate-3 hover:rotate-6 transition-transform">
                  <Cloud className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2"> Cloud Migration & Management</h3>
                <p className="text-lg font-medium text-purple-600 mb-6">"Seamless Transition to the Cloud"</p>
                <p className="text-slate-600 mb-8">
                  Move your critical business data out of the server room and into the secure cloud. We handle complex
                  migrations with zero data loss, ensuring your files and emails are accessible 24/7.
                </p>

                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem
                    value="item-1"
                    className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors"
                  >
                    <AccordionTrigger className="text-slate-900 hover:text-purple-600 hover:no-underline font-semibold text-left">
                      Microsoft 365 Migration
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Expert migration of email, files, and apps to the Microsoft 365 ecosystem using AvePoint.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors"
                  >
                    <AccordionTrigger className="text-slate-900 hover:text-purple-600 hover:no-underline font-semibold text-left">
                      Zoho Workplace Setup
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Implementation of Zoho’s suite for mail, CRM, and projects.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors"
                  >
                    <AccordionTrigger className="text-slate-900 hover:text-purple-600 hover:no-underline font-semibold text-left">
                      M365 Governance
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Advanced management with CoreView to manage licenses and secure your tenant.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-4"
                    className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors"
                  >
                    <AccordionTrigger className="text-slate-900 hover:text-purple-600 hover:no-underline font-semibold text-left">
                      Cloud Backup
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Ensuring data is backed up independently using Dropsuite or Acronis.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <img
                  src="/lovable-uploads/meeting-room.webp"
                  alt="Modern Conference Room"
                  className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500 w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="order-2 lg:order-1">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 -rotate-3 hover:-rotate-6 transition-transform">
                  <MonitorPlay className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2"> Smart Meeting Rooms & Audio-Visual</h3>
                <p className="text-lg font-medium text-emerald-600 mb-6">"Bridge the Gap Between Home & Office"</p>
                <p className="text-slate-600 mb-8">
                  Hybrid meetings often suffer from poor audio. We design professional meeting spaces where every voice
                  is heard and every face is seen.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Microsoft Teams Rooms",
                    "Video Conferencing (Poly, Logitech)",
                    "Room Scheduling Systems",
                    "Interactive Displays",
                  ].map((item, idx) => (
                    <div key={idx} className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">{item}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <img
                  src="/lovable-uploads/unified-comms.webp"
                  alt="Unified Communications Video Call"
                  className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500 w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 rotate-3 hover:rotate-6 transition-transform">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2"> Unified Communications</h3>
                <p className="text-lg font-medium text-blue-600 mb-6">"Connect Your Teams Instantly"</p>
                <p className="text-slate-600 mb-8">
                  Replace old desk phones and scattered chat apps with a single, unified platform. We integrate voice,
                  video, and chat so your team can communicate without barriers.
                </p>

                <ul className="space-y-4">
                  {[
                    "Microsoft Teams Phone System",
                    "SharePoint Intranets",
                    "Collaboration Devices (Headsets, Webcams)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solution 4 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <img
                  src="/lovable-uploads/remote-work.webp"
                  alt="Secure Remote Work"
                  className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500 w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="order-2 lg:order-1">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 -rotate-3 hover:-rotate-6 transition-transform">
                  <Wifi className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2"> Secure Remote Access</h3>
                <p className="text-lg font-medium text-indigo-600 mb-6">"Work Securely from Anywhere"</p>
                <p className="text-slate-600 mb-8">
                  Flexibility shouldn't compromise security. We ensure that your company data remains protected, even
                  when accessed from coffee shops or home networks.
                </p>

                <ul className="space-y-4">
                  {[
                    "Identity & Access Management (MFA, SSO)",
                    "Mobile Device Management (Intune)",
                    "Secure File Sharing Policies",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-1 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Modernization Approach</h2>
            <p className="text-slate-300">A Strategy Designed for Adoption</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Assessment",
                desc: "Analyze workflows to identify bottlenecks like VPN issues.",
              },
              {
                title: "Migration Planning",
                desc: "Strategy to minimize downtime with zero data loss.",
              },
              {
                title: "Deployment",
                desc: "Configure cloud environment and install hardware.",
              },
              {
                title: "Training",
                desc: "Train staff on Teams, OneDrive, and new tools.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors duration-300 group"
              >
                <h3 className="text-xl font-bold mb-3 text-purple-400 group-hover:text-purple-300">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Why Modernize with Enhance Tech?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Certified Expertise", desc: "Specialists in M365 management and migration tools." },
              { title: "Hardware Agnostic", desc: "Partner with Poly, Logitech, Yealink to fit your budget." },
              { title: "Security First", desc: "Secure data with Bitdefender and Proofpoint layers." },
              { title: "End-to-End Support", desc: "From license purchase to final cable installation." },
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
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Empower Your Workforce?</h2>
          <p className="text-lg text-purple-100 mb-10">
            Transform the way you work with secure cloud and collaboration tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto text-purple-600 font-bold hover:bg-white"
              >
                Schedule a Modern Workplace Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


    </main>
  );
}
