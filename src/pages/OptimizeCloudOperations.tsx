import { ArrowRight, CheckCircle2, Cloud, Shield, Zap, Layout, Eye, Laptop, Server, Database, Users, Lock, BarChart3, Settings2, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
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

const listItemVariants = {
    initial: { opacity: 0, x: -10 },
    whileInView: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 }
    },
    viewport: { once: true }
};

export default function OptimizeCloudOperations() {
    // Mouse parallax effect for hero background
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const moveX = clientX - window.innerWidth / 2;
        const moveY = clientY - window.innerHeight / 2;
        mouseX.set(moveX);
        mouseY.set(moveY);
    };

    const blobTranslateX1 = useTransform(mouseX, [-500, 500], [-30, 30]);
    const blobTranslateY1 = useTransform(mouseY, [-500, 500], [-30, 30]);
    const blobTranslateX2 = useTransform(mouseX, [-500, 500], [40, -40]);
    const blobTranslateY2 = useTransform(mouseY, [-500, 500], [40, -40]);

    const titleRotateX = useTransform(mouseY, [-500, 500], [5, -5]);
    const titleRotateY = useTransform(mouseX, [-500, 500], [-5, 5]);

    return (
        <main
            className="min-h-screen page-bg-light overflow-x-hidden"
            onMouseMove={handleMouseMove}
        >
            <SEO
                title="Optimize Cloud Operations: Azure & Microsoft 365 | Enhance Tech"
                description="Maximize your Microsoft Cloud ROI with Enhance Tech. Optimize Azure infrastructure, streamline Microsoft 365 management, and control cloud costs."
                keywords="Cloud Operations, Azure Management, Microsoft 365 Optimization, Cloud Cost Control, FinOps, Dubai IT Solutions"
                canonicalUrl="https://itenhance.tech/solutions/optimize-cloud-operations"
            />

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden page-section-blue">
                <div className="absolute inset-0 bg-hero-gradient opacity-95" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />

                {/* Animated Background Elements with Mouse Parallax */}
                <motion.div
                    style={{ x: blobTranslateX1, y: blobTranslateY1 }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
                />
                <motion.div
                    style={{ x: blobTranslateX2, y: blobTranslateY2 }}
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                                <Sparkles className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm font-semibold text-cyan-100 uppercase tracking-wider">Cloud Excellence</span>
                            </motion.div>
                            <motion.h1
                                {...fadeIn}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
                            >
                                Optimize Cloud Operations: <br className="hidden xl:block" />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400">Control & Efficiency</span>
                            </motion.h1>
                            <motion.p
                                {...fadeIn}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
                            >
                                Enhance Your Cloud Strategy. Simplify Management and Maximize ROI. Transform your infrastructure from a complex burden into a scalable asset.
                            </motion.p>
                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-5"
                            >
                                <Link to="/demo">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 rounded-full px-10 h-16 text-lg font-bold transition-all hover:scale-105 active:scale-95">
                                        Get a Cloud Health Check
                                        <ArrowRight className="ml-2 h-6 w-6" />
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-md rounded-full px-10 h-16 text-lg font-medium transition-all">
                                        Contact Our Cloud Team
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
                            <div className="relative z-10 bg-slate-900/40 backdrop-blur-3xl p-1 rounded-[40px] border border-white/10 shadow-[0_0_50px_-12px_rgba(34,211,238,0.2)]">
                                <div className="bg-slate-950/60 p-8 rounded-[38px] border border-white/5">
                                    <div className="grid grid-cols-2 gap-6">
                                        {[
                                            { icon: Cloud, label: "Azure Infrastructure", value: "99.9% Uptime" },
                                            { icon: BarChart3, label: "Cost Savings", value: "Avg. 35% Redux" },
                                            { icon: Shield, label: "Security Compliance", value: "Fully Automated" },
                                            { icon: Zap, label: "Automation", value: "Zero-Touch" },
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group text-center">
                                                <div className="w-12 h-12 bg-cyan-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                                    <stat.icon className="w-6 h-6 text-cyan-400" />
                                                </div>
                                                <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">{stat.label}</p>
                                                <p className="text-white font-bold text-base xl:text-lg">{stat.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Floating icon */}
                            <motion.div
                                animate={{ y: [-20, 20, -20] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 p-6 bg-primary/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
                            >
                                <Cloud className="w-12 h-12 text-white" />
                            </motion.div>
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
                                Beyond Migration: <br />
                                Taming Cloud Complexity
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    Moving to the cloud is only the first step. The real challenge is managing it effectively. Without proper optimization, businesses face <span className="text-slate-900 font-semibold underline decoration-primary/30 decoration-2 underline-offset-4">"cloud sprawl"</span>—uncontrolled costs, security gaps, and administrative complexity.
                                </p>
                                <p>
                                    At Enhance Tech, we help you tame the complexity. We provide the expertise to streamline your Microsoft environment, automate tedious tasks, and ensure you are only paying for the resources you actually use.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-[40px] blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
                            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-100">
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                    alt="Cloud Computing Visualization"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
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
                        <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-4 border border-primary/20">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-xs font-extrabold text-primary uppercase tracking-[0.2em]">Business Impact</span>
                        </motion.div>
                        <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Key Benefits</motion.h2>
                        <motion.p {...fadeIn} className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Discover how optimized cloud operations transform your IT efficiency and bottom line.
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
                            { icon: Database, title: "Eliminate Waste", desc: "Identify and remove unused licenses and 'zombie' servers to reduce cloud spend instantly." },
                            { icon: Layout, title: "Streamlined Administration", desc: "Control all your devices and users from a single unified cloud dashboard." },
                            { icon: Zap, title: "Seamless Scalability", desc: "Scale your server power up or down instantly based on your real-time business demand." },
                            { icon: Lock, title: "Automated Governance", desc: "Enforce security policies automatically (e.g., 'Block logins from outside the UAE')." },
                            { icon: Eye, title: "Enhanced Visibility", desc: "See exactly who is doing what across your entire cloud environment with detailed auditing." },
                            { icon: Laptop, title: "Zero-Touch Deployment", desc: "Set up new employee laptops automatically over Wi-Fi without any IT intervention." },
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="bg-white p-8 rounded-[32px] border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary transition-all duration-500 group-hover:rotate-6 shadow-sm">
                                        <benefit.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors tracking-tight">{benefit.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-600 transition-colors">{benefit.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Technology Ecosystem */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Our Tech Ecosystem</motion.h2>
                        <motion.p {...fadeIn} className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            We enhance your cloud efficiency by leveraging the full power of the Microsoft Cloud stack.
                        </motion.p>
                    </div>

                    <div className="space-y-32">
                        {/* Azure */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -inset-6 bg-blue-500/10 rounded-[50px] blur-3xl" />
                                <div className="relative bg-slate-900 p-12 rounded-[48px] border border-white/5 overflow-hidden group shadow-2xl">
                                    <Cloud className="absolute top-0 right-0 w-80 h-80 text-blue-500/5 -mr-24 -mt-24 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-1000" />
                                    <div className="relative z-10 text-white">
                                        <div className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full inline-block mb-6">
                                            <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-[10px]">Cloud Core</span>
                                        </div>
                                        <h3 className="text-3xl font-extrabold mb-4 tracking-tight">Microsoft Azure</h3>
                                        <p className="text-cyan-400/80 text-lg mb-10 font-medium italic">"Scalable, Secure Computing"</p>
                                        <motion.div
                                            variants={staggerContainer}
                                            initial="initial"
                                            whileInView="whileInView"
                                            viewport={{ once: true }}
                                            className="space-y-8"
                                        >
                                            {[
                                                { title: "Azure Virtual Desktop", desc: "Deliver a secure Windows experience to any device, anywhere." },
                                                { title: "Server Migration", desc: "Retire aging hardware. We migrate SQL and DCs with zero data loss." },
                                                { title: "Cost Optimization", desc: "Active monitoring ensures you never overpay for idle resources." }
                                            ].map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    variants={listItemVariants}
                                                    className="flex gap-5 group/item p-4 -m-4 rounded-2xl hover:bg-white/5 transition-colors cursor-default"
                                                >
                                                    <div className="w-1.5 h-auto bg-gradient-to-b from-cyan-400 to-transparent rounded-full group-hover/item:from-white transition-colors" />
                                                    <div>
                                                        <h4 className="font-bold text-white mb-1.5 text-lg group-hover/item:text-cyan-300 transition-colors">{item.title}</h4>
                                                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-slate-600 space-y-8"
                            >
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-bold text-slate-900">Infrastructure Reimagined</h4>
                                    <p className="text-lg leading-relaxed">
                                        We help you move your heavy on-premise servers into the agile world of Azure. Whether you are lifting and shifting legacy applications or building modern cloud-native apps, we ensure your infrastructure is optimized for performance and cost.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 font-bold text-sm text-center text-primary shadow-sm hover:bg-white hover:border-primary/20 transition-all uppercase tracking-widest">FinOps Ready</div>
                                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 font-bold text-sm text-center text-primary shadow-sm hover:bg-white hover:border-primary/20 transition-all uppercase tracking-widest">Cloud-Native</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Microsoft 365 */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:order-2 relative"
                            >
                                <div className="absolute -inset-6 bg-sky-500/10 rounded-[50px] blur-3xl" />
                                <div className="relative bg-slate-900 p-12 rounded-[48px] border border-white/5 overflow-hidden group shadow-2xl">
                                    <Layout className="absolute top-0 right-0 w-80 h-80 text-sky-500/5 -mr-24 -mt-24 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000" />
                                    <div className="relative z-10 text-white">
                                        <div className="px-4 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full inline-block mb-6">
                                            <span className="text-sky-400 font-bold tracking-[0.3em] uppercase text-[10px]">Productivity</span>
                                        </div>
                                        <h3 className="text-3xl font-extrabold mb-4 tracking-tight">Microsoft 365</h3>
                                        <p className="text-sky-400/80 text-lg mb-10 font-medium italic">"Productivity & Collaboration"</p>
                                        <motion.div
                                            variants={staggerContainer}
                                            initial="initial"
                                            whileInView="whileInView"
                                            viewport={{ once: true }}
                                            className="space-y-8"
                                        >
                                            {[
                                                { title: "Teams & SharePoint", desc: "Architected for discoverability, security, and automated backups." },
                                                { title: "License Management", desc: "Active analysis ensures you aren't paying for features you don't use." },
                                                { title: "Identity Security", desc: "SSO and MFA configuration to secure user identities flawlessly." }
                                            ].map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    variants={listItemVariants}
                                                    className="flex gap-5 group/item p-4 -m-4 rounded-2xl hover:bg-white/5 transition-colors cursor-default"
                                                >
                                                    <div className="w-1.5 h-auto bg-gradient-to-b from-sky-400 to-transparent rounded-full group-hover/item:from-white transition-colors" />
                                                    <div>
                                                        <h4 className="font-bold text-white mb-1.5 text-lg group-hover/item:text-sky-300 transition-colors">{item.title}</h4>
                                                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:order-1 text-slate-600 space-y-8"
                            >
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-bold text-slate-900">Unlock Full Value</h4>
                                    <p className="text-lg leading-relaxed">
                                        Most businesses use less than 20% of the Microsoft 365 features they pay for. We help you unlock the full value of your subscription, turning it from just "Email" into a complete operating system for your business.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 font-bold text-sm text-center text-primary shadow-sm hover:bg-white hover:border-primary/20 transition-all uppercase tracking-widest">Secure-by-Design</div>
                                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 font-bold text-sm text-center text-primary shadow-sm hover:bg-white hover:border-primary/20 transition-all uppercase tracking-widest">Global Reach</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Intune */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -inset-6 bg-indigo-500/10 rounded-[50px] blur-3xl" />
                                <div className="relative bg-slate-900 p-12 rounded-[48px] border border-white/5 overflow-hidden group shadow-2xl">
                                    <Laptop className="absolute top-0 right-0 w-80 h-80 text-indigo-500/5 -mr-24 -mt-24 transform group-hover:scale-110 transition-all duration-1000" />
                                    <div className="relative z-10 text-white">
                                        <div className="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full inline-block mb-6">
                                            <span className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-[10px]">Fleet Management</span>
                                        </div>
                                        <h3 className="text-3xl font-extrabold mb-4 tracking-tight">Microsoft Intune</h3>
                                        <p className="text-indigo-400/80 text-lg mb-10 font-medium italic">"Control Your Device Fleet"</p>
                                        <motion.div
                                            variants={staggerContainer}
                                            initial="initial"
                                            whileInView="whileInView"
                                            viewport={{ once: true }}
                                            className="space-y-8"
                                        >
                                            {[
                                                { title: "Windows Autopilot", desc: "New laptops install company settings automatically upon first boot." },
                                                { title: "Mobile Management", desc: "Secure company data on employee phones with selective wiping." },
                                                { title: "Patch Compliance", desc: "Automatic fleet-wide updates close security loops without friction." }
                                            ].map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    variants={listItemVariants}
                                                    className="flex gap-5 group/item p-4 -m-4 rounded-2xl hover:bg-white/5 transition-colors cursor-default"
                                                >
                                                    <div className="w-1.5 h-auto bg-gradient-to-b from-indigo-400 to-transparent rounded-full group-hover/item:from-white transition-colors" />
                                                    <div>
                                                        <h4 className="font-bold text-white mb-1.5 text-lg group-hover/item:text-indigo-300 transition-colors">{item.title}</h4>
                                                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-slate-600 space-y-8"
                            >
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-bold text-slate-900">Modern Device Control</h4>
                                    <p className="text-lg leading-relaxed">
                                        The days of manually installing software on every computer are over. We use Microsoft Intune to manage your devices purely from the cloud, ensuring consistency, security, and ease of deployment.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 font-bold text-sm text-center text-primary shadow-sm hover:bg-white hover:border-primary/20 transition-all uppercase tracking-widest">Remote-First</div>
                                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 font-bold text-sm text-center text-primary shadow-sm hover:bg-white hover:border-primary/20 transition-all uppercase tracking-widest">Auto-Scale</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Enhance Advantage */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient opacity-30" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/3">
                            <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 rounded-full mb-6 border border-cyan-500/20">
                                <Shield className="w-4 h-4 text-cyan-400" />
                                <span className="text-[10px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 uppercase tracking-[0.3em]">The Enhance Advantage</span>
                            </motion.div>
                            <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">We Don't Just Setup. <br /> We Fine-Tune.</motion.h2>
                            <motion.p {...fadeIn} className="text-slate-400 text-lg leading-relaxed">
                                A cloud environment is a living thing—it grows and changes every day. Enhance Tech provides ongoing optimization to ensure it stays efficient, secure and scalable.
                            </motion.p>
                        </div>

                        <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                            {[
                                { title: "Quarterly Health Checks", desc: "We review your security score and usage trends to recommend configuration improvements." },
                                { title: "FinOps (Cost Analysis)", desc: "We provide detailed reports on your cloud spend to prevent budget 'bill shock'." },
                                { title: "Migration Project Management", desc: "From Google Workspace or on-premise Exchange, we handle all data heavy lifting." },
                                { title: "Continuous Optimization", desc: "Ongoing tuning of your environment to match evolving business needs." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 bg-white/5 backdrop-blur-sm rounded-[32px] border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-500 group shadow-lg"
                                >
                                    <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:scale-110 transition-all duration-300">
                                        <CheckCircle2 className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-300 transition-colors uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Optimize Your Cloud Today</motion.h2>
                    <motion.p {...fadeIn} className="text-xl text-slate-600 mb-10">
                        Stop paying for resources you don't use. Enhance your efficiency now with a professional health check.
                    </motion.p>
                    <motion.div
                        {...fadeIn}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/contact">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg">
                                Get a Cloud Health Check
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="border-slate-300 rounded-full px-10 h-14 text-lg hover:bg-slate-50">
                                Contact Our Cloud Team
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>


        </main>
    );
}
