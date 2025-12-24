import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
    ArrowRight,
    Briefcase,
    Users,
    GraduationCap,
    Globe,
    Rocket,
    Laptop,
    Heart,
    ChevronDown,
    ChevronRight,
    Mail,
    MapPin,
    FileText
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface JobOpening {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
}

const jobOpenings: JobOpening[] = [
    {
        id: "1",
        title: "Senior Security Engineer",
        department: "Engineering",
        location: "Dubai, UAE",
        type: "Full-time",
        description: "Join our core security team to design and implement AI-native data protection systems for global enterprises."
    },
    {
        id: "2",
        title: "Cloud Infrastructure Architect",
        department: "Cloud Solutions",
        location: "Dubai, UAE",
        type: "Full-time",
        description: "Lead the design of scalable, secure cloud environments for our most demanding enterprise clients."
    },
    {
        id: "3",
        title: "Digital Marketing Specialist",
        department: "Marketing",
        location: "Remote / Dubai",
        type: "Full-time",
        description: "Drive our global brand presence and help us tell the story of the next generation of data security."
    },
    {
        id: "4",
        title: "Cybersecurity Analyst (Internship)",
        department: "Security Operations",
        location: "Dubai, UAE",
        type: "Internship",
        description: "Perfect for students or recent graduates looking to kickstart their career in high-stakes cybersecurity."
    }
];

const cultureValues = [
    {
        icon: Rocket,
        title: "Innovation Driven",
        description: "We don't just follow trends; we set them. We're building the future of AI-native security."
    },
    {
        icon: Users,
        title: "Inclusive Culture",
        description: "Diverse perspectives fuel our growth. We celebrate unique backgrounds and ideas."
    },
    {
        icon: Laptop,
        title: "Work with Impact",
        description: "Your work protects critical data for organizations that change the world every day."
    },
    {
        icon: Heart,
        title: "Health & Wellness",
        description: "We believe in a balanced life. Flexible hours, comprehensive health plans, and mental health support."
    }
];

export default function Careers() {
    const [expandedJob, setExpandedJob] = useState<string | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <main className="min-h-screen bg-white">
            <SEO
                title="Careers at Enhance Tech | Join Our Team"
                description="Join Enhance Tech and help us build the future of AI-native data security. Explore job openings and internship opportunities in Dubai and beyond."
                keywords="careers, jobs, internship, cybersecurity jobs, tech careers Dubai, hire Enhance Tech"
                canonicalUrl="https://itenhance.tech/company/careers"
            />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900 border-b border-primary/20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                        alt="Enhance Tech Team"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0%,transparent_70%)]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full mb-6 border border-primary/30">
                            <Rocket className="w-4 h-4 text-primary-foreground" />
                            <span className="text-sm font-medium text-primary-foreground">Global Growth Opportunity</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Build the Future of <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Secure Innovation</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                            At Enhance Tech, we're not just building products; we're building a safer digital world. We're looking for passionate thinkers and bold creators to join our mission.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#positions" className="btn-primary px-8 py-4 text-lg">
                                View Openings
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                            <Link to="/contact" className="btn-secondary text-white border-slate-500 hover:bg-slate-800 px-8 py-4 text-lg">
                                Talk to HR
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Culture & Values</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            We empower our team to take ownership, innovate fearlessly, and grow together in a culture built on trust and transparency.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {cultureValues.map((value, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <value.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Internship Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/95" />
                <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070"
                        alt="Internship Mentorship"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                            <GraduationCap className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Next-Gen Talent</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Internship & Graduate Program</h2>
                        <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                            Kickstart your career with hands-on experience in the most advanced tech environment. Our internship program offer real-world projects, direct mentorship from industry experts, and a clear path to full-time roles.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Hands-on experience with AI-native security stacks",
                                "Personal mentorship from senior engineers and architects",
                                "Regular networking sessions with industry leaders",
                                "Opportunities to contribute to open-source and proprietary research"
                            ].map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-white">
                                    <div className="mt-1 bg-white/20 rounded-full p-1">
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/contact" className="bg-white text-primary hover:bg-slate-100 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-black/20">
                            Apply for Internship
                        </Link>
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section id="positions" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Open Positions</h2>
                            <p className="text-slate-600 text-lg">Current opportunities to join our global team.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-slate-50">
                                All Departments
                            </div>
                            <div className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-slate-50">
                                Dubai, UAE
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {jobOpenings.map((job) => (
                            <div
                                key={job.id}
                                className={`border border-slate-200 rounded-3xl overflow-hidden transition-all duration-300 ${expandedJob === job.id ? 'shadow-xl border-primary/20' : 'hover:border-primary/30'}`}
                            >
                                <button
                                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                                    className="w-full flex flex-col md:flex-row md:items-center justify-between p-6 sm:p-8 text-left group"
                                >
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                                                {job.department}
                                            </span>
                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                                {job.type}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                                            {job.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-slate-500 mt-2 text-sm">
                                            <MapPin className="w-4 h-4" />
                                            {job.location}
                                        </div>
                                    </div>
                                    <div className="mt-4 md:mt-0 flex items-center gap-4">
                                        <div className={`p-2 rounded-full border border-slate-200 transition-all duration-300 ${expandedJob === job.id ? 'bg-primary border-primary rotate-180' : 'group-hover:bg-slate-50'}`}>
                                            <ChevronDown className={`w-6 h-6 ${expandedJob === job.id ? 'text-white' : 'text-slate-400'}`} />
                                        </div>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {expandedJob === job.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 sm:px-8 pb-8 pt-0 border-t border-slate-100 bg-slate-50/50">
                                                <div className="max-w-3xl py-6">
                                                    <p className="text-slate-700 leading-relaxed mb-6">
                                                        {job.description}
                                                    </p>
                                                    <div className="flex gap-4">
                                                        <button className="btn-primary">
                                                            Apply Now
                                                        </button>
                                                        <button className="px-6 py-2 text-slate-600 hover:text-primary font-medium">
                                                            View Full Specs
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resume CTA */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px] rounded-full translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-accent/10 blur-[100px] rounded-full -translate-x-1/2" />

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 md:p-16 text-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/20">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't see the right role?</h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We're always looking for exceptional talent. If you're passionate about what we do, send us your resume and tell us where you'd fit in.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a
                                href="mailto:social@itenhance.tech?subject=General Application - [Your Name]"
                                className="btn-primary px-10 py-5 text-xl flex items-center justify-center"
                            >
                                <FileText className="w-6 h-6 mr-3" />
                                Submit Resume
                            </a>
                            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-5 rounded-full transition-all duration-300 border border-white/10 flex items-center justify-center">
                                Contact Recruiting
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
