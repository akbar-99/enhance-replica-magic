import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Briefcase,
    Users,
    GraduationCap,
    Globe,
    Shield,
    TrendingUp,
    ChevronDown,
    CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Careers() {
    const [expandedJob, setExpandedJob] = useState<number | null>(null);

    const toggleJob = (index: number) => {
        setExpandedJob(expandedJob === index ? null : index);
    };

    const benefits = [
        {
            icon: Globe,
            title: "Remote Work",
            description: "Work from anywhere with flexible arrangements",
            color: "from-emerald-500 to-teal-600",
        },
        {
            icon: GraduationCap,
            title: "Learning & Growth",
            description: "Opportunities for career development and skill building",
            color: "from-blue-500 to-indigo-600",
        },
        {
            icon: Users,
            title: "Collaborative Team",
            description: "Work with talented professionals in a supportive environment",
            color: "from-purple-500 to-pink-600",
        },
        {
            icon: Shield,
            title: "IT & Cybersecurity Focus",
            description: "Join a growing company in cutting-edge technology",
            color: "from-cyan-500 to-blue-600",
        },
    ];

    const jobs = [
        {
            title: "Lead Generation Specialist",
            type: "Full-time, Permanent",
            location: "Remote",
            experience: "3 years",
            summary:
                "Join our growing team as a Lead Generation Specialist. You'll be responsible for identifying potential clients, performing targeted outreach, and supporting sales operations.",
            responsibilities: [
                {
                    category: "Lead Generation & Outreach",
                    items: [
                        "Identify and research potential clients across various industries",
                        "Perform outreach through LinkedIn, email campaigns, and phone calls",
                        "Build and maintain a strong prospect pipeline",
                        "Qualify leads based on business needs, budget, and decision-making capability",
                        "Schedule online meetings and demos for the sales team",
                    ],
                },
                {
                    category: "Sales Coordination",
                    items: [
                        "Support the sales team in preparing proposals, quotations, and presentations",
                        "Ensure timely follow-ups with leads and existing clients",
                        "Maintain accurate and updated records on CRM tools",
                        "Coordinate with internal technical teams for timely responses and project updates",
                        "Assist in end-to-end sales support, ensuring smooth workflows",
                    ],
                },
                {
                    category: "Client Interaction",
                    items: [
                        "Act as the first point of contact for new prospects",
                        "Handle basic client inquiries and route them to relevant teams",
                        "Maintain strong professional relationships to enhance client satisfaction",
                    ],
                },
            ],
            requirements: [
                "Minimum 3 years of experience in sales coordination, lead generation, or a related role",
                "Strong experience with CRM tools (HubSpot, Zoho)",
                "Excellent communication, organizational, and follow-up skills",
                "Proven experience in outreach via LinkedIn, calls, and emails",
                "Ability to manage multiple tasks and deadlines efficiently",
                "Experience preparing proposals and supporting end-to-end sales activities",
            ],
            preferred: [
                "Knowledge of IT / Tech services sales (advantage)",
                "Ability to work independently with minimal supervision",
                "Strong research and analytical skills",
                "Results-oriented mindset with a focus on meeting targets",
            ],
        },
        {
            title: "Sales Coordinator (Female)",
            type: "Full-time, Permanent",
            location: "Remote",
            experience: "2 years",
            summary:
                "We're looking for a proactive and highly organized Sales Coordinator to join our team. You'll play a key role in identifying clients, performing outreach, and coordinating between teams.",
            responsibilities: [
                {
                    category: "Lead Generation & Outreach",
                    items: [
                        "Identify and research potential clients across various industries",
                        "Perform outreach through LinkedIn, email campaigns, and phone calls",
                        "Build and maintain a strong prospect pipeline",
                        "Qualify leads based on business needs, budget, and decision-making capability",
                        "Schedule online meetings and demos for the sales team",
                    ],
                },
                {
                    category: "Sales Coordination",
                    items: [
                        "Support the sales team in preparing proposals, quotations, and presentations",
                        "Ensure timely follow-ups with leads and existing clients",
                        "Maintain accurate and updated records on CRM tools",
                        "Coordinate with internal technical teams for timely responses and project updates",
                        "Assist in end-to-end sales support, ensuring smooth workflows",
                    ],
                },
                {
                    category: "Client Interaction",
                    items: [
                        "Act as the first point of contact for new prospects",
                        "Handle basic client inquiries and route them to relevant teams",
                        "Maintain strong professional relationships to enhance client satisfaction",
                    ],
                },
            ],
            requirements: [
                "Minimum 2 years of experience in sales coordination, lead generation, or a related role",
                "Strong experience with CRM tools (HubSpot, Zoho)",
                "Excellent communication, organizational, and follow-up skills",
                "Proven experience in outreach via LinkedIn, calls, and emails",
                "Ability to manage multiple tasks and deadlines efficiently",
                "Experience preparing proposals and supporting end-to-end sales activities",
            ],
            preferred: [
                "Knowledge of IT / Tech services sales (advantage)",
                "Ability to work independently with minimal supervision",
                "Strong research and analytical skills",
                "Results-oriented mindset with a focus on meeting targets",
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <SEO
                title="Careers at Enhance Tech | Join Our Remote Team"
                description="Join Enhance Tech's growing team. We're hiring Lead Generation Specialists and Sales Coordinators for remote positions. Work in IT & Cybersecurity with flexible arrangements."
                keywords="Careers, Jobs, Remote Work, Lead Generation, Sales Coordinator, Enhance Tech, IT Jobs, Dubai Jobs"
                canonicalUrl="https://itenhance.tech/careers"
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-cyan-100/40 via-blue-100/30 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-100/40 via-purple-100/30 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full shadow-sm text-slate-700 text-sm font-medium mb-8"
                        >
                            <Briefcase className="w-4 h-4 text-cyan-600" />
                            <span>We're Hiring</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
                        >
                            Build Your Career with{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                                Enhance Tech
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-light"
                        >
                            Join our global team driving innovation in IT & Cybersecurity.
                            <br className="hidden md:block" />
                            Build your career while making a real impact.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <a href="#open-positions">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
                                >
                                    View Open Positions
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>




            {/* Open Positions */}
            <section id="open-positions" className="py-24 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                        >
                            Open{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                                Positions
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-slate-600 max-w-3xl mx-auto"
                        >
                            Explore opportunities to join our team and make an impact
                        </motion.p>
                    </div>

                    <div className="space-y-6">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl border-2 border-slate-200 hover:border-cyan-300 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Job Header */}
                                <div
                                    onClick={() => toggleJob(index)}
                                    className="p-8 cursor-pointer hover:bg-slate-50/50 transition-colors duration-200"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                                    <Briefcase className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                                                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                                                        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-lg">
                                                            <Briefcase className="w-4 h-4" />
                                                            {job.type}
                                                        </span>
                                                        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-lg">
                                                            <Globe className="w-4 h-4" />
                                                            {job.location}
                                                        </span>
                                                        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-lg">
                                                            <TrendingUp className="w-4 h-4" />
                                                            {job.experience} experience
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 leading-relaxed text-lg">{job.summary}</p>
                                        </div>
                                        <div className="flex items-center gap-4 lg:flex-col lg:items-end">
                                            <Link to="/apply-job">
                                                <Button
                                                    size="lg"
                                                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 rounded-xl shadow-lg"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Apply Now
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <button className="text-slate-400 hover:text-slate-600">
                                                <ChevronDown
                                                    className={`w-6 h-6 transition-transform duration-300 ${expandedJob === index ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Job Details - Expandable */}
                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedJob === index ? "max-h-[4000px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="px-8 pb-8 space-y-10 border-t-2 border-slate-100 pt-8 bg-slate-50/30">
                                        {/* Key Responsibilities */}
                                        <div>
                                            <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                                <div className="w-1.5 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />
                                                Key Responsibilities
                                            </h4>
                                            <div className="space-y-8">
                                                {job.responsibilities.map((resp, idx) => (
                                                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                                                        <h5 className="font-bold text-slate-900 mb-4 text-lg">{resp.category}</h5>
                                                        <ul className="space-y-3">
                                                            {resp.items.map((item, itemIdx) => (
                                                                <li key={itemIdx} className="flex items-start gap-3 text-slate-600">
                                                                    <div className="w-2 h-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mt-2 shrink-0" />
                                                                    <span className="leading-relaxed">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Requirements */}
                                        <div>
                                            <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                                <div className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full" />
                                                Requirements
                                            </h4>
                                            <div className="bg-white p-6 rounded-xl border border-slate-200">
                                                <ul className="space-y-4">
                                                    {job.requirements.map((req, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                                                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                                                            <span className="leading-relaxed">{req}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Preferred Skills */}
                                        <div>
                                            <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                                <div className="w-1.5 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full" />
                                                Preferred Skills
                                            </h4>
                                            <div className="bg-white p-6 rounded-xl border border-slate-200">
                                                <ul className="space-y-4">
                                                    {job.preferred.map((pref, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                                                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 shrink-0" />
                                                            <span className="leading-relaxed">{pref}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Apply CTA */}
                                        <div className="pt-6">
                                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-2xl border-2 border-cyan-100">
                                                <div>
                                                    <p className="font-bold text-slate-900 mb-2 text-lg">Ready to Apply?</p>
                                                    <p className="text-slate-600 leading-relaxed">
                                                        Submit your application and let's start a conversation
                                                    </p>
                                                </div>
                                                <Link to="/apply">
                                                    <Button
                                                        size="lg"
                                                        className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 rounded-xl shadow-lg whitespace-nowrap"
                                                    >
                                                        Apply Now
                                                        <ArrowRight className="ml-2 h-5 w-5" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internship Program */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                        >
                            Internship{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                                Program
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            Start your career in IT & Cybersecurity. Gain real-world experience with industry-leading professionals.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-cyan-100">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                                    <GraduationCap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Launch Your Tech Career
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Our comprehensive internship program is designed to give aspiring tech professionals hands-on experience in IT services, cybersecurity, and cloud technologies. Work alongside experienced mentors on real projects that matter.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                                        <span className="text-slate-700">6-month structured program</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                                        <span className="text-slate-700">Mentorship from industry experts</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                                        <span className="text-slate-700">Hands-on project experience</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                                        <span className="text-slate-700">Potential for full-time employment</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all">
                                <h4 className="font-bold text-slate-900 text-lg mb-3">What You'll Learn</h4>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-600">•</span>
                                        <span>IT infrastructure and cloud technologies</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-600">•</span>
                                        <span>Cybersecurity best practices and tools</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-600">•</span>
                                        <span>Client communication and project management</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-600">•</span>
                                        <span>Industry-standard tools and workflows</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                                <h4 className="font-bold text-slate-900 text-lg mb-3">Who Should Apply</h4>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600">•</span>
                                        <span>Students pursuing IT, Computer Science, or related fields</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600">•</span>
                                        <span>Recent graduates looking to gain practical experience</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600">•</span>
                                        <span>Passionate about technology and eager to learn</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600">•</span>
                                        <span>Strong communication and teamwork skills</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 text-white">
                                <h4 className="font-bold text-lg mb-3">Ready to Start?</h4>
                                <p className="mb-4 text-cyan-50">
                                    Applications for our next internship cohort are now open. Submit your application today!
                                </p>
                                <Link to="/apply">
                                    <Button
                                        size="lg"
                                        className="bg-white text-cyan-600 hover:bg-slate-100 px-6 rounded-xl shadow-lg w-full"
                                    >
                                        Apply for Internship
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Why Join Us */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                        >
                            Why Choose{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                                Enhance Tech
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            We offer more than just a job – we provide a platform for growth, learning, and meaningful work
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="h-full p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300">
                                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <benefit.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Don't See Your Perfect Role?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto"
                    >
                        We're always on the lookout for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link to="/contact">
                            <Button
                                size="lg"
                                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl font-bold shadow-2xl hover:shadow-white/20 transition-all"
                            >
                                Get in Touch
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
