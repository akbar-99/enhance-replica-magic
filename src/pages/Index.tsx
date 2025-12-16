import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import NewsCarousel from '@/components/NewsCarousel';
import Footer from '@/components/Footer';
import NewsAndTrustedSection from '@/components/NewsAndTrustedSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProtectDataSection from '@/components/ProtectDataSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import SEO, { organizationSchema } from '@/components/SEO';

const Index = () => {
  const homeSchema = {
    ...organizationSchema,
    "@type": ["Organization", "LocalBusiness"],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00"
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
      <Navbar />

      {/* Hero + overlapping News Carousel */}
      <div className="relative">
        <HeroSection />
        <div className="absolute inset-x-0 bottom-0 translate-y-1/2 z-30">
          <NewsCarousel />
        </div>
      </div>

      <NewsAndTrustedSection />
      <FeaturesSection />
      <ProtectDataSection />
      <FAQSection />
      <StatsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
