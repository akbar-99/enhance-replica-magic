import {
    ArrowRight,
    CheckCircle2,
    Shield,
    Zap,
    Lock,
    Eye,
    Database,
    Server,
    Cloud,
    HardDrive,
    Activity,
    Globe,
    FileText,
    Search,
    Users,
    AlertTriangle,
    RefreshCw,
    ShieldCheck,
    Box,
    BarChart3,
    Workflow,
    Briefcase,
    Cpu,
    Headphones,
    Layers,
    Network,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

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

export default function StreamlineITOperations() {
    return (
        <main className="min-h-screen page-bg-light overflow-x-hidden relative">
            <SEO
                title="Streamline IT Operations: ITSM & Enterprise Efficiency"
                description="Optimize your IT lifecycle with Enhance Tech. We implement Freshworks and Halo ITSM to unify Service Management, Asset Tracking, and Operations into one seamless platform."
                keywords="IT Operations, ITSM, ITOM, Freshworks, HaloITSM, Asset Management, ITIL, Automation, Helpdesk"
                canonicalUrl="https://itenhance.tech/solutions/streamline-it-operations"
            />

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden page-section-blue">
                <div className="absolute inset-0 bg-hero-gradient opacity-95" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />

                {/* Animated Background Elements */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                {...fadeIn}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20"
                            >
                                <Activity className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm font-semibold text-cyan-100 uppercase tracking-wider">
                                    Operational Maturity
                                </span>
                            </motion.div>
                            <motion.h1
                                {...fadeIn}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tighter"
                            >
                                Streamline <br className="hidden xl:block" />
                                IT Operations:
                                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 animate-pulse-slow">
                                    Efficiency & Control
                                </span>
                            </motion.h1>
                            <motion.p
                                {...fadeIn}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
                            >
                                Enhance Your Operational Maturity.{" "}
                                <span className="text-white font-bold">Unify Service, Assets, and Projects</span> in one seamless
                                platform.
                            </motion.p>
                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-4"
                            >
                                <Link to="/demo">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-blue-500/25 rounded-2xl px-10 h-14 text-base font-bold transition-all hover:scale-105 active:scale-95 border-none"
                                    >
                                        Book a Live Demo
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button
                                        size="lg"
                                        className="border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/10 backdrop-blur-md rounded-2xl px-10 h-14 text-base font-medium transition-all hover:scale-105 active:scale-95 bg-transparent"
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
                            <div className="relative z-10 p-1 rounded-[40px] shadow-[0_0_50px_-12px_rgba(8,145,178,0.3)]">
                                <img
                                    src="/lovable-uploads/it_operations_hero.png"
                                    alt="Unified IT Operations"
                                    className="rounded-[38px] border border-white/10 w-full h-auto object-cover"
                                />
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
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
                                Beyond "IT Support"
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p className="font-semibold text-slate-900">
                                    True operational efficiency means having total control over your services, assets, and workflows.
                                </p>
                                <p>
                                    In a complex digital environment, "IT Support" is just one piece of the puzzle. If your teams are
                                    juggling disparate tools for ticketing, inventory, and projects, operational drag is inevitable.
                                </p>
                                <p>
                                    At Enhance Tech, we help you move from reactive support to proactive operations. We implement unified
                                    IT Operations Management (ITOM) and Service Management (ITSM) platforms that act as the central
                                    nervous system for your technology department.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[40px] blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
                            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-100">
                                <img
                                    src="/lovable-uploads/automation_workflow.png"
                                    alt="IT Automation Workflow"
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
                        <motion.div
                            {...fadeIn}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 rounded-full mb-4 border border-blue-500/20"
                        >
                            <Zap className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-[0.2em]">Key Benefits</span>
                        </motion.div>
                        <motion.h2
                            {...fadeIn}
                            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600"
                        >
                            Why Streamline Operations?
                        </motion.h2>
                        <motion.p {...fadeIn} className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Discover how streamlining operations transforms business agility.
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
                            {
                                icon: Eye,
                                title: "Unified Visibility",
                                desc: "Eliminate 'swivel-chair' effect. Centralize tickets, projects, and assets in one pane of glass.",
                            },
                            {
                                icon: HardDrive,
                                title: "Total Asset Lifecycle",
                                desc: "Track every hardware, software, and contract from procurement to disposal.",
                            },
                            {
                                icon: Workflow,
                                title: "Automated Workflows",
                                desc: "Standardize onboarding, approvals, and patching. Reduce overhead by 40%.",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Seamless Service Delivery (ITIL)",
                                desc: "Align with best practices. Standardize Incidents, Changes, and Problems.",
                            },
                            {
                                icon: BarChart3,
                                title: "Data-Driven Strategy",
                                desc: "Track SLA performance, utilization, and budget with visual dashboards.",
                            },
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn}
                                whileHover={{
                                    scale: 1.05,
                                    y: -10,
                                    boxShadow: "0 20px 40px -15px rgba(8,145,178,0.3)",
                                }}
                                className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-10 border border-slate-100 group-hover:bg-cyan-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                                        <benefit.icon className="w-10 h-10 text-cyan-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-cyan-600 transition-colors tracking-tight leading-tight">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed text-base group-hover:text-slate-700 transition-colors font-medium">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 bg-white relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            {...fadeIn}
                            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600"
                        >
                            What's Included
                        </motion.h2>
                        <motion.p {...fadeIn} className="text-slate-600 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
                            A comprehensive suite designed to professionalize your entire IT operation.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Service Operations */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 rounded-[32px] p-8 border border-slate-200 hover:border-cyan-300 transition-colors duration-300"
                        >
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                <Headphones className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-slate-900">Service Operations</h3>
                            <ul className="space-y-4">
                                {[
                                    { title: "Incident & Problem Mgmt", desc: "Resolve disruptions faster and fix root causes." },
                                    { title: "Change Enablement", desc: "Control infrastructure changes to minimize risk." },
                                    { title: "SLA Management", desc: "Automated tracking of response/resolution targets." },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold text-slate-800">{item.title}</div>
                                            <div className="text-sm text-slate-500">{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Asset & Resource */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-50 rounded-[32px] p-8 border border-slate-200 hover:border-purple-300 transition-colors duration-300"
                        >
                            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                                <Box className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-slate-900">Asset & Resource Mgmt</h3>
                            <ul className="space-y-4">
                                {[
                                    { title: "Hardware Inventory", desc: "Track laptops, servers, and mobiles lifecycle." },
                                    { title: "Software License Mgmt", desc: "Monitor usage and compliance to optimize costs." },
                                    { title: "Vendor & Contract Mgmt", desc: "Alerts for warranty expirations and renewals." },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold text-slate-800">{item.title}</div>
                                            <div className="text-sm text-slate-500">{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Automation & Project */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-50 rounded-[32px] p-8 border border-slate-200 hover:border-emerald-300 transition-colors duration-300"
                        >
                            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                                <Cpu className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-slate-900">Automation & Project</h3>
                            <ul className="space-y-4">
                                {[
                                    { title: "Service Catalog", desc: "Unified portal for hardware, software, requests." },
                                    { title: "Project Management", desc: "Manage IT projects within the same support tool." },
                                    { title: "AI & Chatbots", desc: "Virtual agents to deflect routine queries." },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold text-slate-800">{item.title}</div>
                                            <div className="text-sm text-slate-500">{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technology Ecosystem */}
            <section className="py-24 bg-slate-950 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <motion.h2
                            {...fadeIn}
                            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                        >
                            Our Technology Ecosystem
                        </motion.h2>
                        <motion.p {...fadeIn} className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                            We partner with the industry leaders in Unified Service Management.
                        </motion.p>
                    </div>

                    <div className="space-y-32">
                        {/* Freshworks */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative lg:order-1"
                            >
                                <div className="absolute -inset-6 bg-mint-500/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                                <motion.div
                                    whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02, transition: { duration: 0.4 } }}
                                    className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-cyan-500/10 overflow-hidden group shadow-2xl hover:border-cyan-500/30 transition-colors"
                                >
                                    <div className="relative z-10">
                                        <div className="px-4 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full inline-block mb-6">
                                            <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-[10px]">AI-Powered</span>
                                        </div>
                                        <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                                            Freshworks (Freshservice)
                                        </h3>
                                        <p className="text-cyan-400/90 text-lg mb-8 font-medium italic">
                                            "The AI-Powered, User-First Platform"
                                        </p>
                                        <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                            Freshworks redefines IT operations with an interface that requires minimal training. It combines
                                            powerful ITOM capabilities with a user experience that employees actually enjoy.
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                {
                                                    title: "Core Strengths",
                                                    desc: "Rapid deployment and high adoption rates due to consumer-grade design.",
                                                },
                                                {
                                                    title: "AI Operations",
                                                    desc: "'Freddy AI' auto-suggests fixes and analyzes trends to predict incidents.",
                                                },
                                                {
                                                    title: "Orchestration",
                                                    desc: "Connects with Azure/AWS to automate actions like restarting servers.",
                                                },
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex gap-4 group/item">
                                                    <div className="w-1 h-auto bg-cyan-500/30 rounded-full group-hover/item:bg-cyan-500 transition-colors" />
                                                    <div>
                                                        <h4 className="font-bold text-white text-base group-hover/item:text-cyan-200 transition-colors">
                                                            {item.title}
                                                        </h4>
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
                                    src="/lovable-uploads/freshworks_concept.png"
                                    alt="Freshworks Interface"
                                    className="rounded-[32px] shadow-2xl border border-white/5"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>

                        {/* Halo ITSM */}
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
                                    <div className="relative z-10">
                                        <div className="px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full inline-block mb-6">
                                            <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                                                All-Inclusive Platform
                                            </span>
                                        </div>
                                        <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-blue-400 transition-colors">
                                            Halo ITSM
                                        </h3>
                                        <p className="text-blue-400/90 text-lg mb-8 font-medium italic">
                                            "The All-Inclusive Operations Platform"
                                        </p>
                                        <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                            Halo ITSM is a powerhouse for organizations that want everything in one place. It eliminates the
                                            need for separate Project Management or Asset tools.
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                {
                                                    title: "Core Strengths",
                                                    desc: "Deep customization and an all-inclusive model (Projects, Assets, and Service Desk).",
                                                },
                                                {
                                                    title: "Advanced Workflow Engine",
                                                    desc: "Digitize complex approval hierarchies and operational processes.",
                                                },
                                                {
                                                    title: "Integrations",
                                                    desc: "Central hub for all your IT tools (RMM, ERP, Cloud) via native connectors.",
                                                },
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex gap-4 group/item text-right justify-end">
                                                    <div>
                                                        <h4 className="font-bold text-white text-base group-hover/item:text-blue-200 transition-colors">
                                                            {item.title}
                                                        </h4>
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
                                    src="/lovable-uploads/halo_itsm_concept.png"
                                    alt="Halo ITSM Interface"
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
                            <motion.div
                                {...fadeIn}
                                className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 rounded-full mb-6 border border-blue-200"
                            >
                                <Shield className="w-4 h-4 text-blue-600" />
                                <span className="text-[10px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 uppercase tracking-[0.3em]">
                                    The Enhance Advantage
                                </span>
                            </motion.div>
                            <motion.h2
                                {...fadeIn}
                                className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600"
                            >
                                We Don't Just Implement Software. <br /> We Build Process.
                            </motion.h2>
                            <motion.p {...fadeIn} className="text-slate-600 text-lg leading-relaxed">
                                A tool is only as good as the process it supports. Dropping a new software into a chaotic environment
                                just digitizes the chaos.
                            </motion.p>
                        </div>

                        <div className="lg:w-2/3 grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Process Engineering",
                                    desc: "We 'enhance' workflows to align with ITIL best practices before configuration.",
                                    icon: Layers,
                                },
                                {
                                    title: "Adoption Strategy",
                                    desc: "We train your agents and end-users to ensure the system is used effectively.",
                                    icon: Users,
                                },
                                {
                                    title: "Ecosystem Integration",
                                    desc: "We connect Operations with Security and Backup for a seamless data flow.",
                                    icon: Network,
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:bg-white hover:border-cyan-500/30 hover:shadow-2xl transition-all duration-500 group shadow-sm"
                                >
                                    <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:bg-cyan-600 group-hover:scale-110 transition-all duration-300">
                                        <item.icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-600 transition-colors uppercase tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                                        {item.desc}
                                    </p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                        Transform Your IT Operations Today
                    </h2>
                    <p className="text-xl text-slate-300 mb-10">
                        Move beyond firefighting. Enhance your operational control now.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/demo">
                            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-full px-12 h-16 text-xl">
                                Book a Live Demo
                                <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-slate-700 text-white rounded-full px-12 h-16 text-xl hover:bg-slate-800"
                            >
                                Contact Our Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>


        </main>
    );
}
