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
import OptimizeCloudOperations from '@/pages/OptimizeCloudOperations';
import NetworkSecurity from '@/pages/NetworkSecurity';
import StopCyberThreats from '@/pages/solutions/StopCyberThreats';
import PreventDataLoss from '@/pages/solutions/PreventDataLoss';
import StreamlineITOperations from '@/pages/solutions/StreamlineITOperations';
import PhysicalSecurity from '@/pages/solutions/PhysicalSecurity';
import SmartMeetingRooms from '@/pages/solutions/SmartMeetingRooms';
import ManageMicrosoft365 from '@/pages/solutions/ManageMicrosoft365';
import ComputeStorage from '@/pages/solutions/ComputeStorage';
import News from '@/pages/News';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/products/:slug" element={<PageTransition><ProductDetail /></PageTransition>} />
        <Route path="/solutions" element={<PageTransition><Solutions /></PageTransition>} />
        <Route path="/solutions/optimize-cloud-operations" element={<PageTransition><OptimizeCloudOperations /></PageTransition>} />
        <Route path="/solutions/cloud-operations" element={<PageTransition><OptimizeCloudOperations /></PageTransition>} />
        <Route path="/solutions/network-security" element={<PageTransition><NetworkSecurity /></PageTransition>} />
        <Route path="/solutions/secure-network" element={<PageTransition><NetworkSecurity /></PageTransition>} />
        <Route path="/solutions/stop-cyber-threats" element={<PageTransition><StopCyberThreats /></PageTransition>} />
        <Route path="/solutions/cyber-threats" element={<PageTransition><StopCyberThreats /></PageTransition>} />
        <Route path="/solutions/prevent-data-loss" element={<PageTransition><PreventDataLoss /></PageTransition>} />
        <Route path="/solutions/streamline-it-operations" element={<PageTransition><StreamlineITOperations /></PageTransition>} />
        <Route path="/solutions/it-support" element={<PageTransition><StreamlineITOperations /></PageTransition>} />
        <Route path="/solutions/meeting-room-av" element={<PageTransition><SmartMeetingRooms /></PageTransition>} />
        <Route path="/solutions/meeting-spaces" element={<PageTransition><SmartMeetingRooms /></PageTransition>} />
        <Route path="/solutions/manage-microsoft-365" element={<PageTransition><ManageMicrosoft365 /></PageTransition>} />
        <Route path="/solutions/microsoft-365" element={<PageTransition><ManageMicrosoft365 /></PageTransition>} />
        <Route path="/solutions/physical-security" element={<PageTransition><PhysicalSecurity /></PageTransition>} />
        <Route path="/solutions/compute-storage" element={<PageTransition><ComputeStorage /></PageTransition>} />
        <Route path="/solutions/enterprise-hardware" element={<PageTransition><ComputeStorage /></PageTransition>} />
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
        <Route path="/news" element={<PageTransition><News /></PageTransition>} />
        <Route path="/demo" element={<PageTransition><Demo /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/use-cases" element={<PageTransition><Solutions /></PageTransition>} />
        <Route path="/learn-more" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/it-amc-quote" element={<PageTransition><ITAMCQuote /></PageTransition>} />
        <Route path="/managed-it-services" element={<PageTransition><ManagedITServices /></PageTransition>} />
        <Route path="/services/managed-it" element={<PageTransition><ManagedITServices /></PageTransition>} />
        <Route path="/services/infrastructure-deployment" element={<PageTransition><InfrastructureDeployment /></PageTransition>} />
        <Route path="/services/workplace-modernization" element={<PageTransition><WorkplaceModernization /></PageTransition>} />
        <Route path="/services/software-development" element={<PageTransition><SoftwareDevelopment /></PageTransition>} />
        <Route path="/services/software-web-development" element={<PageTransition><SoftwareDevelopment /></PageTransition>} />
        <Route path="/services/:slug" element={<PageTransition><ServiceLocation /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
