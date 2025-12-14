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
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
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
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden group transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 data-[state=open]:border-primary/40 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5"
                >
                  <AccordionTrigger className="px-6 py-5 text-slate-800 text-left font-medium text-base hover:no-underline hover:text-primary [&[data-state=open]]:text-primary [&[data-state=open]>svg]:rotate-180 [&>svg]:text-primary/60 [&>svg]:transition-transform [&>svg]:duration-300">
                    {faq.question}
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
