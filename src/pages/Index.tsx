import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import NewsCarousel from '@/components/NewsCarousel';
import TrustedBy from '@/components/TrustedBy';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <NewsCarousel />
      <TrustedBy />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
