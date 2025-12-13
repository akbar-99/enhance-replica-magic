import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
interface NewsItem {
  id: string;
  title: string;
  highlight: string;
  cta: string;
  ctaLink: string;
  secondaryCta?: string;
  secondaryLink?: string;
}
const newsItems: NewsItem[] = [{
  id: '1',
  title: 'Enhance Tech Expands Self-Aware Data Security Platform to Enterprise Databases and Data Lakes with AI-Native DSPM',
  highlight: 'Enhance Tech Expands',
  cta: 'Get AI-Native DSPM',
  ctaLink: '/products/dspm',
  secondaryCta: 'Learn More',
  secondaryLink: '/news/dspm-expansion'
}, {
  id: '2',
  title: 'New Zero Trust Architecture Framework Released for Enterprise Customers',
  highlight: 'Zero Trust Architecture',
  cta: 'Explore Framework',
  ctaLink: '/solutions/zero-trust',
  secondaryCta: 'Read Whitepaper',
  secondaryLink: '/resources/whitepapers/zero-trust'
}, {
  id: '3',
  title: 'Enhance Tech Named Leader in Data Security Platform by Industry Analysts',
  highlight: 'Industry Recognition',
  cta: 'View Report',
  ctaLink: '/resources/analyst-report',
  secondaryCta: 'See Why',
  secondaryLink: '/company/about'
}];
export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % newsItems.length);
  };
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + newsItems.length) % newsItems.length);
  };
  const currentItem = newsItems[currentIndex];
  return <section className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-glow-cyan/20 py-8 my-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          {/* Previous Button */}
          <button onClick={prevSlide} className="flex-shrink-0 w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="flex-1 text-center space-y-4" key={currentItem.id}>
            <h3 className="text-lg md:text-xl font-semibold text-foreground animate-fade-in">
              <span className="text-primary">{currentItem.highlight}</span>{' '}
              {currentItem.title.replace(currentItem.highlight, '')}
            </h3>
            <div className="flex items-center justify-center gap-4">
              <Link to={currentItem.ctaLink} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
                {currentItem.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              {currentItem.secondaryCta && currentItem.secondaryLink && <Link to={currentItem.secondaryLink} className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground font-medium transition-colors">
                  {currentItem.secondaryCta}
                  <ArrowRight className="w-4 h-4" />
                </Link>}
            </div>
          </div>

          {/* Next Button */}
          <button onClick={nextSlide} className="flex-shrink-0 w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {newsItems.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-6' : 'bg-foreground/30 hover:bg-foreground/50'}`} />)}
        </div>
      </div>
    </section>;
}