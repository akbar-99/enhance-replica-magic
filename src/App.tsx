import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Partners from "./pages/Partners";
import Company from "./pages/Company";
import Demo from "./pages/Demo";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<Resources />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/:slug" element={<Partners />} />
          <Route path="/company" element={<Company />} />
          <Route path="/company/about" element={<Company />} />
          <Route path="/company/careers" element={<Company />} />
          <Route path="/company/contact" element={<Contact />} />
          <Route path="/company/news" element={<Company />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/use-cases" element={<Solutions />} />
          <Route path="/learn-more" element={<Products />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
