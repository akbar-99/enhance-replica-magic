import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Shield, Eye, Users, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: string;
  title: string;
  highlight: string;
  cta: string;
  ctaLink: string;
  stats: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  percentage: number;
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Uncover hidden data threats in minutes with a',
    highlight: 'free data risk assessment.',
    cta: 'Start Your Free Assessment',
    ctaLink: '/demo',
    percentage: 62.5,
    stats: [
      { label: 'EXTERNAL ACCESS', value: '17K', icon: <Globe className="w-3 h-3" /> },
      { label: 'PUBLIC LINK SHARING', value: '1.1K', icon: <Shield className="w-3 h-3" /> },
      { label: 'ANONYMOUS VIEWS', value: '95', icon: <Eye className="w-3 h-3" /> },
      { label: 'ORG-WIDE SHARING', value: '5K', icon: <Users className="w-3 h-3" /> },
      { label: 'OTHER ACCESS', value: '8.6M', icon: <Lock className="w-3 h-3" /> },
    ]
  },
  {
    id: '2',
    title: 'Protect your enterprise with our',
    highlight: 'Zero Trust Architecture.',
    cta: 'Explore Zero Trust',
    ctaLink: '/solutions',
    percentage: 78.3,
    stats: [
      { label: 'THREATS BLOCKED', value: '24K', icon: <Shield className="w-3 h-3" /> },
      { label: 'ENDPOINTS SECURED', value: '3.2K', icon: <Lock className="w-3 h-3" /> },
      { label: 'USERS PROTECTED', value: '850', icon: <Users className="w-3 h-3" /> },
      { label: 'GLOBAL COVERAGE', value: '45', icon: <Globe className="w-3 h-3" /> },
      { label: 'REAL-TIME ALERTS', value: '12K', icon: <Eye className="w-3 h-3" /> },
    ]
  },
  {
    id: '3',
    title: 'Industry-leading protection with',
    highlight: 'AI-powered security.',
    cta: 'See AI in Action',
    ctaLink: '/products',
    percentage: 94.7,
    stats: [
      { label: 'AI DETECTIONS', value: '45K', icon: <Eye className="w-3 h-3" /> },
      { label: 'FALSE POSITIVES', value: '0.2%', icon: <Shield className="w-3 h-3" /> },
      { label: 'RESPONSE TIME', value: '<1s', icon: <Lock className="w-3 h-3" /> },
      { label: 'MODELS TRAINED', value: '120', icon: <Globe className="w-3 h-3" /> },
      { label: 'ACCURACY RATE', value: '99.8%', icon: <Users className="w-3 h-3" /> },
    ]
  }
];

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % newsItems.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + newsItems.length) % newsItems.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const currentItem = newsItems[currentIndex];

  return (
    <section className="relative py-12 bg-gradient-to-b from-[hsl(210,50%,95%)] to-[hsl(210,60%,90%)]">
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Previous Button */}
          <button 
            onClick={prevSlide} 
            className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-[hsl(210,80%,35%)] flex items-center justify-center text-[hsl(210,80%,35%)] hover:bg-[hsl(210,80%,35%)] hover:text-white transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Main Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden" key={currentItem.id}>
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-normal text-[hsl(210,30%,30%)] leading-relaxed animate-fade-in">
                  {currentItem.title}{' '}
                  <span className="font-bold italic text-[hsl(210,80%,35%)]">{currentItem.highlight}</span>
                </h3>
                <Link 
                  to={currentItem.ctaLink} 
                  className="mt-6 inline-flex items-center gap-2 text-[hsl(210,80%,35%)] hover:text-[hsl(210,80%,25%)] font-semibold text-lg transition-colors group"
                >
                  {currentItem.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Analytics Panel */}
              <div className="lg:w-[400px] xl:w-[450px] bg-[hsl(210,20%,97%)] p-6 lg:p-8 border-l border-[hsl(210,20%,90%)]">
                <div className="flex gap-4">
                  {/* Gauge */}
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 lg:w-28 lg:h-28">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="hsl(210, 20%, 90%)"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="hsl(170, 70%, 45%)"
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${currentItem.percentage * 2.51} 251`}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg lg:text-xl font-bold text-[hsl(210,30%,20%)]">
                          {currentItem.percentage}%
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-center mt-2 text-[hsl(210,20%,50%)] font-medium">% Sensitive Files</p>
                  </div>

                  {/* Stats List */}
                  <div className="flex-1 space-y-2">
                    <p className="text-xs font-semibold text-[hsl(210,30%,30%)] mb-3">Access Level Breakdown</p>
                    {currentItem.stats.map((stat, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between text-xs animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center gap-2 text-[hsl(210,20%,50%)]">
                          {stat.icon}
                          <span className="uppercase tracking-wide">{stat.label}</span>
                        </div>
                        <span className="font-bold text-[hsl(210,30%,20%)]">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide} 
            className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-[hsl(210,80%,35%)] flex items-center justify-center text-[hsl(210,80%,35%)] hover:bg-[hsl(210,80%,35%)] hover:text-white transition-all duration-300 group"
          >
            <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[hsl(210,80%,35%)] w-8' 
                  : 'bg-[hsl(210,30%,70%)] hover:bg-[hsl(210,40%,55%)]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}