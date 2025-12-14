import { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    badge: "EnhanceTech",
    title: "Benefits of Microsoft's \"Hand Off\" Feature in Windows 11",
    headline: "Key Benefits Of Using Microsoft's Hand Off Feature In Windows 11",
    gradient: "from-purple-600 to-purple-400",
    accent: "bg-purple-500",
  },
  {
    id: 2,
    badge: "EnhanceTech",
    title: "Benefits of IT Managed Services Plans for Growth",
    headline: "5 Powerful Benefits Of IT Managed Services Plans For Growth",
    gradient: "from-cyan-400 to-cyan-300",
    accent: "bg-cyan-500",
  },
  {
    id: 3,
    badge: "EnhanceTech",
    title: "Revolutionary Cloud Computing Trends to Watch in 2025",
    headline: "Revolutionary Cloud Computing Trends To Watch In 2025",
    gradient: "from-orange-200 to-orange-100",
    accent: "bg-orange-400",
  },
  {
    id: 4,
    badge: "EnhanceTech",
    title: "Cybersecurity Best Practices for Small Businesses",
    headline: "Essential Cybersecurity Best Practices For Small Businesses",
    gradient: "from-emerald-500 to-emerald-300",
    accent: "bg-emerald-500",
  },
  {
    id: 5,
    badge: "EnhanceTech",
    title: "How AI is Transforming IT Support Services",
    headline: "How AI Is Revolutionizing Modern IT Support Services",
    gradient: "from-blue-500 to-indigo-400",
    accent: "bg-blue-500",
  },
];

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, blogPosts.length - visibleCards);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium w-fit">
              OUR BLOG
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Stories, Ideas <span className="text-primary">&</span>
              <br />
              <span className="text-primary">Inspiration</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-md lg:text-right">
            Find inspirational contents and expert advice on how to get the most out of your digital world
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div ref={containerRef} className="overflow-hidden mx-4 lg:mx-0">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {blogPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 24 / visibleCards}px)` }}
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="group cursor-pointer">
                    {/* Card Image */}
                    <div className={`relative rounded-3xl overflow-hidden mb-4 aspect-[4/3] bg-gradient-to-br ${post.gradient} p-6 transition-all duration-500 ${isHovered === index ? 'scale-[1.02] shadow-2xl' : 'shadow-lg'}`}>
                      {/* Glass border effect */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-white/20" />
                      
                      {/* Badge */}
                      <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-slate-900/80 backdrop-blur-sm text-white text-sm font-medium mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                        {post.badge}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-white text-xl font-bold leading-tight mb-auto">
                        {post.title}
                      </h3>
                      
                      {/* Website */}
                      <div className="absolute bottom-6 left-6 flex items-center text-white/80 text-sm">
                        <span className="w-4 h-4 rounded-full bg-white/30 mr-2" />
                        www.enhancetech.ae
                      </div>
                      
                      {/* Decorative element */}
                      <div className={`absolute top-1/2 right-6 w-20 h-20 rounded-full ${post.accent} opacity-30 blur-xl transition-all duration-500 ${isHovered === index ? 'scale-150' : ''}`} />
                    </div>
                    
                    {/* Card Footer */}
                    <div className="flex items-start justify-between gap-4 px-2">
                      <h4 className="text-lg font-semibold text-slate-900 leading-tight group-hover:text-primary transition-colors duration-300">
                        {post.headline}
                      </h4>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-primary w-6'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
