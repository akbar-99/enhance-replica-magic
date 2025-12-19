import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [
  {
    question: "Boost Efficiency",
    tagline: "",
    answer:
      "Streamline Your Operations Eliminate IT bottlenecks and downtime with proactive monitoring and optimized systems that keep your teams working without interruption.",
  },
  {
    question: "Enable Scalability",
    tagline: "",
    answer:
      " Grow Without Limits Implement flexible cloud and infrastructure solutions that easily adapt and expand as your business evolves, ensuring you never outgrow your tech.",
  },
  {
    question: "Ensure Compliance",
    tagline: "",
    answer:
      " Meet Industry Standards Navigate complex regulations with confidence. We align your IT infrastructure with global standards to minimize risk and avoid penalties.",
  },
  {
    question: "Strengthen Security",
    tagline: "",
    answer:
      "Fortify Your Defenses Protect your critical assets with enterprise-grade cybersecurity that detects, prevents, and neutralizes threats before they impact your business.",
  },
  {
    question: "Stay Competitive",
    tagline: "",
    answer:
      "Leverage Modern Technology Stay ahead of the curve by adopting the latest digital tools and strategies that drive innovation and give you a market advantage.",
  },
  {
    question: "Optimize Cost",
    tagline: "",
    answer:
      "Maximize Your ROI Reduce unnecessary hardware and maintenance expenses with predictable pricing models and efficient resource management.",
  },
];
const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top - Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            <span className="text-slate-900">The Enhance</span> <span className="text-primary">Tech Difference</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            We help businesses overcome IT downtime, security risks, lack of in-house expertise, and operational
            inefficiencies through strategic, scalable, and locally delivered IT solutions.
          </p>
        </div>

        {/* Bottom - Two Column Accordion */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Left Column - First 3 items */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, 3).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 shadow-[0_0_1px_1px_rgba(255,255,255,0.8),0_4px_24px_-4px_rgba(0,0,0,0.05)] overflow-hidden group transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_1px_1px_rgba(255,255,255,0.9),0_8px_32px_-4px_rgba(59,130,246,0.15)] data-[state=open]:border-primary/30 data-[state=open]:shadow-[0_0_1px_1px_rgba(255,255,255,0.9),0_8px_32px_-4px_rgba(59,130,246,0.15)]"
                >
                  <AccordionTrigger className="px-6 py-5 text-slate-800 text-left font-medium text-base hover:no-underline hover:text-primary [&[data-state=open]]:text-primary [&[data-state=open]>svg]:rotate-180 [&>svg]:text-primary/60 [&>svg]:transition-transform [&>svg]:duration-300">
                    <div className="flex flex-col items-start gap-1">
                      <span className="font-bold text-lg">{faq.question}</span>
                      <span className="text-sm text-slate-500 font-normal">{faq.tagline}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column - Last 3 items */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(3, 6).map((faq, index) => (
                <AccordionItem
                  key={index + 3}
                  value={`item-${index + 3}`}
                  className="bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 shadow-[0_0_1px_1px_rgba(255,255,255,0.8),0_4px_24px_-4px_rgba(0,0,0,0.05)] overflow-hidden group transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_1px_1px_rgba(255,255,255,0.9),0_8px_32px_-4px_rgba(59,130,246,0.15)] data-[state=open]:border-primary/30 data-[state=open]:shadow-[0_0_1px_1px_rgba(255,255,255,0.9),0_8px_32px_-4px_rgba(59,130,246,0.15)]"
                >
                  <AccordionTrigger className="px-6 py-5 text-slate-800 text-left font-medium text-base hover:no-underline hover:text-primary [&[data-state=open]]:text-primary [&[data-state=open]>svg]:rotate-180 [&>svg]:text-primary/60 [&>svg]:transition-transform [&>svg]:duration-300">
                    <div className="flex flex-col items-start gap-1">
                      <span className="font-bold text-lg">{faq.question}</span>
                      <span className="text-sm text-slate-500 font-normal">{faq.tagline}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
