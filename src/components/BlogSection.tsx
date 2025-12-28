import { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Globe, Calendar } from "lucide-react";

// Import 3D character images
// Image paths for the new character images
const blogChar1 = "/lovable-uploads/blog-character-1.webp";
const blogChar2 = "/lovable-uploads/blog-character-2.webp";
const blogChar3 = "/lovable-uploads/blog-character-3.webp";
const blogChar4 = "/lovable-uploads/blog-character-4.webp";
const blogChar5 = "/lovable-uploads/blog-character-1.webp"; // Reusing first one for consistency
const blogPosts = [{
  id: 1,
  title: "Key Benefits Of Using Microsofts Hand Off Feature In Windows 11",
  description: "Discover how Microsoft's upcoming Hand Off feature in Windows 11 allows seamless work transitions between phone and PC.",
  image: blogChar1,
  author: "EnhanceTech",
  date: "October 10, 2025"
}, {
  id: 2,
  title: "5 Powerful Benefits Of IT Managed Services Plans For Growth",
  description: "Discover the top 5 benefits of IT Managed Services Plans and how they can boost productivity, enhance security, and reduce costs.",
  image: blogChar2,
  author: "EnhanceTech",
  date: "April 3, 2025"
}, {
  id: 3,
  title: "Revolutionary Cloud Computing Trends To Watch In 2025",
  description: "Discover the top cloud computing trends to Watch in 2025, including edge computing, hybrid cloud, serverless technology, and enhanced security.",
  image: blogChar3,
  author: "EnhanceTech",
  date: "March 26, 2025"
}, {
  id: 4,
  title: "Cybersecurity Best Practices For Small Businesses",
  description: "Learn essential cybersecurity strategies to protect your small business from threats and ensure data safety in an evolving digital landscape.",
  image: blogChar4,
  author: "EnhanceTech",
  date: "February 15, 2025"
}, {
  id: 5,
  title: "How AI Is Revolutionizing Modern IT Support Services",
  description: "Explore how artificial intelligence is transforming IT support with automated solutions, predictive maintenance, and enhanced user experiences.",
  image: blogChar5,
  author: "EnhanceTech",
  date: "January 20, 2025"
}];
const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(3);

  // Touch/swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;
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
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);
  const maxIndex = Math.max(0, blogPosts.length - visibleCards);

  // Auto-play rolling effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);
  const handlePrev = () => {
    setCurrentIndex(prev => prev === 0 ? maxIndex : prev - 1);
  };
  const handleNext = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsPaused(false);
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
    setIsPaused(false);
  };
  return <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 pb-2">
            Latest news & updates     <br />
             for your business.
          </h2>
          <p className="mt-4 text-muted-foreground text-base lg:text-lg max-w-1xl mx-auto">
            Technology moves fast—we help you keep up. Explore our latest articles to find simple explanations for
            complex tech and smart strategies to make your business run smoother every day.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button onClick={handlePrev} className="absolute left-0 top-[140px] -translate-x-2 lg:-translate-x-14 z-10 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button onClick={handleNext} className="absolute right-0 top-[140px] translate-x-2 lg:translate-x-14 z-10 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div ref={containerRef} className="overflow-hidden mx-8 lg:mx-0 touch-pan-y" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <div className="flex transition-transform duration-700 ease-out" style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            gap: visibleCards === 1 ? "0px" : "24px"
          }}>
              {blogPosts.map(post => <div key={post.id} className="flex-shrink-0" style={{
              width: visibleCards === 1 ? "100%" : `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 24 / visibleCards}px)`
            }}>
                  <div className="group cursor-pointer p-4 rounded-3xl border-2 bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-slate-100">
                    {/* Card Image Container */}
                    <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[4/3] border border-slate-200 group-hover:border-primary/20 transition-all duration-500 group-hover:shadow-lg">
                      <img src={post.image} alt={post.title} loading="lazy" decoding="async" className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-105" />
                      {/* Hover overlay effect */}

                    </div>

                    {/* Card Content */}
                    <div className="space-y-4 px-2">
                      {/* Title with Arrow */}
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg lg:text-xl font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h3>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-primary group-hover:text-white group-hover:bg-primary transition-all duration-300">
                          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>

                      {/* Author & Date */}
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1.5 text-primary font-medium">
                          <Globe className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1.5 text-primary font-medium">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{post.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BlogSection;