import { ArrowRight, CheckCircle2, Shield, Zap, Lock, Eye, Database, Server, Cloud, HardDrive, Activity, Globe, FileText, Search, Users, AlertTriangle, RefreshCw, ShieldCheck } from "lucide-react";
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
    transition: { duration: 0.6 }
};

const staggerContainer = {
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: 0.1
        }
    },
    viewport: { once: true }
};

export default function PreventDataLoss() {
    return (
        <main className="min-h-screen page-bg-light overflow-x-hidden relative">
            <SEO
                title="Prevent Data Loss: Resilience & Governance | Enhance Tech"
                description="Protect, backup, and control your data with Enhance Tech. Comprehensive DLP strategy featuring Acronis, Dropsuite, and Microsoft Purview for business continuity and compliance."
                keywords="Data Loss Prevention, DLP, Acronis, Dropsuite, Microsoft Purview, Backup, Data Governance, Business Continuity, Disaster Recovery"
                canonicalUrl="https://itenhance.tech/solutions/prevent-data-loss"
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
                    className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                                <Shield className="w-4 h-4 text-purple-400" />
                                <span className="text-sm font-semibold text-purple-100 uppercase tracking-wider">Data Protection</span>
                            </motion.div>
                            <motion.h1
                                {...fadeIn}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[1] tracking-tighter"
                            >
                                Prevent Data Loss <br className="hidden xl:block" />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-blue-400 to-cyan-300 animate-pulse-slow">
                                    Resilience & Governance
                                </span>
                            </motion.h1>
                            <motion.p
                                {...fadeIn}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
                            >
                                Enhance Your Data Strategy. <span className="text-white font-bold">Protect, Backup, and Control</span> your organization's most valuable asset.
                            </motion.p>
                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-6"
                            >
                                <Link to="/contact">
                                    <Button size="lg" className="bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_30px_-5px_rgba(147,51,234,0.4)] rounded-full px-12 h-20 text-xl font-black transition-all hover:scale-105 active:scale-95 group">
                                        Get Data Risk Assessment
                                        <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform" />
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md rounded-full px-12 h-20 text-xl font-bold transition-all border-2">
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
                            <div className="relative z-10 bg-slate-900/40 backdrop-blur-3xl p-1 rounded-[40px] border border-white/10 shadow-[0_0_50px_-12px_rgba(147,51,234,0.3)]">
                                <div className="bg-slate-950/60 p-8 rounded-[38px] border border-white/5">
                                    <div className="grid grid-cols-2 gap-6">
                                        {[
                                            { icon: Database, label: "Backup", value: "Acronis" },
                                            { icon: Cloud, label: "Cloud-to-Cloud", value: "Dropsuite" },
                                            { icon: ShieldCheck, label: "Governance", value: "MS Purview" },
                                            { icon: Activity, label: "Monitoring", value: "24/7 Managed" },
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group text-center">
                                                <div className="w-12 h-12 bg-purple-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                                    <stat.icon className="w-6 h-6 text-purple-400" />
                                                </div>
                                                <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">{stat.label}</p>
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
                                A Dual Approach <br />
                                to Data Protection
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p className="font-semibold text-slate-900">
                                    Data is your organization's most valuable asset.
                                </p>
                                <p>
                                    But protecting it requires a dual approach: ensuring you can recover it if systems fail, and ensuring it doesn't leak to unauthorized recipients.
                                </p>
                                <p>
                                    At Enhance Tech, we provide a holistic Data Loss Prevention (DLP) strategy. We combine robust backup solutions with advanced data governance to ensure your information is safe, compliant, and under control.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[40px] blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
                            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-100">
                                <img
                                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=60&w=1200&auto=format&fit=crop"
                                    alt="Data Protection Technology"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-24 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 rounded-full mb-4 border border-purple-500/20">
                            <Zap className="w-4 h-4 text-purple-600" />
                            <span className="text-xs font-extrabold text-purple-600 uppercase tracking-[0.2em]">Strategic Benefits</span>
                        </motion.div>
                        <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Key Benefits</motion.h2>
                        <motion.p {...fadeIn} className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Discover how comprehensive data protection transforms your operational security.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: RefreshCw, title: "Instant Business Continuity", desc: "Reduce downtime from days to minutes." },
                            { icon: Search, title: "Proactive Data Governance", desc: "Know exactly where your sensitive data lives and who is accessing it." },
                            { icon: AlertTriangle, title: "Prevent Accidental Leaks", desc: "Stop employees from sending sensitive files to personal emails or external drives." },
                            { icon: ShieldCheck, title: "Ransomware Immunity", desc: "Restore clean copies of data without paying ransoms." },
                            { icon: FileText, title: "Regulatory Compliance", desc: "Meet strict standards (GDPR, ISO, Regional Data Laws) with automated labeling." },
                            { icon: Globe, title: "Protection for Any Workload", desc: "Cover physical servers, cloud apps, and sensitive documents." },
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn}
                                whileHover={{
                                    scale: 1.05,
                                    y: -10,
                                    boxShadow: "0 20px 40px -15px rgba(147,51,234,0.3)"
                                }}
                                className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-10 border border-slate-100 group-hover:bg-purple-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                                        <benefit.icon className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-purple-600 transition-colors tracking-tight leading-tight">{benefit.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-base group-hover:text-slate-700 transition-colors font-medium">{benefit.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
                                What's Included
                            </h2>
                            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                                Comprehensive features designed to address your specific security needs.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Cloud & On-Premise Backup",
                                    "Microsoft 365 Data Loss Prevention (DLP)",
                                    "Information Protection & Sensitivity Labeling",
                                    "Disaster Recovery as a Service (DRaaS)",
                                    "Email Archiving & eDiscovery",
                                    "Insider Risk Management"
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-purple-50 hover:border-purple-200 transition-all cursor-default"
                                    >
                                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                                            <CheckCircle2 className="w-4 h-4 text-purple-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-slate-700 font-semibold text-sm group-hover:text-purple-700 transition-colors">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 p-1 rounded-[40px] shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=60&w=1200&auto=format&fit=crop"
                                alt="Data Analytics Dashboard"
                                className="rounded-[38px] opacity-80 group-hover:scale-105 transition-transform duration-1000"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technology Ecosystem */}
            <section className="py-24 bg-slate-950 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Our Technology Ecosystem</motion.h2>
                        <motion.p {...fadeIn} className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                            We enhance your data safety by partnering with global leaders in Backup and Governance.
                        </motion.p>
                    </div>

                    <div className="space-y-32">
                        {/* Acronis */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative lg:order-1"
                            >
                                <div className="absolute -inset-6 bg-cyan-600/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                                <motion.div
                                    whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02, transition: { duration: 0.4 } }}
                                    className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-cyan-500/10 overflow-hidden group shadow-2xl hover:border-cyan-500/30 transition-colors"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Database className="w-32 h-32 text-cyan-500" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="px-4 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full inline-block mb-6">
                                            <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-[10px]">Unified Cyber Protection</span>
                                        </div>
                                        <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-cyan-400 transition-colors">1. Acronis</h3>
                                        <p className="text-cyan-400/90 text-lg mb-8 font-medium italic">"Best for: Servers, Workstations, and Virtual Machines"</p>
                                        <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                            Acronis Cyber Protect is the infrastructure safety net. It protects your core systems—whether physical servers in your office or virtual machines in the cloud.
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                { title: "Universal Restore", desc: "Restore your entire system to completely different hardware or to the cloud." },
                                                { title: "Acronis Active Protection", desc: "AI-based technology that stops ransomware from encrypting your backup files." },
                                                { title: "Instant Boot", desc: "Run your backup as a virtual machine immediately during a crash." }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex gap-4 group/item">
                                                    <div className="w-1 h-auto bg-cyan-500/30 rounded-full group-hover/item:bg-cyan-500 transition-colors" />
                                                    <div>
                                                        <h4 className="font-bold text-white text-base group-hover/item:text-cyan-200 transition-colors">{item.title}</h4>
                                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:order-2"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=60&w=1200&auto=format&fit=crop"
                                    alt="Acronis Backup Solutions"
                                    className="rounded-[32px] shadow-2xl border border-white/5"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>

                        {/* Dropsuite */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative lg:order-2"
                            >
                                <div className="absolute -inset-6 bg-blue-600/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                                <motion.div
                                    whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02, transition: { duration: 0.4 } }}
                                    className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-blue-500/10 overflow-hidden group shadow-2xl hover:border-blue-500/30 transition-colors"
                                >
                                    <div className="absolute top-0 left-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Cloud className="w-32 h-32 text-blue-500" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full inline-block mb-6">
                                            <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-[10px]">Cloud-to-Cloud Backup</span>
                                        </div>
                                        <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-blue-400 transition-colors">2. Dropsuite</h3>
                                        <p className="text-blue-400/90 text-lg mb-8 font-medium italic">"Best for: Microsoft 365 & Google Workspace"</p>
                                        <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                            Microsoft ensures the infrastructure works, but your data is your responsibility. Dropsuite protects your cloud data from accidental deletion and corruption.
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                { title: "Automated Backup", desc: "Continuous backup of Emails, OneDrive, and SharePoint files multiple times a day." },
                                                { title: "1-Click Restore", desc: "Restore accidentally deleted folders instantly with original permissions intact." },
                                                { title: "Email Archiving", desc: "Tamper-proof archiving ready for legal discovery and audits." }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex gap-4 group/item text-right justify-end">
                                                    <div>
                                                        <h4 className="font-bold text-white text-base group-hover/item:text-blue-200 transition-colors">{item.title}</h4>
                                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                                    </div>
                                                    <div className="w-1 h-auto bg-blue-500/30 rounded-full group-hover/item:bg-blue-500 transition-colors" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:order-1"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=1200&auto=format&fit=crop"
                                    alt="Cloud Backup Solutions"
                                    className="rounded-[32px] shadow-2xl border border-white/5"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>

                        {/* Microsoft Purview */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative lg:order-1"
                            >
                                <div className="absolute -inset-6 bg-purple-600/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                                <motion.div
                                    whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02, transition: { duration: 0.4 } }}
                                    className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-purple-500/10 overflow-hidden group shadow-2xl hover:border-purple-500/30 transition-colors"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <ShieldCheck className="w-32 h-32 text-purple-500" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="px-4 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full inline-block mb-6">
                                            <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-[10px]">Data Governance & Compliance</span>
                                        </div>
                                        <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-purple-400 transition-colors">3. Microsoft Purview</h3>
                                        <p className="text-purple-400/90 text-lg mb-8 font-medium italic">"Best for: Data Classification, DLP, and Risk Management"</p>
                                        <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                            While Acronis and Dropsuite help you recover data, Microsoft Purview helps you control it. It provides visibility across your entire data estate.
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                { title: "Information Protection", desc: "Automatically classify documents as 'Confidential'—encryption travels with the file." },
                                                { title: "Data Loss Prevention (DLP)", desc: "Prevent sharing of credit card numbers, customer lists, or ID numbers via email." },
                                                { title: "Insider Risk Management", desc: "Detect resigning employees downloading proprietary data before they leave." },
                                                { title: "Compliance Manager", desc: "Simplify your journey to ISO 27001 or GDPR with automated assessments." }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex gap-4 group/item">
                                                    <div className="w-1 h-auto bg-purple-500/30 rounded-full group-hover/item:bg-purple-500 transition-colors" />
                                                    <div>
                                                        <h4 className="font-bold text-white text-base group-hover/item:text-purple-200 transition-colors">{item.title}</h4>
                                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:order-2"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=60&w=1200&auto=format&fit=crop"
                                    alt="Microsoft Purview Governance"
                                    className="rounded-[32px] shadow-2xl border border-white/5"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Enhance Advantage */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/3">
                            <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 rounded-full mb-6 border border-purple-200">
                                <Shield className="w-4 h-4 text-purple-600" />
                                <span className="text-[10px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 uppercase tracking-[0.3em]">The Enhance Advantage</span>
                            </motion.div>
                            <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
                                We Don't Just Backup. <br /> We Verify & Govern.
                            </motion.h2>
                            <motion.p {...fadeIn} className="text-slate-600 text-lg leading-relaxed">
                                Strategies fail without management. A backup is useless if it doesn't restore, and a DLP policy is useless if it blocks legitimate business.
                            </motion.p>
                        </div>

                        <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                            {[
                                { title: "Daily Success Monitoring", desc: "We watch your backup dashboards so you don't have to.", icon: Activity },
                                { title: "Policy Tuning", desc: "Configure Purview policies that secure data without frustrating employees.", icon: Lock },
                                { title: "Recovery Drills", desc: "Scheduled test restores to prove your data is recoverable when disaster strikes.", icon: RefreshCw },
                                { title: "Managed Resilience", desc: "At Enhance Secure, we manage the entire process for you.", icon: ShieldCheck }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 bg-slate-50 rounded-[32px] border border-slate-100 hover:bg-white hover:border-purple-500/30 hover:shadow-2xl transition-all duration-500 group shadow-sm"
                                >
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                                        <item.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient opacity-20" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Secure Your Data Today</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        Don't wait for a data leak or a system crash. Enhance your protection now.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-16 text-xl">
                                Get a Data Risk Assessment
                                <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="border-slate-700 text-white rounded-full px-12 h-16 text-xl hover:bg-slate-800">
                                Contact Our Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>


        </main>
    );
}
