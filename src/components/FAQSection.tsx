import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "IT support helps you meet your business goals",
    answer: "We take time to understand how you work, how you use technology, and we make business recommendations to ensure technology helps you to succeed."
  },
  {
    question: "Fast response time",
    answer: "Our dedicated support team ensures rapid response to all your IT issues. With 24/7 monitoring and quick escalation procedures, we minimize downtime and keep your business running smoothly."
  },
  {
    question: "We ensure you are cyber secure",
    answer: "Our comprehensive security solutions protect your business from evolving cyber threats. We implement multi-layered security measures, regular audits, and employee training to keep your data safe."
  },
  {
    question: "Certified and experienced IT Support provider",
    answer: "Our team consists of certified professionals with years of experience across various industries. We hold certifications from Microsoft, Cisco, AWS, and other leading technology providers."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Title */}
          <div className="lg:sticky lg:top-24">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Asked Questions
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Why partner with<br />
              Enhance Tech for your<br />
              IT support?
            </h2>
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-slate-900 rounded-xl border-none overflow-hidden group transition-all duration-300 hover:bg-slate-800"
                >
                  <AccordionTrigger className="px-6 py-5 text-white text-left font-medium text-base hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-slate-400 [&>svg]:transition-transform [&>svg]:duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-slate-300 text-sm leading-relaxed">
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
