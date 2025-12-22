import { ArrowRight, CheckCircle2, Cloud, Shield, Zap, Layout, Eye, Laptop, Server, Database, Users, Lock, BarChart3, Settings2, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

export default function OptimizeCloudOperations() {
    return (
        <main className="min-h-screen page-bg-light overflow-x-hidden">
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

                {/* Animated Background Elements */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
                />
                <motion.div
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
                                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                            >
                                Optimize Cloud Operations: <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">Control & Efficiency</span>
                            </motion.h1>
                            <motion.p
                                {...fadeIn}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl"
                            >
                                Enhance Your Cloud Strategy. Simplify Management and Maximize ROI. Transform your infrastructure from a complex burden into a scalable asset.
                            </motion.p>
                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-4"
                            >
                                <Link to="/demo">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 rounded-full px-8 h-14 text-lg">
                                        Get a Cloud Health Check
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-8 h-14 text-lg">
                                        Contact Our Cloud Team
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 relative hidden lg:block"
                        >
                            <div className="relative z-10 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-2xl p-8 rounded-[40px] border border-white/10 shadow-3xl">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: Cloud, label: "Azure Infrastructure", value: "99.9% Uptime" },
                                        { icon: BarChart3, label: "Cost Savings", value: "Avg. 35% reduction" },
                                        { icon: Shield, label: "Security Compliance", value: "Automated" },
                                        { icon: Zap, label: "Automation", value: "Zero-Touch" },
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                                            <stat.icon className="w-8 h-8 text-cyan-400 mb-3" />
                                            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">{stat.label}</p>
                                            <p className="text-white font-bold text-lg">{stat.value}</p>
                                        </div>
                                    ))}
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
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                                Beyond Migration: <br />
                                <span className="text-primary">Taming the Complexity of the Cloud</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    Moving to the cloud is only the first step. The real challenge is managing it effectively. Without proper optimization, businesses face <span className="text-slate-900 font-bold">"cloud sprawl"</span>—uncontrolled costs, security gaps, and administrative complexity.
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
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                alt="Cloud Computing Visualization"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-24 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold text-primary uppercase tracking-wider">Business Impact</span>
                        </motion.div>
                        <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Benefits</motion.h2>
                        <motion.p {...fadeIn} className="text-slate-600 max-w-2xl mx-auto text-lg">
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
                                className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                            >
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <benefit.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Technology Ecosystem */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Technology Ecosystem</motion.h2>
                        <motion.p {...fadeIn} className="text-slate-600 max-w-2xl mx-auto text-lg">
                            We enhance your cloud efficiency by leveraging the full power of the Microsoft Cloud stack.
                        </motion.p>
                    </div>

                    <div className="space-y-20">
                        {/* Azure */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-blue-500/10 rounded-[40px] blur-2xl" />
                                <div className="relative bg-slate-900 p-10 rounded-[40px] border border-white/5 overflow-hidden group">
                                    <Cloud className="absolute top-0 right-0 w-64 h-64 text-blue-500/5 -mr-20 -mt-20 transform group-hover:scale-110 transition-transform duration-700" />
                                    <div className="relative z-10 text-white">
                                        <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-4 block">Section 01</span>
                                        <h3 className="text-3xl font-bold mb-4">Cloud Infrastructure: Microsoft Azure</h3>
                                        <p className="text-slate-400 text-lg mb-8 italic">"Scalable, Secure Computing"</p>
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <div className="w-1 h-auto bg-cyan-400 rounded-full" />
                                                <div>
                                                    <h4 className="font-bold text-white mb-1">Azure Virtual Desktop (AVD)</h4>
                                                    <p className="text-slate-400 text-sm italic">Deliver a secure Windows experience to any device, anywhere.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-1 h-auto bg-cyan-400 rounded-full" />
                                                <div>
                                                    <h4 className="font-bold text-white mb-1">Server Migration</h4>
                                                    <p className="text-slate-400 text-sm italic">Retire aging hardware. We migrate SQL, File Servers, and DCs with zero data loss.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-1 h-auto bg-cyan-400 rounded-full" />
                                                <div>
                                                    <h4 className="font-bold text-white mb-1">Cost Optimization</h4>
                                                    <p className="text-slate-400 text-sm italic">Active "Right-Sizing" monitoring ensures you never overpay for idle resources.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-slate-600 leading-relaxed space-y-4"
                            >
                                <p className="text-lg">
                                    We help you move your heavy on-premise servers into the agile world of Azure. Whether you are lifting and shifting legacy applications or building modern cloud-native apps, we ensure your infrastructure is optimized for performance and cost.
                                </p>
                                <div className="pt-4 grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 italic text-sm">FinOps Ready</div>
                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 italic text-sm">Cloud-Native Focus</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Microsoft 365 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:order-2 relative"
                            >
                                <div className="absolute -inset-4 bg-sky-500/10 rounded-[40px] blur-2xl" />
                                <div className="relative bg-slate-900 p-10 rounded-[40px] border border-white/5 overflow-hidden group">
                                    <Layout className="absolute top-0 right-0 w-64 h-64 text-sky-500/5 -mr-20 -mt-20 transform group-hover:scale-110 transition-transform duration-700" />
                                    <div className="relative z-10 text-white">
                                        <span className="text-sky-400 font-bold tracking-widest uppercase text-xs mb-4 block">Section 02</span>
                                        <h3 className="text-3xl font-bold mb-4">Modern Workplace: Microsoft 365</h3>
                                        <p className="text-slate-400 text-lg mb-8 italic">"Productivity & Collaboration"</p>
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <div className="w-1 h-auto bg-sky-400 rounded-full" />
                                                <div>
                                                    <h4 className="font-bold text-white mb-1">Teams & SharePoint Structure</h4>
                                                    <p className="text-slate-400 text-sm italic">Architected for discoverability, security, and automated backups.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-1 h-auto bg-sky-400 rounded-full" />
                                                <div>
                                                    <h4 className="font-bold text-white mb-1">License Management</h4>
                                                    <p className="text-slate-400 text-sm italic">Active analysis ensures you aren't paying for features you don't use.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-1 h-auto bg-sky-400 rounded-full" />
                                                <div>
                                                    <h4 className="font-bold text-white mb-1">Identity Security (Entra ID)</h4>
                                                    <p className="text-slate-400 text-sm italic">Single Sign-On (SSO) and MFA configuration to secure user identities.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:order-1 text-slate-600 leading-relaxed space-y-4"
                            >
                                <p className="text-lg">
                                    Most businesses use less than 20% of the Microsoft 365 features they pay for. We help you unlock the full value of your subscription, turning it from just "Email" into a complete operating system for your business.
                                </p>
                                <div className="pt-4 grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 italic text-sm">Secure-by-Design</div>
                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 italic text-sm">Full Feature Unlock</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Intune */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-indigo-500/10 rounded-[40px] blur-2xl" />
                                <div className="relative bg-slate-900 p-10 rounded-[40px] border border-white/5 overflow-hidden group">
                                    <Laptop className="absolute top-0 right-0 w-64 h-64 text-indigo-500/5 -mr-20 -mt-20 transform group-hover:scale-110 transition-transform duration-700" />
                                    <div className="relative z-10 text-white">
                                        <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-4 block">Section 03</span>
                                        <h3 className="text-3xl font-bold mb-4">Device Management: Microsoft Intune</h3>
                                        <p className="text-slate-400 text-lg mb-8 italic">"Control Your Fleet"</p>
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <div className="w-1 h-auto bg-indigo-400 rounded-full" />
                                                <div>
                                                    <h4 className="font-bold text-white mb-1">Windows Autopilot</h4>
                                                    <p className="text-slate-400 text-sm italic">New laptops install company settings automatically upon first boot.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-1 h-auto bg-indigo-400 rounded-full" />
                                                <div>
                                                    <h4 className="font-bold text-white mb-1">Mobile Device Management (MDM)</h4>
                                                    <p className="text-slate-400 text-sm italic">Secure company data on employee phones with selective data wiping.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-1 h-auto bg-indigo-400 rounded-full" />
                                                <div>
                                                    <h4 className="font-bold text-white mb-1">Patch Compliance</h4>
                                                    <p className="text-slate-400 text-sm italic">Automatic fleet-wide updates close security loopholes without friction.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-slate-600 leading-relaxed space-y-4"
                            >
                                <p className="text-lg">
                                    The days of manually installing software on every computer are over. We use Microsoft Intune to manage your devices purely from the cloud, ensuring consistency, security, and ease of deployment.
                                </p>
                                <div className="pt-4 grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 italic text-sm">Remote-First Support</div>
                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 italic text-sm">Global Fleet Control</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Enhance Advantage */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient opacity-40" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/3">
                            <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 rounded-full mb-4 border border-cyan-500/20">
                                <Shield className="w-4 h-4 text-cyan-400" />
                                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider italic">The Enhance Advantage</span>
                            </motion.div>
                            <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-6 italic">We Don't Just Setup. <br /> <span className="text-cyan-400">We Tune.</span></motion.h2>
                            <motion.p {...fadeIn} className="text-slate-400 text-lg leading-relaxed italic">
                                A cloud environment is a living thing—it grows and changes every day. Enhance Tech provides ongoing optimization to ensure it stays efficient.
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
                                    className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6 border border-cyan-500/20">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 italic group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-slate-400 text-sm italic">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Optimize Your Cloud Today</motion.h2>
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

            <Footer />
        </main>
    );
}
