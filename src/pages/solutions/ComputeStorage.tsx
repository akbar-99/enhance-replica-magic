import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
    Server,
    HardDrive,
    Cpu,
    Database,
    ShieldCheck,
    Scale,
    Zap,
    Activity,
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    Monitor,
    Cloud,
    Settings,
    ShieldAlert,
    Sparkles,
    BarChart3,
    Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { createServiceSchema, createBreadcrumbSchema } from '@/components/SEO';
import { Button } from "@/components/ui/button";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const ComputeStorage = () => {
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

    const serviceSchema = createServiceSchema(
        'Compute & Storage Solutions',
        'Modernize your data center with high-performance enterprise servers and smart storage solutions.'
    );

    const breadcrumbSchema = createBreadcrumbSchema([
        { name: 'Home', url: 'https://itenhance.tech' },
        { name: 'Solutions', url: 'https://itenhance.tech/solutions' },
        { name: 'Compute & Storage', url: 'https://itenhance.tech/solutions/compute-storage' },
    ]);

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-indigo-500/30 overflow-x-hidden" onMouseMove={handleMouseMove}>
            <SEO
                title="Compute & Storage: Modern Infrastructure | Enhance Tech"
                description="Modernize your data center with Enhance Tech. Enterprise Servers from Dell, HPE, and Lenovo. Smart Storage solutions from Synology and QNAP."
                structuredData={{ "@graph": [serviceSchema, breadcrumbSchema] }}
            />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-transparent to-transparent pointer-events-none" />

                {/* Animated Background Elements with Mouse Parallax */}
                <motion.div
                    style={{
                        x: blobTranslateX1,
                        y: blobTranslateY1,
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-20 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"
                />
                <motion.div
                    style={{
                        x: blobTranslateX2,
                        y: blobTranslateY2,
                    }}
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
                            >
                                <Cpu className="w-4 h-4 text-indigo-400" />
                                <span className="text-sm font-semibold tracking-wider uppercase text-indigo-100">Enterprise Infrastructure</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-[1.1] text-white"
                            >
                                Compute & Storage: <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-blue-400 to-cyan-400">
                                    The Business Engine
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
                            >
                                Powering Your Digital Ambition. Scale effortlessly and accelerate growth with our high-performance core infrastructure.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-5"
                            >
                                <Link to="/contact">
                                    <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-2xl shadow-indigo-500/40 rounded-full px-10 h-16 text-lg font-bold transition-all hover:scale-105 active:scale-95">
                                        Get a Server Quote
                                        <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <a href="#ecosystem">
                                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-md rounded-full px-10 h-16 text-lg font-medium transition-all">
                                        Explore Technology
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
                            <div className="relative z-10 bg-slate-900/40 backdrop-blur-3xl p-1 rounded-[40px] border border-white/10 shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)]">
                                <div className="bg-slate-950/60 p-8 rounded-[38px] border border-white/5">
                                    <div className="grid grid-cols-2 gap-6">
                                        {[
                                            {
                                                icon: Zap,
                                                label: "Performance",
                                                value: "Ultra-Low Latency",
                                                color: "indigo"
                                            },
                                            {
                                                icon: Scale,
                                                label: "Scalability",
                                                value: "Cloud-Ready",
                                                color: "cyan"
                                            },
                                            {
                                                icon: Shield,
                                                label: "Data Protection",
                                                value: "Enterprise RAID",
                                                color: "blue"
                                            },
                                            {
                                                icon: Activity,
                                                label: "Reliability",
                                                value: "99.99% Uptime",
                                                color: "emerald"
                                            },
                                        ].map((stat, i) => (
                                            <div
                                                key={i}
                                                className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group text-center"
                                            >
                                                <div className={`w-12 h-12 bg-${stat.color}-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                                    <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
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

                            {/* Floating icon */}
                            <motion.div
                                animate={{
                                    y: [-20, 20, -20],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -top-10 -right-10 p-6 bg-indigo-500/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
                            >
                                <Server className="w-12 h-12 text-white" />
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
                                Modernizing your data center is no longer optional.
                            </h2>
                            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                                <p>
                                    Applications are becoming more demanding, and data is growing exponentially. If your servers are aging or your storage is slow, your entire business slows down.
                                </p>
                                <p>
                                    At Enhance Tech, we deploy hardware that is fast, reliable, and ready for the future. Whether you need a powerful tower server for a small office or a scalable rack infrastructure for a data center.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square lg:aspect-video rounded-[40px] overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent z-10" />
                            <img
                                src="/lovable-uploads/modern-datacenter.webp"
                                alt="Modern Data Center Infrastructure"
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
                        <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-white">
                            Key Benefits
                        </motion.h2>
                        <motion.p {...fadeIn} className="text-slate-400 text-lg">
                            Discover how modernizing your infrastructure drives efficiency.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Application Performance",
                                desc: "Faster processors and NVMe flash storage ensure your ERP, CRM, and Databases run without lag.",
                                icon: Zap,
                                color: "from-amber-400 to-orange-500"
                            },
                            {
                                title: "Scalability",
                                desc: "Start small and grow effortlessly. Add nodes as your business expands without 'ripping and replacing'.",
                                icon: Scale,
                                color: "from-blue-400 to-indigo-500"
                            },
                            {
                                title: "Data Protection",
                                desc: "Built-in redundancy (RAID) ensures that a failed drive doesn't mean lost data.",
                                icon: ShieldCheck,
                                color: "from-emerald-400 to-teal-500"
                            },
                            {
                                title: "Virtualization Ready",
                                desc: "Hardware optimized for VMware and Hyper-V, run more VMs on fewer physical servers.",
                                icon: Server,
                                color: "from-purple-400 to-pink-500"
                            },
                            {
                                title: "Simplified Management",
                                desc: "Remote management tools allow IT to fix server issues without visiting the office.",
                                icon: Settings,
                                color: "from-cyan-400 to-blue-500"
                            },
                            {
                                title: "Maximum Uptime",
                                desc: "Enterprise-grade reliability ensures your critical business systems stay online 24/7.",
                                icon: Activity,
                                color: "from-red-400 to-rose-500"
                            }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-[32px] bg-slate-900 border border-white/5 hover:border-indigo-500/30 transition-all relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-5 blur-3xl group-hover:opacity-15 transition-opacity`} />
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6`}>
                                    <benefit.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-300 transition-colors">{benefit.title}</h3>
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
                        <motion.p {...fadeIn} className="text-slate-400 text-lg">We partner with the world&apos;s leading hardware manufacturers.</motion.p>
                    </div>

                    {/* Compute Section */}
                    <div className="mb-32">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/30" />
                            <h3 className="text-2xl font-bold px-6 py-2 bg-indigo-500/10 rounded-full text-indigo-400 border border-indigo-500/20">
                                1. Enterprise Compute: The Powerhouse Trio
                            </h3>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/30" />
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {[
                                {
                                    brand: "Dell Technologies",
                                    model: "Dell PowerEdge",
                                    desc: "Renowned for scalability and the industry-leading iDRAC management controller, making remote server management effortless.",
                                    img: "/lovable-uploads/enterprise-server.webp"
                                },
                                {
                                    brand: "HPE",
                                    model: "HPE ProLiant",
                                    desc: "The world's most secure industry-standard servers. Famous for their 'Silicon Root of Trust' which prevents compromised firmware code.",
                                    img: "/lovable-uploads/hpe-proliant.webp"
                                },
                                {
                                    brand: "Lenovo",
                                    model: "Lenovo ThinkSystem",
                                    desc: "Consistently ranked #1 in server reliability. Lenovo servers offer incredible uptime and value for performance-critical applications.",
                                    img: "/lovable-uploads/lenovo-thinksystem.webp"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeIn}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-slate-900/40 backdrop-blur-sm rounded-[32px] border border-white/5 overflow-hidden group hover:border-indigo-500/20 transition-all"
                                >
                                    <div className="h-48 relative">
                                        <img src={item.img} alt={item.brand} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                                        <div className="absolute bottom-4 left-6">
                                            <span className="text-indigo-400 font-bold text-sm uppercase tracking-widest">{item.brand}</span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h4 className="text-xl font-bold mb-4">{item.model}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                                        <div className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1" />
                                            <span className="text-xs text-slate-300">Certified Configuration</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Storage Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-500/30" />
                            <h3 className="text-2xl font-bold px-6 py-2 bg-emerald-500/10 rounded-full text-emerald-400 border border-emerald-500/20">
                                2. Smart Storage: Synology & QNAP
                            </h3>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-500/30" />
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {[
                                {
                                    name: "Synology",
                                    headline: "The Gold Standard for User-Friendly Storage",
                                    desc: "Their DSM operating system is as easy to use as a smartphone, with built-in apps for backing up Office 365 and syncing files.",
                                    color: "emerald",
                                    img: "/lovable-uploads/synology-nas-actual.webp"
                                },
                                {
                                    name: "QNAP",
                                    headline: "High Performance & Massive Connectivity",
                                    desc: "Known for powerful hardware specs. Featuring fast 10GbE networking and Thunderbolt ports, ideal for creative professionals.",
                                    color: "blue",
                                    img: "/lovable-uploads/qnap-nas-actual.webp"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeIn}
                                    className="relative group p-8 rounded-[40px] bg-slate-900 border border-white/5 overflow-hidden"
                                >
                                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                                        <div className="lg:w-1/2">
                                            <div className={`inline-block px-4 py-1 rounded-full bg-${item.color}-500/10 border border-${item.color}-500/20 text-${item.color}-400 text-xs font-black uppercase mb-4`}>
                                                {item.name}
                                            </div>
                                            <h4 className="text-2xl font-bold mb-4">{item.headline}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                                            <ul className="space-y-3">
                                                {['Enterprise NAS', 'Private Cloud', 'Flash Arrays'].map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                                                        <CheckCircle2 className={`w-3 h-3 text-${item.color}-400`} />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="lg:w-1/2 relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                            <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
            <section className="py-16 md:py-20 bg-[#050b1d]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center justify-center min-h-[600px]">
                        <div className="lg:w-1/3 flex flex-col justify-center">
                            <motion.div {...fadeIn}>
                                <h2 className="text-4xl font-extrabold mb-6 leading-tight">A Complete Solutions Portfolio</h2>
                                <p className="text-slate-400 mb-8">We provide everything from edge compute nodes to high-density storage arrays.</p>
                                <div className="space-y-4">
                                    {[
                                        "Rack & Tower Servers",
                                        "Network Attached Storage (NAS)",
                                        "Hybrid Storage Arrays",
                                        "Virtualization Infrastructure",
                                        "HPC Workstations",
                                        "Data Archiving Solutions"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                                <ChevronRight className="w-3 h-3 text-indigo-400" />
                                            </div>
                                            <span className="font-semibold text-slate-200">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { img: "/lovable-uploads/fortinet-partner-v2.png", title: "Fortinet" },
                                { img: "/lovable-uploads/avepoint-partner-v2.png", title: "AvePoint" },
                                { img: "/lovable-uploads/logitech-partner-v2.png", title: "Logitech" },
                                { img: "/lovable-uploads/dell-partner-v2.jpg", title: "Dell Technologies" },
                                { img: "/lovable-uploads/bitdefender-partner-v2.png", title: "Bitdefender" },
                                { img: "/lovable-uploads/lenovo-partner-v2.jpg", title: "Lenovo" },
                                { img: "/lovable-uploads/synology-partner-v2.jpg", title: "Synology" },
                                { img: "/lovable-uploads/qnap-partner-new.jpg", title: "QNAP" },
                                { img: "/lovable-uploads/silver-partner.png", title: "Silver Partner" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeIn}
                                    transition={{ delay: i * 0.1 }}
                                    className={`rounded-2xl bg-white p-4 flex flex-col items-center justify-center gap-4 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all cursor-default group overflow-hidden ${['Dell Technologies', 'Bitdefender', 'Lenovo'].includes(item.title)
                                        ? 'aspect-[1.8/1]'
                                        : 'aspect-square'
                                        }`}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-[85%] h-[85%] object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Enhance Advantage */}
            <section className="py-16 md:py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 rounded-[48px] p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 rounded-full mb-6 border border-indigo-500/20">
                                    <ShieldCheck className="w-4 h-4 text-indigo-400" />
                                    <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-indigo-400">The Enhance Advantage</span>
                                </motion.div>
                                <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                                    We Don't Just Box-Drop.<br />
                                    <span className="text-indigo-400 text-3xl">We Engineer.</span>
                                </motion.h2>
                                <motion.p {...fadeIn} className="text-slate-400 text-lg mb-8">
                                    At Enhance Tech, our solution architects ensure the perfect fit.
                                </motion.p>

                                <div className="space-y-8">
                                    {[
                                        {
                                            title: "Workload Sizing",
                                            desc: "We analyze your applications (SQL, Tally, ERP) to calculate exactly how much RAM and CPU cores you need."
                                        },
                                        {
                                            title: "RAID Configuration",
                                            desc: "We configure your drives (RAID 1, 5, 6, or 10) to balance speed and data protection."
                                        },
                                        {
                                            title: "Virtualization Setup",
                                            desc: "We can pre-install and license VMware or Windows Server so your hardware arrives ready to run."
                                        }
                                    ].map((item, i) => (
                                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="flex gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center font-bold text-indigo-400 text-xs">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                                <p className="text-slate-400 text-sm">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-3xl aspect-square">
                                    <img src="/lovable-uploads/precision-engineering.webp" alt="Precision IT Engineering" className="absolute inset-0 w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                                            <div className="p-3 bg-indigo-500 rounded-xl">
                                                <Settings className="w-6 h-6 text-white animate-spin-slow" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">Custom Build</div>
                                                <div className="text-slate-400 text-xs tracking-wider uppercase">Optimized Performance</div>
                                            </div>
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
                <div className="absolute inset-0 bg-indigo-600/5 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div {...fadeIn}>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
                            Upgrade Your Infrastructure Today
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Stop waiting for slow applications. Enhance your processing power now with enterprise-grade solutions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/contact" className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl transition-all shadow-2xl shadow-indigo-500/40 flex items-center gap-2 group">
                                Get a Server Quote
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/demo" className="px-10 py-5 bg-white hover:bg-slate-100 text-slate-900 font-black rounded-2xl transition-all shadow-2xl flex items-center gap-2">
                                Contact Infrastructure Team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ComputeStorage;
