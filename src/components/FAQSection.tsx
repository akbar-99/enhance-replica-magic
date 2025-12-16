import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Boost Efficiency",
    tagline: "",
    answer:
      "Streamline Your Operations",
      "Eliminate IT bottlenecks and downtime with proactive monitoring and optimized systems that keep your teams working without interruption.",
  },
  {
    question: "Enable Scalability",
    tagline: "Grow Without Limits",
    answer:
      "Implement flexible cloud and infrastructure solutions that easily adapt and expand as your business evolves, ensuring you never outgrow your tech.",
  },
  {
    question: "Ensure Compliance",
    tagline: "Meet Industry Standards",
    answer:
      "Navigate complex regulations with confidence. We align your IT infrastructure with global standards to minimize risk and avoid penalties.",
  },
  {
    question: "Strengthen Security",
    tagline: "Fortify Your Defenses",
    answer:
      "Protect your critical assets with enterprise-grade cybersecurity that detects, prevents, and neutralizes threats before they impact your business.",
  },
  {
    question: "Stay Competitive",
    tagline: "Leverage Modern Technology",
    answer:
      "Stay ahead of the curve by adopting the latest digital tools and strategies that drive innovation and give you a market advantage.",
  },
  {
    question: "Optimize Cost",
    tagline: "Maximize Your ROI",
    answer:
      "Reduce unnecessary hardware and maintenance expenses with predictable pricing models and efficient resource management.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Title */}
          <div className="lg:sticky lg:top-24">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Why Leading Businesses
              <br />
              Choose Us
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We help businesses overcome IT downtime, security risks, lack of in-house expertise, and operational
              inefficiencies through strategic, scalable, and locally delivered IT solutions.
            </p>
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {faqs.map((faq, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
