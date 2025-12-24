import { ArrowRight, CheckCircle2, Shield, Zap, Lock, Eye, Database, Server, Cloud, HardDrive, Activity, Globe, FileText, Search, Users, AlertTriangle, RefreshCw, ShieldCheck, Settings, Network, Layers, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const fadeIn = {
    initial: {
        opacity: 0,
        y: 20
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    viewport: {
        once: true
    },
    transition: {
        duration: 0.6
    }
};

const staggerContainer = {
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: 0.1
        }
    },
    viewport: {
        once: true
    }
};

export default function ManageMicrosoft365() {
    return <main className="min-h-screen page-bg-light overflow-x-hidden relative">
        <SEO title="Manage Microsoft 365: Advanced Operations | Enhance Tech" description="Maximize your Microsoft 365 investment. Advanced management, migration, and governance with Microsoft, CoreView, and AvePoint." keywords="Microsoft 365 Management, CoreView, AvePoint, Cloud Governance, M365 Administration, Tenant Management, License Optimization" canonicalUrl="https://itenhance.tech/solutions/manage-microsoft-365" />

        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden page-section-blue">
            <div className="absolute inset-0 bg-hero-gradient opacity-95" />
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />

            {/* Animated Background Elements */}
            <motion.div animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
            }} transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }} className="absolute top-20 right-0 w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-[120px]" />
            <motion.div animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2]
            }} transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
            }} className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                            <Settings className="w-4 h-4 text-sky-400" />
                            <span className="text-sm font-semibold text-sky-100 uppercase tracking-wider">Microsoft 365 Management</span>
                        </motion.div>
                        <motion.h1 {...fadeIn} transition={{
                            delay: 0.1,
                            duration: 0.8
                        }} className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                            Manage Microsoft 365 <br className="hidden xl:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300 animate-pulse-slow">
                                Control & Governance
                            </span>
                        </motion.h1>
                        <motion.p {...fadeIn} transition={{
                            delay: 0.2,
                            duration: 0.8
                        }} className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                            Enhance Your Cloud. <span className="text-white font-bold">Secure, Manage, and Scale</span> your Microsoft 365 environment.
                        </motion.p>
                        <motion.div {...fadeIn} transition={{
                            delay: 0.3,
                            duration: 0.8
                        }} className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Link to="/contact">
                                <Button size="lg" className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-xl shadow-sky-500/25 rounded-2xl px-10 h-14 text-base font-bold transition-all hover:scale-105 active:scale-95 border-none">
                                    Get Governance Assessment
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button size="lg" className="border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/10 backdrop-blur-md rounded-2xl px-10 h-14 text-base font-medium transition-all hover:scale-105 active:scale-95 bg-transparent">
                                    Contact Cloud Team
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div initial={{
                        opacity: 0,
                        scale: 0.9,
                        y: 30
                    }} animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0
                    }} transition={{
                        duration: 1,
                        ease: "easeOut"
                    }} className="flex-1 relative hidden lg:block">
                        <div className="relative z-10 bg-slate-900/40 backdrop-blur-3xl p-1 rounded-[40px] border border-white/10 shadow-[0_0_50px_-12px_rgba(14,165,233,0.3)]">
                            <div className="bg-slate-950/60 p-8 rounded-[38px] border border-white/5">
                                <div className="grid grid-cols-2 gap-6">
                                    {[{
                                        icon: Layers,
                                        label: "Virtual Tenants",
                                        value: "CoreView"
                                    }, {
                                        icon: Cloud,
                                        label: "Migration",
                                        value: "AvePoint Fly"
                                    }, {
                                        icon: ShieldCheck,
                                        label: "Governance",
                                        value: "Automated"
                                    }, {
                                        icon: Activity,
                                        label: "Monitoring",
                                        value: "24/7 Managed"
                                    }].map((stat, i) => <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group text-center">
                                        <div className="w-12 h-12 bg-sky-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                            <stat.icon className="w-6 h-6 text-sky-400" />
                                        </div>
                                        <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                                            {stat.label}
                                        </p>
                                        <p className="text-white font-bold text-base xl:text-lg">{stat.value}</p>
                                    </div>)}
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
                            The Operating System <br />
                            of Modern Business
                        </h2>
                        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                            <p className="font-semibold text-slate-900">Microsoft 365 is powerful, but complexity grows with adoption.</p>
                            <p>
                                Native admin tools often lack the granularity needed for large or complex organizations, leading to "Teams Sprawl," security gaps, and wasted license costs.
                            </p>
                            <p>
                                At Enhance Tech, we go beyond basic support. We partner with the world's leading management platforms to provide deep visibility, automated governance, and perfected control over your tenant.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div initial={{
                        opacity: 0,
                        x: 20
                    }} whileInView={{
                        opacity: 1,
                        x: 0
                    }} viewport={{
                        once: true
                    }} className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-[40px] blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
                        <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50 p-8">
                            <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop" alt="Microsoft 365 3D Cloud Management" className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Key Benefits */}
        <section className="py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-500/10 rounded-full mb-4 border border-sky-500/20">
                        <Zap className="w-4 h-4 text-sky-600" />
                        <span className="text-xs font-extrabold text-sky-600 uppercase tracking-[0.2em]">
                            Strategic Benefits
                        </span>
                    </motion.div>
                    <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
                        Key Benefits
                    </motion.h2>
                    <motion.p {...fadeIn} className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Discover how advanced management tools transform your operations.
                    </motion.p>
                </div>

                <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{
                    once: true
                }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[{
                        icon: Layers,
                        title: "Virtual Tenant Segmentation",
                        desc: "Manage departments or subsidiaries as separate tenants without splitting your environment."
                    }, {
                        icon: UserCheck,
                        title: "Delegated Administration",
                        desc: "Allow Help Desk to manage users without dangerous Global Admin rights."
                    }, {
                        icon: RefreshCw,
                        title: "Automated Governance",
                        desc: "Auto-archive inactive Teams or require approval for new SharePoint sites."
                    }, {
                        icon: Database,
                        title: "License Optimization",
                        desc: "Identify and remove unused licenses to cut costs instantly."
                    }, {
                        icon: Cloud,
                        title: "Seamless Migration",
                        desc: "Move email and files from legacy systems with zero data loss or downtime."
                    }, {
                        icon: Settings,
                        title: "Zero-Touch Deployment",
                        desc: "Ship laptops directly with Windows Autopilot and Intune."
                    }].map((benefit, i) => <motion.div key={i} variants={fadeIn} whileHover={{
                        scale: 1.05,
                        y: -10,
                        boxShadow: "0 20px 40px -15px rgba(14,165,233,0.3)"
                    }} className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-10 border border-slate-100 group-hover:bg-sky-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                                <benefit.icon className="w-10 h-10 text-sky-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-sky-600 transition-colors tracking-tight leading-tight">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-base group-hover:text-slate-700 transition-colors font-medium">
                                {benefit.desc}
                            </p>
                        </div>
                    </motion.div>)}
                </motion.div>
            </div>
        </section>

        {/* What's Included */}
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div initial={{
                        opacity: 0,
                        x: -20
                    }} whileInView={{
                        opacity: 1,
                        x: 0
                    }} viewport={{
                        once: true
                    }}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
                            What's Included
                        </h2>
                        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                            A complete suite of services to manage your digital workspace.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["Microsoft 365 & Intune Management", "Virtual Tenants & Segmentation (CoreView)", "Advanced RBAC & Delegation", "Automated Governance (AvePoint)", "Migration Services (Fly)", "License Optimization & Reporting"].map((item, idx) => <motion.div key={idx} initial={{
                                opacity: 0,
                                y: 10
                            }} whileInView={{
                                opacity: 1,
                                y: 0
                            }} viewport={{
                                once: true
                            }} transition={{
                                delay: idx * 0.1
                            }} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-sky-50 hover:border-sky-200 transition-all cursor-default">
                                <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center group-hover:bg-sky-600 transition-colors">
                                    <CheckCircle2 className="w-4 h-4 text-sky-600 group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-slate-700 font-semibold text-sm group-hover:text-sky-700 transition-colors">
                                    {item}
                                </span>
                            </motion.div>)}
                        </div>
                    </motion.div>
                    <motion.div initial={{
                        opacity: 0,
                        scale: 0.9
                    }} whileInView={{
                        opacity: 1,
                        scale: 1
                    }} viewport={{
                        once: true
                    }} className="bg-gradient-to-br from-blue-900/20 to-slate-900/20 p-8 rounded-[40px] shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop" alt="Microsoft 365 3D Management Dashboard" className="rounded-[38px] w-full object-contain group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Technology Ecosystem */}
        <section className="py-24 bg-slate-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
                        Our Technology Ecosystem
                    </motion.h2>
                    <motion.p {...fadeIn} className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        We enhance your Microsoft environment by layering the world's best management and governance tools on top of the native platform.
                    </motion.p>
                </div>

                <div className="space-y-32">
                    {/* Microsoft */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{
                            opacity: 0,
                            x: -20
                        }} whileInView={{
                            opacity: 1,
                            x: 0
                        }} viewport={{
                            once: true
                        }} className="relative lg:order-1">
                            <div className="absolute -inset-6 bg-blue-600/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                            <motion.div whileHover={{
                                rotateY: -5,
                                rotateX: 2,
                                scale: 1.02,
                                transition: {
                                    duration: 0.4
                                }
                            }} className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-blue-500/10 overflow-hidden group shadow-2xl hover:border-blue-500/30 transition-colors">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Server className="w-32 h-32 text-blue-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full inline-block mb-6">
                                        <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                                            Modern Workplace & Device Management
                                        </span>
                                    </div>
                                    <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-blue-400 transition-colors">
                                        1. The Foundation: Microsoft
                                    </h3>
                                    <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                        We start by maximizing the native capabilities of your subscription. We configure Microsoft Intune and Autopilot to secure your devices and deploy applications automatically over the cloud.
                                    </p>
                                    <div className="space-y-6">
                                        {[{
                                            title: "Intune (MDM)",
                                            desc: "Manage and wipe corporate data on employee phones and laptops."
                                        }, {
                                            title: "Autopilot",
                                            desc: "Zero-touch provisioning for new computers—straight from the box to productivity."
                                        }, {
                                            title: "Security Baselines",
                                            desc: "Implementation of MFA, Conditional Access, and Defender to harden the tenant."
                                        }].map((item, idx) => <div key={idx} className="flex gap-4 group/item">
                                            <div className="w-1 h-auto bg-blue-500/30 rounded-full group-hover/item:bg-blue-500 transition-colors" />
                                            <div>
                                                <h4 className="font-bold text-white text-base group-hover/item:text-blue-200 transition-colors">
                                                    {item.title}
                                                </h4>
                                                <p className="text-slate-400 text-sm">{item.desc}</p>
                                            </div>
                                        </div>)}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{
                            opacity: 0,
                            x: 20
                        }} whileInView={{
                            opacity: 1,
                            x: 0
                        }} viewport={{
                            once: true
                        }} className="lg:order-2 bg-gradient-to-br from-blue-900/20 to-slate-900/20 p-6 rounded-[32px]">
                            <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&auto=format&fit=crop" alt="Microsoft 365 3D Platform" className="rounded-[24px] shadow-2xl border border-white/5 w-full object-contain" loading="lazy" />
                        </motion.div>
                    </div>

                    {/* CoreView */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{
                            opacity: 0,
                            x: 20
                        }} whileInView={{
                            opacity: 1,
                            x: 0
                        }} viewport={{
                            once: true
                        }} className="relative lg:order-2">
                            <div className="absolute -inset-6 bg-cyan-600/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                            <motion.div whileHover={{
                                rotateY: 5,
                                rotateX: 2,
                                scale: 1.02,
                                transition: {
                                    duration: 0.4
                                }
                            }} className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-cyan-500/10 overflow-hidden group shadow-2xl hover:border-cyan-500/30 transition-colors">
                                <div className="absolute top-0 left-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Layers className="w-32 h-32 text-cyan-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="px-4 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full inline-block mb-6">
                                        <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                                            The #1 Microsoft 365 Management Platform
                                        </span>
                                    </div>
                                    <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                                        2. Advanced Administration: CoreView
                                    </h3>
                                    <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                        For organizations that need more control than the native Admin Center offers, CoreView is the answer. It acts as a wrapper around your tenant to improve security and efficiency.
                                    </p>
                                    <div className="space-y-6">
                                        {[{
                                            title: "Virtual Tenants",
                                            desc: "Segment your single Microsoft tenant into 'Virtual Tenants' so local IT admins can only see their users."
                                        }, {
                                            title: "Perfected Delegation (RBAC)",
                                            desc: "Grant granular permissions to support team (e.g., 'Can reset passwords for Marketing only')."
                                        }, {
                                            title: "License Optimization Pools",
                                            desc: "Automatically reclaim licenses from inactive users and recycle them."
                                        }].map((item, idx) => <div key={idx} className="flex gap-4 group/item text-right justify-end">
                                            <div>
                                                <h4 className="font-bold text-white text-base group-hover/item:text-cyan-200 transition-colors">
                                                    {item.title}
                                                </h4>
                                                <p className="text-slate-400 text-sm">{item.desc}</p>
                                            </div>
                                            <div className="w-1 h-auto bg-cyan-500/30 rounded-full group-hover/item:bg-cyan-500 transition-colors" />
                                        </div>)}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{
                            opacity: 0,
                            x: -20
                        }} whileInView={{
                            opacity: 1,
                            x: 0
                        }} viewport={{
                            once: true
                        }} className="lg:order-1 bg-gradient-to-br from-cyan-900/20 to-slate-900/20 p-6 rounded-[32px]">
                            <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop" alt="CoreView 3D Management Analytics" className="rounded-[24px] shadow-2xl border border-white/5 w-full object-contain" loading="lazy" />
                        </motion.div>
                    </div>

                    {/* AvePoint */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{
                            opacity: 0,
                            x: -20
                        }} whileInView={{
                            opacity: 1,
                            x: 0
                        }} viewport={{
                            once: true
                        }} className="relative lg:order-1">
                            <div className="absolute -inset-6 bg-emerald-600/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                            <motion.div whileHover={{
                                rotateY: -5,
                                rotateX: 2,
                                scale: 1.02,
                                transition: {
                                    duration: 0.4
                                }
                            }} className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-emerald-500/10 overflow-hidden group shadow-2xl hover:border-emerald-500/30 transition-colors">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <ShieldCheck className="w-32 h-32 text-emerald-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full inline-block mb-6">
                                        <span className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                                            Confidence in Collaboration
                                        </span>
                                    </div>
                                    <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                                        3. Data Governance & Migration: AvePoint
                                    </h3>
                                    <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                        AvePoint is the industry standard for keeping your collaboration environment clean, compliant, and backed up.
                                    </p>
                                    <div className="space-y-6">
                                        {[{
                                            title: "Fly Migration",
                                            desc: "Fast, reliable engine to migrate emails, files, and chat history from legacy systems into Microsoft 365."
                                        }, {
                                            title: "Cloud Governance",
                                            desc: "Stop 'Teams Sprawl.' Automate lifecycle of workspaces by auto-archiving Teams unused for 6 months."
                                        }, {
                                            title: "Policy Enforcement",
                                            desc: "Prevent users from creating Teams with non-compliant names or external sharing settings."
                                        }].map((item, idx) => <div key={idx} className="flex gap-4 group/item">
                                            <div className="w-1 h-auto bg-emerald-500/30 rounded-full group-hover/item:bg-emerald-500 transition-colors" />
                                            <div>
                                                <h4 className="font-bold text-white text-base group-hover/item:text-emerald-200 transition-colors">
                                                    {item.title}
                                                </h4>
                                                <p className="text-slate-400 text-sm">{item.desc}</p>
                                            </div>
                                        </div>)}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{
                            opacity: 0,
                            x: 20
                        }} whileInView={{
                            opacity: 1,
                            x: 0
                        }} viewport={{
                            once: true
                        }} className="lg:order-2 bg-gradient-to-br from-emerald-900/10 to-transparent p-1 rounded-[32px] border border-white/5 shadow-2xl overflow-hidden group">
                            <div className="relative aspect-video rounded-[24px] overflow-hidden">
                                <iframe
                                    src="https://player.vimeo.com/video/970670509?h=2c25a5abca&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
                                    className="absolute inset-0 w-[101%] h-[101%] -left-[0.5%] -top-[0.5%] pointer-events-none"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    title="AvePoint Data Management Solution"
                                />
                            </div>
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
                        <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100 rounded-full mb-6 border border-sky-200">
                            <Shield className="w-4 h-4 text-sky-600" />
                            <span className="text-[10px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 uppercase tracking-[0.3em]">
                                The Enhance Advantage
                            </span>
                        </motion.div>
                        <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
                            We Don't Just Sell Tools. <br /> We Operate Them.
                        </motion.h2>
                        <motion.p {...fadeIn} className="text-slate-600 text-lg leading-relaxed">
                            Tools like CoreView and AvePoint are powerful, but they require expertise to configure. At Enhance Tech, our certified engineers manage the ecosystem for you.
                        </motion.p>
                    </div>

                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                        {[{
                            title: "Policy Configuration",
                            desc: "We set up the governance rules that keep your environment clean.",
                            icon: Settings
                        }, {
                            title: "Migration Management",
                            desc: "We handle the heavy lifting of moving your data to the cloud using AvePoint Fly.",
                            icon: Cloud
                        }, {
                            title: "Security Audits",
                            desc: "We use CoreView to run deep forensic audits on user activity to detect anomalies.",
                            icon: Eye
                        }, {
                            title: "Managed Operations",
                            desc: "At Enhance Secure, we manage the entire process for you with 24/7 monitoring.",
                            icon: Activity
                        }].map((item, i) => <motion.div key={i} initial={{
                            opacity: 0,
                            y: 20
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: true
                        }} transition={{
                            delay: i * 0.1
                        }} className="p-10 bg-slate-50 rounded-[32px] border border-slate-100 hover:bg-white hover:border-sky-500/30 hover:shadow-2xl transition-all duration-500 group shadow-sm">
                            <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6 border border-sky-500/20 group-hover:bg-sky-600 group-hover:scale-110 transition-all duration-300">
                                <item.icon className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-sky-600 transition-colors uppercase tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                                {item.desc}
                            </p>
                        </motion.div>)}
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-gradient opacity-20" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
                    Take Control of Your Tenant
                </h2>
                <p className="text-xl text-slate-300 mb-10">
                    Stop the chaos. Enhance your management capabilities today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-16 text-xl">
                            Get a Governance Assessment
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button size="lg" variant="outline" className="border-slate-700 text-white rounded-full px-12 h-16 text-xl hover:bg-slate-800">
                            Contact Our Cloud Team
                        </Button>
                    </Link>
                </div>
            </div>
        </section>


    </main>;
}
