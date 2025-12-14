import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import NewsAndTrustedSection from '@/components/NewsAndTrustedSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProtectDataSection from '@/components/ProtectDataSection';
import FAQSection from '@/components/FAQSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <NewsAndTrustedSection />
      <FeaturesSection />
      <ProtectDataSection />
      <FAQSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;