import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Layers, Rocket, Lock, BarChart3 } from "lucide-react";

const faqs = [
  {
    question: "Boost Efficiency",
    tagline: "Streamline Your Operations",
    icon: Zap,
    color: "text-amber-500",
    bgColor: "bg-amber-100/30",
    glowColor: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    answer:
      "Eliminate IT bottlenecks and downtime with proactive monitoring and optimized systems that keep your teams working without interruption.",
  },
  {
    question: "Enable Scalability",
    tagline: "Grow Without Limits",
    icon: Layers,
    color: "text-blue-500",
    bgColor: "bg-blue-100/30",
    glowColor: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
    answer:
      "Implement flexible cloud and infrastructure solutions that easily adapt and expand as your business evolves, ensuring you never outgrow your tech.",
  },
  {
    question: "Ensure Compliance",
    tagline: "Meet Industry Standards",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bgColor: "bg-emerald-100/30",
    glowColor: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    answer:
      "Navigate complex regulations with confidence. We align your IT infrastructure with global standards to minimize risk and avoid penalties.",
  },
  {
    question: "Strengthen Security",
    tagline: "Fortify Your Defenses",
    icon: Lock,
    color: "text-rose-500",
    bgColor: "bg-rose-100/30",
    glowColor: "group-hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]",
    answer:
      "Protect your critical assets with enterprise-grade cybersecurity that detects, prevents, and neutralizes threats before they impact your business.",
  },
  {
    question: "Stay Competitive",
    tagline: "Leverage Modern Tech",
    icon: Rocket,
    color: "text-purple-500",
    bgColor: "bg-purple-100/30",
    glowColor: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    answer:
      "Stay ahead of the curve by adopting the latest digital tools and strategies that drive innovation and give you a market advantage.",
  },
  {
    question: "Optimize Cost",
    tagline: "Maximize Your ROI",
    icon: BarChart3,
    color: "text-cyan-500",
    bgColor: "bg-cyan-100/30",
    glowColor: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
    answer:
      "Reduce unnecessary hardware and maintenance expenses with predictable pricing models and efficient resource management.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-cyan-100/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 inset-x-0 h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.05] text-slate-900">
              The{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
                Enhance Tech Difference
              </span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium opacity-80">
              We help businesses overcome IT downtime, security risks, lack of in-house expertise, and operational
              inefficiencies through strategic, scalable, and locally delivered IT solutions.
            </p>
          </motion.div>
        </div>

        {/* Layout for Accordion */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.slice(0, 3).map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className={`bg-white/60 backdrop-blur-md rounded-3xl border border-white/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)] overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${faq.glowColor}`}
                  >
                    <AccordionTrigger className="px-8 py-7 text-slate-900 hover:no-underline [&[data-state=open]>div>div:first-child]:scale-110 [&[data-state=open]>div>div:first-child]:bg-white [&[data-state=open]>svg]:rotate-180">
                      <div className="flex items-center gap-5 w-full">
                        <div className={`w-14 h-14 rounded-2xl ${faq.bgColor} flex items-center justify-center transition-all duration-500 shadow-inner group-hover:scale-110`}>
                          <faq.icon className={`w-7 h-7 ${faq.color}`} />
                        </div>
                        <div className="flex flex-col items-start gap-0.5">
                          <span className="font-bold text-xl tracking-tight">{faq.question}</span>
                          <span className="text-sm text-slate-400 font-semibold uppercase tracking-[0.1em]">{faq.tagline}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-7 pt-2 text-slate-500 text-base leading-relaxed font-medium">
                      <div className="pl-[76px]">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.slice(3, 6).map((faq, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index + 3}`}
                    className={`bg-white/60 backdrop-blur-md rounded-3xl border border-white/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)] overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${faq.glowColor}`}
                  >
                    <AccordionTrigger className="px-8 py-7 text-slate-900 hover:no-underline [&[data-state=open]>div>div:first-child]:scale-110 [&[data-state=open]>div>div:first-child]:bg-white [&[data-state=open]>svg]:rotate-180">
                      <div className="flex items-center gap-5 w-full">
                        <div className={`w-14 h-14 rounded-2xl ${faq.bgColor} flex items-center justify-center transition-all duration-500 shadow-inner group-hover:scale-110`}>
                          <faq.icon className={`w-7 h-7 ${faq.color}`} />
                        </div>
                        <div className="flex flex-col items-start gap-0.5">
                          <span className="font-bold text-xl tracking-tight">{faq.question}</span>
                          <span className="text-sm text-slate-400 font-semibold uppercase tracking-[0.1em]">{faq.tagline}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-7 pt-2 text-slate-500 text-base leading-relaxed font-medium">
                      <div className="pl-[76px]">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
