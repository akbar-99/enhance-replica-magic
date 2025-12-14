import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Link2, Eye, Users, Building2, Circle } from 'lucide-react';
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
  volumeData: number[];
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Uncover hidden data threats in minutes with a',
    highlight: 'free data risk assessment.',
    cta: 'Start Your Free Assessment',
    ctaLink: '/demo',
    percentage: 62.5,
    volumeData: [350000, 300000, 250000, 200000, 150000, 100000, 50000],
    stats: [
      { label: 'EXTERNAL ACCESS', value: '17K', icon: <Building2 className="w-3 h-3" /> },
      { label: 'PUBLIC LINK SHARING', value: '1.1K', icon: <Link2 className="w-3 h-3" /> },
      { label: 'ANONYMOUS VIEWS', value: '95', icon: <Eye className="w-3 h-3" /> },
      { label: 'ORG-WIDE SHARING', value: '5K', icon: <Building2 className="w-3 h-3" /> },
      { label: 'OTHER ACCESS', value: '8.6M', icon: <Circle className="w-3 h-3" /> },
    ]
  },
  {
    id: '2',
    title: 'Protect your enterprise with our',
    highlight: 'Zero Trust Architecture.',
    cta: 'Explore Zero Trust',
    ctaLink: '/solutions',
    percentage: 78.3,
    volumeData: [280000, 320000, 180000, 240000, 120000, 90000, 60000],
    stats: [
      { label: 'THREATS BLOCKED', value: '24K', icon: <Building2 className="w-3 h-3" /> },
      { label: 'ENDPOINTS SECURED', value: '3.2K', icon: <Link2 className="w-3 h-3" /> },
      { label: 'USERS PROTECTED', value: '850', icon: <Users className="w-3 h-3" /> },
      { label: 'GLOBAL COVERAGE', value: '45', icon: <Building2 className="w-3 h-3" /> },
      { label: 'REAL-TIME ALERTS', value: '12K', icon: <Circle className="w-3 h-3" /> },
    ]
  },
  {
    id: '3',
    title: 'Industry-leading protection with',
    highlight: 'AI-powered security.',
    cta: 'See AI in Action',
    ctaLink: '/products',
    percentage: 94.7,
    volumeData: [400000, 350000, 300000, 250000, 200000, 150000, 100000],
    stats: [
      { label: 'AI DETECTIONS', value: '45K', icon: <Eye className="w-3 h-3" /> },
      { label: 'FALSE POSITIVES', value: '0.2%', icon: <Building2 className="w-3 h-3" /> },
      { label: 'RESPONSE TIME', value: '<1s', icon: <Link2 className="w-3 h-3" /> },
      { label: 'MODELS TRAINED', value: '120', icon: <Building2 className="w-3 h-3" /> },
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

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const currentItem = newsItems[currentIndex];
  const maxVolume = Math.max(...currentItem.volumeData);

  return (
    <section className="relative py-16 bg-gradient-to-b from-[hsl(210,40%,92%)] to-[hsl(210,50%,85%)]">
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Previous Button */}
          <button 
            onClick={prevSlide} 
            className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-[hsl(215,70%,30%)] flex items-center justify-center text-[hsl(215,70%,30%)] hover:bg-[hsl(215,70%,30%)] hover:text-white transition-all duration-300 bg-transparent"
          >
            <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Main Card */}
          <div className="flex-1 bg-white rounded-xl shadow-2xl overflow-hidden" key={currentItem.id}>
            <div className="flex flex-col lg:flex-row min-h-[280px]">
              {/* Left Content */}
              <div className="flex-1 p-8 lg:p-12 lg:pr-8 flex flex-col justify-center">
                <h3 className="text-xl lg:text-2xl xl:text-[28px] font-light text-[hsl(215,30%,25%)] leading-relaxed">
                  {currentItem.title}{' '}
                  <span className="font-bold italic text-[hsl(215,70%,30%)]">{currentItem.highlight}</span>
                </h3>
                <Link 
                  to={currentItem.ctaLink} 
                  className="mt-6 inline-flex items-center gap-2 text-[hsl(215,70%,30%)] hover:text-[hsl(215,70%,20%)] font-bold text-base transition-colors group"
                >
                  {currentItem.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Analytics Panel - Dashboard Mockup */}
              <div className="lg:w-[480px] xl:w-[520px] bg-[hsl(220,15%,96%)] p-5 lg:p-6 flex items-center">
                <div className="w-full bg-white rounded-lg shadow-sm border border-[hsl(220,20%,92%)] p-4">
                  {/* Dashboard Header */}
                  <div className="flex gap-6 mb-4">
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-[hsl(215,30%,25%)] uppercase tracking-wider">% Sensitive Files</p>
                      <p className="text-[8px] text-[hsl(215,20%,55%)]">PII, PCI, PHI as % of total scanned</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-[hsl(215,30%,25%)] uppercase tracking-wider">Access Level Breakdown</p>
                      <p className="text-[8px] text-[hsl(215,20%,55%)]">Exposure types detected across scanned data.</p>
                    </div>
                    <div className="w-16">
                      <p className="text-[10px] font-bold text-[hsl(215,30%,25%)] uppercase tracking-wider text-right">Volume</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    {/* Gauge */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="relative w-20 h-20">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            stroke="hsl(220, 15%, 90%)"
                            strokeWidth="10"
                            fill="none"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            stroke="hsl(168, 76%, 42%)"
                            strokeWidth="10"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={`${currentItem.percentage * 2.39} 239`}
                            className="transition-all duration-1000 ease-out"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-base font-bold text-[hsl(215,30%,20%)]">
                            {currentItem.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats List */}
                    <div className="flex-1 space-y-1.5">
                      {currentItem.stats.map((stat, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between text-[10px]"
                        >
                          <span className="font-bold text-[hsl(215,30%,20%)] w-10">{stat.value}</span>
                          <div className="flex items-center gap-1.5 text-[hsl(215,20%,50%)] flex-1">
                            {stat.icon}
                            <span className="uppercase tracking-wide text-[9px]">{stat.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Volume Bar Chart */}
                    <div className="w-16 flex flex-col items-end">
                      <div className="flex items-end gap-0.5 h-20">
                        {currentItem.volumeData.map((value, index) => (
                          <div
                            key={index}
                            className="w-1.5 bg-[hsl(215,70%,30%)] rounded-t-sm transition-all duration-500"
                            style={{ 
                              height: `${(value / maxVolume) * 100}%`,
                              opacity: 0.3 + (index * 0.1)
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex flex-col text-right text-[7px] text-[hsl(215,20%,60%)] mt-1 space-y-0">
                        <span>350,000</span>
                        <span>200,000</span>
                        <span>50,000</span>
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide} 
            className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-[hsl(215,70%,30%)] flex items-center justify-center text-[hsl(215,70%,30%)] hover:bg-[hsl(215,70%,30%)] hover:text-white transition-all duration-300 bg-transparent"
          >
            <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Dots Indicator - Hidden for exact Forcepoint look */}
      </div>
    </section>
  );
}