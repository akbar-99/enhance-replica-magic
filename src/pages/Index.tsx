import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

// Lazy load below-the-fold sections
const NewsAndTrustedSection = lazy(() => import('@/components/NewsAndTrustedSection'));
const FeaturesSection = lazy(() => import('@/components/FeaturesSection'));
const ProtectDataSection = lazy(() => import('@/components/ProtectDataSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const BlogSection = lazy(() => import('@/components/BlogSection'));
const StatsSection = lazy(() => import('@/components/StatsSection'));
const CTASection = lazy(() => import('@/components/CTASection'));

const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <NewsAndTrustedSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FeaturesSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ProtectDataSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <BlogSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CTASection />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Index;