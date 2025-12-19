import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './PageTransition';

// Direct imports for instant page loads - better for SEO
import Index from '@/pages/Index';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Solutions from '@/pages/Solutions';
import SolutionDetail from '@/pages/SolutionDetail';
import Resources from '@/pages/Resources';
import Partners from '@/pages/Partners';
import Company from '@/pages/Company';
import Demo from '@/pages/Demo';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import ITAMCQuote from '@/pages/ITAMCQuote';
import ServiceLocation from '@/pages/ServiceLocation';
import ManagedITServices from '@/pages/ManagedITServices';
import InfrastructureDeployment from '@/pages/InfrastructureDeployment';
import WorkplaceModernization from '@/pages/WorkplaceModernization';
import SoftwareDevelopment from '@/pages/SoftwareDevelopment';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/products/:slug" element={<PageTransition><ProductDetail /></PageTransition>} />
        <Route path="/solutions" element={<PageTransition><Solutions /></PageTransition>} />
        <Route path="/solutions/:slug" element={<PageTransition><SolutionDetail /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
        <Route path="/resources/:slug" element={<PageTransition><Resources /></PageTransition>} />
        <Route path="/partners" element={<PageTransition><Partners /></PageTransition>} />
        <Route path="/partners/:slug" element={<PageTransition><Partners /></PageTransition>} />
        <Route path="/company" element={<PageTransition><Company /></PageTransition>} />
        <Route path="/company/about" element={<PageTransition><Company /></PageTransition>} />
        <Route path="/company/careers" element={<PageTransition><Company /></PageTransition>} />
        <Route path="/company/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/company/news" element={<PageTransition><Company /></PageTransition>} />
        <Route path="/demo" element={<PageTransition><Demo /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/use-cases" element={<PageTransition><Solutions /></PageTransition>} />
        <Route path="/learn-more" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/it-amc-quote" element={<PageTransition><ITAMCQuote /></PageTransition>} />
        <Route path="/managed-it-services" element={<PageTransition><ManagedITServices /></PageTransition>} />
        <Route path="/services/infrastructure-deployment" element={<PageTransition><InfrastructureDeployment /></PageTransition>} />
        <Route path="/services/workplace-modernization" element={<PageTransition><WorkplaceModernization /></PageTransition>} />
        <Route path="/services/software-web-development" element={<PageTransition><SoftwareDevelopment /></PageTransition>} />
        <Route path="/services/:slug" element={<PageTransition><ServiceLocation /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
