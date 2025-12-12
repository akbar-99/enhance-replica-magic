import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-glow-cyan/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title text-foreground mb-6">
          Ready to Secure Your <span className="glow-text">Enterprise</span>?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of enterprises that trust Enhance Tech to protect their most sensitive data and accelerate their digital transformation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/demo" className="btn-primary">
            Request a Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact Sales
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
