import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, FileText } from 'lucide-react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-primary via-primary/90 to-[hsl(var(--glow-cyan))] text-white py-3 px-4 shadow-lg shadow-primary/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="hidden sm:flex w-8 h-8 rounded-lg bg-white/20 items-center justify-center flex-shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <p className="text-sm font-medium truncate">
              <span className="hidden md:inline">🎉 Special Offer: </span>
              Get <span className="font-bold">20% OFF</span> on Annual IT Maintenance Contracts!
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              to="/it-amc-quote"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-primary text-sm font-semibold rounded-full hover:bg-white/90 transition-colors group"
            >
              Get Quote
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
