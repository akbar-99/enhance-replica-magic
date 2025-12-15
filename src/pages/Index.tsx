import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import NewsAndTrustedSection from '@/components/NewsAndTrustedSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProtectDataSection from '@/components/ProtectDataSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <NewsAndTrustedSection />
      <FeaturesSection />
      <ProtectDataSection />
      <FAQSection />
      <BlogSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
