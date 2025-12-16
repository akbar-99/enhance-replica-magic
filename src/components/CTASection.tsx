import { ArrowRight } from "lucide-react";
const CTASection = () => {
  return <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass-card p-12 text-center max-w-4xl mx-auto relative overflow-hidden bg-primary-foreground">
          {/* Background glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-30" style={{
          background: "radial-gradient(circle, hsl(300 100% 65% / 0.5) 0%, transparent 70%)"
        }} />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free consultation with our experts and discover how we can help your business grow with
              cutting-edge technology solutions.
            </p>
            <button className="btn-primary flex items-center gap-2 mx-auto text-primary-foreground">
              ​​Talk to an Expert <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;