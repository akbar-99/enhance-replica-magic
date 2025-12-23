import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Lock,
  Eye,
  Laptop,
  Server,
  Mail,
  Search,
  Activity,
  Globe,
  Cpu,
  Terminal,
  Layers,
  ShieldAlert,
  Monitor,
  Users,
  Bell,
  FileText,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

export default function StopCyberThreats() {
  return (
    <main className="min-h-screen page-bg-light overflow-x-hidden relative">
      <SEO
        title="Stop Cyber Threats: Comprehensive Security Ecosystem | Enhance Secure"
        description="Protect your business with the Enhance Secure ecosystem. Integrated defense featuring Bitdefender, Sorb, Vircom, and Veriato—monitored 24/7 by our dedicated SOC."
        keywords="Cybersecurity, Bitdefender, Sorb Security, Vircom, Veriato, SOC, Endpoint Security, Email Security, Insider Risk"
        canonicalUrl="https://itenhance.tech/solutions/stop-cyber-threats"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden page-section-blue">
        <div className="absolute inset-0 bg-hero-gradient opacity-95" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />

        {/* Animated Background Elements */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                {...fadeIn}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20"
              >
                <ShieldAlert className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-100 uppercase tracking-wider">
                  360° Business Protection
                </span>
              </motion.div>
              <motion.h1
                {...fadeIn}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[1] tracking-tighter"
              >
                Stop Cyber Threats <br className="hidden xl:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 animate-pulse-slow">
                  Comprehensive Ecosystem
                </span>
              </motion.h1>
              <motion.p
                {...fadeIn}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
              >
                Secure Your Endpoints, Email, and Workforce with{" "}
                <span className="text-white font-bold">Enhance Secure</span>. A multi-layered strategy for today's
                digital landscape.
              </motion.p>
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6"
              >
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] rounded-full px-12 h-20 text-xl font-black transition-all hover:scale-105 active:scale-95 group"
                  >
                    Free Security Consultation
                    <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md rounded-full px-12 h-20 text-xl font-bold transition-all border-2"
                  >
                    Contact Our Team
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative hidden lg:block"
            >
              <div className="relative z-10 bg-slate-900/40 backdrop-blur-3xl p-1 rounded-[40px] border border-white/10 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
                <div className="bg-slate-950/60 p-8 rounded-[38px] border border-white/5">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Laptop, label: "Endpoints", value: "Bitdefender" },
                      { icon: Mail, label: "Email Protection", value: "Sorb & Vircom" },
                      { icon: Users, label: "Insider Risk", value: "Veriato" },
                      { icon: Activity, label: "24/7 SOC", value: "Expert Monitoring" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group text-center"
                      >
                        <div className="w-12 h-12 bg-blue-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <stat.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                          {stat.label}
                        </p>
                        <p className="text-white font-bold text-base xl:text-lg">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
                Integrated Defense <br />
                for a Borderless Landscape
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p className="font-semibold text-slate-900">
                  Ransomware, Phishing, and Insider Threats are universal risks.
                </p>
                <p>
                  In today’s interconnected digital landscape, cyber threats recognize no borders. From sophisticated
                  ransomware targeting enterprises to automated phishing attacks hitting small businesses, the risk is
                  universal. To truly secure your organization, you need a multi-layered strategy that protects your
                  devices, filters your communication, and monitors internal risks.
                </p>
                <p>
                  At Enhance Tech, we have curated a portfolio of world-class technologies to stop cyber threats before
                  they disrupt your business operations.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-[40px] blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=60&w=1200&auto=format&fit=crop"
                  alt="Security Operations Center"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. Bitdefender Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-6 bg-red-600/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-white p-10 rounded-[48px] border border-slate-200 overflow-hidden group shadow-2xl"
              >
                <div className="px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full inline-block mb-6">
                  <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-[10px]">
                    Endpoint Security
                  </span>
                </div>
                <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-slate-900">Bitdefender</h3>
                <p className="text-red-500 text-xl mb-8 font-semibold">Ironclad Defense with GravityZone</p>
                <p className="text-slate-600 mb-10 leading-relaxed">
                  Laptops, servers, and mobile devices are the primary entry points for attackers. We utilize
                  Bitdefender GravityZone, a global leader in security tests, to provide your first line of defense.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Ransomware Mitigation",
                      desc: "Automatic detection and instant file rollback from secure cache.",
                    },
                    { title: "Network Attack Defense", desc: "Blocks brute force attacks and server exploits." },
                    { title: "HyperDetect™", desc: "Machine learning that spots 'fileless' attacks in memory." },
                    { title: "Lightweight Performance", desc: "Security that won't slow down your team." },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
                Beyond Antivirus. <br /> Predictive AI.
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Unlike traditional antivirus that relies on outdated "signatures," Bitdefender uses advanced AI to
                predict and block attacks in real-time.
              </p>
              <div className="inline-flex items-center gap-4 p-4 bg-white rounded-3xl border border-slate-200 shadow-lg">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/30">
                  <Laptop className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Global Leader</p>
                  <p className="text-xs text-slate-500">Verified by Independent Lab Tests</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Sorb Security Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
                Stop Phishing & <br /> BEC Fraud
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Email is the #1 attack vector. Sorb Security provides a critical layer designed to stop sophisticated
                phishing attacks that human eyes often miss.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Dynamic Sandboxing",
                  "Credential Shield",
                  "Impersonation Protection",
                  "Regional Threat Intelligence",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-blue-500/5 rounded-full blur-3xl" />
              <Card className="relative bg-slate-900 border-none rounded-[40px] overflow-hidden shadow-2xl">
                <CardContent className="p-12">
                  <div className="flex items-center gap-6 mb-8 border-b border-white/10 pb-8">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Sorb Security</h3>
                      <p className="text-blue-400 font-medium">Advanced Email Security</p>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-white font-bold mb-2">Impersonation Protection</h4>
                      <p className="text-slate-400 text-sm">
                        Detects variations like <code className="text-blue-300">c0mpany.com</code> to prevent CEO fraud
                        and fake invoice scams.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">GCC Threat Intelligence</h4>
                      <p className="text-slate-400 text-sm">
                        Tailored Specifically for threats prevalent in the Middle East and GCC region.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Vircom Section */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              {...fadeIn}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 rounded-full mb-4 border border-cyan-500/20"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-[0.2em]">
                Hygiene & Compliance
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Vircom (modusCloud)</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Eliminate Spam & Authenticate Your Identity. Seamlessly "enhance" your native Microsoft 365 security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bell,
                title: "99.9% Spam Capture",
                desc: "Keeps junk mail and bulk marketing out of your inbox.",
              },
              {
                icon: Activity,
                title: "Email Continuity",
                desc: "Secure emergency portal during Microsoft 365 outages.",
              },
              { icon: Globe, title: "DMARC/DKIM", desc: "Brand protection against domain spoofing and fake emails." },
              {
                icon: Lock,
                title: "DLP & Encryption",
                desc: "Automated encryption for sensitive financial or personal data.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-[32px] hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Veriato Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-indigo-900 rounded-[48px] p-12 text-white relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="relative z-10">
                <Users className="w-16 h-16 text-indigo-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-4xl font-extrabold mb-4">Veriato</h3>
                <p className="text-indigo-300 font-bold text-xl mb-6 italic">Insider Risk Management</p>
                <p className="text-indigo-100 text-lg mb-10 leading-relaxed">
                  Sometimes the threat isn't a hacker; it's negligence or intent from within. Veriato gives you "eyes on
                  glass" visibility.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Psycholinguistic AI",
                      desc: "Analyze sentiment to detect disgruntled behavior before leaks.",
                    },
                    {
                      title: "User Behavior Analytics",
                      desc: "Alerts for anomalies like client list downloads at 2 AM.",
                    },
                    {
                      title: "Forensic Screen Recording",
                      desc: "Irrefutable evidence for security incidents or HR disputes.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-2 h-auto bg-indigo-400/30 rounded-full" />
                      <div>
                        <h4 className="font-bold text-white text-base">{item.title}</h4>
                        <p className="text-indigo-200 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
                Visibility, <br /> & Data Loss Prevention
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Whether your team is in-office or remote, Veriato ensures your data remains protected and your workforce
                stays focused on high-value tasks.
              </p>
              <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[32px] hover:shadow-xl transition-shadow">
                <h4 className="text-indigo-900 font-bold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Productivity Optimization
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Analyze workflow patterns (Active vs. Idle time) to ensure your remote and on-site teams are
                  performing optimally.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. SOC Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              {...fadeIn}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/10 rounded-full mb-4 border border-blue-600/20"
            >
              <Activity className="w-4 h-4 text-blue-600" />
              <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-[0.2em]">
                The Human Element
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900">
              The Enhance Advantage: 24x7 SOC
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We Don't Just Deploy. We Watch. Attackers strike when you’re away—our SOC stays awake.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-10 bg-white rounded-[40px] border border-slate-200 shadow-lg group transition-all"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Always-On Surveillance</h3>
              <p className="text-slate-500 leading-relaxed">
                Tools generate alerts, but we filter the noise. We monitor endpoints, networks, and cloud 24/7/365.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-10 bg-blue-600 rounded-[40px] text-white shadow-xl shadow-blue-600/20 group transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Rapid Incident Response</h3>
              <p className="text-blue-50/90 leading-relaxed">
                Immediate action to isolate infected devices and block malicious IPs—often before you even know an
                attack happened.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-10 bg-white rounded-[40px] border border-slate-200 shadow-lg group transition-all"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Compliance Reporting</h3>
              <p className="text-slate-500 leading-relaxed">
                Detailed monthly reports on security posture, essential for ISO, GDPR, and regional mandates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
            Ready to Enhance Your Security?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Don't manage four different vendors. Manage one trusted partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-16 text-xl">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-white rounded-full px-12 h-16 text-xl hover:bg-slate-800"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>


    </main>
  );
}
