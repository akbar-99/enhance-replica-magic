import { ArrowRight, CheckCircle2, Shield, Zap, Lock, Eye, Laptop, Server, Database, Sparkles, Activity, Globe, Cpu, Terminal, Layers } from "lucide-react";
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

const listItemVariants = {
    initial: { opacity: 0, x: -10 },
    whileInView: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 }
    },
    viewport: { once: true }
};

export default function NetworkSecurity() {
    return (
        <main
            className="min-h-screen page-bg-light overflow-x-hidden relative"
        >
            <SEO
                title="Network Security: Next-Generation Firewalls (NGFW) | Enhance Secure"
                description="Secure your network perimeter with Enhance Secure. Industry-leading Next-Gen Firewalls from Fortinet, SonicWall, and Sangfor. Validated by Gartner® & Forrester®."
                keywords="Network Security, NGFW, Firewall, Fortinet, SonicWall, Sangfor, SD-WAN, DPI, Cybersecurity"
                canonicalUrl="https://itenhance.tech/solutions/network-security"
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
                    className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px]"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                                <Shield className="w-4 h-4 text-blue-400" />
                                <span className="text-sm font-semibold text-blue-100 uppercase tracking-wider">Perimeter Defense</span>
                            </motion.div>
                            <motion.h1
                                {...fadeIn}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tighter"
                            >
                                Network Security <br className="hidden xl:block" />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-cyan-300 animate-pulse-slow">
                                    Next-Gen Firewalls
                                </span>
                            </motion.h1>
                            <motion.p
                                {...fadeIn}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
                            >
                                Secure your network perimeter with <span className="text-white font-bold">Enhance Secure</span>. Industry-leading defense validated by Gartner® & Forrester®.
                            </motion.p>
                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-4"
                            >
                                <Link to="/contact">
                                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white shadow-xl shadow-blue-500/25 rounded-2xl px-10 h-14 text-base font-bold transition-all hover:scale-105 active:scale-95 border-none">
                                        Get Assessment
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button size="lg" className="border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/10 backdrop-blur-md rounded-2xl px-10 h-14 text-base font-medium transition-all hover:scale-105 active:scale-95 bg-transparent">
                                        Contact Experts
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
                                            { icon: Shield, label: "Threat Blocking", value: "99.9% Success" },
                                            { icon: Activity, label: "Inspection", value: "Real-time DPI" },
                                            { icon: Globe, label: "Secure SD-WAN", value: "Global Reach" },
                                            { icon: Cpu, label: "AI Powered", value: "Self-Learning" },
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group text-center">
                                                <div className="w-12 h-12 bg-blue-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                                    <stat.icon className="w-6 h-6 text-blue-400" />
                                                </div>
                                                <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">{stat.label}</p>
                                                <p className="text-white font-bold text-base xl:text-lg">{stat.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                animate={{ y: [-20, 20, -20] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 p-6 bg-blue-500/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
                            >
                                <Lock className="w-12 h-12 text-white" />
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
                                Network Security: <br />
                                The First Line of Defense
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p className="font-semibold text-slate-900">
                                    Enhance Your Perimeter. Block Threats Before They Enter.
                                </p>
                                <p>
                                    Your network firewall is the front door to your digital organization. In an era of encrypted attacks and high-speed fiber connections, a traditional firewall is no longer enough. You need intelligence, speed, and deep inspection capabilities.
                                </p>
                                <p>
                                    At Enhance Tech, we deploy Next-Generation Firewalls (NGFW) that do more than just manage ports. They inspect every packet of data, decrypt hidden threats, and use Artificial Intelligence to block attacks in real-time.
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
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=60&w=1200&auto=format&fit=crop"
                                    alt="Cybersecurity Visualization"
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
                        <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 rounded-full mb-4 border border-blue-500/20">
                            <Zap className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-[0.2em]">Strategic Security</span>
                        </motion.div>
                        <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Key Benefits</motion.h2>
                        <motion.p {...fadeIn} className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Discover how upgrading your network security transforms your defense.
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
                            { icon: Activity, title: "Deep Packet Inspection (DPI)", desc: "Look inside the traffic—not just where it comes from—to stop malware hidden in legitimate files." },
                            { icon: Globe, title: "Secure SD-WAN", desc: "Replace expensive MPLS lines with secure, high-speed internet connections for your branch offices." },
                            { icon: Layers, title: "Application Control", desc: "Block unproductive or dangerous apps while prioritizing business tools like Teams and Zoom." },
                            { icon: Lock, title: "Encrypted Threat Detection", desc: "Inspect SSL/TLS encrypted traffic (where 90% of malware hides) without killing your internet speed." },
                            { icon: Zap, title: "Zero-Touch Deployment", desc: "Ship a device to a branch office and have it securely configured automatically without sending an engineer." },
                            { icon: Terminal, title: "Unified Management", desc: "Control your entire network—Wi-Fi, Switch, and Firewall—from a single dashboard." },
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn}
                                whileHover={{
                                    scale: 1.05,
                                    y: -10,
                                    boxShadow: "0 20px 40px -15px rgba(59,130,246,0.3)"
                                }}
                                className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-10 border border-slate-100 group-hover:bg-blue-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                                        <benefit.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors tracking-tight leading-tight">{benefit.title}</h3>
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
                                Comprehensive capabilities designed to harden your network infrastructure.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Next-Generation Firewall (NGFW)",
                                    "Intrusion Prevention System (IPS)",
                                    "Gateway Anti-Virus & Anti-Spyware",
                                    "Web Filtering & DNS Security",
                                    "Secure VPN (Remote Access)",
                                    "Sandboxing (Zero-Day Protection)"
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-blue-50 hover:border-blue-200 transition-all cursor-default"
                                    >
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-slate-700 font-semibold text-sm group-hover:text-blue-700 transition-colors">{item}</span>
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
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=1200&auto=format&fit=crop"
                                alt="Network Hardware"
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
                            We enhance your network with the world’s top firewall vendors, validated by industry analysts like Gartner® and Forrester®.
                        </motion.p>
                    </div>

                    <div className="space-y-32">
                        {/* Fortinet */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative lg:order-1"
                            >
                                <div className="absolute -inset-6 bg-red-600/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                                <motion.div
                                    whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02, transition: { duration: 0.4 } }}
                                    className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-red-500/10 overflow-hidden group shadow-2xl hover:border-red-500/30 transition-colors"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Cpu className="w-32 h-32 text-red-500" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="px-4 py-1.5 bg-red-500/20 border border-red-500/30 rounded-full inline-block mb-6">
                                            <span className="text-red-400 font-bold tracking-[0.3em] uppercase text-[10px]">The Performance Leader</span>
                                        </div>
                                        <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-red-400 transition-colors">Fortinet</h3>
                                        <p className="text-red-400/90 text-lg mb-8 font-medium italic">"FortiGate Next-Generation Firewalls"</p>
                                        <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                            Fortinet is unique in the industry because they build their own custom chips (SPUs), allowing them to process traffic faster than almost anyone else.
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                { title: "Analyst Rankings", desc: "Consistent Leader in Gartner® Magic Quadrant™ and Forrester Wave™." },
                                                { title: "ASIC Acceleration", desc: "Ultra-low latency with purpose-built hardware chips." },
                                                { title: "Secure SD-WAN", desc: "Industry's best built-in SD-WAN with automated path steering." }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex gap-4 group/item">
                                                    <div className="w-1 h-auto bg-red-500/30 rounded-full group-hover/item:bg-red-500 transition-colors" />
                                                    <div>
                                                        <h4 className="font-bold text-white text-base group-hover/item:text-red-200 transition-colors">{item.title}</h4>
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
                                <div className="relative w-full aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-white/5">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/Zai7blMzp7o?start=11&autoplay=1&mute=1&loop=1&playlist=Zai7blMzp7o&controls=0&modestbranding=1&rel=0&iv_load_policy=3"
                                        title="Fortinet Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="absolute inset-0 w-[101%] h-[101%] -left-[0.5%] -top-[0.5%] object-cover pointer-events-none"
                                    ></iframe>
                                </div>
                            </motion.div>
                        </div>

                        {/* SonicWall */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative lg:order-2"
                            >
                                <div className="absolute -inset-6 bg-orange-600/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                                <motion.div
                                    whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02, transition: { duration: 0.4 } }}
                                    className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-orange-500/10 overflow-hidden group shadow-2xl hover:border-orange-500/30 transition-colors"
                                >
                                    <div className="absolute top-0 left-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Shield className="w-32 h-32 text-orange-500" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="px-4 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full inline-block mb-6">
                                            <span className="text-orange-400 font-bold tracking-[0.3em] uppercase text-[10px]">The SMB Defender</span>
                                        </div>
                                        <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-orange-400 transition-colors">SonicWall</h3>
                                        <p className="text-orange-400/90 text-lg mb-8 font-medium italic">"TZ and NSa Series Firewalls"</p>
                                        <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                            Trusted defender of Small and Mid-sized Businesses for decades, offering an exceptional balance of security and simplicity.
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                { title: "Analyst Rankings", desc: "Strong Performer in Forrester Wave™ and Gartner Peer Insights™ Customers' Choice." },
                                                { title: "RTDMI™ Technology", desc: "Detects modern malware that hides in memory to evade traditional sandboxes." },
                                                { title: "Reassembly-Free Inspection", desc: "Patented single-pass design scans traffic without adding latency." }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex gap-4 group/item text-right justify-end">
                                                    <div>
                                                        <h4 className="font-bold text-white text-base group-hover/item:text-orange-200 transition-colors">{item.title}</h4>
                                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                                    </div>
                                                    <div className="w-1 h-auto bg-orange-500/30 rounded-full group-hover/item:bg-orange-500 transition-colors" />
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
                                <div className="relative w-full aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-white/5">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/YNACb3X7gYE?autoplay=1&mute=1&loop=1&playlist=YNACb3X7gYE&controls=0&modestbranding=1&rel=0&iv_load_policy=3"
                                        title="SonicWall Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="absolute inset-0 w-[101%] h-[101%] -left-[0.5%] -top-[0.5%] object-cover pointer-events-none"
                                    ></iframe>
                                </div>
                            </motion.div>
                        </div>

                        {/* Sangfor */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative lg:order-1"
                            >
                                <div className="absolute -inset-6 bg-blue-600/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                                <motion.div
                                    whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02, transition: { duration: 0.4 } }}
                                    className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-blue-500/10 overflow-hidden group shadow-2xl hover:border-blue-500/30 transition-colors"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Layers className="w-32 h-32 text-blue-500" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full inline-block mb-6">
                                            <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-[10px]">The AI Innovator</span>
                                        </div>
                                        <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-blue-400 transition-colors">Sangfor</h3>
                                        <p className="text-blue-400/90 text-lg mb-8 font-medium italic">"Sangfor NGAF (Next-Gen Application Firewall)"</p>
                                        <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                            Integrates Web Application Security directly into the firewall, the world's first AI-enabled NGFW.
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                { title: "Analyst Rankings", desc: "Recognized as a Visionary in Gartner® and a Strong Performer in Forrester Wave™." },
                                                { title: "Integrated WAF", desc: "Combines traditional firewall with Web Application Firewall protection." },
                                                { title: "Neural-X Intelligence", desc: "Cloud-based AI blocks new ransomware variants in real-time." }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex gap-4 group/item">
                                                    <div className="w-1 h-auto bg-blue-500/30 rounded-full group-hover/item:bg-blue-500 transition-colors" />
                                                    <div>
                                                        <h4 className="font-bold text-white text-base group-hover/item:text-blue-200 transition-colors">{item.title}</h4>
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
                                <div className="relative w-full aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-white/5">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/mo37LCY_--I?autoplay=1&mute=1&loop=1&playlist=mo37LCY_--I&controls=0&modestbranding=1&rel=0&iv_load_policy=3"
                                        title="Sangfor Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="absolute inset-0 w-[101%] h-[101%] -left-[0.5%] -top-[0.5%] object-cover pointer-events-none"
                                    ></iframe>
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
                            <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 rounded-full mb-6 border border-blue-200">
                                <Shield className="w-4 h-4 text-blue-600" />
                                <span className="text-[10px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 uppercase tracking-[0.3em]">The Enhance Advantage</span>
                            </motion.div>
                            <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
                                We Don't Just Plug It In. <br /> We Tune It.
                            </motion.h2>
                            <motion.p {...fadeIn} className="text-slate-600 text-lg leading-relaxed">
                                A firewall with "default settings" provides almost no protection. To work effectively, it must be tuned to your specific traffic and risks.
                            </motion.p>
                        </div>

                        <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                            {[
                                { title: "Policy Hardening", desc: "We configure granular rules to ensure 'Least Privilege'—only allowing necessary traffic." },
                                { title: "VPN Setup", desc: "Secure Remote Access (SSL-VPN) so teams work safely without exposing the network." },
                                { title: "Firmware Management", desc: "We keep devices patched to protect against the latest hardware vulnerabilities." },
                                { title: "Certified Expertise", desc: "Our network engineers ensure your perimeter remains impenetrable and optimized." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 bg-slate-50 rounded-[32px] border border-slate-100 hover:bg-white hover:border-blue-500/30 hover:shadow-2xl transition-all duration-500 group shadow-sm"
                                >
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                                        <CheckCircle2 className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{item.title}</h3>
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
                    <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Secure Your Network Today</motion.h2>
                    <motion.p {...fadeIn} className="text-xl text-slate-300 mb-10">
                        Don't leave your digital front door open. Enhance your perimeter defense now.
                    </motion.p>
                    <motion.div
                        {...fadeIn}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/contact">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg">
                                Get a Firewall Assessment
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="border-slate-700 text-white rounded-full px-10 h-14 text-lg hover:bg-slate-800">
                                Contact Our Team
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>


        </main>
    );
}
