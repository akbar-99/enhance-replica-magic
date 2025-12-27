import HeroSection from '@/components/HeroSection';
import NewsCarousel from '@/components/NewsCarousel';

import NewsAndTrustedSection from '@/components/NewsAndTrustedSection';
import FeaturesSection from '@/components/FeaturesSection';
import OnboardingProcess from '@/components/OnboardingProcess';
import TrustedBy from '@/components/TrustedBy';
import ProtectDataSection from '@/components/ProtectDataSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import SEO, { organizationSchema, createFAQSchema } from '@/components/SEO';
import FloatingNavBar from '@/components/FloatingNavBar';

// FAQ data for structured data
const homeFAQs = [
  { question: "Boost Efficiency", answer: "Streamline Your Operations Eliminate IT bottlenecks and downtime with proactive monitoring and optimized systems that keep your teams working without interruption." },
  { question: "Enable Scalability", answer: "Grow Without Limits Implement flexible cloud and infrastructure solutions that easily adapt and expand as your business evolves, ensuring you never outgrow your tech." },
  { question: "Ensure Compliance", answer: "Meet Industry Standards Navigate complex regulations with confidence. We align your IT infrastructure with global standards to minimize risk and avoid penalties." },
  { question: "Strengthen Security", answer: "Fortify Your Defenses Protect your critical assets with enterprise-grade cybersecurity that detects, prevents, and neutralizes threats before they impact your business." },
  { question: "Stay Competitive", answer: "Leverage Modern Technology Stay ahead of the curve by adopting the latest digital tools and strategies that drive innovation and give you a market advantage." },
  { question: "Optimize Cost", answer: "Maximize Your ROI Reduce unnecessary hardware and maintenance expenses with predictable pricing models and efficient resource management." }
];

const Index = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...organizationSchema,
        "@type": ["Organization", "LocalBusiness"],
        "priceRange": "$$",
        "openingHours": "Mo-Fr 09:00-18:00",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.2048",
          "longitude": "55.2708"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150"
        }
      },
      createFAQSchema(homeFAQs),
      {
        "@type": "WebSite",
        "name": "ENHANCE TECH",
        "url": "https://itenhance.tech",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://itenhance.tech/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <SEO
        title="ENHANCE TECH | Enterprise IT Solutions & Cybersecurity in Dubai, UAE"
        description="Leading IT solutions provider in Dubai offering managed IT services, cybersecurity, cloud solutions, network security, and enterprise technology. Transform your business with ENHANCE TECH."
        keywords="IT solutions Dubai, cybersecurity UAE, managed IT services, cloud solutions, network security, enterprise technology, IT support Dubai"
        canonicalUrl="https://itenhance.tech"
        structuredData={homeSchema}
      />

      {/* Hero + overlapping News Carousel */}
      <div className="relative">
        <HeroSection />
        <div className="relative sm:absolute sm:inset-x-0 sm:bottom-0 sm:translate-y-1/2 z-30 mt-8 sm:mt-0">
          <NewsCarousel />
        </div>
      </div>

      <NewsAndTrustedSection />
      <FeaturesSection />
      <OnboardingProcess />
      <ProtectDataSection />
      <TrustedBy />
      <FAQSection />
      <StatsSection />
      <BlogSection />
      <CTASection />

      <FloatingNavBar />
    </main>
  );
};

export default Index;
