import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Code2, Smartphone, Database, Layout, Layers, Terminal, Rocket, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';

// Reusing assets
import webDevImg from '@/assets/features/web-development.png';
import mobileImg from '@/assets/features/modern-workplace.png'; // Devices/Screens
import softwareImg from '@/assets/consultancy.png'; // Logic/Structure
import designImg from '@/assets/managed-it.png'; // Visuals/Screens

export default function SoftwareDevelopment() {
    return (
        <main className="min-h-screen page-bg-light overflow-x-hidden">
            <SEO
                title="Custom Software, Web Design & Mobile App Development | Enhance Tech"
                description="Build custom websites and high-performance mobile apps with Enhance Tech. We offer tailored software development, API integration, and UI/UX design for your business."
                keywords="Software Development, Web Design, Mobile Apps, API Integration, UI/UX Design, Dubai, UAE"
                canonicalUrl="https://itenhance.tech/services/software-web-development"
            />

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden page-section-blue">
                <div className="absolute inset-0 bg-hero-gradient opacity-90" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />

                {/* Animated Background Blobs */}
                <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[120px] animate-pulse delay-700" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-pink-500 mb-6 animate-fade-up">
                            Build Custom Websites and High-Performance Applications
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 animate-fade-up animation-delay-200">
                            Tailored Digital Solutions for Your Brand
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 animate-fade-up animation-delay-400">
                            <Link to="/contact">
                                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25">
                                    Start Your Project Today
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-2xl blur-xl" />
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                                alt="Software Development Team"
                                className="relative rounded-2xl shadow-2xl border border-slate-100"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">About Software & Web Development</span>
                            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6 text-slate-900">
                                Turning Ideas into Digital Reality
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed">
                                <p>
                                    In a digital-first world, your website and applications are often the first point of contact with your customers. Off-the-shelf software can only take you so far; to truly differentiate your brand, you need technology built specifically for you.
                                </p>
                                <p>
                                    Software & Web Development at Enhance Tech is about more than just code. We design, develop, and deploy custom digital solutions that align perfectly with your business goals.
                                </p>
                                <p>
                                    From stunning corporate websites to complex mobile apps and internal automation tools, we build the software that powers your growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Development Solutions</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Scalable, secure, and user-centric digital products.</p>
                    </div>

                    <div className="space-y-32">
                        {/* Solution 1 */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 relative group">
                                <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                                <img
                                    src={webDevImg}
                                    alt="Web Development 3D Illustration"
                                    className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500"
                                />
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 rotate-3 hover:rotate-6 transition-transform">
                                    <Code2 className="w-8 h-8 text-indigo-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">1. Custom Web Development</h3>
                                <p className="text-lg font-medium text-indigo-600 mb-6">"Responsive, Fast, and SEO-Ready"</p>
                                <p className="text-slate-600 mb-8">
                                    Your website is your 24/7 digital storefront. We build high-performance websites that look great on every device and convert visitors into customers.
                                </p>

                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    <AccordionItem value="item-1" className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors">
                                        <AccordionTrigger className="text-slate-900 hover:text-indigo-600 hover:no-underline font-semibold text-left">Corporate Websites</AccordionTrigger>
                                        <AccordionContent className="text-slate-600">
                                            Professional, brand-aligned websites that establish authority and trust.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2" className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors">
                                        <AccordionTrigger className="text-slate-900 hover:text-indigo-600 hover:no-underline font-semibold text-left">Web Portals</AccordionTrigger>
                                        <AccordionContent className="text-slate-600">
                                            Secure customer log-in areas, intranets, and employee dashboards.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3" className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors">
                                        <AccordionTrigger className="text-slate-900 hover:text-indigo-600 hover:no-underline font-semibold text-left">E-Commerce Solutions</AccordionTrigger>
                                        <AccordionContent className="text-slate-600">
                                            Robust online stores with secure payment gateway integration.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4" className="border border-slate-200 rounded-lg px-4 bg-slate-50 hover:bg-white transition-colors">
                                        <AccordionTrigger className="text-slate-900 hover:text-indigo-600 hover:no-underline font-semibold text-left">Content Management Systems</AccordionTrigger>
                                        <AccordionContent className="text-slate-600">
                                            Easy-to-use platforms (like WordPress) for non-technical updates.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        {/* Solution 2 */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-1 lg:order-2 relative group">
                                <div className="absolute inset-0 bg-pink-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                                <img
                                    src={mobileImg}
                                    alt="Mobile App Development 3D Illustration"
                                    className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500"
                                />
                            </div>
                            <div className="order-2 lg:order-1">
                                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 -rotate-3 hover:-rotate-6 transition-transform">
                                    <Smartphone className="w-8 h-8 text-pink-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">2. Mobile App Development</h3>
                                <p className="text-lg font-medium text-pink-600 mb-6">"Engage Your Audience on the Go"</p>
                                <p className="text-slate-600 mb-8">
                                    Put your business in the palm of your customer’s hand. We develop native and hybrid mobile applications that deliver seamless user experiences across all platforms.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "iOS & Android Apps (Native)",
                                        "Cross-Platform (Flutter/React Native)",
                                        "Enterprise Mobility Apps",
                                        "App Store Deployment"
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-pink-50 p-4 rounded-xl border border-pink-100">
                                            <h4 className="font-semibold text-slate-900 text-sm mb-1">{item}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Solution 3 */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 relative group">
                                <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                                <img
                                    src={softwareImg}
                                    alt="Custom Software 3D Illustration"
                                    className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500"
                                />
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 rotate-3 hover:rotate-6 transition-transform">
                                    <Database className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">3. Custom Software & API Integration</h3>
                                <p className="text-lg font-medium text-blue-600 mb-6">"Solving Unique Business Challenges"</p>
                                <p className="text-slate-600 mb-8">
                                    When standard software doesn't fit, we build what you need. We also connect your existing systems so they talk to each other.
                                </p>

                                <ul className="space-y-4">
                                    {[
                                        "Bespoke Business Software (CRM, HR)",
                                        "API Integrations (Salesforce, Zoho)",
                                        "Legacy Modernization",
                                        "Cloud-Native Architecture"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Solution 4 */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-1 lg:order-2 relative group">
                                <div className="absolute inset-0 bg-teal-500/10 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                                <img
                                    src={designImg}
                                    alt="UI/UX Design 3D Illustration"
                                    className="relative w-full drop-shadow-2xl rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-500"
                                />
                            </div>
                            <div className="order-2 lg:order-1">
                                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 -rotate-3 hover:-rotate-6 transition-transform">
                                    <Palette className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">4. UI/UX Design</h3>
                                <p className="text-lg font-medium text-teal-600 mb-6">"Designed for Users, Built for Business"</p>
                                <p className="text-slate-600 mb-8">
                                    Great software must be easy to use. Our design team focuses on User Experience (UX) and User Interface (UI) to ensure your digital products are intuitive and engaging.
                                </p>

                                <ul className="space-y-4">
                                    {[
                                        "Prototyping & Wireframing (Figma)",
                                        "Brand Identity Alignment",
                                        "User Journey Mapping",
                                        "Accessibility Compliance"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lifecycle Section */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Development Lifecycle</h2>
                        <p className="text-slate-300">Agile, Transparent, and Secure</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center relative gap-8">
                        {/* Animated Line */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="hidden md:block absolute top-[2.5rem] left-0 h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 opacity-50 transform -translate-y-1/2"
                        />

                        {[
                            { icon: Layout, title: "Discovery", step: "01" },
                            { icon: Layers, title: "Design", step: "02" },
                            { icon: Terminal, title: "Dev", step: "03" },
                            { icon: CheckCircle2, title: "QA", step: "04" },
                            { icon: Rocket, title: "Launch", step: "05" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.3 }}
                                className="relative z-10 text-center group w-full md:w-auto"
                            >
                                <div className="w-20 h-20 mx-auto bg-slate-800 rounded-2xl border-2 border-slate-700 flex items-center justify-center mb-4 group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-all duration-300 shadow-xl">
                                    <item.icon className="w-8 h-8 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                                </div>
                                <div className="text-xs font-bold text-indigo-500 mb-1 tracking-widest uppercase">Step {item.step}</div>
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
                        <div className="p-6 bg-slate-800/50 rounded-lg">
                            <h4 className="font-bold text-white mb-2">Discovery & Strategy</h4>
                            <p className="text-slate-400 text-sm">We listen to your goals, analyze competitors, and define technical requirements.</p>
                        </div>
                        <div className="p-6 bg-slate-800/50 rounded-lg">
                            <h4 className="font-bold text-white mb-2">Development & Testing</h4>
                            <p className="text-slate-400 text-sm">Clean, scalable code. Rigorous testing for security and mobile responsiveness.</p>
                        </div>
                        <div className="p-6 bg-slate-800/50 rounded-lg">
                            <h4 className="font-bold text-white mb-2">Launch & Support</h4>
                            <p className="text-slate-400 text-sm">Deployment handling and continuous maintenance to keep software running.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Why Choose Enhance Tech?</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Security First (DevSecOps)", desc: "Apps that are secure by design, protecting data from the start." },
                            { title: "Integrated Approach", desc: "Expertise in AWS/Azure infrastructure for efficient hosting." },
                            { title: "Scalable Code", desc: "Clean code that allows your application to grow with you." },
                            { title: "Full-Cycle Partner", desc: "Hosting, maintenance, and updates - we handle it all." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 text-center">
                                <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-indigo-600 to-pink-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Vision?</h2>
                    <p className="text-lg text-indigo-100 mb-10">
                        Let’s create digital experiences that drive results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-indigo-600 font-bold hover:bg-white">
                                Start Your Project Today
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
