import { ArrowRight, CheckCircle2, Shield, Eye, Camera, Fingerprint, Lock, DoorOpen, Car, UserCheck, Clock, Video, Zap, MapPin, FileCheck, Users, Scan, KeyRound, BadgeCheck, Building } from "lucide-react";
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

export default function PhysicalSecurity() {
    return <main className="min-h-screen page-bg-light overflow-x-hidden relative">
        <SEO title="Physical Security & Surveillance | Enhance Tech" description="Protect your premises with Enhance Tech. Advanced CCTV, Access Control, and Gate Barriers. Integrated physical security solutions for UAE offices and warehouses." keywords="physical security, CCTV Dubai, access control, biometric systems, gate barriers, SIRA compliance, surveillance UAE" canonicalUrl="https://itenhance.tech/solutions/physical-security" />

        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 py-[44px]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

            {/* Animated Background Elements */}
            <motion.div animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
            }} transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }} className="absolute top-20 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" />
            <motion.div animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2]
            }} transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
            }} className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                            <Shield className="w-4 h-4 text-orange-400" />
                            <span className="text-sm font-semibold text-orange-100 uppercase tracking-wider">Physical Security</span>
                        </motion.div>
                        <motion.h1 {...fadeIn} transition={{
                            delay: 0.1,
                            duration: 0.8
                        }} className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-white mb-8 leading-[1] tracking-tighter">
                            Physical Security <br className="hidden xl:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-amber-400 to-orange-300 animate-pulse-slow">
                                Protect Your People & Assets
                            </span>
                        </motion.h1>
                        <motion.p {...fadeIn} transition={{
                            delay: 0.2,
                            duration: 0.8
                        }} className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                            Enhance Your Safety. <span className="text-white font-bold">Secure Your Premises.</span>
                        </motion.p>
                        <motion.div {...fadeIn} transition={{
                            delay: 0.3,
                            duration: 0.8
                        }} className="flex flex-wrap justify-center lg:justify-start gap-6">
                            <Link to="/contact">
                                <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)] rounded-full px-12 h-20 text-xl font-black transition-all hover:scale-105 active:scale-95 group">
                                    Book a Site Survey
                                    <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md rounded-full px-12 h-20 text-xl font-bold transition-all border-2">
                                    Contact Security Team
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
                        <div className="relative z-10 bg-slate-900/40 backdrop-blur-3xl p-1 rounded-[40px] border border-white/10 shadow-[0_0_50px_-12px_rgba(249,115,22,0.3)]">
                            <div className="bg-slate-950/60 p-8 rounded-[38px] border border-white/5">
                                <div className="grid grid-cols-2 gap-6">
                                    {[{
                                        icon: Camera,
                                        label: "CCTV",
                                        value: "4K Video"
                                    }, {
                                        icon: Fingerprint,
                                        label: "Biometric",
                                        value: "Access Control"
                                    }, {
                                        icon: Car,
                                        label: "ANPR",
                                        value: "Plate Recognition"
                                    }, {
                                        icon: BadgeCheck,
                                        label: "SIRA",
                                        value: "Compliant"
                                    }].map((stat, i) => <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group text-center">
                                        <div className="w-12 h-12 bg-orange-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                            <stat.icon className="w-6 h-6 text-orange-400" />
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-slate-900">
                            Don't Overlook the <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">Physical Threat</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                            <p className="font-semibold text-slate-900">In a world of digital threats, it's easy to forget the physical ones.</p>
                            <p>
                                But a server room is only secure if the door is locked, and a warehouse is only safe if it is watched.
                            </p>
                            <p>
                                At Enhance Tech, we bridge the gap between physical and digital security. We design and install intelligent surveillance and access control systems that give you total visibility over who is entering your facility—and when.
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
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-[40px] blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
                        <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-orange-50 p-8">
                            <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop" alt="Physical Security 3D" className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Key Benefits */}
        <section className="py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 rounded-full mb-4 border border-orange-500/20">
                        <Zap className="w-4 h-4 text-orange-600" />
                        <span className="text-xs font-extrabold text-orange-600 uppercase tracking-[0.2em]">
                            Strategic Benefits
                        </span>
                    </motion.div>
                    <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-900">
                        Key Benefits
                    </motion.h2>
                    <motion.p {...fadeIn} className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Discover how modern physical security enhances operational control.
                    </motion.p>
                </div>

                <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{
                    once: true
                }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[{
                        icon: Eye,
                        title: "Deterrence & Prevention",
                        desc: "High-visibility cameras and barriers stop theft and vandalism before they happen."
                    }, {
                        icon: Fingerprint,
                        title: "Smart Access Control",
                        desc: "Replace lost keys with biometrics (fingerprint/face) or mobile credentials."
                    }, {
                        icon: Video,
                        title: "Forensic Evidence",
                        desc: "Crystal-clear 4K video footage to resolve disputes, investigate accidents, or prove compliance."
                    }, {
                        icon: Camera,
                        title: "Remote Monitoring",
                        desc: "View live feeds of your office or warehouse from your phone, anywhere in the world."
                    }, {
                        icon: Clock,
                        title: "Automated Attendance",
                        desc: "Link your door access directly to your HR payroll system for accurate Time & Attendance tracking."
                    }, {
                        icon: Shield,
                        title: "Health & Safety",
                        desc: "Detect overcrowding or unauthorized access to hazardous areas automatically."
                    }].map((benefit, i) => <motion.div key={i} variants={fadeIn} whileHover={{
                        scale: 1.05,
                        y: -10,
                        boxShadow: "0 20px 40px -15px rgba(249,115,22,0.3)"
                    }} className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-10 border border-slate-100 group-hover:bg-orange-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                                <benefit.icon className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-orange-600 transition-colors tracking-tight leading-tight">
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
                            What's Included
                        </h2>
                        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                            Comprehensive hardware and software solutions to harden your facility.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["IP Video Surveillance (CCTV)", "Biometric Access Control", "Time & Attendance Systems", "Gate Barriers & Turnstiles", "ANPR (Number Plate Recognition)", "Video Intercoms"].map((item, idx) => <motion.div key={idx} initial={{
                                opacity: 0,
                                y: 10
                            }} whileInView={{
                                opacity: 1,
                                y: 0
                            }} viewport={{
                                once: true
                            }} transition={{
                                delay: idx * 0.1
                            }} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-orange-50 hover:border-orange-200 transition-all cursor-default">
                                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                                    <CheckCircle2 className="w-4 h-4 text-orange-600 group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-slate-700 font-semibold text-sm group-hover:text-orange-700 transition-colors">
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
                    }} className="bg-gradient-to-br from-orange-900/20 to-slate-900/20 p-8 rounded-[40px] shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop" alt="Physical Security Solutions 3D" className="rounded-[38px] w-full object-contain group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Technology Ecosystem */}
        <section className="py-24 bg-slate-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
                        Our Technology Ecosystem
                    </motion.h2>
                    <motion.p {...fadeIn} className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        We enhance your facility with hardware from the world's leading security manufacturers.
                    </motion.p>
                </div>

                <div className="space-y-32">
                    {/* CCTV */}
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
                            <div className="absolute -inset-6 bg-orange-600/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                            <motion.div whileHover={{
                                rotateY: -5,
                                rotateX: 2,
                                scale: 1.02,
                                transition: {
                                    duration: 0.4
                                }
                            }} className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-orange-500/10 overflow-hidden group shadow-2xl hover:border-orange-500/30 transition-colors">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Camera className="w-32 h-32 text-orange-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="px-4 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full inline-block mb-6">
                                        <span className="text-orange-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                                            See Everything in 4K Clarity
                                        </span>
                                    </div>
                                    <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-orange-400 transition-colors">
                                        1. Intelligent Video Surveillance (CCTV)
                                    </h3>
                                    <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                        Gone are the days of grainy, black-and-white footage. We deploy modern IP camera systems that act as intelligent sensors for your business.
                                    </p>
                                    <div className="space-y-6">
                                        {[{
                                            title: "AI Analytics",
                                            desc: "Cameras that can distinguish between a human, a vehicle, and a stray animal, reducing false alarms."
                                        }, {
                                            title: "Night Vision (ColorVu)",
                                            desc: "See in full color even in pitch-black darkness, ensuring 24/7 protection."
                                        }, {
                                            title: "ANPR Cameras",
                                            desc: "Automatically recognize license plates to open gates for executives or log delivery trucks."
                                        }].map((item, idx) => <div key={idx} className="flex gap-4 group/item">
                                            <div className="w-1 h-auto bg-orange-500/30 rounded-full group-hover/item:bg-orange-500 transition-colors" />
                                            <div>
                                                <h4 className="font-bold text-white text-base group-hover/item:text-orange-200 transition-colors">
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
                        }} className="lg:order-2 bg-gradient-to-br from-orange-900/20 to-slate-900/20 p-6 rounded-[32px]">
                            <img src="/lovable-uploads/cctv-surveillance.png" alt="Intelligent Video Surveillance CCTV" className="rounded-[24px] shadow-2xl border border-white/5 w-full object-contain" loading="lazy" />
                        </motion.div>
                    </div>

                    {/* Access Control */}
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
                            <div className="absolute -inset-6 bg-amber-600/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                            <motion.div whileHover={{
                                rotateY: 5,
                                rotateX: 2,
                                scale: 1.02,
                                transition: {
                                    duration: 0.4
                                }
                            }} className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-amber-500/10 overflow-hidden group shadow-2xl hover:border-amber-500/30 transition-colors">
                                <div className="absolute top-0 left-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Fingerprint className="w-32 h-32 text-amber-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="px-4 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full inline-block mb-6">
                                        <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                                            Secure Your Doors, Server Rooms, and Elevators
                                        </span>
                                    </div>
                                    <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-amber-400 transition-colors">
                                        2. Access Control & Biometrics
                                    </h3>
                                    <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                        Stop relying on easily copied physical keys. Our access control solutions ensure that only authorized personnel can enter sensitive areas.
                                    </p>
                                    <div className="space-y-6">
                                        {[{
                                            title: "Biometrics",
                                            desc: "Fingerprint and Face Recognition terminals that are fast, hygienic, and impossible to fake."
                                        }, {
                                            title: "Mobile Credentials",
                                            desc: "Let employees use their smartphone as their access card via NFC or Bluetooth."
                                        }, {
                                            title: "Visitor Management",
                                            desc: "Digital kiosks that log visitors, print badges, and notify hosts upon arrival."
                                        }].map((item, idx) => <div key={idx} className="flex gap-4 group/item text-right justify-end">
                                            <div>
                                                <h4 className="font-bold text-white text-base group-hover/item:text-amber-200 transition-colors">
                                                    {item.title}
                                                </h4>
                                                <p className="text-slate-400 text-sm">{item.desc}</p>
                                            </div>
                                            <div className="w-1 h-auto bg-amber-500/30 rounded-full group-hover/item:bg-amber-500 transition-colors" />
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
                        }} className="lg:order-1 bg-gradient-to-br from-amber-900/20 to-slate-900/20 p-6 rounded-[32px]">
                            <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&auto=format&fit=crop" alt="Biometric Access Control 3D" className="rounded-[24px] shadow-2xl border border-white/5 w-full object-contain" loading="lazy" />
                        </motion.div>
                    </div>

                    {/* Perimeter */}
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
                            <div className="absolute -inset-6 bg-red-600/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                            <motion.div whileHover={{
                                rotateY: -5,
                                rotateX: 2,
                                scale: 1.02,
                                transition: {
                                    duration: 0.4
                                }
                            }} className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-red-500/10 overflow-hidden group shadow-2xl hover:border-red-500/30 transition-colors">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <DoorOpen className="w-32 h-32 text-red-500" />
                                </div>
                                <div className="relative z-10">
                                    <div className="px-4 py-1.5 bg-red-500/20 border border-red-500/30 rounded-full inline-block mb-6">
                                        <span className="text-red-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                                            Gate Barriers & Turnstiles
                                        </span>
                                    </div>
                                    <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-red-400 transition-colors">
                                        3. Perimeter Security
                                    </h3>
                                    <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                        Control the flow of people and vehicles before they even reach your door.
                                    </p>
                                    <div className="space-y-6">
                                        {[{
                                            title: "Boom Barriers",
                                            desc: "Heavy-duty barriers for parking lots and compound entrances, integrated with long-range readers (UHF)."
                                        }, {
                                            title: "Speed Gates & Turnstiles",
                                            desc: "Elegant entrance solutions for corporate lobbies that prevent \"tailgating\" (one person slipping in behind another)."
                                        }].map((item, idx) => <div key={idx} className="flex gap-4 group/item">
                                            <div className="w-1 h-auto bg-red-500/30 rounded-full group-hover/item:bg-red-500 transition-colors" />
                                            <div>
                                                <h4 className="font-bold text-white text-base group-hover/item:text-red-200 transition-colors">
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
                        }} className="lg:order-2 bg-gradient-to-br from-red-900/20 to-slate-900/20 p-6 rounded-[32px]">
                            <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop" alt="Perimeter Security 3D" className="rounded-[24px] shadow-2xl border border-white/5 w-full object-contain" loading="lazy" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        {/* SIRA Compliance */}
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/3">
                        <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 rounded-full mb-6 border border-orange-200">
                            <BadgeCheck className="w-4 h-4 text-orange-600" />
                            <span className="text-[10px] font-extrabold text-orange-600 uppercase tracking-[0.3em]">
                                The Enhance Advantage
                            </span>
                        </motion.div>
                        <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight text-slate-900">
                            We Don't Just Install. <br /> We Certify.
                        </motion.h2>
                        <motion.p {...fadeIn} className="text-slate-600 text-lg leading-relaxed">
                            Physical security in the UAE is strictly regulated. Installing a camera in the wrong place or using the wrong storage retention can lead to heavy fines. At Enhance Tech, we ensure your system is compliant.
                        </motion.p>
                    </div>

                    <div className="lg:w-2/3 grid md:grid-cols-3 gap-8">
                        {[{
                            title: "SIRA Compliance",
                            desc: "We design systems that meet the strict standards of the Security Industry Regulatory Agency (SIRA) in Dubai.",
                            icon: FileCheck
                        }, {
                            title: "Storage Calculation",
                            desc: "We ensure you have the mandatory recording retention (e.g., 31 days or 90 days) required by local law.",
                            icon: Clock
                        }, {
                            title: "Privacy Zones",
                            desc: "We configure cameras to mask private areas (like neighbor's windows) to ensure you respect privacy laws.",
                            icon: Lock
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
                        }} className="p-10 bg-slate-50 rounded-[32px] border border-slate-100 hover:bg-white hover:border-orange-500/30 hover:shadow-2xl transition-all duration-500 group shadow-sm">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/20 group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
                                <item.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-orange-600 transition-colors uppercase tracking-tight">
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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-slate-950 to-slate-950 opacity-70" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                    Secure Your Facility Today
                </h2>
                <p className="text-xl text-slate-300 mb-10">
                    Don't wait for a break-in to upgrade your security. Enhance your visibility now.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-16 text-xl">
                            Book a Site Survey
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button size="lg" variant="outline" className="border-slate-700 text-white rounded-full px-12 h-16 text-xl hover:bg-slate-800">
                            Contact Our Security Team
                        </Button>
                    </Link>
                </div>
            </div>
        </section>


    </main>;
}
