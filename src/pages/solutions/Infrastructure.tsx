import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
    Network,
    Wifi,
    Zap,
    ShieldCheck,
    Scale,
    Activity,
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    Cable,
    Server,
    Battery,
    ThermometerSun,
    Settings,
    Map,
    CheckCircle,
    Sparkles,
    BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import SEO, { createServiceSchema, createBreadcrumbSchema } from '@/components/SEO';
import { Button } from '@/components/ui/button';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const Infrastructure = () => {
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
    const blobTranslateX2 = useTransform(mouseX, [-500, 500], [30, -30]);
    const blobTranslateY2 = useTransform(mouseY, [-500, 500], [30, -30]);

    const serviceSchema = createServiceSchema(
        'Networking & Infrastructure Solutions',
        'Build the digital backbone of your organization with high-speed connectivity, critical power, and structured cabling.'
    );

    const breadcrumbSchema = createBreadcrumbSchema([
        { name: 'Home', url: 'https://itenhance.tech' },
        { name: 'Solutions', url: 'https://itenhance.tech/solutions' },
        { name: 'Networking & Infrastructure', url: 'https://itenhance.tech/solutions/infrastructure' },
    ]);

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-indigo-500/30">
            <SEO
                title="Networking & Infrastructure: The Foundation of IT | Enhance Tech"
                description="Design and deploy a resilient IT backbone. Enterprise Wi-Fi 6, switching, structured cabling from Legrand, Vertiv UPS, and Aruba connectivity."
                structuredData={{ "@graph": [serviceSchema, breadcrumbSchema] }}
            />
            <Navbar />

            {/* Hero Section */}
            <section onMouseMove={handleMouseMove} className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none" />

                {/* Animated Background Elements with Mouse Parallax */}
                <motion.div
                    style={{ x: blobTranslateX1, y: blobTranslateY1 }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[100px]"
                />
                <motion.div
                    style={{ x: blobTranslateX2, y: blobTranslateY2 }}
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px]"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
                            >
                                <Network className="w-4 h-4 text-blue-400" />
                                <span className="text-sm font-semibold tracking-wider uppercase text-blue-100">Layer 1 & 2 Infrastructure</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-[1.1] text-white"
                            >
                                Networking & Infrastructure: <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-cyan-400">
                                    The Foundation of IT
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
                            >
                                Connect Faster. Power Reliably. Scale Effortlessly. <br className="hidden md:block" />
                                We design and deploy the high-speed backbone that drives your organization.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-5"
                            >
                                <Link to="/contact">
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white shadow-2xl shadow-blue-500/40 rounded-full px-10 h-16 text-lg font-bold transition-all hover:scale-105 active:scale-95">
                                        Get a Site Survey
                                        <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <a href="#ecosystem">
                                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-md rounded-full px-10 h-16 text-lg font-medium transition-all">
                                        Explore Ecosystem
                                    </Button>
                                </a>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 relative hidden lg:block"
                        >
                            <div className="relative z-10 bg-slate-900/40 backdrop-blur-3xl p-1 rounded-[40px] border border-white/10 shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)]">
                                <div className="bg-slate-950/60 p-8 rounded-[38px] border border-white/5">
                                    <div className="grid grid-cols-2 gap-6">
                                        {[
                                            { icon: Zap, label: "Speed", value: "Low Latency Backbone", color: "text-blue-400" },
                                            { icon: Scale, label: "Scalability", value: "Multi-Layer Modular", color: "text-indigo-400" },
                                            { icon: ShieldCheck, label: "Security", value: "Hardware Edge Defense", color: "text-cyan-400" },
                                            { icon: Activity, label: "Reliability", value: "Self-Healing Fabric", color: "text-blue-400" },
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group text-center">
                                                <div className={`w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                                </div>
                                                <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">{stat.label}</p>
                                                <p className="text-white font-bold text-base xl:text-lg leading-tight">{stat.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Floating icon */}
                            <motion.div
                                animate={{ y: [-20, 20, -20] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 p-6 bg-blue-500/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
                            >
                                <Network className="w-12 h-12 text-white" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 md:py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeIn}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                Before you can secure your data, you need a reliable highway for it to travel on.
                            </h2>
                            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                                <p>
                                    A slow Wi-Fi network or an unstable power supply can halt your business operations just as effectively as a cyberattack.
                                </p>
                                <p>
                                    At Enhance Tech, we design and deploy the physical and digital backbone of your organization. From the structured cabling in your walls to the high-speed switches in your rack and the UPS systems that keep it all running, we ensure your infrastructure is always on.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square lg:aspect-video rounded-[40px] overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                                alt="Modern Infrastructure Backbone"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-16 md:py-20 bg-slate-900/50 relative border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
                            Key Benefits
                        </motion.h2>
                        <motion.p {...fadeIn} className="text-slate-400 text-lg">
                            Discover how dynamic infrastructure supports rapid business growth.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "High-Speed Connectivity",
                                desc: "Eliminate 'dead zones' and buffering with enterprise-grade Wi-Fi 6 and 10GbE switching.",
                                icon: Wifi,
                                color: "from-blue-400 to-indigo-500"
                            },
                            {
                                title: "Business Continuity",
                                desc: "Prevent downtime during power outages with critical backup power (UPS) solutions.",
                                icon: Zap,
                                color: "from-amber-400 to-orange-500"
                            },
                            {
                                title: "Organized Cabling",
                                desc: "Replace messy 'spaghetti cables' with organized, labeled, and certified structured cabling systems.",
                                icon: Cable,
                                color: "from-emerald-400 to-teal-500"
                            },
                            {
                                title: "Scalable Architecture",
                                desc: "Networks designed to grow with you—add new users or devices without replacing core hardware.",
                                icon: Scale,
                                color: "from-purple-400 to-pink-500"
                            },
                            {
                                title: "Intelligent Power Management",
                                desc: "Monitor energy usage and remotely reboot hung devices from anywhere.",
                                icon: Activity,
                                color: "from-cyan-400 to-blue-500"
                            },
                            {
                                title: "Maximum Uptime",
                                desc: "Redundant pathways and monitored links ensure your network never takes a day off.",
                                icon: ShieldCheck,
                                color: "from-red-400 to-rose-500"
                            }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-[32px] bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-all relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-5 blur-3xl group-hover:opacity-15 transition-opacity`} />
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6`}>
                                    <benefit.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors">{benefit.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Ecosystem */}
            <section id="ecosystem" className="py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-6">Our Technology Ecosystem</motion.h2>
                        <motion.p {...fadeIn} className="text-slate-400 text-lg">We enhance your foundation by partnering with global leaders in Connectivity, Power, and Cabling.</motion.p>
                    </div>

                    <div className="space-y-32">
                        {/* 1. Aruba (HPE) */}
                        <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase mb-6">
                                    Aruba (HPE)
                                </div>
                                <h3 className="text-3xl font-extrabold mb-6">Intelligent Edge Switching & Wi-Fi</h3>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Aruba, a Hewlett Packard Enterprise company, is the gold standard for campus and branch networking. They are famous for their "Mobile First" approach, ensuring your team stays connected securely, whether they are at their desk or walking the floor.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { title: "Analyst Recognition", desc: "A long-standing Leader in the Gartner® Magic Quadrant™." },
                                        { title: "AI-Powered Wi-Fi", desc: "APs automatically optimize radio frequencies for the best signal." },
                                        { title: "Centralized Management", desc: "Manage all switches and APs from the Aruba Central cloud dashboard." }
                                    ].map((feature, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                            </div>
                                            <div>
                                                <span className="font-bold text-white block">{feature.title}</span>
                                                <span className="text-sm text-slate-400">{feature.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-video lg:aspect-square group">
                                <img
                                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80"
                                    alt="Aruba Enterprise Networking"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                            </div>
                        </motion.div>

                        {/* 2. Legrand */}
                        <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
                            <div className="lg:order-2">
                                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase mb-6">
                                    Legrand
                                </div>
                                <h3 className="text-3xl font-extrabold mb-6">Structured Cabling & Cable Management</h3>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Legrand provides the physical pathways that connect your world. Their structured cabling solutions (LCS³) are designed for performance and ease of maintenance, ensuring your "Layer 1" is flawless.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { title: "High-Performance Fiber", desc: "Certified Cat6A and Fiber Optic solutions that guarantee bandwidth." },
                                        { title: "Smart Racks", desc: "Server cabinets designed for optimal airflow and cable management." },
                                        { title: "Future-Proof Design", desc: "Modular systems that allow you to swap cassettes easily as tech evolves." }
                                    ].map((feature, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                            </div>
                                            <div>
                                                <span className="font-bold text-white block">{feature.title}</span>
                                                <span className="text-sm text-slate-400">{feature.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:order-1 relative rounded-[40px] overflow-hidden shadow-2xl aspect-video lg:aspect-square group">
                                <img
                                    src="https://images.unsplash.com/photo-1551808195-2321035038c7?auto=format&fit=crop&q=80"
                                    alt="Legrand Structured Cabling"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                            </div>
                        </motion.div>

                        {/* 3. Vertiv */}
                        <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-black uppercase mb-6">
                                    Vertiv
                                </div>
                                <h3 className="text-3xl font-extrabold mb-6">Critical Power: UPS & Thermal</h3>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Data needs power. Vertiv (formerly Emerson Network Power) ensures that your critical equipment never goes dark. They are the preferred choice for protecting data centers and server rooms.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { title: "Liebert® UPS", desc: "Industry-leading supplies that protect servers during blackouts." },
                                        { title: "Thermal Management", desc: "Precision cooling solutions that extend server lifespan." },
                                        { title: "Smart PDUs", desc: "Intelligent units that let you monitor power draw and switch outlets." }
                                    ].map((feature, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                                            </div>
                                            <div>
                                                <span className="font-bold text-white block">{feature.title}</span>
                                                <span className="text-sm text-slate-400">{feature.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-video lg:aspect-square group">
                                <img
                                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
                                    alt="Vertiv Power Management"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                            </div>
                        </motion.div>

                        {/* 4. D-Link */}
                        <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
                            <div className="lg:order-2">
                                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase mb-6">
                                    D-Link
                                </div>
                                <h3 className="text-3xl font-extrabold mb-6">Agile & Industrial Connectivity</h3>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    For growing businesses or rugged industrial environments, D-Link offers robust, cost-effective networking solutions designed for fast deployment and resilience.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { title: "Industrial Switches", desc: "Ruggedized hardware designed to withstand heat, dust, and vibration." },
                                        { title: "Cost-Effective Switching", desc: "Smart Managed Switches that provide VLANs, QoS, and security." },
                                        { title: "Nucleus Cloud", desc: "Simple, cloud-based management for fast network deployment." }
                                    ].map((feature, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                            </div>
                                            <div>
                                                <span className="font-bold text-white block">{feature.title}</span>
                                                <span className="text-sm text-slate-400">{feature.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:order-1 relative rounded-[40px] overflow-hidden shadow-2xl aspect-video lg:aspect-square group">
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                                    alt="D-Link Industrial Networking"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 md:py-20 bg-[#050b1d] relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-6">What&apos;s Included</motion.h2>
                        <motion.p {...fadeIn} className="text-slate-400 text-lg">A complete suite of hardware and passive solutions to build your office or data center.</motion.p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { icon: Network, title: "Switching & Routing" },
                            { icon: Wifi, title: "Wi-Fi 6/6E Access Points" },
                            { icon: Cable, title: "Structured Cabling" },
                            { icon: Server, title: "Racks & Cabinets" },
                            { icon: Battery, title: "UPS Systems" },
                            { icon: ThermometerSun, title: "Cooling & PDU" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeIn}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 flex flex-col items-center gap-4 group transition-all"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-blue-400" />
                                </div>
                                <span className="text-center font-bold text-slate-200 group-hover:text-blue-300 transition-colors uppercase tracking-widest text-xs">
                                    {item.title}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Enhance Advantage */}
            <section className="py-16 md:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/20 rounded-[48px] p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20">
                                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                                    <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-blue-400">Design & Implementation</span>
                                </motion.div>
                                <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                                    We Don&apos;t Just Sell Boxes.<br />
                                    <span className="text-blue-400 text-3xl">We Architect Solutions.</span>
                                </motion.h2>
                                <p className="text-slate-400 text-lg mb-8">
                                    Bad infrastructure is expensive to fix. At Enhance Tech, our engineers get it right the first time.
                                </p>

                                <div className="space-y-8">
                                    {[
                                        {
                                            title: "Heat Maps & Site Surveys",
                                            desc: "We simulate your office floor plan to place Wi-Fi APs exactly where they are needed for 100% coverage.",
                                            icon: Map
                                        },
                                        {
                                            title: "Certified Cabling",
                                            desc: "We certify cables with Fluke testers to prove they meet global ISO/TIA standards.",
                                            icon: CheckCircle
                                        },
                                        {
                                            title: "Power Load Balancing",
                                            desc: "We calculate total power draw to ensure your UPS can handle the load during an outage.",
                                            icon: Activity
                                        }
                                    ].map((item, i) => (
                                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="flex gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                                <item.icon className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2 text-lg">{item.title}</h4>
                                                <p className="text-slate-400 text-sm">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-4 bg-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-3xl bg-slate-900 aspect-square flex flex-col items-center justify-center p-12">
                                    <div className="w-full h-full relative">
                                        {/* Abstract Engineering Graphic */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-64 h-64 border-2 border-blue-500/20 rounded-full animate-ping" />
                                            <div className="absolute w-48 h-48 border-2 border-blue-500/40 rounded-full animate-pulse" />
                                            <div className="absolute w-32 h-32 border-2 border-blue-400 rounded-full" />
                                            <Settings className="w-16 h-16 text-blue-400 animate-spin-slow" />
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 text-center">
                                            <span className="text-2xl font-black text-white/20 tracking-[1em] uppercase">Engineering</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div {...fadeIn}>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
                            Build a Better Foundation
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Don&apos;t let weak infrastructure hold back your digital transformation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/contact" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-2xl shadow-blue-500/40 flex items-center gap-2 group">
                                Get a Site Survey
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="px-10 py-5 bg-white hover:bg-slate-100 text-slate-900 font-black rounded-2xl transition-all shadow-2xl flex items-center gap-2">
                                Contact Infrastructure Team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Infrastructure;
