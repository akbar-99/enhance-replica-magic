import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-glow-purple/20 to-glow-cyan/20 animate-gradient" />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-glow-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4" />
          Start Your Journey Today
        </div>

        <h2 className="section-title text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Ready to Secure Your <br />
          <span className="glow-text-alt">Enterprise</span>?
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Join thousands of enterprises that trust Enhance Tech to protect their most sensitive data and accelerate their digital transformation.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Link 
            to="/demo" 
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-glow-cyan text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-glow-cyan opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            <span className="relative">Request a Demo</span>
            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            to="/contact" 
            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground/20 text-foreground font-semibold rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
          >
            Contact Sales
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Free 14-day trial
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Enterprise-grade security
          </div>
        </div>
      </div>
    </section>
  );
}
