
import { Search, Map, Rocket, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        icon: Search,
        title: "1. Kickoff & Discovery",
        description: "We begin with a collaborative session to meet your team, define success metrics, and understand your specific requirements.",
    },
    {
        icon: Map,
        title: "2. Audit & Strategy",
        description: "We analyze your current setup to identify opportunities, then present a clear roadmap tailored to your goals.",
    },
    {
        icon: Rocket,
        title: "3. Seamless Integration",
        description: "Our experts handle the technical setup and configuration behind the scenes, ensuring your daily operations continue uninterrupted.",
    },
    {
        icon: GraduationCap,
        title: "4. Training & Go-Live",
        description: "We don’t just flip a switch. We provide full training for your staff and remain on standby to ensure a successful launch.",
    },
];

const OnboardingProcess = () => {
    return (
        <section className="bg-[#020817] py-10 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-white"
                    >
                        Our Onboarding Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-sm md:text-base font-medium max-w-2xl mx-auto"
                    >
                        We have refined our onboarding into a simple 4-step framework designed to get you up and running with zero stress.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[45px] left-0 w-full h-[2px] bg-slate-800/50">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0"
                        />
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                                className="group relative flex flex-col items-center text-center"
                            >
                                {/* Icon Circle */}
                                <motion.div
                                    whileHover={{ scale: 1.1, borderColor: "rgba(59, 130, 246, 0.5)", backgroundColor: "rgba(23, 37, 84, 0.3)" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="w-24 h-24 bg-[#0F172A] border border-slate-700/50 rounded-full flex items-center justify-center mb-8 relative z-10 cursor-pointer shadow-xl shadow-black/20"
                                >
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <step.icon className="w-10 h-10 text-cyan-400 group-hover:text-blue-400 transition-colors duration-500" />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-slate-400 text-xs leading-relaxed max-w-[240px] px-1">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OnboardingProcess;
