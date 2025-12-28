import { ArrowRight, CheckCircle2, Mic, Video, Monitor, Calendar, Wifi, Users, Layers, ShieldCheck, Zap, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import SEO, { organizationSchema, createServiceSchema, createBreadcrumbSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";

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

export default function SmartMeetingRooms() {
    // Structured data for meeting room AV solutions
    const serviceSchema = createServiceSchema(
        "Smart Meeting Room Solutions",
        "Transform your collaboration spaces with professional AV solutions from Logitech, Yealink, and GoGet. Microsoft Teams Rooms, video conferencing systems, and intelligent room booking for the hybrid office in Dubai, UAE."
    );

    const breadcrumbSchema = createBreadcrumbSchema([
        { name: "Home", url: "https://itenhance.tech" },
        { name: "Solutions", url: "https://itenhance.tech/solutions" },
        { name: "Smart Meeting Rooms", url: "https://itenhance.tech/solutions/meeting-room-av" }
    ]);

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            serviceSchema,
            breadcrumbSchema,
            {
                "@type": "Product",
                "name": "Professional Meeting Room AV Systems",
                "description": "Complete meeting room solutions with Logitech, Yealink, and GoGet for video conferencing and collaboration",
                "brand": organizationSchema,
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "AED",
                    "areaServed": {
                        "@type": "Country",
                        "name": "United Arab Emirates"
                    }
                }
            }
        ]
    };

    return (
        <main className="min-h-screen page-bg-light overflow-x-hidden relative">
            <SEO
                title="Smart Meeting Rooms & Workspace Management | Enhance Tech"
                description="Modernize your meetings with certified solutions from Logitech, Yealink, and GoGet. Video conferencing and room booking for the hybrid office."
                keywords="Smart Meeting Rooms, Video Conferencing, Logitech, Yealink, GoGet, Room Booking, Hybrid Office, AV Solutions"
                canonicalUrl="https://itenhance.tech/solutions/meeting-room-av"
                structuredData={structuredData}
            />


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

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                                <Video className="w-4 h-4 text-blue-400" />
                                <span className="text-sm font-semibold text-blue-100 uppercase tracking-wider">Hybrid Collaboration</span>
                            </motion.div>
                            <motion.h1
                                {...fadeIn}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tighter"
                            >
                                Smart <br className="hidden xl:block" />
                                Meeting Rooms:
                                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-cyan-400 animate-pulse-slow">
                                    Collaboration Without Limits
                                </span>
                            </motion.h1>
                            <motion.p
                                {...fadeIn}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
                            >
                                Enhance Your Meetings. <span className="text-white font-bold">Be Seen, Be Heard, Be Productive.</span> The bridge between your in-office team and the world.
                            </motion.p>
                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-4"
                            >
                                <Link to="/contact">
                                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/30 rounded-full px-8 h-14 text-base font-semibold transition-all hover:scale-105 active:scale-95 group">
                                        Get a Room Design Quote
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 backdrop-blur-md rounded-full px-8 h-14 text-base font-semibold transition-all border-2 hover:border-white/60">
                                        Contact Our AV Team
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
                            <div className="relative z-10 p-1 rounded-[40px] shadow-[0_0_50px_-12px_rgba(37,99,235,0.3)]">
                                <img
                                    src="/lovable-uploads/meeting_room_hero.webp"
                                    alt="Smart Meeting Room"
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
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                                Collaboration <br />
                                Redefined
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p className="font-semibold text-slate-900">
                                    The way we meet has changed. In the hybrid world, a meeting room isn't just a table and a phone anymore.
                                </p>
                                <p>
                                    It is a bridge between your in-office team and your remote clients. If your remote participants can't see the whiteboard or hear the person at the end of the table, collaboration breaks down.
                                </p>
                                <p>
                                    At Enhance Tech, we design intelligent meeting spaces that work simply. Walk in, touch one button, and start your meeting. No dongles, no dial-ins, no frustration.
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
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                                    alt="Collaborative Meeting"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                    loading="lazy"
                                />
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
                            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-[0.2em]">Key Benefits</span>
                        </motion.div>
                        <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">Why Upgrade Your Rooms?</motion.h2>
                        <motion.p {...fadeIn} className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Discover how professional AV transforms your meeting culture.
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
                            { icon: ArrowRight, title: "One-Touch Join", desc: "Start Teams or Zoom instantly. No need to bring a laptop to 'host' the call." },
                            { icon: Users, title: "Meeting Equity", desc: "AI cameras zoom in on the active speaker so remote participants see faces." },
                            { icon: Calendar, title: "Eliminate Double Bookings", desc: "LED panels outside show clearly if room is 'Occupied' (Red) or 'Available' (Green)." },
                            { icon: Wifi, title: "Wireless Casting", desc: "Present screen from any device without hunting for an HDMI cable." },
                            { icon: Mic, title: "Crystal Clear Audio", desc: "Ceiling mics and soundbars filter out air conditioning and typing noise." },
                            { icon: Monitor, title: "Interactive Whiteboarding", desc: "Draw, annotate, and save brainstorming sessions directly to the cloud." },
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn}
                                whileHover={{
                                    scale: 1.05,
                                    y: -10,
                                    boxShadow: "0 20px 40px -15px rgba(37,99,235,0.3)"
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
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                            What's Included
                        </motion.h2>
                        <motion.p {...fadeIn} className="text-slate-600 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
                            End-to-end Audio Visual solutions for every space.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Microsoft Teams Rooms (MTR)",
                            "All-in-One Video Bars",
                            "Room Booking Panels",
                            "Interactive Touch Displays",
                            "Wireless Presentation",
                            "Occupancy Analytics"
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-300 transition-all"
                            >
                                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 text-lg">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Ecosystem */}
            <section className="py-24 bg-slate-950 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Our Technology Ecosystem</motion.h2>
                        <motion.p {...fadeIn} className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                            We enhance your workspace with hardware from the global leaders in Audio Visual collaboration.
                        </motion.p>
                    </div>

                    <div className="space-y-32">
                        {/* Logitech */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative lg:order-1"
                            >
                                <div className="absolute -inset-6 bg-teal-500/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                                <motion.div
                                    whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02, transition: { duration: 0.4 } }}
                                    className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-teal-500/10 overflow-hidden group shadow-2xl hover:border-teal-500/30 transition-colors"
                                >
                                    <div className="relative z-10">
                                        <div className="px-4 py-1.5 bg-teal-500/20 border border-teal-500/30 rounded-full inline-block mb-6">
                                            <span className="text-teal-400 font-bold tracking-[0.3em] uppercase text-[10px]">The Gold Standard</span>
                                        </div>
                                        <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-teal-400 transition-colors">Logitech</h3>
                                        <p className="text-teal-400/90 text-lg mb-8 font-medium italic">"Rally Bar & Tap Solutions"</p>
                                        <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                            Logitech brings studio-quality video to the meeting room. Famous for reliability and ease of use—perfect for standardized experiences across global offices.
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                { title: "Rally Bar", desc: "All-in-one video bar with cinema-quality optics and motorized camera framing." },
                                                { title: "RightSense™ AI", desc: "Adjusts light balance and suppresses background noise automatically." },
                                                { title: "Logitech Tap", desc: "Dedicated touch controller to join meetings with a single tap." }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex gap-4 group/item">
                                                    <div className="w-1 h-auto bg-teal-500/30 rounded-full group-hover/item:bg-teal-500 transition-colors" />
                                                    <div>
                                                        <h4 className="font-bold text-white text-base group-hover/item:text-teal-200 transition-colors">{item.title}</h4>
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
                                    src="https://resource.logitech.com/content/dam/logitech/en/products/video-conferencing/rally-bar/buy/gallery/rally-bar-graphite-05.png"
                                    alt="Logitech Solutions"
                                    className="rounded-[32px] shadow-2xl border border-white/5 opacity-80 hover:opacity-100 transition-opacity bg-white/5"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>

                        {/* Yealink */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:order-2 relative"
                            >
                                <div className="absolute -inset-6 bg-blue-600/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                                <motion.div
                                    whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02, transition: { duration: 0.4 } }}
                                    className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-blue-500/10 overflow-hidden group shadow-2xl hover:border-blue-500/30 transition-colors"
                                >
                                    <div className="relative z-10">
                                        <div className="px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full inline-block mb-6">
                                            <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-[10px]">The Versatile Choice</span>
                                        </div>
                                        <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-blue-400 transition-colors">Yealink</h3>
                                        <p className="text-blue-400/90 text-lg mb-8 font-medium italic">"MeetingBoards & Android Bars"</p>
                                        <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                            Yealink offers one of the widest portfolios in the industry, from huddle cameras to fully interactive digital whiteboards. Feature-rich solutions at competitive prices.
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                { title: "Yealink MeetingBoard", desc: "65\" or 86\" interactive touch screen with built-in 4K camera. Digital canvas for creatives." },
                                                { title: "MeetingBar A20/A30", desc: "Android-based bars running Teams/Zoom natively without a PC." },
                                                { title: "Wireless Mics", desc: "Expansion microphones ensure you are heard cleanly from anywhere." }
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
                                    src="https://www.yealink.com/website-service/attachment/product/image/20241021/202410210321492410be7.png"
                                    alt="Yealink Solutions"
                                    className="rounded-[32px] shadow-2xl border border-white/5 opacity-80 hover:opacity-100 transition-opacity bg-white/5"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>

                        {/* GoGet */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative lg:order-1"
                            >
                                <div className="absolute -inset-6 bg-green-500/10 rounded-[50px] blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                                <motion.div
                                    whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02, transition: { duration: 0.4 } }}
                                    className="relative bg-slate-900/60 backdrop-blur-md p-12 rounded-[48px] border border-green-500/10 overflow-hidden group shadow-2xl hover:border-green-500/30 transition-colors"
                                >
                                    <div className="relative z-10">
                                        <div className="px-4 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full inline-block mb-6">
                                            <span className="text-green-400 font-bold tracking-[0.3em] uppercase text-[10px]">Workspace Management</span>
                                        </div>
                                        <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-white group-hover:text-green-400 transition-colors">GoGet</h3>
                                        <p className="text-green-400/90 text-lg mb-8 font-medium italic">"Room Booking & Wayfinding"</p>
                                        <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                                            Stop the arguments over who booked the conference room. GoGet provides elegant scheduling displays that sync directly with Outlook or Google Calendar.
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                { title: "Room Display X", desc: "LED frame glows Green (Free) or Red (Busy). See availability from down the hall." },
                                                { title: "Smart Check-In", desc: "Auto-release room if user doesn't check in within 15 mins." },
                                                { title: "Email Integration", desc: "Book directly from your calendar invite." }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex gap-4 group/item">
                                                    <div className="w-1 h-auto bg-green-500/30 rounded-full group-hover/item:bg-green-500 transition-colors" />
                                                    <div>
                                                        <h4 className="font-bold text-white text-base group-hover/item:text-green-200 transition-colors">{item.title}</h4>
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
                                    src="https://gogetcorp.com/wp-content/uploads/2022/09/Goget-One.png"
                                    alt="GoGet Solutions"
                                    className="rounded-[32px] shadow-2xl border border-white/5 opacity-80 hover:opacity-100 transition-opacity bg-white/5"
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
                            <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 rounded-full mb-6 border border-blue-200">
                                <ShieldCheck className="w-4 h-4 text-blue-600" />
                                <span className="text-[10px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 uppercase tracking-[0.3em]">The Enhance Advantage</span>
                            </motion.div>
                            <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                                We Don't Just Hang TVs. <br /> We Design Experiences.
                            </motion.h2>
                            <motion.p {...fadeIn} className="text-slate-600 text-lg leading-relaxed">
                                Bad audio and messy cables ruin meetings. At Enhance Tech, we obsess over the details to ensure flawless execution.
                            </motion.p>
                        </div>

                        <div className="lg:w-2/3 grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Clean Cabling", desc: "We hide wires inside tables, walls, and floors. Your table remains clutter-free.", icon: Layers },
                                { title: "Acoustic Calibration", desc: "We test the audio to ensure there is no echo or feedback loop.", icon: Layout },
                                { title: "User Training", desc: "We don't leave until your team feels confident using the one-touch system.", icon: Users }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:bg-white hover:border-blue-500/30 hover:shadow-2xl transition-all duration-500 group shadow-sm"
                                >
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                                        <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">{item.title}</h3>
                                    <p className="text-slate-600 text-base leading-relaxed group-hover:text-slate-700 transition-colors">{item.desc}</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Upgrade Your Meetings Today</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        Stop shouting at the speakerphone. Enhance your collaboration now.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full px-8 h-14 text-base font-semibold shadow-lg shadow-blue-500/30 transition-all hover:scale-105">
                                Get a Room Design Quote
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="border-slate-600 text-white rounded-full px-8 h-14 text-base font-semibold hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 transition-all hover:border-slate-500">
                                Contact Our AV Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>


        </main>
    );
}
