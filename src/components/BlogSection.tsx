import { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Import 3D character images
import blogChar1 from '@/assets/blog/blog-character-1.jpg';
import blogChar2 from '@/assets/blog/blog-character-2.png';
import blogChar3 from '@/assets/blog/blog-character-3.png';
import blogChar4 from '@/assets/blog/blog-character-4.png';
import blogChar5 from '@/assets/blog/blog-character-5.png';
const blogPosts = [{
  id: 1,
  badge: "EnhanceTech",
  title: "Benefits of Microsoft's \"Hand Off\" Feature in Windows 11",
  headline: "Key Benefits Of Using Microsoft's Hand Off Feature In Windows 11",
  image: blogChar1,
  bgColor: "bg-amber-400"
}, {
  id: 2,
  badge: "EnhanceTech",
  title: "Benefits of IT Managed Services Plans for Growth",
  headline: "5 Powerful Benefits Of IT Managed Services Plans For Growth",
  image: blogChar2,
  bgColor: "bg-sky-500"
}, {
  id: 3,
  badge: "EnhanceTech",
  title: "Revolutionary Cloud Computing Trends to Watch in 2025",
  headline: "Revolutionary Cloud Computing Trends To Watch In 2025",
  image: blogChar3,
  bgColor: "bg-purple-500"
}, {
  id: 4,
  badge: "EnhanceTech",
  title: "Cybersecurity Best Practices for Small Businesses",
  headline: "Essential Cybersecurity Best Practices For Small Businesses",
  image: blogChar4,
  bgColor: "bg-emerald-500"
}, {
  id: 5,
  badge: "EnhanceTech",
  title: "How AI is Transforming IT Support Services",
  headline: "How AI Is Revolutionizing Modern IT Support Services",
  image: blogChar5,
  bgColor: "bg-indigo-600"
}];
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
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };
  return <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-start gap-8">
            <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-semibold tracking-wide w-fit shadow-lg shadow-primary/25">
              OUR BLOG
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Stories, Ideas <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">&</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Inspiration</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-sm lg:text-right text-lg leading-relaxed">
            Find inspirational content and expert advice on how to get the most out of your digital world
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button onClick={handlePrev} disabled={currentIndex === 0} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-16 z-10 w-14 h-14 rounded-full bg-white border-2 border-slate-200 shadow-xl flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100">
            <ChevronLeft className="w-7 h-7" />
          </button>
          
          <button onClick={handleNext} disabled={currentIndex >= maxIndex} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-16 z-10 w-14 h-14 rounded-full bg-white border-2 border-slate-200 shadow-xl flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100">
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Cards Container */}
          <div ref={containerRef} className="overflow-hidden mx-8 lg:mx-0">
            <div className="flex gap-8 transition-transform duration-700 ease-out" style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
          }}>
              {blogPosts.map((post, index) => <div key={post.id} className="flex-shrink-0" style={{
              width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 32 / visibleCards}px)`
            }} onMouseEnter={() => setIsHovered(index)} onMouseLeave={() => setIsHovered(null)}>
                  <div className="group cursor-pointer">
                    {/* Card Image Container */}
                    <div className={`relative rounded-[2rem] overflow-hidden mb-6 aspect-[4/3] ${post.bgColor} transition-all duration-500 ${isHovered === index ? 'scale-[1.02] shadow-2xl' : 'shadow-xl'}`}>
                      {/* Glass border effect */}
                      <div className="absolute inset-0 rounded-[2rem] border-4 border-white/20 z-10" />
                      <div className="absolute inset-[3px] rounded-[1.8rem] border border-white/30 z-10" />
                      
                      {/* 3D Character Image */}
                      <img src={post.image} alt={post.title} className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ${isHovered === index ? 'scale-110' : 'scale-100'}`} />
                      
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                      
                      {/* Badge */}
                      <div className="absolute top-5 left-5 z-20 inline-flex items-center px-4 py-2 rounded-lg backdrop-blur-md text-white text-sm font-semibold shadow-lg bg-transparent">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary mr-2.5 animate-pulse" />
                        {post.badge}
                      </div>
                      
                      {/* Title on image */}
                      <div className="absolute bottom-5 left-5 right-5 z-20">
                        <h3 className="text-white text-lg font-bold leading-tight drop-shadow-lg">
                          {post.title}
                        </h3>
                      </div>
                      
                      {/* Hover glow effect */}
                      <div className={`absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-500 ${isHovered === index ? 'opacity-100' : ''}`} />
                    </div>
                    
                    {/* Card Footer */}
                    <div className="flex items-start justify-between gap-4 px-2">
                      <h4 className="text-lg font-semibold text-slate-900 leading-tight group-hover:text-primary transition-colors duration-300">
                        {post.headline}
                      </h4>
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({
          length: maxIndex + 1
        }).map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`h-3 rounded-full transition-all duration-500 ${currentIndex === index ? 'bg-gradient-to-r from-primary to-cyan-500 w-10 shadow-lg shadow-primary/30' : 'bg-slate-300 w-3 hover:bg-slate-400'}`} />)}
        </div>
      </div>
    </section>;
};
export default BlogSection;